/**
 * Automated Test Suite for Activity Heatmap & Streaks (Scenarios A through I)
 *
 * Scenarios:
 * A. Study begins on October 14, 2026. No active history appears before October 14.
 * B. October 14 has all tasks completed -> October 14 is green (isFullyCompleted: true).
 * C. October 15 has all tasks completed -> October 15 is green (isFullyCompleted: true).
 * D. October 16 has some tasks completed -> October 16 remains grey (isFullyCompleted: false).
 * E. October 16 has all tasks completed -> October 16 becomes green immediately, streak updates.
 * F. A task is unchecked on October 15 -> October 15 becomes grey, streak recalculates.
 * G. Future dates never become green.
 * H. Refreshing the page preserves accurate history.
 * I. Statistics match the underlying MongoDB records.
 */

import { connectToDatabase } from '../lib/mongodb.js';
import User from '../models/User.js';
import Task from '../models/Task.js';
import StudyPlan from '../models/StudyPlan.js';
import {
  getComprehensiveProgressMetrics,
  calculateActivityMetrics,
  getDateForDayNumber,
  getUserLocalDateString,
} from '../lib/activity-tracker.js';

async function runTestSuite() {
  console.log('───────────────────────────────────────────────────────');
  console.log('🧪 RUNNING ACTIVITY HEATMAP AUTOMATED TEST SUITE');
  console.log('───────────────────────────────────────────────────────');

  await connectToDatabase();

  const user = await User.findOne({ email: 'piyushchandr806@gmail.com' });
  if (!user) {
    throw new Error('User piyushchandr806@gmail.com not found in database');
  }

  const plan = await StudyPlan.findOne({ userId: user._id });
  if (!plan) {
    throw new Error('Study plan not found for user');
  }

  const initialMetrics = await getComprehensiveProgressMetrics(user._id);

  let passedTests = 0;
  let totalTests = 9;

  // ─────────────────────────────────────────────────────────────
  // Scenario A: Study begins on October 14, 2026. No active history appears before Oct 14.
  // ─────────────────────────────────────────────────────────────
  try {
    const startDate = initialMetrics.startDate;
    if (startDate !== '2026-10-14') {
      throw new Error(`Expected start date 2026-10-14, got ${startDate}`);
    }

    const preStartDates = ['2026-10-13', '2026-10-01', '2026-09-30', '2025-12-10'];
    for (const d of preStartDates) {
      const act = initialMetrics.dailyActivity[d];
      if (act && (act.isFullyCompleted || act.completedTasks > 0)) {
        throw new Error(`Date before start (${d}) has active history!`);
      }
    }

    console.log('✅ Scenario A PASSED: Study begins Oct 14, 2026. No active history before Oct 14.');
    passedTests++;
  } catch (err) {
    console.error('❌ Scenario A FAILED:', err.message);
  }

  // ─────────────────────────────────────────────────────────────
  // Scenario B: October 14 has all tasks completed -> October 14 is green.
  // ─────────────────────────────────────────────────────────────
  try {
    const oct14 = initialMetrics.dailyActivity['2026-10-14'];
    if (!oct14) throw new Error('October 14 activity record missing');
    if (oct14.completedTasks !== 5 || oct14.totalTasks !== 5) {
      throw new Error(`Expected 5/5 tasks for Oct 14, got ${oct14.completedTasks}/${oct14.totalTasks}`);
    }
    if (!oct14.isFullyCompleted) {
      throw new Error('October 14 is not marked as isFullyCompleted (green)');
    }

    console.log('✅ Scenario B PASSED: October 14 has all 5 tasks completed and is GREEN.');
    passedTests++;
  } catch (err) {
    console.error('❌ Scenario B FAILED:', err.message);
  }

  // ─────────────────────────────────────────────────────────────
  // Scenario C: October 15 has all tasks completed -> October 15 is green.
  // ─────────────────────────────────────────────────────────────
  try {
    const oct15 = initialMetrics.dailyActivity['2026-10-15'];
    if (!oct15) throw new Error('October 15 activity record missing');
    if (oct15.completedTasks !== 5 || oct15.totalTasks !== 5) {
      throw new Error(`Expected 5/5 tasks for Oct 15, got ${oct15.completedTasks}/${oct15.totalTasks}`);
    }
    if (!oct15.isFullyCompleted) {
      throw new Error('October 15 is not marked as isFullyCompleted (green)');
    }

    console.log('✅ Scenario C PASSED: October 15 has all 5 tasks completed and is GREEN.');
    passedTests++;
  } catch (err) {
    console.error('❌ Scenario C FAILED:', err.message);
  }

  // ─────────────────────────────────────────────────────────────
  // Scenario D: October 16 has some tasks completed -> October 16 remains grey.
  // ─────────────────────────────────────────────────────────────
  try {
    const oct16 = initialMetrics.dailyActivity['2026-10-16'];
    if (!oct16) throw new Error('October 16 activity record missing');
    if (oct16.completedTasks !== 2 || oct16.totalTasks !== 5) {
      throw new Error(`Expected 2/5 tasks for Oct 16, got ${oct16.completedTasks}/${oct16.totalTasks}`);
    }
    if (oct16.isFullyCompleted) {
      throw new Error('October 16 must NOT be marked isFullyCompleted (must remain grey)');
    }

    console.log('✅ Scenario D PASSED: October 16 has 2/5 tasks completed and remains GREY.');
    passedTests++;
  } catch (err) {
    console.error('❌ Scenario D FAILED:', err.message);
  }

  // ─────────────────────────────────────────────────────────────
  // Scenario E: October 16 has all tasks completed -> October 16 becomes green immediately.
  // ─────────────────────────────────────────────────────────────
  try {
    // Complete the 3 incomplete tasks for Day 3 (October 16)
    const day3Incomplete = await Task.find({
      studyPlanId: plan._id,
      dayNumber: 3,
      completed: false,
    });

    if (day3Incomplete.length !== 3) {
      throw new Error(`Expected 3 incomplete tasks for Day 3, found ${day3Incomplete.length}`);
    }

    // Mark completed
    for (const t of day3Incomplete) {
      t.completed = true;
      t.completedAt = new Date('2026-10-16T10:00:00.000Z');
      await t.save();
    }

    const completedMetrics = await getComprehensiveProgressMetrics(user._id);
    const completedOct16 = completedMetrics.dailyActivity['2026-10-16'];

    if (!completedOct16.isFullyCompleted || completedOct16.completedTasks !== 5) {
      throw new Error(`Oct 16 failed to turn green! Completed: ${completedOct16.completedTasks}/5`);
    }
    if (completedMetrics.currentStreak !== 3) {
      throw new Error(`Expected current streak 3, got ${completedMetrics.currentStreak}`);
    }
    if (completedMetrics.fullyCompletedDays !== 3) {
      throw new Error(`Expected fully completed days 3, got ${completedMetrics.fullyCompletedDays}`);
    }
    if (completedMetrics.maxStreak !== 3) {
      throw new Error(`Expected max streak 3, got ${completedMetrics.maxStreak}`);
    }

    // Revert Day 3 tasks back to preserve original history
    for (const t of day3Incomplete) {
      t.completed = false;
      t.completedAt = null;
      await t.save();
    }

    console.log('✅ Scenario E PASSED: Completing all Oct 16 tasks turns Oct 16 GREEN, streak becomes 3, max streak becomes 3.');
    passedTests++;
  } catch (err) {
    console.error('❌ Scenario E FAILED:', err.message);
  }

  // ─────────────────────────────────────────────────────────────
  // Scenario F: A task is unchecked on October 15 -> October 15 becomes grey.
  // ─────────────────────────────────────────────────────────────
  try {
    const day2Tasks = await Task.find({ studyPlanId: plan._id, dayNumber: 2 });
    if (day2Tasks.length < 5) throw new Error('Day 2 tasks missing');

    // Uncheck 1 task on Day 2
    const taskToUncheck = day2Tasks[0];
    const originalCompletedAt = taskToUncheck.completedAt;
    taskToUncheck.completed = false;
    taskToUncheck.completedAt = null;
    await taskToUncheck.save();

    const uncheckedMetrics = await getComprehensiveProgressMetrics(user._id);
    const uncheckedOct15 = uncheckedMetrics.dailyActivity['2026-10-15'];

    if (uncheckedOct15.isFullyCompleted) {
      throw new Error('October 15 must NOT be green when 1 task is incomplete!');
    }
    if (uncheckedOct15.completedTasks !== 4) {
      throw new Error(`Expected 4 completed tasks, got ${uncheckedOct15.completedTasks}`);
    }
    if (uncheckedMetrics.fullyCompletedDays !== 1) {
      throw new Error(`Expected 1 completed day, got ${uncheckedMetrics.fullyCompletedDays}`);
    }
    if (uncheckedMetrics.currentStreak !== 0) {
      throw new Error(`Expected current streak 0 when yesterday broken, got ${uncheckedMetrics.currentStreak}`);
    }

    // Restore Day 2 task
    taskToUncheck.completed = true;
    taskToUncheck.completedAt = originalCompletedAt || new Date('2026-10-15T15:00:00.000Z');
    await taskToUncheck.save();

    const restoredMetrics = await getComprehensiveProgressMetrics(user._id);
    const restoredOct15 = restoredMetrics.dailyActivity['2026-10-15'];
    if (!restoredOct15.isFullyCompleted) {
      throw new Error('October 15 failed to restore green state');
    }
    if (restoredMetrics.currentStreak !== 2) {
      throw new Error(`Expected restored streak 2, got ${restoredMetrics.currentStreak}`);
    }

    console.log('✅ Scenario F PASSED: Unchecking Oct 15 task turns it GREY, drops streak; restoring it returns it to GREEN.');
    passedTests++;
  } catch (err) {
    console.error('❌ Scenario F FAILED:', err.message);
  }

  // ─────────────────────────────────────────────────────────────
  // Scenario G: Future dates never become green.
  // ─────────────────────────────────────────────────────────────
  try {
    const futureDates = ['2026-10-17', '2026-10-18', '2026-10-25', '2026-11-01', '2027-01-01'];
    for (const d of futureDates) {
      const act = initialMetrics.dailyActivity[d];
      if (act) {
        if (!act.isFuture) throw new Error(`Date ${d} is not marked isFuture!`);
        if (act.isFullyCompleted) throw new Error(`Future date ${d} is marked green!`);
      }
    }

    console.log('✅ Scenario G PASSED: Future dates never become green.');
    passedTests++;
  } catch (err) {
    console.error('❌ Scenario G FAILED:', err.message);
  }

  // ─────────────────────────────────────────────────────────────
  // Scenario H: Refreshing the page preserves accurate history.
  // ─────────────────────────────────────────────────────────────
  try {
    const refreshedMetrics = await getComprehensiveProgressMetrics(user._id);

    if (refreshedMetrics.startDate !== '2026-10-14') {
      throw new Error(`Refreshed start date mismatch: ${refreshedMetrics.startDate}`);
    }
    if (!refreshedMetrics.dailyActivity['2026-10-14']?.isFullyCompleted) {
      throw new Error('Refreshed Oct 14 lost green status!');
    }
    if (!refreshedMetrics.dailyActivity['2026-10-15']?.isFullyCompleted) {
      throw new Error('Refreshed Oct 15 lost green status!');
    }
    if (refreshedMetrics.dailyActivity['2026-10-16']?.isFullyCompleted) {
      throw new Error('Refreshed Oct 16 must remain incomplete/grey!');
    }

    console.log('✅ Scenario H PASSED: Refreshing from MongoDB preserves accurate historical data.');
    passedTests++;
  } catch (err) {
    console.error('❌ Scenario H FAILED:', err.message);
  }

  // ─────────────────────────────────────────────────────────────
  // Scenario I: Statistics match the underlying MongoDB records.
  // ─────────────────────────────────────────────────────────────
  try {
    const dbTotalTasks = await Task.countDocuments({ userId: user._id });
    const dbCompletedTasks = await Task.countDocuments({ userId: user._id, completed: true });

    if (initialMetrics.totalTasks !== dbTotalTasks) {
      throw new Error(`Total tasks mismatch: API ${initialMetrics.totalTasks} vs DB ${dbTotalTasks}`);
    }
    if (initialMetrics.completedTasks !== dbCompletedTasks) {
      throw new Error(`Completed tasks mismatch: API ${initialMetrics.completedTasks} vs DB ${dbCompletedTasks}`);
    }
    if (initialMetrics.totalActiveDays !== 3) {
      throw new Error(`Expected 3 active days, got ${initialMetrics.totalActiveDays}`);
    }
    if (initialMetrics.fullyCompletedDays !== 2) {
      throw new Error(`Expected 2 fully completed days, got ${initialMetrics.fullyCompletedDays}`);
    }
    if (initialMetrics.currentStreak !== 2) {
      throw new Error(`Expected current streak 2, got ${initialMetrics.currentStreak}`);
    }
    if (initialMetrics.maxStreak !== 2) {
      throw new Error(`Expected max streak 2, got ${initialMetrics.maxStreak}`);
    }

    console.log('✅ Scenario I PASSED: Statistics perfectly match raw MongoDB records.');
    passedTests++;
  } catch (err) {
    console.error('❌ Scenario I FAILED:', err.message);
  }

  console.log('───────────────────────────────────────────────────────');
  console.log(`🎉 TEST SUMMARY: ${passedTests}/${totalTests} SCENARIOS PASSED`);
  console.log('───────────────────────────────────────────────────────');

  process.exit(passedTests === totalTests ? 0 : 1);
}

runTestSuite().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
