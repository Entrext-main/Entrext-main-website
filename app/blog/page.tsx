import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Blogs and Articles",
  description: "Read the latest on tech and entrepreneurship published by Entrext.",
  alternates: { canonical: "/blog" },
  // Blog is still drafting — keep stub out of the index until posts ship.
  robots: { index: false, follow: true },
};

const items: SitelinkItem[] = [
  {
    label: "The bootstrapped studio playbook",
    description: "How we run 15–20 Labs experiments without external capital — and why we keep it that way.",
    disabled: true,
  },
  {
    label: "Why we cap at 10 partner spots",
    description: "Five Labs, five Pro. The math behind the deliberate scarcity, and what it does to founder commitment.",
    disabled: true,
  },
  {
    label: "Conviction over convenience",
    description: "What separates a co-founder from a colleague, and why mismatched belief breaks more products than mismatched skill.",
    disabled: true,
  },
  {
    label: "From 0 → 100 in a week",
    description: "The Entrext launch loop: idea, ship, validate, kill or scale. With timestamps from real Labs products.",
    disabled: true,
  },
  {
    label: "Return to the homepage",
    description: "Head back to the main site while we finish the blog.",
    href: "/",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Blogs and <br />
          <span className="opacity-20 italic">Articles.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Long-form posts on building, ownership, and the studio model. We&apos;re drafting the first batch
          now — sketches below.
        </p>

        <SitelinksList items={items} eyebrow="Drafts // 07" />

        <p className="mt-24 max-w-2xl text-sm text-zinc-500 italic border-t border-white/5 pt-12">
          Want a heads-up when these go live? Email{" "}
          <a className="text-[#ff4d00] hover:underline" href="mailto:hello@entrext.com?subject=Blog%20Notify%20Me">
            hello@entrext.com
          </a>{" "}
          with subject &ldquo;Blog Notify Me&rdquo;.
        </p>
      </main>
      <Footer />
    </div>
  );
}
