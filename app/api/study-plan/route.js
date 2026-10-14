import { connectToDatabase } from '@/lib/mongodb';
import StudyPlan from '@/models/StudyPlan';
import Task from '@/models/Task';
import DailyProgress from '@/models/DailyProgress';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import { CURRICULUM_TASKS } from '@/lib/curriculum-data';

/**
 * Format Date as YYYY-MM-DD
 */
function getTodayString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * GET /api/study-plan
 * Retrieves the authenticated user's active study plan.
 */
export async function GET(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    await connectToDatabase();

    const studyPlan = await StudyPlan.findOne({ userId: auth.user.id })
      .sort({ createdAt: -1 })
      .lean();

    if (!studyPlan) {
      return successResponse({
        hasPlan: false,
        studyPlan: null,
        message: 'No study plan found for this user. Create one to begin.',
      });
    }

    // Get quick summary counts for this plan
    const [totalTasks, completedTasks] = await Promise.all([
      Task.countDocuments({ studyPlanId: studyPlan._id }),
      Task.countDocuments({ studyPlanId: studyPlan._id, completed: true }),
    ]);

    return successResponse({
      hasPlan: true,
      studyPlan: {
        ...studyPlan,
        id: studyPlan._id.toString(),
      },
      stats: {
        totalTasks,
        completedTasks,
        completionPercentage:
          totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
      },
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch study plan');
  }
}

/**
 * POST /api/study-plan
 * Creates or initializes the authenticated user's study plan.
 * Prevents duplicate study-plan initialization from creating duplicate tasks.
 */
export async function POST(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const body = await request.json().catch(() => ({}));
    const {
      duration = 90,
      dailyStudyTarget = 4,
      startDate = new Date().toISOString(),
      seedCurriculum = true,
    } = body;

    // Validation
    const numDuration = Number(duration);
    if (isNaN(numDuration) || numDuration < 1 || numDuration > 365) {
      return errorResponse('Duration must be a number between 1 and 365 days', 400);
    }

    const numTarget = Number(dailyStudyTarget);
    if (isNaN(numTarget) || numTarget < 1 || numTarget > 24) {
      return errorResponse('Daily study target must be between 1 and 24 hours', 400);
    }

    const parsedStartDate = new Date(startDate);
    if (isNaN(parsedStartDate.getTime())) {
      return errorResponse('Invalid start date provided', 400);
    }

    await connectToDatabase();

    // Check for existing study plan for this user
    let studyPlan = await StudyPlan.findOne({ userId: auth.user.id }).sort({
      createdAt: -1,
    });

    let isNewPlan = false;
    if (!studyPlan) {
      studyPlan = await StudyPlan.create({
        userId: auth.user.id,
        startDate: parsedStartDate,
        duration: numDuration,
        dailyStudyTarget: numTarget,
      });
      isNewPlan = true;
    }

    // Check existing tasks for this study plan to prevent duplicate creation
    const existingTaskCount = await Task.countDocuments({
      studyPlanId: studyPlan._id,
    });

    let tasksInserted = 0;

    // Only seed tasks if no tasks exist yet
    if (existingTaskCount === 0 && seedCurriculum) {
      const tasksToInsert = CURRICULUM_TASKS.map((item) => ({
        userId: auth.user.id,
        studyPlanId: studyPlan._id,
        subject: item.subject,
        dayNumber: item.dayNumber,
        topic: item.topic,
        title: item.title,
        description: item.description || '',
        estimatedMinutes: item.estimatedMinutes || 45,
        learningObjectives: item.learningObjectives || [],
        practiceQuestions: item.practiceQuestions || [],
        exercise: item.exercise || {},
        completed: false,
      }));

      try {
        const result = await Task.insertMany(tasksToInsert, {
          ordered: false, // Continue inserting other docs even if duplicate key occurs
        });
        tasksInserted = result.length;
      } catch (insertError) {
        // Even if some duplicate key errors triggered, count what got inserted
        tasksInserted = await Task.countDocuments({
          studyPlanId: studyPlan._id,
        });
      }
    } else {
      tasksInserted = existingTaskCount;
    }

    // Ensure initial DailyProgress record exists for today
    const todayStr = getTodayString();
    const existingDailyProgress = await DailyProgress.findOne({
      userId: auth.user.id,
      studyPlanId: studyPlan._id,
      date: todayStr,
    });

    if (!existingDailyProgress) {
      // Find tasks assigned to today's study day (default day 1 or relative day)
      const dayTasksCount = await Task.countDocuments({
        studyPlanId: studyPlan._id,
        dayNumber: 1,
      });

      await DailyProgress.create({
        userId: auth.user.id,
        studyPlanId: studyPlan._id,
        date: todayStr,
        completedTasks: 0,
        totalTasks: dayTasksCount || 4,
        dailyScore: 0,
        actualStudyMinutes: 0,
      });
    }

    return successResponse(
      {
        message: isNewPlan
          ? 'Study plan initialized successfully'
          : 'Existing study plan retrieved; duplicate initialization prevented',
        isNewPlan,
        studyPlan: {
          ...studyPlan.toObject(),
          id: studyPlan._id.toString(),
        },
        taskCount: tasksInserted,
      },
      isNewPlan ? 201 : 200
    );
  } catch (error) {
    return handleApiError(error, 'Failed to initialize study plan');
  }
}
