/**
 * Mission 90 — Daily Reminder & Scheduling Engine
 *
 * Implements:
 * - Default 8:30 PM (20:30) reminder in the user's local timezone.
 * - End-of-day incomplete task checker (default 11:30 PM / 23:30).
 * - Precise incomplete task filtering & pending count calculation.
 * - Respects completed days: If all tasks are completed, suppresses missed-goal notification.
 * - End-of-day summary recording with task preservation & carry-forward capability.
 * - Multi-channel notification delivery: Web Push + In-App fallback.
 */

import { connectToDatabase } from './mongodb';
import ReminderSetting from '@/models/ReminderSetting';
import InAppReminder from '@/models/InAppReminder';
import Task from '@/models/Task';
import StudyPlan from '@/models/StudyPlan';
import DailyProgress from '@/models/DailyProgress';
import { sendWebPushNotification } from './web-push';

/**
 * Returns formatted date and time in the specified IANA timezone.
 *
 * @param {string} [timezone='Asia/Kolkata']
 * @param {Date} [date=new Date()]
 * @returns {{ dateStr: string, timeStr: string, hours: number, minutes: number }}
 */
export function getUserTime(timezone = 'Asia/Kolkata', date = new Date()) {
  try {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const parts = formatter.formatToParts(date);
    const get = (type) => parts.find((p) => p.type === type)?.value;

    const dateStr = `${get('year')}-${get('month')}-${get('day')}`;
    const hours = parseInt(get('hour'), 10);
    const minutes = parseInt(get('minute'), 10);
    const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    return { dateStr, timeStr, hours, minutes };
  } catch (err) {
    // Fallback to UTC if timezone is invalid
    console.warn(`Timezone formatting fallback for '${timezone}':`, err.message);
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, '0');
    const d = String(date.getUTCDate()).padStart(2, '0');
    const h = date.getUTCHours();
    const min = date.getUTCMinutes();
    const dateStr = `${y}-${m}-${d}`;
    const timeStr = `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
    return { dateStr, timeStr, hours: h, minutes: min };
  }
}

/**
 * Retrieves or creates default ReminderSetting for a user.
 */
export async function getOrCreateReminderSetting(userId, defaultTimezone = 'Asia/Kolkata') {
  await connectToDatabase();

  let setting = await ReminderSetting.findOne({ userId });
  if (!setting) {
    setting = await ReminderSetting.create({
      userId,
      enabled: true,
      reminderTime: '20:30', // 8:30 PM default
      endOfDayEnabled: true,
      endOfDayTime: '23:30', // 11:30 PM default
      timezone: defaultTimezone || 'Asia/Kolkata',
      webPushSubscriptions: [],
    });
  }
  return setting;
}

/**
 * Evaluates reminders for a specific user.
 *
 * @param {string} userId
 * @param {object} [options={}]
 * @param {boolean} [options.force=false] - force evaluation regardless of current time
 * @param {string} [options.simulateTime=null] - simulate specific HH:MM time
 * @param {string} [options.type=null] - 'daily' | 'end_of_day' | 'test'
 * @returns {Promise<object>} Evaluation outcome
 */
export async function evaluateUserReminder(userId, options = {}) {
  await connectToDatabase();

  const setting = await getOrCreateReminderSetting(userId);
  if (!setting.enabled && !options.force && options.type !== 'test') {
    return { triggered: false, reason: 'reminders_disabled' };
  }

  // Determine user's local date and time
  const { dateStr, timeStr: actualTimeStr } = getUserTime(setting.timezone);
  const timeStr = options.simulateTime || actualTimeStr;

  // Retrieve active study plan and calculate current day
  const plan = await StudyPlan.findOne({ userId }).sort({ createdAt: -1 }).lean();
  let currentDay = 1;
  if (plan && plan.startDate) {
    const start = new Date(plan.startDate);
    start.setHours(0, 0, 0, 0);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const dayDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
    currentDay = Math.max(1, Math.min(dayDiff, plan.duration || 90));
  }

  // Fetch user's assigned tasks for today
  const todayTasks = await Task.find({ userId, dayNumber: currentDay }).lean();
  const incompleteTasks = todayTasks.filter((t) => !t.completed);
  const completedTasks = todayTasks.filter((t) => t.completed);
  const totalCount = todayTasks.length;
  const incompleteCount = incompleteTasks.length;

  const isDailyTime = timeStr === setting.reminderTime;
  const isEndOfDayTime = timeStr === setting.endOfDayTime;

  // ─── 1. TEST REMINDER (Explicit Manual Trigger) ───
  if (options.type === 'test') {
    const testReminder = await InAppReminder.create({
      userId,
      title: 'Mission 90 — Test Notification',
      body: `Test reminder verified. You have ${incompleteCount} pending tasks today (Day ${currentDay}).`,
      type: 'test_reminder',
      date: dateStr,
      dayNumber: currentDay,
      pendingTaskCount: incompleteCount,
      pendingTaskIds: incompleteTasks.map((t) => t._id),
      read: false,
    });

    // Send push notification if subscriptions exist
    let pushSentCount = 0;
    if (setting.webPushSubscriptions && setting.webPushSubscriptions.length > 0) {
      for (const sub of setting.webPushSubscriptions) {
        const pushResult = await sendWebPushNotification(sub, {
          title: 'Mission 90 — Test Notification',
          body: `Test notification successful. ${incompleteCount} tasks remaining today.`,
          url: '/?focus=today',
          data: { dayNumber: currentDay, pendingCount: incompleteCount },
        });
        if (pushResult.success) pushSentCount++;
      }
    }

    return {
      triggered: true,
      type: 'test_reminder',
      inAppReminder: testReminder,
      pushSentCount,
      incompleteCount,
      completedCount: completedTasks.length,
      currentDay,
    };
  }

  // ─── 2. DAILY REMINDER (At Configured Time e.g. 8:30 PM) ───
  const shouldTriggerDaily =
    options.type === 'daily' ||
    (isDailyTime && setting.lastDailyReminderSentDate !== dateStr) ||
    (options.force && options.type !== 'end_of_day');

  if (shouldTriggerDaily) {
    // RULE 4: If all tasks are complete, DO NOT send a missed-goal / pending reminder!
    if (incompleteCount === 0) {
      return {
        triggered: false,
        reason: 'all_tasks_completed',
        message: 'All daily tasks completed. No missed-goal notification needed.',
        currentDay,
        completedCount: completedTasks.length,
      };
    }

    // Create in-app reminder record
    const dailyReminder = await InAppReminder.create({
      userId,
      title: 'Mission 90 — Daily Study Reminder (8:30 PM)',
      body: `You have ${incompleteCount} of ${totalCount} tasks remaining for Day ${currentDay}. Complete them to protect your streak & daily score!`,
      type: 'daily_reminder',
      date: dateStr,
      dayNumber: currentDay,
      pendingTaskCount: incompleteCount,
      pendingTaskIds: incompleteTasks.map((t) => t._id),
      read: false,
    });

    // Send Web Push notification
    let pushSentCount = 0;
    const validSubscriptions = [];

    for (const sub of setting.webPushSubscriptions) {
      const pushRes = await sendWebPushNotification(sub, {
        title: 'Mission 90 — Daily Study Reminder',
        body: `Day ${currentDay}: ${incompleteCount} tasks pending. Click to open your mission checklist.`,
        url: '/?focus=today',
        data: { dayNumber: currentDay, pendingCount: incompleteCount },
      });

      if (pushRes.success) {
        pushSentCount++;
        validSubscriptions.push(sub);
      } else if (!pushRes.expired) {
        validSubscriptions.push(sub);
      }
    }

    // Prune expired subscriptions & record sent date
    setting.webPushSubscriptions = validSubscriptions;
    setting.lastDailyReminderSentDate = dateStr;
    await setting.save();

    return {
      triggered: true,
      type: 'daily_reminder',
      inAppReminder: dailyReminder,
      pushSentCount,
      incompleteCount,
      currentDay,
    };
  }

  // ─── 3. END-OF-DAY INCOMPLETE CHECK (At Configured Time e.g. 11:30 PM) ───
  const shouldTriggerEndOfDay =
    setting.endOfDayEnabled &&
    (options.type === 'end_of_day' ||
      (isEndOfDayTime && setting.lastEndOfDaySentDate !== dateStr) ||
      (options.force && options.type === 'end_of_day'));

  if (shouldTriggerEndOfDay) {
    // If all tasks were completed, no missed-goal notification
    if (incompleteCount === 0) {
      return {
        triggered: false,
        reason: 'all_tasks_completed',
        message: 'Day ended with full completion. Congratulations!',
        currentDay,
      };
    }

    // Record incomplete status in DailyProgress while strictly preserving all completed records
    await DailyProgress.findOneAndUpdate(
      { userId, date: dateStr },
      {
        $set: {
          completedTasks: completedTasks.length,
          totalTasks: totalCount,
          isEndOfDayIncomplete: true,
        },
      },
      { upsert: true }
    );

    // Create Missed-Goal Summary In-App Notification
    const endOfDayReminder = await InAppReminder.create({
      userId,
      title: `Day ${currentDay} Target Incomplete — Missed-Goal Summary`,
      body: `Day ${currentDay} concluded with ${completedTasks.length}/${totalCount} tasks completed. ${incompleteCount} tasks unfinished. Would you like to carry them forward to your pending backlog?`,
      type: 'end_of_day_missed',
      date: dateStr,
      dayNumber: currentDay,
      pendingTaskCount: incompleteCount,
      pendingTaskIds: incompleteTasks.map((t) => t._id),
      read: false,
      carriedForward: false,
    });

    // Send Web Push notification
    let pushSentCount = 0;
    for (const sub of setting.webPushSubscriptions) {
      const pushRes = await sendWebPushNotification(sub, {
        title: `Day ${currentDay} Target Incomplete`,
        body: `${incompleteCount} unfinished tasks can be carried forward to your backlog.`,
        url: '/?focus=pending',
        data: { dayNumber: currentDay, pendingCount: incompleteCount },
      });
      if (pushRes.success) pushSentCount++;
    }

    setting.lastEndOfDaySentDate = dateStr;
    await setting.save();

    return {
      triggered: true,
      type: 'end_of_day_missed',
      inAppReminder: endOfDayReminder,
      pushSentCount,
      incompleteCount,
      completedCount: completedTasks.length,
      currentDay,
    };
  }

  return { triggered: false, reason: 'time_not_matched', timeStr, reminderTime: setting.reminderTime };
}

/**
 * Carry forward unfinished tasks from a missed goal into the pending backlog.
 *
 * @param {string} userId
 * @param {string} reminderId
 * @returns {Promise<object>}
 */
export async function carryForwardIncompleteTasks(userId, reminderId) {
  await connectToDatabase();

  const reminder = await InAppReminder.findOne({ _id: reminderId, userId });
  if (!reminder) {
    throw new Error('Reminder not found or access denied');
  }

  // Ensure tasks remain marked completed: false so they appear in PendingTasks backlog
  if (reminder.pendingTaskIds && reminder.pendingTaskIds.length > 0) {
    await Task.updateMany(
      { _id: { $in: reminder.pendingTaskIds }, userId },
      { $set: { completed: false } }
    );
  }

  reminder.carriedForward = true;
  reminder.read = true;
  await reminder.save();

  return {
    success: true,
    message: `${reminder.pendingTaskCount} unfinished tasks carried forward to pending backlog`,
    carriedCount: reminder.pendingTaskCount,
  };
}

const reminderEngine = {
  getUserTime,
  getOrCreateReminderSetting,
  evaluateUserReminder,
  carryForwardIncompleteTasks,
};

export default reminderEngine;
