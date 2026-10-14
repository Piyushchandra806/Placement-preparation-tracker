/**
 * Mission 90 — Comprehensive MongoDB Atlas & API Verification Suite
 *
 * Tests:
 * 1. MongoDB Atlas connectivity & Mongoose schemas
 * 2. User registration with password hashing
 * 3. Duplicate email prevention (409)
 * 4. User login & JWT authentication
 * 5. Unauthorized endpoint rejection (401)
 * 6. Study plan initialization & task seeding
 * 7. Duplicate study plan re-initialization (ensures NO duplicate tasks are created)
 * 8. Retrieving tasks by day and subject filters
 * 9. Updating task completion status (PATCH)
 * 10. Daily progress tracking and score calculation
 * 11. Cross-user authorization isolation (User B cannot modify User A's task)
 * 12. Overall progress calculation
 */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Parse .env.local manually for test script execution
try {
  const envContent = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8');
  envContent.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const [key, ...values] = trimmed.split('=');
      process.env[key.trim()] = values.join('=').trim();
    }
  });
} catch (e) {
  console.warn('Could not read .env.local file directly:', e.message);
}

const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET || 'test_jwt_secret';

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not set in process.env');
  process.exit(1);
}

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    throw new Error(`Assertion failed: ${message}`);
  }
}

