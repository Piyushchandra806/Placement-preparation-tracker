/**
 * Test: Continue Day, Weekly Breakdown & Pending Tasks Backlog
 */
import assert from 'assert';

const BASE_URL = 'http://localhost:3000';

async function run() {
  console.log('Testing Continue Day, Weekly Breakdown & Pending Backlog...');

  // 1. Register a test user
  const email = `test_continue_${Date.now()}@example.com`;
  const regRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Continue Tester', email, password: 'Password123!' }),
  });
  assert(regRes.status === 201, 'Registration succeeded');
  const regData = await regRes.json();
  const token = regData.token;
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };

  // 2. Initialize study plan
  const planRes = await fetch(`${BASE_URL}/api/study-plan`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ duration: 90, dailyStudyTarget: 3 }),
  });
  assert(planRes.status === 201, 'Study plan created');

  // 3. Check overall progress weeklyBreakdown
  const progRes = await fetch(`${BASE_URL}/api/progress/overall`, { headers });
  assert(progRes.status === 200, 'Overall progress succeeded');
  const progData = await progRes.json();
  assert(progData.stats.weeklyBreakdown, 'weeklyBreakdown exists in stats');
  assert(progData.stats.weeklyBreakdown.length === 13, 'Contains all 13 weeks');

  const week1 = progData.stats.weeklyBreakdown[0];
  console.log('Week 1 data for fresh user:', week1);
  assert(week1.progress === 0, 'Week 1 progress is 0% when no tasks completed');
  assert(week1.isCompleted === false, 'Week 1 is not marked completed');
  assert(week1.isCurrentWeek === true, 'Week 1 is current week for Day 1 user');

  // 4. Check tasks for Day 1
  const day1Res = await fetch(`${BASE_URL}/api/tasks?day=1`, { headers });
  assert(day1Res.status === 200, 'Day 1 tasks fetched');
  const day1Data = await day1Res.json();
  const dsaTask = day1Data.tasks.find((t) => t.subject === 'dsa');
  assert(dsaTask, 'Day 1 DSA task exists');
  assert(dsaTask.completed === false, 'Day 1 DSA task initially incomplete');

  // 5. Complete Day 1 DSA task
  const compRes = await fetch(`${BASE_URL}/api/tasks/${dsaTask.id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ completed: true }),
  });
  assert(compRes.status === 200, 'Day 1 DSA task completed');

  // 6. Check that GET /api/tasks?subject=dsa returns completed Day 1
  const dsaListRes = await fetch(`${BASE_URL}/api/tasks?subject=dsa&limit=100`, { headers });
  assert(dsaListRes.status === 200, 'DSA tasks fetched');
  const dsaListData = await dsaListRes.json();
  const dsa1 = dsaListData.tasks.find((t) => t.dayNumber === 1);
  const dsa2 = dsaListData.tasks.find((t) => t.dayNumber === 2);
  assert(dsa1.completed === true, 'DSA Day 1 is completed');
  assert(dsa2.completed === false, 'DSA Day 2 is incomplete (continue day)');

  // 7. Check pending tasks: should be empty because Day 1 user has no tasks before Day 1
  const pendingRes = await fetch(`${BASE_URL}/api/tasks?pending=true&beforeDay=1`, { headers });
  assert(pendingRes.status === 200, 'Pending tasks route succeeded');
  const pendingData = await pendingRes.json();
  assert(pendingData.tasks.length === 0, 'Zero overdue tasks before Day 1');

  // All assertions passed
  console.log('✅ ALL CONTINUE DAY, WEEKLY BREAKDOWN & PENDING TESTS PASSED!');
}

run().catch((err) => {
  console.error('Test failed:', err);
  process.exit(1);
});
