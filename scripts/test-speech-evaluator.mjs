import { evaluateSpokenAnswer } from "../lib/english-speech-evaluator.js";

const testCases = [
  {
    input: "i is student and i want become software engineer",
    expectedMistakeKeywords: ["Subject-Verb Agreement", "want to", "student"],
  },
  {
    input: "myself Rahul and i passout from college",
    expectedMistakeKeywords: ["Introduction Phrasing", "graduated from"],
  },
  {
    input: "I am learning English and I want to improve my speaking skills.",
    expectedMistakeKeywords: [],
  },
  {
    input: "he have two projects and they is working on them",
    expectedMistakeKeywords: ["He/She has", "They/We are"],
  },
];

console.log("Running speech evaluator test suite...");

for (const tc of testCases) {
  const result = evaluateSpokenAnswer({
    transcript: tc.input,
    question: "Tell me about yourself.",
    sampleAnswer: "My name is John. I am a student. I want to become a software engineer.",
    patternsUsed: "Subject + am + noun / Subject + want to + verb",
    day: 1,
  });

  console.log("\n-------------------------------------------");
  console.log("INPUT:", tc.input);
  console.log("CORRECTED:", result.correctedText);
  console.log("MISTAKES FOUND:", result.mistakes.length);
  result.mistakes.forEach((m, idx) => {
    console.log(`  ${idx + 1}. [${m.ruleName}] ${m.original} -> ${m.corrected}`);
    console.log(`     Hindi: ${m.explanationHindi}`);
  });
  console.log("SCORE:", result.score);
}

console.log("\nAll tests completed!");
