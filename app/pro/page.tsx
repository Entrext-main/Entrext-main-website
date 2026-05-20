import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Entrext-Pro",
  description:
    "Entrext-Pro: where validated ideas meet serious and committed founders to build high-velocity ventures.",
  alternates: { canonical: "/pro" },
  openGraph: { url: "/pro", title: "Entrext-Pro · Entrext" },
};

const items: SitelinkItem[] = [
  {
    label: "How matching works",
    description: "High-conviction pairing, not convenience. Tech meets growth at the inflection point.",
    href: "#matching",
  },
  {
    label: "Equity & ownership",
    description: "10% each — both partners, flat. 6-month cliff, 4–5 year vesting.",
    href: "#equity",
  },
  {
    label: "Who we accept",
    description: "Serious, full-time. Experience optional. Plan B disqualifies.",
    href: "#founders",
  },
  {
    label: "Apply to Pro",
    description: "Five Pro spots open per year. One shot per person.",
    href: "/apply#primary",
  },
  {
    label: "Read the FAQ",
    description: "Equity, money, selection, ops — every question answered.",
    href: "/#faq",
  },
];

export default function ProPage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <Image
          src="/logos/pro.webp"
          alt=""
          width={96}
          height={96}
          priority
          className="w-20 h-20 md:w-24 md:h-24 object-contain mb-8"
        />
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Entrext-Pro
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Where validated ideas meet serious & committed founders. Conviction over convenience.
        </p>

        <SitelinksList items={items} eyebrow="Pro_Index // 04" />

        <section id="matching" className="scroll-mt-32 mt-32 border-t border-white/5 pt-16">
          <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">// 01 Matching</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Built around conviction.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Pro pairs a tech builder with a growth operator on a Entrext-validated idea. Both partners
            commit full-time, both hold real equity, both ship together. We don&apos;t introduce — we match,
            and only when the conviction is mutual.
          </p>
        </section>

        <section id="equity" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">// 02 Equity</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            10% each. Flat.
          </h2>
          <ul className="space-y-3 max-w-2xl text-zinc-300 leading-relaxed">
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">01</span><span>Both partners get 10% — no founder/co-founder hierarchy on cap table.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">02</span><span>6-month cliff, 4–5 year vesting. Leave early, you keep what you&apos;ve earned.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">03</span><span>Bootstrapped-first studio. Dilution requires your knowledge.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">04</span><span>You hold founder equity, Entrext holds studio equity. Co-ownership, board seat included.</span></li>
          </ul>
        </section>

        <section id="founders" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">// 03 Profile</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            No Plan B.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Experience doesn&apos;t matter. Conviction does. Having a Plan B means Plan A won&apos;t work — that&apos;s
            why we cap at 5 Pro teams a year. Apply once, give it everything, ship in under a week, find
            paying customers in a month. The math works only if you&apos;re all in.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
