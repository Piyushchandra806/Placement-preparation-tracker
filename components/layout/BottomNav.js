/**
 * BottomNav — Floating Capsule Mobile Dock with macOS-style Dock effect.
 * Powered by motion and xevrion dock animation:
 * - Icons swell as fingers/cursors near them (Spring physics).
 * - macOS launch hop & squash bounce animation upon tap/click.
 * - Center prominent Reminders button with notification badge.
 * - Active running indicator dots and floating tooltips.
 */
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { Home, Calendar, Bell, BarChart3, Settings } from "lucide-react";
import { useReminder } from "@/context/ReminderContext";

const REST = 42;
const PEAK = 58;
const REACH = 90;
const SIZE_SPRING = { mass: 0.1, stiffness: 170, damping: 14 };
const TOOLTIP_DELAY = 220;

const HOP = {
  y: [0, -18, 0, -8, 0],
  transition: {
    duration: 0.65,
    times: [0, 0.3, 0.55, 0.78, 1],
    ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
  },
};

const SQUASH = {
  scaleY: [1, 1.05, 0.9, 1.02, 0.97, 1],
  scaleX: [1, 0.96, 1.07, 0.99, 1.02, 1],
  transition: { duration: 0.65, times: [0, 0.3, 0.55, 0.7, 0.8, 1] },
};

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { unreadCount, setIsDrawerOpen } = useReminder();
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(Infinity);
  const [tip, setTip] = useState(null);
  const timer = useRef(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const showTip = (label) => {
    clearTimeout(timer.current);
    if (tip) setTip({ label, instant: true });
    else
      timer.current = setTimeout(
        () => setTip({ label, instant: false }),
        TOOLTIP_DELAY
      );
  };

  const hideTip = () => {
    clearTimeout(timer.current);
    setTip(null);
  };

  const items = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Study Plan",
      href: "/plan",
      icon: Calendar,
      isActive: pathname === "/plan",
    },
    {
      label: "Reminders",
      isAction: true,
      icon: Bell,
      isAccent: true,
      badge: unreadCount,
      onClick: () => setIsDrawerOpen(true),
    },
    {
      label: "Progress",
      href: "/progress",
      icon: BarChart3,
      isActive: pathname === "/progress",
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
      isActive: pathname === "/settings",
    },
  ];

  return (
    <nav
      aria-label="Mobile Navigation Dock"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden pointer-events-auto"
    >
      <div
        className="flex h-16 items-end gap-1.5 px-2.5 pb-2 rounded-full bg-[#141416]/92 text-white border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl dark:bg-[#f4f4f7]/95 dark:text-zinc-900 dark:border-white/60 dark:shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.3)] transition-colors duration-200"
        onPointerMove={(e) => {
          if (reduceMotion) return;
          mouseX.set(e.clientX);
        }}
        onPointerLeave={() => {
          mouseX.set(Infinity);
          hideTip();
        }}
        onTouchMove={(e) => {
          if (reduceMotion || !e.touches[0]) return;
          mouseX.set(e.touches[0].clientX);
        }}
        onTouchEnd={() => {
          mouseX.set(Infinity);
          hideTip();
        }}
      >
        {items.map((item) => (
          <DockNavItem
            key={item.label}
            item={item}
            mouseX={mouseX}
            tip={tip?.label === item.label ? tip : null}
            onEnter={() => showTip(item.label)}
            onFocus={() => setTip({ label: item.label, instant: false })}
            onBlur={hideTip}
            onNavigate={() => {
              if (item.onClick) {
                item.onClick();
              } else if (item.href) {
                router.push(item.href);
              }
            }}
          />
        ))}
      </div>
    </nav>
  );
}

function DockNavItem({
  item,
  mouseX,
  tip,
  onEnter,
  onFocus,
  onBlur,
  onNavigate,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const hop = useRef([]);
  useEffect(() => () => hop.current.forEach((a) => a.stop()), []);

  const distance = useTransform(mouseX, (x) => {
    const box = ref.current?.getBoundingClientRect();
    return box ? x - box.left - box.width / 2 : Infinity;
  });

  const target = useTransform(distance, [-REACH, 0, REACH], [REST, PEAK, REST]);
  const size = useSpring(target, SIZE_SPRING);
  const iconSize = useTransform(size, (s) => (item.isAccent ? s * 0.46 : s * 0.44));

  const launch = () => {
    onNavigate();
    if (reduceMotion || !ref.current) return;
    hop.current.forEach((a) => a.stop());
    hop.current = [
      animate(ref.current, { y: HOP.y }, HOP.transition),
      animate(
        ref.current,
        { scaleX: SQUASH.scaleX, scaleY: SQUASH.scaleY },
        SQUASH.transition
      ),
    ];
  };

  const Icon = item.icon;

  return (
    <span className="relative flex shrink-0">
      <motion.button
        ref={ref}
        type="button"
        aria-label={item.label}
        style={{ width: size, height: size, originY: 1 }}
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-full outline-hidden transition-colors duration-150 active:scale-[0.94] cursor-pointer",
          item.isAccent
            ? "bg-[var(--accent)] text-white shadow-lg shadow-[rgba(232,87,58,0.5)]"
            : item.isActive
            ? "bg-white/20 text-white shadow-xs dark:bg-black/[0.12] dark:text-zinc-950 dark:shadow-2xs"
            : "text-zinc-400 hover:text-white hover:bg-white/10 dark:text-zinc-500 dark:hover:text-zinc-950 dark:hover:bg-black/5"
        )}
        onPointerEnter={(e) => {
          if (e.pointerType !== "touch") onEnter();
        }}
        onClick={launch}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center flex-shrink-0"
        >
          <Icon
            className="w-full h-full"
            strokeWidth={item.isActive || item.isAccent ? 2.4 : 2}
          />
        </motion.div>

        {/* Badge for notifications */}
        {item.badge > 0 && (
          <span className="absolute -top-0.5 -right-0.5 px-1 min-w-4 h-4 text-[9px] font-bold bg-white text-[var(--accent)] rounded-full shadow-xs flex items-center justify-center">
            {item.badge}
          </span>
        )}
      </motion.button>

      {/* Floating tooltip label */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg bg-zinc-900/90 text-white dark:bg-white/95 dark:text-zinc-950 px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap border border-white/10 dark:border-black/10 shadow-lg backdrop-blur-md transition-[opacity,translate] duration-150 ease-out",
          tip ? "opacity-100" : "translate-y-1 opacity-0",
          tip?.instant && "transition-none"
        )}
      >
        {item.label}
      </span>

      {/* Running active indicator dot */}
      {item.isActive && (
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-1 left-1/2 -ml-0.5 size-1 rounded-full bg-white dark:bg-zinc-900 transition-[opacity,scale] ease-out duration-200"
        />
      )}
    </span>
  );
}
