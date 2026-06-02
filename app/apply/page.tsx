import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to Entrext: Labs, Pro, Edge, and the Ecosystem layer. Pick the track that matches the bet you're making: Primary, Secondary, Founding Tech, Founding Growth, Builder, Partnerships, or Mentor.",
  alternates: { canonical: "/apply" },
  openGraph: { url: "/apply", title: "Apply · Entrext" },
};

type Track = {
  id: string;
  label: string;
  tagline: string;
  bullets: string[];
  ctaLabel: string;
  // External Tally form URL. `null` falls back to a mailto until the form exists.
  applyHref: string | null;
};

type Phase = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  logo?: string;
  tracks: Track[];
};

const PHASES: Phase[] = [
  {
    id: "labs",
    eyebrow: "Phase 01",
    title: "Entrext Labs",
    subtitle: "The Experimental Build Space",
    description:
      "An experimental space where growth thinkers and technical builders rapidly ship one-feature products and validate ideas in public. Once validated, the right opposite partner joins to scale.",
    logo: "/logos/labs.webp",
    tracks: [
      {
        id: "labs-primary",
        label: "Primary Partner",
        tagline: "Lead the build. Own the direction.",
        bullets: [
          "Up to 12% equity",
          "You bring the idea and conviction",
          "Ship fast, validate in public",
          "Full ownership from 0 → 1",
        ],
        ctaLabel: "Apply as Primary Partner",
        applyHref: "https://tally.so/r/449675",
      },
      {
        id: "labs-secondary",
        label: "Secondary Partner",
        tagline: "Join signal. Complete the system.",
        bullets: [
          "Up to 8% equity",
          "Join after early validation",
          "Bring the missing skill (tech ↔ growth)",
          "Build from momentum, not chaos",
        ],
        ctaLabel: "Apply as Secondary Partner",
        applyHref: "https://tally.so/r/LZarMj",
      },
    ],
  },
  {
    id: "pro",
    eyebrow: "Phase 02",
    title: "Entrext Pro",
    subtitle: "High-Conviction Matching",
    description:
      "Where validated ideas meet committed co-founders. Matching built around conviction, not convenience. Two operators, one product. Both full-time, both holding real equity, both shipping together.",
    logo: "/logos/pro.webp",
    tracks: [
      {
        id: "pro-tech",
        label: "Founding Tech",
        tagline: "Build the system. Own execution.",
        bullets: [
          "10% equity (flat)",
          "Lead technical architecture and product",
          "Work alongside a growth counterpart",
          "Full-time commitment, no Plan B",
        ],
        ctaLabel: "Apply as Founding Tech",
        applyHref: null,
      },
      {
        id: "pro-growth",
        label: "Founding Growth",
        tagline: "Drive distribution. Own scale.",
        bullets: [
          "10% equity (flat)",
          "Lead GTM, distribution, and traction",
          "Work alongside a technical builder",
          "Full-time commitment, no Plan B",
        ],
        ctaLabel: "Apply as Founding Growth",
        applyHref: null,
      },
    ],
  },
  {
    id: "edge",
    eyebrow: "Phase 03",
    title: "Edge",
    subtitle: "Hyper-Casual Gaming Marketplace",
    description:
      "Games that make you better. Hyper-creative, skill-elevating experiences designed for focus, growth, and execution.",
    logo: "/logos/edge.webp",
    tracks: [
      {
        id: "edge-builder",
        label: "Apply as a Builder",
        tagline: "Ship fast inside the system.",
        bullets: [
          "Build inside the Edge layer",
          "Focus on hyper-casual / marketplace / gaming",
          "Leverage distribution + rapid iteration",
          "High-speed execution, lower ownership",
        ],
        ctaLabel: "Apply as Builder",
        applyHref: null,
      },
      {
        id: "edge-idea",
        label: "Submit an Idea",
        tagline: "Test before commitment.",
        bullets: [
          "Share ideas without full-time entry",
          "Validate concepts early",
          "Optional path into Labs or Edge",
        ],
        ctaLabel: "Submit an Idea",
        applyHref: null,
      },
    ],
  },
  {
    id: "ecosystem",
    eyebrow: "Layer",
    title: "Ecosystem",
    subtitle: "Leverage without full-time commitment",
    description:
      "For senior operators and aligned partners who want signal and contribution inside Entrext without a full-time bet.",
    tracks: [
      {
        id: "partnerships",
        label: "Partnerships",
        tagline: "Strategic alignment, not a paycheck.",
        bullets: [
          "Collaborate on distribution, infra, or ecosystem",
          "Strategic alignment with Entrext",
        ],
        ctaLabel: "Apply for Partnerships",
        applyHref: "https://tally.so/r/rjJ40v",
      },
      {
        id: "mentor",
        label: "Mentor",
        tagline: "Compound through advice.",
        bullets: [
          "Guide 1–3 teams per cycle",
          "Office hours + async reviews",
          "No equity, relationship-driven",
        ],
        ctaLabel: "Apply as Mentor",
        applyHref: "https://tally.so/r/5Be7q6",
      },
    ],
  },
];

