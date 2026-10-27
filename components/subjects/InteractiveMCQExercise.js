/**
 * InteractiveMCQExercise — Instant Verification Multiple Choice Question Component
 *
 * Implements:
 * 1. Fully clickable option containers (A, B, C, D) with full-card hit target.
 * 2. Instant answer verification upon selection:
 *    - Correct: Green styling + "Correct Answer! ✓"
 *    - Wrong: Red styling + "Incorrect Answer ✗" AND highlights correct option in green.
 * 3. Locks options upon selection to prevent accidental changes.
 * 4. "Try Again" / "Retry" button that resets ONLY this question.
 * 5. Independent "View Answer & Explanation" / "Hide Solution" toggle.
 * 6. Non-duplicate score tracking and localStorage persistence per question ID.
 * 7. Graceful fallback for non-MCQ exercises or missing answer keys.
 * 8. Responsive 1/2-column grid and Mission 90 aesthetic in both light & dark modes.
 */
"use client";

import { useState, useMemo } from "react";
import {
  Sparkles,
  Eye,
  EyeOff,
  Check,
  CheckCircle2,
  X,
  XCircle,
  RotateCcw,
} from "lucide-react";
import {
  findCorrectOptionIndex,
  getStoredMCQAttempt,
  saveMCQAttempt,
  clearMCQAttempt,
} from "@/lib/mcq-helper";

