import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/mongodb';
import StudyPlan from '@/models/StudyPlan';
import Task from '@/models/Task';
import DailyProgress from '@/models/DailyProgress';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import { calculateWeightedDailyScore, groupTaskStatsByCategory } from '@/lib/scoring';

/**
 * Calculate user's consecutive day study streak.
 */
async function calculateStreak(userId) {
  const progressRecords = await DailyProgress.find({
    userId,
    completedTasks: { $gt: 0 },
  })
    .sort({ date: -1 })
    .select('date')
    .lean();

  if (!progressRecords.length) return 0;

  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let checkDate = new Date(today);

  for (const record of progressRecords) {
    const recordDate = new Date(record.date);
    recordDate.setHours(0, 0, 0, 0);

    const diffDays = Math.round((checkDate - recordDate) / (1000 * 60 * 60 * 24));

    // Can be today (diff 0) or yesterday (diff 1)
    if (diffDays === 0 || diffDays === 1) {
      streak += 1;
      checkDate = new Date(recordDate);
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

/**
 * GET /api/progress/overall
 * Calculates and returns comprehensive progress metrics for the authenticated user.
 */
export async function GET(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    await connectToDatabase();

    const activePlan = await StudyPlan.findOne({ userId: auth.user.id })
      .sort({ createdAt: -1 })
      .lean();

    const totalDays = activePlan ? activePlan.duration || 90 : 90;

    // Calculate current study day
    let currentDay = 1;
    let daysDone = 0;
    let daysLeft = totalDays;

    if (activePlan && activePlan.startDate) {
      const start = new Date(activePlan.startDate);
      start.setHours(0, 0, 0, 0);
      const now = new Date();
      now.setHours(0, 0, 0, 0);

      const dayDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
      currentDay = Math.max(1, Math.min(dayDiff, totalDays));
      daysDone = Math.max(0, currentDay - 1);
      daysLeft = Math.max(0, totalDays - currentDay);
    }

    // Task counts
    const [totalTasks, completedTasks, overduePendingTasks] = await Promise.all([
      Task.countDocuments({ userId: auth.user.id }),
      Task.countDocuments({ userId: auth.user.id, completed: true }),
      Task.countDocuments({
        userId: auth.user.id,
        completed: false,
        dayNumber: { $lt: currentDay },
      }),
    ]);

    const overallProgress =
      totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Subject breakdown
    const subjectList = [
      { id: 'dsa', name: 'DSA in C++', accent: '#e8573a' },
      { id: 'quant', name: 'Quantitative Aptitude', accent: '#f59e42' },
      { id: 'reasoning', name: 'Logical Reasoning', accent: '#6c5ce7' },
      { id: 'english', name: 'English Speaking', accent: '#00b894' },
      { id: 'revision', name: 'Daily Placement Revision', accent: '#e8573a' },
    ];

    const subjectMetrics = await Promise.all(
      subjectList.map(async (subj) => {
        const [total, completed] = await Promise.all([
          Task.countDocuments({ userId: auth.user.id, subject: subj.id }),
          Task.countDocuments({
            userId: auth.user.id,
            subject: subj.id,
            completed: true,
          }),
        ]);

        return {
          id: subj.id,
          name: subj.name,
          accent: subj.accent,
          totalTasks: total,
          completedTasks: completed,
          progressPercentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        };
      })
    );

    // Calculate user streak
    const streak = await calculateStreak(auth.user.id);

    // Sum of study minutes from DailyProgress
    const minutesAggregation = await DailyProgress.aggregate([
      { $match: { userId: activePlan ? activePlan.userId : null } },
      { $group: { _id: null, totalMinutes: { $sum: '$actualStudyMinutes' } } },
    ]);
    const totalStudyMinutes = minutesAggregation[0]?.totalMinutes || 0;

    // Fetch today's tasks for currentDay to compute live daily score
    const todayTasks = await Task.find({
      userId: auth.user.id,
      dayNumber: currentDay,
    }).lean();

    const todayTotal = todayTasks.length;
    const todayCompleted = todayTasks.filter((t) => t.completed).length;
    const todayCategoryStats = groupTaskStatsByCategory(todayTasks);
    const dailyScore = calculateWeightedDailyScore(todayCategoryStats);
    const dailyCompletionPct =
      todayTotal > 0 ? Math.round((todayCompleted / todayTotal) * 100) : 0;

    // Compute real 13-week breakdown from actual database completions
    const userObjectId = mongoose.Types.ObjectId.isValid(auth.user.id)
      ? new mongoose.Types.ObjectId(auth.user.id)
      : auth.user.id;

    const completedTasksByDay = await Task.aggregate([
      {
        $match: {
          userId: userObjectId,
          completed: true,
        },
      },
      {
        $group: {
          _id: '$dayNumber',
          count: { $sum: 1 },
        },
      },
    ]);

    const completedDayMap = new Map();
    completedTasksByDay.forEach((item) => {
      completedDayMap.set(item._id, item.count);
    });

    const weeklyBreakdown = [];
    for (let w = 0; w < 13; w++) {
      const startDay = w * 7 + 1;
      const endDay = Math.min(startDay + 6, totalDays);
      let weekCompleted = 0;
      let weekTotal = 0;
      for (let d = startDay; d <= endDay; d++) {
        weekTotal += 5; // 5 curriculum tasks per day
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

    return successResponse({
      stats: {
        currentDay,
        totalDays,
        daysDone,
        daysLeft,
        overallProgress,
        streak,
        totalTasks,
        completedTasks,
        pendingTasks: Math.max(0, totalTasks - completedTasks),
        overduePendingTasks,
        totalStudyMinutes,
        dailyTargetHours: activePlan ? activePlan.dailyStudyTarget || 4 : 4,
        dailyScore,
        dailyCompletionPct,
        categoryStats: todayCategoryStats,
        subjects: subjectMetrics,
        weeklyBreakdown,
        studyPlanId: activePlan ? activePlan._id.toString() : null,
      },
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch overall progress');
  }
}
