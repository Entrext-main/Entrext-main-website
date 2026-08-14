import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "04 — Growth & Sales",
  description: "The journey tells you when. This section tells you how.",
  alternates: { canonical: "/brain/growth-sales" },
  openGraph: { url: "/brain/growth-sales", title: "04 — Growth & Sales · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="growth-sales" />;
}
