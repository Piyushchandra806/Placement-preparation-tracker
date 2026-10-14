import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/mongodb';
import Task from '@/models/Task';
import DailyProgress from '@/models/DailyProgress';
import StudyPlan from '@/models/StudyPlan';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import { calculateWeightedDailyScore, groupTaskStatsByCategory } from '@/lib/scoring';

function getTodayString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * GET /api/tasks/[id]
 * Retrieves a single task ensuring strict user ownership.
 */
export async function GET(request, { params }) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return errorResponse('Invalid task ID format', 400);
    }

    await connectToDatabase();

    const task = await Task.findOne({ _id: id, userId: auth.user.id }).lean();

    if (!task) {
      return errorResponse('Task not found or access denied', 404);
    }

    return successResponse({
      task: {
        ...task,
        id: task._id.toString(),
      },
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch task');
  }
}

/**
 * PATCH /api/tasks/[id]
 * Updates task completion status, records completion timestamp,
 * recalculates weighted daily score, subject progress, and overall progress.
 */
export async function PATCH(request, { params }) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return errorResponse('Invalid task ID format', 400);
    }

    const body = await request.json().catch(() => ({}));
    const { completed, actualMinutes } = body;

    if (typeof completed !== 'boolean') {
      return errorResponse('Field "completed" must be a boolean (true or false)', 400);
    }

    await connectToDatabase();

    // 1. Strict ownership verification
    const task = await Task.findOne({ _id: id, userId: auth.user.id });

    if (!task) {
      return errorResponse('Task not found or access denied', 404);
    }

    // 2. Update completion and record timestamp
    task.completed = completed;
    task.completedAt = completed ? new Date() : null;
    await task.save();

    // 3. Determine current study day from study plan
    const activePlan = await StudyPlan.findById(task.studyPlanId).lean();
    let currentDay = task.dayNumber;
    if (activePlan && activePlan.startDate) {
      const start = new Date(activePlan.startDate);
      start.setHours(0, 0, 0, 0);
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const dayDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
      currentDay = Math.max(1, Math.min(dayDiff, activePlan.duration || 90));
    }

    // Fetch today's tasks to compute live today score and completion percentage
    const todayTasks = await Task.find({
      studyPlanId: task.studyPlanId,
      dayNumber: currentDay,
    }).lean();

    const todayCategoryStats = groupTaskStatsByCategory(todayTasks);
    const todayDailyScore = calculateWeightedDailyScore(todayCategoryStats);
    const todayTotalTasks = todayTasks.length;
    const todayCompletedCount = todayTasks.filter((t) => t.completed).length;
    const todayCompletionPct =
      todayTotalTasks > 0
        ? Math.round((todayCompletedCount / todayTotalTasks) * 100)
        : 0;

    const todayStr = getTodayString();

    // 4. Upsert DailyProgress record for today
    const updatedDailyProgress = await DailyProgress.findOneAndUpdate(
      {
        userId: auth.user.id,
        studyPlanId: task.studyPlanId,
        date: todayStr,
      },
      {
        $set: {
          completedTasks: todayCompletedCount,
          totalTasks: todayTotalTasks,
          dailyScore: todayDailyScore,
        },
        ...(typeof actualMinutes === 'number' && actualMinutes > 0
          ? { $inc: { actualStudyMinutes: actualMinutes } }
          : {}),
      },
      {
        returnDocument: 'after',
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    // 5. Compute real-time overall study-plan statistics
    const [totalUserTasks, completedUserTasks, overduePendingTasks] = await Promise.all([
      Task.countDocuments({ userId: auth.user.id }),
      Task.countDocuments({ userId: auth.user.id, completed: true }),
      Task.countDocuments({
        userId: auth.user.id,
        completed: false,
        dayNumber: { $lt: currentDay },
      }),
    ]);

    const pendingTasks = Math.max(0, totalUserTasks - completedUserTasks);
    const overallProgress =
      totalUserTasks > 0
        ? Math.round((completedUserTasks / totalUserTasks) * 100)
        : 0;

    // Subject breakdown
    const subjectList = ['dsa', 'quant', 'reasoning', 'english', 'revision'];
    const subjectsMetrics = await Promise.all(
      subjectList.map(async (subj) => {
        const [total, comp] = await Promise.all([
          Task.countDocuments({ userId: auth.user.id, subject: subj }),
          Task.countDocuments({
            userId: auth.user.id,
            subject: subj,
            completed: true,
          }),
        ]);
        return {
          subject: subj,
          totalTasks: total,
          completedTasks: comp,
          progressPercentage: total > 0 ? Math.round((comp / total) * 100) : 0,
        };
      })
    );

    return successResponse({
      message: completed ? 'Task marked as completed' : 'Task marked as incomplete',
      task: {
        ...task.toObject(),
        id: task._id.toString(),
      },
      dailyProgress: {
        ...updatedDailyProgress.toObject(),
        id: updatedDailyProgress._id.toString(),
        dailyCompletionPct: todayCompletionPct,
        categoryStats: todayCategoryStats,
        dailyScore: todayDailyScore,
      },
      overallStats: {
        currentDay,
        overallProgress,
        totalTasks: totalUserTasks,
        completedTasks: completedUserTasks,
        pendingTasks,
        overduePendingTasks,
        dailyScore: todayDailyScore,
        dailyCompletionPct: todayCompletionPct,
        categoryStats: todayCategoryStats,
        subjects: subjectsMetrics,
      },
    });
  } catch (error) {
    return handleApiError(error, 'Failed to update task completion');
  }
}

export async function PUT(request, context) {
  return PATCH(request, context);
}
