import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { SitelinksList, SitelinkItem } from "@/src/components/ui/SitelinksList";
import { PRODUCTS } from "@/src/constants/data";

export const metadata: Metadata = {
  title: "Products",
  description: "See all the products built and supported by Entrext according to niche.",
  alternates: { canonical: "/products" },
  openGraph: { url: "/products", title: "Products · Entrext" },
};

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const items: SitelinkItem[] = PRODUCTS.map((p) => ({
  label: p.name,
  description: `${p.category} — ${p.signal}`,
  href: `#${slug(p.name)}`,
}));

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32">
      <GlowBackground />
      <Navbar />
      <main id="main" className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32">
        <h1 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-8 leading-[0.9]">
          Products
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-16 md:mb-24 leading-relaxed">
          Every product teaches us something. Six shipped — categorized by niche, owned by their builders.
        </p>

        <SitelinksList items={items} eyebrow="Product_Index // 02" />

        <div className="mt-32 space-y-24">
          {PRODUCTS.map((p) => (
            <section
              key={p.id}
              id={slug(p.name)}
              className="scroll-mt-32 border-t border-white/5 pt-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-[0.4em]">
                  // {p.id}
                </span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  {p.status}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display italic text-white mb-4 tracking-tight">
                {p.name}
              </h2>
              <div className={`font-mono text-xs uppercase tracking-widest ${p.color} mb-8`}>
                {p.category} · Built by {p.builders}
              </div>

              <ul className="space-y-3 mb-8 max-w-2xl">
                {p.journey.map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-zinc-300 text-base md:text-lg leading-relaxed"
                  >
                    <span className="font-mono text-[10px] text-[#ff4d00]/60 pt-2 shrink-0">
                      0{i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <p className="font-display italic text-xl md:text-2xl text-white/70 max-w-2xl border-l-2 border-[#ff4d00]/40 pl-6">
                {p.signal}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
