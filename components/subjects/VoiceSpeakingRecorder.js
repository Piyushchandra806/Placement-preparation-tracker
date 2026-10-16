"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mic,
  Square,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Trash2,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Database,
  CloudCheck,
} from "lucide-react";
import {
  saveVoiceRecording,
  getVoiceRecording,
  fetchVoiceRecordingFromMongoDB,
  deleteVoiceRecording,
} from "@/lib/voice-recorder-db";

export default function VoiceSpeakingRecorder({
  day,
  subjectSlug = "english",
  prompt,
  accentColor = "var(--accent)",
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [duration, setDuration] = useState(0);
  const [micError, setMicError] = useState("");
  const [isSavingMongo, setIsSavingMongo] = useState(false);
  const [isSavedMongo, setIsSavedMongo] = useState(false);

  // Audio playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  // Text to speech state
  const [isSpeakingTTS, setIsSpeakingTTS] = useState(false);

  // Refs
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const audioRef = useRef(null);
  const transcriptRef = useRef("");

  // Keep transcriptRef synchronized for onstop callbacks
  useEffect(() => {
    transcriptRef.current = transcript;
  }, [transcript]);

  // Format seconds to mm:ss
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  // Load existing recording from local cache & MongoDB when day or subject changes
  useEffect(() => {
    let active = true;

    async function loadSaved() {
      // Clean up previous audio URL
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
      setAudioUrl(null);
      setTranscript("");
      setDuration(0);
      setRecordingSeconds(0);
      setIsPlaying(false);
      setCurrentTime(0);
      setMicError("");
      setIsSavedMongo(false);
      setIsSavingMongo(false);

      // 1. Fast local load from IndexedDB
      const localSaved = await getVoiceRecording(day, subjectSlug);
      if (active && localSaved) {
        if (localSaved.audioBlob) {
          const url = URL.createObjectURL(localSaved.audioBlob);
          setAudioUrl(url);
        }
        setTranscript(localSaved.transcript || "");
        setDuration(localSaved.duration || 0);
        setIsSavedMongo(true);
      }

      // 2. Background check MongoDB (for cross-device sync if recorded on another device)
      try {
        const remoteSaved = await fetchVoiceRecordingFromMongoDB(day, subjectSlug);
        if (active && remoteSaved && remoteSaved.audioBlob) {
          // If we didn't have local or remote is newer, update UI
          if (!localSaved || remoteSaved.updatedAt !== localSaved?.updatedAt) {
            const url = URL.createObjectURL(remoteSaved.audioBlob);
            setAudioUrl((prev) => {
              if (prev) URL.revokeObjectURL(prev);
              return url;
            });
            setTranscript(remoteSaved.transcript || "");
            setDuration(remoteSaved.duration || 0);
            setIsSavedMongo(true);
          }
        }
      } catch (e) {
        console.warn("MongoDB sync load check:", e);
      }
    }

    loadSaved();

    return () => {
      active = false;
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [day, subjectSlug]);

  // Audio player time updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      setAudioDuration(audio.duration || duration);
    };
    const onEnded = () => {
      setIsPlaying(false);
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

  // Start recording
  const startRecording = async () => {
    setMicError("");
    setInterimTranscript("");
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

        // Save to MongoDB and IndexedDB cache
        setIsSavingMongo(true);
        const latestTranscript = transcriptRef.current.trim();
        const res = await saveVoiceRecording({
          day,
          subject: subjectSlug,
          audioBlob,
          transcript: latestTranscript,
          duration: finalDuration,
        });

        setIsSavingMongo(false);
        setIsSavedMongo(true);
      };

      // Set up speech recognition if supported
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
                return combined;
              });
            }
            setInterimTranscript(currentInterim);
          };

          recognition.onerror = (e) => {
            console.warn("Speech recognition warning:", e.error);
          };

          recognition.start();
          recognitionRef.current = recognition;
        } catch (e) {
          console.warn("Speech recognition not initialized:", e);
        }
      }

      mediaRecorder.start(250);
      setIsRecording(true);
      setRecordingSeconds(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      console.error("Mic error:", err);
      setMicError(
        "Could not access microphone. Please grant microphone permission in your browser to record your answer."
      );
    }
  };

  // Stop recording
  const stopRecording = () => {
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

    setIsRecording(false);
    setInterimTranscript("");
  };

  // Play / Pause recorded voice audio
  const togglePlayAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  // Seek audio
  const handleSeek = (e) => {
    const val = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
      setCurrentTime(val);
    }
  };

  // Listen to words & sentences via Text-to-Speech
  const toggleTTS = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    if (isSpeakingTTS) {
      window.speechSynthesis.cancel();
      setIsSpeakingTTS(false);
      return;
    }

    const textToRead = transcript || prompt;
    if (!textToRead) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.lang = "en-US";

    utterance.onstart = () => setIsSpeakingTTS(true);
    utterance.onend = () => setIsSpeakingTTS(false);
    utterance.onerror = () => setIsSpeakingTTS(false);

    window.speechSynthesis.speak(utterance);
  };

  // Delete recording from MongoDB & local cache
  const handleDelete = async () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setTranscript("");
    setDuration(0);
    setCurrentTime(0);
    setIsPlaying(false);
    setIsSavedMongo(false);
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    await deleteVoiceRecording(day, subjectSlug);
  };

  const wordCount = transcript
    ? transcript.trim().split(/\s+/).filter(Boolean).length
    : 0;

  return (
    <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-300 uppercase tracking-wide flex items-center gap-1.5">
          <Mic size={14} style={{ color: accentColor }} />
          Daily Speaking Simulation
        </p>
        <div className="flex items-center gap-2">
          {audioUrl && !isRecording && (
            <span
              className={`flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border transition-all ${
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
          <span className="text-[11px] font-semibold text-[var(--text-secondary)] dark:text-zinc-400">
            Goal: 2 Minutes
          </span>
        </div>
      </div>

      {/* Speaking Prompt Box */}
      <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/10">
        <p className="text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-400 mb-1 flex items-center gap-1">
          <Sparkles size={12} className="text-amber-500" /> Speaking Prompt:
        </p>
        <p className="text-sm font-medium text-[var(--foreground)] italic leading-relaxed">
          &quot;{prompt}&quot;
        </p>
      </div>

      {/* Mic permission error */}
      {micError && (
        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-700 dark:text-rose-300 flex items-start gap-2">
          <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
          <span>{micError}</span>
        </div>
      )}

      {/* Recording Controls & Live Timer */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2 flex-wrap">
          {!isRecording ? (
            <button
              type="button"
              onClick={startRecording}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[var(--accent)] hover:bg-[var(--accent-light)] flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Mic size={14} />
              <span>{audioUrl ? "Record New Answer" : "Start Speaking Practice"}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={stopRecording}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 flex items-center gap-2 shadow-md transition-all cursor-pointer animate-pulse"
            >
              <Square size={13} fill="currentColor" />
              <span>Stop & Save Voice Answer</span>
            </button>
          )}

          {isRecording && (
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/50 text-[11px] font-semibold text-rose-700 dark:text-rose-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>Recording Voice...</span>
            </div>
          )}
        </div>

        {/* Timer display */}
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--foreground)]">
          <Clock size={13} className="text-zinc-400" />
          <span>{formatTime(isRecording ? recordingSeconds : duration)}</span>
        </div>
      </div>

      {/* Live Interim Transcript while speaking */}
      {isRecording && (
        <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/40 text-xs animate-fade-in">
          <p className="font-semibold text-amber-800 dark:text-amber-300 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Transcribing your speech in real time...
          </p>
          <p className="text-zinc-700 dark:text-zinc-200 italic min-h-6">
            {transcript || interimTranscript || "Speak into your microphone..."}
            {interimTranscript && (
              <span className="text-amber-600 dark:text-amber-400"> {interimTranscript}</span>
            )}
          </p>
        </div>
      )}

      {/* Voice Audio Player & Spoken Sentences Review (When recording is complete) */}
      {audioUrl && !isRecording && (
        <div className="mt-3 p-4 rounded-xl bg-gradient-to-br from-white/90 via-white/70 to-zinc-50 dark:from-white/[0.06] dark:via-white/[0.03] dark:to-white/[0.01] border border-black/[0.07] dark:border-white/12 shadow-sm space-y-3.5 animate-fade-in">
          {/* Audio Player Row */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1.5">
                <Volume2 size={14} style={{ color: accentColor }} />
                Listen to Your Voice Recording
              </span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                {formatTime(currentTime)} / {formatTime(audioDuration || duration)}
              </span>
            </div>

            {/* Hidden Native Audio Element */}
            <audio ref={audioRef} src={audioUrl} preload="metadata" />

            {/* Interactive Player Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlayAudio}
                className="w-10 h-10 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] flex items-center justify-center shadow-md transition-all cursor-pointer flex-shrink-0 active:scale-95"
                title={isPlaying ? "Pause Recording" : "Play Recording"}
              >
                {isPlaying ? <Pause size={17} /> : <Play size={17} className="ml-0.5" />}
              </button>

              {/* Progress Scrubber */}
              <div className="flex-1 relative flex items-center">
                <input
                  type="range"
                  min="0"
                  max={audioDuration || duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="Seek audio"
                  className="w-full h-2 rounded-lg bg-black/10 dark:bg-white/15 accent-[var(--accent)] cursor-pointer"
                />
              </div>

              {/* Delete Recording Button */}
              <button
                type="button"
                onClick={handleDelete}
                className="p-2 rounded-lg text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                title="Delete Voice Recording from MongoDB & Cache"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/* Database storage status footer */}
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/5 dark:border-white/5 text-[11px] text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1 font-medium">
                <Database size={11} className="text-emerald-500" /> Stored in MongoDB Atlas
              </span>
              <span className="text-[10px] text-zinc-400">
                Synced across mobile & desktop
              </span>
            </div>
          </div>

          {/* Transcribed Words & Sentences Review */}
          <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1.5">
                <FileText size={13} className="text-zinc-500" />
                Your Spoken Words & Sentences
              </span>
              <div className="flex items-center gap-2">
                {wordCount > 0 && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-300">
                    {wordCount} words
                  </span>
                )}
                {/* Text-to-Speech Listen Button */}
                <button
                  type="button"
                  onClick={toggleTTS}
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                    isSpeakingTTS
                      ? "bg-amber-500 text-white animate-pulse"
                      : "bg-black/5 dark:bg-white/10 text-[var(--foreground)] hover:bg-black/10 dark:hover:bg-white/20"
                  }`}
                  title="Listen to sentences with speech synthesis"
                >
                  {isSpeakingTTS ? (
                    <>
                      <VolumeX size={12} /> Stop Reading
                    </>
                  ) : (
                    <>
                      <Volume2 size={12} /> Read Aloud
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed bg-white/60 dark:bg-black/20 p-2.5 rounded-lg border border-black/5 dark:border-white/5">
              {transcript || (
                <span className="text-zinc-400 dark:text-zinc-500 italic">
                  No speech text captured. You can listen to your voice recording using the player above.
                </span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
