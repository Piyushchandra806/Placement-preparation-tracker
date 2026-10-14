/**
 * ReminderContext — Client-side Provider for Daily Reminders & Web Push Notifications.
 *
 * Implements:
 * - Browser Notification permission detection & requests.
 * - Service worker registration & Web Push subscription management.
 * - Real-time in-app reminder drawer and unread badge.
 * - Missed-goal summary and carry-forward workflow.
 * - Graceful fallback when permissions are denied or unsupported.
 */
"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { useProgress } from "./ProgressContext";

const ReminderContext = createContext(null);

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function ReminderProvider({ children }) {
  const { isAuthenticated, refreshDashboard } = useProgress();

  const [permission, setPermission] = useState(() => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      return "unsupported";
    }
    return Notification.permission;
  });

  const [settings, setSettings] = useState({
    enabled: true,
    reminderTime: "20:30",
    endOfDayEnabled: true,
    endOfDayTime: "23:30",
    timezone: "Asia/Kolkata",
    hasPushSubscription: false,
    pushSubscriptionCount: 0,
  });

  const [tasksOverview, setTasksOverview] = useState({
    todayTotalCount: 5,
    todayPendingCount: 0,
    todayCompletedCount: 0,
    overdueCount: 0,
    todayPendingTasks: [],
    overdueTasks: [],
  });

  const [reminders, setReminders] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeMissedGoal, setActiveMissedGoal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Helper for auth headers
  const getHeaders = useCallback(() => {
    const headers = { "Content-Type": "application/json" };
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("mission90_token");
      if (token) headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  }, []);

  // Fetch reminder settings and pending tasks overview
  const fetchSettings = useCallback(async () => {
    try {
      const res = await fetch("/api/reminders/settings", { headers: getHeaders() });
      if (res.ok) {
        const data = await res.json();
        if (data.settings) setSettings(data.settings);
        if (data.tasksOverview) setTasksOverview(data.tasksOverview);
      }
    } catch (err) {
      console.warn("Could not fetch reminder settings:", err);
    }
  }, [getHeaders]);

  // Fetch in-app reminders
  const fetchReminders = useCallback(async () => {
    try {
      const res = await fetch("/api/reminders", { headers: getHeaders() });
      if (res.ok) {
        const data = await res.json();
        if (data.reminders) {
          setReminders(data.reminders);
          setUnreadCount(data.unreadCount || 0);

          // Check for unhandled end-of-day missed goal summary
          const missedGoal = data.reminders.find(
            (r) => r.type === "end_of_day_missed" && !r.carriedForward && !r.read
          );
          if (missedGoal) {
            setActiveMissedGoal(missedGoal);
          }
        }
      }
    } catch (err) {
      console.warn("Could not fetch reminders:", err);
    }
  }, [getHeaders]);

  // Sync settings and reminders on auth changes
  useEffect(() => {
    let isMounted = true;
    if (isAuthenticated) {
      const syncData = async () => {
        try {
          const headers = getHeaders();
          const [settingsRes, remindersRes] = await Promise.all([
            fetch("/api/reminders/settings", { headers }),
            fetch("/api/reminders", { headers }),
          ]);

          if (!isMounted) return;

          if (settingsRes.ok) {
            const data = await settingsRes.json();
            if (data.settings) setSettings(data.settings);
            if (data.tasksOverview) setTasksOverview(data.tasksOverview);
          }

          if (remindersRes.ok) {
            const data = await remindersRes.json();
            if (data.reminders) {
              setReminders(data.reminders);
              setUnreadCount(data.unreadCount || 0);

              const missedGoal = data.reminders.find(
                (r) => r.type === "end_of_day_missed" && !r.carriedForward && !r.read
              );
              if (missedGoal) {
                setActiveMissedGoal(missedGoal);
              }
            }
          }
        } catch (err) {
          console.warn("Could not sync reminder state:", err);
        }
      };

      syncData();
    }

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, getHeaders]);

  // Request browser notification permission and register service worker push
  const requestPermission = useCallback(async () => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      setStatusMessage({ type: "warning", text: "Notifications are not supported in this browser environment." });
      setPermission("unsupported");
      return "unsupported";
    }

    try {
      setLoading(true);
      const perm = await Notification.requestPermission();
      setPermission(perm);

      if (perm === "granted") {
        setStatusMessage({ type: "success", text: "Notification permission granted! Setting up push subscription..." });

        // Register Service Worker if supported
        if ("serviceWorker" in navigator && "PushManager" in window) {
          try {
            const registration = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
            await navigator.serviceWorker.ready;

            // Fetch VAPID public key
            const settingsRes = await fetch("/api/reminders/settings", { headers: getHeaders() });
            const settingsData = await settingsRes.json();
            const vapidKey = settingsData.vapidPublicKey;

            if (vapidKey) {
              const convertedVapidKey = urlBase64ToUint8Array(vapidKey);
              let subscription = await registration.pushManager.getSubscription();

              if (!subscription) {
                subscription = await registration.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: convertedVapidKey,
                });
              }

              // Send subscription to backend
              await fetch("/api/reminders/subscribe", {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify({
                  subscription,
                  device: navigator.userAgent || "Desktop Browser",
                }),
              });

              setStatusMessage({
                type: "success",
                text: "Web Push notifications active! Daily reminders scheduled for 8:30 PM.",
              });
              await fetchSettings();
            }
          } catch (swErr) {
            console.warn("Service worker push registration warning:", swErr);
            setStatusMessage({
              type: "info",
              text: "Permission granted! In-app notifications will alert you at 8:30 PM.",
            });
          }
        }
      } else if (perm === "denied") {
        setStatusMessage({
          type: "warning",
          text: "Browser notifications denied. In-app reminders will continue to alert you reliably.",
        });
      }
      return perm;
    } catch (err) {
      console.error("Failed to request notification permission:", err);
      setStatusMessage({ type: "error", text: "Could not request notification permission." });
      return "denied";
    } finally {
      setLoading(false);
    }
  }, [getHeaders, fetchSettings]);

  // Update notification settings
  const updateSettings = useCallback(
    async (newSettings) => {
      try {
        setLoading(true);
        const res = await fetch("/api/reminders/settings", {
          method: "PATCH",
          headers: getHeaders(),
          body: JSON.stringify(newSettings),
        });
        const data = await res.json();
        if (res.ok && data.settings) {
          setSettings((prev) => ({ ...prev, ...data.settings }));
          setStatusMessage({ type: "success", text: "Reminder preferences saved to MongoDB." });
        } else {
          throw new Error(data.error || "Failed to update settings");
        }
      } catch (err) {
        setStatusMessage({ type: "error", text: err.message });
      } finally {
        setLoading(false);
      }
    },
    [getHeaders]
  );

  // Trigger test reminder
  const triggerTestReminder = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/reminders/trigger", {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ type: "test" }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage({ type: "success", text: "Test reminder triggered! Check your notifications." });
        await fetchReminders();
        await fetchSettings();
      } else {
        throw new Error(data.error || "Could not trigger test reminder");
      }
    } catch (err) {
      setStatusMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  }, [getHeaders, fetchReminders, fetchSettings]);

  // Mark a reminder as read
  const markAsRead = useCallback(
    async (reminderId) => {
      try {
        await fetch(`/api/reminders/${reminderId}`, {
          method: "PATCH",
          headers: getHeaders(),
          body: JSON.stringify({ read: true }),
        });
        setReminders((prev) =>
          prev.map((r) => (r.id === reminderId || r._id === reminderId ? { ...r, read: true } : r))
        );
        setUnreadCount((prev) => Math.max(0, prev - 1));
      } catch (err) {
        console.warn("Could not mark reminder as read:", err);
      }
    },
    [getHeaders]
  );

  // Dismiss a reminder
  const dismissReminder = useCallback(
    async (reminderId) => {
      try {
        await fetch(`/api/reminders/${reminderId}`, {
          method: "PATCH",
          headers: getHeaders(),
          body: JSON.stringify({ dismissed: true }),
        });
        setReminders((prev) => prev.filter((r) => r.id !== reminderId && r._id !== reminderId));
        setUnreadCount((prev) => Math.max(0, prev - 1));
        if (activeMissedGoal && (activeMissedGoal.id === reminderId || activeMissedGoal._id === reminderId)) {
          setActiveMissedGoal(null);
        }
      } catch (err) {
        console.warn("Could not dismiss reminder:", err);
      }
    },
    [getHeaders, activeMissedGoal]
  );

  // Carry forward unfinished tasks
  const carryForward = useCallback(
    async (reminderId) => {
      try {
        setLoading(true);
        const res = await fetch("/api/reminders/carry-forward", {
          method: "POST",
          headers: getHeaders(),
          body: JSON.stringify({ reminderId }),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          setStatusMessage({ type: "success", text: data.message });
          setActiveMissedGoal(null);
          await fetchReminders();
          await fetchSettings();
          if (refreshDashboard) await refreshDashboard();
        } else {
          throw new Error(data.error || "Failed to carry forward tasks");
        }
      } catch (err) {
        setStatusMessage({ type: "error", text: err.message });
      } finally {
        setLoading(false);
      }
    },
    [getHeaders, fetchReminders, fetchSettings, refreshDashboard]
  );

  const value = useMemo(
    () => ({
      permission,
      isSupported: permission !== "unsupported",
      settings,
      tasksOverview,
      reminders,
      unreadCount,
      isDrawerOpen,
      setIsDrawerOpen,
      activeMissedGoal,
      setActiveMissedGoal,
      loading,
      statusMessage,
      setStatusMessage,
      requestPermission,
      updateSettings,
      triggerTestReminder,
      markAsRead,
      dismissReminder,
      carryForward,
      fetchSettings,
      fetchReminders,
    }),
    [
      permission,
      settings,
      tasksOverview,
      reminders,
      unreadCount,
      isDrawerOpen,
      activeMissedGoal,
      loading,
      statusMessage,
      requestPermission,
      updateSettings,
      triggerTestReminder,
      markAsRead,
      dismissReminder,
      carryForward,
      fetchSettings,
      fetchReminders,
    ]
  );

  return <ReminderContext.Provider value={value}>{children}</ReminderContext.Provider>;
}

export function useReminder() {
  const context = useContext(ReminderContext);
  if (!context) {
    throw new Error("useReminder must be used within a ReminderProvider");
  }
  return context;
}
