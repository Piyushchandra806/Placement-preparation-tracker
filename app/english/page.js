/**
 * English Speaking — Subject page.
 */
import SubjectPageLayout from "@/components/subjects/SubjectPageLayout";
import { SUBJECTS } from "@/lib/data";

export const metadata = {
  title: "English Speaking — Mission 90",
  description: "Build your English speaking confidence with daily conversation practice.",
};

export default function EnglishPage() {
  const subject = SUBJECTS.find((s) => s.slug === "english");
  return <SubjectPageLayout subject={subject} />;
}
