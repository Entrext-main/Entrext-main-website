"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, type PanInfo } from 'motion/react';
import { Zap, Cpu, Mail, Users, ArrowLeft, ArrowRight, type LucideIcon } from 'lucide-react';
import { TECHS } from '../../constants/data';

const ICON_MAP: Record<string, LucideIcon> = {
  Monkfeed: Zap,
  Arctic: Cpu,
  Automailer: Mail,
  Introbuddy: Users,
};

const SWIPE_THRESHOLD = 120; // px — past this, the card commits to advancing
const SWIPE_VELOCITY = 500;  // px/s — fast flicks commit even without crossing threshold

const variants = {
  enter: (dir: number) => ({ x: dir * 400, rotate: dir * 14, opacity: 0 }),
  center: { x: 0, rotate: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: -dir * 400, rotate: -dir * 28, opacity: 0 }),
};

export const InHouseTechnologies = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const total = TECHS.length;
  const current = TECHS[index];
  const CurrentIcon = ICON_MAP[current.name] ?? Zap;

  const advance = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + total) % total);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -SWIPE_VELOCITY) advance(1);
    else if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > SWIPE_VELOCITY) advance(-1);
  };

  // Two cards stacked behind the active one.
  const behind = [TECHS[(index + 1) % total], TECHS[(index + 2) % total]];

  return (
    <section id="technologies" className="py-24 md:py-48 bg-white relative overflow-hidden border-y border-black/5">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">

          {/* ─────────────── Left: heading + controls + thumbnail list ─────────────── */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-12 h-[1px] bg-brand-orange" />
              <span className="font-mono text-[9px] md:text-[10px] text-black/40 uppercase tracking-[0.3em] md:tracking-[0.5em] font-black">
                Proprietary Core
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black uppercase tracking-tighter text-black leading-[0.9] mb-6 md:mb-10">
              In-House <br /><span className="text-brand-orange">Tech.</span>
            </h2>

            <p className="text-base md:text-lg font-medium text-black/50 leading-relaxed italic mb-10 max-w-xl">
              We build our own tools to move faster. From how we launch to how we scale, everything is built in-house for maximum speed and control.
            </p>

            {/* Counter + progress bar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="font-mono text-xs uppercase tracking-widest text-black/40 tabular-nums">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </div>
              <div className="flex-1 h-[1px] bg-black/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-brand-orange"
                  animate={{ width: `${((index + 1) / total) * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => advance(-1)}
                aria-label="Previous tech"
                className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => advance(1)}
                aria-label="Next tech"
                className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors"
              >
                <ArrowRight size={16} />
              </button>
              <span className="ml-4 text-[10px] font-mono uppercase tracking-widest text-black/30 hidden md:inline">
                Drag the card or use the buttons
              </span>
            </div>

            {/* Tech thumbnail list — also clickable as direct navigation */}
            <div className="mt-12 grid grid-cols-2 gap-2">
              {TECHS.map((t, i) => {
                const ItemIcon = ICON_MAP[t.name] ?? Zap;
                const isActive = i === index;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-current={isActive ? 'true' : undefined}
                    className={`text-left p-3 rounded-lg border flex items-center gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      isActive
                        ? 'border-black/20 bg-black/[0.03]'
                        : 'border-transparent hover:bg-black/[0.02]'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center ${t.color} ${t.bg}`}>
                      <ItemIcon size={14} />
                    </div>
                    <div>
                      <div className="font-mono text-[8px] text-black/30 uppercase tracking-widest">{t.id}</div>
                      <div className={`font-sans font-black uppercase text-sm ${isActive ? 'text-brand-orange' : 'text-black'}`}>
                        {t.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─────────────── Right: swipeable deck ─────────────── */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[400px] md:w-[360px] md:h-[480px]">
              {/* Subtle glow under the deck */}
              <div className="absolute inset-0 bg-brand-orange/10 blur-3xl rounded-full pointer-events-none" />

              {/* Two cards behind, fanned with depth */}
              {behind.map((t, i) => {
                const offset = i + 1; // 1 (closer), 2 (farther)
                return (
                  <motion.div
                    key={`bg-${t.id}-${offset}`}
                    aria-hidden
                    className={`absolute inset-0 ${t.bg} bg-white border border-black/5 rounded-3xl shadow-xl pointer-events-none`}
                    initial={false}
                    animate={{
                      scale: 1 - offset * 0.05,
                      y: offset * 14,
                      opacity: 1 - offset * 0.3,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{ zIndex: 1 - offset }}
                  />
                );
              })}

              {/* Top: active draggable card */}
              <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                <motion.div
                  key={current.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: 'spring', stiffness: 280, damping: 28 }, rotate: { duration: 0.4 }, opacity: { duration: 0.25 } }}
                  drag={reduceMotion ? false : 'x'}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 bg-white border border-black/10 rounded-3xl p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.15)] flex flex-col justify-between cursor-grab active:cursor-grabbing select-none touch-pan-y"
                  style={{ zIndex: 10 }}
                >
                  {/* Accent bar — uses the tech's signature color */}
                  <div className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl ${current.color.replace('text-', 'bg-')}`} aria-hidden />

                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 ${current.bg} ${current.color} rounded-2xl flex items-center justify-center border border-black/5`}>
                      <CurrentIcon size={28} />
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-black/40">{current.id}</div>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 mb-3">In-House Tool</div>
                    <h3 className="text-4xl md:text-5xl font-sans font-black uppercase italic tracking-tighter text-black mb-6 leading-none">
                      {current.name}
                    </h3>
                    <p className="text-base md:text-lg text-black/60 leading-relaxed">
                      {current.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-black/30 pt-4 border-t border-black/5">
                    <span>{reduceMotion ? 'Use buttons to advance' : '↔ Swipe to advance'}</span>
                    <span className={`${current.color}`}>{current.id} · ACTIVE</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
