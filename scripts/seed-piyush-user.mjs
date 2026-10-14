/**
 * Seed canonical user Piyush with 90-day study plan, 450 tasks,
 * realistic completion history for Days 1-11, and Day 12 as today.
 */
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

import { connectToDatabase } from '../lib/mongodb.js';
import User from '../models/User.js';
import StudyPlan from '../models/StudyPlan.js';
import Task from '../models/Task.js';
import DailyProgress from '../models/DailyProgress.js';
import bcrypt from 'bcryptjs';
import { COMPLETE_90_DAYS_CURRICULUM } from '../lib/complete-90-days-syllabus.js';
import { calculateWeightedDailyScore, groupTaskStatsByCategory } from '../lib/scoring.js';

function formatYMD(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

async function seed() {
  console.log('Connecting to MongoDB...');
  await connectToDatabase();

  const email = 'piyush@mission90.com';
  const password = 'Password123!';

  // 1. Find or create user
  let user = await User.findOne({ email });
  if (!user) {
    const passwordHash = await bcrypt.hash(password, 10);
    user = await User.create({
      name: 'Piyush',
      email,
      passwordHash,
    });
    console.log(`Created user ${user.name} (${user.email})`);
  } else {
    console.log(`Found existing user ${user.name} (${user.email})`);
  }

  // 2. Study plan starting 11 days ago (so today is day 12)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 11);

  let plan = await StudyPlan.findOne({ userId: user._id });
  if (!plan) {
    plan = await StudyPlan.create({
      userId: user._id,
      startDate,
      duration: 90,
      dailyStudyTarget: 3,
    });
    console.log(`Created study plan starting on ${formatYMD(startDate)} (Day 12 today)`);
  } else {
    plan.startDate = startDate;
    await plan.save();
    console.log(`Updated study plan start date to ${formatYMD(startDate)}`);
  }

  // 3. Clear existing tasks for clean seeding
  await Task.deleteMany({ userId: user._id });
  await DailyProgress.deleteMany({ userId: user._id });
  console.log('Cleared existing tasks and daily progress for fresh sync.');

  // 4. Prepare 450 tasks
  console.log(`Preparing ${COMPLETE_90_DAYS_CURRICULUM.length} tasks...`);
  const tasksToInsert = COMPLETE_90_DAYS_CURRICULUM.map((item) => {
    let completed = false;
    let completedAt = null;

    // Days 1 to 10 are completely completed
    if (item.dayNumber <= 10) {
      completed = true;
      const compDate = new Date(startDate);
      compDate.setDate(compDate.getDate() + (item.dayNumber - 1));
      completedAt = compDate;
    } else if (item.dayNumber === 11) {
      // Day 11: 4 of 5 completed, leave reasoning pending!
      if (item.subject !== 'reasoning') {
        completed = true;
        const compDate = new Date(startDate);
        compDate.setDate(compDate.getDate() + 10);
        completedAt = compDate;
      }
    } else if (item.dayNumber === 12) {
      // Day 12 (today): initially DSA completed (45%)
      if (item.subject === 'dsa') {
        completed = true;
        completedAt = new Date();
      }
    }
    // Days 13-90: future days, completed = false, never counted as missed

    return {
      userId: user._id,
      studyPlanId: plan._id,
      subject: item.subject,
      dayNumber: item.dayNumber,
      topic: item.topic,
      title: item.title,
      description: item.description || '',
      estimatedMinutes: item.estimatedMinutes || 45,
      learningObjectives: item.learningObjectives || [],
      practiceQuestions: item.practiceQuestions || [],
      exercise: item.exercise || {},
      completed,
      completedAt,
    };
  });

  const insertedTasks = await Task.insertMany(tasksToInsert);
  console.log(`Successfully seeded ${insertedTasks.length} tasks in MongoDB Atlas.`);

  // 5. Seed DailyProgress for Days 1 to 12
  console.log('Seeding DailyProgress history...');
  for (let day = 1; day <= 12; day++) {
    const recDate = new Date(startDate);
    recDate.setDate(recDate.getDate() + (day - 1));
    const dateStr = formatYMD(recDate);

    const dayTasks = insertedTasks.filter((t) => t.dayNumber === day);
    const dayStats = groupTaskStatsByCategory(dayTasks);
    const dailyScore = calculateWeightedDailyScore(dayStats);
    const completedCount = dayTasks.filter((t) => t.completed).length;

    await DailyProgress.create({
      userId: user._id,
      studyPlanId: plan._id,
      date: dateStr,
      completedTasks: completedCount,
      totalTasks: dayTasks.length,
      dailyScore,
      actualStudyMinutes: completedCount * 35,
    });
  }

  console.log('Seeding complete! User Piyush is ready with 11-day streak and live Day 12 mission.');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
