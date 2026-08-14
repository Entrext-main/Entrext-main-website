import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "02 — People & Partners",
  description: "Who are the people inside Entrext, and how do they work together?",
  alternates: { canonical: "/brain/people-partners" },
  openGraph: { url: "/brain/people-partners", title: "02 — People & Partners · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="people-partners" />;
}
