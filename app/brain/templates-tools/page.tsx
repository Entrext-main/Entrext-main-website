import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "10 — Templates & Tools",
  description: "The action layer — come here when you need to do something.",
  alternates: { canonical: "/brain/templates-tools" },
  openGraph: { url: "/brain/templates-tools", title: "10 — Templates & Tools · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="templates-tools" />;
}
