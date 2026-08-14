import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "08 — Knowledge",
  description: "How we think about building companies — mental models, not operational docs.",
  alternates: { canonical: "/brain/knowledge" },
  openGraph: { url: "/brain/knowledge", title: "08 — Knowledge · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="knowledge" />;
}
