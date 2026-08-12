import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Entrext-Labs",
  description:
    "Entrext-Labs: an experimentation space for early-stage founders building one-feature applications from scratch. The 0-to-100 journey.",
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
    label: "0 → 1 in a week",
    description: "Launch under a week. First paying customers within a month. Velocity over perfection.",
    href: "#velocity",
  },
  {
    label: "Graduating from Labs",
    description: "Hit the checkpoint, prove demand, get matched with a Secondary Partner.",
    href: "#graduation",
  },
  {
    label: "Equity at Labs",
    description: "Primary & Secondary: 20% fixed + 5% performance (up to 25%). Solo founder: 40% flat.",
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
        <Image
          src="/logos/labs.webp"
          alt=""
          width={96}
          height={96}
          priority
          className="w-20 h-20 md:w-24 md:h-24 object-contain mb-8"
        />
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Entrext-Labs
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Where ideas become an opportunity. Stage one of the founder journey: 0 → 1. A Primary Founder
          brings a thesis, builds and tests it in public, and proves there&apos;s real demand.
        </p>

        <SitelinksList items={items} />

        <section id="process" className="scroll-mt-32 mt-32 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Build in public, scale in pairs.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Labs is where the studio runs experiments. You start solo or with a single skill set, ship a
            one-feature product, watch the metric. If it pulls, the &ldquo;opposite partner&rdquo; (tech if
            you&apos;re growth, growth if you&apos;re tech) joins to scale it into a real system.
          </p>
        </section>

        <section id="velocity" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
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

        <section id="graduation" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Four things. Not three.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
            To graduate from Labs into Pro, you need a common pattern across users, evidence of viable
            scalability, basic competition analysis, and a minimum of 50 paying customers — all four,
            not three. Clear it, and we match you with the Secondary Partner who completes the team.
          </p>
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ff4d00]/30 bg-[#ff4d00]/5 px-6 py-3">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Graduation target</span>
            <span className="font-sans font-black text-white uppercase text-sm">
              $1K MRR (B2C / Services) or $5K MRR (B2B SaaS)
            </span>
          </div>
        </section>

        <section id="equity" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            What you walk away with.
          </h2>
          <ul className="space-y-3 max-w-2xl text-zinc-300 leading-relaxed">
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">01</span><span>Primary Partner: 20% fixed + 5% performance-based (up to 25%). Your idea, you lead.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">02</span><span>Secondary Partner: 20% fixed + 5% performance-based (up to 25%). Join validated momentum.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">03</span><span>Solo founder (Labs or Pro): 40% flat.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">04</span><span>Entrext covers tools, infra, and growth distribution. Zero upfront cost for full-time founders.</span></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
