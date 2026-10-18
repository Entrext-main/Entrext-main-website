"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-[#000000] text-white pt-36 md:pt-40 pb-28 px-6 border-b border-zinc-900/80 overflow-hidden">
      
      {/* Subtle monochrome geometric grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        
        {/* Animated Kicker */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-400 mb-8 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/80"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span>ENTREXT STUDIO · PILOT WITH 3 FOUNDERS FIRST</span>
        </motion.div>

        {/* Big Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02] text-balance"
          >
            Solo Non-Tech <br className="hidden sm:inline" />
            <span className="italic font-normal text-zinc-400 font-serif">
              Founders Program.
            </span>
          </motion.h1>
        </div>

        {/* Core Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed font-sans mb-12"
        >
          For founders who want to build it solo. We build and maintain your products. Distribution: you pick what you're good at — on camera or text.
        </motion.p>

        {/* Pricing & Key Terms Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="max-w-2xl mx-auto bg-zinc-950 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl text-left"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
                3-Founder Pilot Pricing
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                  $1,500
                </span>
                <span className="text-sm font-mono text-zinc-400">/ month</span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end">
              <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                0% Equity Taken
              </span>
              <span className="text-xs text-zinc-400 font-mono mt-1.5">
                3-month commitment
              </span>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white shrink-0" />
              <span>We build & maintain</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white shrink-0" />
              <span>You own 100% of code</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white shrink-0" />
              <span>North America only</span>
            </div>
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <MagneticButton
            onClick={onOpenApply}
            className="group w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 active:scale-95 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all inline-flex items-center justify-center gap-2.5"
          >
            <span>Apply for the 3-Founder Pilot</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};
