import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";
import { FAQItem } from "@/src/components/ui/FAQItem";
import { PARTNER_FAQ } from "@/src/constants/data";

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
    label: "What happens in Pro",
    description: "Build the product, scale distribution, incorporate, and spin off from Entrext.",
    href: "#build",
  },
  {
    label: "Equity & ownership",
    description: "20% fixed each. Both partners. 6-month cliff, 4–5 year vesting.",
    href: "#equity",
  },
  {
    label: "Who we accept",
    description: "Serious, committed builders. Full-time or part-time both work.",
    href: "#founders",
  },
  {
    label: "Start in Labs",
    description: "Pro has no direct apply track — you graduate in from Labs, or get matched in.",
    href: "/apply#labs-primary",
  },
  {
    label: "Pro FAQ",
    description: "Applying as Secondary, selection, day-to-day, and how many products we run.",
    href: "#faq",
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
          Where the opportunity starts becoming a real product. Stage two of the founder journey: 1 → 10.
          Once demand is proven in Labs, we help the founding team build the company around it.
        </p>

        <SitelinksList items={items} />

        <section id="matching" className="scroll-mt-32 mt-32 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Built around conviction.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Pro pairs a tech builder with a growth operator on a Entrext-validated idea. Both partners
            hold real equity and ship together. We don&apos;t introduce. We match, and only when the
            conviction is mutual.
          </p>
        </section>

        <section id="build" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            From product to company.
          </h2>
          <ul className="space-y-3 max-w-2xl text-zinc-300 leading-relaxed mb-8">
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">01</span><span>Build the product.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">02</span><span>Scale sales & distribution.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">03</span><span>Refine the business model.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">04</span><span>Set up the legal company and spin off from Entrext.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">05</span><span>Build the first team and establish systems & processes.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">06</span><span>Bootstrap or raise funding when the time is right.</span></li>
          </ul>
          <div className="inline-flex items-center gap-3 rounded-full border border-[#ff4d00]/30 bg-[#ff4d00]/5 px-6 py-3">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Graduation target</span>
            <span className="font-sans font-black text-white uppercase text-sm">$10K MRR</span>
          </div>
        </section>

        <section id="equity" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            20% fixed each.
          </h2>
          <ul className="space-y-3 max-w-2xl text-zinc-300 leading-relaxed">
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">01</span><span>Both partners get 20% fixed. No founder/co-founder hierarchy on cap table.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">02</span><span>6-month cliff, 4–5 year vesting. Leave early, you keep what you&apos;ve earned.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">03</span><span>Bootstrapped-first studio. Dilution requires your knowledge.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">04</span><span>You hold founder equity, Entrext holds studio equity. Co-ownership, board seat included.</span></li>
          </ul>
        </section>

        <section id="founders" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Committed, not credentialed.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Serious, committed builders. Full-time or part-time both work — what matters is commitment.
            Experience matters less than hard work, resilience, and relentlessness. That&apos;s why we cap
            at 5 Pro teams a year: fewer, more committed builders, not a resume filter.
          </p>
        </section>

        <section id="faq" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-10 tracking-tight">
            Pro FAQ.
          </h2>
          <div>
            {PARTNER_FAQ.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
