/**
 * Sidebar — Desktop navigation sidebar with glass effect.
 * Shows app branding, navigation links, and current day indicator.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Target, LogOut, LogIn, Bell } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import DynamicIcon from "@/lib/icons";
import { useProgress } from "@/context/ProgressContext";
import { useReminder } from "@/context/ReminderContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { user, stats, logout, setIsAuthModalOpen, isAuthenticated } = useProgress();
  const { unreadCount, setIsDrawerOpen } = useReminder();

  return (
    <aside className="glass-sidebar hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-[var(--sidebar-width)] z-40">
      {/* Brand */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[var(--accent)] flex items-center justify-center shadow-2xs">
            <Target size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              Mission <span className="text-[var(--accent)]">90</span>
            </h1>
            <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-medium -mt-0.5">
              Your 90-Day Placement Journey
            </p>
          </div>
        </div>

        {/* Day indicator */}
        <div className="mt-4 px-3 py-2 rounded-xl bg-[var(--accent-bg)] flex items-center justify-between">
          <span className="text-xs font-semibold text-[var(--accent)]">
            DAY {stats.currentDay} / {stats.totalDays}
          </span>
          <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-semibold">
            {stats.daysLeft} days left
          </span>
        </div>

        {/* Daily Reminders Shortcut */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="w-full mt-2.5 px-3 py-2 rounded-xl bg-white/60 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] border border-black/[0.04] dark:border-white/10 flex items-center justify-between text-xs font-semibold text-[var(--foreground)] transition-all shadow-2xs cursor-pointer"
          title="Daily Reminders & Notifications"
        >
          <div className="flex items-center gap-2">
            <Bell size={14} className="text-[var(--accent)]" />
            <span>Reminders</span>
          </div>
          {unreadCount > 0 ? (
            <span className="px-1.5 py-0.5 rounded-full bg-[var(--accent)] text-white text-[10px] font-bold">
              {unreadCount}
            </span>
          ) : (
            <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active" />
          )}
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 overflow-y-auto">
        <div className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "nav-link-active"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                <DynamicIcon name={item.icon} size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer User Profile & Auth */}
      <div className="p-3 border-t border-black/[0.05] dark:border-white/10">
        <div className="flex items-center justify-between p-2 rounded-2xl bg-white/40 dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/10">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[var(--accent-bg)] flex items-center justify-center flex-shrink-0 text-[var(--accent)] font-bold text-xs">
              {user?.name ? user.name.charAt(0).toUpperCase() : "P"}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[var(--foreground)] truncate">
                {user?.name || "Candidate"}
              </p>
              <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-medium truncate">
                {stats.overallProgress}% complete
              </p>
            </div>
          </div>

          {isAuthenticated ? (
            <button
              onClick={logout}
              title="Log Out / Switch Account"
              className="p-1.5 rounded-lg text-[var(--text-tertiary)] dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-all flex-shrink-0"
              aria-label="Log Out"
            >
              <LogOut size={15} />
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              title="Sign In"
              className="p-1.5 rounded-lg text-[var(--accent)] hover:bg-[var(--accent-bg)] transition-all flex-shrink-0"
              aria-label="Sign In"
            >
              <LogIn size={15} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
