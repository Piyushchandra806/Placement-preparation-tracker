/**
 * Logical Reasoning — Subject page.
 */
import SubjectPageLayout from "@/components/subjects/SubjectPageLayout";
import { SUBJECTS } from "@/lib/data";

export const metadata = {
  title: "Logical Reasoning — Mission 90",
  description: "Sharpen your logical reasoning skills with daily pattern and series problems.",
};

export default function ReasoningPage() {
  const subject = SUBJECTS.find((s) => s.slug === "reasoning");
  return <SubjectPageLayout subject={subject} />;
}