export default function InteractiveMCQExercise({
  exercise,
  questionId,
  accentColor = "var(--accent)",
  showExplanation: controlledShowExplanation,
  onToggleExplanation: controlledToggleExplanation,
  className = "",
}) {
  // Support both controlled and uncontrolled explanation toggle
  const [internalShowExplanation, setInternalShowExplanation] = useState(false);
  const showExplanation =
    controlledShowExplanation !== undefined
      ? controlledShowExplanation
      : internalShowExplanation;

  const handleToggleExplanation = () => {
    if (controlledToggleExplanation) {
      controlledToggleExplanation();
    } else {
      setInternalShowExplanation((prev) => !prev);
    }
  };

  const options = useMemo(() => exercise?.options || [], [exercise?.options]);
  const answerKey = exercise?.answerKey || "";
  const explanation = exercise?.explanation || "";
  const question = exercise?.question || "";

  // Identify correct option index (0..n-1)
  const correctIndex = useMemo(() => {
    return findCorrectOptionIndex(options, answerKey);
  }, [options, answerKey]);

  // Track attempt state with synchronous reset on questionId change (idiomatic React 19)
  const [prevQuestionId, setPrevQuestionId] = useState(questionId);
  const [attemptState, setAttemptState] = useState(() => {
    if (typeof window === "undefined" || !questionId) {
      return { selectedIndex: null, isLocked: false };
    }
    const stored = getStoredMCQAttempt(questionId);
    if (stored && stored.selectedIndex !== null && stored.selectedIndex !== undefined) {
      return { selectedIndex: stored.selectedIndex, isLocked: true };
    }
    return { selectedIndex: null, isLocked: false };
  });

  if (prevQuestionId !== questionId) {
    setPrevQuestionId(questionId);
    const stored = getStoredMCQAttempt(questionId);
    setAttemptState(
      stored && stored.selectedIndex !== null && stored.selectedIndex !== undefined
        ? { selectedIndex: stored.selectedIndex, isLocked: true }
        : { selectedIndex: null, isLocked: false }
    );
  }

  const selectedIndex = attemptState.selectedIndex;
  const isLocked = attemptState.isLocked;

  if (!question) return null;

  const hasOptions = Array.isArray(options) && options.length > 0;
  const isAnswered = selectedIndex !== null;
  const isSelectedCorrect = isAnswered && correctIndex !== -1 && selectedIndex === correctIndex;
  const isSelectedWrong = isAnswered && correctIndex !== -1 && selectedIndex !== correctIndex;

  // Handle clicking an option
  const handleSelectOption = (idx) => {
    if (isLocked) return;
    const isCorrect = correctIndex !== -1 ? idx === correctIndex : true;
    setAttemptState({ selectedIndex: idx, isLocked: true });
    if (questionId) {
      saveMCQAttempt(questionId, idx, isCorrect);
    }
  };

  // Handle "Try Again" / "Retry"
  const handleRetry = () => {
    setAttemptState({ selectedIndex: null, isLocked: false });
    if (questionId) {
      clearMCQAttempt(questionId);
    }
  };

  return (
    <div
      id={`mcq-container-${questionId || "drill"}`}
      className={`p-4 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 space-y-3 transition-all ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-300 uppercase tracking-wide flex items-center gap-1.5">
            <Sparkles size={13} style={{ color: accentColor }} />
            Practice Drill &amp; Verification
          </p>

          {/* Quick status pill when answered */}
          {isAnswered && (
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border transition-all ${
                isSelectedCorrect
                  ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20"
                  : isSelectedWrong
                  ? "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20"
                  : "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20"
              }`}
            >
              {isSelectedCorrect ? (
                <>
                  <Check size={11} strokeWidth={2.5} /> Solved
                </>
              ) : isSelectedWrong ? (
                <>
                  <X size={11} strokeWidth={2.5} /> Needs Review
                </>
              ) : (
                "Attempted"
              )}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Retry / Try Again Button when locked */}
          {isLocked && (
            <button
              type="button"
              onClick={handleRetry}
              className="text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-300 hover:text-[var(--accent)] dark:hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] transition-colors cursor-pointer"
              title="Reset this question and try again"
              id={`retry-btn-${questionId || "drill"}`}
            >
              <RotateCcw size={12} />
              <span>Try Again</span>
            </button>
          )}

          {/* Solution Toggle Button */}
          {answerKey && (
            <button
              type="button"
              onClick={handleToggleExplanation}
              className="text-xs font-semibold text-[var(--accent)] flex items-center gap-1 hover:underline cursor-pointer"
              id="toggle-solution-btn"
            >
              {showExplanation ? (
                <>
                  <EyeOff size={13} /> Hide Solution
                </>
              ) : (
                <>
                  <Eye size={13} /> View Answer &amp; Explanation
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Question Text */}
      <p className="text-sm font-semibold text-[var(--foreground)] leading-relaxed">
        {question}
      </p>

      {/* Interactive Options Grid */}
      {hasOptions && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {options.map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            const isThisSelected = selectedIndex === i;
            const isThisCorrect = correctIndex === i;

            // Determine styling based on verification state
            let containerStyle =
              "bg-black/[0.02] dark:bg-white/[0.04] border-black/[0.06] dark:border-white/10 text-[var(--foreground)] hover:border-black/25 dark:hover:border-white/25 hover:bg-black/[0.04] dark:hover:bg-white/[0.08] cursor-pointer";
            let badgeStyle =
              "bg-black/[0.05] dark:bg-white/10 text-[var(--foreground)]";

            if (isAnswered) {
              if (isThisSelected) {
                if (isThisCorrect) {
                  // User chose correct answer
                  containerStyle =
                    "bg-emerald-500/10 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-100 ring-1 ring-emerald-500/30 shadow-xs";
                  badgeStyle = "bg-emerald-500 text-white";
                } else {
                  // User chose wrong answer
                  containerStyle =
                    "bg-rose-500/10 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-100 ring-1 ring-rose-500/30 shadow-xs";
                  badgeStyle = "bg-rose-500 text-white";
                }
              } else if (isThisCorrect) {
                // Correct answer revealed when user picked wrong answer
                containerStyle =
                  "bg-emerald-500/10 dark:bg-emerald-950/30 border-emerald-500/80 border-dashed text-emerald-950 dark:text-emerald-100";
                badgeStyle = "bg-emerald-500/80 text-white";
              } else {
                // Other non-selected options while locked
                containerStyle =
                  "opacity-45 cursor-not-allowed bg-black/[0.01] dark:bg-white/[0.02] border-black/[0.04] dark:border-white/5 text-[var(--text-secondary)]";
                badgeStyle =
                  "bg-black/[0.03] dark:bg-white/[0.05] text-[var(--text-secondary)]";
              }
            }

            return (
              <button
                key={i}
                type="button"
                role="button"
                disabled={isLocked}
                onClick={() => handleSelectOption(i)}
                id={`option-${questionId || "drill"}-${letter.toLowerCase()}`}
                aria-label={`Option ${letter}: ${opt}`}
                aria-pressed={isThisSelected}
                className={`w-full p-3 rounded-xl border text-left transition-all duration-200 select-none flex flex-col justify-center ${containerStyle}`}
              >
                <div className="flex items-center gap-2.5 w-full">
                  {/* Option Letter Badge */}
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] flex-shrink-0 transition-colors ${badgeStyle}`}
                  >
                    {isThisSelected && isThisCorrect ? (
                      <Check size={13} strokeWidth={2.5} />
                    ) : isThisSelected && !isThisCorrect ? (
                      <X size={13} strokeWidth={2.5} />
                    ) : (
                      letter
                    )}
                  </span>

                  {/* Option Text */}
                  <span className="text-xs font-medium leading-relaxed flex-1 break-words">
                    {opt}
                  </span>

                  {/* Right-side status icon */}
                  {isThisSelected && isThisCorrect && (
                    <CheckCircle2
                      size={16}
                      className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 ml-1 animate-scale-in"
                    />
                  )}
                  {isThisSelected && !isThisCorrect && (
                    <XCircle
                      size={16}
                      className="text-rose-600 dark:text-rose-400 flex-shrink-0 ml-1 animate-scale-in"
                    />
                  )}
                  {!isThisSelected && isThisCorrect && isAnswered && (
                    <CheckCircle2
                      size={16}
                      className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 ml-1 opacity-80"
                    />
                  )}
                </div>

                {/* Inline Instant Verification Feedback Label */}
                {isThisSelected && isThisCorrect && (
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 mt-1.5 pl-8 animate-fade-in">
                    <Check size={12} strokeWidth={3} />
                    <span>Correct Answer!</span>
                  </div>
                )}
                {isThisSelected && !isThisCorrect && (
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-700 dark:text-rose-300 mt-1.5 pl-8 animate-fade-in">
                    <X size={12} strokeWidth={3} />
                    <span>Incorrect Answer</span>
                  </div>
                )}
                {!isThisSelected && isThisCorrect && isAnswered && (
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 mt-1.5 pl-8 animate-fade-in">
                    <Check size={12} strokeWidth={3} />
                    <span>Correct Answer</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Expandable Explanation & Answer Key */}
      {showExplanation && (
        <div className="p-3.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/50 border border-emerald-200/50 dark:border-emerald-800/50 text-xs space-y-1.5 animate-fade-in">
          {answerKey && (
            <p className="font-bold text-emerald-800 dark:text-emerald-300">
              Answer Key: {answerKey}
            </p>
          )}
          {explanation && (
            <p className="text-emerald-900 dark:text-emerald-200 leading-relaxed">
              {explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
