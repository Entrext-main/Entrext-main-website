import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";

export const metadata: Metadata = {
  title: "Advertise With Us",
  description:
    "Reach Entrext's network of founders, builders, and growth operators across Labs, Pro, and Edge. Sponsorships, product placements, and ecosystem partnerships.",
  alternates: { canonical: "/advertise" },
  openGraph: {
    url: "/advertise",
    title: "Advertise With Us · Entrext",
    description:
      "Reach Entrext's network of founders, builders, and growth operators. Sponsorships, product placements, and ecosystem partnerships.",
  },
};

const items: SitelinkItem[] = [
  {
    label: "Ecosystem Sponsorship",
    description:
      "Get in front of the operators building inside Entrext Labs, Pro, and Edge.",
    href: "mailto:partners@entrext.com?subject=Ecosystem%20Sponsorship",
  },
  {
    label: "Product Placement",
    description:
      "Embed inside live Entrext products with high-intent, builder-first audiences.",
    href: "mailto:partners@entrext.com?subject=Product%20Placement",
  },
  {
    label: "Apply as Founding Partner",
    description:
      "Not advertising — joining. Build, own, and compound a product alongside us.",
    href: "/apply",
  },
];

export default function AdvertisePage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Advertise <span className="orange-gradient-text font-display italic font-normal normal-case">With Us</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Reach a focused network of founders, builders, and growth operators inside the world's first technology-owned founder ecosystem. Pick the channel that fits.
        </p>

        <SitelinksList items={items} eyebrow="Partner_Channel // 01" />
      </main>
      <Footer />
    </div>
  );
}
