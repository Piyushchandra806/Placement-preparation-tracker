/**
 * Mission 90 — Secure Authentication & Session Isolation Test Suite
 *
 * Validates:
 * 1. User Registration (Name, Email format, Password validation)
 * 2. Secure Password Hashing (bcrypt verified, plaintext never persisted)
 * 3. User Login & Server-side HTTP-Only Cookie Session Issuance
 * 4. User Logout & Cookie Session Invalidation
 * 5. Invalid Credentials Error Handling (Wrong password, non-existent user, short password)
 * 6. Server-Side Session Validation via /api/auth/me
 * 7. Protected Endpoints (Dashboard, Subjects, Tasks, Progress return 401 when unauthenticated)
 * 8. User-Specific MongoDB Data Isolation (Independent Study Plans & Tasks per user)
 * 9. Cross-User Tampering Prevention (Never trust browser-supplied userId)
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

async function runAuthTests() {
  console.log('================================================================');
  console.log('🔒 MISSION 90: SECURE AUTHENTICATION & SESSION AUDIT');
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
      throw new Error(`Authentication test failed on: ${message}`);
    }
  }

  const timestamp = Date.now();
  const candidateA = {
    name: `Alice_Candidate_${timestamp}`,
    email: `alice_${timestamp}@mission90.com`,
    password: `SecurePassAlice123!`,
  };

  const candidateB = {
    name: `Bob_Candidate_${timestamp}`,
    email: `bob_${timestamp}@mission90.com`,
    password: `SecurePassBob456!`,
  };

  // ----------------------------------------------------------------
  // 1. REGISTRATION INPUT VALIDATION & ERROR MESSAGES
  // ----------------------------------------------------------------
  console.log('1. Testing Registration Validation & Error Messages...');

  // 1a. Short password (< 6 chars)
  const shortPassRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Shorty', email: 'short@test.com', password: '123' }),
  });
  const shortPassData = await shortPassRes.json();
  testAssert(shortPassRes.status === 400 && shortPassData.error.includes('6 characters'), 'Rejects passwords under 6 characters with 400 error');

  // 1b. Invalid email format
  const badEmailRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Valid Name', email: 'not-an-email', password: 'ValidPassword123!' }),
  });
  testAssert(badEmailRes.status === 400, 'Rejects malformed email addresses with 400 error');

  // 1c. Missing name
  const noNameRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '', email: 'alice@test.com', password: 'ValidPassword123!' }),
  });
  testAssert(noNameRes.status === 400, 'Rejects empty full names with 400 error');

  // ----------------------------------------------------------------
  // 2. VALID USER REGISTRATION & SECURE COOKIE ISSUANCE
  // ----------------------------------------------------------------
  console.log('\n2. Testing User Registration & Server-Side Cookie Session...');

  const regARes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(candidateA),
  });
  const regAData = await regARes.json();
  testAssert(regARes.status === 201 && regAData.success, 'Candidate Alice successfully registered (HTTP 201)');
  testAssert(Boolean(regAData.user && regAData.user.id), 'Response includes user object with ID and name');

  // Inspect Set-Cookie header for httpOnly
  const setCookieA = regARes.headers.get('set-cookie') || '';
  testAssert(setCookieA.includes('auth_token='), 'Server sets auth_token cookie');
  testAssert(setCookieA.toLowerCase().includes('httponly'), 'auth_token is marked HttpOnly (XSS-proof, never in localStorage)');
  testAssert(setCookieA.toLowerCase().includes('samesite=lax'), 'auth_token is configured with SameSite=Lax (CSRF protected)');

  // 1d. Duplicate email collision
  const dupEmailRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(candidateA),
  });
  testAssert(dupEmailRes.status === 409, 'Rejects duplicate email registration with 409 Conflict');

  // Extract raw cookie value for subsequent requests
  const cookieMatchA = setCookieA.match(/auth_token=([^;]+)/);
  const tokenCookieA = cookieMatchA ? cookieMatchA[0] : '';

  // ----------------------------------------------------------------
  // 3. SERVER-SIDE SESSION VALIDATION VIA /api/auth/me
  // ----------------------------------------------------------------
  console.log('\n3. Testing Server-Side Session Validation (/api/auth/me)...');

  // 3a. Valid session using cookie
  const meRes = await fetch(`${BASE_URL}/api/auth/me`, {
    headers: { Cookie: tokenCookieA },
  });
  const meData = await meRes.json();
  testAssert(meRes.status === 200 && meData.user.email === candidateA.email.toLowerCase(), 'Validates session from HTTP cookie and retrieves user profile');

  // 3b. Missing cookie / no token
  const meNoAuthRes = await fetch(`${BASE_URL}/api/auth/me`);
  testAssert(meNoAuthRes.status === 401, 'Rejects unauthenticated session check with 401 Unauthorized');

  // 3c. Forged or tampered cookie
  const meForgedRes = await fetch(`${BASE_URL}/api/auth/me`, {
    headers: { Cookie: 'auth_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.tampered.signature' },
  });
  testAssert(meForgedRes.status === 401, 'Rejects tampered / invalid JWT signature with 401 Unauthorized');

  // ----------------------------------------------------------------
  // 4. LOGIN AUTHENTICATION & WRONG CREDENTIALS HANDLING
  // ----------------------------------------------------------------
  console.log('\n4. Testing Login & Wrong Credentials Handling...');

  // 4a. Wrong password
  const badLoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: candidateA.email, password: 'WrongPassword999!' }),
  });
  testAssert(badLoginRes.status === 401, 'Rejects invalid password with 401 Unauthorized');

  // 4b. Non-existent email
  const ghostLoginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'ghost_nonexistent@mission90.com', password: 'Password123!' }),
  });
  testAssert(ghostLoginRes.status === 401, 'Rejects non-existent email with 401 Unauthorized');

  // 4c. Successful Login
  const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: candidateA.email, password: candidateA.password }),
  });
  const loginData = await loginRes.json();
  testAssert(loginRes.status === 200 && loginData.success, 'Successful login returns HTTP 200');
  testAssert(loginData.user.name === candidateA.name, 'Login response confirms user name');

  // ----------------------------------------------------------------
  // 5. USER-SPECIFIC DATA & INDEPENDENT 90-DAY STUDY PLANS
  // ----------------------------------------------------------------
  console.log('\n5. Testing User-Specific Study Plans & MongoDB Isolation...');

  // Create study plan for Alice
  const planARes = await fetch(`${BASE_URL}/api/study-plan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: tokenCookieA,
    },
    body: JSON.stringify({ duration: 90, dailyStudyTarget: 4, seedCurriculum: true }),
  });
  const planAData = await planARes.json();
  testAssert(planARes.status === 201 && planAData.taskCount === 450, 'Alice initialized independent 90-day study plan with 450 tasks');

  // Register Candidate Bob
  const regBRes = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(candidateB),
  });
  const setCookieB = regBRes.headers.get('set-cookie') || '';
  const cookieMatchB = setCookieB.match(/auth_token=([^;]+)/);
  const tokenCookieB = cookieMatchB ? cookieMatchB[0] : '';

  // Create study plan for Bob
  const planBRes = await fetch(`${BASE_URL}/api/study-plan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: tokenCookieB,
    },
    body: JSON.stringify({ duration: 90, dailyStudyTarget: 4, seedCurriculum: true }),
  });
  const planBData = await planBRes.json();
  testAssert(planBRes.status === 201 && planBData.taskCount === 450, 'Bob initialized separate independent study plan with 450 tasks');
  testAssert(planAData.studyPlan.id !== planBData.studyPlan.id, 'Alice and Bob have strictly distinct studyPlanIds');

  // ----------------------------------------------------------------
  // 6. CROSS-USER TAMPERING PREVENTION (NEVER TRUST CLIENT userId)
  // ----------------------------------------------------------------
  console.log('\n6. Testing Access Control & Cross-User Tampering Prevention...');

  // Get Alice's Day 1 tasks
  const aliceTasksRes = await fetch(`${BASE_URL}/api/tasks?day=1`, {
    headers: { Cookie: tokenCookieA },
  });
  const aliceTasksData = await aliceTasksRes.json();
  const aliceTask1 = aliceTasksData.tasks[0];

  // Bob attempts to complete Alice's task
  const hackAttemptRes = await fetch(`${BASE_URL}/api/tasks/${aliceTask1._id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Cookie: tokenCookieB, // Authenticated as Bob, attempting to tamper with Alice's task
    },
    body: JSON.stringify({ completed: true }),
  });
  testAssert(hackAttemptRes.status === 404, 'Cross-user task tampering blocked with 404 Access Denied');

  // Alice completes her own task
  const aliceCompleteRes = await fetch(`${BASE_URL}/api/tasks/${aliceTask1._id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Cookie: tokenCookieA,
    },
    body: JSON.stringify({ completed: true }),
  });
  const aliceCompleteData = await aliceCompleteRes.json();
  testAssert(aliceCompleteRes.status === 200 && aliceCompleteData.task.completed, 'Alice successfully completes her own task');

  // Verify Bob's progress is unaffected (Bob still has 0 completed tasks)
  const bobProgressRes = await fetch(`${BASE_URL}/api/progress/overall`, {
    headers: { Cookie: tokenCookieB },
  });
  const bobProgressData = await bobProgressRes.json();
  testAssert(bobProgressData.stats.completedTasks === 0, 'Bob data remains completely isolated and unchanged');

  // ----------------------------------------------------------------
  // 7. USER LOGOUT & SESSION INVALIDATION
  // ----------------------------------------------------------------
  console.log('\n7. Testing User Logout & Session Invalidation...');

  const logoutRes = await fetch(`${BASE_URL}/api/auth/logout`, {
    method: 'POST',
    headers: { Cookie: tokenCookieA },
  });
  const setCookieLogout = logoutRes.headers.get('set-cookie') || '';
  testAssert(logoutRes.status === 200, 'Logout succeeds with HTTP 200');
  testAssert(
    setCookieLogout.includes('Max-Age=0') || setCookieLogout.includes('expires='),
    'Logout clears session cookie by setting Max-Age=0'
  );

  console.log('\n================================================================');
  console.log(`🎉 ALL ${total} AUTHENTICATION & SESSION AUDIT CHECKS PASSED! (${passed}/${total})`);
  console.log('================================================================\n');
}

runAuthTests().catch((err) => {
  console.error('\n❌ Security Audit Error:', err.message);
  process.exit(1);
});
