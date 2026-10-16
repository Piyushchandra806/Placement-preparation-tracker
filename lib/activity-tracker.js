/**
 * Activity Tracker — Server-side aggregation and database synchronization for Mission 90.
 */
import mongoose from 'mongoose';
import StudyPlan from '../models/StudyPlan.js';
import Task from '../models/Task.js';
import DailyProgress from '../models/DailyProgress.js';
import ReminderSetting from '../models/ReminderSetting.js';
import { calculateWeightedDailyScore, groupTaskStatsByCategory } from './scoring.js';
import {
  DEFAULT_TIMEZONE,
  getUserLocalDateString,
  parseDateString,
  addDaysToDateString,
  getDateForDayNumber,
  getDayNumberForDate,
  calculateActivityMetrics,
} from './activity-utils.js';

export {
  DEFAULT_TIMEZONE,
  getUserLocalDateString,
  parseDateString,
  addDaysToDateString,
  getDateForDayNumber,
  getDayNumberForDate,
  calculateActivityMetrics,
};

/**
 * Fetch and compute comprehensive progress metrics for an authenticated user.
 *
 * @param {string|mongoose.Types.ObjectId} userId
 * @param {string} [timeZone]
 * @returns {Promise<object>} Complete metrics payload
 */
export async function getComprehensiveProgressMetrics(userId, timeZone = null) {
  const userObjectId = mongoose.Types.ObjectId.isValid(userId)
    ? new mongoose.Types.ObjectId(userId)
    : userId;

  // 1. Fetch user timezone preference
  let effectiveTimeZone = timeZone;
  if (!effectiveTimeZone) {
    const reminderSetting = await ReminderSetting.findOne({ userId: userObjectId }).select('timezone').lean();
    effectiveTimeZone = reminderSetting?.timezone || DEFAULT_TIMEZONE;
  }

  // 2. Fetch active study plan
  const activePlan = await StudyPlan.findOne({ userId: userObjectId })
    .sort({ createdAt: -1 })
    .lean();

  const totalDays = activePlan ? activePlan.duration || 90 : 90;
  const planStartDate = activePlan?.startDate ? new Date(activePlan.startDate) : new Date();
  const startDateStr = getUserLocalDateString(planStartDate, effectiveTimeZone);
  const todayStr = getUserLocalDateString(new Date(), effectiveTimeZone);

  // 3. Fetch all tasks for this user
  const allTasks = await Task.find({ userId: userObjectId }).lean();

  // 4. Compute activity metrics
  const activityMetrics = calculateActivityMetrics({
    tasks: allTasks,
    startDateStr,
    todayStr,
    duration: totalDays,
  });

  const currentDay = activityMetrics.currentDay;
  const daysDone = Math.max(0, currentDay - 1);
  const daysLeft = Math.max(0, totalDays - currentDay);

  const totalTasksCount = allTasks.length;
  const completedTasksCount = allTasks.filter((t) => t.completed).length;
  const pendingTasksCount = Math.max(0, totalTasksCount - completedTasksCount);
  const overduePendingTasksCount = allTasks.filter(
    (t) => !t.completed && t.dayNumber < currentDay
  ).length;

  const overallProgress =
    totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

  // 5. Subject breakdown
  const subjectList = [
    { id: 'dsa', name: 'DSA in C++', accent: '#e8573a' },
    { id: 'quant', name: 'Quantitative Aptitude', accent: '#f59e42' },
    { id: 'reasoning', name: 'Logical Reasoning', accent: '#6c5ce7' },
    { id: 'english', name: 'English Speaking', accent: '#00b894' },
    { id: 'revision', name: 'Daily Placement Revision', accent: '#e8573a' },
  ];

  const subjectMetrics = subjectList.map((subj) => {
    const subjTasks = allTasks.filter((t) => t.subject === subj.id);
    const compCount = subjTasks.filter((t) => t.completed).length;
    return {
      id: subj.id,
      name: subj.name,
      accent: subj.accent,
      totalTasks: subjTasks.length,
      completedTasks: compCount,
      progressPercentage:
        subjTasks.length > 0 ? Math.round((compCount / subjTasks.length) * 100) : 0,
    };
  });

  // 6. Today's tasks & weighted daily score
  const todayTasks = allTasks.filter((t) => t.dayNumber === currentDay);
  const todayCategoryStats = groupTaskStatsByCategory(todayTasks);
  const todayDailyScore = calculateWeightedDailyScore(todayCategoryStats);
  const todayTotal = todayTasks.length;
  const todayCompleted = todayTasks.filter((t) => t.completed).length;
  const todayCompletionPct =
    todayTotal > 0 ? Math.round((todayCompleted / todayTotal) * 100) : 0;

  // 7. Sum of study minutes from DailyProgress
  const minutesAggregation = await DailyProgress.aggregate([
    { $match: { userId: userObjectId } },
    { $group: { _id: null, totalMinutes: { $sum: '$actualStudyMinutes' } } },
  ]);
  const totalStudyMinutes = minutesAggregation[0]?.totalMinutes || 0;

  // 8. 13-week breakdown from actual database completions
  const completedDayMap = new Map();
  for (const t of allTasks) {
    if (t.completed) {
      completedDayMap.set(t.dayNumber, (completedDayMap.get(t.dayNumber) || 0) + 1);
    }
  }

  const weeklyBreakdown = [];
  for (let w = 0; w < 13; w++) {
    const startDay = w * 7 + 1;
    const endDay = Math.min(startDay + 6, totalDays);
    let weekCompleted = 0;
    let weekTotal = 0;
    for (let d = startDay; d <= endDay; d++) {
      weekTotal += 5;
      weekCompleted += completedDayMap.get(d) || 0;
    }
    const pct = weekTotal > 0 ? Math.round((weekCompleted / weekTotal) * 100) : 0;
    const isCurrentWeek = currentDay >= startDay && currentDay <= endDay;
    const isCompleted = weekTotal > 0 && weekCompleted === weekTotal;

    weeklyBreakdown.push({
      id: w,
      weekNumber: w + 1,
      label: `Week ${w + 1}`,
      daysRange: `Day ${startDay}–${endDay}`,
      startDay,
      endDay,
      completedTasks: weekCompleted,
      totalTasks: weekTotal,
      progress: pct,
      isCurrentWeek,
      isCompleted,
    });
  }

  return {
    currentDay,
    totalDays,
    daysDone,
    daysLeft,
    startDate: startDateStr,
    currentDate: todayStr,
    timezone: effectiveTimeZone,
    overallProgress,
    streak: activityMetrics.currentStreak,
    currentStreak: activityMetrics.currentStreak,
    maxStreak: activityMetrics.maxStreak,
    totalActiveDays: activityMetrics.totalActiveDays,
    fullyCompletedDays: activityMetrics.fullyCompletedDays,
    totalTasks: totalTasksCount,
    completedTasks: completedTasksCount,
    pendingTasks: pendingTasksCount,
    overduePendingTasks: overduePendingTasksCount,
    totalStudyMinutes,
    dailyTargetHours: activePlan ? activePlan.dailyStudyTarget || 4 : 4,
    dailyScore: todayDailyScore,
    dailyCompletionPct: todayCompletionPct,
    categoryStats: todayCategoryStats,
    subjects: subjectMetrics,
    weeklyBreakdown,
    dailyActivity: activityMetrics.dailyActivity,
    studyPlanId: activePlan ? activePlan._id.toString() : null,
  };
}
