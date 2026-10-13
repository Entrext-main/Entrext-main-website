import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { WallOfLove } from "@/src/components/sections/WallOfLove";

export const metadata: Metadata = {
  title: "Wall of Love",
  description: "Posts and messages from founders, builders and operators in the Entrext community.",
  alternates: { canonical: "/wall-of-love" },
};

export default function WallOfLovePage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28">
      <GlowBackground />
      <Navbar />
      <main id="main" className="relative">
        <WallOfLove full />
      </main>
      <Footer />
    </div>
  );
}
