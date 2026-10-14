/**
 * Dashboard — Main home page of Mission 90.
 * Composes all dashboard sections into a single scrollable view.
 */
import AppShell from "@/components/layout/AppShell";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import WeeklyChart from "@/components/dashboard/WeeklyChart";
import MissionChecklist from "@/components/dashboard/MissionChecklist";
import PendingTasks from "@/components/dashboard/PendingTasks";
import SubjectCard from "@/components/ui/SubjectCard";
import {
  SUBJECTS,
  WEEKLY_DATA,
} from "@/lib/data";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-5 stagger">
        {/* Header with welcome, progress ring, stats */}
        <DashboardHeader />

        {/* Weekly consistency chart */}
        <div className="animate-fade-in-up">
          <WeeklyChart data={WEEKLY_DATA} />
        </div>

        {/* Today's mission checklist */}
        <div className="animate-fade-in-up">
          <MissionChecklist />
        </div>

        {/* Subject cards */}
        <div className="animate-fade-in-up">
          <h2 className="font-semibold text-base mb-3">Subjects</h2>
          <div className="space-y-2.5">
            {SUBJECTS.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>

        {/* Pending tasks */}
        <div className="animate-fade-in-up">
          <PendingTasks />
        </div>
      </div>
    </AppShell>
  );
}
