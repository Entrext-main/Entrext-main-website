"use client";

import React from 'react';
import { motion } from 'motion/react';
import { EcosystemTriangle } from '../ui/EcosystemTriangle';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-32 md:pt-40 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[8px] md:text-[10px] font-mono text-[#ff4d00] mb-8 md:mb-10 uppercase tracking-[0.4em] md:tracking-[0.6em] font-black flex items-center justify-center gap-2 md:gap-4 px-4"
        >
          <span className="hidden sm:block w-2 md:w-4 h-[1px] bg-[#ff4d00]" />
          <span className="text-center">Manifesto_v4 // Build. Own. Compound.</span>
          <span className="hidden sm:block w-2 md:w-4 h-[1px] bg-[#ff4d00]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[22ch] text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-sans font-black leading-[0.95] tracking-[-0.02em] uppercase mb-14 md:mb-20"
        >
          Building the World's{" "}
          <span className="font-display italic font-normal normal-case tracking-[-0.01em] text-white">First</span>{" "}
          Technology-Owned{" "}
          <span className="orange-gradient-text font-display italic font-normal normal-case tracking-[-0.01em]">
            Founder Ecosystem
          </span>
        </motion.h1>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl text-zinc-500"
          >
            <h2 className="text-xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
              The Equity-First Venture Studio Where Founders Build, Own, and Scale Together.
            </h2>
            <p className="text-sm md:text-lg leading-relaxed uppercase tracking-tight font-bold opacity-80 mb-6 md:mb-8">
              We pair tech builders and growth operators to launch, validate, and scale niche digital products. This is not a place to get hired. It is a place to build, own, and compound products over time.
            </p>
            <p className="font-display italic text-xl md:text-2xl text-white leading-snug tracking-tight border-l-2 border-[#ff4d00] pl-4 md:pl-5 mb-10 md:mb-12">
              Not a job — you co-build and build startups here.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full lg:justify-start"
          >
            <Link href="/apply" className="w-full sm:w-auto bg-[#ff4d00] text-white px-8 md:px-12 py-4 md:py-5 rounded-md font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] shadow-[0_20px_50px_rgba(255,77,0,0.2)] hover:shadow-[0_25px_60px_rgba(255,77,0,0.3)] transition-all hover:-translate-y-1 text-center">
              Apply as Founding Partner
            </Link>
            <Link href="/advertise" className="w-full sm:w-auto border border-white/10 hover:border-white/30 backdrop-blur-md px-8 md:px-12 py-4 md:py-5 rounded-md font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all text-center">
              Advertise With Us
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <EcosystemTriangle />
        </motion.div>
      </div>
    </section>
  );
};
