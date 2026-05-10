import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Edge Foundation",
  description:
    "Edge Foundation: marketplace for hyper-casual gaming. Games that make you better — focus, discipline, execution, made playable.",
  alternates: { canonical: "/edge" },
  openGraph: { url: "/edge", title: "Edge Foundation · Entrext" },
};

const items: SitelinkItem[] = [
  {
    label: "Marketplace overview",
    description: "Hyper-creative, skill-elevating games designed for focus, growth, and execution.",
    href: "#overview",
  },
  {
    label: "Performance frameworks",
    description: "From surface execution to infra thinking through interactive paradigm shifts.",
    href: "#frameworks",
  },
  {
    label: "Submit a game",
    description: "20–40 new games released a year. Submissions reviewed every cycle.",
    href: "#submit",
  },
  {
    label: "Apply as a builder",
    description: "Game makers, designers, and ops who want to ship through Edge.",
    href: "/apply#primary",
  },
];

export default function EdgePage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Edge <span className="opacity-20 text-brand-orange italic">Foundation.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Marketplace for Hyper-Casual Gaming. Games that make you better — focus, discipline,
          execution, made playable.
        </p>

        <SitelinksList items={items} eyebrow="Edge_Index // 06" />

        <section id="overview" className="scroll-mt-32 mt-32 border-t border-white/5 pt-16">
          <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">// 01 Marketplace</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Games that make you better.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Edge is the gaming wing of the studio. Hyper-casual, hyper-creative, skill-elevating.
            Everything we publish is designed to compound a player&apos;s ability to focus, decide, and
            execute — entertainment as performance training.
          </p>
        </section>

        <section id="frameworks" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">// 02 Frameworks</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Infra over surface.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We build performance frameworks, not just titles. Each Edge release is an interactive
            paradigm shift — moving players from surface execution to infrastructure thinking. Mechanics
            are the message.
          </p>
        </section>

        <section id="submit" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">// 03 Submit</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Submit a game.
          </h2>
          <ul className="space-y-3 max-w-2xl text-zinc-300 leading-relaxed mb-10">
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">01</span><span>20–40 new releases a year through Edge.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">02</span><span>Submissions reviewed every Labs cycle.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">03</span><span>Distribution, discoverability, and shared infra come with the platform.</span></li>
          </ul>
          <a
            href="mailto:hello@entrext.com?subject=Edge%20Submission"
            className="inline-flex items-center gap-4 bg-[#ff4d00] text-white px-10 py-5 rounded-md font-black text-[10px] uppercase tracking-[0.4em] hover:-translate-y-1 transition-transform shadow-[0_20px_50px_rgba(255,77,0,0.2)]"
          >
            Pitch a game
            <span aria-hidden>→</span>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
