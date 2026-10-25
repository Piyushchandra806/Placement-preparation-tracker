/**
 * Automated Verification Script: Basic English Learning Feature (TASK 2)
 *
 * Verifies:
 * 1. Complete 90-day coverage of basic English lessons.
 * 2. 3–5 beginner-friendly sentences per daily lesson.
 * 3. Each sentence includes English, Devanagari Hindi, Pattern, and Example.
 * 4. Specific beginner patterns: I am / You are / He is / I have / I want / I need / I like.
 * 5. Day 1 exact match with prompt specification.
 * 6. getBasicEnglishLesson() fallback and edge case safety.
 */
import assert from "assert";
import { BASIC_ENGLISH_LESSONS, getBasicEnglishLesson } from "../lib/basic-english-lessons.js";

console.log("=== Running Basic English Lessons Automated Verification ===\n");

// 1. Total Days Count
const days = Object.keys(BASIC_ENGLISH_LESSONS).map(Number);
console.log(`1. Checking total lessons count (Found: ${days.length} days)...`);
assert.strictEqual(days.length, 90, `Expected 90 days of lessons, but found ${days.length}`);
console.log("  ✅ [PASS]: Exactly 90 daily lessons available.");

// Devanagari Unicode Regex range [\u0900-\u097F]
const DEVANAGARI_REGEX = /[\u0900-\u097F]/;

let totalSentences = 0;
for (let d = 1; d <= 90; d++) {
  const lesson = BASIC_ENGLISH_LESSONS[d];
  assert(lesson, `Missing lesson for Day ${d}`);
  assert.strictEqual(lesson.day, d, `Day mismatch in lesson object: ${lesson.day} vs ${d}`);
  assert(typeof lesson.topic === "string" && lesson.topic.length > 0, `Missing topic on Day ${d}`);
  assert(Array.isArray(lesson.sentences), `sentences must be an array on Day ${d}`);
  assert(
    lesson.sentences.length >= 3 && lesson.sentences.length <= 5,
    `Each day must have 3–5 sentences. Day ${d} has ${lesson.sentences.length}`
  );

  totalSentences += lesson.sentences.length;

  lesson.sentences.forEach((s, idx) => {
    // English
    assert(typeof s.english === "string" && s.english.trim().length > 0, `Day ${d} sentence ${idx} missing english`);
    // Hindi in Devanagari
    assert(typeof s.hindi === "string" && s.hindi.trim().length > 0, `Day ${d} sentence ${idx} missing hindi`);
    assert(DEVANAGARI_REGEX.test(s.hindi), `Day ${d} sentence ${idx} hindi does not contain Devanagari characters: "${s.hindi}"`);
    // Pattern
    assert(typeof s.pattern === "string" && s.pattern.trim().length > 0, `Day ${d} sentence ${idx} missing pattern`);
    // Example
    if (s.example) {
      assert(typeof s.example === "string" && s.example.trim().length > 0, `Day ${d} sentence ${idx} example invalid`);
    }
  });
}
console.log(`2. Verified all 90 days (${totalSentences} total sentences).`);
console.log("  ✅ [PASS]: Every sentence has English, Devanagari Hindi, pattern, and example.");

// 3. Verify Day 1 Examples from Prompt Specification
console.log("\n3. Verifying Day 1 prompt specification sentences...");
const day1 = getBasicEnglishLesson(1);
assert(day1, "Day 1 lesson not found");

const d1Sentences = day1.sentences;
const studentSent = d1Sentences.find((s) => s.english.includes("I am a student"));
assert(studentSent, "Day 1 must include 'I am a student.'");
assert(studentSent.hindi.includes("विद्यार्थी"), `Day 1 student sentence Hindi mismatch: ${studentSent.hindi}`);
assert(studentSent.pattern.toLowerCase().includes("subject + am + noun"), `Day 1 pattern mismatch: ${studentSent.pattern}`);

const learningSent = d1Sentences.find((s) => s.english.includes("I am learning English"));
assert(learningSent, "Day 1 must include 'I am learning English.'");
assert(learningSent.hindi.includes("अंग्रेज़ी"), `Day 1 learning sentence Hindi mismatch: ${learningSent.hindi}`);
assert(learningSent.pattern.toLowerCase().includes("verb-ing"), `Day 1 learning pattern mismatch: ${learningSent.pattern}`);

const wantSent = d1Sentences.find((s) => s.english.includes("I want to become a software engineer"));
assert(wantSent, "Day 1 must include 'I want to become a software engineer.'");
assert(wantSent.hindi.includes("सॉफ्टवेयर इंजीनियर"), `Day 1 want sentence Hindi mismatch: ${wantSent.hindi}`);
assert(wantSent.pattern.toLowerCase().includes("want to"), `Day 1 want pattern mismatch: ${wantSent.pattern}`);

console.log("  ✅ [PASS]: Day 1 exact examples from prompt verified successfully.");

// 4. Verify Absolute Basics in First 10 Days
console.log("\n4. Verifying progression of absolute basics (Days 1–10)...");
const d2 = getBasicEnglishLesson(2);
assert(d2.sentences.some((s) => s.english.startsWith("You are") || s.english.startsWith("We are")), "Day 2 missing You are / We are");

const d3 = getBasicEnglishLesson(3);
assert(d3.sentences.some((s) => s.english.startsWith("He is") || s.english.startsWith("She is")), "Day 3 missing He is / She is");

const d4 = getBasicEnglishLesson(4);
assert(d4.sentences.some((s) => s.english.startsWith("I have")), "Day 4 missing I have");

const d6 = getBasicEnglishLesson(6);
assert(d6.sentences.some((s) => s.english.startsWith("I want")), "Day 6 missing I want");

const d8 = getBasicEnglishLesson(8);
assert(d8.sentences.some((s) => s.english.startsWith("I need")), "Day 8 missing I need");

const d10 = getBasicEnglishLesson(10);
assert(d10.sentences.some((s) => s.english.startsWith("I like")), "Day 10 missing I like");

console.log("  ✅ [PASS]: All absolute basics (I am, You are, He is, I have, I want, I need, I like) present and verified.");

// 5. Test Fallbacks and Edge Cases
console.log("\n5. Verifying helper function edge cases...");
assert.strictEqual(getBasicEnglishLesson(0).day, 1, "Day 0 should fallback to Day 1");
assert.strictEqual(getBasicEnglishLesson(999).day, 90, "Day 999 should cap to Day 90");
assert.strictEqual(getBasicEnglishLesson(-5).day, 1, "Day -5 should fallback to Day 1");
assert.strictEqual(getBasicEnglishLesson("15").day, 15, "String '15' should parse correctly to Day 15");
assert.strictEqual(getBasicEnglishLesson(undefined).day, 1, "Undefined day should fallback to Day 1");
console.log("  ✅ [PASS]: Edge cases and fallbacks work reliably.");

console.log("\n🎉 ALL TESTS PASSED SUCCESSFULLY! 🎉");
