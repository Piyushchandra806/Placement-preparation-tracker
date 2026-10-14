/**
 * BottomNav — Floating Capsule / Pill Mobile Dock.
 * Matches the floating pill dock design:
 * - Sleek dark capsule pill container with backdrop blur & subtle border.
 * - Circular icon buttons with smooth touch feedback.
 * - Prominent center action button illuminated with coral-red accent color.
 * - Active tab highlights with smooth circular pill styling.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Home, Calendar, BarChart3, Settings } from "lucide-react";
import { useReminder } from "@/context/ReminderContext";

export default function BottomNav() {
  const pathname = usePathname();
  const { unreadCount, setIsDrawerOpen } = useReminder();

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 lg:hidden pointer-events-auto"
    >
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#141416]/92 dark:bg-[#121214]/95 backdrop-blur-2xl border border-white/15 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.38)]">
        {/* Tab 1: Home */}
        <Link
          href="/"
          aria-label="Home"
          title="Home"
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
            pathname === "/"
              ? "bg-white/20 text-white shadow-xs scale-105"
              : "text-zinc-400 hover:text-white hover:bg-white/10 active:scale-90"
          }`}
        >
          <Home size={19} strokeWidth={pathname === "/" ? 2.4 : 2} />
        </Link>

        {/* Tab 2: Study Plan */}
        <Link
          href="/plan"
          aria-label="Study Plan"
          title="Study Plan"
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
            pathname === "/plan"
              ? "bg-white/20 text-white shadow-xs scale-105"
              : "text-zinc-400 hover:text-white hover:bg-white/10 active:scale-90"
          }`}
        >
          <Calendar size={19} strokeWidth={pathname === "/plan" ? 2.4 : 2} />
        </Link>

        {/* Center Prominent Button: Reminders & Alerts (Stylized prominent circular button) */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Reminders & Alerts"
          title="Daily Reminders & Mission Alerts"
          className="relative w-12 h-12 rounded-full bg-[var(--accent)] text-white shadow-lg shadow-[rgba(232,87,58,0.45)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer flex-shrink-0"
        >
          <Bell size={21} strokeWidth={2.4} />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 px-1 min-w-4 h-4 text-[9px] font-bold bg-white text-[var(--accent)] rounded-full shadow-xs flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Tab 3: Progress & Reports */}
        <Link
          href="/progress"
          aria-label="Progress"
          title="Progress"
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
            pathname === "/progress"
              ? "bg-white/20 text-white shadow-xs scale-105"
              : "text-zinc-400 hover:text-white hover:bg-white/10 active:scale-90"
          }`}
        >
          <BarChart3 size={19} strokeWidth={pathname === "/progress" ? 2.4 : 2} />
        </Link>

        {/* Tab 4: Settings & Preferences */}
        <Link
          href="/settings"
          aria-label="Settings"
          title="Settings"
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
            pathname === "/settings"
              ? "bg-white/20 text-white shadow-xs scale-105"
              : "text-zinc-400 hover:text-white hover:bg-white/10 active:scale-90"
          }`}
        >
          <Settings size={19} strokeWidth={pathname === "/settings" ? 2.4 : 2} />
        </Link>
      </div>
    </nav>
  );
}
