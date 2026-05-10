"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const CTA = () => {
  return (
    <section id="join" className="py-32 md:py-40 relative flex justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black border-y border-white/5" />
      <div className="orange-glow top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] opacity-20" />
      
      <div className="relative z-10 text-white text-center max-w-4xl px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="bg-[#ff4d00]/10 text-[#ff4d00] px-6 py-2 border border-[#ff4d00]/20 rounded-full text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] md:tracking-[0.5em] inline-block mb-10 md:mb-12 font-black"
        >
          Limited 2026 Partner Slots Open
        </motion.div>
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-sans font-black leading-[0.9] mb-8 md:mb-12 uppercase italic tracking-tighter">
          Ready to <br/>Own the Future?
        </h2>
        <p className="text-lg md:text-2xl font-bold mb-12 md:mb-16 max-w-2xl mx-auto uppercase tracking-tighter text-zinc-500">
          WE DON'T OFFER JOBS. WE OFFER OWNERSHIP. IF YOU ARE A SERIOUS AND COMMITTED BUILDER READY TO COMPOUND PRODUCTS, JOIN THE GRID.
        </p>
        <Link href="/apply" className="group w-full sm:w-auto bg-white text-black px-12 md:px-16 py-5 md:py-6 rounded-md font-sans font-black text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] hover:bg-[#ff4d00] hover:text-white transition-all flex items-center justify-center gap-6 mx-auto shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          Partner Up
          <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
