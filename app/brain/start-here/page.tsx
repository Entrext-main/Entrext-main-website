import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "00 — Start Here",
  description: "Spend 30–60 minutes here and understand the entire Entrext system.",
  alternates: { canonical: "/brain/start-here" },
  openGraph: { url: "/brain/start-here", title: "00 — Start Here · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="start-here" />;
}
