import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Brain",
  description: "The running record of what Entrext is building and learning, in public.",
  alternates: { canonical: "/brain" },
  robots: { index: false, follow: true },
};

const items: SitelinkItem[] = [
  {
    label: "Return to the homepage",
    description: "Head back to the main site while we build out the Brain.",
    href: "/",
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
          open. Coming soon.
        </p>

        <SitelinksList items={items} />
      </main>
      <Footer />
    </div>
  );
}
