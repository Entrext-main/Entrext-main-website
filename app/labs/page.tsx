import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Entrext-Labs",
  description:
    "Entrext-Labs: an experimentation space for early-stage founders building one-feature applications from scratch — journey of 0 to 100.",
  alternates: { canonical: "/labs" },
  openGraph: { url: "/labs", title: "Entrext-Labs · Entrext" },
};

const items: SitelinkItem[] = [
  {
    label: "How Labs works",
    description: "Ship one-feature products in public. Validate, then pair with the opposite skill.",
    href: "#process",
  },
  {
    label: "0 → 100 in a week",
    description: "Launch under a week. First paying customers within a month. Velocity over perfection.",
    href: "#velocity",
  },
  {
    label: "Equity at Labs",
    description: "Up to 12% Primary, up to 8% Secondary. Solo full-stack founder: 20%, no split.",
    href: "#equity",
  },
  {
    label: "Apply to Labs",
    description: "Five Labs teams open per year. 15–20 active products at any time.",
    href: "/apply#primary",
  },
];

export default function LabsPage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Entrext-Labs
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          The experimental build space. Growth thinkers and technical builders shipping one-feature
          products and validating ideas in public.
        </p>

        <SitelinksList items={items} eyebrow="Labs_Index // 05" />

        <section id="process" className="scroll-mt-32 mt-32 border-t border-white/5 pt-16">
          <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">// 01 Process</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Build in public, scale in pairs.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Labs is where the studio runs experiments. You start solo or with a single skill set, ship a
            one-feature product, watch the metric. If it pulls, the &ldquo;opposite partner&rdquo; — tech if
            you&apos;re growth, growth if you&apos;re tech — joins to scale it into a real system.
          </p>
        </section>

        <section id="velocity" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">// 02 Velocity</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Velocity is the product.
          </h2>
          <ul className="space-y-3 max-w-2xl text-zinc-300 leading-relaxed">
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">01</span><span>Under a week to first ship.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">02</span><span>~1 month to validate or kill.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">03</span><span>Meets every alternate day. Everything else is flexible.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">04</span><span>15–20 active Labs products at any time.</span></li>
          </ul>
        </section>

        <section id="equity" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">// 03 Equity</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            What you walk away with.
          </h2>
          <ul className="space-y-3 max-w-2xl text-zinc-300 leading-relaxed">
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">01</span><span>Primary Partner: up to 12% — your idea, you lead.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">02</span><span>Secondary Partner: up to 8% — join validated momentum.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">03</span><span>Solo founder with both skills: 20%, no split.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">04</span><span>Entrext covers tools, infra, and growth distribution. Zero upfront cost for full-time founders.</span></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
