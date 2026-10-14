/**
 * Mission 90 — Standalone Background Reminder Scheduler
 *
 * Runs continuously (or on a cron schedule with --once) to evaluate
 * daily reminders at configured local times (default 8:30 PM) and
 * end-of-day missed target checks (default 11:30 PM) for all users.
 *
 * Usage:
 *   node scripts/run-reminder-scheduler.mjs [--once] [--interval=60]
 */

import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env.local
try {
  const envPath = path.resolve(__dirname, '../.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [k, ...vParts] = trimmed.split('=');
        const v = vParts.join('=').trim().replace(/^['"]|['"]$/g, '');
        if (!process.env[k.trim()]) {
          process.env[k.trim()] = v;
        }
      }
    }
  }
} catch (e) {
  console.warn('Could not read .env.local:', e.message);
}

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in environment.');
  process.exit(1);
}

// Connect Mongoose
async function initDb() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 5,
    });
  }
}

// Schemas
const ReminderSettingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    enabled: { type: Boolean, default: true },
    reminderTime: { type: String, default: '20:30' },
    endOfDayEnabled: { type: Boolean, default: true },
    endOfDayTime: { type: String, default: '23:30' },
    timezone: { type: String, default: 'Asia/Kolkata' },
    webPushSubscriptions: [
      {
        endpoint: String,
        keys: { p256dh: String, auth: String },
        device: String,
        subscribedAt: Date,
      },
    ],
    lastDailyReminderSentDate: String,
    lastEndOfDaySentDate: String,
  },
  { timestamps: true }
);

const InAppReminderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    type: { type: String, enum: ['daily_reminder', 'end_of_day_missed', 'goal_completed', 'carry_forward_prompt', 'test_reminder'], default: 'daily_reminder' },
    date: { type: String, required: true },
    dayNumber: { type: Number, default: 1 },
    pendingTaskCount: { type: Number, default: 0 },
    pendingTaskIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    read: { type: Boolean, default: false },
    dismissed: { type: Boolean, default: false },
    carriedForward: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const TaskSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studyPlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyPlan' },
    subject: { type: String, required: true },
    dayNumber: { type: Number, required: true },
    topic: { type: String, required: true },
    title: { type: String, required: true },
    description: String,
    estimatedMinutes: { type: Number, default: 45 },
    completed: { type: Boolean, default: false },
    completedAt: Date,
  },
  { timestamps: true }
);

const StudyPlanSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, default: Date.now },
    duration: { type: Number, default: 90 },
    dailyStudyTarget: { type: Number, default: 180 },
  },
  { timestamps: true }
);

const DailyProgressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studyPlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyPlan' },
    date: { type: String, required: true },
    completedTasks: { type: Number, default: 0 },
    totalTasks: { type: Number, default: 0 },
    dailyScore: { type: Number, default: 0 },
    actualStudyMinutes: { type: Number, default: 0 },
    isEndOfDayIncomplete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ReminderSetting = mongoose.models.ReminderSetting || mongoose.model('ReminderSetting', ReminderSettingSchema);
const InAppReminder = mongoose.models.InAppReminder || mongoose.model('InAppReminder', InAppReminderSchema);
const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);
const StudyPlan = mongoose.models.StudyPlan || mongoose.model('StudyPlan', StudyPlanSchema);
const DailyProgress = mongoose.models.DailyProgress || mongoose.model('DailyProgress', DailyProgressSchema);

function getUserLocalTime(timezone = 'Asia/Kolkata', date = new Date()) {
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
    return { dateStr, timeStr };
  } catch {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, '0');
    const d = String(date.getUTCDate()).padStart(2, '0');
    const h = date.getUTCHours();
    const min = date.getUTCMinutes();
    return {
      dateStr: `${y}-${m}-${d}`,
      timeStr: `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`,
    };
  }
}

/**
 * Evaluates single user schedule tick.
 */
