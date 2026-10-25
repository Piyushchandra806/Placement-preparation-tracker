/**
 * LearnBasicEnglishSection — Compact Beginner English Learning Section
 *
 * Teaches 3–5 beginner-friendly English sentence patterns with:
 * - English sentence with TTS pronunciation
 * - Hindi meaning in authentic Devanagari script
 * - Simple grammatical sentence pattern
 * - Short practical example
 *
 * Designed to fit seamlessly and compactly inside the existing Mission 90 daily task card.
 */
"use client";

import { useState, useRef, useEffect } from "react";
import { Languages, Volume2, VolumeX, ChevronDown, ChevronUp } from "lucide-react";
import { getBasicEnglishLesson } from "@/lib/basic-english-lessons";
import SentenceFormationPractice from "./SentenceFormationPractice";
import RelatedInterviewQuestionSection from "./RelatedInterviewQuestionSection";

export default function LearnBasicEnglishSection({ day = 1, accentColor = "#00b894" }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [speakingIndex, setSpeakingIndex] = useState(-1);
  const lesson = getBasicEnglishLesson(day);

  // Stop any active speech on unmount or day change
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [day]);

  const handleSpeak = (text, index) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (speakingIndex === index) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(-1);
      return;
    }

    window.speechSynthesis.cancel();
    setSpeakingIndex(index);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9; // Clear, beginner-friendly pace

    // Try to find a clear English voice
    const voices = window.speechSynthesis.getVoices() || [];
    const englishVoice =
      voices.find((v) => v.lang.startsWith("en-") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha"))) ||
      voices.find((v) => v.lang.startsWith("en"));
    if (englishVoice) utterance.voice = englishVoice;

    utterance.onend = () => setSpeakingIndex(-1);
    utterance.onerror = () => setSpeakingIndex(-1);

    window.speechSynthesis.speak(utterance);
  };

  if (!lesson || !lesson.sentences || lesson.sentences.length === 0) {
    return null;
  }

  return (
    <div
      id="learn-basic-english-section"
      className="p-4 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 space-y-3 transition-all"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-300 uppercase tracking-wide flex items-center gap-1.5">
            <Languages size={14} style={{ color: accentColor }} />
            Learn Basic English
          </p>
          {lesson.patternFocus && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
              {lesson.patternFocus}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-xs font-semibold text-[var(--accent)] flex items-center gap-1 hover:underline cursor-pointer"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse Learn Basic English" : "Expand Learn Basic English"}
        >
          {isExpanded ? (
            <>
              <ChevronUp size={13} />
              <span>Hide</span>
            </>
          ) : (
            <>
              <ChevronDown size={13} />
              <span>Show ({lesson.sentences.length} Sentences)</span>
            </>
          )}
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="space-y-2.5 animate-fade-in pt-1">
          <p className="text-xs text-[var(--text-secondary)] dark:text-zinc-400 font-medium">
            Beginner-friendly sentence patterns with Hindi meaning for Day {day}:
          </p>

          <div className="space-y-2">
            {lesson.sentences.map((sentence, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/10 space-y-1.5 hover:bg-black/[0.035] dark:hover:bg-white/[0.06] transition-colors"
              >
                {/* 1. English Sentence with TTS Pronunciation Button */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 flex-1 min-w-0">
                    <span className="w-5 h-5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-[var(--foreground)] dark:text-white leading-snug break-words">
                      {sentence.english}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSpeak(sentence.english, index)}
                    className="p-1 rounded-md text-[var(--text-tertiary)] hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors flex-shrink-0 cursor-pointer"
                    title="Listen to pronunciation"
                    aria-label={`Listen to ${sentence.english}`}
                  >
                    {speakingIndex === index ? (
                      <VolumeX size={14} className="text-emerald-600 dark:text-emerald-400 animate-pulse" />
                    ) : (
                      <Volume2 size={14} />
                    )}
                  </button>
                </div>

                {/* 2. Hindi Meaning in Devanagari */}
                <div className="pl-7">
                  <p className="text-xs font-medium text-emerald-800 dark:text-emerald-300 leading-relaxed">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600/80 dark:text-emerald-400/80 mr-1.5">
                      हिंदी:
                    </span>
                    {sentence.hindi}
                  </p>
                </div>

                {/* 3. Simple Sentence Pattern */}
                <div className="pl-7 pt-0.5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.08] text-[var(--text-secondary)] dark:text-zinc-300 border border-black/[0.05] dark:border-white/10">
                    <span className="font-semibold text-zinc-500 dark:text-zinc-400">Pattern:</span>{" "}
                    {sentence.pattern}
                  </span>
                </div>

                {/* 4. Practical Short Example (when present) */}
                {sentence.example && (
                  <div className="pl-7 pt-0.5 text-[11px] text-[var(--text-secondary)] dark:text-zinc-400 flex items-start gap-1">
                    <span className="font-semibold text-zinc-500 dark:text-zinc-400 flex-shrink-0">
                      Example:
                    </span>
                    <span className="italic leading-relaxed">{sentence.example}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 2. Sentence Formation Practice (Directly below basic sentences) */}
          {lesson.practice && lesson.practice.length > 0 && (
            <SentenceFormationPractice
              practiceList={lesson.practice}
              accentColor={accentColor}
            />
          )}

          {/* 3. Related Interview Question and Sample Answer */}
          {lesson.interviewQuestion && (
            <RelatedInterviewQuestionSection
              interviewData={lesson.interviewQuestion}
              day={day}
              accentColor={accentColor}
            />
          )}
        </div>
      )}
    </div>
  );
}
