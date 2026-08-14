import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "06 — Operations",
  description: "How do we actually operate every day?",
  alternates: { canonical: "/brain/operations" },
  openGraph: { url: "/brain/operations", title: "06 — Operations · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="operations" />;
}
