"use client";

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'motion/react';
import { Hero } from '@/src/components/solo/Hero';
import { WallOfContentSection } from '@/src/components/solo/WallOfContentSection';
import { DistributionStrategySection } from '@/src/components/solo/DistributionStrategySection';
import { WhatYouGetSection } from '@/src/components/solo/WhatYouGetSection';
import { ScopeAndOwnershipSection } from '@/src/components/solo/ScopeAndOwnershipSection';
import { WhoItsForSection } from '@/src/components/solo/WhoItsForSection';
import { HowItWorksSection } from '@/src/components/solo/HowItWorksSection';
import { CaseStudySection } from '@/src/components/solo/CaseStudySection';
import { ExamplesSection } from '@/src/components/solo/ExamplesSection';
import { FAQSection } from '@/src/components/solo/FAQSection';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { ApplyModal } from '@/src/components/solo/ApplyModal';
import { AmbientCursor } from '@/src/components/solo/AmbientCursor';

export default function SoloFoundersPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);

  // Initialize smooth inertial scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Top Scroll Progress Line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenApply = () => {
    setIsApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <div className="solo-page min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-white selection:text-black relative overflow-x-hidden">
      
      {/* 1. Top Locomotive Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <Navbar />

      {/* 2. Interactive Soft Ambient Spotlight following cursor */}
      <AmbientCursor />

      {/* 3. Main Flow for Solo Non-Tech Founders Program */}
      <main className="flex-1 relative z-10">
        <Hero onOpenApply={handleOpenApply} />
        <WallOfContentSection />
        <DistributionStrategySection onOpenApply={handleOpenApply} />
        <WhatYouGetSection />
        <ScopeAndOwnershipSection />
        <WhoItsForSection />
        <HowItWorksSection onOpenApply={handleOpenApply} />
        <CaseStudySection />
        <ExamplesSection />
        <FAQSection />
      </main>

      {/* 5. Minimalist Monochrome Footer */}
      <Footer />

      {/* 6. Application Modal for 3-Founder Pilot */}
      <ApplyModal isOpen={isApplyModalOpen} onClose={handleCloseApply} />
    </div>
  );
}
