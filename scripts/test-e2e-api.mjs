/**
 * End-to-End HTTP API Integration Test for Mission 90 Activity Heatmap
 */
import assert from 'assert';

const BASE_URL = 'http://localhost:3000';

async function runE2ETest() {
  console.log('Testing E2E HTTP Endpoints on', BASE_URL);

  // 1. Login as demo user
  const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'piyush@mission90.com',
      password: 'Password123!',
    }),
  });

  assert.strictEqual(loginRes.status, 200, 'Login failed');
  const loginData = await loginRes.json();
  assert.ok(loginData.success, 'Login response success should be true');

  const setCookie = loginRes.headers.get('set-cookie');
  assert.ok(setCookie, 'set-cookie header should be present');
  const cookie = setCookie.split(';')[0];
  console.log('✓ Successfully authenticated and obtained session cookie');

  // 2. Fetch /api/progress/overall
  const overallRes = await fetch(`${BASE_URL}/api/progress/overall`, {
    headers: {
      Cookie: cookie,
    },
  });

  assert.strictEqual(overallRes.status, 200, '/api/progress/overall status 200');
  const overallData = await overallRes.json();
  assert.ok(overallData.success, '/api/progress/overall success should be true');
  const { stats } = overallData;

  console.log('Overall API Stats:');
  console.log('  Start Date:', stats.startDate);
  console.log('  Current Date:', stats.currentDate);
  console.log('  Current Day:', stats.currentDay);
  console.log('  Total Active Days:', stats.totalActiveDays);
  console.log('  Fully Completed Days:', stats.fullyCompletedDays);
  console.log('  Current Streak:', stats.currentStreak);
  console.log('  Max Streak:', stats.maxStreak);

  assert.strictEqual(stats.startDate, '2026-10-14', 'Start date should be 2026-10-14');
  assert.strictEqual(stats.currentDate, '2026-10-16', 'Current date should be 2026-10-16');
  assert.strictEqual(stats.currentDay, 3, 'Current day should be 3');
  assert.strictEqual(stats.totalActiveDays, 3, 'Total active days should be 3');
  assert.strictEqual(stats.fullyCompletedDays, 2, 'Fully completed days should be 2');
  assert.strictEqual(stats.currentStreak, 2, 'Current streak should be 2');
  assert.strictEqual(stats.maxStreak, 2, 'Max streak should be 2');

  const oct14 = stats.dailyActivity['2026-10-14'];
  assert.strictEqual(oct14.isFullyCompleted, true, 'Oct 14 should be fully completed');
  assert.strictEqual(oct14.completedTasks, 5, 'Oct 14 should have 5 tasks completed');

  const oct15 = stats.dailyActivity['2026-10-15'];
  assert.strictEqual(oct15.isFullyCompleted, true, 'Oct 15 should be fully completed');
  assert.strictEqual(oct15.completedTasks, 5, 'Oct 15 should have 5 tasks completed');

  const oct16 = stats.dailyActivity['2026-10-16'];
  assert.strictEqual(oct16.isFullyCompleted, false, 'Oct 16 should NOT be fully completed');
  assert.strictEqual(oct16.completedTasks, 2, 'Oct 16 should have 2 tasks completed');

  console.log('✓ /api/progress/overall successfully verified');

  // 3. Fetch /api/progress/activity
  const activityRes = await fetch(`${BASE_URL}/api/progress/activity`, {
    headers: { Cookie: cookie },
  });
  assert.strictEqual(activityRes.status, 200, '/api/progress/activity status 200');
  const activityData = await activityRes.json();
  assert.ok(activityData.success, '/api/progress/activity success');
  assert.strictEqual(activityData.startDate, '2026-10-14');
  assert.strictEqual(activityData.currentDate, '2026-10-16');
  assert.strictEqual(activityData.totalActiveDays, 3);
  assert.strictEqual(activityData.fullyCompletedDays, 2);
  assert.strictEqual(activityData.currentStreak, 2);
  assert.strictEqual(activityData.maxStreak, 2);
  console.log('✓ /api/progress/activity successfully verified');

  // 4. Test live task toggle via PATCH /api/tasks/:id
  const tasksRes = await fetch(`${BASE_URL}/api/tasks?day=3`, {
    headers: { Cookie: cookie },
  });
  const tasksData = await tasksRes.json();
  const pendingDay3Task = tasksData.tasks.find((t) => !t.completed);
  assert.ok(pendingDay3Task, 'Found pending task for Day 3');

  console.log(`Testing PATCH /api/tasks/${pendingDay3Task.id} to completed=true`);
  const patchRes = await fetch(`${BASE_URL}/api/tasks/${pendingDay3Task.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookie,
    },
    body: JSON.stringify({ completed: true }),
  });
  assert.strictEqual(patchRes.status, 200, 'PATCH task failed');
  const patchData = await patchRes.json();
  assert.ok(patchData.success, 'PATCH task success should be true');
  assert.strictEqual(patchData.overallStats.dailyActivity['2026-10-16'].completedTasks, 3);

  // Restore task back to incomplete
  console.log(`Restoring PATCH /api/tasks/${pendingDay3Task.id} to completed=false`);
  const restoreRes = await fetch(`${BASE_URL}/api/tasks/${pendingDay3Task.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookie,
    },
    body: JSON.stringify({ completed: false }),
  });
  assert.strictEqual(restoreRes.status, 200, 'Restore PATCH failed');
  const restoreData = await restoreRes.json();
  assert.strictEqual(restoreData.overallStats.dailyActivity['2026-10-16'].completedTasks, 2);
  assert.strictEqual(restoreData.overallStats.dailyActivity['2026-10-16'].isFullyCompleted, false);

  console.log('✓ PATCH task completion and live recalculation successfully verified');
  console.log('🎉 ALL HTTP E2E TESTS PASSED SUCCESSFULLY!');
}

runE2ETest().catch((err) => {
  console.error('E2E Test Failed:', err);
  process.exit(1);
});
