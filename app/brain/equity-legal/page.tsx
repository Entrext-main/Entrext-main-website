import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "07 — Equity & Legal",
  description: "The cap table, vesting, agreements, and the legal scaffolding behind every venture.",
  alternates: { canonical: "/brain/equity-legal" },
  openGraph: { url: "/brain/equity-legal", title: "07 — Equity & Legal · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="equity-legal" />;
}
