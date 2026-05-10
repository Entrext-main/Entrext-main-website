"use client";

import React from 'react';
import { motion } from 'motion/react';

export const EcosystemTriangle = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[#ff4d00]/5 blur-[120px] rounded-full animate-pulse" />
      
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1, 0.95, 1],
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg viewBox="0 0 400 400" className="w-[90%] h-[90%] drop-shadow-[0_0_30px_rgba(255,77,0,0.2)]">
          <defs>
            <linearGradient id="triGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d00" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff4d00" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.path 
            d="M200 50 L350 320 L50 320 Z" 
            fill="none" 
            stroke="url(#triGradient)" 
            strokeWidth="1"
            className="opacity-40"
          />
          <motion.path 
            d="M200 80 L320 300 L80 300 Z" 
            fill="none" 
            stroke="url(#triGradient)" 
            strokeWidth="0.5"
            className="opacity-20"
          />
        </svg>

        {[
          { label: "PRO", deg: 0, desc: "Validated" },
          { label: "LABS", deg: 120, desc: "Velocity" },
          { label: "EDGE", deg: 240, desc: "Gaming" }
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              transform: `rotate(${node.deg}deg) translateY(-160px)`,
            }}
          >
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex flex-col items-center group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black border border-[#ff4d00]/40 rounded-full flex items-center justify-center text-[7px] md:text-[8px] font-black text-[#ff4d00] shadow-[0_0_20px_rgba(255,77,0,0.3)] group-hover:scale-125 transition-transform">
                {node.label}
              </div>
              <div className="mt-4 px-3 py-1 bg-white/5 backdrop-blur-md rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[6px] md:text-[7px] font-mono uppercase tracking-widest text-zinc-400">{node.desc}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}

        <div className="absolute w-12 h-12 md:w-16 md:h-16 bg-[#ff4d00] rounded-full flex items-center justify-center text-black font-black text-lg md:text-xl shadow-[0_0_50px_#ff4d00]">
          X
        </div>
      </motion.div>
    </div>
  );
};
