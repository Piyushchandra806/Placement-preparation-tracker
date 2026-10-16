/**
 * ActivityHeatmap / WeeklyChart — LeetCode & GitHub Style Activity Heatmap Calendar.
 *
 * Implements:
 * - Real-time date range ending on today's actual date in user's configured timezone.
 * - Dynamic study start date loaded from MongoDB (October 14, 2026 for existing plan).
 * - Dates before study start date are neutral empty space and excluded from statistics.
 * - Green cells ONLY when all assigned tasks for that day are 100% completed.
 * - Neutral grey cells for incomplete days (0 completed or some completed).
 * - Real-time optimistic synchronization with task completion toggles.
 * - Accurate statistics: Total active days, Completed days, Current streak, Max streak.
 * - Month labels, weekday alignment, tooltips, clear legend, and loading state.
 * - Preserves Apple-inspired glassmorphism UI.
 */
"use client";

import { useState, useMemo } from "react";
import { Info, ChevronDown, Check, Flame, Trophy, CalendarCheck2 } from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import {
  getUserLocalDateString,
  parseDateString,
  getDateForDayNumber,
} from "@/lib/activity-utils";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function WeeklyChart({ data: initialData }) {
  const { todayTasks, stats, isLoading } = useProgress();
  const [timeFilter, setTimeFilter] = useState("Current");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Derive canonical today date string in user's timezone (never hardcoded)
  const todayStr = useMemo(() => {
    return stats?.currentDate || getUserLocalDateString(new Date());
  }, [stats?.currentDate]);

  // Derive user's study plan start date from MongoDB
  const startDateStr = useMemo(() => {
    return stats?.startDate || "2026-10-14";
  }, [stats?.startDate]);

  // Live count of tasks completed today (optimistic reactive sync)
  const liveTodayState = useMemo(() => {
    if (!todayTasks || todayTasks.length === 0) {
      return {
        completed: stats?.completedTasksToday ?? (stats?.dailyActivity?.[todayStr]?.completedTasks || 0),
        total: 5,
        isComplete: (stats?.dailyActivity?.[todayStr]?.isFullyCompleted) || false,
      };
    }
    const completed = todayTasks.filter((t) => t.completed).length;
    const total = todayTasks.length;
    return {
      completed,
      total,
      isComplete: total > 0 && completed === total,
    };
  }, [todayTasks, stats, todayStr]);

  // Generate calendar months strictly starting from January of current year ending on today's actual date
  const { monthsData, totalCompletedTasks, totalActiveDays, fullyCompletedDays, currentStreak, maxStreak } =
    useMemo(() => {
      const parsedToday = parseDateString(todayStr);
      const endYear = parsedToday.year;
      const endMonth = parsedToday.month - 1; // 0-indexed (9 for October)
      const endDay = parsedToday.day;

      // Extract raw daily activity from MongoDB stats
      const rawActivity = stats?.dailyActivity || {};

      // Build active months starting strictly from January (m = 0) up to current month (endMonth)
      // Removes all months prior to January
      const months = [];

      for (let m = 0; m <= endMonth; m++) {
        const y = endYear;
        const monthName = MONTH_NAMES[m];
        const isCurrentMonth = m === endMonth;

        // For current month, the graph ends on today's date
        const daysInMonth = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
        const maxDayToRender = isCurrentMonth ? endDay : daysInMonth;

        const columns = [];
        let currentCol = new Array(7).fill(null);

        for (let d = 1; d <= maxDayToRender; d++) {
          const dDate = new Date(Date.UTC(y, m, d));
          const dayOfWeek = dDate.getUTCDay(); // 0 (Sun) to 6 (Sat)
          const dateKey = `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

          const isFuture = dateKey > todayStr;
          const isToday = dateKey === todayStr;
          const isBeforeStart = dateKey < startDateStr;

          // Lookup real task completion record from MongoDB
          let dayActivity = rawActivity[dateKey] || null;

          // If this is today, synchronize reactively with live todayTasks state
          if (isToday) {
            dayActivity = {
              date: dateKey,
              dayNumber: stats?.currentDay || 3,
              totalTasks: liveTodayState.total,
              completedTasks: liveTodayState.completed,
              isFullyCompleted: liveTodayState.isComplete,
              hasActivity: liveTodayState.completed > 0,
              isFuture: false,
              isToday: true,
              isBeforeStart: false,
            };
          }

          const totalTasks = dayActivity?.totalTasks || 5;
          const completedTasks = isBeforeStart || isFuture ? 0 : (dayActivity?.completedTasks || 0);
          const isFullyCompleted = !isBeforeStart && !isFuture && dayActivity?.isFullyCompleted;
          const dayNumber = dayActivity?.dayNumber || null;

          currentCol[dayOfWeek] = {
            day: d,
            date: dDate,
            dateKey,
            dayNumber,
            totalTasks,
            completedTasks,
            isFullyCompleted,
            isFuture,
            isToday,
            isBeforeStart,
          };

          if (dayOfWeek === 6 || d === maxDayToRender) {
            columns.push(currentCol);
            currentCol = new Array(7).fill(null);
          }
        }

        // Only include months that have at least one column
        if (columns.length > 0) {
          months.push({
            monthName,
            year: y,
            monthIndex: m,
            columns,
          });
        }
      }

      // Compute statistics strictly from real MongoDB data within study plan range
      const effectiveActiveDays = stats?.totalActiveDays ?? 0;
      const effectiveCompletedDays = stats?.fullyCompletedDays ?? 0;
      const effectiveCurrentStreak = stats?.currentStreak ?? (stats?.streak ?? 0);
      const effectiveMaxStreak = stats?.maxStreak ?? 0;
      const effectiveCompletedTasks = stats?.completedTasks ?? 0;

      return {
        monthsData: months,
        totalCompletedTasks: effectiveCompletedTasks,
        totalActiveDays: effectiveActiveDays,
        fullyCompletedDays: effectiveCompletedDays,
        currentStreak: effectiveCurrentStreak,
        maxStreak: effectiveMaxStreak,
      };
    }, [todayStr, startDateStr, stats, liveTodayState]);

  // Apply time filter
  const displayedMonths = useMemo(() => {
    if (timeFilter === "Last 90 Days") {
      return monthsData.slice(-3);
    }
    if (timeFilter === "2026") {
      return monthsData.filter((m) => m.year === 2026);
    }
    return monthsData;
  }, [monthsData, timeFilter]);

  // Cell coloring strictly enforces clear visibility in both Light Mode and Dark Mode:
  // - High contrast borders and fills so every single box is crisply and distinctly visible.
  // - All assigned tasks completed: vibrant green (#22c55e) with glowing emerald border.
  // - Incomplete tasks (< 100%): distinct slate-grey with defined border.
  // - Zero completed / before start: crisp neutral box with clear 1px border.
  // - Future dates: subtle dashed boundary.
  const getCellColorClass = (cell) => {
    if (!cell) return "";

    if (cell.isFuture) {
      return "bg-black/[0.02] dark:bg-white/[0.02] border border-dashed border-zinc-300/40 dark:border-zinc-700/40 opacity-25 cursor-not-allowed";
    }

    // Fully completed day (100% of tasks completed): Vibrant Emerald GREEN
    if (cell.isFullyCompleted) {
      return "bg-[#22c55e] dark:bg-[#22c55e] border border-emerald-600 dark:border-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.55)] hover:brightness-110";
    }

    // Some tasks completed (< 100%): Incomplete, distinct slate grey with crisp border
    if (cell.completedTasks > 0) {
      return "bg-[#94a3b8] dark:bg-[#475569] border border-slate-500 dark:border-slate-400 hover:bg-[#64748b] dark:hover:bg-[#64748b]";
    }

    // Dates before study start date: Clearly defined neutral empty cells with crisp borders
    if (cell.isBeforeStart) {
      return "bg-[#eaecf0] dark:bg-[#252b37] border border-[#cbd5e1] dark:border-[#3d4556] hover:border-zinc-500 dark:hover:border-zinc-400 cursor-default";
    }

    // Zero completed tasks: Clearly defined neutral empty cells with crisp borders
    return "bg-[#eaecf0] dark:bg-[#252b37] border border-[#cbd5e1] dark:border-[#3d4556] hover:border-zinc-500 dark:hover:border-zinc-400";
  };

  // Tooltip content generator
  const getCellTooltip = (cell) => {
    if (!cell) return "";
    const formattedDate = cell.date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });

    if (cell.isBeforeStart) {
      return `No study scheduled · ${formattedDate} (Before study start)`;
    }
    if (cell.isFuture) {
      return `Future date · ${formattedDate}`;
    }
    if (cell.isFullyCompleted) {
      return `${cell.completedTasks}/${cell.totalTasks} tasks completed · Day ${cell.dayNumber} · Fully completed ✓`;
    }
    if (cell.completedTasks > 0) {
      return `${cell.completedTasks}/${cell.totalTasks} tasks completed · Day ${cell.dayNumber} · Incomplete`;
    }
    return `0/${cell.totalTasks} tasks completed · Day ${cell.dayNumber} · Incomplete`;
  };

  // Loading skeleton state
  if (isLoading && !stats?.dailyActivity) {
    return (
      <div className="glass-card-static p-5 overflow-hidden animate-pulse relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <div className="h-7 w-48 bg-black/5 dark:bg-white/5 rounded-lg" />
          <div className="h-6 w-72 bg-black/5 dark:bg-white/5 rounded-lg" />
        </div>
        <div className="h-32 bg-black/5 dark:bg-white/5 rounded-xl mb-3" />
        <div className="h-5 w-64 bg-black/5 dark:bg-white/5 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="glass-card-static p-5 overflow-hidden animate-fade-in relative">
      {/* ─── Top Header (LeetCode & GitHub style) ─── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        {/* Left: Total Completed Tasks + Info Pill */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)]">
            {totalCompletedTasks}
          </span>
          <span className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            completed tasks
          </span>
          <button
            type="button"
            onClick={() => setShowInfoModal(!showInfoModal)}
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            title="Activity Heatmap Information"
            aria-label="Activity Heatmap Info"
          >
            <Info size={14} />
          </button>
        </div>

        {/* Right: Total Active Days, Completed Days, Current Streak, Max Streak, Dropdown Filter */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-xs font-semibold text-zinc-600 dark:text-zinc-400">
          <div title="Distinct days with at least 1 completed task">
            Total active days:{" "}
            <strong className="text-[var(--foreground)] font-bold">
              {totalActiveDays}
            </strong>
          </div>
          <div title="Days with 100% of assigned daily tasks completed">
            Completed days:{" "}
            <strong className="text-[var(--foreground)] font-bold text-emerald-600 dark:text-emerald-400">
              {fullyCompletedDays}
            </strong>
          </div>
          <div className="flex items-center gap-1" title="Consecutive completed days">
            <Flame size={13} className="text-amber-500" />
            <span>Streak:</span>
            <strong className="text-[var(--foreground)] font-bold">
              {currentStreak}
            </strong>
          </div>
          <div className="flex items-center gap-1" title="Longest consecutive completed streak">
            <Trophy size={13} className="text-amber-500" />
            <span>Max streak:</span>
            <strong className="text-[var(--foreground)] font-bold">
              {maxStreak}
            </strong>
          </div>

          {/* Time Filter Dropdown (Current ▾) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsFilterDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-xs font-semibold text-[var(--foreground)] border border-black/5 dark:border-white/10 transition-all cursor-pointer shadow-2xs"
            >
              <span>{timeFilter}</span>
              <ChevronDown size={13} className="text-zinc-600 dark:text-zinc-400" />
            </button>

            {isFilterDropdownOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-36 rounded-xl bg-white dark:bg-[#18181f] border border-black/10 dark:border-white/15 shadow-xl py-1 z-30 animate-scale-in text-xs font-medium text-[var(--foreground)]">
                {["Current", "2026", "Last 90 Days"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setTimeFilter(option);
                      setIsFilterDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-between ${
                      timeFilter === option ? "font-bold text-[var(--accent)]" : ""
                    }`}
                  >
                    <span>{option}</span>
                    {timeFilter === option && <Check size={13} />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── Info explanation modal (if toggled) ─── */}
      {showInfoModal && (
        <div className="mb-4 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 text-xs text-[var(--text-secondary)] dark:text-zinc-300 flex items-start justify-between gap-2 animate-fade-in">
          <div>
            <p className="font-semibold text-[var(--foreground)] mb-1">
              Mission 90 Activity Heatmap Rules
            </p>
            <ul className="list-disc pl-4 space-y-0.5 text-zinc-600 dark:text-zinc-400">
              <li>
                <strong>Green Cell:</strong> All assigned tasks for that day are 100% completed.
              </li>
              <li>
                <strong>Grey Cell:</strong> Incomplete day (zero or partial tasks completed).
              </li>
              <li>
                <strong>Streak:</strong> Consecutive days where every single daily task was completed.
              </li>
              <li>
                <strong>Dynamic Date:</strong> Automatically anchored to today ({todayStr}) in your timezone.
              </li>
            </ul>
          </div>
          <button
            onClick={() => setShowInfoModal(false)}
            className="text-[var(--text-tertiary)] hover:text-black dark:hover:text-white font-bold p-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* ─── Heatmap Calendar Grid (Horizontally scrollable for mobile responsiveness) ─── */}
      <div className="overflow-x-auto pb-2 pt-1 scrollbar-thin">
        <div className="flex justify-between items-start gap-1 sm:gap-1.5 w-full min-w-[560px] select-none">
          {displayedMonths.map((month, mIdx) => (
            <div key={`${month.monthName}-${month.year}-${mIdx}`} className="flex flex-col items-center shrink-0">
              {/* Columns of 7 rows (Sunday to Saturday) */}
              <div className="flex gap-[2px] justify-center">
                {month.columns.map((col, cIdx) => (
                  <div key={cIdx} className="flex flex-col gap-[2px]">
                    {col.map((cell, rIdx) => {
                      if (!cell) {
                        return (
                          <div
                            key={rIdx}
                            className="w-[9.5px] h-[9.5px] sm:w-[10px] sm:h-[10px] opacity-0 pointer-events-none"
                          />
                        );
                      }

                      const colorClass = getCellColorClass(cell);
                      const tooltipText = getCellTooltip(cell);

                      return (
                        <div
                          key={rIdx}
                          onMouseEnter={() => setHoveredCell(cell)}
                          onMouseLeave={() => setHoveredCell(null)}
                          onClick={() => setHoveredCell(cell)}
                          className={`w-[9.5px] h-[9.5px] sm:w-[10px] sm:h-[10px] rounded-[2.5px] transition-all cursor-pointer ${colorClass}`}
                          title={tooltipText}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Month label at bottom */}
              <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mt-2">
                {month.monthName}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Active Tooltip / Status Display & Legend ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-3 pt-3 border-t border-black/[0.04] dark:border-white/10 text-xs">
        {/* Dynamic Hover Tooltip Bar */}
        <div className="min-h-5 flex items-center gap-2">
          {hoveredCell ? (
            <div className="flex items-center gap-1.5 text-xs text-[var(--foreground)] animate-fade-in font-medium">
              {hoveredCell.isBeforeStart ? (
                <span className="text-zinc-500">
                  Before study-plan start ({hoveredCell.dateKey})
                </span>
              ) : hoveredCell.isFuture ? (
                <span className="text-zinc-400">
                  Future date ({hoveredCell.dateKey})
                </span>
              ) : (
                <>
                  <span
                    className={`font-bold ${
                      hoveredCell.isFullyCompleted
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-[var(--accent)]"
                    }`}
                  >
                    {hoveredCell.completedTasks}/{hoveredCell.totalTasks} completed
                  </span>
                  <span>·</span>
                  <span className="font-semibold">Day {hoveredCell.dayNumber}</span>
                  <span>·</span>
                  <span>
                    {hoveredCell.date.toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </span>
                  {hoveredCell.isFullyCompleted && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                      Done ✓
                    </span>
                  )}
                  {hoveredCell.isToday && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 bg-[var(--accent-bg)] text-[var(--accent)] rounded-full">
                      Today
                    </span>
                  )}
                </>
              )}
            </div>
          ) : (
            <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
              Hover over or tap any cell to view tasks completed on that date
            </span>
          )}
        </div>

        {/* Clear Legend (No Activity -> Incomplete -> Day Completed 100%) */}
        <div className="flex items-center gap-3 text-[11px] text-zinc-600 dark:text-zinc-400 font-semibold self-end sm:self-auto flex-wrap">
          <div className="flex items-center gap-1.5">
            <div
              className="w-[10.5px] h-[10.5px] rounded-[2.5px] bg-[#eaecf0] dark:bg-[#252b37] border border-[#cbd5e1] dark:border-[#3d4556]"
              title="No tasks completed"
            />
            <span>No activity</span>
          </div>

          <div className="flex items-center gap-1.5">
            <div
              className="w-[10.5px] h-[10.5px] rounded-[2.5px] bg-[#94a3b8] dark:bg-[#475569] border border-slate-500 dark:border-slate-400"
              title="Partial completion (< 100%)"
            />
            <span>Incomplete</span>
          </div>

          <div className="flex items-center gap-1.5">
            <div
              className="w-[10.5px] h-[10.5px] rounded-[2.5px] bg-[#22c55e] dark:bg-[#22c55e] border border-emerald-600 dark:border-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.55)]"
              title="100% of tasks completed"
            />
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Day completed (100%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
