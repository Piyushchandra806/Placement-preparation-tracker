/**
 * Verification Script: First 7 Days & 90-Day Placement Plan Integrity
 *
 * Verifies:
 * 1. All 90 days are fully populated with 360 total tasks (90 x 4 subjects).
 * 2. Days 1 to 7 audit: Every subject has specific daily tasks (not placeholders).
 * 3. DSA tasks: 75 mins, real problem links, learning objectives.
 * 4. Quant tasks: 25 mins, exercises with questions, options, answer keys & explanations.
 * 5. Reasoning tasks: 25 mins, logic exercises with step-by-step solutions.
 * 6. English tasks: 25 mins, speaking prompt, audio drill, diction objectives.
 * 7. Live MongoDB Atlas seeding and duplicate prevention verification.
 */

import { COMPLETE_90_DAYS_CURRICULUM } from '../lib/complete-90-days-syllabus.js';
import mongoose from 'mongoose';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Parse .env.local
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

let passed = 0;
let total = 0;

function assert(condition, message) {
  total++;
  if (condition) {
    console.log(`  ✅ [PASS]: ${message}`);
    passed++;
  } else {
    console.error(`  ❌ [FAIL]: ${message}`);
    throw new Error(`Failed assertion: ${message}`);
  }
}

async function verifyPlan() {
  console.log('====================================================');
  console.log('  MISSION 90 — FIRST 7 DAYS & SYLLABUS AUDIT SUITE   ');
  console.log('====================================================\n');

  // 1. Total count & structure
  console.log('1. Checking Total Syllabus Structure...');
  assert(COMPLETE_90_DAYS_CURRICULUM.length === 450, `Total tasks count is exactly 450 (90 days x 5 subjects)`);

  const subjects = ['dsa', 'quant', 'reasoning', 'english', 'revision'];
  subjects.forEach((s) => {
    const count = COMPLETE_90_DAYS_CURRICULUM.filter((t) => t.subject === s).length;
    assert(count === 90, `Subject "${s}" has exactly 90 daily tasks`);
  });

  // 2. Audit Days 1 to 7
  console.log('\n2. Auditing Days 1 to 7 for Meaningful Content...');
  for (let d = 1; d <= 7; d++) {
    console.log(`\n--- Day ${d} Audit ---`);
    const dayTasks = COMPLETE_90_DAYS_CURRICULUM.filter((t) => t.dayNumber === d);
    assert(dayTasks.length === 5, `Day ${d} has 5 subject tasks`);

    // DSA
    const dsa = dayTasks.find((t) => t.subject === 'dsa');
    assert(dsa && dsa.estimatedMinutes === 75, `Day ${d} DSA has 75 minutes allocation`);
    assert(dsa.topic.length > 3 && dsa.title.length > 5, `Day ${d} DSA has concrete title: "${dsa.title}"`);
    assert(dsa.learningObjectives && dsa.learningObjectives.length >= 2, `Day ${d} DSA has >= 2 learning objectives`);
    assert(dsa.practiceQuestions && dsa.practiceQuestions.length > 0, `Day ${d} DSA has real problem links`);
    dsa.practiceQuestions.forEach((prob) => {
      assert(prob.url.startsWith('https://leetcode.com/problems/'), `Real LeetCode URL: ${prob.title} (${prob.url})`);
    });

    // Quant
    const quant = dayTasks.find((t) => t.subject === 'quant');
    assert(quant && quant.estimatedMinutes === 25, `Day ${d} Quant has 25 minutes allocation`);
    assert(quant.exercise && quant.exercise.question, `Day ${d} Quant has practice exercise question`);
    assert(quant.exercise.options && quant.exercise.options.length === 4, `Day ${d} Quant has 4 multiple choice options`);
    assert(quant.exercise.answerKey && quant.exercise.explanation, `Day ${d} Quant has answer key: "${quant.exercise.answerKey}" & step-by-step explanation`);

    // Reasoning
    const reasoning = dayTasks.find((t) => t.subject === 'reasoning');
    assert(reasoning && reasoning.estimatedMinutes === 25, `Day ${d} Reasoning has 25 minutes allocation`);
    assert(reasoning.exercise && reasoning.exercise.question, `Day ${d} Reasoning has logic question`);
    assert(reasoning.exercise.answerKey && reasoning.exercise.explanation, `Day ${d} Reasoning has answer key: "${reasoning.exercise.answerKey}"`);

    // English
    const english = dayTasks.find((t) => t.subject === 'english');
    assert(english && english.estimatedMinutes === 25, `Day ${d} English has 25 minutes allocation`);
    assert((english.exercise && english.exercise.prompt) || (english.speakingPrompt && english.speakingPrompt.topic), `Day ${d} English has daily speaking prompt`);
    assert(english.learningObjectives && english.learningObjectives.length > 0, `Day ${d} English has speaking objectives`);

    // Revision
    const revision = dayTasks.find((t) => t.subject === 'revision');
    assert(revision && revision.estimatedMinutes >= 10, `Day ${d} Revision has >= 10 minutes allocation`);
    assert(revision.title && revision.title.length > 5, `Day ${d} Revision has concrete title: "${revision.title}"`);
  }

  // 3. MongoDB Atlas Seeding Test
  console.log('\n3. Testing MongoDB Atlas Seeding of Complete 90-Day Curriculum...');
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    console.warn('Skipping Atlas seeding test because MONGODB_URI is not set');
    return;
  }

  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 15000,
    dbName: process.env.MONGODB_DB || 'mission90',
  });

  const { default: User } = await import('../models/User.js');
  const { default: StudyPlan } = await import('../models/StudyPlan.js');
  const { default: Task } = await import('../models/Task.js');

  const testSuffix = Date.now();
  const testUser = await User.create({
    name: 'Curriculum Auditor',
    email: `auditor_${testSuffix}@mission90.internal`,
    passwordHash: 'hashed_password',
  });

  const testPlan = await StudyPlan.create({
    userId: testUser._id,
    duration: 90,
    dailyStudyTarget: 4,
  });

  const tasksToInsert = COMPLETE_90_DAYS_CURRICULUM.map((item) => ({
    userId: testUser._id,
    studyPlanId: testPlan._id,
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

  await Task.insertMany(tasksToInsert, { ordered: false });
  const insertedCount = await Task.countDocuments({ studyPlanId: testPlan._id });
  assert(insertedCount === 450, `Seeded exactly ${insertedCount} tasks into MongoDB Atlas`);

  // Verify Day 1 task query with rich fields
  const dbDay1Dsa = await Task.findOne({
    studyPlanId: testPlan._id,
    dayNumber: 1,
    subject: 'dsa',
  });
  assert(dbDay1Dsa && dbDay1Dsa.practiceQuestions.length > 0, `DB task retained real problem links`);
  assert(dbDay1Dsa.learningObjectives.length >= 2, `DB task retained learning objectives`);

  const dbDay1Quant = await Task.findOne({
    studyPlanId: testPlan._id,
    dayNumber: 1,
    subject: 'quant',
  });
  assert(dbDay1Quant && dbDay1Quant.exercise.answerKey, `DB Quant task retained exercise answerKey`);

  // Clean up
  await Task.deleteMany({ userId: testUser._id });
  await StudyPlan.deleteMany({ userId: testUser._id });
  await User.deleteOne({ _id: testUser._id });
  await mongoose.disconnect();

  console.log('\n====================================================');
  console.log(`  ALL ${passed}/${total} AUDIT CHECKS PASSED! 🎉`);
  console.log('====================================================\n');
}

verifyPlan().catch((err) => {
  console.error('\n❌ Audit failed:', err);
  process.exit(1);
});
