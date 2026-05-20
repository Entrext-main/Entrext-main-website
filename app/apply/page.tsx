import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply to become a Primary, Secondary or Volunteer Mentor Partner at Entrext.",
  alternates: { canonical: "/apply" },
  openGraph: { url: "/apply", title: "Apply · Entrext" },
};

// Tally form URLs. Labs has its own Primary/Secondary forms; Pro shares the same
// applications today — split if/when a Pro-specific form ships.
const partners = [
  {
    id: "primary",
    label: "Primary Partner",
    eyebrow: "P_01",
    tagline: "Lead the build.",
    description:
      "Your idea, your conviction. You drive the product end-to-end and own the upside that comes with that risk.",
    bullets: [
      "Up to 12% equity at Labs · 10% at Pro",
      "Full-time commitment, no Plan B",
      "You set direction; Entrext provides infra, tools, and growth distribution",
      "Highest reward, highest accountability",
    ],
    applyHref: "https://tally.so/r/449675",
  },
  {
    id: "secondary",
    label: "Secondary Partner",
    eyebrow: "P_02",
    tagline: "Join proven momentum.",
    description:
      "A primary has already validated something. You bring the opposite skill — tech to a growth founder, growth to a tech builder — and join at the inflection point.",
    bullets: [
      "Up to 8% equity at Labs · 10% at Pro",
      "Full-time commitment, real stake",
      "Lower starting risk, real ownership",
      "Best for builders who want momentum from day one",
    ],
    applyHref: "https://tally.so/r/LZarMj",
  },
  {
    id: "volunteer",
    label: "Volunteer Mentor",
    eyebrow: "P_03",
    tagline: "Compound through advice.",
    description:
      "Operators with hard-won experience who guide founders inside the studio. Lighter touch, deep impact.",
    bullets: [
      "No equity — relationship-based",
      "Office hours, async reviews, intro velocity",
      "Mentor 1–3 active products per cycle",
      "For senior operators who want signal without a full-time bet",
    ],
    applyHref: "https://tally.so/r/5Be7q6",
  },
];

const items: SitelinkItem[] = partners.map((p) => ({
  label: p.label,
  description: p.description,
  href: `#${p.id}`,
}));

export default function ApplyPage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Apply <br />
          <span className="opacity-20 text-brand-orange italic">Partner up.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Three paths in. One shot per person per year. Read each carefully — Plan B people don&apos;t make it past the form.
        </p>

        <SitelinksList items={items} eyebrow="Partner_Tracks // 03" />

        <div className="mt-32 space-y-24">
          {partners.map((p) => (
            <section
              key={p.id}
              id={p.id}
              className="scroll-mt-32 border-t border-white/5 pt-16"
            >
              <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">
                // {p.eyebrow}
              </span>
              <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-4 tracking-tight">
                {p.label}.
              </h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 leading-snug">
                {p.tagline}
              </p>
              <p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                {p.description}
              </p>
              <ul className="space-y-3 max-w-2xl mb-12">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-4 text-zinc-300 leading-relaxed">
                    <span className="font-mono text-[10px] text-[#ff4d00]/60 pt-1.5 shrink-0">
                      0{i + 1}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.applyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#ff4d00] text-white px-10 py-5 rounded-md font-black text-[10px] uppercase tracking-[0.4em] hover:-translate-y-1 transition-transform shadow-[0_20px_50px_rgba(255,77,0,0.2)]"
              >
                Apply for {p.label}
                <span aria-hidden>→</span>
              </a>
            </section>
          ))}
        </div>

        <p className="mt-32 max-w-2xl text-sm text-zinc-500 italic border-t border-white/5 pt-12">
          Each track has its own form. Pick the one that matches the bet you&apos;re making, and write
          plainly about who you are, what you&apos;ve shipped, and why you&apos;re applying. Plan-B
          applications stand out — not in the way you&apos;d hope.
        </p>
      </main>
      <Footer />
    </div>
  );
}
