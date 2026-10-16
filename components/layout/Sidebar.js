/**
 * Sidebar — Desktop floating island / capsule sidebar.
 * Styled after the modern minimalist card aesthetic (rounded capsule with deep shadow,
 * active pill states, uppercase category section headers, and pinned settings/profile footer).
 *
 * Desktop-only (hidden on mobile, preserving existing mobile bottom nav).
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  Code2,
  Calculator,
  Brain,
  MessageCircle,
  Settings,
  Target,
  Bell,
  LogOut,
  LogIn,
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { useReminder } from "@/context/ReminderContext";

const OVERVIEW_ITEMS = [
  { label: "Home", icon: LayoutDashboard, href: "/" },
  { label: "Study Plan", icon: Calendar, href: "/plan" },
  { label: "Progress", icon: BarChart3, href: "/progress" },
];

const SUBJECT_ITEMS = [
  { label: "DSA in C++", icon: Code2, href: "/dsa" },
  { label: "Aptitude", icon: Calculator, href: "/aptitude" },
  { label: "Reasoning", icon: Brain, href: "/reasoning" },
  { label: "English", icon: MessageCircle, href: "/english" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, stats, logout, setIsAuthModalOpen, isAuthenticated } = useProgress();
  const { unreadCount, setIsDrawerOpen } = useReminder();

  return (
    <aside className="hidden lg:flex flex-col fixed left-4 top-4 bottom-4 w-[244px] z-40 bg-white/95 dark:bg-[#14151b]/95 backdrop-blur-2xl rounded-[32px] border border-zinc-200/80 dark:border-white/[0.08] shadow-[0_12px_40px_-5px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.55)] select-none transition-colors">
      {/* ─── Top Brand Header ─── */}
      <div className="pt-6 px-5 pb-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <Target size={18} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[17px] font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Mission <span className="text-[var(--accent)] font-extrabold">90</span>
            </span>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
              Placement Tracker
            </span>
          </div>
        </Link>

        {/* Compact Day & Streak pill */}
        <div className="mt-4 px-3.5 py-2 rounded-2xl bg-zinc-100/80 dark:bg-white/[0.05] border border-black/[0.03] dark:border-white/[0.06] flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-bold text-zinc-800 dark:text-zinc-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>DAY {stats.currentDay || 3}</span>
            <span className="text-zinc-400 dark:text-zinc-500 font-normal">
              / {stats.totalDays || 90}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
            {stats.daysLeft || 87}d left
          </span>
        </div>
      </div>

      {/* ─── Navigation Groups ─── */}
      <nav className="flex-1 overflow-y-auto px-3.5 py-2 space-y-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Main / Overview links */}
        <div className="space-y-1">
          {OVERVIEW_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-[13.5px] transition-all duration-150 ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-white/[0.08] font-medium"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.3 : 2} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Category Header: SUBJECTS */}
        <div className="pt-4 pb-1.5 px-3">
          <span className="text-[10px] font-bold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
            Subjects
          </span>
        </div>

        {/* Subject Links */}
        <div className="space-y-1">
          {SUBJECT_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-[13.5px] transition-all duration-150 ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-white/[0.08] font-medium"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.3 : 2} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Category Header: UPDATES */}
        <div className="pt-4 pb-1.5 px-3">
          <span className="text-[10px] font-bold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
            Updates
          </span>
        </div>

        {/* Reminders Button */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-[13.5px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-white/[0.08] font-medium transition-all duration-150 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Bell size={18} strokeWidth={2} />
            <span>Reminders</span>
          </div>
          {unreadCount > 0 ? (
            <span className="px-2 py-0.5 rounded-full bg-[var(--accent)] text-white text-[10.5px] font-bold shadow-2xs">
              {unreadCount}
            </span>
          ) : (
            <span className="w-2 h-2 rounded-full bg-emerald-500" title="All set" />
          )}
        </button>
      </nav>

      {/* ─── Pinned Bottom Section (Settings & Candidate Profile) ─── */}
      <div className="p-3 border-t border-zinc-100 dark:border-white/[0.06] space-y-1">
        {/* Settings link */}
        <Link
          href="/settings"
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-[13.5px] transition-all duration-150 ${
            pathname === "/settings"
              ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-white/[0.08] font-medium"
          }`}
        >
          <Settings size={18} strokeWidth={pathname === "/settings" ? 2.3 : 2} />
          <span>Settings</span>
        </Link>

        {/* Candidate Profile Pill */}
        <div className="flex items-center justify-between p-2 rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-black/[0.03] dark:border-white/[0.06] mt-1.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-2xs">
              {user?.name ? user.name.charAt(0).toUpperCase() : "P"}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-zinc-900 dark:text-white truncate">
                {user?.name || "Candidate"}
              </p>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium truncate">
                {stats.overallProgress}% complete
              </p>
            </div>
          </div>

          {isAuthenticated ? (
            <button
              type="button"
              onClick={logout}
              title="Log Out"
              className="p-1.5 rounded-xl text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
              aria-label="Log Out"
            >
              <LogOut size={15} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              title="Sign In"
              className="p-1.5 rounded-xl text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
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
