import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "01 — Entrext",
  description: "What do we believe? The Entrext philosophy — mission, culture, and how we think.",
  alternates: { canonical: "/brain/entrext" },
  openGraph: { url: "/brain/entrext", title: "01 — Entrext · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="entrext" />;
}
