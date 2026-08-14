import type { Metadata } from "next";
import { BrainSectionLayout } from "@/src/components/brain/BrainSectionLayout";

export const metadata: Metadata = {
  title: "05 — Product & Tech",
  description: "How we design, build, and ship — product thinking, engineering standards, and AI.",
  alternates: { canonical: "/brain/product-tech" },
  openGraph: { url: "/brain/product-tech", title: "05 — Product & Tech · Brain · Entrext" },
};

export default function Page() {
  return <BrainSectionLayout slug="product-tech" />;
}
