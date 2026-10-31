"use client";

import React from 'react';
import { motion } from 'motion/react';

// Operator + Builder pair up to form "Your Company" (the glowing X). The three points form an
// equilateral triangle centred on (50, 50), so the diagram turns about its own middle.
const NODES = [
  { label: "OPERATOR", x: 65, y: 24 },
  { label: "BUILDER", x: 65, y: 76 },
];
const COMPANY = { x: 20, y: 50 };

// Whole diagram turns slowly; every label counter-rotates so text stays upright.
const SPIN = { duration: 40, repeat: Infinity, ease: "linear" as const };

export const EcosystemTriangle = () => {
  return (
    <div className="relative w-full aspect-square max-w-90 sm:max-w-125 lg:max-w-190 flex items-center justify-center">
      <div className="absolute inset-0 bg-brand-orange/5 blur-[120px] rounded-full animate-pulse" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={SPIN}
        className="absolute inset-0"
      >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="linkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff4d00" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {/* Operator ↔ Builder */}
        <line x1={NODES[0].x} y1={NODES[0].y} x2={NODES[1].x} y2={NODES[1].y} stroke="#ff4d00" strokeOpacity="0.35" strokeWidth="0.25" />
        <line x1={NODES[0].x} y1={NODES[0].y + 1.5} x2={NODES[1].x} y2={NODES[1].y + 1.5} stroke="#ff4d00" strokeOpacity="0.15" strokeWidth="0.25" />
        {/* Both → Company */}
        {NODES.map((n) => (
          <React.Fragment key={n.label}>
            <line x1={n.x} y1={n.y} x2={COMPANY.x} y2={COMPANY.y} stroke="url(#linkGradient)" strokeWidth="0.3" />
            <line x1={n.x + 1.5} y1={n.y} x2={COMPANY.x + 1.5} y2={COMPANY.y} stroke="url(#linkGradient)" strokeOpacity="0.5" strokeWidth="0.3" />
          </React.Fragment>
        ))}
      </svg>

      {NODES.map((n, i) => (
        <div
          key={n.label}
          className="absolute"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={SPIN}
              className="w-[58px] h-[58px] sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-black border border-[#ff4d00]/60 flex items-center justify-center text-[7px] sm:text-[10px] lg:text-[11px] font-black tracking-wide text-[#ff4d00]"
            >
              {n.label}
            </motion.div>
          </motion.div>
        </div>
      ))}

      {/* Zero-size anchor at the X: counter-rotating around it keeps the label directly below */}
      <div className="absolute" style={{ left: `${COMPANY.x}%`, top: `${COMPANY.y}%` }}>
        <motion.div animate={{ rotate: -360 }} transition={SPIN} className="absolute left-0 top-0">
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[#ff4d00] rounded-full flex items-center justify-center text-black font-black text-3xl sm:text-4xl lg:text-5xl shadow-[0_0_70px_rgba(255,77,0,0.6)]"
          >
            X
          </motion.div>
          <span className="absolute left-1/2 -translate-x-1/2 top-[50px] sm:top-[68px] lg:top-[78px] whitespace-nowrap text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">
            Your Company
          </span>
        </motion.div>
      </div>
      </motion.div>
    </div>
  );
};
