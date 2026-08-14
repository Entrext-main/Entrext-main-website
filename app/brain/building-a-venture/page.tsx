import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "03 — Building a Venture",
  description: "The actual Entrext machine — the stage-by-stage system every venture moves through.",
  alternates: { canonical: "/brain/building-a-venture" },
  openGraph: { url: "/brain/building-a-venture", title: "03 — Building a Venture · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="building-a-venture" />;
}
