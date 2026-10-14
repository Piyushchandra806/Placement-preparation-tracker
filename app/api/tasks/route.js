import { connectToDatabase } from '@/lib/mongodb';
import Task from '@/models/Task';
import StudyPlan from '@/models/StudyPlan';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';

// Helper to normalize subject query names
function normalizeSubject(sub) {
  if (!sub) return null;
  const s = sub.trim().toLowerCase();
  if (s === 'aptitude') return 'quant';
  if (['dsa', 'quant', 'reasoning', 'english', 'revision'].includes(s)) {
    return s;
  }
  return null;
}

/**
 * GET /api/tasks
 * Retrieves tasks with optional filters by day, subject, completion status, or pending backlog.
 * Strictly scoped to the authenticated user's ID.
 */
export async function GET(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const { searchParams } = new URL(request.url);
    const dayParam = searchParams.get('day');
    const subjectParam = searchParams.get('subject');
    const completedParam = searchParams.get('completed');
    const pendingParam = searchParams.get('pending');
    const beforeDayParam = searchParams.get('beforeDay');
    const limitParam = searchParams.get('limit');
    const pageParam = searchParams.get('page');

    await connectToDatabase();

    // Strict user isolation filter
    const query = { userId: auth.user.id };

    // Filter by day number
    if (dayParam) {
      const day = parseInt(dayParam, 10);
      if (isNaN(day) || day < 1 || day > 365) {
        return errorResponse('Day must be a valid number between 1 and 365', 400);
      }
      query.dayNumber = day;
    }

    // Filter by pending backlog (overdue tasks before a given day)
    if (pendingParam === 'true') {
      query.completed = false;
      if (beforeDayParam) {
        const bd = parseInt(beforeDayParam, 10);
        if (!isNaN(bd)) {
          query.dayNumber = { $lt: bd };
        }
      }
    }

    // Filter by subject
    if (subjectParam) {
      const subject = normalizeSubject(subjectParam);
      if (!subject) {
        return errorResponse(
          'Invalid subject. Allowed: dsa, quant (or aptitude), reasoning, english, revision',
          400
        );
      }
      query.subject = subject;
    }

    // Filter by completion status
    if (completedParam !== null && completedParam !== undefined && pendingParam !== 'true') {
      if (completedParam === 'true') query.completed = true;
      if (completedParam === 'false') query.completed = false;
    }

    const limit = Math.min(Math.max(parseInt(limitParam || '100', 10), 1), 200);
    const page = Math.max(parseInt(pageParam || '1', 10), 1);
    const skip = (page - 1) * limit;

    const [tasks, totalCount] = await Promise.all([
      Task.find(query)
        .sort({ dayNumber: 1, subject: 1, _id: 1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Task.countDocuments(query),
    ]);

    const formattedTasks = tasks.map((t) => ({
      ...t,
      id: t._id.toString(),
      userId: t.userId.toString(),
      studyPlanId: t.studyPlanId.toString(),
    }));

    return successResponse({
      tasks: formattedTasks,
      totalCount,
      page,
      limit,
      filters: {
        day: dayParam ? parseInt(dayParam, 10) : null,
        subject: normalizeSubject(subjectParam),
        completed:
          completedParam === 'true'
            ? true
            : completedParam === 'false'
            ? false
            : null,
      },
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch tasks');
  }
}

/**
 * POST /api/tasks
 * Creates a new custom task for the user's active study plan.
 */
export async function POST(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const body = await request.json();
    const {
      title,
      topic,
      subject: rawSubject,
      dayNumber,
      description = '',
      estimatedMinutes = 45,
    } = body;

    // Server-side validation
    if (!title || typeof title !== 'string' || !title.trim()) {
      return errorResponse('Title is required and must not be empty', 400);
    }

    if (!topic || typeof topic !== 'string' || !topic.trim()) {
      return errorResponse('Topic is required and must not be empty', 400);
    }

    const subject = normalizeSubject(rawSubject);
    if (!subject) {
      return errorResponse(
        'Valid subject is required (dsa, quant, reasoning, english)',
        400
      );
    }

    const day = parseInt(dayNumber, 10);
    if (isNaN(day) || day < 1 || day > 365) {
      return errorResponse('Day number must be between 1 and 365', 400);
    }

    const minutes = parseInt(estimatedMinutes, 10);
    if (isNaN(minutes) || minutes < 5 || minutes > 720) {
      return errorResponse('Estimated minutes must be between 5 and 720', 400);
    }

    await connectToDatabase();

    // Ensure user has a study plan
    let studyPlan = await StudyPlan.findOne({ userId: auth.user.id }).sort({
      createdAt: -1,
    });

    if (!studyPlan) {
      studyPlan = await StudyPlan.create({
        userId: auth.user.id,
        duration: 90,
        dailyStudyTarget: 4,
      });
    }

    const newTask = await Task.create({
      userId: auth.user.id,
      studyPlanId: studyPlan._id,
      subject,
      dayNumber: day,
      topic: topic.trim(),
      title: title.trim(),
      description: description.trim(),
      estimatedMinutes: minutes,
      completed: false,
    });

    return successResponse(
      {
        message: 'Task created successfully',
        task: {
          ...newTask.toObject(),
          id: newTask._id.toString(),
        },
      },
      201
    );
  } catch (error) {
    return handleApiError(error, 'Failed to create task');
  }
}
