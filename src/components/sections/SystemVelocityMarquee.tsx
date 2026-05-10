"use client";

import React from 'react';
import { motion } from 'motion/react';

export const SystemVelocityMarquee = () => {
  const row1 = [
    "LAUNCH_READY", "STAY_TOUGH", "USER_FIRST", "MOVE_FAST", "BUILD_SMART", 
    "NEW_SYSTEMS", "OWNERSHIP", "SCALABLE", "REVENUE", "QUICK_WINS", "AI_POWERED"
  ];

  const row2 = [
    "COMMUNITY", "STABILITY", "GROWTH", "PRECISION", "SYNCED", 
    "ACTIVE", "POTENTIAL", "COMPOUNDING", "TRUSTED", "EXCELLENCE", "ECOSYSTEM"
  ];

  return (
    <div className="py-12 md:py-20 bg-zinc-950 border-y border-white/5 overflow-hidden flex flex-col gap-6 md:gap-8 relative">
      <div className="absolute inset-0 bg-[#ff4d00]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 md:gap-20 items-center px-10"
        >
          {[...row1, ...row1].map((text, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6">
              <span className="text-[8px] md:text-[10px] font-mono font-black text-[#ff4d00] uppercase tracking-[0.3em] md:tracking-[0.5em]">{text}</span>
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/20" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 md:gap-20 items-center px-10"
        >
          {[...row2, ...row2].map((text, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6">
               <div className="flex gap-1">
                 {[1,2,3].map(j => <div key={j} className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-white/10" />)}
               </div>
              <span className="text-[8px] md:text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.3em] md:tracking-[0.5em]">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
