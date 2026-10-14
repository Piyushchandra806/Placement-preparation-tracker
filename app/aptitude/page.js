/**
 * Quantitative Aptitude — Subject page.
 */
import SubjectPageLayout from "@/components/subjects/SubjectPageLayout";
import { SUBJECTS } from "@/lib/data";

export const metadata = {
  title: "Quantitative Aptitude — Mission 90",
  description: "Master quantitative aptitude with daily practice problems and concept reviews.",
};

export default function AptitudePage() {
  const subject = SUBJECTS.find((s) => s.slug === "aptitude");
  return <SubjectPageLayout subject={subject} />;
}
