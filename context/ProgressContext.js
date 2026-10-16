/**
 * ProgressContext — Global State Provider for Task Completion & Progress Tracking.
 *
 * Implements:
 * - Active authenticated session management (login, register, logout, demo login).
 * - Real-time task completion toggle (PATCH /api/tasks/:id) with optimistic UI updates.
 * - Automatic optimistic rollback and error alerts on network failure.
 * - Instant dashboard metric recalculation without full page reload.
 * - Weighted scoring (DSA: 45%, Quant: 15%, Reasoning: 15%, English: 15%, Revision: 10%).
 * - Today's mission tasks (Day 12) + Overdue pending tasks backlog.
 * - Live subject mastery breakdowns.
 */
"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { calculateWeightedDailyScore, groupTaskStatsByCategory } from "@/lib/scoring";
import { getDateForDayNumber } from "@/lib/activity-utils";

const ProgressContext = createContext(null);

const DEFAULT_STATS = {
  currentDay: 1,
  totalDays: 90,
  daysDone: 0,
  daysLeft: 89,
  startDate: "2026-10-14",
  currentDate: "2026-10-16",
  overallProgress: 0,
  streak: 0,
  currentStreak: 0,
  maxStreak: 0,
  totalActiveDays: 0,
  fullyCompletedDays: 0,
  totalTasks: 450,
  completedTasks: 0,
  pendingTasks: 450,
  overduePendingTasks: 0,
  dailyScore: 0,
  dailyCompletionPct: 0,
  totalStudyMinutes: 0,
  dailyActivity: {},
  categoryStats: {
    dsa: { total: 1, completed: 0, percentage: 0 },
    quant: { total: 1, completed: 0, percentage: 0 },
    reasoning: { total: 1, completed: 0, percentage: 0 },
    english: { total: 1, completed: 0, percentage: 0 },
    revision: { total: 1, completed: 0, percentage: 0 },
  },
  subjects: [
    { id: "dsa", name: "DSA in C++", accent: "#e8573a", totalTasks: 90, completedTasks: 0, progressPercentage: 0 },
    { id: "quant", name: "Quantitative Aptitude", accent: "#f59e42", totalTasks: 90, completedTasks: 0, progressPercentage: 0 },
    { id: "reasoning", name: "Logical Reasoning", accent: "#6c5ce7", totalTasks: 90, completedTasks: 0, progressPercentage: 0 },
    { id: "english", name: "English Speaking", accent: "#00b894", totalTasks: 90, completedTasks: 0, progressPercentage: 0 },
  ],
};

