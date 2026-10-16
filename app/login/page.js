/**
 * Login — Responsive Apple-inspired glassmorphism login page for Mission 90.
 * Server-validated sessions via HTTP-only cookies and bcryptjs.
 */
"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { FloatingLabel } from "@/components/floating-label";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  const { user, login, isAuthLoading } = useProgress();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If already logged in, immediately redirect to target destination
  useEffect(() => {
    if (user && !isAuthLoading) {
      router.replace(redirectPath);
    }
  }, [user, isAuthLoading, router, redirectPath]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter both email address and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await login(email, password);
      if (res.success) {
        router.replace(redirectPath);
      } else {
        setError(res.error || "Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
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
              Sign In to Mission <span className="text-[var(--accent)]">90</span>
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] dark:text-zinc-400 mt-1">
              Sign in to your account
            </p>
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
            <FloatingLabel
              label="Email address"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              validate={(val) => {
                const trimmed = val.trim();
                if (!trimmed) return "Enter your email address.";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
                  return "That doesn't look like an email address.";
                }
                return null;
              }}
              required
            />

            <FloatingLabel
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              validate={(val) => {
                if (!val) return "Enter your password.";
                if (val.length < 6) return "Password must be at least 6 characters.";
                return null;
              }}
              required
            />

            {/* High-Contrast Sign In Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 px-4 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 size={16} className="animate-spin text-white dark:text-zinc-950" />
              ) : (
                <ArrowRight size={16} className="text-white dark:text-zinc-950 stroke-[2.5]" />
              )}
              <span className="text-white dark:text-zinc-950 font-bold tracking-wide">
                Sign In
              </span>
            </button>
          </form>

          {/* Switch to Register */}
          <div className="mt-6 text-center text-xs text-[var(--text-secondary)] dark:text-zinc-400">
            <span>Don&apos;t have an account? </span>
            <Link
              href={`/register${redirectPath !== "/" ? `?redirect=${encodeURIComponent(redirectPath)}` : ""}`}
              className="font-bold text-[var(--accent)] hover:underline ml-1"
            >
              Create candidate account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-warm)]">
          <Loader2 className="animate-spin text-[var(--accent)]" size={32} />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
