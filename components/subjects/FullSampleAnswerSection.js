"use client";

import { useState, useEffect, useRef } from "react";
import {
  Volume2,
  VolumeX,
  Copy,
  Check,
  Mic,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
  Info,
  Clock,
  FileText,
  AlertCircle
} from "lucide-react";

export default function FullSampleAnswerSection({
  sampleAnswer,
  showFullAnswer,
  onToggleFullAnswer,
  accentColor = "var(--accent)",
  onStartPractice,
}) {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [ttsSupported, setTtsSupported] = useState(true);
  const [ttsError, setTtsError] = useState("");
  const [currentSpeakingIndex, setCurrentSpeakingIndex] = useState(-1);

  const utterancesRef = useRef([]);
  const activeChunkIndexRef = useRef(0);
  const isStoppedManuallyRef = useRef(false);

  // Check speech synthesis support on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
        setTtsSupported(false);
      }
    }
  }, []);

  // Stop speech if prompt or day changes, or on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, [sampleAnswer?.text]);

  const stopSpeech = () => {
    isStoppedManuallyRef.current = true;
    if (typeof window !== "undefined" && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (err) {
        console.warn("Speech synthesis cancel warning:", err);
      }
    }
    setIsSpeaking(false);
    setCurrentSpeakingIndex(-1);
    activeChunkIndexRef.current = 0;
  };

  /**
   * Reads the full sample answer aloud using sequential sentence/clause chunks.
   * Chunking ensures browsers like Chrome don't drop audio after 15 seconds.
   */
  const handleReadAloud = () => {
    setTtsError("");

    if (typeof window === "undefined" || !window.speechSynthesis) {
      setTtsError("Text-to-speech is not supported in this browser. Please try Chrome, Edge, or Safari.");
      return;
    }

    if (isSpeaking) {
      stopSpeech();
      return;
    }

    if (!sampleAnswer?.text) {
      setTtsError("No answer text available to read.");
      return;
    }

    // Cancel any ongoing speech across the page
    window.speechSynthesis.cancel();
    isStoppedManuallyRef.current = false;

    // Break text into paragraphs/sentences for reliable streaming TTS
    const paragraphs = sampleAnswer.paragraphs || [sampleAnswer.text];
    const chunks = [];

    paragraphs.forEach((para, pIdx) => {
      // Split paragraph by sentences, keeping punctuation
      const sentences = para.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) || [para];
      sentences.forEach((sent) => {
        const trimmed = sent.trim();
        if (trimmed) {
          chunks.push({ text: trimmed, paragraphIndex: pIdx });
        }
      });
    });

    if (chunks.length === 0) return;

    activeChunkIndexRef.current = 0;
    setIsSpeaking(true);

    // Pick English voice if available
    const voices = window.speechSynthesis.getVoices() || [];
    const englishVoice =
      voices.find((v) => v.lang.startsWith("en-") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha"))) ||
      voices.find((v) => v.lang.startsWith("en"));

    const speakChunk = (index) => {
      if (isStoppedManuallyRef.current) return;
      if (index >= chunks.length) {
        setIsSpeaking(false);
        setCurrentSpeakingIndex(-1);
        activeChunkIndexRef.current = 0;
        return;
      }

      activeChunkIndexRef.current = index;
      setCurrentSpeakingIndex(chunks[index].paragraphIndex);

      const utterance = new SpeechSynthesisUtterance(chunks[index].text);
      if (englishVoice) utterance.voice = englishVoice;
      utterance.rate = 0.95; // Calm, clear, natural pace
      utterance.pitch = 1.0;
      utterance.lang = "en-US";

      utterance.onend = () => {
        if (!isStoppedManuallyRef.current) {
          speakChunk(index + 1);
        }
      };

      utterance.onerror = (e) => {
        console.warn("TTS chunk playback issue:", e);
        if (!isStoppedManuallyRef.current) {
          // If canceled externally or finished
          if (e.error === "canceled" || e.error === "interrupted") {
            setIsSpeaking(false);
            setCurrentSpeakingIndex(-1);
          } else {
            // Attempt to move to next chunk
            speakChunk(index + 1);
          }
        }
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.error("Speech synthesis speak error:", err);
        setTtsError("Unable to trigger voice synthesis on this device.");
        setIsSpeaking(false);
      }
    };

    speakChunk(0);
  };

  /**
   * Copy the complete clean answer text to clipboard
   */
  const handleCopy = async () => {
    if (!sampleAnswer?.text) return;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(sampleAnswer.text);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = sampleAnswer.text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy answer:", err);
    }
  };

  /**
   * Jump user smoothly to the speaking timer / recorder
   */
  const handleStartSpeakingPractice = () => {
    stopSpeech();
    if (onStartPractice) {
      onStartPractice();
    } else {
      const recorderEl =
        document.getElementById("voice-practice-recorder") ||
        document.getElementById("voice-practice-section");
      if (recorderEl) {
        recorderEl.scrollIntoView({ behavior: "smooth", block: "center" });
        recorderEl.classList.add("ring-2", "ring-[var(--accent)]", "ring-offset-2");
        setTimeout(() => {
          recorderEl.classList.remove("ring-2", "ring-[var(--accent)]", "ring-offset-2");
        }, 2000);
      }
    }
  };

  if (!sampleAnswer) return null;

  return (
    <div
      id="full-sample-answer-section"
      className="mt-3.5 rounded-xl border border-indigo-500/20 dark:border-indigo-400/20 bg-gradient-to-br from-indigo-50/70 via-white/80 to-purple-50/40 dark:from-indigo-950/25 dark:via-zinc-900/40 dark:to-purple-950/20 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-sm"
    >
      {/* ─── Header & Toggle Bar ─── */}
      <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3 border-b border-indigo-500/10 dark:border-indigo-400/10">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/15 dark:bg-indigo-400/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
            <BookOpen size={15} />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5 flex-wrap">
              <span>Full Sample Answer — Speak Along</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100/80 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-700/40">
                2-Min Ready Reference
              </span>
            </h4>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
              {sampleAnswer.topic || "Daily Speaking Drill"} • Complete conversational script
            </p>
          </div>
        </div>

        {/* Show / Hide Full Answer Working Button */}
        <button
          type="button"
          onClick={onToggleFullAnswer}
          className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-sm cursor-pointer ${
            showFullAnswer
              ? "bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-300/80 dark:hover:bg-zinc-700"
              : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20"
          }`}
          aria-expanded={showFullAnswer}
          aria-controls="full-sample-answer-content"
          id="toggle-full-sample-answer-btn"
        >
          {showFullAnswer ? (
            <>
              <ChevronUp size={14} />
              <span>Hide Full Answer</span>
            </>
          ) : (
            <>
              <ChevronDown size={14} />
              <span>Show Full Answer</span>
            </>
          )}
        </button>
      </div>

      {/* ─── Collapsed State Preview Teaser ─── */}
      {!showFullAnswer && (
        <div className="p-3 sm:p-3.5 bg-white/40 dark:bg-black/10 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-300">
          <p className="flex items-center gap-2">
            <Sparkles size={13} className="text-amber-500 flex-shrink-0" />
            <span className="truncate">
              Stuck on what to say? Click &quot;Show Full Answer&quot; to reveal a natural, multi-paragraph response.
            </span>
          </p>
          <span className="hidden sm:inline-block text-[11px] text-zinc-400 font-medium ml-2 flex-shrink-0">
            {sampleAnswer.wordCount} words (~2 mins)
          </span>
        </div>
      )}

      {/* ─── Expanded State: Full Sample Answer, Action Bar & Speech Player ─── */}
      {showFullAnswer && (
        <div id="full-sample-answer-content" className="p-3.5 sm:p-5 space-y-4 animate-fade-in">
          {/* Personalization Notice Banner (for personal/behavioral questions) */}
          {sampleAnswer.isPersonal && (
            <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/25 dark:border-amber-400/20 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-200">
              <Info size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Sample Response to Personalize:</span>{" "}
                <span>
                  {sampleAnswer.customizationNote ||
                    "This response provides a realistic speaking template. Customize bracketed details like your degree, college, or specific project with your own authentic background."}
                </span>
              </div>
            </div>
          )}

          {/* Quick Metrics & Pacing Pill */}
          <div className="flex items-center justify-between flex-wrap gap-2 text-[11px] text-zinc-500 dark:text-zinc-400 border-b border-black/5 dark:border-white/5 pb-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 font-medium">
                <Clock size={12} className="text-indigo-500" />
                <span>Target Pace: ~2 Minutes</span>
              </span>
              <span className="flex items-center gap-1 font-medium">
                <FileText size={12} className="text-purple-500" />
                <span>{sampleAnswer.wordCount} Words</span>
              </span>
            </div>
            {sampleAnswer.speakingTip && (
              <span className="hidden md:inline-flex items-center gap-1 italic text-zinc-500 dark:text-zinc-400 text-[10px]">
                <Sparkles size={11} className="text-amber-500" />
                {sampleAnswer.speakingTip}
              </span>
            )}
          </div>

          {/* Full Multi-Paragraph Spoken Answer Text */}
          <div className="p-4 sm:p-5 rounded-xl bg-white/80 dark:bg-black/25 border border-black/5 dark:border-white/10 shadow-inner">
            <div className="space-y-3.5 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-normal">
              {sampleAnswer.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={`transition-colors rounded-md p-1 -m-1 ${
                    isSpeaking && currentSpeakingIndex === idx
                      ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-200 font-medium"
                      : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Pro Speaking Tip (Mobile & Tablet) */}
          {sampleAnswer.speakingTip && (
            <div className="md:hidden text-[11px] p-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/5 text-zinc-600 dark:text-zinc-400 flex items-start gap-1.5">
              <Sparkles size={13} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <span><strong>Speaking Tip:</strong> {sampleAnswer.speakingTip}</span>
            </div>
          )}

          {/* TTS Error Notice if synthesis fails */}
          {ttsError && (
            <div className="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
              <AlertCircle size={14} className="flex-shrink-0" />
              <span>{ttsError}</span>
            </div>
          )}

          {/* ─── Practice & Action Controls ─── */}
          <div className="pt-1 flex items-center justify-between flex-wrap gap-2.5">
            <div className="flex items-center gap-2 flex-wrap">
              {/* Copy Answer Button */}
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700/80 border border-black/10 dark:border-white/10 flex items-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-95"
                title="Copy complete answer to clipboard"
                id="copy-sample-answer-btn"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Answer</span>
                  </>
                )}
              </button>

              {/* Read Aloud / Stop Reading Button (TTS) */}
              <button
                type="button"
                onClick={handleReadAloud}
                className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-95 ${
                  isSpeaking
                    ? "bg-amber-500 hover:bg-amber-600 text-white animate-pulse"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20"
                }`}
                title={isSpeaking ? "Stop speech playback" : "Listen to full answer read aloud"}
                id="read-aloud-sample-answer-btn"
              >
                {isSpeaking ? (
                  <>
                    <VolumeX size={14} />
                    <span>Stop Reading</span>
                  </>
                ) : (
                  <>
                    <Volume2 size={14} />
                    <span>Read Aloud</span>
                  </>
                )}
              </button>
            </div>

            {/* Jump to Speaking Timer / Recorder */}
            <button
              type="button"
              onClick={handleStartSpeakingPractice}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-light)] flex items-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95"
              id="start-speaking-from-sample-btn"
              title="Jump down to live voice recorder and speaking timer"
            >
              <Mic size={14} />
              <span>Start Speaking Practice</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
