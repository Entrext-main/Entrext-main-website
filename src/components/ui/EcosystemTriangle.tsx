"use client";

import React from 'react';
import { motion } from 'motion/react';

// Operator + Builder pair up to form "Your Company" (the glowing X).
const NODES = [
  { label: "OPERATOR", x: 22, y: 26 },
  { label: "BUILDER", x: 78, y: 18 },
];
const COMPANY = { x: 50, y: 78 };

// Whole diagram turns slowly; every label counter-rotates so text stays upright.
const SPIN = { duration: 40, repeat: Infinity, ease: "linear" as const };

export const EcosystemTriangle = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#ff4d00]/5 blur-[120px] rounded-full animate-pulse" />

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
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black border border-[#ff4d00]/60 flex items-center justify-center text-[8px] md:text-[10px] font-black tracking-wide text-[#ff4d00]"
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
            className="absolute -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-[#ff4d00] rounded-full flex items-center justify-center text-black font-black text-3xl md:text-4xl shadow-[0_0_70px_rgba(255,77,0,0.6)]"
          >
            X
          </motion.div>
          <span className="absolute left-1/2 -translate-x-1/2 top-12 md:top-14 mt-4 whitespace-nowrap text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">
            Your Company
          </span>
        </motion.div>
      </div>
      </motion.div>
    </div>
  );
};
