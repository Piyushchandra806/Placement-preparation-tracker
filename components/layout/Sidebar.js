/**
 * Sidebar — Desktop MacBook-style Bottom Dock Navigation.
 * - Positioned at bottom center (like macOS Dock).
 * - Sits on a floating frosted glass shelf with spring magnification physics.
 * - macOS bounce launch hop & squash upon click.
 * - High-contrast active-page indicators and floating tooltips.
 * - Top-left status pill preserves Mission 90 brand and Day streak.
 * - Mobile view uses BottomNav (dock is hidden on mobile).
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
import { Dock } from "@/components/dock";
import { useProgress } from "@/context/ProgressContext";
import { useReminder } from "@/context/ReminderContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { user, stats, logout, isAuthenticated } = useProgress();
  const { unreadCount, setIsDrawerOpen } = useReminder();

  const dockItems = [
    {
      label: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
      isActive: pathname === "/",
    },
    {
      label: "Study Plan",
      href: "/plan",
      icon: Calendar,
      isActive: pathname === "/plan",
    },
    {
      label: "Progress",
      href: "/progress",
      icon: BarChart3,
      isActive: pathname === "/progress",
      dividerAfter: true,
    },
    {
      label: "DSA",
      href: "/dsa",
      icon: Code2,
      isActive: pathname === "/dsa",
    },
    {
      label: "Aptitude",
      href: "/aptitude",
      icon: Calculator,
      isActive: pathname === "/aptitude",
    },
    {
      label: "Reasoning",
      href: "/reasoning",
      icon: Brain,
      isActive: pathname === "/reasoning",
    },
    {
      label: "English",
      href: "/english",
      icon: MessageCircle,
      isActive: pathname === "/english",
      dividerAfter: true,
    },
    {
      label: "Reminders",
      icon: Bell,
      badge: unreadCount,
      onClick: () => setIsDrawerOpen(true),
      isActive: false,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
      isActive: pathname === "/settings",
      dividerAfter: true,
    },
    {
      label: `${user?.name || "Candidate"} (${stats.overallProgress}% complete)`,
      icon: (
        <span className="font-bold text-xs select-none">
          {user?.name ? user.name.charAt(0).toUpperCase() : "P"}
        </span>
      ),
      className: "rounded-full font-bold",
      isActive: false,
      href: isAuthenticated ? undefined : "/login",
    },
    ...(isAuthenticated
      ? [
          {
            label: "Log Out",
            icon: LogOut,
            onClick: logout,
            isActive: false,
          },
        ]
      : [
          {
            label: "Sign In",
            href: "/login",
            icon: LogIn,
            isActive: pathname === "/login",
          },
        ]),
  ];

  return (
    <>
      {/* ─── Desktop Top-Left Floating Brand & Day Pill (Inverted Contrast) ─── */}
      <div
        className="hidden lg:flex fixed top-4 left-5 z-30 items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#121316]/92 text-white border border-white/20 shadow-md backdrop-blur-xl dark:bg-[#f4f4f7]/95 dark:text-zinc-900 dark:border-white/60 select-none transition-all hover:shadow-lg"
        aria-label="Mission 90 Status"
      >
        <Link
          href="/"
          className="flex items-center gap-2 group outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-full"
          title="Mission 90 Placement Tracker"
          aria-label="Mission 90 Home"
        >
          <div className="w-7 h-7 rounded-full bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <Target size={15} strokeWidth={2.5} />
          </div>
          <span className="text-xs font-bold tracking-tight text-white dark:text-zinc-900 leading-none">
            Mission <span className="text-[var(--accent)] font-extrabold">90</span>
          </span>
        </Link>

        <span className="w-px h-3.5 bg-white/20 dark:bg-zinc-300" aria-hidden="true" />

        {/* Compact Day & Streak pill */}
        <div
          className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-200 dark:text-zinc-800 cursor-default"
          title={`Day ${stats.currentDay || 3} of ${stats.totalDays || 90} (${stats.daysLeft || 87}d left)`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>DAY {stats.currentDay || 3}</span>
          <span className="text-zinc-400 dark:text-zinc-500 font-normal text-[10px]">
            / {stats.totalDays || 90}
          </span>
        </div>
      </div>

      {/* ─── Desktop MacBook Bottom Dock (Inverted High-Contrast) ─── */}
      <aside
        className="hidden lg:flex fixed bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 z-40 items-center justify-center pointer-events-auto select-none"
        aria-label="Desktop MacBook Dock Navigation"
      >
        <Dock
          items={dockItems}
          orientation="horizontal"
          variant="inverted"
          restSize={44}
          peakSize={62}
          reach={110}
          className="h-[68px] items-end gap-1.5 rounded-full bg-[#121316]/95 text-white border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.2)] backdrop-blur-2xl dark:bg-[#f4f4f7]/95 dark:text-zinc-900 dark:border-white/80 dark:shadow-[0_24px_60px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.4)] px-3.5 pb-2.5 pt-1.5 transition-colors duration-200"
          ariaLabel="MacBook Dock Navigation"
        />
      </aside>
    </>
  );
}
