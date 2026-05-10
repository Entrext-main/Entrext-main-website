import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "Discover the Entrext entrepreneur ecosystem — Labs, Pro, and Edge.",
  alternates: { canonical: "/ecosystem" },
  openGraph: { url: "/ecosystem", title: "Ecosystem · Entrext" },
};

const items: SitelinkItem[] = [
  {
    label: "Entrext Pro",
    description: "Validated ideas meet serious & experienced founders.",
    href: "/pro",
  },
  {
    label: "Entrext Labs",
    description: "Experimentation for early-stage founders — one-feature applications, journey from 0 to 100.",
    href: "/labs",
  },
  {
    label: "Edge Foundation",
    description: "Marketplace for Hyper-Casual Gaming. Everything Demands Great Execution.",
    href: "/edge",
  },
];

export default function EcosystemPage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Ecosystem
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Three interlocking divisions. One bootstrapped studio. Pick your entry point.
        </p>

        <SitelinksList items={items} eyebrow="Network_Index // 01" />
      </main>
      <Footer />
    </div>
  );
}
