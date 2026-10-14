"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  X,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  Send,
  AlertTriangle,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import { useReminder } from "@/context/ReminderContext";

export default function ReminderNotificationDrawer() {
  const router = useRouter();
  const {
    permission,
    isSupported,
    settings,
    tasksOverview,
    reminders,
    unreadCount,
    isDrawerOpen,
    setIsDrawerOpen,
    activeMissedGoal,
    setActiveMissedGoal,
    loading,
    statusMessage,
    requestPermission,
    triggerTestReminder,
    markAsRead,
    dismissReminder,
    carryForward,
  } = useReminder();

  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'pending' | 'overdue'

  if (!isDrawerOpen && !activeMissedGoal) return null;

  return (
    <>
      {/* End-of-day Missed Goal Summary Modal */}
      {activeMissedGoal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
          <div className="glass-card p-6 max-w-md w-full bg-white/95 dark:bg-[#15151b] shadow-2xl border border-[var(--accent)]/30 rounded-3xl animate-scale-up">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/15 text-amber-600 flex items-center justify-center">
                  <AlertTriangle size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-tight text-[var(--foreground)]">End of Day Goal Summary</h3>
                  <p className="text-xs text-[var(--text-secondary)] dark:text-zinc-400">
                    Day {activeMissedGoal.dayNumber || "Today"} · Completed tasks preserved
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveMissedGoal(null)}
                className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-secondary)]"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 mb-4 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
              <p className="font-semibold mb-1">
                {activeMissedGoal.pendingTaskCount || "Some"} target task(s) remained incomplete.
              </p>
              <p className="text-amber-800 dark:text-amber-300">
                All tasks you finished have been safely recorded and credited toward your 90-day progress. Unfinished tasks can be carried forward into your pending backlog.
              </p>
            </div>

            <div className="space-y-2 mb-5">
              <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04]">
                <span className="text-[var(--text-secondary)] dark:text-zinc-400">Completed Tasks:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Preserved in MongoDB</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04]">
                <span className="text-[var(--text-secondary)] dark:text-zinc-400">Unfinished Tasks:</span>
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  {activeMissedGoal.pendingTaskCount || 0} tasks to review
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => carryForward(activeMissedGoal.id || activeMissedGoal._id)}
                disabled={loading}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[var(--accent)] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-xs transition-all disabled:opacity-50"
              >
                <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                Carry Forward Tasks
              </button>
              <button
                onClick={() => {
                  dismissReminder(activeMissedGoal.id || activeMissedGoal._id);
                  setActiveMissedGoal(null);
                }}
                className="py-2.5 px-4 rounded-xl bg-black/5 dark:bg-white/10 text-[var(--text-secondary)] dark:text-zinc-300 font-semibold text-xs hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Slide-over Notification Center Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-2xs transition-opacity animate-fade-in"
          />

          {/* Drawer panel */}
          <div className="relative w-full max-w-md bg-white/95 dark:bg-[#131318] backdrop-blur-xl h-full shadow-2xl border-l border-black/10 dark:border-white/10 flex flex-col z-10 animate-slide-left">
            {/* Header */}
            <div className="p-5 border-b border-black/[0.06] dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center">
                  <Bell size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-base tracking-tight text-[var(--foreground)]">Reminders &amp; Alerts</h2>
                    {unreadCount > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-[var(--accent)] text-white text-[10px] font-bold">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] dark:text-zinc-400">
                    Daily 8:30 PM reminder &amp; mission alerts
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-secondary)] transition-colors"
                aria-label="Close reminders"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Status Bar */}
            <div className="px-5 py-3 bg-black/[0.02] dark:bg-white/[0.03] border-b border-black/[0.04] dark:border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {permission === "granted" ? (
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <ShieldCheck size={14} /> Web Push Active
                  </span>
                ) : permission === "denied" ? (
                  <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold" title="Browser notifications blocked. In-app alerts fallback active.">
                    <ShieldAlert size={14} /> In-App Fallback
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-[var(--text-secondary)] dark:text-zinc-400 font-medium">
                    <Clock size={14} /> Push Inactive
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {permission !== "granted" && isSupported && (
                  <button
                    onClick={requestPermission}
                    disabled={loading}
                    className="text-[11px] font-bold text-[var(--accent)] hover:underline"
                  >
                    Enable Push
                  </button>
                )}
                <button
                  onClick={triggerTestReminder}
                  disabled={loading}
                  className="text-[11px] font-semibold text-[var(--text-secondary)] dark:text-zinc-400 hover:text-[var(--foreground)] dark:hover:text-white"
                  title="Test notification"
                >
                  Test
                </button>
              </div>
            </div>

            {/* Status Message / Notification */}
            {statusMessage && (
              <div
                className={`mx-5 mt-3 p-2.5 rounded-xl text-xs flex items-center justify-between ${
                  statusMessage.type === "success"
                    ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/60"
                    : statusMessage.type === "warning"
                    ? "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800/60"
                    : "bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800/60"
                }`}
              >
                <span>{statusMessage.text}</span>
              </div>
            )}

            {/* Today's Tasks Direct Action Card */}
            <div className="p-4 m-5 mb-2 rounded-2xl bg-gradient-to-br from-[var(--accent-bg)]/60 to-white/80 dark:from-[var(--accent-bg)]/30 dark:to-white/[0.04] border border-[var(--accent)]/20 dark:border-white/10 shadow-2xs">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                    Today&apos;s Mission
                  </span>
                  <h4 className="text-sm font-bold mt-0.5 text-[var(--foreground)]">
                    {tasksOverview.todayPendingCount > 0
                      ? `${tasksOverview.todayPendingCount} tasks pending today`
                      : "All tasks completed today! 🎉"}
                  </h4>
                  <p className="text-[11px] text-[var(--text-secondary)] dark:text-zinc-400 mt-0.5">
                    Target reminder configured for {settings.reminderTime || "20:30"} ({settings.timezone || "Local"})
                  </p>
                </div>

                <div className="w-9 h-9 rounded-xl bg-white dark:bg-white/10 shadow-xs flex items-center justify-center font-bold text-xs text-[var(--foreground)]">
                  {tasksOverview.todayCompletedCount}/{tasksOverview.todayTotalCount}
                </div>
              </div>

              {/* Direct Open Button */}
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  router.push("/#todays-mission");
                }}
                className="mt-3 w-full py-2 px-3 rounded-xl bg-white dark:bg-white/[0.08] border border-[var(--accent)]/30 dark:border-white/15 text-[var(--accent)] font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-[var(--accent)] hover:text-white transition-all shadow-2xs"
              >
                <span>Open Today&apos;s Tasks Directly</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="px-5 pt-2 pb-1 flex items-center gap-2 text-xs">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  activeTab === "all"
                    ? "bg-black/10 dark:bg-white/15 text-[var(--foreground)]"
                    : "text-[var(--text-secondary)] dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                All Alerts ({reminders.length})
              </button>
              <button
                onClick={() => setActiveTab("pending")}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  activeTab === "pending"
                    ? "bg-black/10 dark:bg-white/15 text-[var(--foreground)]"
                    : "text-[var(--text-secondary)] dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                Today Pending ({tasksOverview.todayPendingCount})
              </button>
              <button
                onClick={() => setActiveTab("overdue")}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  activeTab === "overdue"
                    ? "bg-black/10 dark:bg-white/15 text-[var(--foreground)]"
                    : "text-[var(--text-secondary)] dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                Overdue ({tasksOverview.overdueCount})
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto px-5 py-3 space-y-2.5">
              {activeTab === "all" && (
                <>
                  {reminders.length === 0 ? (
                    <div className="text-center py-12 text-[var(--text-secondary)]">
                      <div className="w-12 h-12 rounded-2xl bg-black/[0.03] flex items-center justify-center mx-auto mb-3">
                        <CheckCircle size={24} className="text-emerald-500" />
                      </div>
                      <p className="text-xs font-semibold text-[var(--foreground)]">No active reminders</p>
                      <p className="text-[11px] mt-1 max-w-[240px] mx-auto">
                        You&apos;re completely up to date! Daily reminders will notify you at {settings.reminderTime || "8:30 PM"} if any tasks remain.
                      </p>
                    </div>
                  ) : (
                    reminders.map((reminder) => {
                      const id = reminder.id || reminder._id;
                      const isUnread = !reminder.read;
                      return (
                        <div
                          key={id}
                          className={`p-3.5 rounded-2xl border transition-all ${
                            isUnread
                              ? "bg-white border-[var(--accent)]/30 shadow-xs"
                              : "bg-white/60 border-black/[0.04]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-start gap-2.5">
                              <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                                  reminder.type === "daily_reminder"
                                    ? "bg-[var(--accent-bg)] text-[var(--accent)]"
                                    : reminder.type === "end_of_day_missed"
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-blue-100 text-blue-700"
                                }`}
                              >
                                {reminder.type === "daily_reminder" ? (
                                  <Clock size={15} />
                                ) : reminder.type === "end_of_day_missed" ? (
                                  <AlertCircle size={15} />
                                ) : (
                                  <Bell size={15} />
                                )}
                              </div>
                              <div>
                                <h5 className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1.5">
                                  {reminder.title}
                                  {isUnread && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
                                  )}
                                </h5>
                                <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                                  {reminder.body}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => dismissReminder(id)}
                              className="text-[var(--text-tertiary)] hover:text-black p-1 rounded-md"
                              title="Dismiss"
                            >
                              <X size={14} />
                            </button>
                          </div>

                          {/* Action footer */}
                          <div className="mt-3 pt-2.5 border-t border-black/[0.04] flex items-center justify-between text-[11px]">
                            <span className="text-[var(--text-tertiary)]">
                              {reminder.date || "Today"}
                            </span>
                            <div className="flex items-center gap-2">
                              {reminder.type === "end_of_day_missed" && !reminder.carriedForward && (
                                <button
                                  onClick={() => carryForward(id)}
                                  disabled={loading}
                                  className="font-bold text-amber-600 hover:underline flex items-center gap-1"
                                >
                                  <RefreshCw size={11} /> Carry Forward
                                </button>
                              )}
                              <button
                                onClick={() => {
                                  markAsRead(id);
                                  setIsDrawerOpen(false);
                                  router.push("/#todays-mission");
                                }}
                                className="font-bold text-[var(--accent)] hover:underline flex items-center gap-1"
                              >
                                <span>Go to Dashboard</span>
                                <ExternalLink size={11} />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </>
              )}

              {activeTab === "pending" && (
                <div className="space-y-2">
                  {tasksOverview.todayPendingTasks.length === 0 ? (
                    <div className="text-center py-8 text-xs text-[var(--text-secondary)]">
                      🎉 All tasks for today are complete!
                    </div>
                  ) : (
                    tasksOverview.todayPendingTasks.map((t) => (
                      <div
                        key={t.id}
                        className="p-3 rounded-xl bg-white border border-black/[0.05] flex items-start justify-between gap-2"
                      >
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--accent)] px-1.5 py-0.5 rounded bg-[var(--accent-bg)]">
                            {t.subject}
                          </span>
                          <h6 className="text-xs font-semibold mt-1">{t.title}</h6>
                          <p className="text-[10px] text-[var(--text-secondary)] mt-0.5">
                            {t.topic} · ~{t.estimatedMinutes} min
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setIsDrawerOpen(false);
                            router.push("/#todays-mission");
                          }}
                          className="text-[10px] font-bold text-[var(--accent)] hover:underline flex-shrink-0"
                        >
                          Start
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === "overdue" && (
                <div className="space-y-2">
                  {tasksOverview.overdueTasks.length === 0 ? (
                    <div className="text-center py-8 text-xs text-[var(--text-secondary)]">
                      ✨ No overdue tasks from previous days!
                    </div>
                  ) : (
                    tasksOverview.overdueTasks.map((t) => (
                      <div
                        key={t.id}
                        className="p-3 rounded-xl bg-rose-50/50 border border-rose-200/50 flex items-start justify-between gap-2"
                      >
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-rose-600 px-1.5 py-0.5 rounded bg-rose-100">
                            Day {t.dayNumber} · {t.subject}
                          </span>
                          <h6 className="text-xs font-semibold mt-1">{t.title}</h6>
                          <p className="text-[10px] text-[var(--text-secondary)] mt-0.5">
                            {t.topic} · ~{t.estimatedMinutes} min
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setIsDrawerOpen(false);
                            router.push(`/${t.subject.toLowerCase().replace(/ /g, "-")}`);
                          }}
                          className="text-[10px] font-bold text-rose-600 hover:underline flex-shrink-0"
                        >
                          View
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-black/[0.06] bg-white/80 flex items-center justify-between text-xs">
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  router.push("/settings#reminders");
                }}
                className="font-semibold text-[var(--text-secondary)] hover:text-black flex items-center gap-1.5"
              >
                <span>Configure Settings</span>
                <ChevronRight size={14} />
              </button>

              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  router.push("/#todays-mission");
                }}
                className="font-bold text-[var(--accent)] hover:underline flex items-center gap-1"
              >
                <span>Today&apos;s Mission</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
