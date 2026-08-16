"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Adapted from https://github.com/GFGRBU/geeksforgeeksrbu/blob/main/src/components/loader/Loader.tsx
//
// Sequence (first thing every visitor sees):
//   1. Full-screen brand-orange canvas.
//   2. White hairline draws across the centre. As it passes 33 / 66 % of
//      its run, "Entrepreneur's" / "Next" pop in *on* the line — spelling
//      out the name — like the line is dropping them off. A booting
//      counter in the bottom-right ticks 000 → 100 in sync with the line.
//   3. Brief hold so the pair reads.
//   4. Five vertical brand-orange panels slide up off-screen, revealing the
//      site underneath.
//
// Both the canvas and the sliding panels are brand-orange so the hand-off
// between phase 1 and phase 2 is visually seamless.

const SLOTS = [
  { word: "Entrepreneur's", position: 33 },
  { word: "Next", position: 66 },
];

const LINE_DURATION_S = 2.4;
const HOLD_AFTER_LINE_MS = 400;
const PANEL_DURATION_S = 1.6;
const PANEL_STAGGER_S = 0.14;

type Phase = "line" | "panels" | "done";

export const Loader = () => {
  const [phase, setPhase] = useState<Phase>("line");
  const [revealed, setRevealed] = useState(-1);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (phase !== "panels") return;
    // Safety net — if the last panel's onAnimationComplete misfires we still
    // unmount the loader instead of trapping the user behind an orange wall.
    const fallback = setTimeout(
      () => setPhase("done"),
      (PANEL_DURATION_S + PANEL_STAGGER_S * 4 + 0.5) * 1000
    );
    return () => clearTimeout(fallback);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
    >
      {phase === "line" && (
        <div className="absolute inset-0 bg-brand-orange flex items-center justify-center">
          {/* Top-center eyebrow — mirrors the site's section tags */}
          <motion.span
            className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 font-mono text-[9px] md:text-[10px] text-white/80 uppercase tracking-[0.4em] md:tracking-[0.6em] font-black whitespace-nowrap"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Booting the Ecosystem
          </motion.span>

          {/* Bottom-left brand marker */}
          <motion.div
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/logos/entrext.webp"
              alt=""
              width={48}
              height={48}
              className="w-9 h-9 md:w-11 md:h-11 object-contain"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="font-sans font-black text-white text-base md:text-lg uppercase tracking-tighter italic">
                Entrext
              </span>
              <span className="font-mono text-[8px] md:text-[9px] text-white/75 uppercase tracking-[0.35em] mt-1.5">
                Build. Own. Compound.
              </span>
            </div>
          </motion.div>

          {/* Bottom-right boot counter */}
          <motion.div
            className="absolute bottom-4 right-5 md:bottom-8 md:right-10 flex items-end leading-none tabular-nums"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-end leading-none">
              <span className="font-mono text-[8px] md:text-[9px] text-white/75 uppercase tracking-[0.35em] mb-2 md:mb-3">
                Boot Sequence
              </span>
              <div className="flex items-end">
                <span className="font-sans font-black text-white text-7xl sm:text-8xl md:text-9xl lg:text-[160px] tracking-[-0.04em]">
                  {String(percent).padStart(3, "0")}
                </span>
                <span className="font-mono text-white/70 text-lg md:text-2xl lg:text-3xl mb-2 md:mb-4 lg:mb-6 ml-1">
                  %
                </span>
              </div>
            </div>
          </motion.div>

          <div className="relative w-full">
            {/* Animated line — scaleX gives a clean 0→1 progress value */}
            <motion.div
              className="h-px md:h-0.5 bg-white rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: LINE_DURATION_S, ease: [0.32, 0.72, 0, 1] }}
              onUpdate={(latest) => {
                const progress = (latest.scaleX as number) * 100;
                setPercent(Math.min(100, Math.round(progress)));
                if (progress >= 80) setRevealed((i) => Math.max(i, 2));
                else if (progress >= 50) setRevealed((i) => Math.max(i, 1));
                else if (progress >= 20) setRevealed((i) => Math.max(i, 0));
              }}
              onAnimationComplete={() => {
                setPercent(100);
                setTimeout(() => setPhase("panels"), HOLD_AFTER_LINE_MS);
              }}
            />

            {/* Words sitting on the line — spell out "Entrepreneur's Next" */}
            {SLOTS.map((slot, i) => (
              <motion.div
                key={slot.word}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${slot.position}%` }}
                initial={{ opacity: 0, scale: 0.6, y: 10 }}
                animate={
                  revealed >= i
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.6, y: 10 }
                }
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="px-5 py-3 sm:px-7 sm:py-4 rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] flex items-center justify-center">
                  <span className="font-sans font-black uppercase italic text-brand-orange text-sm sm:text-lg md:text-xl tracking-tight whitespace-nowrap">
                    {slot.word}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {phase === "panels" && (
        <div className="absolute inset-0 flex flex-row-reverse">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className="w-1/5 h-full bg-brand-orange"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{
                duration: PANEL_DURATION_S,
                ease: [0.83, 0, 0.17, 1],
                delay: index * PANEL_STAGGER_S,
              }}
              onAnimationComplete={() => {
                if (index === 4) setPhase("done");
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Loader;
