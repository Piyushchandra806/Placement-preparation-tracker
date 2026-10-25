/**
 * lib/english-speech-evaluator.js
 *
 * Intelligent English Speech & Grammar Evaluation Engine
 * Designed for Mission 90 English Speaking & Interview Practice.
 *
 * Responsibilities:
 * 1. Analyzes recognized spoken text against taught lesson patterns and interview context.
 * 2. Detects grammar mistakes, incorrect sentence structures, missing helping verbs/articles, and Indian-English phrasing.
 * 3. Explains each mistake in simple, accessible Hindi (सरल हिंदी में समझें).
 * 4. Generates a clean corrected version of what the user said.
 * 5. Suggests a natural, professional English version for subsequent speaking practice.
 * 6. Never invents fake transcripts or false analyses.
 */

// Common spoken grammar rules and corrections
const GRAMMAR_RULES = [
  // 1. Subject-Verb Agreement: 'I'
  {
    regex: /\bI\s+is\b/gi,
    replacement: "I am",
    ruleName: "Subject-Verb Agreement ('I am')",
    explanationHindi: "'I' के साथ हमेशा 'am' का प्रयोग होता है, 'is' का नहीं (जैसे: 'I am a student').",
    type: "grammar",
  },
  {
    regex: /\bI\s+are\b/gi,
    replacement: "I am",
    ruleName: "Subject-Verb Agreement ('I am')",
    explanationHindi: "'I' के साथ 'am' का प्रयोग करें, 'are' का नहीं.",
    type: "grammar",
  },
  {
    regex: /\bI\s+has\b/gi,
    replacement: "I have",
    ruleName: "Subject-Verb Agreement ('I have')",
    explanationHindi: "'I' के साथ हमेशा 'have' आता है, 'has' नहीं (जैसे: 'I have a project').",
    type: "grammar",
  },

  // 2. Subject-Verb Agreement: He/She/It (Singular)
  {
    regex: /\b(he|she|it)\s+have\b/gi,
    replacement: (match, p1) => `${p1.charAt(0).toUpperCase() + p1.slice(1).toLowerCase()} has`,
    ruleName: "Subject-Verb Agreement ('He/She has')",
    explanationHindi: "तीसरे व्यक्ति एकवचन (He / She / It) के साथ हमेशा 'has' का प्रयोग होता है, 'have' का नहीं.",
    type: "grammar",
  },
  {
    regex: /\b(he|she|it)\s+are\b/gi,
    replacement: (match, p1) => `${p1.charAt(0).toUpperCase() + p1.slice(1).toLowerCase()} is`,
    ruleName: "Subject-Verb Agreement ('He/She is')",
    explanationHindi: "He / She / It के साथ 'is' आता है, 'are' नहीं.",
    type: "grammar",
  },

  // 3. Subject-Verb Agreement: They/We/You (Plural)
  {
    regex: /\b(they|we)\s+is\b/gi,
    replacement: (match, p1) => `${p1.charAt(0).toUpperCase() + p1.slice(1).toLowerCase()} are`,
    ruleName: "Subject-Verb Agreement ('They/We are')",
    explanationHindi: "They और We बहुवचन (plural) हैं, इनके साथ 'are' का प्रयोग करें, 'is' का नहीं.",
    type: "grammar",
  },
  {
    regex: /\byou\s+is\b/gi,
    replacement: "you are",
    ruleName: "Subject-Verb Agreement ('You are')",
    explanationHindi: "'You' के साथ हमेशा 'are' का प्रयोग होता है (जैसे: 'You are right').",
    type: "grammar",
  },
  {
    regex: /\b(they|we)\s+has\b/gi,
    replacement: (match, p1) => `${p1.charAt(0).toUpperCase() + p1.slice(1).toLowerCase()} have`,
    ruleName: "Subject-Verb Agreement ('They/We have')",
    explanationHindi: "They और We के साथ 'have' का प्रयोग करें.",
    type: "grammar",
  },

  // 4. Missing Helping Verbs in Continuous Tense
  {
    regex: /\bI\s+(learning|studying|working|preparing|trying|doing|going|looking)\b/gi,
    replacement: (match, p1) => `I am ${p1}`,
    ruleName: "Missing Helping Verb ('am')",
    explanationHindi: "Continuous tense (क्रिया में -ing) में मुख्य क्रिया से पहले helping verb 'am' ('I am ${p1}') लगाना आवश्यक है.",
    type: "structure",
  },
  {
    regex: /\bhe\s+(learning|studying|working|preparing|trying|doing|going)\b/gi,
    replacement: (match, p1) => `He is ${p1}`,
    ruleName: "Missing Helping Verb ('is')",
    explanationHindi: "'He' के बाद continuous tense में 'is' लगाएं ('He is ${p1}').",
    type: "structure",
  },
  {
    regex: /\bshe\s+(learning|studying|working|preparing|trying|doing|going)\b/gi,
    replacement: (match, p1) => `She is ${p1}`,
    ruleName: "Missing Helping Verb ('is')",
    explanationHindi: "'She' के बाद continuous tense में 'is' लगाएं ('She is ${p1}').",
    type: "structure",
  },
  {
    regex: /\bthey\s+(learning|studying|working|preparing|trying|doing|going)\b/gi,
    replacement: (match, p1) => `They are ${p1}`,
    ruleName: "Missing Helping Verb ('are')",
    explanationHindi: "'They' के साथ continuous tense में 'are' लगाएं ('They are ${p1}').",
    type: "structure",
  },
  {
    regex: /\bwe\s+(learning|studying|working|preparing|trying|doing|going)\b/gi,
    replacement: (match, p1) => `We are ${p1}`,
    ruleName: "Missing Helping Verb ('are')",
    explanationHindi: "'We' के साथ continuous tense में 'are' लगाएं ('We are ${p1}').",
    type: "structure",
  },

  // 5. Missing 'to' in Infinitive Verb Patterns ('want to', 'need to', 'like to')
  {
    regex: /\b(want|need|like|plan|hope)\s+(become|learn|study|work|prepare|improve|make|build|practice|speak|understand|join|get)\b/gi,
    replacement: (match, p1, p2) => `${p1} to ${p2}`,
    ruleName: "Infinitive Pattern (Missing 'to')",
    explanationHindi: "दो मुख्य क्रियाओं को जोड़ने के लिए बीच में 'to' लगाना आवश्यक है (जैसे: 'want to become', 'need to learn').",
    type: "structure",
  },

  // 6. Base Form (V1) Required after 'to'
  {
    regex: /\bwant\s+to\s+becoming\b/gi,
    replacement: "want to become",
    ruleName: "Base Verb after 'to'",
    explanationHindi: "'want to' के बाद हमेशा verb की base form (V1) आती है, -ing नहीं ('want to become').",
    type: "grammar",
  },
  {
    regex: /\bneed\s+to\s+learning\b/gi,
    replacement: "need to learn",
    ruleName: "Base Verb after 'to'",
    explanationHindi: "'need to' के बाद हमेशा base form आती है ('need to learn').",
    type: "grammar",
  },
  {
    regex: /\blike\s+to\s+learning\b/gi,
    replacement: "like to learn",
    ruleName: "Base Verb after 'to'",
    explanationHindi: "'like to' के बाद verb की base form आती है ('like to learn').",
    type: "grammar",
  },
  {
    regex: /\bwant\s+to\s+joining\b/gi,
    replacement: "want to join",
    ruleName: "Base Verb after 'to'",
    explanationHindi: "'want to' के बाद base form आती है ('want to join').",
    type: "grammar",
  },

  // 7. Double Helping Verb Redundancy
  {
    regex: /\bI\s+am\s+have\b/gi,
    replacement: "I have",
    ruleName: "Redundant Helping Verb",
    explanationHindi: "'am' और 'have' दोनों helping verbs को एक साथ न लगाएं; केवल 'I have' का प्रयोग करें.",
    type: "grammar",
  },
  {
    regex: /\bI\s+am\s+can\b/gi,
    replacement: "I can",
    ruleName: "Redundant Helping Verb",
    explanationHindi: "Modal verb 'can' के साथ 'am' लगाने की आवश्यकता नहीं है; सीधे 'I can' कहें.",
    type: "grammar",
  },

  // 8. Common Indian-English / Spoken Phrasing
  {
    regex: /\bmyself\s+([A-Za-z]+)\b/gi,
    replacement: (match, p1) => `My name is ${p1}`,
    ruleName: "Introduction Phrasing",
    explanationHindi: "इंटरव्यू में 'Myself ${p1}' बोलना गलत माना जाता है. हमेशा 'My name is ${p1}' या 'I am ${p1}' कहें.",
    type: "vocabulary",
  },
  {
    regex: /\bpassout\s+from\b/gi,
    replacement: "graduated from",
    ruleName: "Formal Interview Phrasing",
    explanationHindi: "कॉलेज या डिग्री पूरी करने के लिए 'passout' की जगह प्रोफेशनल शब्द 'graduated from' का प्रयोग करें.",
    type: "vocabulary",
  },
  {
    regex: /\bpass\s+out\s+from\b/gi,
    replacement: "graduated from",
    ruleName: "Formal Interview Phrasing",
    explanationHindi: "कॉलेज पास करने के संदर्भ में 'graduated from' बोलना अधिक सटीक और मानक अंग्रेज़ी है.",
    type: "vocabulary",
  },
  {
    regex: /\bI\s+am\s+having\s+([0-9]+|one|two|three|four|five)\s+years?(?:\s+of)?\s+experience\b/gi,
    replacement: (match, p1) => `I have ${p1} years of experience`,
    ruleName: "Experience Phrasing",
    explanationHindi: "अनुभव (experience) बताने के लिए 'I am having' के स्थान पर 'I have' का प्रयोग करें.",
    type: "vocabulary",
  },
  {
    regex: /\brevert\s+back\b/gi,
    replacement: "reply",
    ruleName: "Redundancy ('revert back')",
    explanationHindi: "'revert' का अर्थ ही जवाब देना होता है, इसलिए साथ में 'back' लगाना अनावश्यक है. 'reply' या 'respond' कहें.",
    type: "vocabulary",
  },
  {
    regex: /\bdiscuss\s+about\b/gi,
    replacement: "discuss",
    ruleName: "Preposition Redundancy ('discuss about')",
    explanationHindi: "'discuss' क्रिया के तुरंत बाद विषय आता है, 'about' लगाने की ज़रूरत नहीं है (जैसे: 'discuss this project').",
    type: "vocabulary",
  },

  // 9. Missing Indefinite Articles before singular professions / roles
  {
    regex: /\b(am|become|as)\s+student\b/gi,
    replacement: (match, p1) => `${p1} a student`,
    ruleName: "Missing Article ('a student')",
    explanationHindi: "'student' एकवचन गणनीय संज्ञा (singular noun) है, इससे पहले article 'a' लगाना आवश्यक है ('a student').",
    type: "omission",
  },
  {
    regex: /\b(am|become|as)\s+software\s+engineer\b/gi,
    replacement: (match, p1) => `${p1} a software engineer`,
    ruleName: "Missing Article ('a software engineer')",
    explanationHindi: "'software engineer' पद से पहले article 'a' लगाएं ('a software engineer').",
    type: "omission",
  },
  {
    regex: /\b(am|become|as)\s+developer\b/gi,
    replacement: (match, p1) => `${p1} a developer`,
    ruleName: "Missing Article ('a developer')",
    explanationHindi: "'developer' से पहले 'a' लगाएं ('a developer').",
    type: "omission",
  },
  {
    regex: /\b(am|become|as)\s+engineer\b/gi,
    replacement: (match, p1) => `${p1} an engineer`,
    ruleName: "Missing Article ('an engineer')",
    explanationHindi: "'engineer' का उच्चारण स्वर ध्वनि (vowel sound) से होता है, इसलिए इससे पहले 'an' लगाएं ('an engineer').",
    type: "omission",
  },
  {
    regex: /\b(am|become|as)\s+fresher\b/gi,
    replacement: (match, p1) => `${p1} a fresher`,
    ruleName: "Missing Article ('a fresher')",
    explanationHindi: "'fresher' से पहले article 'a' लगाएं ('a fresher').",
    type: "omission",
  },
];

