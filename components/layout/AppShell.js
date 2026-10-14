/**
 * AppShell — Main layout shell with sidebar (desktop) and bottom nav (mobile).
 * Wraps all page content with consistent padding and spacing.
 */
"use client";

import Link from "next/link";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import AuthModal from "@/components/auth/AuthModal";
import ReminderNotificationDrawer from "@/components/reminders/ReminderNotificationDrawer";
import { useProgress } from "@/context/ProgressContext";
import { CheckCircle2, AlertTriangle, ShieldCheck, Sparkles, Loader2, ArrowRight } from "lucide-react";

export default function AppShell({ children }) {
  const {
    user,
    isAuthLoading,
    setIsAuthModalOpen,
    autoLoginDemoUser,
    successToast,
    errorMessage,
  } = useProgress();

  return (
    <div className="min-h-screen">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main className="lg:ml-[var(--sidebar-width)] main-content">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
          {isAuthLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[55vh] text-center p-8 animate-fade-in">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center mb-3 shadow-2xs">
                <Loader2 size={24} className="animate-spin" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Validating candidate session...
              </p>
              <p className="text-xs text-[var(--text-secondary)] dark:text-zinc-400 mt-1">
                Verifying secure session on MongoDB Atlas
              </p>
            </div>
          ) : !user ? (
            <div className="glass-card-static p-8 sm:p-10 rounded-3xl text-center shadow-2xl border border-black/10 dark:border-white/15 bg-white/90 dark:bg-[#15151c]/90 backdrop-blur-2xl animate-fade-in-up my-4">
              <div className="w-16 h-16 rounded-3xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center mx-auto mb-4 shadow-sm">
                <ShieldCheck size={34} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                Candidate Authentication Required
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] dark:text-zinc-300 max-w-md mx-auto mt-2 mb-6">
                Please sign in to access your personal 90-day placement preparation study plan, live MongoDB Atlas scoring, and subject mastery tracking.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={() => setIsAuthModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Sign In</span>
                  <ArrowRight size={15} />
                </button>
                <button
                  type="button"
                  onClick={autoLoginDemoUser}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--accent)] to-rose-600 text-white font-bold text-xs sm:text-sm hover:opacity-95 shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles size={15} />
                  <span>1-Click Demo</span>
                </button>
              </div>

              <div className="mt-6 text-xs text-[var(--text-secondary)] dark:text-zinc-400">
                <span>New candidate? </span>
                <Link
                  href="/register"
                  className="font-bold text-[var(--accent)] hover:underline ml-1"
                >
                  Create an account
                </Link>
                <span className="mx-2">·</span>
                <Link
                  href="/login"
                  className="font-bold text-[var(--foreground)] hover:underline"
                >
                  Full Login Page
                </Link>
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      </main>

      {/* Mobile bottom nav */}
      <BottomNav />

      {/* Authentication Modal */}
      <AuthModal />

      {/* Reminder Notification Drawer & Missed Goal Modal */}
      <ReminderNotificationDrawer />

      {/* Toast Notifications */}
      {successToast && (
        <div className="fixed bottom-20 lg:bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-600 text-white shadow-xl text-xs font-semibold animate-fade-in-up">
          <CheckCircle2 size={16} />
          <span>{successToast}</span>
        </div>
      )}

      {errorMessage && (
        <div className="fixed bottom-20 lg:bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-rose-600 text-white shadow-xl text-xs font-semibold animate-fade-in-up">
          <AlertTriangle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
