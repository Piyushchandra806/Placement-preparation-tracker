import { connectToDatabase } from '@/lib/mongodb';
import DailyProgress from '@/models/DailyProgress';
import StudyPlan from '@/models/StudyPlan';
import Task from '@/models/Task';
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
 * GET /api/progress/daily
 * Retrieves daily progress by date (default: today) and optionally recent 7-day history.
 */
export async function GET(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get('date') || getTodayString();
    const includeHistory = searchParams.get('history') === 'true';

    // Validate date format YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateParam)) {
      return errorResponse('Invalid date format. Use YYYY-MM-DD', 400);
    }

    await connectToDatabase();

    // 1. Fetch record for the requested date
    let progress = await DailyProgress.findOne({
      userId: auth.user.id,
      date: dateParam,
    }).lean();

    // If no progress record exists yet, compute live metrics
    if (!progress) {
      const activePlan = await StudyPlan.findOne({ userId: auth.user.id }).sort({
        createdAt: -1,
      });

      if (activePlan) {
        // Calculate dayNumber relative to startDate
        const start = new Date(activePlan.startDate);
        const reqDate = new Date(dateParam);
        const diffDays = Math.max(
          1,
          Math.min(
            Math.floor((reqDate - start) / (1000 * 60 * 60 * 24)) + 1,
            activePlan.duration || 90
          )
        );

        const dayTasks = await Task.find({
          studyPlanId: activePlan._id,
          dayNumber: diffDays,
        }).lean();

        const totalTasks = dayTasks.length;
        const completedTasks = dayTasks.filter((t) => t.completed).length;
        const categoryStats = groupTaskStatsByCategory(dayTasks);
        const dailyScore = calculateWeightedDailyScore(categoryStats);

        progress = {
          userId: auth.user.id,
          studyPlanId: activePlan._id.toString(),
          date: dateParam,
          completedTasks,
          totalTasks: totalTasks || 5,
          dailyScore,
          actualStudyMinutes: 0,
          categoryStats,
          isComputed: true,
        };
      } else {
        progress = {
          date: dateParam,
          completedTasks: 0,
          totalTasks: 0,
          dailyScore: 0,
          actualStudyMinutes: 0,
        };
      }
    }

    // 2. Fetch history if requested (last 7 days for consistency chart)
    let history = null;
    if (includeHistory) {
      history = await DailyProgress.find({ userId: auth.user.id })
        .sort({ date: -1 })
        .limit(7)
        .lean();

      // Return chronological order
      history = history.reverse().map((h) => ({
        ...h,
        id: h._id.toString(),
      }));
    }

    return successResponse({
      date: dateParam,
      progress: {
        ...progress,
        id: progress._id ? progress._id.toString() : null,
      },
      history,
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch daily progress');
  }
}

/**
 * POST /api/progress/daily
 * Updates or logs actual study minutes and daily progress.
 */
export async function POST(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const body = await request.json();
    const { date = getTodayString(), actualStudyMinutes, dailyScore } = body;

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return errorResponse('Invalid date format. Use YYYY-MM-DD', 400);
    }

    const minutes = parseInt(actualStudyMinutes, 10);
    if (isNaN(minutes) || minutes < 0 || minutes > 1440) {
      return errorResponse('actualStudyMinutes must be between 0 and 1440', 400);
    }

    await connectToDatabase();

    // Find active study plan
    const activePlan = await StudyPlan.findOne({ userId: auth.user.id }).sort({
      createdAt: -1,
    });

    if (!activePlan) {
      return errorResponse('No active study plan found. Initialize a plan first.', 404);
    }

    const updateFields = {
      $inc: { actualStudyMinutes: minutes },
    };

    if (dailyScore !== undefined && !isNaN(dailyScore)) {
      updateFields.$set = {
        dailyScore: Math.min(Math.max(parseInt(dailyScore, 10), 0), 100),
      };
    }

    const updated = await DailyProgress.findOneAndUpdate(
      {
        userId: auth.user.id,
        studyPlanId: activePlan._id,
        date,
      },
      updateFields,
      {
        returnDocument: 'after',
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    return successResponse({
      message: 'Daily progress recorded successfully',
      progress: {
        ...updated.toObject(),
        id: updated._id.toString(),
      },
    });
  } catch (error) {
    return handleApiError(error, 'Failed to record daily progress');
  }
}
