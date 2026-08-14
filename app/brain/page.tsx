import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { BRAIN_SECTIONS } from "@/src/constants/brain";
import {
  Rocket,
  Brain as BrainIcon,
  Users,
  HardHat,
  TrendingUp,
  Cpu,
  Settings,
  Scale,
  BookOpen,
  FlaskConical,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Rocket,
  Brain: BrainIcon,
  Users,
  HardHat,
  TrendingUp,
  Cpu,
  Settings,
  Scale,
  BookOpen,
  FlaskConical,
  Wrench,
};

export const metadata: Metadata = {
  title: "Brain",
  description:
    "Developer documentation + operating system + institutional memory for Entrext. What we are, how we build, how we operate, and exactly what to do next.",
  alternates: { canonical: "/brain" },
  openGraph: { url: "/brain", title: "Brain · Entrext" },
};

export default function BrainPage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          The <br />
          <span className="opacity-20 text-brand-orange italic">Brain.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Open the Brain and know what Entrext is, how we think, how we build, how we operate, and
          exactly what to do next. Developer documentation, operating system, and institutional memory
          — one system, ten sections, built in the open and edited as we go.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BRAIN_SECTIONS.map((section) => {
            const Icon = ICON_MAP[section.icon];
            return (
              <Link
                key={section.slug}
                href={`/brain/${section.slug}`}
                className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all p-6 md:p-8"
              >
                <div className="p-3 bg-white/5 rounded-xl text-brand-orange shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono text-[10px] text-white/30 tabular-nums">{section.number}</span>
                    <h2 className="font-sans font-black uppercase text-lg md:text-xl text-white tracking-tight group-hover:text-brand-orange transition-colors">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-sm text-zinc-500 italic leading-relaxed">{section.purpose}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-white/20 group-hover:text-brand-orange group-hover:translate-x-1 transition-all shrink-0 mt-2"
                />
              </Link>
            );
          })}
        </div>

        <p className="mt-32 max-w-2xl text-sm text-zinc-500 italic border-t border-white/5 pt-12">
          This is Layer 1 — the map. We&apos;re filling in the pages behind each section as we go,
          starting with what people actually need first. Have something we should be writing down?
          Email{" "}
          <a className="text-[#ff4d00] hover:underline" href="mailto:business@entrext.com?subject=Brain%20Suggestion">
            business@entrext.com
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
