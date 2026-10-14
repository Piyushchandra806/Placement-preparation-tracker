/**
 * SubjectCard — Glass card for each subject on the dashboard.
 * Shows icon, today's topic, progress, and a navigation chevron.
 */
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import DynamicIcon from "@/lib/icons";
import { useProgress } from "@/context/ProgressContext";

export default function SubjectCard({ subject }) {
  const { stats, todayTasks } = useProgress();

  const normSubj = subject.slug === "aptitude" ? "quant" : subject.slug;
  const liveSubj = stats?.subjects?.find(
    (s) => s.id === subject.id || (subject.id === "aptitude" && s.id === "quant")
  );

  const todayTask = todayTasks?.find(
    (t) => (t.subject || "").toLowerCase() === normSubj
  );
  const topicLabel = todayTask?.topic || subject.todayTopic;

  const progress =
    liveSubj && typeof liveSubj.progressPercentage === "number"
      ? liveSubj.progressPercentage
      : subject.overallProgress;

  return (
    <Link href={`/${subject.slug}`} className="block group">
      <div className="glass-card p-4 flex items-center gap-4 cursor-pointer">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${subject.accent}14` }}
        >
          <DynamicIcon name={subject.icon} size={20} style={{ color: subject.accent }} />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-[var(--foreground)] truncate">
              {subject.name}
            </h3>
            {liveSubj && (
              <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-semibold">
                {liveSubj.completedTasks} / {liveSubj.totalTasks} done
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 mt-0.5 truncate font-medium">
            {topicLabel}
          </p>
          {/* Progress bar */}
          <div className="mt-2 h-1.5 bg-[rgba(0,0,0,0.06)] dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${progress}%`,
                backgroundColor: subject.accent,
              }}
            />
          </div>
        </div>

        {/* Progress % & chevron */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
            {progress}%
          </span>
          <ChevronRight
            size={16}
            className="text-zinc-500 dark:text-zinc-400 group-hover:text-[var(--accent)] transition-colors"
          />
        </div>
      </div>
    </Link>
  );
}
