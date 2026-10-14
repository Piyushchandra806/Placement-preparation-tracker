/**
 * MissionChecklist — Today's placement preparation tasks with interactive checkboxes.
 *
 * Implements:
 * - Real-time task completion toggle synchronized to MongoDB Atlas.
 * - Loading indicator during network request.
 * - Category weights badge (DSA 45%, Quant 15%, Reasoning 15%, English 15%, Revision 10%).
 * - Instant dashboard score recalculation without full page reload.
 */
"use client";

import { Check, ChevronRight, Loader2 } from "lucide-react";
import DynamicIcon from "@/lib/icons";
import Link from "next/link";
import { useProgress } from "@/context/ProgressContext";

const SUBJECT_CONFIG = {
  dsa: {
    name: "DSA in C++",
    slug: "dsa",
    icon: "Code2",
    weight: "45%",
    accent: "#e8573a",
  },
  quant: {
    name: "Quantitative Aptitude",
    slug: "aptitude",
    icon: "Calculator",
    weight: "15%",
    accent: "#f59e42",
  },
  reasoning: {
    name: "Logical Reasoning",
    slug: "reasoning",
    icon: "Brain",
    weight: "15%",
    accent: "#6c5ce7",
  },
  english: {
    name: "English Speaking",
    slug: "english",
    icon: "MessageCircle",
    weight: "15%",
    accent: "#00b894",
  },
  revision: {
    name: "Daily Placement Revision",
    slug: "plan",
    icon: "RotateCcw",
    weight: "10%",
    accent: "#e8573a",
  },
};

export default function MissionChecklist({ tasks: initialTasks = [] }) {
  const { todayTasks, toggleTask, updatingTaskIds, stats } = useProgress();

  const activeTasks = todayTasks && todayTasks.length > 0 ? todayTasks : initialTasks;
  const completedCount = activeTasks.filter((t) => t.completed).length;

  return (
    <div id="todays-mission" className="glass-card-static p-5 scroll-mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-semibold text-base text-[var(--foreground)]">
            Today&apos;s Mission
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Day {stats.currentDay} Checklist · Daily Score: {stats.dailyScore}/100
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--accent-bg)] text-[var(--accent)]">
            {completedCount} of {activeTasks.length} complete
          </span>
        </div>
      </div>

      {/* Task list */}
      <div className="space-y-2.5">
        {activeTasks.map((task) => {
          const rawSubj = (task.subject || "").toLowerCase();
          const normSubj = rawSubj === "aptitude" ? "quant" : rawSubj;
          const config = SUBJECT_CONFIG[normSubj] || {
            name: task.subject,
            slug: "dsa",
            icon: "BookOpen",
            weight: "15%",
            accent: "#e8573a",
          };

          const isUpdating = updatingTaskIds.has(task.id) || updatingTaskIds.has(task._id);

          return (
            <div
              key={task.id || task._id}
              className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/40 dark:bg-white/[0.04] hover:bg-white/80 dark:hover:bg-white/[0.08] border border-black/[0.03] dark:border-white/10 transition-all group"
            >
              {/* Interactive Checkbox */}
              <button
                type="button"
                role="checkbox"
                aria-checked={task.completed}
                aria-label={`Mark ${task.title} as ${task.completed ? "incomplete" : "complete"}`}
                disabled={isUpdating}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const taskId = task.id || task._id;
                  if (!taskId || taskId.toString().startsWith("t")) return;
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

              {/* Subject icon */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${config.accent}14` }}
              >
                <DynamicIcon
                  name={config.icon}
                  size={16}
                  style={{ color: config.accent }}
                />
              </div>

              {/* Task Title & Topic Link */}
              <Link
                href={`/${config.slug}`}
                className="flex-1 min-w-0 select-none group-hover:text-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <p
                    className={`text-sm font-semibold truncate ${
                      task.completed
                        ? "line-through text-[var(--text-tertiary)] dark:text-zinc-500"
                        : "text-[var(--foreground)]"
                    }`}
                  >
                    {config.name}
                  </p>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.08] text-[var(--text-secondary)] dark:text-zinc-300">
                    {config.weight}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] dark:text-zinc-400 truncate mt-0.5">
                  {task.topic ? `${task.topic} — ` : ""}{task.title}
                </p>
              </Link>

              {/* Estimated minutes & navigation chevron */}
              <Link
                href={`/${config.slug}`}
                className="flex items-center gap-2 flex-shrink-0 text-xs text-[var(--text-secondary)] font-medium"
              >
                <span className="text-[11px] text-[var(--text-tertiary)]">
                  {task.estimatedMinutes || task.minutes || 30}m
                </span>
                <ChevronRight
                  size={14}
                  className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
