"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUp, ArrowRight } from 'lucide-react';
import { Chapter, TOTAL_QUESTIONS } from './chapters';
import { JourneyScene } from './JourneyScenes';

interface JourneySectionProps {
  chapter: Chapter;
  isActive: boolean;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const JourneySection: React.FC<JourneySectionProps> = ({
  chapter,
  isActive,
  onNext,
  onPrev,
  isFirst,
  isLast,
}) => {
  return (
    <section
      id={chapter.id}
      className="min-h-screen min-h-[100svh] w-full flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 py-20 relative snap-start"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* Top Kicker - Zero Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.25, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 text-xs font-mono"
        >
          <span className="text-[#ff4d00] font-semibold tracking-wider">
            {chapter.num === 'Start' ? 'THE PREMISE' : `QUESTION ${chapter.num} / ${String(TOTAL_QUESTIONS).padStart(2, '0')}`}
          </span>
          {chapter.kicker && (
            <>
              <span className="text-zinc-700">·</span>
              <span className="text-zinc-400 uppercase tracking-wider text-[11px]">
                {chapter.kicker}
              </span>
            </>
          )}
        </motion.div>

        {/* Core Question & Scene Grid (No spoon-fed answer - let the reader answer in their mind!) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left: The Human Story Anchor + The Big Thought-Provoking Question */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {/* Maya & Raj Story in Signature Orange Bar & Italic Serif */}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.2, x: -4 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-l-2 border-[#ff4d00] pl-3.5 py-1"
            >
              <p className="font-[family-name:var(--font-mission-serif)] italic text-lg sm:text-xl text-white leading-snug">
                {chapter.story}
              </p>
            </motion.div>

            {/* The Question in Uppercase Bold Sans (Reference Font) */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 10 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-sans font-bold uppercase text-white leading-[1.16] tracking-tight text-balance"
            >
              {chapter.question}
            </motion.h2>

            {/* Silent pause indicator / subtle reflection cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-2"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                Pause and reflect · Answer in your mind
              </span>
            </motion.div>
          </div>

          {/* Right: The Minimal Living Scene */}
          <div className="md:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.98 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center"
            >
              <JourneyScene index={chapter.index} />
            </motion.div>
          </div>
        </div>

        {/* Minimal Navigation Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-4 flex items-center justify-between text-xs font-mono text-zinc-500"
        >
          <div>
            {!isFirst && (
              <button
                onClick={onPrev}
                className="hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer py-2 uppercase tracking-wider"
              >
                <ArrowUp className="w-3.5 h-3.5 text-zinc-500" />
                <span>Previous</span>
              </button>
            )}
          </div>

          <div>
            {!isLast ? (
              <button
                onClick={onNext}
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-[#ff4d00] transition-colors cursor-pointer group py-2 uppercase tracking-wider"
              >
                <span>Next question</span>
                <ArrowDown className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-y-0.5 transition-transform" />
              </button>
            ) : (
              <div className="flex items-center gap-5">
                <a
                  href="https://www.entrext.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#ff4d00] hover:text-[#ff4d00] font-medium transition-colors cursor-pointer py-2 uppercase tracking-wider"
                >
                  <span>Entrext.com</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onPrev}
                  className="hover:text-white transition-colors cursor-pointer py-2 uppercase tracking-wider"
                >
                  Restart
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
