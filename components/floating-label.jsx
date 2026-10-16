"use client";

import { useId, useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const ICON_SWAP = {
  type: "spring",
  duration: 0.3,
  bounce: 0,
};
const RISE_STAGGER = 14;
const SETTLE_STAGGER = 8;
const STAGGER_CAP = 8;

export function FloatingLabel({
  label,
  type = "text",
  name,
  autoComplete,
  defaultValue,
  value,
  required,
  disabled,
  validate,
  onValueChange,
  onChange,
  className,
  inputClassName,
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [live, setLive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const check = (val) => {
    const error = validate?.(val) ?? null;
    if (error) setMessage(error);
    setStatus(error ? "error" : "valid");
    return error;
  };

  const invalid = status === "error";
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(() => (value !== undefined ? Boolean(value) : Boolean(defaultValue)));

  const isControlled = value !== undefined;
  const isFilled = isControlled ? Boolean(value) : filled;
  const floated = focused || isFilled;
  const letters = Array.from(label);

  const effectiveType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={effectiveType}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          value={value}
          required={required}
          disabled={disabled}
          placeholder=" "
          spellCheck={false}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? errorId : undefined}
          onFocus={() => setFocused(true)}
          onChange={(e) => {
            const val = e.target.value;
            if (!isControlled) setFilled(val !== "");
            onValueChange?.(val);
            onChange?.(e);
            if (!validate) return;
            if (live) check(val);
            else if (status === "valid" && validate(val)) setStatus("idle");
          }}
          onBlur={(e) => {
            setFocused(false);
            if (!validate) return;
            const val = e.target.value;
            if (val === "" && !live) return;
            if (check(val)) setLive(true);
          }}
          className={cn(
            "peer h-14 w-full rounded-2xl border bg-black/[0.03] dark:bg-white/[0.06] pt-5 pr-11 pb-1.5 pl-3.5 text-sm text-[var(--foreground)] dark:text-white outline-none transition-all duration-200",
            "focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)]",
            invalid
              ? "border-rose-500/80 dark:border-rose-500/80 focus:ring-rose-500/30"
              : "border-black/[0.08] dark:border-white/12 hover:border-black/20 dark:hover:border-white/20",
            inputClassName
          )}
        />
        <label
          htmlFor={id}
          data-floated={floated ? "true" : undefined}
          className={cn(
            "pointer-events-none absolute top-3.5 left-3.5 origin-top-left text-sm leading-5 whitespace-nowrap select-none",
            "transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
            floated
              ? "scale-[0.8] -translate-y-1.5 font-semibold text-[var(--accent)] dark:text-[var(--accent-light)]"
              : "scale-100 translate-y-0 text-zinc-500 dark:text-zinc-400 font-medium",
            invalid && "text-rose-500 dark:text-rose-400"
          )}
        >
          <span className="sr-only">{label}</span>
          <span aria-hidden>
            {letters.map((letter, i) => (
              <span
                key={i}
                style={{
                  transitionDelay: `${
                    floated
                      ? Math.min(i, STAGGER_CAP) * RISE_STAGGER
                      : Math.min(letters.length - 1 - i, STAGGER_CAP) * SETTLE_STAGGER
                  }ms`,
                }}
                className={cn(
                  "inline-block whitespace-pre",
                  "transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                  floated ? "-translate-y-[2px]" : "translate-y-0"
                )}
              >
                {letter}
              </span>
            ))}
          </span>
        </label>

        {type === "password" ? (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute top-4 right-3.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : (
          <motion.svg
            aria-hidden
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none absolute top-4 right-3.5 size-5 text-emerald-500 dark:text-emerald-400"
            initial={false}
            animate={
              status === "valid"
                ? { scale: 1, opacity: 1, filter: "blur(0px)" }
                : reduceMotion
                ? { scale: 1, opacity: 0, filter: "blur(0px)" }
                : { scale: 0.25, opacity: 0, filter: "blur(4px)" }
            }
            transition={ICON_SWAP}
          >
            <path d="m3.5 8.5 3 3 6-7" />
          </motion.svg>
        )}
      </div>

      <div
        className={cn(
          "grid transition-[grid-template-rows] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
          invalid ? "grid-rows-[1fr] duration-200" : "grid-rows-[0fr] duration-150"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            id={errorId}
            aria-hidden={!invalid}
            className={cn(
              "pt-1.5 pl-3 text-xs text-rose-500 dark:text-rose-400 transition-[opacity,translate] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-[opacity]",
              invalid
                ? "translate-y-0 opacity-100 duration-200"
                : "-translate-y-1 opacity-0 duration-150 motion-reduce:translate-y-0"
            )}
          >
            {message}
          </p>
        </div>
      </div>
      <span className="sr-only" aria-live="polite">
        {invalid ? message : ""}
      </span>
    </div>
  );
}

export default FloatingLabel;
