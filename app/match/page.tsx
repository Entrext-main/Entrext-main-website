import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";
import { FAQItem } from "@/src/components/ui/FAQItem";
import { MATCH_FAQ } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Match",
  description:
    "Match by Entrext is a founder matchmaking initiative. Register your skills, interests, and working style — we analyze 20+ alignment factors to find who you should build with.",
  alternates: { canonical: "/match" },
  openGraph: { url: "/match", title: "Match · Entrext" },
};

const items: SitelinkItem[] = [
  {
    label: "How matching works",
    description: "Register what you bring. Our algorithm scores 20+ alignment factors.",
    href: "#how-it-works",
  },
  {
    label: "Why it takes time",
    description: "About 6 months, because the goal is fit, not filling a seat.",
    href: "#why-it-takes-time",
  },
  {
    label: "Match FAQ",
    description: "Ownership, the 30-day alignment period, and what we're actually matching on.",
    href: "#faq",
  },
  {
    label: "Join Match by Entrext",
    description: "Register your interest and we'll reach out when there's a fit.",
    href: "https://tally.so/r/5Be7q6",
    external: true,
  },
];

export default function MatchPage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Match <br />
          <span className="opacity-20 text-brand-orange italic">Find the other half.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Match is a separate founder matchmaking initiative. Register your skills, interests,
          ambitions, working style, and areas of conviction — we analyze 20+ alignment factors to help
          identify people who could complement you.
        </p>

        <SitelinksList items={items} />

        <section id="how-it-works" className="scroll-mt-32 mt-32 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            20+ alignment factors.
          </h2>
          <ul className="space-y-3 max-w-2xl text-zinc-300 leading-relaxed">
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">01</span><span>Register your skills, interests, ambitions, working style, and areas of conviction.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">02</span><span>We analyze 20+ alignment factors across registered founders to help identify people who could complement you.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">03</span><span>Already know who you want to build with? You can bring your own co-founder — we still facilitate the process.</span></li>
          </ul>
        </section>

        <section id="why-it-takes-time" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            About 6 months, done right.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We usually allow around 6 months to find and build the right founder fit — because the goal
            isn&apos;t to fill a position quickly. It&apos;s to find the right person to build with.
          </p>
        </section>

        <section id="faq" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-10 tracking-tight">
            Match FAQ.
          </h2>
          <div>
            {MATCH_FAQ.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>

        <p className="mt-32 max-w-2xl text-sm text-zinc-500 italic border-t border-white/5 pt-12">
          Ready to be matched?{" "}
          <a
            className="text-[#ff4d00] hover:underline"
            href="https://tally.so/r/5Be7q6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Match by Entrext
          </a>{" "}
          and tell us what you bring.
        </p>
      </main>
      <Footer />
    </div>
  );
}
