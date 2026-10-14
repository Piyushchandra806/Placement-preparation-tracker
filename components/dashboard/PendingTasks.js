/**
 * PendingTasks — Overdue/pending tasks backlog from previous days.
 *
 * Implements:
 * - Interactive checkbox on every pending task.
 * - Saves completion to MongoDB Atlas with completedAt timestamp.
 * - Decrements pending task count and updates overall progress in real time.
 * - Loading spinner during network synchronization.
 */
"use client";

import { AlertCircle, Clock, Check, Loader2, Sparkles } from "lucide-react";
import { useProgress } from "@/context/ProgressContext";

const PRIORITY_MAP = {
  dsa: { label: "High", style: "bg-red-50 text-red-600 border-red-200/50" },
  quant: { label: "Medium", style: "bg-amber-50 text-amber-600 border-amber-200/50" },
  reasoning: { label: "Medium", style: "bg-purple-50 text-purple-600 border-purple-200/50" },
  english: { label: "Normal", style: "bg-emerald-50 text-emerald-600 border-emerald-200/50" },
  revision: { label: "High", style: "bg-rose-50 text-rose-600 border-rose-200/50" },
};

export default function PendingTasks({ tasks: initialTasks = [] }) {
  const { pendingTasks: remotePending, toggleTask, updatingTaskIds, stats } = useProgress();

  // Prefer live database pending tasks; never fall back to mock tasks with dummy 'p' IDs
  const activePendingList =
    remotePending !== undefined && remotePending !== null
      ? remotePending
      : initialTasks.filter((t) => (t.id || t._id) && !(t.id || t._id).toString().startsWith("p"));

  // Filter for uncompleted tasks with valid database ID
  const uncompletedPending = activePendingList.filter(
    (t) => !t.completed && (t.id || t._id) && !(t.id || t._id).toString().startsWith("p")
  );

  return (
    <div className="glass-card-static p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <AlertCircle size={17} className="text-[var(--accent)]" />
          <h2 className="font-semibold text-base text-[var(--foreground)]">
            Pending Tasks Backlog
          </h2>
        </div>
        <span className="text-xs text-zinc-600 dark:text-zinc-400 font-semibold px-2.5 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08]">
          {uncompletedPending.length} overdue from Days 1–{Math.max(1, stats.currentDay - 1)}
        </span>
      </div>

      {/* List or Empty State */}
      {uncompletedPending.length === 0 ? (
        <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200/40 dark:border-emerald-800/40 flex items-center gap-3 text-emerald-900 dark:text-emerald-200">
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center flex-shrink-0">
            <Check size={16} className="text-emerald-700 dark:text-emerald-300" />
          </div>
          <div>
            <p className="text-xs font-bold">All caught up!</p>
            <p className="text-[11px] text-emerald-700 dark:text-emerald-300">
              Zero overdue tasks from previous study days. Excellent discipline!
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-2.5">
          {uncompletedPending.map((task) => {
            const taskId = task.id || task._id;
            const normSubj = (task.subject || "dsa").toLowerCase();
            const priority =
              PRIORITY_MAP[normSubj] || {
                label: "Normal",
                style: "bg-blue-50 text-blue-600 border-blue-200/50",
              };
            const isUpdating = updatingTaskIds.has(taskId);

            return (
              <div
                key={taskId}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 dark:bg-white/[0.04] hover:bg-white/80 dark:hover:bg-white/[0.08] border border-black/[0.03] dark:border-white/10 transition-all group"
              >
                {/* Interactive Checkbox */}
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={task.completed}
                  aria-label={`Mark pending task ${task.title} as completed`}
                  disabled={isUpdating}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!taskId || taskId.toString().startsWith("p")) return;
                    toggleTask(taskId, !task.completed, normSubj);
                  }}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all flex-shrink-0 cursor-pointer ${
                    task.completed
                      ? "bg-[var(--accent)] text-white shadow-xs"
                      : "border-2 border-black/20 dark:border-white/20 hover:border-[var(--accent)] bg-white/60 dark:bg-white/[0.06]"
                  } ${isUpdating ? "opacity-60 cursor-wait" : ""}`}
                >
                  {isUpdating ? (
                    <Loader2 size={13} className="animate-spin text-[var(--accent)]" />
                  ) : task.completed ? (
                    <Check size={14} className="stroke-[3]" />
                  ) : null}
                </button>

                {/* Priority badge */}
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${priority.style}`}
                >
                  {priority.label}
                </span>

                {/* Task Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate text-[var(--foreground)]">
                    {task.title}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium truncate">
                    {task.subject ? task.subject.toUpperCase() : "TASK"} · {task.topic || "Placement Preparation"}
                  </p>
                </div>

                {/* Due day */}
                <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 flex-shrink-0 text-xs font-semibold">
                  <Clock size={13} />
                  <span>Day {task.dayNumber || task.dueDay || 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
