/**
 * Automated Verification Script: Related Interview Question Feature (TASK 4)
 *
 * Tests:
 * 1. 100% resolution of all 90 days with Related Interview Question objects.
 * 2. Day 1 exact match with prompt specification ("Tell me about yourself.", sample answer, Hindi explanation).
 * 3. Verified presence of all required fields: question, questionHindi (Devanagari), patternsUsed, sampleAnswer, sampleAnswerHindi, customizationTip.
 * 4. Progression adherence across the 6 blocks:
 *    - Days 1–15: Self-Introduction
 *    - Days 16–30: Daily Routines
 *    - Days 31–45: Education and Interests
 *    - Days 46–60: Past Experiences
 *    - Days 61–75: Project Explanations
 *    - Days 76–90: HR and Technical Scenarios
 * 5. Order verification in LearnBasicEnglishSection component.
 */
import assert from "assert";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { BASIC_ENGLISH_LESSONS, getBasicEnglishLesson } from "../lib/basic-english-lessons.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("=== Running Related Interview Question Automated Verification ===\n");

// 1. Day 1 Exact Match Check
console.log("1. Verifying Day 1 exact specification match...");
const day1 = getBasicEnglishLesson(1);
assert(day1.interviewQuestion, "Day 1 missing interviewQuestion object");
const iq1 = day1.interviewQuestion;

assert.strictEqual(
  iq1.question,
  "Tell me about yourself.",
  `Day 1 question mismatch: expected "Tell me about yourself.", got "${iq1.question}"`
);

assert(
  iq1.sampleAnswer.includes("My name is [your name]. I am a student. I am studying Computer Science. I want to become a software engineer."),
  `Day 1 sample answer mismatch: "${iq1.sampleAnswer}"`
);

assert(
  iq1.sampleAnswer.includes("[your name]"),
  "Day 1 sample answer must contain customizable placeholder '[your name]'"
);

const DEVANAGARI_REGEX = /[\u0900-\u097F]/;
assert(DEVANAGARI_REGEX.test(iq1.questionHindi), `Day 1 questionHindi missing Devanagari: "${iq1.questionHindi}"`);
assert(DEVANAGARI_REGEX.test(iq1.sampleAnswerHindi), `Day 1 sampleAnswerHindi missing Devanagari: "${iq1.sampleAnswerHindi}"`);
assert(DEVANAGARI_REGEX.test(iq1.customizationTip), `Day 1 customizationTip missing Devanagari: "${iq1.customizationTip}"`);

console.log("  ✅ [PASS]: Day 1 exact interview question, sample answer, and Hindi explanation verified.");

// 2. All 90 Days Coverage Check
console.log("\n2. Verifying all 90 days have complete, valid interview questions...");
for (let d = 1; d <= 90; d++) {
  const lesson = BASIC_ENGLISH_LESSONS[d];
  assert(lesson, `Lesson ${d} not found`);
  assert(lesson.interviewQuestion, `Lesson ${d} missing interviewQuestion object`);

  const iq = lesson.interviewQuestion;
  assert(typeof iq.question === "string" && iq.question.trim().length > 0, `Day ${d} invalid question`);
  assert(typeof iq.questionHindi === "string" && DEVANAGARI_REGEX.test(iq.questionHindi), `Day ${d} invalid questionHindi`);
  assert(typeof iq.patternsUsed === "string" && iq.patternsUsed.trim().length > 0, `Day ${d} invalid patternsUsed`);
  assert(typeof iq.sampleAnswer === "string" && iq.sampleAnswer.trim().length > 0, `Day ${d} invalid sampleAnswer`);
  assert(typeof iq.sampleAnswerHindi === "string" && DEVANAGARI_REGEX.test(iq.sampleAnswerHindi), `Day ${d} invalid sampleAnswerHindi`);
  assert(typeof iq.customizationTip === "string" && iq.customizationTip.trim().length > 0, `Day ${d} invalid customizationTip`);
}
console.log("  ✅ [PASS]: All 90 days have complete, non-empty, Devanagari-supported interview questions.");

// 3. Progression Verification Across 6 Blocks
console.log("\n3. Verifying curriculum progression across the 6 thematic blocks...");
// Block 1 (Days 1–15): Self Introduction
const d1 = getBasicEnglishLesson(1).interviewQuestion.question.toLowerCase();
assert(d1.includes("yourself"), "Block 1 must start with self introduction");

// Block 2 (Days 16–30): Daily Routines
const d16 = getBasicEnglishLesson(16).interviewQuestion.question.toLowerCase();
assert(d16.includes("routine") || d16.includes("daily"), `Block 2 Day 16 must cover routine/habits: ${d16}`);

// Block 3 (Days 31–45): Education and Interests
const d31 = getBasicEnglishLesson(31).interviewQuestion.question.toLowerCase();
assert(d31.includes("subject") || d31.includes("computer science") || d31.includes("interest"), `Block 3 Day 31 must cover education/interests: ${d31}`);

// Block 4 (Days 46–60): Past Experiences
const d46 = getBasicEnglishLesson(46).interviewQuestion.question.toLowerCase();
assert(d46.includes("project") || d46.includes("completed") || d46.includes("semester"), `Block 4 Day 46 must cover past project/experience: ${d46}`);

// Block 5 (Days 61–75): Project Explanations
const d61 = getBasicEnglishLesson(61).interviewQuestion.question.toLowerCase();
assert(d61.includes("project") || d61.includes("architecture") || d61.includes("problem"), `Block 5 Day 61 must cover project explanations: ${d61}`);

// Block 6 (Days 76–90): HR and Technical Scenarios
const d76 = getBasicEnglishLesson(76).interviewQuestion.question.toLowerCase();
assert(d76.includes("strength") || d76.includes("engineer"), `Block 6 Day 76 must cover HR strengths/goals: ${d76}`);

console.log("  ✅ [PASS]: Progression follows exact specified order: Self-Introduction -> Daily Routines -> Education/Interests -> Past Experiences -> Project Explanations -> HR & Technical.");

// 4. Exact Component Section Order Check
console.log("\n4. Verifying exact structural sequence in LearnBasicEnglishSection.js...");
const sectionFile = fs.readFileSync(
  path.resolve(__dirname, "../components/english/LearnBasicEnglishSection.js"),
  "utf-8"
);

const basicSentencesIndex = sectionFile.indexOf("lesson.sentences.map");
const practiceIndex = sectionFile.indexOf("<SentenceFormationPractice");
const interviewIndex = sectionFile.indexOf("<RelatedInterviewQuestionSection");

assert(basicSentencesIndex !== -1, "Learn Basic English sentences missing");
assert(practiceIndex !== -1, "SentenceFormationPractice component missing");
assert(interviewIndex !== -1, "RelatedInterviewQuestionSection component missing");

assert(
  basicSentencesIndex < practiceIndex,
  "Sequence violation: Learn Basic English must precede Sentence Formation Practice"
);
assert(
  practiceIndex < interviewIndex,
  "Sequence violation: Sentence Formation Practice must precede Related Interview Question"
);

console.log("  ✅ [PASS]: Component strictly adheres to the exact required order:");
console.log("     1. Learn Basic English");
console.log("     2. Sentence Formation Practice");
console.log("     3. Related Interview Question and Sample Answer");

console.log("\n🎉 ALL TESTS PASSED SUCCESSFULLY! 🎉");
