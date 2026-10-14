import { connectToDatabase } from '@/lib/mongodb';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import ReminderSetting from '@/models/ReminderSetting';
import Task from '@/models/Task';
import StudyPlan from '@/models/StudyPlan';
import { getOrCreateReminderSetting, getUserTime } from '@/lib/reminder-engine';
import { getVapidPublicKey } from '@/lib/web-push';

/**
 * GET /api/reminders/settings
 * Retrieves reminder configuration, pending/overdue task counts, and public VAPID key.
 */
export async function GET(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    await connectToDatabase();

    const setting = await getOrCreateReminderSetting(auth.user.id);
    const userTime = getUserTime(setting.timezone);

    // Get current day from active study plan
    const plan = await StudyPlan.findOne({ userId: auth.user.id }).sort({ createdAt: -1 }).lean();
    let currentDay = 1;
    if (plan && plan.startDate) {
      const start = new Date(plan.startDate);
      start.setHours(0, 0, 0, 0);
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const dayDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
      currentDay = Math.max(1, Math.min(dayDiff, plan.duration || 90));
    }

    // Retrieve today's pending tasks and overdue tasks
    const [todayTasks, overdueTasks] = await Promise.all([
      Task.find({ userId: auth.user.id, dayNumber: currentDay }).lean(),
      Task.find({ userId: auth.user.id, completed: false, dayNumber: { $lt: currentDay } }).lean(),
    ]);

    const todayPending = todayTasks.filter((t) => !t.completed);
    const todayCompleted = todayTasks.filter((t) => t.completed);

    return successResponse({
      settings: {
        id: setting._id.toString(),
        enabled: setting.enabled,
        reminderTime: setting.reminderTime,
        endOfDayEnabled: setting.endOfDayEnabled,
        endOfDayTime: setting.endOfDayTime,
        timezone: setting.timezone,
        pushSubscriptionCount: (setting.webPushSubscriptions || []).length,
        hasPushSubscription: (setting.webPushSubscriptions || []).length > 0,
        lastDailyReminderSentDate: setting.lastDailyReminderSentDate,
        lastEndOfDaySentDate: setting.lastEndOfDaySentDate,
      },
      userLocalTime: userTime,
      tasksOverview: {
        currentDay,
        todayTotalCount: todayTasks.length,
        todayPendingCount: todayPending.length,
        todayCompletedCount: todayCompleted.length,
        overdueCount: overdueTasks.length,
        todayPendingTasks: todayPending.map((t) => ({
          id: t._id.toString(),
          title: t.title,
          subject: t.subject,
          topic: t.topic,
          estimatedMinutes: t.estimatedMinutes,
        })),
        overdueTasks: overdueTasks.map((t) => ({
          id: t._id.toString(),
          title: t.title,
          subject: t.subject,
          dayNumber: t.dayNumber,
        })),
      },
      vapidPublicKey: getVapidPublicKey(),
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch reminder settings');
  }
}

/**
 * PATCH /api/reminders/settings
 * Updates reminder preferences (enabled, reminderTime, endOfDayTime, timezone).
 */
export async function PATCH(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const body = await request.json();
    const { enabled, reminderTime, endOfDayEnabled, endOfDayTime, timezone } = body;

    await connectToDatabase();

    const updateFields = {};

    if (typeof enabled === 'boolean') {
      updateFields.enabled = enabled;
    }

    if (typeof endOfDayEnabled === 'boolean') {
      updateFields.endOfDayEnabled = endOfDayEnabled;
    }

    const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/;

    if (reminderTime) {
      if (!timeRegex.test(reminderTime)) {
        return errorResponse('Invalid reminderTime format. Expected HH:MM in 24-hour time (e.g. 20:30)', 400);
      }
      updateFields.reminderTime = reminderTime;
    }

    if (endOfDayTime) {
      if (!timeRegex.test(endOfDayTime)) {
        return errorResponse('Invalid endOfDayTime format. Expected HH:MM in 24-hour time (e.g. 23:30)', 400);
      }
      updateFields.endOfDayTime = endOfDayTime;
    }

    if (timezone && typeof timezone === 'string') {
      // Validate timezone identifier
      try {
        Intl.DateTimeFormat(undefined, { timeZone: timezone });
        updateFields.timezone = timezone.trim();
      } catch {
        return errorResponse(`Invalid IANA timezone identifier: ${timezone}`, 400);
      }
    }

    const updatedSetting = await ReminderSetting.findOneAndUpdate(
      { userId: auth.user.id },
      { $set: updateFields },
      { upsert: true, returnDocument: 'after' }
    );

    return successResponse({
      message: 'Reminder preferences updated successfully',
      settings: {
        id: updatedSetting._id.toString(),
        enabled: updatedSetting.enabled,
        reminderTime: updatedSetting.reminderTime,
        endOfDayEnabled: updatedSetting.endOfDayEnabled,
        endOfDayTime: updatedSetting.endOfDayTime,
        timezone: updatedSetting.timezone,
        pushSubscriptionCount: (updatedSetting.webPushSubscriptions || []).length,
      },
    });
  } catch (error) {
    return handleApiError(error, 'Failed to update reminder preferences');
  }
}
