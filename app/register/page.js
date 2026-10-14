/**
 * Register — Responsive Apple-inspired glassmorphism registration page for Mission 90.
 * Sets up an independent 90-day study plan and seeds 450 curriculum tasks in MongoDB Atlas.
 */
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { User, Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, Loader2, Sparkles } from "lucide-react";
import { useProgress } from "@/context/ProgressContext";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  const { user, register, autoLoginDemoUser, isAuthLoading } = useProgress();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDemoSubmitting, setIsDemoSubmitting] = useState(false);

  // If already logged in, immediately redirect to target destination
  useEffect(() => {
    if (user && !isAuthLoading) {
      router.replace(redirectPath);
    }
  }, [user, isAuthLoading, router, redirectPath]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await register(name, email, password);
      if (res.success) {
        router.replace(redirectPath);
      } else {
        setError(res.error || "Failed to create account. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDemoLogin() {
    setError("");
    setIsDemoSubmitting(true);
    try {
      await autoLoginDemoUser();
      router.replace(redirectPath);
    } catch (err) {
      setError(err.message || "Failed to log in as demo candidate");
    } finally {
      setIsDemoSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-[var(--bg-warm)] via-[var(--bg-warm-alt)] to-[var(--bg-warm)]">
      {/* Background ambient decorative blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md animate-fade-in-up">
        {/* Glassmorphism Card */}
        <div className="glass-card-static p-7 sm:p-9 rounded-3xl shadow-2xl border border-black/10 dark:border-white/15 bg-white/90 dark:bg-[#15151c]/90 backdrop-blur-2xl">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center mx-auto mb-3 shadow-sm">
              <ShieldCheck size={30} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Create Candidate Account
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] dark:text-zinc-400 mt-1">
              Initialize your independent 90-day placement preparation curriculum
            </p>
          </div>

          {/* 1-Click Demo Login alternative */}
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={isSubmitting || isDemoSubmitting}
            className="w-full mb-5 py-3 px-4 rounded-2xl bg-gradient-to-r from-[var(--accent)] to-rose-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
          >
            {isDemoSubmitting ? (
              <Loader2 size={16} className="animate-spin text-white" />
            ) : (
              <Sparkles size={16} className="text-white" />
            )}
            <span>Sign In as Piyush (1-Click Demo Candidate)</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-black/[0.08] dark:bg-white/10" />
            <span className="text-[10px] uppercase font-bold text-[var(--text-tertiary)] dark:text-zinc-400 tracking-wider">
              Or register new candidate
            </span>
            <div className="flex-1 h-px bg-black/[0.08] dark:bg-white/10" />
          </div>

          {/* Error Banner */}
          {error && (
            <div className="mb-4 p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2 animate-shake">
              <AlertCircle size={16} className="flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] dark:text-zinc-400"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Piyush Chandra"
                  required
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.07] border border-black/[0.08] dark:border-white/12 text-xs sm:text-sm text-[var(--foreground)] dark:text-white placeholder:text-[var(--text-tertiary)] dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] dark:text-zinc-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.07] border border-black/[0.08] dark:border-white/12 text-xs sm:text-sm text-[var(--foreground)] dark:text-white placeholder:text-[var(--text-tertiary)] dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-secondary)] dark:text-zinc-300 mb-1.5">
                Password (min. 6 characters)
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] dark:text-zinc-400"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.07] border border-black/[0.08] dark:border-white/12 text-xs sm:text-sm text-[var(--foreground)] dark:text-white placeholder:text-[var(--text-tertiary)] dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                />
              </div>
            </div>

            {/* High-Contrast Create Account Button */}
            <button
              type="submit"
              disabled={isSubmitting || isDemoSubmitting}
              className="w-full mt-2 py-3.5 px-4 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 size={16} className="animate-spin text-white dark:text-zinc-950" />
              ) : (
                <ArrowRight size={16} className="text-white dark:text-zinc-950 stroke-[2.5]" />
              )}
              <span className="text-white dark:text-zinc-950 font-bold tracking-wide">
                Create 90-Day Study Plan
              </span>
            </button>
          </form>

          {/* Switch to Login */}
          <div className="mt-6 text-center text-xs text-[var(--text-secondary)] dark:text-zinc-400">
            <span>Already have an account? </span>
            <Link
              href={`/login${redirectPath !== "/" ? `?redirect=${encodeURIComponent(redirectPath)}` : ""}`}
              className="font-bold text-[var(--accent)] hover:underline ml-1"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
