/**
 * Study Plan — Interactive 90-day calendar view with full syllabus breakdown.
 */
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import AppShell from "@/components/layout/AppShell";
import {
  Calendar,
  ChevronRight,
  BookOpen,
  Code2,
  Calculator,
  Brain,
  MessageCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { SUBJECTS } from "@/lib/data";
import { COMPLETE_90_DAYS_CURRICULUM } from "@/lib/complete-90-days-syllabus";
import { useProgress } from "@/context/ProgressContext";

const SUBJECT_ICON_MAP = {
  dsa: Code2,
  quant: Calculator,
  reasoning: Brain,
  english: MessageCircle,
};

const SUBJECT_URL_MAP = {
  dsa: "/dsa",
  quant: "/aptitude",
  reasoning: "/reasoning",
  english: "/english",
};

export default function PlanPage() {
  const { stats } = useProgress();
  const currentDay = stats?.currentDay || 1;

  // Use real weeklyBreakdown from database if loaded, or compute dynamic baseline
  const weeks = useMemo(() => {
    if (stats?.weeklyBreakdown && stats.weeklyBreakdown.length === 13) {
      return stats.weeklyBreakdown;
    }
    const list = [];
    for (let w = 0; w < 13; w++) {
      const startDay = w * 7 + 1;
      const endDay = Math.min(startDay + 6, 90);
      const isCurrentWeek = currentDay >= startDay && currentDay <= endDay;
      list.push({
        id: w,
        weekNumber: w + 1,
        label: `Week ${w + 1}`,
        daysRange: `Day ${startDay}–${endDay}`,
        startDay,
        endDay,
        isCurrentWeek,
        isCompleted: false,
        progress: 0,
      });
    }
    return list;
  }, [stats?.weeklyBreakdown, currentDay]);

  const defaultExpandedWeek = Math.min(13, Math.max(1, Math.ceil(currentDay / 7)));
  const [expandedWeek, setExpandedWeek] = useState(defaultExpandedWeek);

  return (
    <AppShell>
      <div className="space-y-5 animate-fade-in pb-12">
        {/* Header */}
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-2.5 mb-1">
            <Calendar size={20} className="text-[var(--accent)]" />
            <h1 className="text-2xl font-bold tracking-tight">90-Day Study Plan</h1>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Complete daily placement preparation roadmap with targeted missions
          </p>
        </div>

        {/* Daily Time Target Allocation Box */}
        <div className="glass-card-static p-4 animate-fade-in-up space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Daily Study Target
            </span>
            <span className="text-xs font-bold text-[var(--accent)] flex items-center gap-1">
              <Clock size={12} /> 180 Minutes / Day
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-rose-50/60 border border-rose-200/40 text-rose-900 flex items-center gap-2">
              <Code2 size={16} className="text-[#e8573a]" />
              <div>
                <p className="font-bold">DSA in C++</p>
                <p className="text-[10px] text-rose-700">75 mins</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/40 text-amber-900 flex items-center gap-2">
              <Calculator size={16} className="text-[#f59e42]" />
              <div>
                <p className="font-bold">Aptitude</p>
                <p className="text-[10px] text-amber-700">25 mins</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-200/40 text-purple-900 flex items-center gap-2">
              <Brain size={16} className="text-[#6c5ce7]" />
              <div>
                <p className="font-bold">Reasoning</p>
                <p className="text-[10px] text-purple-700">25 mins</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/40 text-emerald-900 flex items-center gap-2">
              <MessageCircle size={16} className="text-[#00b894]" />
              <div>
                <p className="font-bold">English</p>
                <p className="text-[10px] text-emerald-700">25 mins</p>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-[var(--text-tertiary)] italic">
            + 10 mins Daily Revision &amp; 20 mins Buffer for challenging problems
          </p>
        </div>

        {/* Today's Focus Box */}
        <div className="glass-card-static p-5 animate-fade-in-up">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-[var(--text-secondary)]">
              Today&apos;s Focus — Day {currentDay}
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent)]">
              Phase {Math.min(4, Math.ceil(currentDay / 23))}
            </span>
          </div>

          <div className="space-y-2">
            {SUBJECTS.map((subject) => {
              const Icon =
                subject.id === "dsa"
                  ? Code2
                  : subject.id === "aptitude"
                  ? Calculator
                  : subject.id === "reasoning"
                  ? Brain
                  : MessageCircle;

              const normalizedSubj = subject.id === "aptitude" ? "quant" : subject.id;
              const todayCurriculum = COMPLETE_90_DAYS_CURRICULUM.find(
                (t) => t.dayNumber === currentDay && t.subject === normalizedSubj
              );

              return (
                <Link
                  key={subject.id}
                  href={`/${subject.slug}`}
                  className="flex items-center gap-3 py-2 px-3 rounded-xl bg-[rgba(0,0,0,0.02)] hover:bg-white/80 transition-all group border border-transparent hover:border-[rgba(0,0,0,0.05)]"
                >
                  <Icon size={16} style={{ color: subject.accent }} />
                  <span className="text-sm font-semibold flex-1 group-hover:text-[var(--accent)] transition-colors">
                    {subject.name}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] font-medium">
                    {todayCurriculum?.topic || subject.todayTopic}
                  </span>
                  <ChevronRight
                    size={14}
                    className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* 13-Week Expandable Roadmap */}
        <div className="animate-fade-in-up space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-base">Weekly Breakdown (13 Weeks)</h2>
            <span className="text-xs text-[var(--text-secondary)]">
              Click a week to view syllabus
            </span>
          </div>

          <div className="space-y-2.5">
            {weeks.map((week) => {
              const isExpanded = expandedWeek === week.weekNumber;
              const weekTasks = COMPLETE_90_DAYS_CURRICULUM.filter(
                (t) => t.dayNumber >= week.startDay && t.dayNumber <= week.endDay
              );
              const isWeekCompleted = week.isCompleted || (week.progress === 100 && week.totalTasks > 0);

              return (
                <div
                  key={week.id}
                  className={`glass-card transition-all overflow-hidden ${
                    week.isCurrentWeek
                      ? "border-[var(--accent)] border-opacity-40"
                      : ""
                  }`}
                >
                  {/* Header Row */}
                  <div
                    onClick={() =>
                      setExpandedWeek(isExpanded ? null : week.weekNumber)
                    }
                    className="p-4 flex items-center gap-3 cursor-pointer select-none"
                  >
                    {/* Week number badge */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        week.isCurrentWeek
                          ? "bg-[var(--accent)] text-white shadow-sm"
                          : isWeekCompleted
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                          : "bg-[rgba(0,0,0,0.04)] text-[var(--text-tertiary)]"
                      }`}
                    >
                      {week.weekNumber}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-[var(--foreground)]">
                          {week.label}
                        </p>
                        {week.isCurrentWeek && (
                          <span className="text-[10px] text-[var(--accent)] bg-[var(--accent-bg)] px-2 py-0.5 rounded-full font-bold">
                            Current Week
                          </span>
                        )}
                        {isWeekCompleted && (
                          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                            Completed
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                        {week.daysRange} · {weekTasks.length} subject tasks
                      </p>
                    </div>

                    <div className="text-xs font-semibold text-[var(--text-secondary)] flex items-center gap-2">
                      <span>{week.progress || 0}%</span>
                      <ChevronRight
                        size={16}
                        className={`text-[var(--text-tertiary)] transition-transform duration-200 ${
                          isExpanded ? "rotate-90 text-[var(--accent)]" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Daily Tasks List */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 border-t border-[rgba(0,0,0,0.04)] space-y-2 animate-fade-in">
                      <div className="grid grid-cols-1 gap-2 pt-2">
                        {Array.from(
                          { length: week.endDay - week.startDay + 1 },
                          (_, i) => {
                            const d = week.startDay + i;
                            const dayTasks = weekTasks.filter(
                              (t) => t.dayNumber === d
                            );
                            const dsaTask = dayTasks.find(
                              (t) => t.subject === "dsa"
                            );

                            return (
                              <div
                                key={d}
                                className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="text-xs font-bold px-2 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.08] text-[var(--foreground)]">
                                    Day {d}
                                  </span>
                                  <div>
                                    <p className="text-xs font-bold text-[var(--foreground)]">
                                      {dsaTask?.topic || "Comprehensive Placement Focus"}
                                    </p>
                                    <p className="text-[11px] text-[var(--text-secondary)] dark:text-zinc-400 truncate max-w-xs">
                                      {dsaTask?.title}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center gap-1.5 flex-wrap">
                                  {["dsa", "quant", "reasoning", "english"].map(
                                    (subj) => {
                                      const Icon = SUBJECT_ICON_MAP[subj];
                                      const targetUrl = SUBJECT_URL_MAP[subj];
                                      return (
                                        <Link
                                          key={subj}
                                          href={targetUrl}
                                          className="text-[10px] font-semibold px-2 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.14] text-[var(--foreground)] hover:text-[var(--accent)] border border-transparent hover:border-black/5 dark:hover:border-white/10 transition-all flex items-center gap-1"
                                        >
                                          <Icon size={11} />
                                          <span className="capitalize">
                                            {subj === "quant" ? "Aptitude" : subj}
                                          </span>
                                        </Link>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
