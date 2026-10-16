import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/mongodb';
import Task from '@/models/Task';
import DailyProgress from '@/models/DailyProgress';
import StudyPlan from '@/models/StudyPlan';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import {
  getComprehensiveProgressMetrics,
  getUserLocalDateString,
  getDateForDayNumber,
} from '@/lib/activity-tracker';

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
 * recalculates weighted daily score, subject progress, activity heatmap, and overall progress.
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

    // 3. Compute comprehensive authoritative progress metrics from MongoDB
    const metrics = await getComprehensiveProgressMetrics(auth.user.id);

    // 4. Upsert DailyProgress record for the task's corresponding calendar date
    const taskDateStr = getDateForDayNumber(metrics.startDate, task.dayNumber);
    const dayTasks = await Task.find({
      studyPlanId: task.studyPlanId,
      dayNumber: task.dayNumber,
    }).lean();

    const dayTotalTasks = dayTasks.length;
    const dayCompletedCount = dayTasks.filter((t) => t.completed).length;

    const updatedDailyProgress = await DailyProgress.findOneAndUpdate(
      {
        userId: auth.user.id,
        studyPlanId: task.studyPlanId,
        date: taskDateStr,
      },
      {
        $set: {
          completedTasks: dayCompletedCount,
          totalTasks: dayTotalTasks,
          dailyScore: task.dayNumber === metrics.currentDay ? metrics.dailyScore : Math.round((dayCompletedCount / dayTotalTasks) * 100),
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

    return successResponse({
      message: completed ? 'Task marked as completed' : 'Task marked as incomplete',
      task: {
        ...task.toObject(),
        id: task._id.toString(),
      },
      dailyProgress: {
        ...(updatedDailyProgress ? updatedDailyProgress.toObject() : {}),
        id: updatedDailyProgress?._id?.toString(),
        dailyCompletionPct: metrics.dailyCompletionPct,
        categoryStats: metrics.categoryStats,
        dailyScore: metrics.dailyScore,
      },
      overallStats: metrics,
    });
  } catch (error) {
    return handleApiError(error, 'Failed to update task completion');
  }
}

export async function PUT(request, context) {
  return PATCH(request, context);
}
