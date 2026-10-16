"use client";

import { useSyncExternalStore, useState, useEffect } from "react";
import { Bell, Calendar, Trophy, Sun, Moon } from "lucide-react";
import ProgressRing from "@/components/ui/ProgressRing";
import StatCard from "@/components/ui/StatCard";
import { useProgress } from "@/context/ProgressContext";
import { useReminder } from "@/context/ReminderContext";

const emptySubscribe = () => () => {};

function ClientOnly({ children }) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) return null;

  const now = new Date();
  return typeof children === "function" ? children(now) : children;
}

function ClientDate({ className = "" }) {
  return (
    <ClientOnly>
      {(now) => (
        <div
          className={`flex items-center gap-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-semibold bg-white/70 dark:bg-white/[0.06] px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 whitespace-nowrap shadow-2xs ${className}`}
        >
          <Calendar size={13} />
          <span>
            {now.toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      )}
    </ClientOnly>
  );
}

function ClientGreeting() {
  return (
    <ClientOnly>
      {(now) => {
        const hour = now.getHours();
        const greeting =
          hour < 12
            ? "Good morning"
            : hour < 17
            ? "Good afternoon"
            : "Good evening";
        return (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">{greeting},</p>
        );
      }}
    </ClientOnly>
  );
}

export default function DashboardHeader() {
  const { user, stats } = useProgress();
  const { unreadCount, setIsDrawerOpen } = useReminder();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDarkMode(
        document.documentElement.classList.contains("dark") ||
        localStorage.getItem("mission90_theme") === "dark"
      );
    };
    checkDark();

    window.addEventListener("storage", checkDark);
    return () => window.removeEventListener("storage", checkDark);
  }, []);

  const toggleDarkMode = () => {
    const nextState = !isDarkMode;
    setIsDarkMode(nextState);
    if (typeof window !== "undefined") {
      if (nextState) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("mission90_theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("mission90_theme", "light");
      }
    }
  };

  return (
    <div className="animate-fade-in-up">
      {/* Top row — branding + date + bell (mobile only) */}
      <div className="flex items-center justify-between mb-2 lg:hidden">
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Mission <span className="text-[var(--accent)]">90</span>
          </h1>
          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
            Your 90-Day Placement Journey
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* Real date pill before reminder bell */}
          <ClientDate className="text-[11px] px-2.5 py-1" />

          {/* Reminder Bell */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/60 dark:bg-white/[0.06] backdrop-blur flex items-center justify-center border border-black/[0.06] dark:border-white/10 hover:bg-white dark:hover:bg-white/[0.12] transition-all shadow-2xs flex-shrink-0"
            aria-label="Daily Reminders & Notifications"
            title="Daily Reminders & Notifications"
          >
            <Bell size={18} className="text-[var(--foreground)]" />
            {unreadCount > 0 ? (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-4 text-[10px] font-bold bg-[var(--accent)] text-white rounded-full flex items-center justify-center shadow-xs">
                {unreadCount}
              </span>
            ) : (
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-emerald-500 rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Welcome, Live Date & Controls */}
      <div className="flex items-center justify-between mt-3 mb-4">
        <div>
          <ClientGreeting />
          <h2 className="text-2xl font-bold tracking-tight">
            {user?.name || "Piyush"} 👋
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <ClientDate className="hidden lg:flex" />

          {/* Theme Toggle Button */}
          <button
            type="button"
            role="switch"
            aria-checked={isDarkMode}
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground)] bg-white/60 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] px-2.5 py-1.5 rounded-full border border-black/[0.06] dark:border-white/10 transition-all shadow-2xs cursor-pointer select-none"
            aria-label="Toggle dark mode"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun size={14} className="text-amber-400" />
            ) : (
              <Moon size={14} className="text-zinc-700 dark:text-zinc-300" />
            )}
            <div
              className={`w-8 h-4.5 rounded-full relative transition-colors duration-200 p-0.5 ${
                isDarkMode ? "bg-[var(--accent)]" : "bg-black/15 dark:bg-white/20"
              }`}
            >
              <div
                className={`w-3.5 h-3.5 rounded-full bg-white shadow-xs transition-transform duration-200 ${
                  isDarkMode ? "translate-x-3.5" : "translate-x-0"
                }`}
              />
            </div>
          </button>

          {/* Reminders Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="hidden sm:flex relative items-center gap-1.5 text-xs font-semibold text-[var(--foreground)] bg-white/60 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] px-3 py-1.5 rounded-full border border-black/[0.06] dark:border-white/10 transition-all shadow-2xs cursor-pointer"
            aria-label="Daily Reminders & Notifications"
            title="Daily Reminders & Notifications"
          >
            <Bell size={13} className="text-[var(--accent)]" />
            <span>Reminders</span>
            {unreadCount > 0 && (
              <span className="px-1.5 py-0.2 bg-[var(--accent)] text-white rounded-full text-[10px] font-bold">
                {unreadCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Today's Score & Daily Completion Banner */}
      <div className="glass-card p-4 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[var(--accent)]/20 bg-gradient-to-r from-white/90 via-white/80 to-[var(--accent-bg)]/30 dark:from-white/[0.05] dark:via-white/[0.02] dark:to-[var(--accent-bg)]/20">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[var(--accent)] text-white flex items-center justify-center shadow-sm flex-shrink-0">
            <Trophy size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                Today&apos;s Daily Score
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent)]">
                Weighted
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <p className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                {stats.dailyScore} <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">/ 100</span>
              </p>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/60">
                {stats.dailyCompletionPct}% Done Today
              </span>
            </div>
          </div>
        </div>

        {/* Weights indicator tooltip/pill */}
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-zinc-700 dark:text-zinc-200 flex-wrap">
          <span className="px-2 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] border border-black/[0.04] dark:border-white/10">DSA: 45%</span>
          <span className="px-2 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] border border-black/[0.04] dark:border-white/10">Quant: 15%</span>
          <span className="px-2 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] border border-black/[0.04] dark:border-white/10">Reasoning: 15%</span>
          <span className="px-2 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] border border-black/[0.04] dark:border-white/10">English: 15%</span>
          <span className="px-2 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] border border-black/[0.04] dark:border-white/10">Revision: 10%</span>
        </div>
      </div>

      {/* Progress section: Ring + Stat Cards */}
      <div className="flex items-center gap-5 mb-5">
        {/* Overall 90-day progress ring */}
        <div className="flex-shrink-0">
          <ProgressRing progress={stats.overallProgress} size={110} strokeWidth={9}>
            <div className="text-center">
              <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-semibold leading-none mb-0.5">
                DAY {stats.currentDay} / {stats.totalDays}
              </p>
              <p className="text-2xl font-bold tracking-tight leading-none text-zinc-950 dark:text-white">
                {stats.overallProgress}%
              </p>
              <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-semibold mt-0.5">
                90-day progress
              </p>
            </div>
          </ProgressRing>
        </div>

        {/* Stat cards grid */}
        <div className="grid grid-cols-2 gap-2 flex-1">
          <StatCard
            icon="Flame"
            value={`${stats.streak}d`}
            label="Current streak"
            accent
          />
          <StatCard
            icon="CheckCircle"
            value={stats.completedTasks}
            label="Tasks completed"
          />
          <StatCard
            icon="AlertCircle"
            value={stats.overduePendingTasks > 0 ? `${stats.overduePendingTasks} due` : "0 due"}
            label="Overdue pending"
          />
          <StatCard
            icon="Target"
            value={`${stats.daysLeft}d`}
            label="Days left"
          />
        </div>
      </div>
    </div>
  );
}
