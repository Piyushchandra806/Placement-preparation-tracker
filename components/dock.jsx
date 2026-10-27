"use client";

import React, { useEffect, useRef, useState, isValidElement } from "react";
import { useRouter } from "next/navigation";
import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

// Spring physics: light mass and low damping for a responsive, tactile spring
const SIZE_SPRING = { mass: 0.1, stiffness: 170, damping: 14 };
const TOOLTIP_DELAY = 220;

// macOS-style bounce hop and squash transitions
const HOP = {
  y: [0, -14, 0, -6, 0],
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

export function Dock({
  items = [],
  orientation = "horizontal",
  variant = "inverted",
  defaultRunning = [],
  onLaunch,
  className,
  restSize,
  peakSize,
  reach,
  ariaLabel = "Dock",
}) {
  const isVertical = orientation === "vertical";
  const isInverted = variant === "inverted";
  const defaultRest = isVertical ? 40 : 42;
  const defaultPeak = isVertical ? 52 : 60;
  const defaultReach = isVertical ? 75 : 100;

  const actualRest = restSize ?? defaultRest;
  const actualPeak = peakSize ?? defaultPeak;
  const actualReach = reach ?? defaultReach;

  const reduceMotion = useReducedMotion();
  const mouseCoord = useMotionValue(Infinity);
  const [tip, setTip] = useState(null);
  const [running, setRunning] = useState(defaultRunning);
  const timer = useRef(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const showTip = (label, badge) => {
    clearTimeout(timer.current);
    if (tip) setTip({ label, badge, instant: true });
    else
      timer.current = setTimeout(
        () => setTip({ label, badge, instant: false }),
        TOOLTIP_DELAY,
      );
  };

  const hideTip = () => {
    clearTimeout(timer.current);
    setTip(null);
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        isVertical
          ? isInverted
            ? "flex flex-col items-center gap-2 rounded-3xl bg-[#121316]/95 text-white border border-white/15 dark:bg-[#f4f4f7]/95 dark:text-zinc-900 dark:border-white/60 p-2 shadow-raised"
            : "flex flex-col items-center gap-2 rounded-3xl bg-muted/60 dark:bg-white/[0.04] p-2 shadow-raised"
          : isInverted
          ? "flex h-[68px] items-end gap-1.5 rounded-full bg-[#121316]/95 text-white border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.2)] backdrop-blur-2xl dark:bg-[#f4f4f7]/95 dark:text-zinc-900 dark:border-white/80 dark:shadow-[0_24px_60px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.4)] px-3.5 pb-2.5 pt-1.5"
          : "flex h-16 items-end gap-2 rounded-full bg-muted px-3 pb-3 shadow-raised",
        className,
      )}
      onPointerMove={(e) => {
        if (reduceMotion || e.pointerType === "touch") return;
        mouseCoord.set(isVertical ? e.clientY : e.clientX);
      }}
      onPointerLeave={() => {
        mouseCoord.set(Infinity);
        hideTip();
      }}
    >
      {items.map((item) => (
        <React.Fragment key={item.label}>
          <DockItem
            item={item}
            mouseCoord={mouseCoord}
            isVertical={isVertical}
            isInverted={isInverted}
            restSize={actualRest}
            peakSize={actualPeak}
            reach={actualReach}
            tip={tip?.label === item.label ? tip : null}
            onEnter={() => showTip(item.label, item.badge)}
            onFocus={() =>
              setTip({ label: item.label, badge: item.badge, instant: false })
            }
            onBlur={hideTip}
            running={running.includes(item.label)}
            onLaunch={(label) => {
              setRunning((r) =>
                r.includes(label) ? r : [...r, label],
              );
              onLaunch?.(label);
            }}
          />
          {item.dividerAfter && (
            <div
              className={cn(
                "shrink-0",
                isInverted
                  ? "bg-white/20 dark:bg-black/15"
                  : "bg-zinc-200/80 dark:bg-white/[0.1]",
                isVertical ? "w-6 h-px my-1" : "h-7 w-px mx-1.5 mb-1 self-center",
              )}
              aria-hidden="true"
            />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

function DockItem({
  item,
  mouseCoord,
  isVertical,
  isInverted = false,
  restSize,
  peakSize,
  reach,
  tip,
  onEnter,
  onFocus,
  onBlur,
  running,
  onLaunch,
}) {
  const ref = useRef(null);
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const hop = useRef([]);
  useEffect(() => () => hop.current.forEach((a) => a.stop()), []);

  const distance = useTransform(mouseCoord, (pos) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return Infinity;
    return isVertical
      ? pos - box.top - box.height / 2
      : pos - box.left - box.width / 2;
  });

  const target = useTransform(
    distance,
    [-reach, 0, reach],
    [restSize, peakSize, restSize],
  );
  const size = useSpring(target, SIZE_SPRING);
  const iconSize = useTransform(size, (s) => s * 0.46);

  const isActive = Boolean(item.isActive);
  const isRunning = running || isActive;

  const launch = (e) => {
    if (item.onClick) {
      item.onClick(e);
    } else if (item.href) {
      router.push(item.href);
    }

    onLaunch?.(item.label);

    if (reduceMotion || !ref.current) return;
    hop.current.forEach((a) => a.stop());
    hop.current = [
      animate(ref.current, { y: HOP.y }, HOP.transition),
      animate(
        ref.current,
        { scaleX: SQUASH.scaleX, scaleY: SQUASH.scaleY },
        SQUASH.transition,
      ),
    ];
  };

  return (
    <span className="relative flex shrink-0 items-center justify-center">
      <motion.button
        ref={ref}
        type="button"
        aria-label={
          item.badge
            ? `${item.label}, ${item.badge} notifications`
            : isRunning
            ? `${item.label}, active`
            : item.label
        }
        aria-current={isActive ? "page" : undefined}
        style={{
          width: size,
          height: size,
          originY: isVertical ? 0.5 : 1,
          originX: 0.5,
        }}
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-2xl outline-hidden transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-foreground active:scale-[0.95]",
          isInverted
            ? isActive
              ? "bg-white text-zinc-950 font-bold shadow-lg ring-2 ring-[var(--accent)] dark:bg-zinc-950 dark:text-white dark:font-bold dark:shadow-md dark:ring-2 dark:ring-[var(--accent)]"
              : "bg-white/10 text-zinc-200 hover:text-white hover:bg-white/20 border border-white/10 shadow-xs dark:bg-black/[0.08] dark:text-zinc-700 dark:hover:text-zinc-950 dark:hover:bg-black/[0.14] dark:border-black/[0.06]"
            : isActive
            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-md ring-2 ring-[var(--accent)]/40"
            : "bg-background/90 text-foreground/80 shadow-raised hover:bg-zinc-100 dark:hover:bg-white/[0.12] hover:text-foreground",
          item.className,
        )}
        onPointerEnter={(e) => {
          if (e.pointerType !== "touch") onEnter();
        }}
        onClick={launch}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <DockIconContent
          icon={item.icon}
          iconSize={iconSize}
          isActive={isActive}
        />

        {/* Badge counter */}
        {Boolean(item.badge && item.badge > 0) && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-1 -right-1 flex min-w-[16px] h-4 items-center justify-center rounded-full bg-[var(--accent)] px-1 text-[10px] font-bold text-white shadow-2xs"
          >
            {item.badge}
          </span>
        )}
      </motion.button>

      {/* Floating Tooltip */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute z-50 rounded-lg px-2.5 py-1 text-xs font-semibold whitespace-nowrap shadow-xl transition-[opacity,transform] duration-150 ease-out",
          "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950",
          isVertical
            ? "left-full top-1/2 -translate-y-1/2 ml-3.5"
            : "bottom-full left-1/2 -translate-x-1/2 mb-3",
          tip
            ? "opacity-100 scale-100"
            : isVertical
            ? "opacity-0 scale-95 translate-x-1"
            : "opacity-0 translate-y-1",
          tip?.instant && "transition-none",
        )}
      >
        {item.label}
        {item.badge && item.badge > 0 ? ` (${item.badge})` : ""}
      </span>

      {/* Running / Active indicator light */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute rounded-full transition-[opacity,scale] ease-[cubic-bezier(0.23,1,0.32,1)]",
          isVertical
            ? "-left-1.5 top-1/2 -translate-y-1/2 size-1.5"
            : "top-full left-1/2 mt-1 -ml-0.5 size-1",
          isRunning
            ? cn(
                "scale-100 opacity-100 duration-200",
                isActive
                  ? "bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                  : "bg-foreground",
              )
            : "scale-50 opacity-0 duration-150",
        )}
      />
    </span>
  );
}

function DockIconContent({ icon, iconSize, isActive }) {
  if (isValidElement(icon)) {
    // If it's pure SVG tags (path, rect, circle, fragment)
    if (
      icon.type === "path" ||
      icon.type === "rect" ||
      icon.type === "circle" ||
      icon.type === "g" ||
      icon.type === React.Fragment
    ) {
      return (
        <motion.svg
          viewBox="0 0 24 24"
          style={{ width: iconSize, height: iconSize }}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icon}
        </motion.svg>
      );
    }

    // Already a React component element
    return (
      <motion.span
        style={{ width: iconSize, height: iconSize }}
        className="flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full"
        aria-hidden="true"
      >
        {icon}
      </motion.span>
    );
  }

  // If icon is a Component (e.g. Lucide Icon function)
  if (typeof icon === "function" || (typeof icon === "object" && icon !== null)) {
    const IconComponent = icon;
    return (
      <motion.span
        style={{ width: iconSize, height: iconSize }}
        className="flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full"
        aria-hidden="true"
      >
        <IconComponent strokeWidth={isActive ? 2.2 : 1.8} />
      </motion.span>
    );
  }

  return null;
}

const ITEMS = [
  {
    label: "Home",
    icon: <path d="M3.5 10.5 12 4l8.5 6.5V19a1 1 0 0 1-1 1H15v-5.5H9V20H4.5a1 1 0 0 1-1-1Z" />,
  },
  {
    label: "Search",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-4.35-4.35" />
      </>
    ),
  },
  {
    label: "Mail",
    icon: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
  },
  {
    label: "Calendar",
    icon: (
      <>
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    label: "Music",
    icon: (
      <>
        <path d="M9 18V5l11-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="17" cy="16" r="3" />
      </>
    ),
  },
  {
    label: "Settings",
    icon: (
      <>
        <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12" />
        <circle cx="16" cy="6" r="2" />
        <circle cx="10" cy="12" r="2" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),
  },
];

export default function DockDemo() {
  return <Dock items={ITEMS} defaultRunning={["Home", "Mail"]} />;
}
