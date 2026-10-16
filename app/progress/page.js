/**
 * Progress — Overall analytics and progress tracking page.
 * Displays live progress from MongoDB via ProgressContext.
 */
"use client";

import AppShell from "@/components/layout/AppShell";
import ProgressRing from "@/components/ui/ProgressRing";
import { BarChart3, TrendingUp, Trophy, Flame, Target, CheckCircle2, Clock } from "lucide-react";
import { WEEKLY_DATA } from "@/lib/data";
import { useProgress } from "@/context/ProgressContext";
import WeeklyChart from "@/components/dashboard/WeeklyChart";

export default function ProgressPage() {
  const { stats } = useProgress();

  return (
    <AppShell>
      <div className="space-y-5">
        {/* Header */}
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-2.5 mb-1">
            <BarChart3 size={20} className="text-[var(--accent)]" />
            <h1 className="text-2xl font-bold tracking-tight">Progress Analytics</h1>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            Performance analytics &amp; subject mastery
          </p>
        </div>

        {/* Overall progress card */}
        <div className="glass-card-static p-6 text-center animate-fade-in-up">
          <ProgressRing progress={stats.overallProgress} size={140} strokeWidth={10}>
            <div>
              <p className="text-3xl font-bold">{stats.overallProgress}%</p>
              <p className="text-xs text-[var(--text-secondary)]">Overall</p>
            </div>
          </ProgressRing>
          <p className="text-sm text-[var(--text-secondary)] mt-4">
            Day {stats.currentDay} of {stats.totalDays} · {stats.daysLeft} days remaining
          </p>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">
            {stats.completedTasks} of {stats.totalTasks} total tasks completed
          </p>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-in-up">
          <div className="glass-card p-4 text-center">
            <Flame size={20} className="text-[var(--accent)] mx-auto mb-1" />
            <p className="text-xl font-bold">{stats.streak}d</p>
            <p className="text-[11px] text-[var(--text-secondary)]">Day Streak</p>
          </div>
          <div className="glass-card p-4 text-center">
            <Trophy size={20} className="text-amber-500 mx-auto mb-1" />
            <p className="text-xl font-bold">{stats.dailyScore}</p>
            <p className="text-[11px] text-[var(--text-secondary)]">Daily Score / 100</p>
          </div>
          <div className="glass-card p-4 text-center">
            <CheckCircle2 size={20} className="text-emerald-500 mx-auto mb-1" />
            <p className="text-xl font-bold">{stats.completedTasks}</p>
            <p className="text-[11px] text-[var(--text-secondary)]">Completed Tasks</p>
          </div>
          <div className="glass-card p-4 text-center">
            <Clock size={20} className="text-blue-500 mx-auto mb-1" />
            <p className="text-xl font-bold">{stats.pendingTasks}</p>
            <p className="text-[11px] text-[var(--text-secondary)]">
              Pending ({stats.overduePendingTasks} due)
            </p>
          </div>
        </div>

        {/* Subject-wise progress */}
        <div className="animate-fade-in-up">
          <h2 className="font-semibold text-base mb-3">Subject-Wise Mastery</h2>
          <div className="space-y-3">
            {(stats.subjects || []).map((subject) => (
              <div key={subject.id} className="glass-card-static p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <span className="text-sm font-semibold">{subject.name}</span>
                    <span className="text-[11px] text-[var(--text-tertiary)] ml-2">
                      {subject.completedTasks} of {subject.totalTasks} tasks
                    </span>
                  </div>
                  <span
                    className="text-sm font-bold"
                    style={{ color: subject.accent }}
                  >
                    {subject.progressPercentage}%
                  </span>
                </div>
                <div className="h-2 bg-[rgba(0,0,0,0.06)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${subject.progressPercentage}%`,
                      backgroundColor: subject.accent,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Heatmap Calendar (LeetCode & GitHub style) */}
        <div className="animate-fade-in-up">
          <WeeklyChart data={WEEKLY_DATA} />
        </div>
      </div>
    </AppShell>
  );
}
