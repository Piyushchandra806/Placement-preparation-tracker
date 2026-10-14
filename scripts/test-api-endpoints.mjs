/**
 * Mission 90 — Comprehensive Next.js API Routes Verification Script
 * Tests all endpoints via HTTP requests against http://localhost:3000
 */

const BASE_URL = 'http://localhost:3000';

let testCount = 0;
let passedCount = 0;

function assert(condition, message) {
  testCount++;
  if (condition) {
    console.log(`  ✅ [PASS]: ${message}`);
    passedCount++;
  } else {
    console.error(`  ❌ [FAIL]: ${message}`);
    throw new Error(`Failed: ${message}`);
  }
}

async function run() {
  console.log('====================================================');
  console.log('  TESTING MISSION 90 HTTP API ROUTES (LIVE SERVER)  ');
  console.log('====================================================\n');

  const ts = Date.now();
  const userAEmail = `api_test_a_${ts}@mission90.internal`;
  const userBEmail = `api_test_b_${ts}@mission90.internal`;
  const password = 'SecurePassword123!';

  // 1. Unauthenticated /api/auth/me should be 401
  console.log('1. Testing Unauthenticated Request Rejection...');
  const unauthRes = await fetch(`${BASE_URL}/api/auth/me`);
  assert(unauthRes.status === 401, 'GET /api/auth/me rejected with 401 without token');

  // 2. Validation error on registration
  console.log('\n2. Testing Registration Validation...');
  const invalidRegRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '', email: 'bad-email', password: '12' }),
  });
  assert(invalidRegRes.status === 400, 'POST /api/auth/register rejected invalid payload with 400');

  // 3. Valid Registration User A
  console.log('\n3. Testing Successful User Registration...');
  const regRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Piyush Candidate',
      email: userAEmail,
      password,
    }),
  });
  assert(regRes.status === 201, 'POST /api/auth/register created user with 201');
  const regData = await regRes.json();
  assert(regData.success && regData.token, 'Registration returned auth token and success flag');
  const tokenA = regData.token;

  // 4. Duplicate Registration
  console.log('\n4. Testing Duplicate Registration Prevention...');
  const dupRegRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Duplicate',
      email: userAEmail,
      password,
    }),
  });
  assert(dupRegRes.status === 409, 'Duplicate email registration rejected with 409 Conflict');

  // 5. Login
  console.log('\n5. Testing User Login...');
  const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: userAEmail,
      password,
    }),
  });
  assert(loginRes.status === 200, 'POST /api/auth/login succeeded with 200');
  const loginData = await loginRes.json();
  assert(loginData.token, 'Login returned valid auth token');

  // 6. Authenticated GET /api/auth/me
  console.log('\n6. Testing Authenticated /api/auth/me...');
  const meRes = await fetch(`${BASE_URL}/api/auth/me`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  assert(meRes.status === 200, 'GET /api/auth/me returned 200 with Bearer token');
  const meData = await meRes.json();
  assert(meData.user.email === userAEmail, 'Session profile matches authenticated user');

  // 7. Initialize Study Plan & Seed Tasks
  console.log('\n7. Testing Study Plan Initialization & Task Seeding...');
  const planInitRes = await fetch(`${BASE_URL}/api/study-plan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenA}`,
    },
    body: JSON.stringify({
      duration: 90,
      dailyStudyTarget: 4,
      seedCurriculum: true,
    }),
  });
  assert(planInitRes.status === 201, 'POST /api/study-plan initialized with 201 Created');
  const planInitData = await planInitRes.json();
  assert(planInitData.taskCount > 0, `Seeded ${planInitData.taskCount} curriculum tasks`);
  const initialTaskCount = planInitData.taskCount;

  // 8. Re-initialize Study Plan (Must prevent duplicate tasks)
  console.log('\n8. Testing Duplicate Study Plan Re-initialization Prevention...');
  const reinitRes = await fetch(`${BASE_URL}/api/study-plan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenA}`,
    },
    body: JSON.stringify({
      duration: 90,
      dailyStudyTarget: 4,
    }),
  });
  assert(reinitRes.status === 200, 'Re-initialization returned 200 OK');
  const reinitData = await reinitRes.json();
  assert(
    reinitData.taskCount === initialTaskCount,
    `Duplicate task creation prevented (task count invariant: ${reinitData.taskCount})`
  );

  // 9. Retrieve Study Plan
  console.log('\n9. Testing GET /api/study-plan...');
  const getPlanRes = await fetch(`${BASE_URL}/api/study-plan`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  assert(getPlanRes.status === 200, 'GET /api/study-plan returned 200');
  const getPlanData = await getPlanRes.json();
  assert(getPlanData.hasPlan && getPlanData.studyPlan, 'Study plan retrieved successfully');

  // 10. Query Tasks by Day and Subject
  console.log('\n10. Testing Task Querying with Day & Subject Filters...');
  const tasksRes = await fetch(`${BASE_URL}/api/tasks?day=1&subject=dsa`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  assert(tasksRes.status === 200, 'GET /api/tasks?day=1&subject=dsa returned 200');
  const tasksData = await tasksRes.json();
  assert(tasksData.tasks.length > 0, 'Found Day 1 DSA tasks');
  const sampleTask = tasksData.tasks[0];
  assert(sampleTask.subject === 'dsa', 'Returned task is DSA subject');

  // 11. Create a Custom Task
  console.log('\n11. Testing Custom Task Creation...');
  const createTaskRes = await fetch(`${BASE_URL}/api/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenA}`,
    },
    body: JSON.stringify({
      title: 'Practice LeetCode #3 Longest Substring',
      topic: 'Sliding Window',
      subject: 'dsa',
      dayNumber: 1,
      estimatedMinutes: 30,
    }),
  });
  assert(createTaskRes.status === 201, 'POST /api/tasks created custom task with 201');
  const customTaskData = await createTaskRes.json();
  const createdTaskId = customTaskData.task.id;

  // 12. Update Task Completion (PATCH)
  console.log('\n12. Testing Task Completion Update (PATCH)...');
  const patchTaskRes = await fetch(`${BASE_URL}/api/tasks/${createdTaskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenA}`,
    },
    body: JSON.stringify({
      completed: true,
      actualMinutes: 35,
    }),
  });
  assert(patchTaskRes.status === 200, 'PATCH /api/tasks/:id updated completion with 200');
  const patchData = await patchTaskRes.json();
  assert(patchData.task.completed === true, 'Task completed marked true');
  assert(patchData.dailyProgress !== undefined, 'Daily progress recalculated automatically');

  // 13. Daily Progress Endpoint
  console.log('\n13. Testing GET & POST /api/progress/daily...');
  const dailyRes = await fetch(`${BASE_URL}/api/progress/daily?history=true`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  assert(dailyRes.status === 200, 'GET /api/progress/daily returned 200');
  const dailyData = await dailyRes.json();
  assert(dailyData.progress !== undefined, 'Daily progress data structure present');

  // 14. Overall Progress Endpoint
  console.log('\n14. Testing GET /api/progress/overall...');
  const overallRes = await fetch(`${BASE_URL}/api/progress/overall`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  assert(overallRes.status === 200, 'GET /api/progress/overall returned 200');
  const overallData = await overallRes.json();
  assert(overallData.stats.totalTasks > 0, `Overall total tasks: ${overallData.stats.totalTasks}`);
  assert(overallData.stats.completedTasks >= 1, `Overall completed tasks: ${overallData.stats.completedTasks}`);
  assert(Array.isArray(overallData.stats.subjects), 'Subject breakdown array included');

  // 15. Cross-User Data Isolation (Requirement 8)
  console.log('\n15. Testing Cross-User Data Isolation...');
  // Register User B
  const regBRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Other Candidate',
      email: userBEmail,
      password,
    }),
  });
  const userBToken = (await regBRes.json()).token;

  // User B tries to read User A's task
  const bReadRes = await fetch(`${BASE_URL}/api/tasks/${createdTaskId}`, {
    headers: { Authorization: `Bearer ${userBToken}` },
  });
  assert(bReadRes.status === 404, 'User B denied reading User A task (404 Access Denied)');

  // User B tries to modify User A's task
  const bModifyRes = await fetch(`${BASE_URL}/api/tasks/${createdTaskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userBToken}`,
    },
    body: JSON.stringify({ completed: false }),
  });
  assert(bModifyRes.status === 404, 'User B denied modifying User A task (404 Access Denied)');

  console.log('\n====================================================');
  console.log(`  ALL ${passedCount}/${testCount} LIVE API TESTS PASSED! 🎉`);
  console.log('====================================================\n');
}

run().catch((err) => {
  console.error('\n❌ Live API test failed:', err);
  process.exit(1);
});
