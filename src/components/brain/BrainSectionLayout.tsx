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
  ArrowLeft,
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

export function BrainSectionLayout({ slug }: { slug: string }) {
  const index = BRAIN_SECTIONS.findIndex((s) => s.slug === slug);
  const section = BRAIN_SECTIONS[index];
  if (!section) return null;

  const Icon = ICON_MAP[section.icon];
  const prev = index > 0 ? BRAIN_SECTIONS[index - 1] : null;
  const next = index < BRAIN_SECTIONS.length - 1 ? BRAIN_SECTIONS[index + 1] : null;

  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <Link
          href="/brain"
          className="inline-flex items-center gap-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest hover:text-brand-orange transition-colors mb-8"
        >
          <ArrowLeft size={12} /> The Brain
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-white/5 rounded-2xl text-brand-orange">
            <Icon size={28} />
          </div>
          <span className="font-mono text-2xl md:text-3xl font-black text-white/20 tracking-tighter">
            {section.number}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-sans font-black uppercase text-white mb-6 leading-[0.95] tracking-tighter">
          {section.title}
        </h1>
        <p className="font-display italic text-xl md:text-2xl text-white/70 mb-6 leading-snug max-w-2xl">
          {section.purpose}
        </p>
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          {section.description}
        </p>

        <div className="space-y-16">
          {section.groups.map((group) => (
            <div key={group.title} className="border-t border-white/5 pt-10">
              <h2 className="font-mono text-[10px] text-brand-orange uppercase tracking-[0.3em] font-black mb-6">
                {group.title}
              </h2>
              <ul className="space-y-3 max-w-2xl">
                {group.items.map((item, i) => (
                  <li key={i} className="flex gap-4 text-zinc-500 text-sm md:text-base leading-relaxed">
                    <span className="font-mono text-[10px] text-brand-orange/40 pt-1 shrink-0 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="italic">{item} — coming soon.</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-6">
          {prev ? (
            <Link
              href={`/brain/${prev.slug}`}
              className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group"
            >
              <ArrowLeft size={16} className="shrink-0" />
              <span className="font-mono text-[10px] uppercase tracking-widest">
                {prev.number} — {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/brain/${next.slug}`}
              className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors ml-auto text-right"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest">
                {next.number} — {next.title}
              </span>
              <ArrowRight size={16} className="shrink-0" />
            </Link>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}
