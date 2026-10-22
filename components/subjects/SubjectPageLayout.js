/**
 * SubjectPageLayout — Complete 90-Day Syllabus & Interactive Task Tracker
 *
 * Provides:
 * - Today (Active Day Detailed View)
 * - All Days (Full 90-day Searchable List with real-time Topic Search)
 * - Weekly View (13 Weeks with completion bars and day jumpers)
 * - Previous Day & Next Day Steppers
 * - Progress Indicators (Ring, percent completed, days left)
 * - Learning Objectives checklist
 * - Real Practice Question links (Canonical LeetCode URLs)
 * - Interactive Quant & Reasoning exercises with Answer Keys & Explanations
 * - Interactive English Speaking Prompts & Speech Timer
 * - Live MongoDB Atlas task completion synchronization (PATCH /api/tasks/:id)
 */
"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Check,
  Search,
  ExternalLink,
  BookOpen,
  Calendar,
  Layers,
  Sparkles,
  Award,
  Eye,
  EyeOff,
  Mic,
  MicOff,
  RotateCcw,
} from "lucide-react";
import DynamicIcon from "@/lib/icons";
import ProgressRing from "@/components/ui/ProgressRing";
import AppShell from "@/components/layout/AppShell";
import { COMPLETE_90_DAYS_CURRICULUM } from "@/lib/complete-90-days-syllabus";
import { useProgress } from "@/context/ProgressContext";
import VoiceSpeakingRecorder from "./VoiceSpeakingRecorder";
import FullSampleAnswerSection from "./FullSampleAnswerSection";
import { getEnglishSampleAnswer } from "@/lib/english-sample-answers";