const items: SitelinkItem[] = PHASES.map((p) => ({
  label: p.title,
  description: p.subtitle,
  href: `#${p.id}`,
}));

const resolveHref = (track: Track) =>
  track.applyHref ??
  `mailto:hello@entrext.com?subject=${encodeURIComponent(`Application: ${track.label}`)}`;

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
          Four phases, eight tracks, one studio. Pick the bet you&apos;re actually making. Plan-B
          applications stand out, not in the way you&apos;d hope.
        </p>

        <SitelinksList items={items} eyebrow="Application Tracks" />

        <div className="mt-32 space-y-32">
          {PHASES.map((phase) => (
            <section
              key={phase.id}
              id={phase.id}
              className="scroll-mt-32 border-t border-white/5 pt-16"
            >
              <div className="flex items-start gap-5 mb-6">
                {phase.logo && (
                  <Image
                    src={phase.logo}
                    alt=""
                    width={72}
                    height={72}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0"
                  />
                )}
                <div>
                  <span className="font-mono text-[10px] text-brand-orange uppercase tracking-[0.4em]">
                    // {phase.eyebrow}
                  </span>
                  <h2 className="mt-3 text-4xl md:text-6xl font-sans font-black uppercase tracking-tighter text-white leading-[0.95]">
                    {phase.title}
                  </h2>
                </div>
              </div>

              <p className="font-display italic text-2xl md:text-3xl text-white/90 max-w-2xl mb-6 leading-snug">
                {phase.subtitle}
              </p>
              {phase.description && (
                <p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-12 leading-relaxed">
                  {phase.description}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {phase.tracks.map((track) => {
                  const isPlaceholder = track.applyHref === null;
                  return (
                    <div
                      key={track.id}
                      id={track.id}
                      className="scroll-mt-32 flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-6 md:p-8"
                    >
                      <h3 className="text-2xl md:text-3xl font-sans font-black uppercase text-white tracking-tight mb-2">
                        {track.label}
                      </h3>
                      <p className="font-display italic text-lg md:text-xl text-white/70 mb-6 leading-snug">
                        {track.tagline}
                      </p>
                      <ul className="space-y-3 mb-8 flex-1">
                        {track.bullets.map((b, i) => (
                          <li key={i} className="flex gap-4 text-zinc-300 text-sm md:text-base leading-relaxed">
                            <span className="font-mono text-[10px] text-brand-orange/60 pt-1.5 shrink-0 tabular-nums">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={resolveHref(track)}
                        target={track.applyHref ? "_blank" : undefined}
                        rel={track.applyHref ? "noopener noreferrer" : undefined}
                        className="mt-auto inline-flex items-center justify-between gap-4 bg-brand-orange text-white px-6 md:px-8 py-4 rounded-md font-black text-[10px] uppercase tracking-[0.3em] hover:-translate-y-1 transition-transform shadow-[0_20px_50px_rgba(255,77,0,0.2)]"
                      >
                        <span>{track.ctaLabel}</span>
                        <span aria-hidden>→</span>
                      </a>
                      {isPlaceholder && (
                        <p className="mt-3 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                          Form launching soon. Email opens for now.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-32 max-w-2xl text-sm text-zinc-500 italic border-t border-white/5 pt-12">
          Each track has its own form. Pick the one that matches the bet you&apos;re making, and write
          plainly about who you are, what you&apos;ve shipped, and why you&apos;re applying.
        </p>
      </main>
      <Footer />
    </div>
  );
}
