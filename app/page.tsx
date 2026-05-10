/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GlowBackground } from "@/src/components/layout/GlowBackground";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { Hero } from "@/src/components/sections/Hero";
import { FoundingMembers } from "@/src/components/sections/FoundingMembers";
import { EcosystemEvolution } from "@/src/components/sections/EcosystemEvolution";
import { SystemVelocityMarquee } from "@/src/components/sections/SystemVelocityMarquee";
import { ProductPuzzle } from "@/src/components/sections/ProductPuzzle";
import { PrinciplesSection } from "@/src/components/sections/PrinciplesSection";
import { InHouseTechnologies } from "@/src/components/sections/InHouseTechnologies";
import { WhoThisIsFor } from "@/src/components/sections/WhoThisIsFor";
import { CoreOSInfographic } from "@/src/components/sections/CoreOSInfographic";
import { CTA } from "@/src/components/sections/CTA";
import { FAQSection } from "@/src/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="bg-black">
      <GlowBackground />
      <Navbar />
      
      <main id="main" className="relative">
        <Hero />
        
        {/* Personnel Section */}
        <FoundingMembers />

        {/* Ecosystem & Divisions */}
        <EcosystemEvolution />

        {/* Dynamic Velocity Marquee */}
        <SystemVelocityMarquee />

        {/* Products Showcase */}
        <ProductPuzzle />

        {/* Design Architecture & Principles */}
        <PrinciplesSection />

        {/* In-House Tools/Tech */}
        <InHouseTechnologies />

        {/* Target Audience / Membership */}
        <WhoThisIsFor />

        {/* Operating System / Culture */}
        <CoreOSInfographic />

        {/* Final Conversion */}
        <CTA />

        {/* Support Hub / FAQ */}
        <FAQSection />
      </main>

      <Footer />
      
      {/* Visual Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <filter id="noise">
            <feTurbulence baseFrequency="0.65" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}