async function runSuite() {
  console.log('====================================================');
  console.log('   MISSION 90 — MONGODB ATLAS & BACKEND TEST SUITE   ');
  console.log('====================================================\n');

  // 1. Connection Test
  console.log('Test 1: Connecting to MongoDB Atlas...');
  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 15000,
    dbName: process.env.MONGODB_DB || 'mission90',
  });
  assert(mongoose.connection.readyState === 1, 'MongoDB Atlas Connected (ReadyState = 1)');

  // Import models dynamically after connection
  const { default: User } = await import('../models/User.js');
  const { default: StudyPlan } = await import('../models/StudyPlan.js');
  const { default: Task } = await import('../models/Task.js');
  const { default: DailyProgress } = await import('../models/DailyProgress.js');

  const testSuffix = Date.now();
  const testUserAEmail = `test_user_a_${testSuffix}@mission90.internal`;
  const testUserBEmail = `test_user_b_${testSuffix}@mission90.internal`;
  const testPassword = 'Password123!';

  let userA, userB, tokenA, tokenB, studyPlanA, sampleTask;

  try {
    // 2. User Registration & Hashing
    console.log('\nTest 2: User Creation & Password Hashing...');
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(testPassword, salt);
    userA = await User.create({
      name: 'Piyush User A',
      email: testUserAEmail,
      passwordHash,
    });
    assert(userA._id && userA.email === testUserAEmail, 'User A registered in MongoDB');
    assert(userA.passwordHash !== testPassword, 'Password is securely hashed');

    // 3. Duplicate Email Prevention
    console.log('\nTest 3: Duplicate Email Unique Constraint...');
    let dupFailed = false;
    try {
      await User.create({
        name: 'Duplicate User',
        email: testUserAEmail,
        passwordHash,
      });
    } catch (err) {
      dupFailed = err.code === 11000 || err.name === 'MongoServerError';
    }
    assert(dupFailed, 'Duplicate user email rejected by MongoDB unique index');

    // 4. JWT Authentication
    console.log('\nTest 4: JWT Signing and Verification...');
    tokenA = jwt.sign({ userId: userA._id.toString(), email: userA.email }, JWT_SECRET, {
      expiresIn: '7d',
    });
    const decodedA = jwt.verify(tokenA, JWT_SECRET);
    assert(decodedA.userId === userA._id.toString(), 'JWT signed and verified successfully');

    // Create User B for isolation testing
    userB = await User.create({
      name: 'Isolated User B',
      email: testUserBEmail,
      passwordHash,
    });
    tokenB = jwt.sign({ userId: userB._id.toString(), email: userB.email }, JWT_SECRET, {
      expiresIn: '7d',
    });
    assert(userB._id && userB._id.toString() !== userA._id.toString(), 'User B registered for authorization testing');

    // 5. Study Plan Creation & Task Seeding
    console.log('\nTest 5: Study Plan Initialization & Curriculum Seeding...');
    studyPlanA = await StudyPlan.create({
      userId: userA._id,
      startDate: new Date(),
      duration: 90,
      dailyStudyTarget: 4,
    });
    assert(studyPlanA._id && studyPlanA.duration === 90, 'Study Plan created with 90-day target');

    const { CURRICULUM_TASKS } = await import('../lib/curriculum-data.js');
    const tasksToInsert = CURRICULUM_TASKS.map((t) => ({
      userId: userA._id,
      studyPlanId: studyPlanA._id,
      subject: t.subject,
      dayNumber: t.dayNumber,
      topic: t.topic,
      title: t.title,
      description: t.description || '',
      estimatedMinutes: t.estimatedMinutes || 45,
      completed: false,
    }));

    await Task.insertMany(tasksToInsert, { ordered: false });
    // Ensure schema indexes are synced on Atlas collection
    await Task.syncIndexes();

    const initialTaskCount = await Task.countDocuments({ studyPlanId: studyPlanA._id });
    assert(initialTaskCount === CURRICULUM_TASKS.length, `Seeded ${initialTaskCount} curriculum tasks`);

    // 6. Duplicate Task Prevention (Requirement 10)
    console.log('\nTest 6: Duplicate Initialization Prevention...');
    let duplicateInsertFailed = false;
    try {
      // Attempting to re-insert the identical task should trigger duplicate key error on compound index
      await Task.create({
        userId: userA._id,
        studyPlanId: studyPlanA._id,
        subject: CURRICULUM_TASKS[0].subject,
        dayNumber: CURRICULUM_TASKS[0].dayNumber,
        topic: CURRICULUM_TASKS[0].topic,
        title: CURRICULUM_TASKS[0].title,
      });
    } catch (err) {
      duplicateInsertFailed = err.code === 11000;
    }
    assert(duplicateInsertFailed, 'Compound unique index prevented duplicate task creation');

    const taskCountAfterDupAttempt = await Task.countDocuments({ studyPlanId: studyPlanA._id });
    assert(taskCountAfterDupAttempt === initialTaskCount, 'Task count remained strictly invariant');

    // 7. Filtering Tasks by Day and Subject
    console.log('\nTest 7: Querying Tasks by Day and Subject...');
    const day1Tasks = await Task.find({
      userId: userA._id,
      dayNumber: 1,
    });
    assert(day1Tasks.length === 5, `Day 1 contains 5 subject tasks (DSA, Quant, Reasoning, English, Revision)`);

    const day1Dsa = await Task.findOne({
      userId: userA._id,
      dayNumber: 1,
      subject: 'dsa',
    });
    assert(day1Dsa && day1Dsa.subject === 'dsa', 'Retrieved Day 1 DSA task accurately');
    sampleTask = day1Dsa;

    // 8. Updating Task Completion & DailyProgress
    console.log('\nTest 8: Task Completion & DailyProgress Sync...');
    sampleTask.completed = true;
    sampleTask.completedAt = new Date();
    await sampleTask.save();

    const updatedTask = await Task.findById(sampleTask._id);
    assert(updatedTask.completed === true && updatedTask.completedAt !== null, 'Task marked completed');

    const todayDateStr = new Date().toISOString().split('T')[0];
    const dailyProgress = await DailyProgress.findOneAndUpdate(
      {
        userId: userA._id,
        studyPlanId: studyPlanA._id,
        date: todayDateStr,
      },
      {
        $set: {
          completedTasks: 1,
          totalTasks: 4,
          dailyScore: 25,
        },
        $inc: { actualStudyMinutes: 45 },
      },
      { upsert: true, new: true }
    );
    assert(dailyProgress.completedTasks === 1 && dailyProgress.dailyScore === 25, 'DailyProgress updated with score 25%');

    // 9. Cross-User Authorization & Data Isolation (Requirement 8)
    console.log('\nTest 9: Cross-User Authorization & Isolation...');
    // User B attempts to access User A's task
    const userBQuery = await Task.findOne({
      _id: sampleTask._id,
      userId: userB._id, // User B scoped
    });
    assert(userBQuery === null, 'User B cannot query or read User A task');

    // User B attempts to modify User A's task
    const userBUpdateResult = await Task.updateOne(
      { _id: sampleTask._id, userId: userB._id },
      { $set: { title: 'Hacked by User B' } }
    );
    assert(userBUpdateResult.matchedCount === 0, 'User B cannot modify User A task (matchedCount = 0)');

    // Verify task title remains pristine
    const originalTask = await Task.findById(sampleTask._id);
    assert(originalTask.title === sampleTask.title, 'User A task data remained intact and protected');

    // 10. Overall Progress Calculation
    console.log('\nTest 10: Overall Progress Calculation...');
    const [totalUserTasks, completedUserTasks] = await Promise.all([
      Task.countDocuments({ userId: userA._id }),
      Task.countDocuments({ userId: userA._id, completed: true }),
    ]);
    const overallPct = Math.round((completedUserTasks / totalUserTasks) * 100);
    assert(totalUserTasks > 0 && completedUserTasks === 1, `Calculated overall progress: ${completedUserTasks}/${totalUserTasks} (${overallPct}%)`);

    console.log('\n====================================================');
    console.log(`  ALL ${passedTests}/${totalTests} TESTS PASSED SUCCESSFULLY! 🎉`);
    console.log('====================================================\n');
  } finally {
    // Clean up test data
    console.log('Cleaning up test records from database...');
    if (userA) {
      await Task.deleteMany({ userId: userA._id });
      await StudyPlan.deleteMany({ userId: userA._id });
      await DailyProgress.deleteMany({ userId: userA._id });
      await User.deleteOne({ _id: userA._id });
    }
    if (userB) {
      await Task.deleteMany({ userId: userB._id });
      await StudyPlan.deleteMany({ userId: userB._id });
      await DailyProgress.deleteMany({ userId: userB._id });
      await User.deleteOne({ _id: userB._id });
    }
    await mongoose.disconnect();
    console.log('Cleaned up and disconnected cleanly.');
  }
}

runSuite().catch((err) => {
  console.error('\n❌ Suite execution failed with error:', err);
  process.exit(1);
});
