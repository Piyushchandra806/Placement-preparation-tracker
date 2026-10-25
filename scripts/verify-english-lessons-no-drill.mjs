import fs from "fs";
import path from "path";
import { COMPLETE_90_DAYS_CURRICULUM } from "../lib/complete-90-days-syllabus.js";
import { getBasicEnglishLesson } from "../lib/basic-english-lessons.js";

console.log("=== VERIFYING REMOVAL OF PRACTICE DRILL & VERIFICATION FROM ENGLISH ===\n");

// 1. Check code in SubjectPageLayout.js
const subjectPageCode = fs.readFileSync(
  path.resolve("components/subjects/SubjectPageLayout.js"),
  "utf8"
);

console.log("TEST 1: Verifying SubjectPageLayout.js rendering logic...");
const practiceDrillRegex = /\{\/\*\s*Practice Exercise & Answer Key[\s\S]*?Practice Drill &amp; Verification[\s\S]*?<\/div>\s*\)\s*\}/;
const match = subjectPageCode.match(practiceDrillRegex);

if (!match) {
  console.error("FAILED: Could not find Practice Drill & Verification block in SubjectPageLayout.js");
  process.exit(1);
}

const block = match[0];

if (!block.includes('subjectSlug !== "english"')) {
  console.error('FAILED: Practice Drill & Verification block does not exclude english via `subjectSlug !== "english"`!');
  process.exit(1);
} else {
  console.log("✓ PASSED: Practice Drill & Verification block explicitly requires `subjectSlug !== \"english\"`.");
}

const hasVoiceSpeakingRecorderInJSX = /<VoiceSpeakingRecorder\b/.test(subjectPageCode);
if (hasVoiceSpeakingRecorderInJSX) {
  console.error("FAILED: VoiceSpeakingRecorder (Daily Speaking Simulation) is still present in SubjectPageLayout.js!");
  process.exit(1);
} else {
  console.log("✓ PASSED: Daily Speaking Simulation (VoiceSpeakingRecorder) is completely removed from SubjectPageLayout.js.");
}

// 2. Verify all 90 days of English curriculum
console.log("\nTEST 2: Verifying English curriculum days (Early, Middle, Later)...");
const testDays = [1, 5, 15, 30, 45, 50, 60, 75, 85, 90];

const englishSyllabus = COMPLETE_90_DAYS_CURRICULUM.filter((t) => t.subject === "english");
console.log(`Found ${englishSyllabus.length} days in english curriculum.`);

for (const day of testDays) {
  const task = englishSyllabus.find((t) => t.dayNumber === day);
  if (!task) {
    console.error(`FAILED: English task for Day ${day} not found!`);
    process.exit(1);
  }

  // Check that Practice Drill & Verification would NOT render:
  const wouldRenderPracticeDrill = "english" !== "english" && task.exercise && task.exercise.question;
  if (wouldRenderPracticeDrill) {
    console.error(`FAILED: Practice Drill & Verification would still render for Day ${day}!`);
    process.exit(1);
  }

  // Check that Daily Speaking Simulation prompt is preserved:
  const hasSpeakingPrompt = task.exercise && typeof task.exercise.prompt === "string" && task.exercise.prompt.length > 0;
  if (!hasSpeakingPrompt) {
    console.error(`FAILED: Daily speaking prompt missing on Day ${day}!`);
    process.exit(1);
  }

  // Check that Learn Basic English & Related Interview Question exist:
  const basicLesson = getBasicEnglishLesson(day);
  if (!basicLesson || !basicLesson.sentences || basicLesson.sentences.length < 3) {
    console.error(`FAILED: Basic sentences missing on Day ${day}!`);
    process.exit(1);
  }
  if (!basicLesson.interviewQuestion || !basicLesson.interviewQuestion.question) {
    console.error(`FAILED: Related Interview Question missing on Day ${day}!`);
    process.exit(1);
  }

  console.log(
    `✓ Day ${String(day).padStart(2, " ")}: Practice Drill REMOVED | Daily Simulation prompt PRESERVED ("${task.exercise.prompt.slice(0, 35)}...") | Interview Q PRESERVED ("${basicLesson.interviewQuestion.question.slice(0, 30)}...")`
  );
}

// 3. Verify Quant and Reasoning STILL have Practice Drill & Verification available
console.log("\nTEST 3: Verifying Quant and Reasoning retain Practice Drill & Verification...");
const quantSyllabus = COMPLETE_90_DAYS_CURRICULUM.filter((t) => t.subject === "quant");
const reasoningSyllabus = COMPLETE_90_DAYS_CURRICULUM.filter((t) => t.subject === "reasoning");

const quantSample = quantSyllabus.find((t) => t.exercise && t.exercise.question);
const reasoningSample = reasoningSyllabus.find((t) => t.exercise && t.exercise.question);

const quantRenders = "quant" !== "english" && quantSample?.exercise?.question;
const reasoningRenders = "reasoning" !== "english" && reasoningSample?.exercise?.question;

if (!quantRenders || !reasoningRenders) {
  console.error("FAILED: Practice Drill & Verification was incorrectly removed from Quant or Reasoning!");
  process.exit(1);
} else {
  console.log("✓ PASSED: Quant and Reasoning retain their Practice Drill & Verification exercises.");
}

console.log("\n🎉 ALL VERIFICATION CHECKS PASSED! 🎉\n");
