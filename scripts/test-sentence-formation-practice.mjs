/**
 * Automated Verification Script: Sentence Formation Practice (TASK 3)
 *
 * Tests:
 * 1. checkSentenceAnswer validation logic (exact match, case sensitivity, trailing punctuation, contractions).
 * 2. Coverage of all 90 days with 2–3 practice questions per lesson.
 * 3. Verified presence of id, difficulty, hindi, expected, pattern, explanation, and acceptedAnswers.
 * 4. Verified progressive difficulty: Easy -> Medium -> Challenging.
 * 5. Day 1 exact match with prompt specification (Student, English learning, Software engineer).
 * 6. Explanation quality (verified presence of Devanagari Hindi explanation).
 */
import assert from "assert";
import {
  BASIC_ENGLISH_LESSONS,
  getBasicEnglishLesson,
  checkSentenceAnswer,
} from "../lib/basic-english-lessons.js";

console.log("=== Running Sentence Formation Practice Automated Verification ===\n");

// 1. Test checkSentenceAnswer validation logic
console.log("1. Testing answer checking engine (normalization, punctuation, contractions)...");

// Exact match
assert.strictEqual(
  checkSentenceAnswer("I am a student.", "I am a student."),
  true,
  "Exact match should return true"
);

// Without period
assert.strictEqual(
  checkSentenceAnswer("I am a student", "I am a student."),
  true,
  "Missing trailing period should be accepted"
);

// Case insensitive
assert.strictEqual(
  checkSentenceAnswer("i am a student", "I am a student."),
  true,
  "Lowercase input should match"
);

// Extra spaces & trimmed
assert.strictEqual(
  checkSentenceAnswer("   I   am   a   student.  ", "I am a student."),
  true,
  "Extra whitespace should be normalized"
);

// Contractions (I'm vs I am)
assert.strictEqual(
  checkSentenceAnswer("I'm a student.", "I am a student."),
  true,
  "Contraction I'm should match I am"
);

assert.strictEqual(
  checkSentenceAnswer("I’m a student", "I am a student."),
  true,
  "Curly apostrophe should match"
);

// Negative contractions (don't vs do not, cannot vs can't)
assert.strictEqual(
  checkSentenceAnswer("I don't have time", "I do not have time."),
  true,
  "don't should match do not"
);

assert.strictEqual(
  checkSentenceAnswer("I cannot hear you clearly", "I can't hear you clearly.", ["I cannot hear you clearly."]),
  true,
  "acceptedAnswers alternative should match"
);

// Incorrect answers
assert.strictEqual(
  checkSentenceAnswer("He is a student.", "I am a student."),
  false,
  "Wrong subject should return false"
);

assert.strictEqual(
  checkSentenceAnswer("I am teacher.", "I am a student."),
  false,
  "Wrong noun should return false"
);

assert.strictEqual(
  checkSentenceAnswer("", "I am a student."),
  false,
  "Empty input should return false"
);

console.log("  ✅ [PASS]: Answer checking logic handles capitalization, punctuation, and contractions accurately.");

// 2. Test 90-Day Practice Coverage
console.log("\n2. Checking 90-day Sentence Formation Practice coverage...");
const DEVANAGARI_REGEX = /[\u0900-\u097F]/;
let totalPracticeCount = 0;

