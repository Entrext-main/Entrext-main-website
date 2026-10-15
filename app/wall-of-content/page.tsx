import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { WallOfContent } from "@/src/components/sections/WallOfContent";

export const metadata: Metadata = {
  title: "Wall of Content",
  description: "Posts and messages from founders, builders and operators in the Entrext community.",
  alternates: { canonical: "/wall-of-content" },
};

export default function WallOfContentPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28">
      <GlowBackground />
      <Navbar />
      <main id="main" className="relative">
        <WallOfContent full />
      </main>
      <Footer />
    </div>
  );
}
