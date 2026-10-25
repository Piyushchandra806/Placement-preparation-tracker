/**
 * SentenceFormationPractice — Compact Sentence Formation Practice Section
 *
 * Implements:
 * 1. 2–3 Hindi sentences based on the exact English patterns taught immediately above.
 * 2. Small input field for English translation.
 * 3. Check Answer button with intelligent normalization & contraction support.
 * 4. Show Answer / Hide Answer toggle controls.
 * 5. Explanations and corrections in simple, learner-friendly Hindi.
 * 6. Never reveals answers automatically on incorrect attempt.
 * 7. Graded difficulty (Easy -> Medium -> Challenging).
 * 8. Compact styling consistent with Mission 90 design system.
 */
"use client";

import { useState, useEffect } from "react";
import {
  PenLine,
  Check,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Sparkles,
  Volume2,
  VolumeX,
  RotateCcw,
} from "lucide-react";
import { checkSentenceAnswer } from "@/lib/basic-english-lessons";

export default function SentenceFormationPractice({
  practiceList = [],
  accentColor = "#00b894",
}) {
  // State for user inputs per exercise ID
  const [userInputs, setUserInputs] = useState({});
  // State for checked results per exercise ID: { [id]: { checked: boolean, isCorrect: boolean } }
  const [evaluations, setEvaluations] = useState({});
  // State for revealed answer toggles per exercise ID: { [id]: boolean }
  const [revealedAnswers, setRevealedAnswers] = useState({});
  // Active TTS speaking item ID
  const [speakingId, setSpeakingId] = useState(null);

  // Reset inputs when practice list changes (e.g. day changed)
  useEffect(() => {
    setUserInputs({});
    setEvaluations({});
    setRevealedAnswers({});
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, [practiceList]);

  if (!practiceList || practiceList.length === 0) {
    return null;
  }

  const handleInputChange = (id, value) => {
    setUserInputs((prev) => ({ ...prev, [id]: value }));
    // Reset checked status when user modifies input after failure
    if (evaluations[id] && !evaluations[id].isCorrect) {
      setEvaluations((prev) => ({ ...prev, [id]: null }));
    }
  };

  const handleCheckAnswer = (item) => {
    const input = userInputs[item.id] || "";
    if (!input.trim()) return;

    const isCorrect = checkSentenceAnswer(
      input,
      item.expected,
      item.acceptedAnswers || []
    );

    setEvaluations((prev) => ({
      ...prev,
      [item.id]: {
        checked: true,
        isCorrect,
      },
    }));
  };

  const toggleShowAnswer = (id) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleResetItem = (id) => {
    setUserInputs((prev) => ({ ...prev, [id]: "" }));
    setEvaluations((prev) => ({ ...prev, [id]: null }));
    setRevealedAnswers((prev) => ({ ...prev, [id]: false }));
  };

  const handleSpeak = (text, id) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    setSpeakingId(id);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices() || [];
    const englishVoice =
      voices.find(
        (v) =>
          v.lang.startsWith("en-") &&
          (v.name.includes("Natural") ||
            v.name.includes("Google") ||
            v.name.includes("Samantha"))
      ) || voices.find((v) => v.lang.startsWith("en"));
    if (englishVoice) utterance.voice = englishVoice;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
  };

  const correctCount = Object.values(evaluations).filter(
    (e) => e && e.isCorrect
  ).length;

  return (
    <div
      id="sentence-formation-practice"
      className="pt-3 border-t border-black/5 dark:border-white/10 space-y-3"
    >
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold text-[var(--foreground)] dark:text-zinc-200 uppercase tracking-wide flex items-center gap-1.5">
            <PenLine size={13} style={{ color: accentColor }} />
            Sentence Formation Practice
          </p>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
            Translate to English
          </span>
        </div>

        <span className="text-[11px] font-semibold text-[var(--text-secondary)] dark:text-zinc-400">
          {correctCount} of {practiceList.length} Solved
        </span>
      </div>

      <p className="text-xs text-[var(--text-secondary)] dark:text-zinc-400">
        Translate the Hindi sentences below into English using the patterns you just learned:
      </p>

      {/* Graded Exercises List (Easy -> Medium -> Challenging) */}
      <div className="space-y-2.5">
        {practiceList.map((item, index) => {
          const evalState = evaluations[item.id];
          const isRevealed = !!revealedAnswers[item.id];
          const currentInput = userInputs[item.id] || "";

          // Badge style for difficulty progression
          const difficultyBadge =
            item.difficulty === "Easy"
              ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60"
              : item.difficulty === "Medium"
              ? "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60"
              : "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60";

          return (
            <div
              key={item.id || index}
              className={`p-3.5 rounded-xl bg-black/[0.015] dark:bg-white/[0.03] border transition-all space-y-2.5 ${
                evalState?.isCorrect
                  ? "border-emerald-300/80 dark:border-emerald-800/80 bg-emerald-50/20 dark:bg-emerald-950/20"
                  : evalState && !evalState.isCorrect
                  ? "border-rose-300/80 dark:border-rose-800/80"
                  : "border-black/[0.05] dark:border-white/10"
              }`}
            >
              {/* Question Header: Difficulty & Show/Hide Controls */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${difficultyBadge}`}
                  >
                    {item.difficulty || `Q${index + 1}`}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] dark:text-zinc-400">
                    Pattern: {item.pattern}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Reset Button (only if modified or checked) */}
                  {(currentInput || evalState) && (
                    <button
                      type="button"
                      onClick={() => handleResetItem(item.id)}
                      className="text-[11px] text-[var(--text-tertiary)] hover:text-[var(--foreground)] dark:hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                      title="Reset answer"
                    >
                      <RotateCcw size={11} /> Reset
                    </button>
                  )}

                  {/* Show / Hide Answer Button */}
                  <button
                    type="button"
                    onClick={() => toggleShowAnswer(item.id)}
                    className="text-[11px] font-semibold text-[var(--accent)] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                    aria-label={isRevealed ? "Hide Answer" : "Show Answer"}
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff size={12} /> Hide Answer
                      </>
                    ) : (
                      <>
                        <Eye size={12} /> Show Answer
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Hindi Prompt */}
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex-shrink-0">
                  हिंदी:
                </span>
                <p className="text-sm font-semibold text-[var(--foreground)] dark:text-zinc-100 leading-snug">
                  {item.hindi}
                </p>
              </div>

              {/* Input Form with Small Input Field & Check Answer Button */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCheckAnswer(item);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                  placeholder="Type your English translation here..."
                  disabled={evalState?.isCorrect}
                  className={`flex-1 px-3 py-1.5 text-xs rounded-lg bg-white dark:bg-white/[0.06] border text-[var(--foreground)] dark:text-white placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-1.5 transition-all shadow-2xs ${
                    evalState?.isCorrect
                      ? "border-emerald-400 bg-emerald-50/30 dark:bg-emerald-950/30"
                      : evalState && !evalState.isCorrect
                      ? "border-rose-400 focus:ring-rose-400"
                      : "border-black/10 dark:border-white/15 focus:ring-[var(--accent)]"
                  }`}
                  aria-label={`English translation for: ${item.hindi}`}
                />

                <button
                  type="submit"
                  disabled={!currentInput.trim() || evalState?.isCorrect}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all shadow-2xs cursor-pointer ${
                    evalState?.isCorrect
                      ? "bg-emerald-600 text-white cursor-default"
                      : "bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] disabled:opacity-40 disabled:cursor-not-allowed"
                  }`}
                >
                  <Check size={12} />
                  {evalState?.isCorrect ? "Correct ✓" : "Check Answer"}
                </button>
              </form>

              {/* Feedback and Simple Hindi Corrections */}
              {evalState && (
                <div
                  className={`p-2.5 rounded-lg text-xs space-y-1 animate-fade-in ${
                    evalState.isCorrect
                      ? "bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200"
                      : "bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-800/60 text-rose-900 dark:text-rose-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 font-bold">
                      {evalState.isCorrect ? (
                        <>
                          <CheckCircle2
                            size={14}
                            className="text-emerald-600 dark:text-emerald-400"
                          />
                          <span>Correct! बहुत बढ़िया! बिल्कुल सही अनुवाद।</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle
                            size={14}
                            className="text-rose-600 dark:text-rose-400"
                          />
                          <span>थोड़ी गलती है — नीचे सुधार समझें और दोबारा प्रयास करें:</span>
                        </>
                      )}
                    </div>

                    {evalState.isCorrect && (
                      <button
                        type="button"
                        onClick={() => handleSpeak(item.expected, item.id)}
                        className="p-1 rounded text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                        title="Listen to correct sentence"
                      >
                        {speakingId === item.id ? (
                          <VolumeX size={13} className="animate-pulse" />
                        ) : (
                          <Volume2 size={13} />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Hindi Explanation of the Rule & Correction */}
                  <p className="text-[11px] leading-relaxed text-zinc-700 dark:text-zinc-300 pl-5">
                    {item.explanation}
                  </p>
                </div>
              )}

              {/* Revealed Answer (Toggled on user request) */}
              {isRevealed && (
                <div className="p-2.5 rounded-lg bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/60 text-xs space-y-1.5 animate-fade-in">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-xs">
                      <Sparkles size={12} className="text-amber-600 dark:text-amber-400" />
                      Expected English Answer:
                    </p>
                    <button
                      type="button"
                      onClick={() => handleSpeak(item.expected, `rev-${item.id}`)}
                      className="p-1 rounded text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors"
                      title="Listen to answer"
                    >
                      {speakingId === `rev-${item.id}` ? (
                        <VolumeX size={13} className="animate-pulse" />
                      ) : (
                        <Volume2 size={13} />
                      )}
                    </button>
                  </div>

                  <p className="font-mono text-xs text-amber-950 dark:text-amber-100 bg-white/80 dark:bg-black/30 p-2 rounded-md border border-amber-200/50 dark:border-amber-800/40 font-bold">
                    &quot;{item.expected}&quot;
                  </p>

                  <p className="text-[11px] text-amber-900 dark:text-amber-200 leading-relaxed">
                    <span className="font-semibold">व्याख्या:</span> {item.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