for (let d = 1; d <= 90; d++) {
  const lesson = BASIC_ENGLISH_LESSONS[d];
  assert(lesson, `Lesson for Day ${d} missing`);
  assert(Array.isArray(lesson.practice), `practice must be an array on Day ${d}`);
  assert(
    lesson.practice.length >= 2 && lesson.practice.length <= 3,
    `Day ${d} must have 2–3 practice items, found ${lesson.practice.length}`
  );

  totalPracticeCount += lesson.practice.length;

  // Verify difficulty progression
  assert.strictEqual(lesson.practice[0].difficulty, "Easy", `Day ${d} item 0 must be Easy`);
  assert.strictEqual(lesson.practice[1].difficulty, "Medium", `Day ${d} item 1 must be Medium`);
  if (lesson.practice[2]) {
    assert.strictEqual(lesson.practice[2].difficulty, "Challenging", `Day ${d} item 2 must be Challenging`);
  }

  lesson.practice.forEach((item, idx) => {
    assert(item.id, `Day ${d} item ${idx} missing id`);
    assert(item.hindi && item.hindi.trim().length > 0, `Day ${d} item ${idx} missing hindi`);
    assert(DEVANAGARI_REGEX.test(item.hindi), `Day ${d} item ${idx} hindi missing Devanagari script: ${item.hindi}`);
    assert(item.expected && item.expected.trim().length > 0, `Day ${d} item ${idx} missing expected`);
    assert(item.pattern && item.pattern.trim().length > 0, `Day ${d} item ${idx} missing pattern`);
    assert(item.explanation && item.explanation.trim().length > 0, `Day ${d} item ${idx} missing explanation`);
    assert(DEVANAGARI_REGEX.test(item.explanation), `Day ${d} item ${idx} explanation missing Devanagari script: ${item.explanation}`);

    // Self-test: the expected answer must validate against checkSentenceAnswer
    assert(
      checkSentenceAnswer(item.expected, item.expected, item.acceptedAnswers),
      `Day ${d} item ${idx} expected answer failed self-validation: "${item.expected}"`
    );
  });
}
console.log(`  ✅ [PASS]: Verified 90 days (${totalPracticeCount} total practice exercises).`);
console.log("  ✅ [PASS]: Every exercise has Devanagari Hindi prompt, expected English, pattern, and Hindi explanation.");

// 3. Test Day 1 Exact Requirements
console.log("\n3. Testing Day 1 Practice items against prompt specification...");
const day1 = getBasicEnglishLesson(1);
const d1Practice = day1.practice;

// Exercise 1: Student
const p1 = d1Practice[0];
assert.strictEqual(p1.difficulty, "Easy");
assert(p1.hindi.includes("विद्यार्थी"), `Day 1 Ex 1 Hindi mismatch: ${p1.hindi}`);
assert.strictEqual(p1.expected, "I am a student.");
assert(p1.pattern.includes("Subject + am + noun"));
assert(checkSentenceAnswer("I am a student.", p1.expected, p1.acceptedAnswers));
assert(checkSentenceAnswer("i am a student", p1.expected, p1.acceptedAnswers));
assert(checkSentenceAnswer("I'm a student", p1.expected, p1.acceptedAnswers));

// Exercise 2: Learning English
const p2 = d1Practice[1];
assert.strictEqual(p2.difficulty, "Medium");
assert(p2.hindi.includes("अंग्रेज़ी"), `Day 1 Ex 2 Hindi mismatch: ${p2.hindi}`);
assert.strictEqual(p2.expected, "I am learning English.");
assert(p2.pattern.includes("Subject + am + verb-ing"));
assert(checkSentenceAnswer("I am learning English.", p2.expected, p2.acceptedAnswers));
assert(checkSentenceAnswer("i am learning english", p2.expected, p2.acceptedAnswers));

// Exercise 3: Software Engineer
const p3 = d1Practice[2];
assert.strictEqual(p3.difficulty, "Challenging");
assert(p3.hindi.includes("सॉफ्टवेयर इंजीनियर"), `Day 1 Ex 3 Hindi mismatch: ${p3.hindi}`);
assert.strictEqual(p3.expected, "I want to become a software engineer.");
assert(p3.pattern.includes("Subject + want to + base verb"));
assert(checkSentenceAnswer("I want to become a software engineer.", p3.expected, p3.acceptedAnswers));
assert(checkSentenceAnswer("i want to become a software engineer", p3.expected, p3.acceptedAnswers));

console.log("  ✅ [PASS]: Day 1 practice items perfectly mirror the taught patterns and prompt specifications.");
console.log("\n🎉 ALL TESTS PASSED SUCCESSFULLY! 🎉");