export function ProgressProvider({ children }) {
  // Authentication state (Session maintained securely in HTTP-only cookies, NEVER localStorage)
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Data state
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [todayTasks, setTodayTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatingTaskIds, setUpdatingTaskIds] = useState(new Set());
  const [errorMessage, setErrorMessage] = useState(null);
  const [successToast, setSuccessToast] = useState(null);

  // Helper for API headers — cookies are automatically attached by the browser
  const getHeaders = useCallback(() => {
    return { "Content-Type": "application/json" };
  }, []);

  // Clear toast after timeout
  useEffect(() => {
    if (successToast) {
      const timer = setTimeout(() => setSuccessToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [successToast]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  // Fetch dashboard data for authenticated user
  const refreshDashboard = useCallback(async () => {
    try {
      const headers = getHeaders();

      // 1. Fetch overall progress
      const overallRes = await fetch("/api/progress/overall", {
        headers,
        credentials: "same-origin",
      });
      if (!overallRes.ok) {
        if (overallRes.status === 401) {
          setUser(null);
          return;
        }
        throw new Error("Failed to load overall progress");
      }
      const overallData = await overallRes.json();
      if (overallData.success && overallData.stats) {
        setStats(overallData.stats);
        const day = overallData.stats.currentDay || 1;

        // 2. Fetch today's tasks
        const todayRes = await fetch(`/api/tasks?day=${day}&limit=50`, {
          headers,
          credentials: "same-origin",
        });
        if (todayRes.ok) {
          const todayData = await todayRes.json();
          if (todayData.tasks) {
            setTodayTasks(todayData.tasks);
          }
        }

        // 3. Fetch overdue pending tasks (before today)
        const pendingRes = await fetch(`/api/tasks?pending=true&beforeDay=${day}&limit=50`, {
          headers,
          credentials: "same-origin",
        });
        if (pendingRes.ok) {
          const pendingData = await pendingRes.json();
          if (pendingData.tasks) {
            setPendingTasks(pendingData.tasks);
          }
        }
      }
    } catch (err) {
      console.warn("Could not load remote dashboard data:", err);
    } finally {
      setIsLoading(false);
    }
  }, [getHeaders]);

  // Initial server-side session validation via HTTP-only cookie
  useEffect(() => {
    async function checkSession() {
      setIsAuthLoading(true);
      try {
        // Clean up legacy localStorage token if any existed
        if (typeof window !== "undefined") {
          localStorage.removeItem("mission90_token");
        }

        const res = await fetch("/api/auth/me", {
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin",
        });
        if (res.ok) {
          const data = await res.json();
          if (data?.user) {
            setUser(data.user);
            await refreshDashboard();
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (err) {
        console.warn("Session check error:", err);
        setUser(null);
      } finally {
        setIsAuthLoading(false);
        setIsLoading(false);
      }
    }

    checkSession();
  }, [refreshDashboard]);

  // Explicit Login action
  const login = useCallback(
    async (email, password) => {
      setIsAuthLoading(true);
      try {
        if (typeof window !== "undefined") {
          sessionStorage.removeItem("mission90_logged_out");
        }
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin",
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || data.error || "Login failed");
        }

        setUser(data.user);
        setIsAuthModalOpen(false);
        setSuccessToast(`Welcome back, ${data.user.name}!`);

        // Load fresh user data
        setTimeout(() => refreshDashboard(), 100);
        return { success: true };
      } catch (err) {
        setErrorMessage(err.message);
        return { success: false, error: err.message };
      } finally {
        setIsAuthLoading(false);
      }
    },
    [refreshDashboard]
  );

  // Explicit Register action
  const register = useCallback(
    async (name, email, password) => {
      setIsAuthLoading(true);
      try {
        if (typeof window !== "undefined") {
          sessionStorage.removeItem("mission90_logged_out");
        }
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin",
          body: JSON.stringify({ name, email, password }),
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || data.error || "Registration failed");
        }

        setUser(data.user);

        // Initialize independent 90-day study plan with complete curriculum
        try {
          await fetch("/api/study-plan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            body: JSON.stringify({ duration: 90, dailyStudyTarget: 4, seedCurriculum: true }),
          });
        } catch (planErr) {
          console.warn("Notice: study-plan auto-init:", planErr.message);
        }

        setIsAuthModalOpen(false);
        setSuccessToast(`Welcome to Mission 90, ${data.user.name}!`);
        setTimeout(() => refreshDashboard(), 100);
        return { success: true };
      } catch (err) {
        setErrorMessage(err.message);
        return { success: false, error: err.message };
      } finally {
        setIsAuthLoading(false);
      }
    },
    [refreshDashboard]
  );

  // Logout action
  const logout = useCallback(async () => {
    try {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("mission90_logged_out", "true");
        localStorage.removeItem("mission90_token");
      }
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "same-origin",
      });
    } catch {}
    setUser(null);
    setStats(DEFAULT_STATS);
    setTodayTasks([]);
    setPendingTasks([]);
    setSuccessToast("Logged out successfully");
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  }, []);

  /**
   * Main Task Completion Toggle Handler
   *
   * @param {string} taskId - Mongo ID of task
   * @param {boolean} targetCompleted - target state
   * @param {string} [taskSubject] - subject identifier
   */
  const toggleTask = useCallback(
    async (taskId, targetCompleted, taskSubject = null) => {
      if (!taskId) return;

      // 1. Save previous state for atomic rollback on failure
      const prevTodayTasks = [...todayTasks];
      const prevPendingTasks = [...pendingTasks];
      const prevStats = { ...stats };

      // 2. Optimistic UI update for Today Tasks
      const updatedToday = todayTasks.map((t) => {
        if (t.id === taskId || t._id === taskId) {
          return { ...t, completed: targetCompleted, completedAt: targetCompleted ? new Date().toISOString() : null };
        }
        return t;
      });

      // 3. Optimistic UI update for Pending Tasks
      const updatedPending = pendingTasks.map((t) => {
        if (t.id === taskId || t._id === taskId) {
          return { ...t, completed: targetCompleted, completedAt: targetCompleted ? new Date().toISOString() : null };
        }
        return t;
      });

      // 4. Optimistic daily score recalculation using exact weighted scoring
      const todayCategoryStats = groupTaskStatsByCategory(updatedToday);
      const optimisticDailyScore = calculateWeightedDailyScore(todayCategoryStats);
      const todayCompletedCount = updatedToday.filter((t) => t.completed).length;
      const optimisticTodayPct =
        updatedToday.length > 0 ? Math.round((todayCompletedCount / updatedToday.length) * 100) : 0;

      // 5. Optimistic overall stats
      const deltaCompleted = targetCompleted ? 1 : -1;
      const newCompletedTotal = Math.max(0, stats.completedTasks + deltaCompleted);
      const newPendingTotal = Math.max(0, stats.totalTasks - newCompletedTotal);
      const newOverallProgress =
        stats.totalTasks > 0 ? Math.round((newCompletedTotal / stats.totalTasks) * 100) : stats.overallProgress;

      // Optimistic subject stats
      const targetSubj = (taskSubject || "").toLowerCase();
      const updatedSubjects = stats.subjects.map((sub) => {
        const subId = sub.id === "aptitude" ? "quant" : sub.id;
        if (subId === targetSubj) {
          const comp = Math.max(0, sub.completedTasks + deltaCompleted);
          return {
            ...sub,
            completedTasks: comp,
            progressPercentage: sub.totalTasks > 0 ? Math.round((comp / sub.totalTasks) * 100) : sub.progressPercentage,
          };
        }
        return sub;
      });

      // Optimistic dailyActivity and streak metrics
      const targetTask =
        todayTasks.find((t) => t.id === taskId || t._id === taskId) ||
        pendingTasks.find((t) => t.id === taskId || t._id === taskId);
      const taskDayNumber = targetTask?.dayNumber || stats.currentDay || 1;
      const startDateStr = stats.startDate || "2026-10-14";
      const taskDateStr = getDateForDayNumber(startDateStr, taskDayNumber);

      const existingDay = (stats.dailyActivity && stats.dailyActivity[taskDateStr]) || {
        date: taskDateStr,
        dayNumber: taskDayNumber,
        totalTasks: 5,
        completedTasks: 0,
      };
      const dayTotal = existingDay.totalTasks || 5;
      const newDayCompleted = Math.max(
        0,
        Math.min(dayTotal, (existingDay.completedTasks || 0) + deltaCompleted)
      );
      const newIsFullyCompleted = dayTotal > 0 && newDayCompleted === dayTotal;
      const newHasActivity = newDayCompleted > 0;

      const optimisticDailyActivity = {
        ...(stats.dailyActivity || {}),
        [taskDateStr]: {
          ...existingDay,
          totalTasks: dayTotal,
          completedTasks: newDayCompleted,
          isFullyCompleted: newIsFullyCompleted,
          hasActivity: newHasActivity,
        },
      };

      const curDay = stats.currentDay || 1;
      let optActiveDays = 0;
      let optFullyCompletedDays = 0;
      for (let d = 1; d <= curDay; d++) {
        const dDate = getDateForDayNumber(startDateStr, d);
        const dAct = optimisticDailyActivity[dDate];
        if (dAct?.hasActivity) optActiveDays += 1;
        if (dAct?.isFullyCompleted) optFullyCompletedDays += 1;
      }

      const todayDateStr = getDateForDayNumber(startDateStr, curDay);
      const isTodayDone = optimisticDailyActivity[todayDateStr]?.isFullyCompleted;
      const streakStart = isTodayDone ? curDay : curDay - 1;
      let optStreak = 0;
      for (let d = streakStart; d >= 1; d--) {
        const dDate = getDateForDayNumber(startDateStr, d);
        if (optimisticDailyActivity[dDate]?.isFullyCompleted) {
          optStreak += 1;
        } else {
          break;
        }
      }

      let optMaxStreak = 0;
      let runningStreak = 0;
      for (let d = 1; d <= curDay; d++) {
        const dDate = getDateForDayNumber(startDateStr, d);
        if (optimisticDailyActivity[dDate]?.isFullyCompleted) {
          runningStreak += 1;
          if (runningStreak > optMaxStreak) optMaxStreak = runningStreak;
        } else {
          runningStreak = 0;
        }
      }

      // Apply optimistic state
      setTodayTasks(updatedToday);
      setPendingTasks(updatedPending);
      setStats((prev) => ({
        ...prev,
        dailyScore: optimisticDailyScore,
        dailyCompletionPct: optimisticTodayPct,
        categoryStats: todayCategoryStats,
        completedTasks: newCompletedTotal,
        pendingTasks: newPendingTotal,
        overallProgress: newOverallProgress,
        subjects: updatedSubjects,
        dailyActivity: optimisticDailyActivity,
        totalActiveDays: optActiveDays,
        fullyCompletedDays: optFullyCompletedDays,
        streak: optStreak,
        currentStreak: optStreak,
        maxStreak: Math.max(prev.maxStreak || 0, optMaxStreak),
      }));

      // Track active updating state
      setUpdatingTaskIds((prev) => new Set([...prev, taskId]));

      // 6. Network persistence to MongoDB Atlas
      try {
        const headers = getHeaders();
        const res = await fetch(`/api/tasks/${taskId}`, {
          method: "PATCH",
          headers,
          body: JSON.stringify({ completed: targetCompleted }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || errData.error || `Server returned ${res.status}`);
        }

        const data = await res.json();

        // 7. Reconcile with authoritative server recalculations
        if (data.overallStats) {
          setStats((prev) => ({
            ...prev,
            ...data.overallStats,
            subjects: (data.overallStats.subjects || []).map((s) => ({
              id: s.id || s.subject,
              name:
                s.name ||
                (s.subject === "dsa"
                  ? "DSA in C++"
                  : s.subject === "quant"
                  ? "Quantitative Aptitude"
                  : s.subject === "reasoning"
                  ? "Logical Reasoning"
                  : s.subject === "english"
                  ? "English Speaking"
                  : "Revision"),
              accent:
                s.accent ||
                (s.subject === "dsa"
                  ? "#e8573a"
                  : s.subject === "quant"
                  ? "#f59e42"
                  : s.subject === "reasoning"
                  ? "#6c5ce7"
                  : "#00b894"),
              totalTasks: s.totalTasks,
              completedTasks: s.completedTasks,
              progressPercentage: s.progressPercentage,
            })),
          }));
        }

        setSuccessToast(targetCompleted ? "Task completed! Score updated ✓" : "Task marked incomplete");
      } catch (networkError) {
        // 8. Atomic Rollback on network failure
        console.error("Task update network failure; rolling back state:", networkError);
        setTodayTasks(prevTodayTasks);
        setPendingTasks(prevPendingTasks);
        setStats(prevStats);
        setErrorMessage(`Network error: could not update task (${networkError.message}). Changes rolled back.`);
      } finally {
        setUpdatingTaskIds((prev) => {
          const next = new Set(prev);
          next.delete(taskId);
          return next;
        });
      }
    },
    [todayTasks, pendingTasks, stats, getHeaders]
  );

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isAuthLoading,
      isAuthModalOpen,
      setIsAuthModalOpen,
      login,
      register,
      logout,
      stats,
      todayTasks,
      pendingTasks,
      isLoading,
      updatingTaskIds,
      errorMessage,
      successToast,
      toggleTask,
      refreshDashboard,
    }),
    [
      user,
      isAuthLoading,
      isAuthModalOpen,
      login,
      register,
      logout,
      stats,
      todayTasks,
      pendingTasks,
      isLoading,
      updatingTaskIds,
      errorMessage,
      successToast,
      toggleTask,
      refreshDashboard,
    ]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
