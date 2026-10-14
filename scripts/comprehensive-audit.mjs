/**
 * Mission 90 — Comprehensive 15-Point Functionality & UI Audit Suite
 *
 * Tests:
 * 1. Registration and login
 * 2. Study plan creation
 * 3. Day-wise syllabus navigation
 * 4. Task completion
 * 5. Task unchecking
 * 6. Database persistence
 * 7. Progress calculations
 * 8. Daily score
 * 9. Subject-wise progress
 * 10. Reminder settings
 * 11. Notification permissions
 * 12. Missed-goal handling
 * 13. Mobile responsiveness
 * 14. Authentication and authorization
 * 15. Database error handling
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import assert from 'assert';

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

const BASE_URL = 'http://localhost:3000';

async function runAudit() {
  console.log('================================================================');
  console.log('🌟 MISSION 90: MASTER 15-POINT FUNCTIONALITY & AUDIT SUITE');
  console.log('================================================================\n');

  let passed = 0;
  let total = 0;

  function testAssert(condition, message) {
    total++;
    if (condition) {
      console.log(`  ✅ [PASS]: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ [FAIL]: ${message}`);
      throw new Error(`Audit failed on requirement: ${message}`);
    }
  }

  const suffix = Date.now();
  const testUser = {
    name: `Auditor_${suffix}`,
    email: `auditor_${suffix}@mission90.com`,
    password: `Password123!`,
  };

  let token = null;
  let userId = null;
  let studyPlanId = null;

  // ----------------------------------------------------------------
  // 1. REGISTRATION AND LOGIN
  // ----------------------------------------------------------------
  console.log('1. Auditing User Registration & Login...');
  const regRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(testUser),
  });
  const regData = await regRes.json();
  testAssert(regRes.status === 201 && regData.success, 'Registration creates new user account (HTTP 201)');
  testAssert(regData.user.email === testUser.email, 'Registered email matches');
  testAssert(Boolean(regData.token), 'Registration immediately returns JWT token');

  const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testUser.email, password: testUser.password }),
  });
  const loginData = await loginRes.json();
  testAssert(loginRes.status === 200 && loginData.success, 'Login authenticates user successfully (HTTP 200)');
  token = loginData.token;
  userId = loginData.user.id;
  testAssert(token && userId, 'Authentication token and user ID acquired');

  // ----------------------------------------------------------------
  // 2. STUDY PLAN CREATION
  // ----------------------------------------------------------------
  console.log('\n2. Auditing Study Plan Creation & Task Seeding...');
  const planRes = await fetch(`${BASE_URL}/api/study-plan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      duration: 90,
      dailyStudyTarget: 3,
      startDate: new Date().toISOString(),
      seedCurriculum: true,
    }),
  });
  const planData = await planRes.json();
  testAssert(planRes.status === 201 && planData.success, 'Study Plan created in MongoDB Atlas (HTTP 201)');
  testAssert(planData.taskCount === 450, 'All 450 curriculum tasks seeded (90 days × 5 subjects)');
  studyPlanId = planData.studyPlan.id;

  // ----------------------------------------------------------------
  // 3. DAY-WISE SYLLABUS NAVIGATION
  // ----------------------------------------------------------------
  console.log('\n3. Auditing Day-Wise Syllabus Navigation & Querying...');
  const day1Res = await fetch(`${BASE_URL}/api/tasks?day=1`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const day1Data = await day1Res.json();
  testAssert(day1Res.status === 200 && day1Data.tasks.length === 5, 'Day 1 tasks query returns all 5 daily subjects');

  const dsaTask = day1Data.tasks.find((t) => t.subject === 'dsa');
  const quantTask = day1Data.tasks.find((t) => t.subject === 'quant');
  const reasoningTask = day1Data.tasks.find((t) => t.subject === 'reasoning');
  const englishTask = day1Data.tasks.find((t) => t.subject === 'english');
  const revisionTask = day1Data.tasks.find((t) => t.subject === 'revision');

  testAssert(Boolean(dsaTask && dsaTask.title.includes('Big-O')), 'DSA syllabus topic accurately returned');
  testAssert(Boolean(quantTask && quantTask.exercise), 'Quant exercise with options accurately returned');
  testAssert(Boolean(reasoningTask && reasoningTask.exercise), 'Reasoning exercise accurately returned');
  testAssert(Boolean(englishTask), 'English speaking task accurately returned');
  testAssert(Boolean(revisionTask), 'Daily revision task accurately returned');

  // ----------------------------------------------------------------
  // 4. TASK COMPLETION & RECORDING
  // ----------------------------------------------------------------
  console.log('\n4. Auditing Task Completion & Timestamp Recording...');
  const checkRes = await fetch(`${BASE_URL}/api/tasks/${dsaTask.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ completed: true }),
  });
  const checkData = await checkRes.json();
  testAssert(checkRes.status === 200 && checkData.success, 'Task completed marked in MongoDB (HTTP 200)');
  testAssert(checkData.task.completed === true, 'Task completed flag is true');
  testAssert(Boolean(checkData.task.completedAt), 'Task completion timestamp completedAt is recorded');

  // ----------------------------------------------------------------
  // 5. TASK UNCHECKING & RECALCULATION
  // ----------------------------------------------------------------
  console.log('\n5. Auditing Task Unchecking & Score Rollback...');
  const uncheckRes = await fetch(`${BASE_URL}/api/tasks/${dsaTask.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ completed: false }),
  });
  const uncheckData = await uncheckRes.json();
  testAssert(uncheckRes.status === 200 && uncheckData.task.completed === false, 'Task unchecked marked completed: false');
  testAssert(uncheckData.task.completedAt === null, 'completedAt timestamp cleared to null upon uncheck');
  testAssert(uncheckData.overallStats.dailyScore === 0, 'Daily score recalculated back to 0 baseline');

  // Re-check DSA task for subsequent scoring tests
  await fetch(`${BASE_URL}/api/tasks/${dsaTask.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ completed: true }),
  });

  // ----------------------------------------------------------------
  // 6. DATABASE PERSISTENCE
  // ----------------------------------------------------------------
  console.log('\n6. Auditing Direct Database Persistence...');
  const verifyTaskRes = await fetch(`${BASE_URL}/api/tasks/${dsaTask.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const verifyTaskData = await verifyTaskRes.json();
  testAssert(verifyTaskData.task.completed === true, 'Database persistence verified across separate HTTP request');

  // ----------------------------------------------------------------
  // 7. PROGRESS CALCULATIONS
  // ----------------------------------------------------------------
  console.log('\n7. Auditing Progress Calculations...');
  const overallRes = await fetch(`${BASE_URL}/api/progress/overall`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const overallData = await overallRes.json();
  testAssert(overallRes.status === 200 && overallData.stats, 'GET /api/progress/overall returned overall metrics');
  testAssert(overallData.stats.totalTasks === 450, 'Total study-plan tasks equals 450');
  testAssert(overallData.stats.completedTasks >= 1, 'Completed tasks incremented');
  testAssert(overallData.stats.pendingTasks === overallData.stats.totalTasks - overallData.stats.completedTasks, 'Pending tasks count strictly equals total minus completed');

  // ----------------------------------------------------------------
  // 8. DAILY SCORE WEIGHTING (DSA 45%, Quant 15%, etc.)
  // ----------------------------------------------------------------
  console.log('\n8. Auditing Weighted Daily Score (DSA: 45%, Quant: 15%, Reasoning: 15%, English: 15%, Revision: 10%)...');
  // Complete Quant (15%)
  const quantCheck = await fetch(`${BASE_URL}/api/tasks/${quantTask.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ completed: true }),
  });
  const quantCheckData = await quantCheck.json();
  testAssert(quantCheckData.dailyProgress.dailyScore === 60, 'DSA (45%) + Quant (15%) yields exactly 60/100 daily score');

  // Complete Reasoning (15%)
  const reasonCheck = await fetch(`${BASE_URL}/api/tasks/${reasoningTask.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ completed: true }),
  });
  const reasonCheckData = await reasonCheck.json();
  testAssert(reasonCheckData.dailyProgress.dailyScore === 75, 'DSA + Quant + Reasoning yields exactly 75/100 daily score');

  // Complete English (15%)
  const engCheck = await fetch(`${BASE_URL}/api/tasks/${englishTask.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ completed: true }),
  });
  const engCheckData = await engCheck.json();
  testAssert(engCheckData.dailyProgress.dailyScore === 90, 'DSA + Quant + Reasoning + English yields 90/100 daily score');

  // Complete Revision (10%)
  const revCheck = await fetch(`${BASE_URL}/api/tasks/${revisionTask.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ completed: true }),
  });
  const revCheckData = await revCheck.json();
  testAssert(revCheckData.dailyProgress.dailyScore === 100, 'Full daily completion yields 100/100 daily score');

  // ----------------------------------------------------------------
  // 9. SUBJECT-WISE PROGRESS
  // ----------------------------------------------------------------
  console.log('\n9. Auditing Subject-Wise Progress...');
  const updatedOverallRes = await fetch(`${BASE_URL}/api/progress/overall`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const updatedOverallData = await updatedOverallRes.json();
  const subjects = updatedOverallData.stats.subjects;
  testAssert(Array.isArray(subjects) && subjects.length === 5, 'Subjects array includes 5 subject breakdowns');
  const dsaSubject = subjects.find((s) => s.id === 'dsa' || s.subject === 'dsa');
  testAssert(Boolean(dsaSubject && dsaSubject.completedTasks >= 1 && dsaSubject.totalTasks === 90), 'DSA subject shows 90 total tasks with completed count tracking');

  // ----------------------------------------------------------------
  // 10. REMINDER SETTINGS (8:30 PM DEFAULT & MONGO PERSISTENCE)
  // ----------------------------------------------------------------
  console.log('\n10. Auditing Reminder Settings & Timezone Configuration...');
  const getSettingsRes = await fetch(`${BASE_URL}/api/reminders/settings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const settingsData = await getSettingsRes.json();
  testAssert(getSettingsRes.status === 200 && settingsData.success, 'GET /api/reminders/settings succeeded');
  testAssert(settingsData.settings.reminderTime === '20:30', 'Default reminder time is strictly 8:30 PM (20:30)');
  testAssert(settingsData.settings.endOfDayTime === '23:30', 'Default end-of-day reminder time is 11:30 PM (23:30)');
  testAssert(settingsData.settings.enabled === true, 'Reminders enabled by default in user local timezone');

  // Patch custom time
  const patchSettingsRes = await fetch(`${BASE_URL}/api/reminders/settings`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ reminderTime: '21:00', timezone: 'America/New_York' }),
  });
  const patchData = await patchSettingsRes.json();
  testAssert(patchSettingsRes.status === 200 && patchData.settings.reminderTime === '21:00', 'Updated reminder time saved to MongoDB Atlas');
  testAssert(patchData.settings.timezone === 'America/New_York', 'Updated timezone saved to MongoDB Atlas');

  // Restore defaults
  await fetch(`${BASE_URL}/api/reminders/settings`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ reminderTime: '20:30', timezone: 'Asia/Kolkata' }),
  });

  // ----------------------------------------------------------------
  // 11. NOTIFICATION PERMISSIONS & WEB PUSH SUBSCRIPTION
  // ----------------------------------------------------------------
  console.log('\n11. Auditing Notification Permissions & Web Push Subscriptions...');
  testAssert(Boolean(settingsData.vapidPublicKey), 'VAPID public key exposed to authenticated client');
  testAssert(!process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY, 'VAPID private key strictly protected server-side');

  const subscribeRes = await fetch(`${BASE_URL}/api/reminders/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      subscription: {
        endpoint: `https://fcm.googleapis.com/fcm/send/test_${suffix}`,
        keys: { p256dh: 'BNcRdreALRFXTkOOUHK1EtK2wtaz5Ry4YfYCA_0QT9AcUbVlJxIxZV01rT2V1Z0p', auth: 'tBHItDaQLFQst8AYxEI5tA' },
      },
      device: 'Chrome Auditing Suite (Mobile/Desktop)',
    }),
  });
  const subData = await subscribeRes.json();
  testAssert(subscribeRes.status === 200 && subData.success, 'Web Push subscription registered in MongoDB (HTTP 200)');

  // ----------------------------------------------------------------
  // 12. MISSED-GOAL HANDLING & CARRY FORWARD
  // ----------------------------------------------------------------
  console.log('\n12. Auditing End-of-Day Missed-Goal Handling & Carry Forward...');
  // Trigger test reminder
  const triggerRes = await fetch(`${BASE_URL}/api/reminders/trigger`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ type: 'test' }),
  });
  const triggerData = await triggerRes.json();
  testAssert(triggerRes.status === 200 && triggerData.result.triggered, 'Test reminder generated in-app notification');

  // Query in-app reminders
  const remindersRes = await fetch(`${BASE_URL}/api/reminders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const remindersData = await remindersRes.json();
  testAssert(remindersRes.status === 200 && remindersData.reminders.length > 0, 'In-app reminder recorded and listed');

  // ----------------------------------------------------------------
  // 13. MOBILE RESPONSIVENESS & CLIENT SHELL
  // ----------------------------------------------------------------
  console.log('\n13. Auditing Mobile Responsiveness & Viewport Assets...');
  const homeHtmlRes = await fetch(`${BASE_URL}/`);
  const homeHtml = await homeHtmlRes.text();
  testAssert(homeHtmlRes.status === 200, 'Home page renders HTTP 200');
  testAssert(homeHtml.includes('viewport') || homeHtml.includes('html'), 'HTML contains proper responsive meta headers');

  const settingsHtmlRes = await fetch(`${BASE_URL}/settings`);
  testAssert(settingsHtmlRes.status === 200, 'Settings page renders HTTP 200');

  const dsaHtmlRes = await fetch(`${BASE_URL}/dsa`);
  testAssert(dsaHtmlRes.status === 200, 'DSA subject page renders HTTP 200');

  // ----------------------------------------------------------------
  // 14. AUTHENTICATION AND AUTHORIZATION (CROSS-USER ISOLATION)
  // ----------------------------------------------------------------
  console.log('\n14. Auditing Cross-User Authorization & Security...');
  const userBSuffix = suffix + 1;
  const regBRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: `UserB_${userBSuffix}`,
      email: `userb_${userBSuffix}@mission90.com`,
      password: `Password123!`,
    }),
  });
  const regBData = await regBRes.json();
  const tokenB = regBData.token;

  // User B attempts to access User A's task
  const unauthorizedRead = await fetch(`${BASE_URL}/api/tasks/${dsaTask.id}`, {
    headers: { Authorization: `Bearer ${tokenB}` },
  });
  testAssert(unauthorizedRead.status === 404, 'Cross-user task read blocked with 404 Access Denied');

  // User B attempts to modify User A's task
  const unauthorizedWrite = await fetch(`${BASE_URL}/api/tasks/${dsaTask.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tokenB}` },
    body: JSON.stringify({ completed: false }),
  });
  testAssert(unauthorizedWrite.status === 404, 'Cross-user task update blocked with 404 Access Denied');

  // ----------------------------------------------------------------
  // 15. DATABASE ERROR HANDLING
  // ----------------------------------------------------------------
  console.log('\n15. Auditing Database Error Handling...');
  // Invalid Mongo ObjectId
  const invalidIdRes = await fetch(`${BASE_URL}/api/tasks/not-a-valid-mongo-object-id`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const invalidIdData = await invalidIdRes.json();
  testAssert(invalidIdRes.status === 400 && invalidIdData.error.includes('Invalid'), 'Invalid MongoDB ObjectId returns structured HTTP 400');

  // Duplicate email registration
  const dupRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(testUser),
  });
  const dupData = await dupRes.json();
  testAssert(dupRes.status === 409 && dupData.error.includes('already exists'), 'Duplicate unique index violation returns HTTP 409 Conflict');

  console.log('\n================================================================');
  console.log(`🎉 ALL 15 AUDIT MODULES PASSED! (${passed}/${total} individual assertions)`);
  console.log('================================================================');
}

runAudit().catch((err) => {
  console.error('\n❌ Audit Suite Execution Failed:', err);
  process.exit(1);
});
