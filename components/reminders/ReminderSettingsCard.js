"use client";

import { useState } from "react";
import {
  Bell,
  Clock,
  ShieldCheck,
  ShieldAlert,
  Shield,
  Send,
  Calendar,
  Globe,
  ChevronRight,
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
  const {
    permission,
    isSupported,
    settings,
    loading,
    requestPermission,
    updateSettings,
    triggerTestReminder,
  } = useReminder();

  const [reminderTime, setReminderTime] = useState(settings.reminderTime || "20:30");
  const [endOfDayTime, setEndOfDayTime] = useState(settings.endOfDayTime || "23:30");
  const [endOfDayEnabled, setEndOfDayEnabled] = useState(settings.endOfDayEnabled ?? true);
  const [enabled, setEnabled] = useState(settings.enabled ?? true);
  const [timezone, setTimezone] = useState(settings.timezone || "Asia/Kolkata");
  const [saving, setSaving] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div id="reminders" className="glass-card-static p-4 sm:p-5 animate-fade-in-up transition-all">
      {/* Card Header — Clickable Accordion Row */}
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex items-center justify-between gap-3 cursor-pointer select-none group"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-2xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
            <Bell size={20} />
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-bold tracking-tight text-[var(--foreground)] truncate">
              Daily Reminders
            </h2>
            <p className="text-xs text-[var(--text-secondary)] dark:text-zinc-400 truncate">
              Alerts for pending tasks
            </p>
          </div>
        </div>

        {/* Master Switch & Expand Chevron */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div
            className="flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-400">
              {enabled ? "On" : "Off"}
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={enabled}
              aria-label="Toggle daily reminders"
              onClick={handleToggleEnabled}
              className={`w-11 h-6 rounded-full relative transition-colors duration-200 cursor-pointer p-0.5 ${
                enabled ? "bg-[var(--accent)]" : "bg-black/15 dark:bg-white/20"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                  enabled ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <ChevronRight
            size={18}
            className={`text-[var(--text-tertiary)] transition-transform duration-200 ${
              isExpanded ? "rotate-90 text-[var(--foreground)]" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {/* Expandable Section: Web Push, Time Adjustment, Timezone */}
      {isExpanded && (
        <div className="pt-4 mt-4 border-t border-black/[0.05] dark:border-white/10 space-y-3.5 animate-fade-in">

      {/* Push Status Row (Clean & Compact) */}
      <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
              permission === "granted"
                ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300"
                : permission === "denied"
                ? "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300"
                : "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300"
            }`}
          >
            {permission === "granted" ? (
              <ShieldCheck size={16} />
            ) : permission === "denied" ? (
              <ShieldAlert size={16} />
            ) : (
              <Shield size={16} />
            )}
          </div>
          <div className="flex items-center gap-2 truncate">
            <span className="text-xs font-bold text-[var(--foreground)]">
              Web Push
            </span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                permission === "granted"
                  ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60"
                  : permission === "denied"
                  ? "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60"
                  : "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60"
              }`}
            >
              {permission === "granted"
                ? "Active"
                : permission === "denied"
                ? "Blocked"
                : "Not Enabled"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {permission !== "granted" && isSupported && (
            <button
              type="button"
              onClick={requestPermission}
              disabled={loading}
              className="py-1.5 px-3 rounded-xl bg-[var(--accent)] text-white text-xs font-bold hover:opacity-95 shadow-2xs transition-all disabled:opacity-50 cursor-pointer"
            >
              Enable
            </button>
          )}
          <button
            type="button"
            onClick={triggerTestReminder}
            disabled={loading}
            className="py-1.5 px-3 rounded-xl bg-white dark:bg-white/[0.08] border border-black/10 dark:border-white/15 text-xs font-semibold text-[var(--foreground)] hover:bg-black/[0.02] dark:hover:bg-white/[0.12] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Send size={12} className={loading ? "animate-spin text-[var(--accent)]" : "text-[var(--accent)]"} />
            <span>Test</span>
          </button>
        </div>
      </div>

      {/* Timing Settings (2 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Daily Reminder Time */}
        <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Clock size={15} className="text-[var(--accent)]" />
              <label htmlFor="reminderTimeInput" className="text-xs font-bold text-[var(--foreground)]">
                Reminder Time
              </label>
            </div>
            <span className="text-[10px] font-bold text-[var(--accent)] bg-[var(--accent-bg)] px-2 py-0.5 rounded-full">
              8:30 PM
            </span>
          </div>
          <input
            id="reminderTimeInput"
            type="time"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            onBlur={() => handleSave({ reminderTime })}
            className="w-full px-3 py-2 rounded-xl bg-white dark:bg-white/[0.08] border border-black/15 dark:border-white/15 text-xs font-semibold text-[var(--foreground)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        {/* End of Day Review */}
        <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Calendar size={15} className="text-amber-600 dark:text-amber-400" />
              <label htmlFor="endOfDayTimeInput" className="text-xs font-bold text-[var(--foreground)]">
                End-of-Day Review
              </label>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={endOfDayEnabled}
              onClick={handleToggleEndOfDay}
              className={`w-8 h-4.5 rounded-full relative transition-colors duration-200 cursor-pointer p-0.5 ${
                endOfDayEnabled ? "bg-amber-500" : "bg-black/15 dark:bg-white/20"
              }`}
            >
              <div
                className={`w-3.5 h-3.5 rounded-full bg-white shadow-xs transition-transform duration-200 ${
                  endOfDayEnabled ? "translate-x-3.5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
          <input
            id="endOfDayTimeInput"
            type="time"
            disabled={!endOfDayEnabled}
            value={endOfDayTime}
            onChange={(e) => setEndOfDayTime(e.target.value)}
            onBlur={() => handleSave({ endOfDayTime })}
            className="w-full px-3 py-2 rounded-xl bg-white dark:bg-white/[0.08] border border-black/15 dark:border-white/15 text-xs font-semibold text-[var(--foreground)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-40"
          />
        </div>
      </div>

      {/* Timezone Configuration */}
      <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Globe size={16} className="text-purple-600 dark:text-purple-300 flex-shrink-0" />
          <span className="text-xs font-bold text-[var(--foreground)]">Timezone</span>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={timezone}
            onChange={(e) => {
              setTimezone(e.target.value);
              handleSave({ timezone: e.target.value });
            }}
            className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-black/15 dark:border-white/15 text-xs font-semibold text-[var(--foreground)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)]"
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
            className="px-2.5 py-1.5 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[11px] font-semibold text-[var(--text-secondary)] dark:text-zinc-300 cursor-pointer"
            title="Auto-detect timezone"
          >
            Auto
          </button>
        </div>
      </div>

      {/* Clean Save Action */}
      <div className="flex items-center justify-end pt-1">
        <button
          type="button"
          onClick={() => handleSave()}
          disabled={saving}
          className="py-2 px-4 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-xs font-bold hover:opacity-90 transition-all cursor-pointer shadow-xs disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Preferences"}
        </button>
      </div>
        </div>
      )}
    </div>
  );
}
