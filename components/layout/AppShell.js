/**
 * AppShell — Main layout shell with sidebar (desktop) and bottom nav (mobile).
 * Wraps all page content with consistent padding and spacing.
 */
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import AuthModal from "@/components/auth/AuthModal";
import ReminderNotificationDrawer from "@/components/reminders/ReminderNotificationDrawer";
import { useProgress } from "@/context/ProgressContext";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

export default function AppShell({ children }) {
  const router = useRouter();
  const {
    user,
    isAuthLoading,
    setIsAuthModalOpen,
    successToast,
    errorMessage,
  } = useProgress();

  useEffect(() => {
    if (!isAuthLoading && !user) {
      router.replace("/login");
    }
  }, [isAuthLoading, user, router]);

  return (
    <div className="min-h-screen">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main className="lg:ml-[var(--sidebar-width)] main-content">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 lg:py-8 pb-28 lg:pb-32">
          {isAuthLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[55vh] text-center p-8 animate-fade-in">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center mb-3 shadow-2xs">
                <Loader2 size={24} className="animate-spin" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Loading...
              </p>
            </div>
          ) : !user ? (
            <div className="flex flex-col items-center justify-center min-h-[55vh] text-center p-8 animate-fade-in">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center mb-3 shadow-2xs">
                <Loader2 size={24} className="animate-spin" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Redirecting to login...
              </p>
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
