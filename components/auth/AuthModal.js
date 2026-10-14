/**
 * AuthModal — Apple-inspired frosted glass modal for Sign In, Registration,
 * and 1-Click Demo Account Login.
 */
"use client";

import { useState } from "react";
import { useProgress } from "@/context/ProgressContext";
import {
  Lock,
  Mail,
  User as UserIcon,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Loader2,
} from "lucide-react";

export default function AuthModal() {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    login,
    register,
    autoLoginDemoUser,
    isAuthLoading,
  } = useProgress();

  const [mode, setMode] = useState("login"); // 'login' | 'register'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!isAuthModalOpen) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);

    try {
      if (mode === "login") {
        if (!email.trim() || !password) {
          throw new Error("Please enter both email and password.");
        }
        const res = await login(email, password);
        if (!res.success) {
          throw new Error(res.error || "Login failed");
        }
      } else {
        if (!name.trim() || !email.trim() || !password) {
          throw new Error("Please fill in all required fields.");
        }
        if (password.length < 6) {
          throw new Error("Password must be at least 6 characters.");
        }
        const res = await register(name, email, password);
        if (!res.success) {
          throw new Error(res.error || "Registration failed");
        }
      }
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleQuickDemo() {
    setFormError("");
    setSubmitting(true);
    try {
      await autoLoginDemoUser();
      setIsAuthModalOpen(false);
    } catch (err) {
      setFormError(err.message || "Failed to log in as demo candidate");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md p-6 sm:p-7 shadow-2xl rounded-3xl border border-black/10 dark:border-white/15 bg-white/95 dark:bg-[#16161e]/95 backdrop-blur-2xl animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/[0.05] dark:bg-white/[0.08] hover:bg-black/[0.1] dark:hover:bg-white/[0.16] flex items-center justify-center text-[var(--text-secondary)] dark:text-zinc-300 hover:text-[var(--foreground)] dark:hover:text-white transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[var(--accent-bg)] text-[var(--accent)] flex items-center justify-center mx-auto mb-3 shadow-2xs">
            <ShieldCheck size={26} />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
            {mode === "login" ? "Sign In to Mission 90" : "Create Candidate Account"}
          </h2>
          <p className="text-xs text-[var(--text-secondary)] dark:text-zinc-400 mt-1">
            Track your 90-day progress, weighted daily score &amp; streak on MongoDB Atlas
          </p>
        </div>

        {/* 1-Click Demo Login Button */}
        <button
          type="button"
          onClick={handleQuickDemo}
          disabled={submitting || isAuthLoading}
          className="w-full mb-4 py-3 px-4 rounded-2xl bg-gradient-to-r from-[var(--accent)] to-rose-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
        >
          {submitting ? (
            <Loader2 size={16} className="animate-spin text-white" />
          ) : (
            <Sparkles size={16} className="text-white" />
          )}
          <span>Sign In as Piyush (1-Click Demo Candidate)</span>
        </button>

        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-black/[0.08] dark:bg-white/10" />
          <span className="text-[10px] uppercase font-bold text-[var(--text-tertiary)] dark:text-zinc-400 tracking-wider">
            Or continue with email
          </span>
          <div className="flex-1 h-px bg-black/[0.08] dark:bg-white/10" />
        </div>

        {/* Error Alert */}
        {formError && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/50 text-rose-700 dark:text-rose-300 text-xs animate-shake">
            {formError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === "register" && (
            <div>
              <label className="block text-[11px] font-semibold text-[var(--text-secondary)] dark:text-zinc-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <UserIcon
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] dark:text-zinc-400"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Piyush Chandra"
                  required
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.07] border border-black/[0.08] dark:border-white/12 text-xs text-[var(--foreground)] dark:text-white placeholder:text-[var(--text-tertiary)] dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-semibold text-[var(--text-secondary)] dark:text-zinc-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] dark:text-zinc-400"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.07] border border-black/[0.08] dark:border-white/12 text-xs text-[var(--foreground)] dark:text-white placeholder:text-[var(--text-tertiary)] dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[var(--text-secondary)] dark:text-zinc-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] dark:text-zinc-400"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.07] border border-black/[0.08] dark:border-white/12 text-xs text-[var(--foreground)] dark:text-white placeholder:text-[var(--text-tertiary)] dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
              />
            </div>
          </div>

          {/* High-Contrast Primary Submit Button */}
          <button
            type="submit"
            disabled={submitting || isAuthLoading}
            className="w-full mt-3 py-3 px-4 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <Loader2 size={16} className="animate-spin text-white dark:text-zinc-950" />
            ) : (
              <ArrowRight size={16} className="text-white dark:text-zinc-950 stroke-[2.5]" />
            )}
            <span className="text-white dark:text-zinc-950 font-bold tracking-wide">
              {mode === "login" ? "Sign In" : "Create Account"}
            </span>
          </button>
        </form>

        {/* Mode switcher */}
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setFormError("");
            }}
            className="text-xs text-[var(--text-secondary)] dark:text-zinc-400 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors cursor-pointer"
          >
            {mode === "login" ? (
              <span>
                New here? <span className="font-semibold text-[var(--accent)] underline ml-1">Create an account</span>
              </span>
            ) : (
              <span>
                Already have an account? <span className="font-semibold text-[var(--accent)] underline ml-1">Sign in</span>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
