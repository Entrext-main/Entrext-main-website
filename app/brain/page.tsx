import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";
import { SEVEN_CS, TECHS } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Brain",
  description:
    "The running record of what Entrext is building, shipping, and learning — playbooks, build logs, frameworks, and the tools we made for ourselves.",
  alternates: { canonical: "/brain" },
  openGraph: { url: "/brain", title: "Brain · Entrext" },
};

const items: SitelinkItem[] = [
  {
    label: "Playbooks",
    description: "The repeatable how-tos behind every Labs and Pro cycle.",
    href: "#playbooks",
  },
  {
    label: "Build Log",
    description: "Dated entries of what shipped, what changed, and what we learned.",
    href: "#build-log",
  },
  {
    label: "Frameworks",
    description: "The 7 C's and the Core Operating System behind how we build.",
    href: "#frameworks",
  },
  {
    label: "Tools we built",
    description: "The in-house tech that came out of building for ourselves.",
    href: "#tools",
  },
];

const PLAYBOOKS = [
  "How we validate a Labs idea in a week",
  "How Primary/Secondary matching actually works",
  "How a Pro product spins off from Entrext",
  "How we decide equity splits before day one",
  "How we run the alternate-day check-in",
];

const BUILD_LOG = [
  {
    date: "Coming soon",
    entry: "The first dated log entry goes here once we start publishing in public.",
  },
];

export default function BrainPage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          The <br />
          <span className="opacity-20 text-brand-orange italic">Brain.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          A running record of what we&apos;re building, shipping, and learning at Entrext — out in the
          open, and updated as we go. Part playbook, part build log, part reference for how the studio
          actually operates.
        </p>

        <SitelinksList items={items} eyebrow="Knowledge Base" />

        <section id="playbooks" className="scroll-mt-32 mt-32 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            The repeatable parts.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10">
            Every Labs and Pro cycle runs on the same underlying playbooks. We&apos;re writing them down
            here as we refine them, so the process is legible to anyone building with us.
          </p>
          <ul className="space-y-3 max-w-2xl">
            {PLAYBOOKS.map((p, i) => (
              <li key={i} className="flex gap-4 text-zinc-500 text-sm md:text-base leading-relaxed">
                <span className="font-mono text-[10px] text-brand-orange/40 pt-1.5 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="italic">{p} — drafting.</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="build-log" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Build log.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10">
            What shipped, what broke, what we changed our minds about. Dated, unpolished, in public.
          </p>
          <ul className="space-y-6 max-w-2xl">
            {BUILD_LOG.map((log, i) => (
              <li key={i} className="border-l-2 border-white/10 pl-6">
                <span className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-2">
                  {log.date}
                </span>
                <p className="text-zinc-500 text-sm md:text-base italic leading-relaxed">{log.entry}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="frameworks" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            The operating system.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10">
            The 7 C&apos;s are the DNA of everything we build. The full Core Operating System — how
            Culture, Product, Execution, and Founder layers stack on top of it —{" "}
            <a href="/#culture" className="text-brand-orange hover:underline">
              lives on the homepage
            </a>
            .
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
            {SEVEN_CS.map((c) => (
              <li key={c.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <span className="font-mono text-[9px] text-brand-orange/60 tabular-nums">{c.id}</span>
                <h3 className="text-sm font-black uppercase text-white tracking-tight mt-1">{c.title}</h3>
                <p className="text-[11px] text-zinc-500 italic mt-1">{c.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="tools" className="scroll-mt-32 mt-24 border-t border-white/5 pt-16">
          <h2 className="mt-4 text-4xl md:text-6xl font-display italic text-white mb-6 tracking-tight">
            Built for ourselves, first.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10">
            Most of our in-house tools started as something we needed internally, then became products
            in their own right.{" "}
            <a href="/#technologies" className="text-brand-orange hover:underline">
              See the full breakdown on the homepage
            </a>
            .
          </p>
          <ul className="space-y-3 max-w-2xl">
            {TECHS.map((t, i) => (
              <li key={t.id} className="flex gap-4 text-zinc-300 text-sm md:text-base leading-relaxed">
                <span className="font-mono text-[10px] text-brand-orange/60 pt-1.5 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong className="text-white">{t.name}</strong> — {t.desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-32 max-w-2xl text-sm text-zinc-500 italic border-t border-white/5 pt-12">
          This page is a living document — we edit it directly as we learn. Have something we should be
          writing down? Email{" "}
          <a className="text-[#ff4d00] hover:underline" href="mailto:business@entrext.com?subject=Brain%20Suggestion">
            business@entrext.com
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
