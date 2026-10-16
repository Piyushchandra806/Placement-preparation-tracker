/**
 * Pure activity and calendar date utilities (Safe for client and server).
 *
 * Implements:
 * - Dynamic date formatting in user's timezone (YYYY-MM-DD).
 * - Exact Day 1 -> 90 to calendar date mapping.
 * - Accurate streak, active days, and fully completed days calculation.
 * - Green cell strictly for 100% completed days.
 */

export const DEFAULT_TIMEZONE = 'Asia/Kolkata';

/**
 * Format a Date object (or timestamp) to YYYY-MM-DD in the specified timezone.
 *
 * @param {Date|string|number} [date=new Date()]
 * @param {string} [timeZone=DEFAULT_TIMEZONE]
 * @returns {string} YYYY-MM-DD
 */
export function getUserLocalDateString(date = new Date(), timeZone = DEFAULT_TIMEZONE) {
  try {
    const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: timeZone || DEFAULT_TIMEZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(d);
  } catch {
    const d = new Date(date);
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
}

/**
 * Parse YYYY-MM-DD into year, month, day and UTC timestamp.
 *
 * @param {string} dateStr
 * @returns {{ year: number, month: number, day: number, utcMs: number }}
 */
export function parseDateString(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') {
    const today = new Date();
    return {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
      utcMs: Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()),
    };
  }
  const [y, m, d] = dateStr.split('-').map(Number);
  return {
    year: y,
    month: m,
    day: d,
    utcMs: Date.UTC(y, m - 1, d),
  };
}

/**
 * Add or subtract days from a YYYY-MM-DD string cleanly using UTC.
 *
 * @param {string} dateStr
 * @param {number} daysToAdd
 * @returns {string} YYYY-MM-DD
 */
export function addDaysToDateString(dateStr, daysToAdd) {
  const parsed = parseDateString(dateStr);
  const target = new Date(parsed.utcMs + daysToAdd * 86400000);
  const y = target.getUTCFullYear();
  const m = String(target.getUTCMonth() + 1).padStart(2, '0');
  const d = String(target.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Get calendar date string for a given dayNumber in the study plan.
 * Day 1 = startDateStr + 0 days.
 *
 * @param {string} startDateStr
 * @param {number} dayNumber 1-indexed
 * @returns {string} YYYY-MM-DD
 */
export function getDateForDayNumber(startDateStr, dayNumber) {
  return addDaysToDateString(startDateStr, Math.max(0, dayNumber - 1));
}

/**
 * Get dayNumber for a given calendar date string.
 *
 * @param {string} startDateStr
 * @param {string} dateStr
 * @returns {number}
 */
export function getDayNumberForDate(startDateStr, dateStr) {
  const startParsed = parseDateString(startDateStr);
  const dateParsed = parseDateString(dateStr);
  const diffDays = Math.round((dateParsed.utcMs - startParsed.utcMs) / 86400000);
  return diffDays + 1; // 1-indexed
}

/**
 * Calculate accurate completion heatmap data and statistics from task records.
 *
 * @param {object} params
 * @param {Array} params.tasks - Array of tasks (must have dayNumber and completed)
 * @param {string} params.startDateStr - Study plan start date YYYY-MM-DD
 * @param {string} params.todayStr - Current date YYYY-MM-DD
 * @param {number} [params.duration=90] - Total study plan duration
 * @returns {object} Calculated metrics
 */
export function calculateActivityMetrics({ tasks = [], startDateStr, todayStr, duration = 90 }) {
  const safeStart = startDateStr || '2026-10-14';
  const safeToday = todayStr || getUserLocalDateString(new Date());

  // Determine current day in the study plan
  const dayDiffFromStart = getDayNumberForDate(safeStart, safeToday);
  const currentDay = Math.max(1, Math.min(dayDiffFromStart, duration));

  // Map tasks by dayNumber
  const dayTaskMap = new Map();
  for (const task of tasks) {
    const day = task.dayNumber;
    if (!dayTaskMap.has(day)) {
      dayTaskMap.set(day, { total: 0, completed: 0, tasks: [] });
    }
    const entry = dayTaskMap.get(day);
    entry.total += 1;
    if (task.completed) {
      entry.completed += 1;
    }
    entry.tasks.push(task);
  }

  // Build daily activity map across the plan duration
  const dailyActivity = {};
  for (let d = 1; d <= duration; d++) {
    const dateStr = getDateForDayNumber(safeStart, d);
    const dayData = dayTaskMap.get(d) || { total: 5, completed: 0, tasks: [] };
    const totalTasks = dayData.total || 5;
    const completedTasks = dayData.completed || 0;

    const isFuture = dateStr > safeToday;
    const isToday = dateStr === safeToday;
    const isBeforeStart = dateStr < safeStart;

    // A date becomes green ONLY when all tasks assigned to that date are completed
    // and the date is within study plan and not in the future.
    const isFullyCompleted = !isFuture && !isBeforeStart && totalTasks > 0 && completedTasks === totalTasks;
    const hasActivity = !isFuture && !isBeforeStart && completedTasks > 0;

    dailyActivity[dateStr] = {
      date: dateStr,
      dayNumber: d,
      totalTasks,
      completedTasks,
      isFullyCompleted,
      hasActivity,
      isFuture,
      isToday,
      isBeforeStart,
    };
  }

  // 1. Total active days:
  // Count distinct dates on which at least one assigned task was completed,
  // within the study-plan date range up to today.
  let totalActiveDays = 0;

  // 2. Fully completed days:
  // Count distinct dates on which all assigned daily tasks were completed.
  let fullyCompletedDays = 0;

  for (let d = 1; d <= currentDay; d++) {
    const dateStr = getDateForDayNumber(safeStart, d);
    const activity = dailyActivity[dateStr];
    if (activity) {
      if (activity.hasActivity) {
        totalActiveDays += 1;
      }
      if (activity.isFullyCompleted) {
        fullyCompletedDays += 1;
      }
    }
  }

  // 3. Current streak:
  // Count consecutive fully completed days ending today.
  // If today is not complete, calculate streak according to last completed day ending yesterday.
  let currentStreak = 0;
  const todayDateStr = getDateForDayNumber(safeStart, currentDay);
  const todayActivity = dailyActivity[todayDateStr];
  const isTodayComplete = todayActivity?.isFullyCompleted;

  const streakStartDay = isTodayComplete ? currentDay : currentDay - 1;
  for (let d = streakStartDay; d >= 1; d--) {
    const dateStr = getDateForDayNumber(safeStart, d);
    const act = dailyActivity[dateStr];
    if (act?.isFullyCompleted) {
      currentStreak += 1;
    } else {
      break;
    }
  }

  // 4. Maximum streak:
  // Longest consecutive sequence of fully completed days in the study plan history.
  let maxStreak = 0;
  let runningStreak = 0;
  for (let d = 1; d <= currentDay; d++) {
    const dateStr = getDateForDayNumber(safeStart, d);
    const act = dailyActivity[dateStr];
    if (act?.isFullyCompleted) {
      runningStreak += 1;
      if (runningStreak > maxStreak) {
        maxStreak = runningStreak;
      }
    } else {
      runningStreak = 0;
    }
  }

  return {
    currentDay,
    startDateStr: safeStart,
    todayStr: safeToday,
    dailyActivity,
    totalActiveDays,
    fullyCompletedDays,
    currentStreak,
    maxStreak,
  };
}
