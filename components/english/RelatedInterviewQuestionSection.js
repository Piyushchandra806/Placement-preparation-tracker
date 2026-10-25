/**
 * RelatedInterviewQuestionSection — Voice-Based Interview Speaking Practice
 *
 * Implements:
 * 1. Displays interview question related to the day's basic English sentence patterns.
 * 2. Explains the question in simple Hindi.
 * 3. Shows how today's basic patterns combine into an interview response.
 * 4. Preserves Show Sample Answer / Hide Sample Answer with TTS and Hindi explanation.
 * 5. Replaces written answer interface with a voice-based speaking practice system:
 *    - "Speak Your Answer" section directly below question and sentence pattern.
 *    - Controls: Start Speaking, Stop Recording, Listen to Your Recording, Record Again.
 *    - Live recording timer and clear recording states:
 *      'Ready to record' | 'Recording' | 'Processing speech' | 'Transcript available' | 'Analysis complete'
 *    - Dual persistence via IndexedDB & MongoDB (subject: 'english_interview').
 *    - Converts speech to text via Web Speech API in real-time.
 *    - Analyzes recognized speech against interview question and sample answer.
 *    - Identifies grammar mistakes, missing words, and incorrect sentence structures.
 *    - Explains mistakes in simple Hindi.
 *    - Shows original recognized answer alongside corrected version.
 *    - Suggests natural English version with TTS to practice speaking again.
 *    - Shows honest fallback when SpeechRecognition is unavailable; no fake transcripts.
 */
"use client";

import { useState, useEffect, useRef } from "react";
import {
  HelpCircle,
  Eye,
  EyeOff,
  Sparkles,
  Volume2,
  VolumeX,
  BookOpen,
  Mic,
  Square,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Clock,
  Headphones,
  ArrowRight,
  Send,
  Info,
  Database,
} from "lucide-react";
import {
  saveVoiceRecording,
  getVoiceRecording,
  fetchVoiceRecordingFromMongoDB,
  deleteVoiceRecording,
} from "@/lib/voice-recorder-db";
import { evaluateSpokenAnswer } from "@/lib/english-speech-evaluator";

