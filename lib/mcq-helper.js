/**
 * MCQ Helper Utilities — Mission 90
 *
 * Provides:
 * 1. findCorrectOptionIndex: robustly identifies the 0-indexed position of the correct
 *    option based on each question's actual answerKey (handles exact text, letter labels A-D,
 *    prefixes, and normalized mathematical whitespace).
 * 2. Local storage persistence for answer state so user selections survive navigation.
 * 3. Accurate tracking of attempted, correct, and incorrect scores without duplicate counts.
 */

const STORAGE_KEY_ANSWERS = "mission90_mcq_answers";
const STORAGE_KEY_STATS = "mission90_mcq_stats";

/**
 * Finds the correct option index (0..n-1) given an options array and an answerKey string.
 *
 * @param {string[]} options - List of option strings (e.g. ["3/8", "3/5", "5/8", "7/16"])
 * @param {string} answerKey - The correct answer key (e.g. "3/8", "B", "Option B", "47")
 * @returns {number} Index of the correct option, or -1 if no valid match found
 */
export function findCorrectOptionIndex(options, answerKey) {
  if (!options || !Array.isArray(options) || options.length === 0 || !answerKey) {
    return -1;
  }

  const cleanKey = String(answerKey).trim();
  const cleanKeyLower = cleanKey.toLowerCase();

  // 1. Direct match (case-insensitive, trimmed)
  let idx = options.findIndex(
    (opt) => String(opt).trim().toLowerCase() === cleanKeyLower
  );
  if (idx !== -1) return idx;

  // 2. Letter match: "A", "B", "C", "D" or "Option A", "Option B", "A)", "A."
  const letterMatch = cleanKeyLower.match(/^(?:option\s+)?([a-e])(?:\)|\.|\:|$)/i);
  if (letterMatch) {
    const charCode = letterMatch[1].toLowerCase().charCodeAt(0) - 97; // 'a' -> 0
    if (charCode >= 0 && charCode < options.length) {
      return charCode;
    }
  }

  // 3. Option starts with answerKey or answerKey starts with option
  idx = options.findIndex((opt) => {
    const cleanOpt = String(opt).trim().toLowerCase();
    return cleanOpt.startsWith(cleanKeyLower) || cleanKeyLower.startsWith(cleanOpt);
  });
  if (idx !== -1) return idx;

  // 4. Normalized alphanumeric match (removes punctuation, commas, currency signs, spaces)
  const strip = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
  const strippedKey = strip(cleanKey);
  if (strippedKey) {
    idx = options.findIndex((opt) => strip(opt) === strippedKey);
    if (idx !== -1) return idx;
  }

  return -1;
}

/**
 * Retrieves the stored MCQ attempt for a specific question ID.
 *
 * @param {string} questionId
 * @returns {{ selectedIndex: number, isCorrect: boolean, isLocked: boolean, timestamp: number } | null}
 */
export function getStoredMCQAttempt(questionId) {
  if (typeof window === "undefined" || !questionId) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ANSWERS);
    if (!raw) return null;
    const map = JSON.parse(raw);
    return map[questionId] || null;
  } catch {
    return null;
  }
}

/**
 * Saves an MCQ attempt and updates overall score statistics without duplicate counting.
 *
 * @param {string} questionId
 * @param {number} selectedIndex
 * @param {boolean} isCorrect
 * @returns {void}
 */
export function saveMCQAttempt(questionId, selectedIndex, isCorrect) {
  if (typeof window === "undefined" || !questionId) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ANSWERS);
    const map = raw ? JSON.parse(raw) : {};

    const existing = map[questionId];
    const isFirstAttempt = !existing || existing.selectedIndex === null || existing.selectedIndex === undefined;

    map[questionId] = {
      selectedIndex,
      isCorrect,
      isLocked: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(map));

    // Update overall stats only on first attempt to prevent duplicate score inflation
    if (isFirstAttempt) {
      const statsRaw = localStorage.getItem(STORAGE_KEY_STATS);
      const stats = statsRaw ? JSON.parse(statsRaw) : { totalAttempted: 0, totalCorrect: 0, totalIncorrect: 0 };
      stats.totalAttempted = (stats.totalAttempted || 0) + 1;
      if (isCorrect) {
        stats.totalCorrect = (stats.totalCorrect || 0) + 1;
      } else {
        stats.totalIncorrect = (stats.totalIncorrect || 0) + 1;
      }
      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
    }
  } catch (err) {
    console.warn("Could not save MCQ attempt to localStorage:", err);
  }
}

/**
 * Clears an MCQ attempt for a specific question ID (enables Try Again / Retry).
 *
 * @param {string} questionId
 * @returns {void}
 */
export function clearMCQAttempt(questionId) {
  if (typeof window === "undefined" || !questionId) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ANSWERS);
    if (!raw) return;
    const map = JSON.parse(raw);
    if (map[questionId]) {
      delete map[questionId];
      localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(map));
    }
  } catch (err) {
    console.warn("Could not clear MCQ attempt in localStorage:", err);
  }
}

/**
 * Retrieves aggregate MCQ stats across all sections.
 *
 * @returns {{ totalAttempted: number, totalCorrect: number, totalIncorrect: number, accuracy: number }}
 */
export function getMCQStats() {
  if (typeof window === "undefined") {
    return { totalAttempted: 0, totalCorrect: 0, totalIncorrect: 0, accuracy: 0 };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STATS);
    const stats = raw ? JSON.parse(raw) : { totalAttempted: 0, totalCorrect: 0, totalIncorrect: 0 };
    const accuracy =
      stats.totalAttempted > 0
        ? Math.round((stats.totalCorrect / stats.totalAttempted) * 100)
        : 0;
    return { ...stats, accuracy };
  } catch {
    return { totalAttempted: 0, totalCorrect: 0, totalIncorrect: 0, accuracy: 0 };
  }
}
