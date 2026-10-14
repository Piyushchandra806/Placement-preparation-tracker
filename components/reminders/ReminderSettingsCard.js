"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  Clock,
  ShieldCheck,
  ShieldAlert,
  Shield,
  ArrowRight,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Globe,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { useReminder } from "@/context/ReminderContext";

const TIMEZONES = [
  "Asia/Kolkata",
  "UTC",
  "America/New_York",
  "America/Los_Angeles",
  "America/Chicago",
  "Europe/London",
  "Europe/Paris",
  "Asia/Dubai",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Australia/Sydney",
];

export default function ReminderSettingsCard() {
  const router = useRouter();
  const {
    permission,
    isSupported,
    settings,
    tasksOverview,
    loading,
    statusMessage,
    requestPermission,
    updateSettings,
    triggerTestReminder,
    fetchSettings,
  } = useReminder();

  const [reminderTime, setReminderTime] = useState(settings.reminderTime || "20:30");
  const [endOfDayTime, setEndOfDayTime] = useState(settings.endOfDayTime || "23:30");
  const [endOfDayEnabled, setEndOfDayEnabled] = useState(settings.endOfDayEnabled ?? true);
  const [enabled, setEnabled] = useState(settings.enabled ?? true);
  const [timezone, setTimezone] = useState(settings.timezone || "Asia/Kolkata");
  const [saving, setSaving] = useState(false);

  // Detect local timezone
  const detectLocalTimezone = () => {
    try {
      const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (localTz) {
        setTimezone(localTz);
        handleSave({ timezone: localTz });
      }
    } catch {
      // ignore
    }
  };

  const handleToggleEnabled = async () => {
    const nextVal = !enabled;
    setEnabled(nextVal);
    await handleSave({ enabled: nextVal });
  };

  const handleToggleEndOfDay = async () => {
    const nextVal = !endOfDayEnabled;
    setEndOfDayEnabled(nextVal);
    await handleSave({ endOfDayEnabled: nextVal });
  };

  const handleSave = async (override = {}) => {
    setSaving(true);
    await updateSettings({
      enabled,
      reminderTime,
      endOfDayEnabled,
      endOfDayTime,
      timezone,
      ...override,
    });
    setSaving(false);
  };

  return (
    <div id="reminders" className="glass-card-static p-6 space-y-6 animate-fade-in-up">
      {/* Card Header & Master Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-black/[0.05]">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-2xs">
            <Bell size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                Daily Reminder System
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent)]">
                Mission 90
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              Default 8:30 PM reminder in your local timezone. Notifies you if today&apos;s tasks remain incomplete.
            </p>
          </div>
        </div>

        {/* Master Enable / Disable Switch */}
        <div className="flex items-center gap-3 self-end sm:self-center">
          <span className="text-xs font-semibold text-[var(--text-secondary)]">
            {enabled ? "Reminders Active" : "Reminders Paused"}
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={enabled}
            onClick={handleToggleEnabled}
            className={`w-12 h-7 rounded-full relative transition-colors duration-200 cursor-pointer p-0.5 ${
              enabled ? "bg-[var(--accent)]" : "bg-black/15"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-200 ${
                enabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Browser Notification Permission & Web Push Status */}
      <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/10 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                permission === "granted"
                  ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300"
                  : permission === "denied"
                  ? "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300"
                  : "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300"
              }`}
            >
              {permission === "granted" ? (
                <ShieldCheck size={18} />
              ) : permission === "denied" ? (
                <ShieldAlert size={18} />
              ) : (
                <Shield size={18} />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[var(--foreground)]">
                  Browser Notification Status:
                </span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    permission === "granted"
                      ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60"
                      : permission === "denied"
                      ? "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60"
                      : "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60"
                  }`}
                >
                  {permission === "granted"
                    ? "Granted (Web Push Ready)"
                    : permission === "denied"
                    ? "Denied (In-App Fallback)"
                    : "Default (Permission Needed)"}
                </span>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] dark:text-zinc-400 mt-0.5">
                {permission === "granted"
                  ? "Web Push notifications with Service Worker are active. You will receive notifications even if Mission 90 is closed."
                  : permission === "denied"
                  ? "Browser notifications were blocked. Mission 90 will reliably provide in-app reminder alerts and drawer notifications without interruption."
                  : "Allow browser notifications to receive scheduled daily reminders directly on your desktop or mobile device."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {permission !== "granted" && isSupported && (
              <button
                type="button"
                onClick={requestPermission}
                disabled={loading}
                className="py-1.5 px-3 rounded-xl bg-[var(--accent)] text-white text-xs font-bold hover:opacity-95 shadow-2xs transition-all disabled:opacity-50"
              >
                Request Permission
              </button>
            )}
            <button
              type="button"
              onClick={triggerTestReminder}
              disabled={loading}
              className="py-1.5 px-3 rounded-xl bg-white dark:bg-white/[0.08] border border-black/10 dark:border-white/15 text-xs font-semibold text-[var(--foreground)] hover:bg-black/[0.02] dark:hover:bg-white/[0.12] transition-colors flex items-center gap-1.5"
            >
              <Send size={12} className={loading ? "animate-spin text-[var(--accent)]" : "text-[var(--accent)]"} />
              <span>Test Reminder</span>
            </button>
          </div>
        </div>

        {/* Disclaimer / Fallback info */}
        <p className="text-[10px] text-[var(--text-tertiary)] dark:text-zinc-500 mt-3 pt-2.5 border-t border-black/[0.04] dark:border-white/10">
          Push notification delivery depends on browser and operating system permissions. In-app alerts remain guaranteed even when offline or push is unavailable.
        </p>
      </div>

      {/* Reminder Schedule & Timing Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Primary Reminder (Default 8:30 PM) */}
        <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[var(--accent)]" />
              <label htmlFor="reminderTimeInput" className="text-xs font-bold text-[var(--foreground)]">
                Daily Reminder Time
              </label>
            </div>
            <span className="text-[10px] font-bold text-[var(--accent)] bg-[var(--accent-bg)] px-2 py-0.5 rounded-full">
              Default 8:30 PM
            </span>
          </div>
          <p className="text-[11px] text-[var(--text-secondary)] dark:text-zinc-400 mb-3">
            Checks today&apos;s tasks. If any task is pending, triggers notification with pending count. If all complete, suppresses reminder.
          </p>

          <div className="flex items-center gap-2">
            <input
              id="reminderTimeInput"
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              onBlur={() => handleSave({ reminderTime })}
              className="px-3 py-2 rounded-xl bg-white dark:bg-white/[0.08] border border-black/15 dark:border-white/15 text-xs font-semibold text-[var(--foreground)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)]"
            />
            <span className="text-xs text-[var(--text-secondary)] dark:text-zinc-400 font-medium">
              ({timezone})
            </span>
          </div>
        </div>

        {/* End of Day Missed-Goal Reminder (Default 11:30 PM) */}
        <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-amber-600 dark:text-amber-400" />
              <label htmlFor="endOfDayTimeInput" className="text-xs font-bold text-[var(--foreground)]">
                End-of-Day Missed Target
              </label>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={endOfDayEnabled}
              onClick={handleToggleEndOfDay}
              className={`w-9 h-5 rounded-full relative transition-colors duration-200 cursor-pointer p-0.5 ${
                endOfDayEnabled ? "bg-amber-500" : "bg-black/15 dark:bg-white/20"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow-xs transition-transform duration-200 ${
                  endOfDayEnabled ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>
          <p className="text-[11px] text-[var(--text-secondary)] dark:text-zinc-400 mb-3">
            At day end, logs incomplete tasks, preserves completed task records, and offers carry-forward.
          </p>

          <div className="flex items-center gap-2">
            <input
              id="endOfDayTimeInput"
              type="time"
              disabled={!endOfDayEnabled}
              value={endOfDayTime}
              onChange={(e) => setEndOfDayTime(e.target.value)}
              onBlur={() => handleSave({ endOfDayTime })}
              className="px-3 py-2 rounded-xl bg-white dark:bg-white/[0.08] border border-black/15 dark:border-white/15 text-xs font-semibold text-[var(--foreground)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-40"
            />
            <span className="text-xs text-[var(--text-secondary)] dark:text-zinc-400 font-medium">
              (11:30 PM default)
            </span>
          </div>
        </div>
      </div>

      {/* Timezone Configuration */}
      <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 flex items-center justify-center flex-shrink-0">
            <Globe size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[var(--foreground)]">User Local Timezone</h4>
            <p className="text-[11px] text-[var(--text-secondary)] dark:text-zinc-400">
              All reminders calculate 8:30 PM precisely against your local zone.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={timezone}
            onChange={(e) => {
              setTimezone(e.target.value);
              handleSave({ timezone: e.target.value });
            }}
            className="px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-black/15 dark:border-white/15 text-xs font-semibold text-[var(--foreground)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)]"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={detectLocalTimezone}
            className="px-2.5 py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[11px] font-semibold text-[var(--text-secondary)] dark:text-zinc-300"
            title="Auto-detect timezone"
          >
            Auto-Detect
          </button>
        </div>
      </div>

      {/* Today's Pending & Overdue Tasks Summary + Direct Open Button */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-white via-white to-[var(--accent-bg)]/20 dark:from-white/[0.05] dark:via-white/[0.02] dark:to-[var(--accent-bg)]/20 border border-[var(--accent)]/20 dark:border-white/10 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Daily Task Monitor
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800/60">
                {tasksOverview.todayCompletedCount} Completed
              </span>
            </div>
            <h3 className="text-base font-bold mt-1 text-[var(--foreground)]">
              {tasksOverview.todayPendingCount > 0
                ? `${tasksOverview.todayPendingCount} tasks pending today (${tasksOverview.overdueCount} overdue)`
                : "All today's tasks completed! No reminders will be dispatched."}
            </h3>
          </div>

          {/* Open Today's Tasks Directly */}
          <button
            type="button"
            onClick={() => router.push("/#todays-mission")}
            className="py-2.5 px-4 rounded-xl bg-[var(--accent)] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-xs transition-all self-start sm:self-auto"
          >
            <span>Open Today&apos;s Tasks Directly</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Pending Tasks List Preview */}
        {tasksOverview.todayPendingTasks.length > 0 && (
          <div className="space-y-2 mt-3 pt-3 border-t border-black/[0.05] dark:border-white/10">
            <p className="text-[11px] font-semibold text-[var(--text-secondary)] dark:text-zinc-400">
              Pending for Today:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tasksOverview.todayPendingTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-2.5 rounded-xl bg-white dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/10 flex items-center justify-between text-xs"
                >
                  <div className="min-w-0 pr-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--accent)] px-1.5 py-0.5 rounded bg-[var(--accent-bg)] inline-block mb-0.5">
                      {task.subject}
                    </span>
                    <p className="font-medium truncate text-[var(--foreground)]">{task.title}</p>
                  </div>
                  <span className="text-[10px] text-[var(--text-tertiary)] dark:text-zinc-400 flex-shrink-0">
                    ~{task.estimatedMinutes}m
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Manual Save Indicator */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-[var(--text-tertiary)] dark:text-zinc-400">
          {saving ? "Saving preferences to MongoDB..." : "Settings automatically synchronize with MongoDB Atlas."}
        </span>
        <button
          type="button"
          onClick={() => handleSave()}
          disabled={saving}
          className="py-2 px-4 rounded-xl bg-black/[0.05] dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-xs font-semibold text-[var(--foreground)] transition-colors"
        >
          {saving ? "Saving..." : "Save Preferences"}
        </button>
      </div>
    </div>
  );
}