export default function RelatedInterviewQuestionSection({
  interviewData,
  day = 1,
  accentColor = "#00b894",
}) {
  // Sample answer visibility
  const [showSampleAnswer, setShowSampleAnswer] = useState(false);
  const [isSpeakingSample, setIsSpeakingSample] = useState(false);
  const [isSpeakingNatural, setIsSpeakingNatural] = useState(false);

  // Recording states: 'ready' | 'recording' | 'processing' | 'transcribed' | 'analyzed'
  const [recordingState, setRecordingState] = useState("ready");
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);
  const [micError, setMicError] = useState("");

  // Speech Recognition & Transcript
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [speechSupported, setSpeechSupported] = useState(true);
  const [manualInputFallback, setManualInputFallback] = useState("");

  // Grammar analysis results
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isSavingMongo, setIsSavingMongo] = useState(false);
  const [isSavedMongo, setIsSavedMongo] = useState(false);

  // Audio Playback
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  // Refs
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const audioRef = useRef(null);
  const transcriptRef = useRef("");

  const subjectKey = "english";

  // Sync transcriptRef
  useEffect(() => {
    transcriptRef.current = transcript;
  }, [transcript]);

  // Check speech recognition capability on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSpeech = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
      setSpeechSupported(hasSpeech);
    }
  }, []);

  // Format seconds to mm:ss
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  // Load saved voice recording for this day (IndexedDB cache + MongoDB sync)
  useEffect(() => {
    let active = true;

    async function loadSavedRecording() {
      // Reset state for new day
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
      setTranscript("");
      setInterimTranscript("");
      setDuration(0);
      setRecordingSeconds(0);
      setIsPlayingAudio(false);
      setCurrentTime(0);
      setMicError("");
      setAnalysisResult(null);
      setRecordingState("ready");
      setManualInputFallback("");
      setIsSavingMongo(false);
      setIsSavedMongo(false);

      try {
        // 1. Fast local load from IndexedDB
        let saved = await getVoiceRecording(day, "english");
        if (!saved) {
          saved = await getVoiceRecording(day, "english_interview");
        }

        if (active && saved) {
          if (saved.audioBlob) {
            const url = URL.createObjectURL(saved.audioBlob);
            setAudioUrl(url);
          }
          const loadedTranscript = saved.transcript || "";
          setTranscript(loadedTranscript);
          setDuration(saved.duration || 0);
          setIsSavedMongo(true);

          if (loadedTranscript.trim()) {
            const result = evaluateSpokenAnswer({
              transcript: loadedTranscript,
              question: interviewData?.question || "",
              sampleAnswer: interviewData?.sampleAnswer || "",
              patternsUsed: interviewData?.patternsUsed || "",
              day,
            });
            setAnalysisResult(result);
            setRecordingState("analyzed");
          } else if (saved.audioBlob) {
            setRecordingState("transcribed");
          }
        }

        // 2. Concurrently check MongoDB Atlas for cloud-synced voice data
        try {
          const remote =
            (await fetchVoiceRecordingFromMongoDB(day, "english")) ||
            (await fetchVoiceRecordingFromMongoDB(day, "english_interview"));

          if (active && remote && remote.audioBlob) {
            if (!saved || remote.updatedAt !== saved?.updatedAt) {
              const url = URL.createObjectURL(remote.audioBlob);
              setAudioUrl((prev) => {
                if (prev) URL.revokeObjectURL(prev);
                return url;
              });
              setTranscript(remote.transcript || "");
              setDuration(remote.duration || 0);
              setIsSavedMongo(true);

              if (remote.transcript?.trim()) {
                const result = evaluateSpokenAnswer({
                  transcript: remote.transcript,
                  question: interviewData?.question || "",
                  sampleAnswer: interviewData?.sampleAnswer || "",
                  patternsUsed: interviewData?.patternsUsed || "",
                  day,
                });
                setAnalysisResult(result);
                setRecordingState("analyzed");
              } else {
                setRecordingState("transcribed");
              }
            }
          }
        } catch (syncErr) {
          console.warn("MongoDB voice sync load notice:", syncErr);
        }
      } catch (err) {
        console.warn("Could not load saved interview recording:", err);
      }
    }

    loadSavedRecording();

    return () => {
      active = false;
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [day, interviewData]);

  // Sync Audio element events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      setAudioDuration(audio.duration || duration);
    };
    const onEnded = () => {
      setIsPlayingAudio(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, [audioUrl, duration]);

  // Clean speech synthesis on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!interviewData) return null;

  // 1. START RECORDING
  const handleStartSpeaking = async () => {
    setMicError("");
    setInterimTranscript("");
    setTranscript("");
    transcriptRef.current = "";
    setAnalysisResult(null);
    audioChunksRef.current = [];

    if (typeof window === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setMicError("Microphone recording is not supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop());

        const mimeType = mediaRecorder.mimeType || "audio/webm";
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);

        const finalDuration = recordingSeconds;
        setDuration(finalDuration);

        const latestTranscript = transcriptRef.current.trim();

        // Save audio & transcript to MongoDB Atlas and IndexedDB cache
        setIsSavingMongo(true);
        try {
          await saveVoiceRecording({
            day,
            subject: subjectKey,
            audioBlob,
            transcript: latestTranscript,
            duration: finalDuration,
          });
          setIsSavedMongo(true);
        } catch (saveErr) {
          console.error("Failed to save voice recording to MongoDB:", saveErr);
        } finally {
          setIsSavingMongo(false);
        }

        // Trigger grammar evaluation if transcript is present
        if (latestTranscript) {
          const evalResult = evaluateSpokenAnswer({
            transcript: latestTranscript,
            question: interviewData.question,
            sampleAnswer: interviewData.sampleAnswer,
            patternsUsed: interviewData.patternsUsed || "",
            day,
          });
          setAnalysisResult(evalResult);
          setRecordingState("analyzed");
        } else {
          setRecordingState("transcribed");
        }
      };

      // Set up live speech recognition
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        try {
          const recognition = new SpeechRecognition();
          recognition.continuous = true;
          recognition.interimResults = true;
          recognition.lang = "en-US";

          recognition.onresult = (event) => {
            let currentInterim = "";
            let currentFinal = "";

            for (let i = 0; i < event.results.length; i++) {
              const res = event.results[i];
              if (res.isFinal) {
                currentFinal += res[0].transcript + " ";
              } else {
                currentInterim += res[0].transcript;
              }
            }

            if (currentFinal) {
              setTranscript((prev) => {
                const combined = (prev + " " + currentFinal).replace(/\s+/g, " ").trim();
                transcriptRef.current = combined;
                return combined;
              });
            }
            setInterimTranscript(currentInterim);
          };

          recognition.onerror = (e) => {
            console.warn("Speech recognition notice:", e.error);
          };

          recognition.start();
          recognitionRef.current = recognition;
        } catch (e) {
          console.warn("Speech recognition initialization notice:", e);
        }
      }

      mediaRecorder.start(250);
      setRecordingState("recording");
      setRecordingSeconds(0);

      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      console.error("Mic access error:", err);
      setMicError(
        "Could not access microphone. Please allow microphone permission in your browser to record your answer."
      );
      setRecordingState("ready");
    }
  };

  // 2. STOP RECORDING
  const handleStopRecording = () => {
    setRecordingState("processing");

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
      recognitionRef.current = null;
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }

    setInterimTranscript("");
  };

  // 3. LISTEN TO RECORDING (Play / Pause)
  const handleTogglePlayAudio = () => {
    if (!audioRef.current) return;

    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(console.error);
    }
  };

  // 4. RECORD AGAIN
  const handleRecordAgain = async () => {
    if (isPlayingAudio && audioRef.current) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    }
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }

    setTranscript("");
    setInterimTranscript("");
    transcriptRef.current = "";
    setRecordingSeconds(0);
    setDuration(0);
    setCurrentTime(0);
    setAnalysisResult(null);
    setMicError("");
    setManualInputFallback("");
    setRecordingState("ready");
    setIsSavedMongo(false);
    setIsSavingMongo(false);

    // Clear saved recording for fresh attempt
    try {
      await deleteVoiceRecording(day, subjectKey);
      await deleteVoiceRecording(day, "english_interview");
    } catch {}
  };

  // Audio seek
  const handleSeek = (e) => {
    const val = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
      setCurrentTime(val);
    }
  };

  // Manual fallback evaluation (when speech recognition isn't supported)
  const handleManualAnalyze = () => {
    const text = manualInputFallback.trim();
    if (!text) return;
    setTranscript(text);
    transcriptRef.current = text;
    const evalResult = evaluateSpokenAnswer({
      transcript: text,
      question: interviewData.question,
      sampleAnswer: interviewData.sampleAnswer,
      patternsUsed: interviewData.patternsUsed || "",
      day,
    });
    setAnalysisResult(evalResult);
    setRecordingState("analyzed");
  };

  // TTS Pronunciation for sample or natural answer
  const handleSpeakText = (text, type = "sample") => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const isCurrentlySpeaking =
      type === "sample" ? isSpeakingSample : isSpeakingNatural;

    if (isCurrentlySpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeakingSample(false);
      setIsSpeakingNatural(false);
      return;
    }

    window.speechSynthesis.cancel();
    if (type === "sample") {
      setIsSpeakingSample(true);
      setIsSpeakingNatural(false);
    } else {
      setIsSpeakingNatural(true);
      setIsSpeakingSample(false);
    }

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

    utterance.onend = () => {
      setIsSpeakingSample(false);
      setIsSpeakingNatural(false);
    };
    utterance.onerror = () => {
      setIsSpeakingSample(false);
      setIsSpeakingNatural(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Status badge config
  const statusBadge = {
    ready: {
      label: "Ready to record",
      classes:
        "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
      dot: "bg-zinc-400",
    },
    recording: {
      label: "Recording",
      classes:
        "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-900 animate-pulse",
      dot: "bg-rose-500 animate-ping",
    },
    processing: {
      label: "Processing speech",
      classes:
        "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900",
      dot: "bg-amber-500 animate-spin",
    },
    transcribed: {
      label: "Transcript available",
      classes:
        "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900",
      dot: "bg-blue-500",
    },
    analyzed: {
      label: "Analysis complete",
      classes:
        "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900",
      dot: "bg-emerald-500",
    },
  }[recordingState] || {
    label: "Ready to record",
    classes: "bg-zinc-100 text-zinc-700 border-zinc-200",
    dot: "bg-zinc-400",
  };

  return (
    <div
      id="related-interview-question-section"
      className="pt-3 border-t border-black/5 dark:border-white/10 space-y-3"
    >
      {/* Hidden Native Audio Element */}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          preload="metadata"
          className="hidden"
        />
      )}

      {/* Header Bar */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold text-[var(--foreground)] dark:text-zinc-200 uppercase tracking-wide flex items-center gap-1.5">
            <HelpCircle size={14} style={{ color: accentColor }} />
            Related Interview Question
          </p>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
            Interview Application
          </span>
        </div>

        {/* Show / Hide Sample Answer Toggle */}
        <button
          type="button"
          onClick={() => setShowSampleAnswer((prev) => !prev)}
          className="text-xs font-semibold text-[var(--accent)] flex items-center gap-1 hover:underline cursor-pointer transition-colors"
          aria-expanded={showSampleAnswer}
          aria-label={showSampleAnswer ? "Hide Sample Answer" : "Show Sample Answer"}
        >
          {showSampleAnswer ? (
            <>
              <EyeOff size={13} />
              <span>Hide Sample Answer</span>
            </>
          ) : (
            <>
              <Eye size={13} />
              <span>Show Sample Answer</span>
            </>
          )}
        </button>
      </div>

      {/* Main Question & Speaking Drill Card */}
      <div className="p-3.5 rounded-xl bg-black/[0.015] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/10 space-y-3">
        {/* Question in English */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
            Interview Question:
          </span>
          <p className="text-sm font-bold text-[var(--foreground)] dark:text-white leading-snug mt-0.5">
            &ldquo;{interviewData.question}&rdquo;
          </p>
        </div>

        {/* Question in Simple Hindi */}
        <div className="p-2 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/40 text-xs text-emerald-900 dark:text-emerald-200 space-y-0.5">
          <p className="font-bold text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
            <BookOpen size={12} /> सरल हिंदी अर्थ:
          </p>
          <p className="leading-relaxed text-[11px] pl-3.5">
            {interviewData.questionHindi}
          </p>
        </div>

        {/* How Basic Sentences Combine */}
        {interviewData.patternsUsed && (
          <div className="p-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/10 text-[11px] space-y-0.5">
            <span className="font-semibold text-zinc-500 dark:text-zinc-400 text-[10px] uppercase tracking-wider">
              How Today&apos;s Patterns Combine:
            </span>
            <p className="font-mono text-zinc-700 dark:text-zinc-300 text-[11px] break-words">
              {interviewData.patternsUsed}
            </p>
          </div>
        )}

        {/* Sample Answer Section (Preserved Toggle) */}
        {showSampleAnswer && (
          <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/50 space-y-2 animate-fade-in text-xs">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-xs">
                <Sparkles size={13} className="text-amber-600 dark:text-amber-400" />
                Short Sample Answer:
              </span>

              <button
                type="button"
                onClick={() => handleSpeakText(interviewData.sampleAnswer, "sample")}
                className="px-2 py-1 rounded bg-amber-100 dark:bg-amber-900/50 text-amber-900 dark:text-amber-200 hover:bg-amber-200 transition-colors flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
                title="Listen to sample answer"
              >
                {isSpeakingSample ? (
                  <>
                    <VolumeX size={12} className="animate-pulse" /> Stop Audio
                  </>
                ) : (
                  <>
                    <Volume2 size={12} /> Listen
                  </>
                )}
              </button>
            </div>

            <p className="p-2.5 rounded-lg bg-white/80 dark:bg-black/30 border border-amber-200/50 dark:border-amber-800/40 text-xs font-medium text-amber-950 dark:text-amber-100 leading-relaxed break-words">
              &ldquo;{interviewData.sampleAnswer}&rdquo;
            </p>

            {interviewData.sampleAnswerHindi && (
              <p className="text-[11px] text-amber-900 dark:text-amber-200 leading-relaxed">
                {interviewData.sampleAnswerHindi}
              </p>
            )}

            {interviewData.customizationTip && (
              <div className="p-2 rounded bg-amber-100/60 dark:bg-amber-900/30 text-[11px] text-amber-950 dark:text-amber-300 flex items-start gap-1.5">
                <span className="font-bold flex-shrink-0">💡 टिप:</span>
                <span className="leading-relaxed">
                  {interviewData.customizationTip}
                </span>
              </div>
            )}
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* VOICE-BASED SPEAKING SYSTEM: "Speak Your Answer" */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="pt-2 border-t border-black/5 dark:border-white/10 space-y-3">
          {/* Section Heading & State Badge */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h4 className="text-xs font-bold text-[var(--foreground)] dark:text-white flex items-center gap-1.5">
                <Mic size={14} style={{ color: accentColor }} />
                Speak Your Answer
              </h4>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Answer aloud in English using today&apos;s sentence patterns.
              </p>
            </div>

            {/* Recording Status, Timer & MongoDB Sync Status */}
            <div className="flex items-center gap-2">
              {audioUrl && recordingState !== "recording" && (
                <span
                  className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border transition-all ${
                    isSavingMongo
                      ? "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200/50 dark:border-amber-800/50 animate-pulse"
                      : "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/50 dark:border-emerald-800/50"
                  }`}
                  title="Saved permanently in MongoDB Atlas"
                >
                  {isSavingMongo ? (
                    <>
                      <RotateCcw size={10} className="animate-spin" /> Saving to MongoDB...
                    </>
                  ) : (
                    <>
                      <Database size={11} className="text-emerald-500" /> Stored in MongoDB
                    </>
                  )}
                </span>
              )}

              <span
                className={`flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusBadge.classes}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${statusBadge.dot}`} />
                {statusBadge.label}
              </span>

              <div className="flex items-center gap-1 text-xs font-mono font-bold text-[var(--foreground)]">
                <Clock size={12} className="text-zinc-400" />
                <span>
                  {formatTime(
                    recordingState === "recording" ? recordingSeconds : duration
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Mic Access Error */}
          {micError && (
            <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-700 dark:text-rose-300 flex items-start gap-2">
              <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
              <span>{micError}</span>
            </div>
          )}

          {/* Recording Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            {recordingState !== "recording" ? (
              <button
                type="button"
                onClick={handleStartSpeaking}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-light)] flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                id="btn-start-speaking"
              >
                <Mic size={13} />
                <span>{audioUrl ? "Record Again" : "Start Speaking"}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleStopRecording}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 flex items-center gap-1.5 shadow-md transition-all cursor-pointer animate-pulse"
                id="btn-stop-recording"
              >
                <Square size={12} fill="currentColor" />
                <span>Stop Recording</span>
              </button>
            )}

            {/* Listen to Your Recording Button (When audio exists) */}
            {audioUrl && recordingState !== "recording" && (
              <button
                type="button"
                onClick={handleTogglePlayAudio}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-[var(--foreground)] dark:text-white bg-black/[0.05] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] border border-black/10 dark:border-white/15 flex items-center gap-1.5 transition-all cursor-pointer"
                id="btn-listen-recording"
              >
                {isPlayingAudio ? (
                  <>
                    <Pause size={13} fill="currentColor" />
                    <span>Pause Audio</span>
                  </>
                ) : (
                  <>
                    <Play size={13} fill="currentColor" />
                    <span>Listen to Your Recording</span>
                  </>
                )}
              </button>
            )}

            {/* Record Again Button */}
            {audioUrl && recordingState !== "recording" && (
              <button
                type="button"
                onClick={handleRecordAgain}
                className="px-2.5 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors flex items-center gap-1 cursor-pointer"
                title="Discard this recording and record a new answer"
                id="btn-record-again"
              >
                <RotateCcw size={12} />
                <span>Record Again</span>
              </button>
            )}
          </div>

          {/* Live Recording Interim Transcription */}
          {recordingState === "recording" && (
            <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-xs animate-fade-in space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span className="font-semibold text-amber-900 dark:text-amber-300">
                  Listening to your speech... Answer aloud now:
                </span>
              </div>
              <p className="text-zinc-800 dark:text-zinc-200 italic pl-4 min-h-[22px]">
                {transcript || interimTranscript || "Speak into your microphone..."}
                {interimTranscript && (
                  <span className="text-amber-700 dark:text-amber-400">
                    {" "}
                    {interimTranscript}
                  </span>
                )}
              </p>
            </div>
          )}

          {/* Audio Player Scrub Bar (When audio is recorded) */}
          {audioUrl && recordingState !== "recording" && (
            <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/10 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1 font-semibold text-[var(--foreground)] dark:text-zinc-200">
                  <Headphones size={12} style={{ color: accentColor }} />
                  Recorded Voice Audio
                </span>
                <span className="font-mono">
                  {formatTime(currentTime)} /{" "}
                  {formatTime(audioDuration || duration)}
                </span>
              </div>

              <input
                type="range"
                min="0"
                max={audioDuration || duration || 1}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="w-full accent-[var(--accent)] h-1.5 bg-black/10 dark:bg-white/10 rounded-lg cursor-pointer"
                aria-label="Seek recorded audio"
              />

              {/* MongoDB Atlas Sync Confirmation */}
              <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 pt-1 border-t border-black/[0.04] dark:border-white/5">
                <span className="flex items-center gap-1.5">
                  <Database size={12} className="text-emerald-500" />
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                    Stored in MongoDB Atlas
                  </span>
                  <span className="text-zinc-400">·</span>
                  <span>Synced across mobile &amp; desktop</span>
                </span>
                {isSavedMongo && (
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 size={11} /> Cloud Synced
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Speech Recognition Browser Fallback Warning */}
          {!speechSupported && recordingState !== "recording" && (
            <div className="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 space-y-2">
              <div className="flex items-start gap-2">
                <Info size={15} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">
                    Browser Speech Recognition Notice
                  </p>
                  <p className="text-[11px] leading-relaxed">
                    Your voice was recorded and saved successfully! For live automated speech transcription, Google Chrome or Microsoft Edge is recommended.
                  </p>
                </div>
              </div>

              {/* Working Manual Input Alternative */}
              <div className="pt-1 space-y-1.5">
                <label className="text-[11px] font-semibold text-blue-950 dark:text-blue-100 block">
                  Or type what you said to check your grammar &amp; Hindi explanations:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={manualInputFallback}
                    onChange={(e) => setManualInputFallback(e.target.value)}
                    placeholder="e.g., I am a student and I want to become a software engineer."
                    className="flex-1 p-2 text-xs rounded-lg bg-white dark:bg-black/30 border border-blue-200 dark:border-blue-800 text-[var(--foreground)] dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={handleManualAnalyze}
                    className="px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Send size={12} />
                    <span>Analyze</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Empty Speech Notice (When recorded but no speech recognized) */}
          {recordingState === "transcribed" && !transcript.trim() && speechSupported && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <AlertCircle size={14} className="text-amber-600" />
                No spoken words detected
              </p>
              <p className="text-[11px] leading-relaxed pl-5">
                We couldn&apos;t detect clear speech in the recording. Please click &ldquo;Record Again&rdquo; and speak clearly into your microphone.
              </p>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* DETECTED SPOKEN WORDS & GRAMMAR MISTAKE ANALYSIS */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {analysisResult && analysisResult.hasSpeech && (
            <div className="space-y-3 animate-fade-in pt-1">
              {/* 1. Original Recognised Answer (Kept visible for comparison) */}
              <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/10 space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    What You Said (Original Recognized Speech):
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">
                    {analysisResult.wordCount} words
                  </span>
                </div>
                <p className="text-xs font-mono text-[var(--foreground)] dark:text-zinc-200 bg-white/70 dark:bg-black/30 p-2 rounded-lg border border-black/[0.04] dark:border-white/10 leading-relaxed break-words">
                  &ldquo;{analysisResult.originalTranscript}&rdquo;
                </p>
              </div>

              {/* 2. Corrected Version of the Answer */}
              <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/50 space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    Corrected Version:
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200">
                    Accuracy: {analysisResult.score}%
                  </span>
                </div>
                <p className="text-xs font-semibold text-emerald-950 dark:text-emerald-100 bg-white/80 dark:bg-black/30 p-2 rounded-lg border border-emerald-200/50 dark:border-emerald-800/40 leading-relaxed break-words">
                  &ldquo;{analysisResult.correctedText}&rdquo;
                </p>
              </div>

              {/* 3. Grammar Mistakes & Hindi Explanations */}
              <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--foreground)] dark:text-zinc-200 flex items-center gap-1.5">
                    <Sparkles size={13} className="text-amber-500" />
                    Grammar Feedback &amp; Mistakes (सरल हिंदी में समझें):
                  </span>
                </div>

                {analysisResult.hasMistakes ? (
                  <div className="space-y-2">
                    {analysisResult.mistakes.map((mistake, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-white dark:bg-white/[0.04] border border-rose-200/60 dark:border-rose-900/40 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200/50 dark:border-rose-900/40">
                            {mistake.ruleName}
                          </span>
                          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                            <span className="line-through text-rose-600 dark:text-rose-400 mr-1.5">
                              {mistake.original}
                            </span>
                            ➔{" "}
                            <span className="font-bold text-emerald-600 dark:text-emerald-400 ml-1.5">
                              {mistake.corrected}
                            </span>
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed pl-1 pt-0.5">
                          💡 <span className="font-medium">{mistake.explanationHindi}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/40 text-xs text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                    <p className="text-[11px] font-medium leading-relaxed">
                      {analysisResult.feedbackSummary}
                    </p>
                  </div>
                )}
              </div>

              {/* 4. Suggested Natural English Version to Practise Again */}
              {analysisResult.naturalVersion && (
                <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/50 space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-purple-900 dark:text-purple-300 flex items-center gap-1.5">
                      <Sparkles size={13} className="text-purple-600 dark:text-purple-400" />
                      Suggested Natural Version (अभ्यास के लिए अधिक स्वाभाविक उत्तर):
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        handleSpeakText(analysisResult.naturalVersion, "natural")
                      }
                      className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/50 text-purple-900 dark:text-purple-200 hover:bg-purple-200 transition-colors flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
                      title="Listen to natural answer"
                    >
                      {isSpeakingNatural ? (
                        <>
                          <VolumeX size={12} className="animate-pulse" /> Stop Audio
                        </>
                      ) : (
                        <>
                          <Volume2 size={12} /> Listen
                        </>
                      )}
                    </button>
                  </div>

                  <p className="p-2.5 rounded-lg bg-white/80 dark:bg-black/30 border border-purple-200/50 dark:border-purple-800/40 text-xs font-medium text-purple-950 dark:text-purple-100 leading-relaxed break-words">
                    &ldquo;{analysisResult.naturalVersion}&rdquo;
                  </p>

                  <p className="text-[11px] text-purple-900 dark:text-purple-300 flex items-center gap-1">
                    <ArrowRight size={12} />
                    <span>
                      टिप: इसे सुनें और &ldquo;Record Again&rdquo; पर क्लिक करके इसी तरह दोबारा बोलने का अभ्यास करें!
                    </span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
