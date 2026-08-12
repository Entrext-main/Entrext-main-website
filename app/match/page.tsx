import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Match",
  description:
    "Register as a Tech or Growth founder and get matched with a validated Entrext product that fits your skill set. Fit, not availability.",
  alternates: { canonical: "/match" },
  openGraph: { url: "/match", title: "Match · Entrext" },
};

const items: SitelinkItem[] = [
  {
    label: "How matching works",
    description: "Register your skill set. Our algorithm runs 20+ alignment scorings to find the fit.",
    href: "#how-it-works",
  },
  {
    label: "What you're matched into",
    description: "A product with paying users, a proven pattern, and a Primary Partner already in motion.",
    href: "#what-you-join",
  },
  {
    label: "Register your interest",
    description: "Tell us your track and skill set. We reach out when there's a fit.",
    href: "/apply#labs-secondary",
  },
];

export default function MatchPage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Match
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Register as a founder with a skill set. Our algorithm runs 20+ alignment scorings in the
          background and matches you with the right co-founder. No product required — just conviction
          and the missing half of the pair.
        </p>

        <SitelinksList items={items} />

        <section id="how-it-works" className="scroll-mt-32 mt-32 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Fit, not availability.
          </h2>
          <ul className="space-y-3 max-w-2xl text-zinc-300 leading-relaxed">
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">01</span><span>Register as a Tech or Growth founder looking to join a validated product rather than start from zero. You apply independently — no product needed.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">02</span><span>Our algorithm scores every candidate pair across 20+ alignment factors — skill fit, working style, availability, conviction — and identifies the Primary Partner whose validated product fits best.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">03</span><span>The match is based on fit, not who&apos;s available first. When we find one, we reach out to you directly — no open marketplace, no cold browsing.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">04</span><span>Already know who you want to build with? You can find each other without the algorithm — we still facilitate the process and terms.</span></li>
          </ul>
        </section>

        <section id="what-you-join" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Proven ground, not a blank page.
          </h2>
          <ul className="space-y-3 max-w-2xl text-zinc-300 leading-relaxed">
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">01</span><span>You join a product that already has paying users, a proven pattern, and a Primary Partner who knows it better than anyone.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">02</span><span>Your job is to scale what&apos;s already real — Growth or Tech, whichever half you bring, you own that lane completely.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">03</span><span>Real equity, clear terms: 20% fixed + 5% performance-based (up to 25%), same as a Primary Partner.</span></li>
            <li className="flex gap-4"><span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5">04</span><span>From here the path is the same as any Entrext product: scale, evolve, and eventually graduate.</span></li>
          </ul>
        </section>

        <p className="mt-32 max-w-2xl text-sm text-zinc-500 italic border-t border-white/5 pt-12">
          Ready to be matched?{" "}
          <a className="text-[#ff4d00] hover:underline" href="/apply#labs-secondary">
            Register as a Secondary Partner
          </a>{" "}
          and tell us what you bring.
        </p>
      </main>
      <Footer />
    </div>
  );
}