async function processUserTick(setting, now = new Date()) {
  const { userId, timezone, reminderTime, endOfDayTime, endOfDayEnabled } = setting;
  const { dateStr, timeStr } = getUserLocalTime(timezone, now);

  const isDailyTime = timeStr === (reminderTime || '20:30');
  const isEndOfDayTime = timeStr === (endOfDayTime || '23:30');

  // Check if daily reminder should fire
  const fireDaily = isDailyTime && setting.lastDailyReminderSentDate !== dateStr;
  const fireEndOfDay = endOfDayEnabled && isEndOfDayTime && setting.lastEndOfDaySentDate !== dateStr;

  if (!fireDaily && !fireEndOfDay) {
    return { skipped: true, reason: 'time_or_already_sent', timeStr };
  }

  // Calculate current study day
  const plan = await StudyPlan.findOne({ userId }).sort({ createdAt: -1 }).lean();
  let currentDay = 1;
  if (plan && plan.startDate) {
    const start = new Date(plan.startDate);
    start.setHours(0, 0, 0, 0);
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
    currentDay = Math.max(1, Math.min(diff, plan.duration || 90));
  }

  // Query tasks for today
  const tasks = await Task.find({ userId, dayNumber: currentDay }).lean();
  const incomplete = tasks.filter((t) => !t.completed);
  const completed = tasks.filter((t) => t.completed);

  // 1. Process Daily Reminder (8:30 PM)
  if (fireDaily) {
    // RULE 4: If all tasks complete, do NOT send a missed-goal / pending reminder
    if (incomplete.length === 0) {
      console.log(`[Scheduler] User ${userId} Day ${currentDay} tasks ALL COMPLETED (${completed.length}/${tasks.length}). Suppressing reminder.`);
      setting.lastDailyReminderSentDate = dateStr;
      await setting.save();
      return { fired: false, reason: 'all_tasks_completed' };
    }

    // Tasks incomplete -> create in-app reminder
    await InAppReminder.create({
      userId,
      title: 'Mission 90 — Daily Study Reminder (8:30 PM)',
      body: `You have ${incomplete.length} pending task(s) remaining for Day ${currentDay}. Complete them to protect your streak!`,
      type: 'daily_reminder',
      date: dateStr,
      dayNumber: currentDay,
      pendingTaskCount: incomplete.length,
      pendingTaskIds: incomplete.map((t) => t._id),
      read: false,
    });

    setting.lastDailyReminderSentDate = dateStr;
    await setting.save();
    console.log(`[Scheduler] Dispatched 8:30 PM reminder to User ${userId}: ${incomplete.length} pending tasks.`);
    return { fired: true, type: 'daily_reminder', pendingCount: incomplete.length };
  }

  // 2. Process End-of-Day Missed Target (11:30 PM)
  if (fireEndOfDay) {
    if (incomplete.length === 0) {
      console.log(`[Scheduler] User ${userId} completed Day ${currentDay} cleanly before end-of-day.`);
      setting.lastEndOfDaySentDate = dateStr;
      await setting.save();
      return { fired: false, reason: 'end_of_day_complete' };
    }

    // Record incomplete status in DailyProgress while preserving completed records
    await DailyProgress.findOneAndUpdate(
      { userId, date: dateStr },
      {
        $set: {
          completedTasks: completed.length,
          totalTasks: tasks.length,
          isEndOfDayIncomplete: true,
        },
      },
      { upsert: true }
    );

    // Create Missed Goal Summary
    await InAppReminder.create({
      userId,
      title: `Day ${currentDay} Target Incomplete — Missed-Goal Summary`,
      body: `Day ${currentDay} concluded with ${completed.length}/${tasks.length} tasks completed. ${incomplete.length} tasks unfinished. Would you like to carry them forward to your pending backlog?`,
      type: 'end_of_day_missed',
      date: dateStr,
      dayNumber: currentDay,
      pendingTaskCount: incomplete.length,
      pendingTaskIds: incomplete.map((t) => t._id),
      read: false,
      carriedForward: false,
    });

    setting.lastEndOfDaySentDate = dateStr;
    await setting.save();
    console.log(`[Scheduler] Recorded end-of-day missed target for User ${userId}. Completed tasks preserved (${completed.length}).`);
    return { fired: true, type: 'end_of_day_missed', incompleteCount: incomplete.length };
  }

  return { skipped: true };
}

/**
 * Execute single scheduler tick across all registered users.
 */
export async function runSchedulerTick(now = new Date()) {
  await initDb();
  const settings = await ReminderSetting.find({ enabled: true });
  console.log(`[Scheduler Tick ${now.toISOString()}] Evaluating ${settings.length} active user reminder profiles...`);

  let processedCount = 0;
  let actionCount = 0;

  for (const setting of settings) {
    try {
      const outcome = await processUserTick(setting, now);
      processedCount++;
      if (outcome.fired) actionCount++;
    } catch (err) {
      console.error(`[Scheduler Error] User ${setting.userId}:`, err.message);
    }
  }

  console.log(`[Scheduler Summary] Evaluated: ${processedCount}, Notifications Triggered: ${actionCount}`);
  return { processedCount, actionCount };
}

// CLI Execution Support
const isMain = process.argv[1] && process.argv[1].endsWith('run-reminder-scheduler.mjs');
if (isMain) {
  const isOnce = process.argv.includes('--once');
  const intervalArg = process.argv.find((a) => a.startsWith('--interval='));
  const intervalSeconds = intervalArg ? parseInt(intervalArg.split('=')[1], 10) : 60;

  (async () => {
    try {
      await initDb();
      console.log('✅ Connected to MongoDB Atlas for Reminder Scheduler.');

      if (isOnce) {
        await runSchedulerTick();
        await mongoose.disconnect();
        process.exit(0);
      } else {
        console.log(`🚀 Mission 90 Reminder Scheduler running every ${intervalSeconds} seconds. Press Ctrl+C to stop.`);
        await runSchedulerTick();
        setInterval(async () => {
          try {
            await runSchedulerTick();
          } catch (tickErr) {
            console.error('[Scheduler Interval Error]:', tickErr.message);
          }
        }, intervalSeconds * 1000);
      }
    } catch (err) {
      console.error('Fatal Scheduler Error:', err);
      process.exit(1);
    }
  })();
}
