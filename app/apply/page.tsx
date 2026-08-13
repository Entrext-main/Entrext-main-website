import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Six tracks, one studio. Primary Partner, Secondary Partner, Mentor/Advisor, Match by Entrext, Venture Studio as a Service, and Partnerships.",
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
  description?: string;
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
      "Take an idea from 0 → 1. Build quickly, validate with real customers, and prove whether the opportunity is worth pursuing.",
    logo: "/logos/labs.webp",
    tracks: [
      {
        id: "labs-primary",
        label: "Primary Partner — Tech / Build or Growth / Sales",
        tagline: "Lead the opportunity. Build your side. Own the 0 → 1.",
        bullets: [
          "20% fixed + 5% performance-based — up to 25%",
          "Bring the idea and lead the opportunity",
          "Tech / Build: build the product and lead the technical side",
          "Growth / Sales: find customers, drive distribution, and prove demand",
          "Ship fast, validate in public, and learn from what works",
        ],
        ctaLabel: "Apply as Primary Partner",
        applyHref: "https://tally.so/r/7R01Vz",
      },
      {
        id: "labs-secondary",
        label: "Secondary Partner — Tech / Build or Growth / Sales",
        tagline: "Support the opportunity. Execute with the team. Grow alongside it.",
        bullets: [
          "5% fixed + 2.5% performance-based — up to 7.5%",
          "Join a primary partner and contribute to the opportunity",
          "Tech / Build: support product development and execution",
          "Growth / Sales: support customer acquisition, distribution, and validation",
          "Work closely with the primary partner from 0 → 1",
          "Ship fast, learn fast, and build real ownership through execution",
        ],
        ctaLabel: "Apply as Secondary Partner",
        applyHref: "https://tally.so/r/449675",
      },
      {
        id: "labs-mentor",
        label: "Mentor / Advisor",
        tagline: "Help founders move faster.",
        bullets: [
          "Guide Entrext founders and teams",
          "Share experience, feedback, and perspective",
          "Office hours and async support",
          "Build relationships across the Entrext ecosystem",
        ],
        ctaLabel: "Apply as Mentor/Advisor",
        applyHref: "https://tally.so/r/7R01j0",
      },
    ],
  },
  {
    id: "match",
    eyebrow: "Phase 02",
    title: "Match by Entrext",
    subtitle: "Find the other half.",
    description: "Match is a separate founder matchmaking initiative.",
    tracks: [
      {
        id: "match-register",
        label: "Register for Match",
        tagline: "20+ alignment factors. About 6 months, done right.",
        bullets: [
          "Register your skills, interests, ambitions, working style, and areas of conviction",
          "We analyze 20+ alignment factors to help identify people who could complement you",
          "You can also bring your own co-founder",
          "We usually allow around 6 months to find and build the right founder fit — the goal isn't to fill a position quickly, it's to find the right person to build with",
        ],
        ctaLabel: "Join Match by Entrext",
        applyHref: "https://tally.so/r/5Be7q6",
      },
    ],
  },
  {
    id: "vsaas",
    eyebrow: "Phase 03",
    title: "VSaaS",
    subtitle: "If you're looking for a specific service from us.",
    tracks: [
      {
        id: "vsaas-service",
        label: "Venture Studio as a Service",
        tagline: "Expertise, on demand.",
        bullets: [
          "Bring Entrext into your company to validate ideas, discover opportunities, or build new ventures",
          "Get our team for consultation, research, strategy, reporting, and execution",
          "MVP development, AI automation, tools, GTM, and customer acquisition when needed",
          "We can also help you find the right co-founders, operators, and technical talent",
          "Use exactly what you need. Whenever you need it.",
        ],
        ctaLabel: "Fill Up Here — We'll Reach Out",
        applyHref: "https://tally.so/r/pbqR58",
      },
    ],
  },
  {
    id: "partnerships",
    eyebrow: "Others",
    title: "Partnerships",
    subtitle: "Build alongside Entrext.",
    tracks: [
      {
        id: "partnerships-apply",
        label: "Partnerships",
        tagline: "Build alongside Entrext.",
        bullets: [
          "Collaborate on distribution, infrastructure, products, or ecosystem",
          "Create strategic partnerships with Entrext",
          "Explore opportunities to build mutual value",
        ],
        ctaLabel: "Apply for Partnerships",
        applyHref: "https://tally.so/r/rjJ40v",
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
  `mailto:hr@entrext.com?subject=${encodeURIComponent(`Application: ${track.label}`)}`;

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
          Six tracks. One studio. Choose the role that matches what you want to build.
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

        <div className="mt-32 max-w-2xl border-t border-white/5 pt-16">
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tighter text-white mb-4 leading-[0.95]">
            Pick your track.
          </h2>
          <p className="font-display italic text-xl md:text-2xl text-white/70 mb-6 leading-snug">
            Build. Grow. Match. Mentor. Partner.
          </p>
          <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
            Choose the role that reflects the bet you&apos;re actually making. Be clear about who you
            are, what you bring, and what you want to build.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