export default function SubjectPageLayout({ subject }) {
  // Normalize subject identifier ('aptitude' -> 'quant')
  const subjectSlug = subject.slug === "aptitude" ? "quant" : subject.slug;
  const { toggleTask, stats, todayTasks } = useProgress();

  // Filter the complete 90-day syllabus for this subject
  const subjectSyllabus = useMemo(() => {
    return COMPLETE_90_DAYS_CURRICULUM.filter(
      (item) => item.subject === subjectSlug
    );
  }, [subjectSlug]);

  // State management
  const [activeTab, setActiveTab] = useState("today"); // 'today' | 'week' | 'all'
  const [completedDays, setCompletedDays] = useState(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const storageKey = `mission90_completed_${subjectSlug}`;
      const cached = localStorage.getItem(storageKey);
      return cached ? new Set(JSON.parse(cached)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Calculate continueDay: first incomplete day from Day 1 to 90
  const continueDay = useMemo(() => {
    for (let d = 1; d <= 90; d++) {
      if (!completedDays.has(d)) return d;
    }
    return 1;
  }, [completedDays]);

  const [selectedDay, setSelectedDay] = useState(() => {
    if (typeof window !== "undefined") {
      const urlDay = new URLSearchParams(window.location.search).get("day");
      if (urlDay && !isNaN(parseInt(urlDay, 10))) return parseInt(urlDay, 10);
      try {
        const storageKey = `mission90_completed_${subjectSlug}`;
        const cached = localStorage.getItem(storageKey);
        if (cached) {
          const set = new Set(JSON.parse(cached));
          for (let d = 1; d <= 90; d++) {
            if (!set.has(d)) return d;
          }
        }
      } catch {}
    }
    return stats?.currentDay || 1;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [showFullAnswer, setShowFullAnswer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [taskDbIds, setTaskDbIds] = useState({}); // map dayNumber -> mongo taskId

  // Reset answer toggles when switching days or subjects
  useEffect(() => {
    setShowExplanation(false);
    setShowFullAnswer(false);
  }, [selectedDay, subjectSlug]);

  // Load progress from MongoDB
  useEffect(() => {
    const storageKey = `mission90_completed_${subjectSlug}`;

    async function fetchDbTasks() {
      try {
        const token = typeof window !== "undefined" ? localStorage.getItem("mission90_token") : null;
        const headers = { "Content-Type": "application/json" };
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch(`/api/tasks?subject=${subjectSlug}&limit=100`, { headers });
        if (res.ok) {
          const data = await res.json();
          if (data.tasks && data.tasks.length > 0) {
            const completed = new Set();
            const idMap = {};
            data.tasks.forEach((t) => {
              idMap[t.dayNumber] = t.id || t._id;
              if (t.completed) completed.add(t.dayNumber);
            });
            setCompletedDays(completed);
            setTaskDbIds(idMap);

            try {
              localStorage.setItem(storageKey, JSON.stringify([...completed]));
            } catch {}

            // Auto-select the continue day (first incomplete day) unless user supplied ?day=X in URL
            const urlDay = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("day") : null;
            if (urlDay && !isNaN(parseInt(urlDay, 10))) {
              setSelectedDay(parseInt(urlDay, 10));
            } else {
              let firstIncomplete = 1;
              for (let d = 1; d <= 90; d++) {
                if (!completed.has(d)) {
                  firstIncomplete = d;
                  break;
                }
              }
              setSelectedDay(firstIncomplete);
            }
          }
        }
      } catch (err) {
        console.warn("Could not fetch DB tasks; using local syllabus", err);
      }
    }
    fetchDbTasks();
  }, [subjectSlug]);

  // Derive effective completed days incorporating live today's task state
  const effectiveCompletedDays = useMemo(() => {
    const copy = new Set(completedDays);
    if (todayTasks && todayTasks.length > 0) {
      const todaySubjTask = todayTasks.find(
        (t) => (t.subject || "").toLowerCase() === subjectSlug
      );
      if (todaySubjTask) {
        const targetDay = todaySubjTask.dayNumber || stats?.currentDay || 1;
        if (todaySubjTask.completed) {
          copy.add(targetDay);
        } else {
          copy.delete(targetDay);
        }
      }
    }
    return copy;
  }, [completedDays, todayTasks, subjectSlug, stats?.currentDay]);

  // Toggle task completion
  async function toggleDayCompletion(dayNum) {
    const isNowCompleted = !effectiveCompletedDays.has(dayNum);
    const updated = new Set(effectiveCompletedDays);
    if (isNowCompleted) {
      updated.add(dayNum);
    } else {
      updated.delete(dayNum);
    }
    setCompletedDays(updated);

    const storageKey = `mission90_completed_${subjectSlug}`;
    try {
      localStorage.setItem(storageKey, JSON.stringify([...updated]));
    } catch {}

    // Persist to MongoDB Atlas via global toggleTask
    const taskId = taskDbIds[dayNum];
    if (taskId) {
      try {
        setLoading(true);
        await toggleTask(taskId, isNowCompleted, subjectSlug);
      } catch (err) {
        console.error("Failed to sync completion to database:", err);
      } finally {
        setLoading(false);
      }
    }
  }

  // Active day task
  const activeTask = useMemo(() => {
    return (
      subjectSyllabus.find((t) => t.dayNumber === selectedDay) ||
      subjectSyllabus[0] ||
      {}
    );
  }, [subjectSyllabus, selectedDay]);

  // Full ready-to-speak answer for English speaking practice
  const sampleAnswer = useMemo(() => {
    if (subjectSlug === "english" || (activeTask.exercise && activeTask.exercise.prompt)) {
      return getEnglishSampleAnswer({
        prompt: activeTask.exercise?.prompt,
        day: selectedDay,
        topic: activeTask.topic,
      });
    }
    return null;
  }, [subjectSlug, activeTask, selectedDay]);

  const handleToggleExplanation = () => {
    setShowExplanation((prev) => {
      const next = !prev;
      if (next) {
        // When opening solution, also expand full ready-to-speak answer
        setShowFullAnswer(true);
      }
      return next;
    });
  };

  const handleToggleFullAnswer = () => {
    setShowFullAnswer((prev) => {
      const next = !prev;
      if (next && !showExplanation) {
        // Keep original answer key and explanation available
        setShowExplanation(true);
      }
      return next;
    });
  };

  const handleScrollToRecorder = () => {
    const el = document.getElementById("voice-practice-recorder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-[var(--accent)]", "ring-offset-2", "ring-offset-black/20");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-[var(--accent)]", "ring-offset-2", "ring-offset-black/20");
      }, 2000);
    }
  };

  const isCurrentDayCompleted = effectiveCompletedDays.has(selectedDay);

  // Overall statistics for this subject
  const totalCompletedCount = effectiveCompletedDays.size;
  const overallSubjectProgress = Math.round(
    (totalCompletedCount / Math.max(subjectSyllabus.length, 90)) * 100
  );

  // Filtered tasks for "All Days" search
  const filteredTasks = useMemo(() => {
    if (!searchQuery.trim()) return subjectSyllabus;
    const q = searchQuery.toLowerCase();
    return subjectSyllabus.filter(
      (t) =>
        t.topic.toLowerCase().includes(q) ||
        t.title.toLowerCase().includes(q) ||
        (t.description && t.description.toLowerCase().includes(q))
    );
  }, [subjectSyllabus, searchQuery]);

  // Weekly groups (13 weeks)
  const weeks = useMemo(() => {
    const result = [];
    for (let w = 0; w < 13; w++) {
      const startDay = w * 7 + 1;
      const endDay = Math.min(startDay + 6, 90);
      const daysInWeek = subjectSyllabus.filter(
        (t) => t.dayNumber >= startDay && t.dayNumber <= endDay
      );
      const completedInWeek = daysInWeek.filter((t) =>
        effectiveCompletedDays.has(t.dayNumber)
      ).length;
      const pct =
        daysInWeek.length > 0
          ? Math.round((completedInWeek / daysInWeek.length) * 100)
          : 0;

      result.push({
        weekNum: w + 1,
        startDay,
        endDay,
        days: daysInWeek,
        completedCount: completedInWeek,
        totalCount: daysInWeek.length,
        percentage: pct,
        isCurrentWeek: selectedDay >= startDay && selectedDay <= endDay,
      });
    }
    return result;
  }, [subjectSyllabus, effectiveCompletedDays, selectedDay]);

  return (
    <AppShell>
      <div className="space-y-5 animate-fade-in pb-12">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="w-10 h-10 rounded-full bg-white/70 dark:bg-white/[0.08] backdrop-blur-md flex items-center justify-center border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/[0.14] text-[var(--foreground)] shadow-sm transition-all"
            aria-label="Back to Dashboard"
          >
            <ChevronLeft size={18} />
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/80 dark:bg-white/[0.08] border border-black/5 dark:border-white/10 text-[var(--foreground)] shadow-sm">
              Day {selectedDay} of 90
            </span>
          </div>
        </div>

        {/* Subject header */}
        <div className="text-center animate-fade-in-up">
          <div
            className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-3 shadow-sm border border-black/5 dark:border-white/15 transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: `${subject.accent}18` }}
          >
            <DynamicIcon
              name={subject.icon}
              size={30}
              style={{ color: subject.accent }}
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
            {subject.name}
          </h1>
          <p className="text-sm text-[var(--text-secondary)] dark:text-zinc-300 mt-1 font-medium">
            90-Day Placement Preparation Roadmap
          </p>
        </div>

        {/* Progress Overview Card */}
        <div className="glass-card-static p-5 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] dark:text-zinc-300">
                Subject Mastery
              </p>
              <p className="text-3xl font-bold tracking-tight mt-1 text-[var(--foreground)]">
                {overallSubjectProgress}%
              </p>
              <p className="text-xs text-[var(--text-secondary)] dark:text-zinc-400 mt-1">
                {totalCompletedCount} of 90 daily missions completed
              </p>
            </div>
            <ProgressRing
              progress={overallSubjectProgress}
              size={76}
              strokeWidth={7}
              color={subject.accent}
            >
              <DynamicIcon
                name={subject.icon}
                size={24}
                style={{ color: subject.accent }}
              />
            </ProgressRing>
          </div>
        </div>

        {/* Tab Navigation: Today | Weekly View | All Days */}
        <div className="flex rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] p-1.5 animate-fade-in-up border border-black/[0.04] dark:border-white/10">
          <button
            onClick={() => setActiveTab("today")}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === "today"
                ? "bg-[var(--accent)] text-white shadow-sm"
                : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/[0.08]"
            }`}
          >
            {selectedDay === (stats?.currentDay || 1)
              ? `Today (Day ${selectedDay})`
              : selectedDay === continueDay
              ? `Continue (Day ${selectedDay})`
              : `Day ${selectedDay}`}
          </button>
          <button
            onClick={() => setActiveTab("week")}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === "week"
                ? "bg-[var(--accent)] text-white shadow-sm"
                : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/[0.08]"
            }`}
          >
            Weekly View
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === "all"
                ? "bg-[var(--accent)] text-white shadow-sm"
                : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/[0.08]"
            }`}
          >
            All 90 Days
          </button>
        </div>

        {/* Day Stepper Controls (Previous Day / Next Day) */}
        <div className="glass-card-static p-3 flex items-center justify-between text-xs font-medium animate-fade-in-up">
          <button
            onClick={() => setSelectedDay((prev) => Math.max(1, prev - 1))}
            disabled={selectedDay <= 1}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-white/[0.08] hover:bg-white dark:hover:bg-white/[0.14] text-[var(--foreground)] disabled:opacity-30 disabled:cursor-not-allowed border border-black/5 dark:border-white/10 transition-all shadow-2xs"
          >
            <ChevronLeft size={14} /> Previous Day
          </button>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-[var(--foreground)]">Day {selectedDay}</span>
            {selectedDay !== continueDay && (
              <button
                onClick={() => setSelectedDay(continueDay)}
                className="text-[10px] text-[var(--accent)] hover:underline font-semibold bg-[var(--accent-bg)] px-2 py-0.5 rounded-full"
                title="Jump to the next incomplete day"
              >
                Continue Day {continueDay}
              </button>
            )}
            {selectedDay !== (stats?.currentDay || 1) && (
              <button
                onClick={() => setSelectedDay(stats?.currentDay || 1)}
                className="text-[10px] text-[var(--text-secondary)] dark:text-zinc-300 hover:underline font-semibold bg-black/[0.04] dark:bg-white/[0.08] px-2 py-0.5 rounded-full"
              >
                Today (D{stats?.currentDay || 1})
              </button>
            )}
          </div>

          <button
            onClick={() => setSelectedDay((prev) => Math.min(90, prev + 1))}
            disabled={selectedDay >= 90}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-white/[0.08] hover:bg-white dark:hover:bg-white/[0.14] text-[var(--foreground)] disabled:opacity-30 disabled:cursor-not-allowed border border-black/5 dark:border-white/10 transition-all shadow-2xs"
          >
            Next Day <ChevronRight size={14} />
          </button>
        </div>

        {/* ─── TAB 1: TODAY / ACTIVE DAY VIEW ─── */}
        {activeTab === "today" && (
          <div className="space-y-4 animate-fade-in">
            {/* Main Daily Mission Card */}
            <div className="glass-card-static p-6 space-y-4 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none rounded-bl-full opacity-10"
                style={{ backgroundColor: subject.accent }}
              />

              {/* Badges: Topic & Time */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: `${subject.accent}18`,
                      color: subject.accent,
                    }}
                  >
                    {activeTask.topic}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)] dark:text-zinc-300 font-medium">
                    <Clock size={13} />
                    {activeTask.estimatedMinutes || 25} mins
                  </span>
                </div>

                {isCurrentDayCompleted && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center gap-1">
                    <Check size={12} /> Completed
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div>
                <h2 className="text-lg font-bold text-[var(--foreground)]">
                  {activeTask.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] dark:text-zinc-300 mt-1.5 leading-relaxed">
                  {activeTask.description}
                </p>
              </div>

              {/* Learning Objectives */}
              {activeTask.learningObjectives &&
                activeTask.learningObjectives.length > 0 && (
                  <div className="p-4 rounded-xl bg-white/60 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 space-y-2">
                    <p className="text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-300 uppercase tracking-wide flex items-center gap-1.5">
                      <BookOpen size={13} style={{ color: subject.accent }} />
                      Learning Objectives
                    </p>
                    <ul className="space-y-1.5">
                      {activeTask.learningObjectives.map((obj, i) => (
                        <li
                          key={i}
                          className="text-xs text-[var(--foreground)] flex items-start gap-2"
                        >
                          <span className="text-emerald-500 font-bold mt-0.5">
                            ✓
                          </span>
                          <span className="leading-relaxed">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Coding Questions (DSA) */}
              {activeTask.practiceQuestions &&
                activeTask.practiceQuestions.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-300 uppercase tracking-wide flex items-center gap-1.5">
                      <Award size={14} style={{ color: subject.accent }} />
                      Target Coding Problems (Real Problem Links)
                    </p>
                    <div className="space-y-2">
                      {activeTask.practiceQuestions.map((prob, i) => (
                        <a
                          key={i}
                          href={prob.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-card p-3 flex items-center justify-between hover:bg-white dark:hover:bg-white/[0.08] transition-all group border border-black/5 dark:border-white/10"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/[0.05] dark:bg-white/[0.08] text-[var(--text-secondary)] dark:text-zinc-300">
                              {prob.platform || "LeetCode"}
                            </span>
                            <span className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                              {prob.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                prob.difficulty === "Easy"
                                  ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300"
                                  : prob.difficulty === "Hard"
                                  ? "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300"
                                  : "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300"
                              }`}
                            >
                              {prob.difficulty}
                            </span>
                            <ExternalLink
                              size={14}
                              className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors"
                            />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              {/* Practice Exercise & Answer Key (Quant / Reasoning) */}
              {activeTask.exercise && activeTask.exercise.question && (
                <div className="p-4 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-300 uppercase tracking-wide flex items-center gap-1.5">
                      <Sparkles size={13} style={{ color: subject.accent }} />
                      Practice Drill &amp; Verification
                    </p>
                    <button
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
                  </div>

                  <p className="text-sm font-semibold text-[var(--foreground)] leading-relaxed">
                    {activeTask.exercise.question}
                  </p>

                  {/* Options */}
                  {activeTask.exercise.options &&
                    activeTask.exercise.options.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {activeTask.exercise.options.map((opt, i) => (
                          <div
                            key={i}
                            className="text-xs font-medium p-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.06] border border-black/[0.04] dark:border-white/10 text-[var(--foreground)] flex items-center gap-2"
                          >
                            <span className="w-5 h-5 rounded-full bg-black/[0.05] dark:bg-white/10 flex items-center justify-center font-bold text-[10px] text-[var(--foreground)]">
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="truncate">{opt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                  {/* Expandable Explanation & Answer Key */}
                  {showExplanation && (
                    <div className="p-3.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/50 border border-emerald-200/50 dark:border-emerald-800/50 text-xs space-y-1.5 animate-fade-in">
                      <p className="font-bold text-emerald-800 dark:text-emerald-300">
                        Answer Key: {activeTask.exercise.answerKey}
                      </p>
                      <p className="text-emerald-900 dark:text-emerald-200 leading-relaxed">
                        {activeTask.exercise.explanation}
                      </p>
                    </div>
                  )}

                  {/* Full Sample Answer — Speak Along (English Speaking) */}
                  {sampleAnswer && (
                    <FullSampleAnswerSection
                      sampleAnswer={sampleAnswer}
                      showFullAnswer={showFullAnswer}
                      onToggleFullAnswer={handleToggleFullAnswer}
                      accentColor={subject.accent}
                      onStartPractice={handleScrollToRecorder}
                    />
                  )}
                </div>
              )}

              {/* Speaking Drill & Real Voice Recording Simulation (English Speaking) */}
              {activeTask.exercise && activeTask.exercise.prompt && (
                <VoiceSpeakingRecorder
                  day={selectedDay}
                  subjectSlug={subjectSlug}
                  prompt={activeTask.exercise.prompt}
                  accentColor={subject.accent}
                />
              )}

              {/* Completion Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => toggleDayCompletion(selectedDay)}
                  disabled={loading}
                  className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
                    isCurrentDayCompleted
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] shadow-md shadow-[rgba(232,87,58,0.25)]"
                  }`}
                >
                  <Check size={18} />
                  {isCurrentDayCompleted
                    ? `Day ${selectedDay} Completed ✓ (Click to Undo)`
                    : `Mark Day ${selectedDay} as Completed`}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB 2: WEEKLY VIEW (13 WEEKS) ─── */}
        {activeTab === "week" && (
          <div className="space-y-3 animate-fade-in">
            <p className="text-xs text-[var(--text-secondary)] font-medium px-1">
              Click any day badge to jump directly to its lesson &amp; practice.
            </p>
            {weeks.map((w) => (
              <div
                key={w.weekNum}
                className={`glass-card p-4 space-y-3 ${
                  w.isCurrentWeek ? "border-[var(--accent)] border-opacity-40" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[var(--foreground)]">
                      Week {w.weekNum}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)]">
                      Day {w.startDay}–{w.endDay}
                    </span>
                    {w.isCurrentWeek && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent)]">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-[var(--text-secondary)]">
                    {w.completedCount} / {w.totalCount} ({w.percentage}%)
                  </span>
                </div>

                {/* Week Progress Bar */}
                <div className="w-full h-1.5 bg-black/[0.05] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${w.percentage}%`,
                      backgroundColor: subject.accent,
                    }}
                  />
                </div>

                {/* Day Buttons */}
                <div className="grid grid-cols-7 gap-1.5 pt-1">
                  {w.days.map((task) => {
                    const isDone = effectiveCompletedDays.has(task.dayNumber);
                    const isSelected = selectedDay === task.dayNumber;
                    return (
                      <button
                        key={task.dayNumber}
                        onClick={() => {
                          setSelectedDay(task.dayNumber);
                          setActiveTab("today");
                        }}
                        className={`py-2 px-1 rounded-xl text-center flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[var(--accent)] text-white shadow-sm ring-2 ring-[var(--accent)] ring-offset-1"
                            : isDone
                            ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50"
                            : "bg-white/60 dark:bg-white/[0.05] text-[var(--foreground)] hover:bg-white dark:hover:bg-white/[0.1] border border-black/[0.04] dark:border-white/10"
                        }`}
                      >
                        <span className="text-[10px] font-bold">
                          D{task.dayNumber}
                        </span>
                        {isDone ? (
                          <Check size={10} className="mt-0.5 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <span className="text-[9px] text-[var(--text-tertiary)] dark:text-zinc-400 mt-0.5">
                            {task.estimatedMinutes}m
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── TAB 3: ALL 90 DAYS (WITH REAL-TIME TOPIC SEARCH) ─── */}
        {activeTab === "all" && (
          <div className="space-y-4 animate-fade-in">
            {/* Search Input Bar */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g., Sliding Window, Percentages, Syllogisms)..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl glass-card text-sm text-[var(--foreground)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all bg-white/70 dark:bg-white/[0.05] border border-black/5 dark:border-white/10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--text-tertiary)] hover:text-[var(--foreground)] dark:hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            <p className="text-xs text-[var(--text-secondary)] dark:text-zinc-400 font-medium px-1">
              Showing {filteredTasks.length} of 90 daily tasks. Click any task to
              view full details.
            </p>

            {/* List of Tasks */}
            <div className="space-y-2">
              {filteredTasks.map((task) => {
                const isDone = effectiveCompletedDays.has(task.dayNumber);
                const isSelected = selectedDay === task.dayNumber;
                return (
                  <div
                    key={task.dayNumber}
                    onClick={() => {
                      setSelectedDay(task.dayNumber);
                      setActiveTab("today");
                    }}
                    className={`glass-card p-3.5 flex items-center gap-3.5 cursor-pointer hover:bg-white/80 dark:hover:bg-white/[0.08] transition-all border border-black/5 dark:border-white/10 ${
                      isSelected
                        ? "border-[var(--accent)] ring-1 ring-[var(--accent)]/30"
                        : ""
                    }`}
                  >
                    {/* Day Pill */}
                    <div
                      className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center flex-shrink-0 font-bold ${
                        isDone
                          ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50"
                          : "bg-black/[0.04] dark:bg-white/[0.08] text-[var(--foreground)]"
                      }`}
                    >
                      <span className="text-[11px]">D{task.dayNumber}</span>
                      {isDone && <Check size={10} className="text-emerald-600 dark:text-emerald-400" />}
                    </div>

                    {/* Interactive Task Checkbox */}
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={isDone}
                      aria-label={`Mark Day ${task.dayNumber} as ${isDone ? "incomplete" : "complete"}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDayCompletion(task.dayNumber);
                      }}
                      className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all flex-shrink-0 cursor-pointer ${
                        isDone
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "border-2 border-black/20 dark:border-white/25 hover:border-emerald-600 bg-white/60 dark:bg-white/[0.05]"
                      }`}
                    >
                      {isDone && <Check size={14} className="stroke-[3]" />}
                    </button>

                    {/* Task Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase">
                          {task.topic}
                        </span>
                        <span className="text-[10px] text-[var(--text-tertiary)]">
                          · {task.estimatedMinutes}m
                        </span>
                      </div>
                      <p
                        className={`text-sm font-semibold truncate mt-0.5 ${
                          isDone
                            ? "line-through text-[var(--text-tertiary)]"
                            : "text-[var(--foreground)]"
                        }`}
                      >
                        {task.title}
                      </p>
                    </div>

                    <ChevronRight
                      size={16}
                      className="text-[var(--text-tertiary)] flex-shrink-0"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
