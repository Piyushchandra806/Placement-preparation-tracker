/**
 * Settings — User preferences, account management, and app configuration.
 */
"use client";

import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import {
  Settings,
  Moon,
  Sun,
  Clock,
  LogOut,
  ChevronRight,
  LogIn,
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import ReminderSettingsCard from "@/components/reminders/ReminderSettingsCard";

export default function SettingsPage() {
  const { user, stats, logout, setIsAuthModalOpen, isAuthenticated } = useProgress();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return (
        document.documentElement.classList.contains("dark") ||
        localStorage.getItem("mission90_theme") === "dark"
      );
    } catch {
      return false;
    }
  });

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

  const settingsSections = [
    {
      title: "Preferences",
      items: [
        {
          icon: isDarkMode ? Sun : Moon,
          label: "Dark Mode",
          subtitle: isDarkMode ? "On" : "Off",
          hasToggle: true,
          toggleOn: isDarkMode,
          onClick: toggleDarkMode,
        },
        { icon: Clock, label: "Study Target", subtitle: "3 hours daily target", hasChevron: true },
      ],
    },
    {
      title: "Session",
      items: isAuthenticated
        ? [
            {
              icon: LogOut,
              label: "Log Out",
              subtitle: "Sign out and return to candidate login",
              hasChevron: true,
              danger: true,
              onClick: async () => {
                await logout();
                if (typeof window !== "undefined") {
                  window.location.href = "/login";
                }
              },
            },
          ]
        : [
            {
              icon: LogIn,
              label: "Sign In",
              subtitle: "Access your cloud study plan & progress",
              hasChevron: true,
              onClick: () => {
                if (typeof window !== "undefined") {
                  window.location.href = "/login";
                }
              },
            },
          ],
    },
  ];

  return (
    <AppShell>
      <div className="space-y-5">
        {/* Header */}
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-2.5 mb-1">
            <Settings size={20} className="text-[var(--accent)]" />
            <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            Account preferences
          </p>
        </div>

        {/* Profile card */}
        <div
          onClick={() => setIsAuthModalOpen(true)}
          className="glass-card-static p-5 flex items-center gap-4 animate-fade-in-up cursor-pointer hover:bg-white/80 transition-all"
        >
          <div className="w-14 h-14 rounded-2xl bg-[var(--accent-bg)] flex items-center justify-center">
            <span className="text-2xl font-bold text-[var(--accent)]">
              {user?.name ? user.name.charAt(0).toUpperCase() : "C"}
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold">{user?.name || "Candidate"}</h2>
            <p className="text-xs text-[var(--text-secondary)]">
              Day {stats.currentDay} of {stats.totalDays} · {stats.overallProgress}% complete{user?.email ? ` · ${user.email}` : ""}
            </p>
          </div>
          <ChevronRight size={18} className="text-[var(--text-tertiary)]" />
        </div>

        {/* Daily Reminder & Notification System */}
        <ReminderSettingsCard />

        {/* Settings sections */}
        {settingsSections.map((section) => (
          <div key={section.title} className="animate-fade-in-up">
            <h3 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-2 px-1">
              {section.title}
            </h3>
            <div className="glass-card-static divide-y divide-[rgba(0,0,0,0.04)]">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    onClick={item.onClick}
                    className="flex items-center gap-3 p-4 cursor-pointer hover:bg-[rgba(0,0,0,0.02)] transition-colors first:rounded-t-[var(--radius-lg)] last:rounded-b-[var(--radius-lg)]"
                  >
                    <Icon
                      size={18}
                      className={
                        item.danger
                          ? "text-red-500"
                          : "text-[var(--text-secondary)]"
                      }
                    />
                    <div className="flex-1">
                      <p
                        className={`text-sm font-medium ${
                          item.danger ? "text-red-500 font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </p>
                      <p className="text-xs text-[var(--text-tertiary)]">
                        {item.subtitle}
                      </p>
                    </div>
                    {item.hasChevron && (
                      <ChevronRight
                        size={16}
                        className="text-[var(--text-tertiary)]"
                      />
                    )}
                    {item.hasToggle && (
                      <button
                        type="button"
                        role="switch"
                        aria-checked={item.toggleOn}
                        aria-label={`Toggle ${item.label}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          item.onClick?.();
                        }}
                        className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200 outline-none flex items-center ${
                          item.toggleOn
                            ? "bg-[var(--accent)]"
                            : "bg-black/15 dark:bg-white/20"
                        }`}
                      >
                        <span
                          className={`inline-block w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                            item.toggleOn ? "translate-x-5.5" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
