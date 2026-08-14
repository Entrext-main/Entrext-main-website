import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "09 — Case Studies & Learnings",
  description: "Not just what we believe — what actually happened.",
  alternates: { canonical: "/brain/case-studies" },
  openGraph: { url: "/brain/case-studies", title: "09 — Case Studies & Learnings · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="case-studies" />;
}
