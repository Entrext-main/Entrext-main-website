"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Chapter } from './chapters';
import { MissionGlobe } from './MissionGlobe';

interface MissionStatementHeroProps {
  chapter: Chapter;
  isActive: boolean;
  onNext: () => void;
}

export const MissionStatementHero: React.FC<MissionStatementHeroProps> = ({
  chapter,
  isActive,
  onNext,
}) => {
  return (
    <section
      id={chapter.id}
      className="min-h-screen min-h-[100svh] w-full flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 py-24 relative snap-start"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 md:gap-12 items-center text-center">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-xs sm:text-sm font-sans"
        >
          <span className="font-mono text-[#ff4d00] font-medium tracking-widest uppercase">
            The 20-Year Horizon
          </span>
          <span className="text-zinc-700">·</span>
          <span className="font-mono text-zinc-400 uppercase tracking-wider text-[11px]">
            The Question Before Us
          </span>
        </motion.div>

        {/* The Central Glowing Orange Cloud Globe with Crosshairs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.4, scale: 0.98 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center py-2"
        >
          <MissionGlobe />
        </motion.div>

        {/* Clear, Everyday Language */}
        <div className="max-w-3xl flex flex-col gap-6 items-center">
          {/* Main Statement */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 10 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-sans font-bold uppercase text-white leading-[1.15] tracking-tight text-balance"
          >
            Work is moving from jobs to outcomes, and from employees to owners.
          </motion.h1>

          {/* Simple, relatable breakdown */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 8 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm font-sans font-medium uppercase tracking-wider text-zinc-400 leading-relaxed max-w-2xl"
          >
            For a hundred years, work meant trading your hours for a paycheck and climbing someone else's ladder. Today, that ladder is disappearing. Computers can do more, companies need fewer people, and the only real security is owning what you build.
          </motion.p>

          {/* Maya Story Anchor */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.2, x: -4 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center border-l-2 border-[#ff4d00] pl-3 py-0.5 text-left self-center sm:self-start mt-2"
          >
            <span className="font-[family-name:var(--font-mission-serif)] italic text-lg sm:text-xl text-white">
              Meet Maya. She works at a company in a big city, and she likes her job. But things around her desk are quietly changing.
            </span>
          </motion.div>
        </div>

        {/* Descent Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="pt-4"
        >
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-200 hover:text-[#ff4d00] transition-colors cursor-pointer group py-2"
          >
            <span>Ask the 5 questions</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#ff4d00] group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
