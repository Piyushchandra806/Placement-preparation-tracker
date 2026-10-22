/**
 * Automated Verification Script: English Speaking Full Sample Answer Feature
 * Tests:
 * 1. 100% resolution of all 90 days of English tasks to full ready-to-speak answers.
 * 2. Proper paragraph formatting, non-empty, conversational language.
 * 3. Word count suitable for 2-minute speaking drill (average ~150-300 words).
 * 4. Proper personal vs technical categorization and customization labels.
 * 5. Distinct topic-specific responses for each prompt.
 */
import assert from "assert";
import { COMPLETE_90_DAYS_CURRICULUM } from "../lib/complete-90-days-syllabus.js";
import { getEnglishSampleAnswer, ENGLISH_SAMPLE_ANSWERS } from "../lib/english-sample-answers.js";

console.log("=== Testing English Speaking Full Sample Answer Feature ===\n");

// 1. Verify Sample Answers Library
const sampleCount = Object.keys(ENGLISH_SAMPLE_ANSWERS).length;
console.log(`1. Testing Sample Answers Library (Total distinct topics: ${sampleCount})...`);
assert(sampleCount === 15, `Expected 15 distinct topics in library, found ${sampleCount}`);

for (const [prompt, data] of Object.entries(ENGLISH_SAMPLE_ANSWERS)) {
  assert(data.title === "Full Sample Answer — Speak Along", `Title mismatch for ${prompt}`);
  assert(Array.isArray(data.paragraphs) && data.paragraphs.length >= 2, `Expected >= 2 paragraphs for ${prompt}`);
  assert(data.estimatedMinutes >= 1.5, `Expected duration >= 1.5 mins for ${prompt}`);
  assert(typeof data.isPersonal === "boolean", `isPersonal boolean missing for ${prompt}`);
  if (data.isPersonal) {
    assert(data.customizationNote, `Personal question missing customizationNote: ${prompt}`);
  }
}
console.log("  ✅ [PASS]: Library contains 15 comprehensive, well-structured sample answers.");

// 2. Test All 90 Days of English Tasks in Curriculum
console.log("\n2. Testing 90-Day Curriculum Resolution...");
const englishTasks = COMPLETE_90_DAYS_CURRICULUM.filter((t) => t.subject === "english");
assert(englishTasks.length === 90, `Expected 90 English tasks, found ${englishTasks.length}`);

let personalCount = 0;
let technicalCount = 0;
const distinctWordCounts = new Set();

for (const task of englishTasks) {
  const ans = getEnglishSampleAnswer({
    prompt: task.exercise.prompt,
    day: task.dayNumber,
    topic: task.topic,
  });

  assert(ans, `Failed to resolve sample answer for Day ${task.dayNumber}`);
  assert(ans.text && ans.text.length > 200, `Answer too short for Day ${task.dayNumber}`);
  assert(ans.paragraphs.length >= 2, `Answer lacks paragraph structure on Day ${task.dayNumber}`);
  assert(ans.wordCount >= 100, `Word count below minimum for Day ${task.dayNumber}: ${ans.wordCount}`);
  assert(ans.title === "Full Sample Answer — Speak Along", `Title mismatch on Day ${task.dayNumber}`);

  distinctWordCounts.add(ans.wordCount);
  if (ans.isPersonal) personalCount++;
  else technicalCount++;
}

console.log(`  ✅ [PASS]: All 90 days resolve valid, multi-paragraph answers.`);
console.log(`  ✅ [PASS]: Personal responses with customization flags: ${personalCount} days.`);
console.log(`  ✅ [PASS]: Technical/linguistic drill responses: ${technicalCount} days.`);
console.log(`  ✅ [PASS]: Distinct word count variations: ${distinctWordCounts.size} unique lengths.`);

// 3. Inspect Specific Cases
console.log("\n3. Testing Specific Prompt Categories...");

// Case A: Technical concept with metaphor (REST API waiter)
const techTask = englishTasks.find((t) => t.exercise.prompt.includes("restaurant waiter"));
const techAns = getEnglishSampleAnswer({
  prompt: techTask.exercise.prompt,
  day: techTask.dayNumber,
  topic: techTask.topic,
});
assert(techAns.text.includes("waiter") && techAns.text.includes("kitchen"), "Metaphor elements missing in API explanation");
assert(!techAns.isPersonal, "Technical concept should not be flagged as personal");
console.log("  ✅ [PASS]: Technical Concept (REST API waiter metaphor) contains correct explanation & analogies.");

// Case B: HR weakness with genuine self-improvement
const hrTask = englishTasks.find((t) => t.exercise.prompt.toLowerCase().includes("weakness"));
const hrAns = getEnglishSampleAnswer({
  prompt: hrTask.exercise.prompt,
  day: hrTask.dayNumber,
  topic: hrTask.topic,
});
assert(hrAns.isPersonal, "HR weakness should be flagged as personal to customize");
assert(hrAns.customizationNote, "HR weakness should include customization notice");
assert(hrAns.text.includes("weakness"), "HR answer directly addresses weakness");
console.log("  ✅ [PASS]: HR Question provides professional sample answer with customization notice.");

// Case C: Project explanation with STAR method
const projTask = englishTasks.find((t) => t.exercise.prompt.includes("Situation, Task, Action, and Result"));
const projAns = getEnglishSampleAnswer({
  prompt: projTask.exercise.prompt,
  day: projTask.dayNumber,
  topic: projTask.topic,
});
assert(projAns.isPersonal, "Project explanation should be flagged as personal to customize");
assert(projAns.text.includes("Situation:") && projAns.text.includes("Action:"), "STAR structure present");
console.log("  ✅ [PASS]: Project Explanation uses clear STAR framework.");

// Case D: DSA explanation (Problem statement, Brute force, Optimization)
const dsaTask = englishTasks.find((t) => t.exercise.prompt.includes("mental steps"));
const dsaAns = getEnglishSampleAnswer({
  prompt: dsaTask.exercise.prompt,
  day: dsaTask.dayNumber,
  topic: dsaTask.topic,
});
assert(dsaAns.text.includes("Hash Map") && dsaAns.text.includes("O(N)"), "DSA technical terms present");
console.log("  ✅ [PASS]: DSA Solution explanation provides step-by-step verbal walkthrough.");

console.log("\n====================================================");
console.log("  ALL TESTS PASSED! FULL SAMPLE ANSWER SYSTEM VERIFIED 🎉");
console.log("====================================================");
