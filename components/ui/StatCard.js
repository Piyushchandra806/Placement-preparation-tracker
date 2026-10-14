/**
 * StatCard — Small glass stat card used in the dashboard header grid.
 */
import DynamicIcon from "@/lib/icons";

export default function StatCard({ icon, value, label, accent = false }) {
  return (
    <div className="glass-card p-3 flex flex-col items-center justify-center gap-1 min-w-0">
      <div className="flex items-center gap-1.5">
        <DynamicIcon
          name={icon}
          size={14}
          className={accent ? "text-[var(--accent)]" : "text-zinc-600 dark:text-zinc-400"}
        />
        <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {value}
        </span>
      </div>
      <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-semibold">
        {label}
      </span>
    </div>
  );
}
