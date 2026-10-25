import fs from "fs";
import path from "path";
import { evaluateSpokenAnswer } from "../lib/english-speech-evaluator.js";

console.log("=== RUNNING VOICE INTERVIEW VERIFICATION SUITE ===\n");

// 1. Verify textarea and writing elements are completely removed
const relatedSectionCode = fs.readFileSync(
  path.resolve("components/english/RelatedInterviewQuestionSection.js"),
  "utf8"
);

console.log("TEST 1: Verifying removal of written answer interface...");
const hasTextarea = /<textarea\b/i.test(relatedSectionCode);
const hasMyPersonalizedAnswerHeading = /My Personalized Answer \(अपना उत्तर यहाँ लिखें\)/i.test(relatedSectionCode);
const hasPlaceholderWriting = /Type your personalized English answer here/i.test(relatedSectionCode);
const hasUseAsTemplate = /Use as Template/i.test(relatedSectionCode);

if (hasTextarea || hasMyPersonalizedAnswerHeading || hasPlaceholderWriting || hasUseAsTemplate) {
  console.error("FAILED: Written answer interface elements were found in RelatedInterviewQuestionSection.js!");
  process.exit(1);
} else {
  console.log("✓ PASSED: Textarea, writing instructions, and template copying have been removed cleanly.");
}

// 2. Verify interview question, Hindi meaning, patternsUsed, and sample answer toggle are preserved
console.log("\nTEST 2: Verifying preservation of interview question, Hindi, and sample answer toggle...");
const hasQuestion = /interviewData\.question/.test(relatedSectionCode);
const hasQuestionHindi = /interviewData\.questionHindi/.test(relatedSectionCode);
const hasPatternsUsed = /interviewData\.patternsUsed/.test(relatedSectionCode);
const hasSampleAnswer = /interviewData\.sampleAnswer/.test(relatedSectionCode);
const hasShowSampleToggle = /showSampleAnswer/.test(relatedSectionCode);

if (!hasQuestion || !hasQuestionHindi || !hasPatternsUsed || !hasSampleAnswer || !hasShowSampleToggle) {
  console.error("FAILED: Essential question or sample answer elements were missing!");
  process.exit(1);
} else {
  console.log("✓ PASSED: Interview question, Hindi meaning, patterns used, and sample answer toggle preserved.");
}

// 3. Verify Voice Controls and Section Heading
console.log("\nTEST 3: Verifying Voice Controls & Section Heading...");
const hasSpeakYourAnswer = /Speak Your Answer/.test(relatedSectionCode);
const hasStartSpeaking = /Start Speaking/.test(relatedSectionCode);
const hasStopRecording = /Stop Recording/.test(relatedSectionCode);
const hasListenRecording = /Listen to Your Recording/.test(relatedSectionCode);
const hasRecordAgain = /Record Again/.test(relatedSectionCode);

if (!hasSpeakYourAnswer || !hasStartSpeaking || !hasStopRecording || !hasListenRecording || !hasRecordAgain) {
  console.error("FAILED: Voice controls or heading missing!");
  process.exit(1);
} else {
  console.log("✓ PASSED: 'Speak Your Answer', Start Speaking, Stop Recording, Listen to Your Recording, and Record Again controls are present.");
}

// 4. Verify Recording States
console.log("\nTEST 4: Verifying Recording States...");
const states = [
  "Ready to record",
  "Recording",
  "Processing speech",
  "Transcript available",
  "Analysis complete",
];

for (const st of states) {
  if (!relatedSectionCode.includes(st)) {
    console.error(`FAILED: Required state '${st}' is missing in statusBadge config!`);
    process.exit(1);
  }
}
console.log("✓ PASSED: All 5 recording states correctly configured.");

// 5. Verify Speech Evaluator handles actual transcripts vs empty/unsupported
console.log("\nTEST 5: Verifying Speech Evaluator handles empty and real speech without fake data...");
const emptyResult = evaluateSpokenAnswer({
  transcript: "",
  question: "Tell me about yourself.",
  sampleAnswer: "My name is John. I am a student.",
});

if (emptyResult.hasSpeech !== false || emptyResult.mistakes.length !== 0) {
  console.error("FAILED: Empty transcript generated fake mistakes!");
  process.exit(1);
} else {
  console.log("✓ PASSED: Empty transcript returns hasSpeech=false, no fake mistakes generated.");
}

const realResult = evaluateSpokenAnswer({
  transcript: "i is student and i want become engineer",
  question: "Tell me about yourself.",
  sampleAnswer: "My name is John. I am a student. I want to become an engineer.",
});

if (!realResult.hasMistakes || realResult.mistakes.length < 3) {
  console.error("FAILED: Real speech mistakes were not detected properly!");
  process.exit(1);
} else {
  console.log(`✓ PASSED: Detected ${realResult.mistakes.length} real mistakes with Hindi explanations:`);
  realResult.mistakes.forEach((m) => {
    console.log(`   - [${m.ruleName}] ${m.original} -> ${m.corrected} (${m.explanationHindi.slice(0, 40)}...)`);
  });
}

// 6. Verify first screenshot's VoiceSpeakingRecorder.js is untouched and working
console.log("\nTEST 6: Verifying original daily speaking simulation (VoiceSpeakingRecorder.js)...");
const voiceSpeakingCode = fs.readFileSync(
  path.resolve("components/subjects/VoiceSpeakingRecorder.js"),
  "utf8"
);

if (
  !voiceSpeakingCode.includes("Daily Speaking Simulation") ||
  !voiceSpeakingCode.includes("Goal: 2 Minutes") ||
  !voiceSpeakingCode.includes("saveVoiceRecording")
) {
  console.error("FAILED: Original VoiceSpeakingRecorder.js was damaged or missing!");
  process.exit(1);
} else {
  console.log("✓ PASSED: Original VoiceSpeakingRecorder.js is intact and untouched.");
}

console.log("\n🎉 ALL TESTS PASSED SUCCESSFULLY! 🎉\n");
