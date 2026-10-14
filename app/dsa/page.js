/**
 * DSA in C++ — Subject page.
 */
import SubjectPageLayout from "@/components/subjects/SubjectPageLayout";
import { SUBJECTS } from "@/lib/data";

export const metadata = {
  title: "DSA in C++ — Mission 90",
  description: "Track your DSA preparation with daily coding problems and structured topics.",
};

export default function DSAPage() {
  const subject = SUBJECTS.find((s) => s.slug === "dsa");
  return <SubjectPageLayout subject={subject} />;
}
