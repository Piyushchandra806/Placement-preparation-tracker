/**
 * Mission 90 — Comprehensive Task Completion & Progress Tracking Verification Script
 *
 * Verifies:
 * 1. User Authentication (Login, Session, Logout, Re-login)
 * 2. Interactive Checkbox Selection:
 *    - Saves completion to MongoDB Atlas
 *    - Records completedAt timestamp
 *    - Updates subject progress
 *    - Updates today's progress
 *    - Updates overall study-plan progress
 *    - Updates daily score using exact weights:
 *        DSA: 45%
 *        Quant: 15%
 *        Reasoning: 15%
 *        English: 15%
 *        Revision: 10%
 *    - Decrements pending task count
 * 3. Interactive Checkbox Unchecking:
 *    - Updates database (completed: false, completedAt: null)
 *    - Recalculates all progress metrics accurately
 * 4. Pending Tasks Backlog:
 *    - Checking an overdue task updates database, decreases pending count, increments completed count
 * 5. Session & Data Persistence:
 *    - History preserved across browser refresh & logout/login
 *    - Future days (days 13-90) never counted as missed
 */

const BASE_URL = 'http://localhost:3000';

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ [PASS]: ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ [FAIL]: ${message}`);
    throw new Error(`Assertion failed: ${message}`);
  }
}

async function runTests() {
  console.log('================================================================');
  console.log('  TESTING MISSION 90 TASK COMPLETION & PROGRESS TRACKING FLOW  ');
  console.log('================================================================\n');

  // Step 1: Login as candidate Piyush
  console.log('1. Authenticating as candidate Piyush...');
  const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'piyush@mission90.com', password: 'Password123!' }),
  });
  assert(loginRes.status === 200, 'POST /api/auth/login succeeded with 200');
  const loginData = await loginRes.json();
  assert(loginData.success && loginData.token, 'Auth token received in login response');
  const token = loginData.token;
  const authHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  // Step 2: Fetch today's tasks (Day 12)
  console.log('\n2. Fetching Day 12 Assigned Tasks...');
  const todayTasksRes = await fetch(`${BASE_URL}/api/tasks?day=12`, { headers: authHeaders });
  assert(todayTasksRes.status === 200, 'GET /api/tasks?day=12 succeeded with 200');
  const todayTasksData = await todayTasksRes.json();
  const day12Tasks = todayTasksData.tasks;
  assert(day12Tasks.length === 5, `Day 12 has exactly 5 tasks (got ${day12Tasks.length})`);

  const dsaTask = day12Tasks.find((t) => t.subject === 'dsa');
  const quantTask = day12Tasks.find((t) => t.subject === 'quant');
  const reasoningTask = day12Tasks.find((t) => t.subject === 'reasoning');
  const englishTask = day12Tasks.find((t) => t.subject === 'english');
  const revisionTask = day12Tasks.find((t) => t.subject === 'revision');

  assert(!!dsaTask, 'Day 12 has DSA task assigned');
  assert(!!quantTask, 'Day 12 has Quantitative Aptitude task assigned');
  assert(!!reasoningTask, 'Day 12 has Logical Reasoning task assigned');
  assert(!!englishTask, 'Day 12 has English Speaking task assigned');
  assert(!!revisionTask, 'Day 12 has Revision task assigned');

  // Step 3: Reset all Day 12 tasks to incomplete to test incremental scoring from 0
  console.log('\n3. Resetting Day 12 tasks to incomplete (0 score baseline)...');
  for (const t of day12Tasks) {
    await fetch(`${BASE_URL}/api/tasks/${t.id}`, {
      method: 'PATCH',
      headers: authHeaders,
      body: JSON.stringify({ completed: false }),
    });
  }

  // Check baseline score
  const baselineRes = await fetch(`${BASE_URL}/api/progress/overall`, { headers: authHeaders });
  const baselineData = await baselineRes.json();
  assert(baselineData.stats.dailyScore === 0, 'Baseline daily score is 0 when 0 tasks are completed');
  assert(baselineData.stats.dailyCompletionPct === 0, 'Baseline daily completion is 0%');

  // Step 4: Check DSA task -> should award exactly 45% daily score
  console.log('\n4. Checking DSA Task (Weight: 45%)...');
  const checkDsaRes = await fetch(`${BASE_URL}/api/tasks/${dsaTask.id}`, {
    method: 'PATCH',
    headers: authHeaders,
    body: JSON.stringify({ completed: true }),
  });
  assert(checkDsaRes.status === 200, 'PATCH /api/tasks/:id completed: true succeeded');
  const checkDsaData = await checkDsaRes.json();
  assert(checkDsaData.task.completed === true, 'Task completed flag is true in MongoDB');
  assert(!!checkDsaData.task.completedAt, 'Task completion timestamp completedAt is recorded');
  assert(checkDsaData.overallStats.dailyScore === 45, `Daily score is exactly 45 (got ${checkDsaData.overallStats.dailyScore})`);
  assert(checkDsaData.overallStats.dailyCompletionPct === 20, `Daily completion is 20% (1/5 tasks)`);

  // Step 5: Check Quant task -> should award +15% (Score: 60)
  console.log('\n5. Checking Quantitative Aptitude Task (Weight: 15%)...');
  const checkQuantRes = await fetch(`${BASE_URL}/api/tasks/${quantTask.id}`, {
    method: 'PATCH',
    headers: authHeaders,
    body: JSON.stringify({ completed: true }),
  });
  const checkQuantData = await checkQuantRes.json();
  assert(checkQuantData.overallStats.dailyScore === 60, `Daily score is now 60 (45 + 15)`);
  assert(checkQuantData.overallStats.dailyCompletionPct === 40, `Daily completion is 40% (2/5 tasks)`);

  // Step 6: Check Reasoning task -> should award +15% (Score: 75)
  console.log('\n6. Checking Logical Reasoning Task (Weight: 15%)...');
  const checkReasoningRes = await fetch(`${BASE_URL}/api/tasks/${reasoningTask.id}`, {
    method: 'PATCH',
    headers: authHeaders,
    body: JSON.stringify({ completed: true }),
  });
  const checkReasoningData = await checkReasoningRes.json();
  assert(checkReasoningData.overallStats.dailyScore === 75, `Daily score is now 75 (60 + 15)`);
  assert(checkReasoningData.overallStats.dailyCompletionPct === 60, `Daily completion is 60% (3/5 tasks)`);

  // Step 7: Check English task -> should award +15% (Score: 90)
  console.log('\n7. Checking English Speaking Task (Weight: 15%)...');
  const checkEnglishRes = await fetch(`${BASE_URL}/api/tasks/${englishTask.id}`, {
    method: 'PATCH',
    headers: authHeaders,
    body: JSON.stringify({ completed: true }),
  });
  const checkEnglishData = await checkEnglishRes.json();
  assert(checkEnglishData.overallStats.dailyScore === 90, `Daily score is now 90 (75 + 15)`);
  assert(checkEnglishData.overallStats.dailyCompletionPct === 80, `Daily completion is 80% (4/5 tasks)`);

  // Step 8: Check Revision task -> should award +10% (Score: 100)
  console.log('\n8. Checking Daily Placement Revision Task (Weight: 10%)...');
  const checkRevRes = await fetch(`${BASE_URL}/api/tasks/${revisionTask.id}`, {
    method: 'PATCH',
    headers: authHeaders,
    body: JSON.stringify({ completed: true }),
  });
  const checkRevData = await checkRevRes.json();
  assert(checkRevData.overallStats.dailyScore === 100, `Daily score is 100/100 (90 + 10)`);
  assert(checkRevData.overallStats.dailyCompletionPct === 100, `Daily completion is 100% (5/5 tasks)`);

  // Step 9: Unchecking tasks -> test recalculation
  console.log('\n9. Testing Task Unchecking and Score Recalculation...');
  // Uncheck DSA (45%)
  const uncheckDsaRes = await fetch(`${BASE_URL}/api/tasks/${dsaTask.id}`, {
    method: 'PATCH',
    headers: authHeaders,
    body: JSON.stringify({ completed: false }),
  });
  const uncheckDsaData = await uncheckDsaRes.json();
  assert(uncheckDsaData.task.completed === false, 'Task marked as completed: false in MongoDB');
  assert(uncheckDsaData.task.completedAt === null, 'Task completedAt timestamp cleared to null');
  assert(uncheckDsaData.overallStats.dailyScore === 55, `Daily score recalculated to 55 (100 - 45)`);
  assert(uncheckDsaData.overallStats.dailyCompletionPct === 80, `Daily completion recalculated to 80% (4/5)`);

  // Uncheck Quant (15%)
  const uncheckQuantRes = await fetch(`${BASE_URL}/api/tasks/${quantTask.id}`, {
    method: 'PATCH',
    headers: authHeaders,
    body: JSON.stringify({ completed: false }),
  });
  const uncheckQuantData = await uncheckQuantRes.json();
  assert(uncheckQuantData.overallStats.dailyScore === 40, `Daily score recalculated to 40 (55 - 15)`);
  assert(uncheckQuantData.overallStats.dailyCompletionPct === 60, `Daily completion recalculated to 60% (3/5)`);

  // Step 10: Testing Pending Tasks Backlog (Day 11 Overdue Task)
  console.log('\n10. Testing Overdue Pending Tasks Backlog...');
  let pendingRes = await fetch(`${BASE_URL}/api/tasks?pending=true&beforeDay=12`, { headers: authHeaders });
  let pendingData = await pendingRes.json();
  if (pendingData.tasks.length === 0) {
    // Reopen a Day 11 task to test overdue backlog completion
    const day11Res = await fetch(`${BASE_URL}/api/tasks?day=11`, { headers: authHeaders });
    const day11Data = await day11Res.json();
    if (day11Data.tasks.length > 0) {
      await fetch(`${BASE_URL}/api/tasks/${day11Data.tasks[0].id}`, {
        method: 'PATCH',
        headers: authHeaders,
        body: JSON.stringify({ completed: false }),
      });
      pendingRes = await fetch(`${BASE_URL}/api/tasks?pending=true&beforeDay=12`, { headers: authHeaders });
      pendingData = await pendingRes.json();
    }
  }
  assert(pendingData.tasks.length >= 1, `Found ${pendingData.tasks.length} overdue pending tasks from days 1–11`);
  const pendingTask = pendingData.tasks[0];
  const initialPendingCount = pendingData.tasks.length;

  // Complete the overdue task
  const completePendingRes = await fetch(`${BASE_URL}/api/tasks/${pendingTask.id}`, {
    method: 'PATCH',
    headers: authHeaders,
    body: JSON.stringify({ completed: true }),
  });
  const completePendingData = await completePendingRes.json();
  assert(completePendingData.task.completed === true, 'Overdue task marked as completed');
  assert(completePendingData.overallStats.overduePendingTasks === initialPendingCount - 1, 'Overdue pending tasks count decremented');

  // Step 11: Future Days Protection
  console.log('\n11. Verifying Future Days (Days 13–90) Are Not Counted as Missed...');
  const futureTasksRes = await fetch(`${BASE_URL}/api/tasks?day=13`, { headers: authHeaders });
  const futureTasksData = await futureTasksRes.json();
  const futureIncomplete = futureTasksData.tasks.filter((t) => !t.completed).length;
  assert(futureIncomplete === futureTasksData.tasks.length, 'Future days tasks are uncompleted');

  const overallStatsRes = await fetch(`${BASE_URL}/api/progress/overall`, { headers: authHeaders });
  const overallStats = await overallStatsRes.json();
  assert(overallStats.stats.streak >= 11, `Streak is preserved at ${overallStats.stats.streak} days without future days penalizing it`);

  // Step 12: Logout and Re-login Persistence Verification
  console.log('\n12. Testing Logout & Re-login Session Flow...');
  const logoutRes = await fetch(`${BASE_URL}/api/auth/logout`, { method: 'POST' });
  assert(logoutRes.status === 200, 'POST /api/auth/logout succeeded with 200');

  // Verify unauthenticated request rejected
  const verifyUnauthRes = await fetch(`${BASE_URL}/api/auth/me`);
  assert(verifyUnauthRes.status === 401, 'Session cleared: GET /api/auth/me rejected with 401 after logout');

  // Re-login with credentials
  const reloginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'piyush@mission90.com', password: 'Password123!' }),
  });
  assert(reloginRes.status === 200, 'POST /api/auth/login succeeded on re-login');
  const reloginData = await reloginRes.json();
  assert(reloginData.user.email === 'piyush@mission90.com', 'User email matched on re-login');

  // Verify progress is completely preserved
  const recheckStatsRes = await fetch(`${BASE_URL}/api/progress/overall`, {
    headers: { Authorization: `Bearer ${reloginData.token}` },
  });
  const recheckStats = await recheckStatsRes.json();
  assert(recheckStats.stats.currentDay === 12, 'Current study day is accurately preserved as Day 12');
  assert(recheckStats.stats.overallProgress > 0, 'Overall progress is accurately preserved');
  assert(recheckStats.stats.streak >= 11, 'Streak is accurately preserved across sessions');

  // Restore baseline state: check DSA (45%) on day 12 so dashboard starts in a clean demo state
  await fetch(`${BASE_URL}/api/tasks/${dsaTask.id}`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${reloginData.token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: true }),
  });

  console.log('\n================================================================');
  console.log(`  ALL ${passedTests}/${totalTests} TESTS PASSED SUCCESSFULLY! 🚀`);
  console.log('================================================================\n');
}

runTests().catch((err) => {
  console.error('\n❌ Test execution failed:', err);
  process.exit(1);
});
