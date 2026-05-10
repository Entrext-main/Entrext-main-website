import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "404 | Signal Lost",
  description: "The page you were looking for isn't here. Pick a destination below.",
  robots: { index: false, follow: false },
};

const items: SitelinkItem[] = [
  { label: "Homepage", description: "Back to the studio overview.", href: "/" },
  { label: "Ecosystem", description: "Pro, Labs, and Edge — the three divisions.", href: "/ecosystem" },
  { label: "Products", description: "Six shipped products and the journey behind each one.", href: "/products" },
  { label: "Apply", description: "Primary, Secondary, and Volunteer Mentor partner tracks.", href: "/apply" },
  { label: "FAQ", description: "Equity, money, selection, ops — the full dossier.", href: "/#faq" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.5em] block mb-6">
          // 404 · Signal Lost
        </span>
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          This node <br />
          <span className="opacity-20 italic text-brand-orange">doesn&apos;t exist.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Either the URL is wrong, the page hasn&apos;t shipped yet, or you&apos;re early. Pick a real destination:
        </p>

        <SitelinksList items={items} eyebrow="Recovery_Routes // 00" />
      </main>
      <Footer />
    </div>
  );
}