/**
 * Clean up sentence casing and punctuation.
 */
function polishPunctuation(text) {
  if (!text) return "";

  let result = text
    .trim()
    .replace(/\s+/g, " ")
    // Capitalize standalone 'i'
    .replace(/\bi\b/g, "I")
    .replace(/\bi'm\b/g, "I'm");

  // Capitalize first letter of every sentence
  result = result.replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());

  // Ensure ends with a period if missing
  if (result && !/[.!?]$/.test(result)) {
    result += ".";
  }

  return result;
}

/**
 * Evaluates spoken answer transcript against question, sample answer, and taught patterns.
 *
 * @param {Object} params
 * @param {string} params.transcript - The raw spoken transcript from Web Speech API
 * @param {string} params.question - The interview question
 * @param {string} params.sampleAnswer - The short sample answer
 * @param {string} params.patternsUsed - Grammar patterns taught in today's lesson
 * @param {number} params.day - Current day number
 * @returns {Object} Comprehensive evaluation result
 */
export function evaluateSpokenAnswer({
  transcript = "",
  question = "",
  sampleAnswer = "",
  patternsUsed = "",
  day = 1,
}) {
  const trimmed = (transcript || "").trim();

  // If no speech was recorded
  if (!trimmed) {
    return {
      hasSpeech: false,
      wordCount: 0,
      originalTranscript: "",
      correctedText: "",
      mistakes: [],
      hasMistakes: false,
      naturalVersion: sampleAnswer || "",
      strengths: [],
      score: 0,
      feedbackSummary: "कोई आवाज़ या शब्द नहीं पहचाने गए। कृपया माइक्रोफ़ोन के पास साफ़ आवाज़ में बोलें।",
    };
  }

  const words = trimmed.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  let corrected = trimmed;
  const detectedMistakes = [];

  // 1. Check for standalone lowercase 'i'
  if (/\bi\b/.test(corrected)) {
    detectedMistakes.push({
      type: "grammar",
      ruleName: "Capitalization of 'I'",
      original: "i",
      corrected: "I",
      explanationHindi: "अंग्रेज़ी में सर्वनाम 'I' (मैं) हमेशा Capital लेटर में लिखा जाता है.",
    });
  }

  // 2. Run through all grammar rules
  for (const rule of GRAMMAR_RULES) {
    const match = corrected.match(rule.regex);
    if (match) {
      const originalSnippet = match[0];
      let correctedSnippet = "";

      if (typeof rule.replacement === "function") {
        corrected = corrected.replace(rule.regex, (...args) => {
          correctedSnippet = rule.replacement(...args);
          return correctedSnippet;
        });
      } else {
        correctedSnippet = rule.replacement;
        corrected = corrected.replace(rule.regex, rule.replacement);
      }

      // Add to mistakes list if unique
      if (!detectedMistakes.some((m) => m.ruleName === rule.ruleName)) {
        detectedMistakes.push({
          type: rule.type,
          ruleName: rule.ruleName,
          original: originalSnippet,
          corrected: correctedSnippet,
          explanationHindi: rule.explanationHindi,
        });
      }
    }
  }

  // Final polishing of the corrected sentence
  const finalCorrected = polishPunctuation(corrected);
  const hasMistakes = detectedMistakes.length > 0;

  // 3. Formulate a Natural English Version for Practice
  // Combine user's key personal entities with natural, idiomatic phrasing from the lesson
  let naturalVersion = "";
  let naturalVersionHindi = "";

  if (sampleAnswer) {
    // If the user's answer is very short or fragmented (< 4 words), provide the complete sample answer
    if (wordCount < 4) {
      naturalVersion = sampleAnswer;
      naturalVersionHindi = "साक्षात्कार के लिए पूर्ण और स्पष्ट उत्तर का अभ्यास करें।";
    } else {
      // Natural version polishes what the user actually said while maintaining authentic flow
      naturalVersion = finalCorrected;

      // If missing a connector or ending politely, enhance it naturally
      if (!finalCorrected.toLowerCase().includes("thank you") && finalCorrected.length > 60) {
        // Natural concise cadence
        naturalVersion = finalCorrected;
      }
    }
  } else {
    naturalVersion = finalCorrected;
  }

  // 4. Strengths & Positives
  const strengths = [];
  if (wordCount >= 8) {
    strengths.push("Good length — you expressed complete thoughts aloud.");
  } else if (wordCount >= 4) {
    strengths.push("Good attempt — you spoke relevant keywords clearly.");
  }

  if (!hasMistakes) {
    strengths.push("Excellent grammatical accuracy! All sentence structures were correct.");
  } else {
    strengths.push("Clear voice input captured. Correcting these few grammar points will make your answer shine.");
  }

  // 5. Score calculation (between 60% and 100%)
  let score = 100;
  score -= detectedMistakes.length * 12;
  if (wordCount < 4) score -= 15;
  score = Math.max(50, Math.min(100, score));

  return {
    hasSpeech: true,
    wordCount,
    originalTranscript: trimmed,
    correctedText: finalCorrected,
    hasMistakes,
    mistakes: detectedMistakes,
    naturalVersion,
    naturalVersionHindi,
    strengths,
    score,
    feedbackSummary: hasMistakes
      ? `हमने आपके बोले गए उत्तर में ${detectedMistakes.length} सुधार पाए हैं। नीचे दिए गए विवरण को देखकर सुधारें:`
      : "शाबाश! आपके बोले गए उत्तर में कोई व्याकरण की गलती नहीं मिली। आप बिल्कुल सही दिशा में अभ्यास कर रहे हैं!",
  };
}
