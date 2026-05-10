"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  top: string;
  left: string;
  duration: number;
  delay: number;
}

export const TechnicalAtmosphere = () => {
  const elements = [
    { text: "(12+12)", top: "15%", left: "10%", delay: 0 },
    { text: "15*6=??", top: "25%", left: "85%", delay: 2 },
    { text: "-15+6", top: "55%", left: "15%", delay: 1 },
    { text: "17+6-4", top: "45%", left: "75%", delay: 3 },
    { text: "5x9 / 8", top: "70%", left: "80%", delay: 4 },
    { text: "3y", top: "60%", left: "5%", delay: 0.5 },
    { text: "[ 24 ]", top: "75%", left: "12%", delay: 2.5, boxed: true },
    { text: "[ 12 ]", top: "30%", left: "90%", delay: 1.5, boxed: true },
  ];

  // Particle positions are randomized — generate them after mount so SSR HTML
  // and the first client render match. Server emits an empty list; client fills in.
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
      })),
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.08]">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.3, 1, 0.3],
            y: [0, -40, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 10 + Math.random() * 5, 
            repeat: Infinity, 
            delay: el.delay,
            ease: "easeInOut"
          }}
          style={{ top: el.top, left: el.left }}
          className={`absolute font-mono text-zinc-400 font-bold ${el.boxed ? 'border border-zinc-500/30 p-2 text-[10px]' : 'text-xs md:text-sm'}`}
        >
          {el.text}
        </motion.div>
      ))}
      
      <svg className="absolute inset-0 w-full h-full opacity-[0.2]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 L40 40 M100 0 L60 40 M0 100 L40 60 M100 100 L60 60" stroke="#ff4d00" strokeWidth="0.05" fill="none" />
        <circle cx="50" cy="50" r="10" stroke="#ff4d00" strokeWidth="0.05" fill="none" strokeDasharray="0.1 0.1" />
      </svg>

      {particles.map((p, i) => (
        <motion.div
          key={`p-${i}`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
          className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
          style={{ top: p.top, left: p.left }}
        />
      ))}
    </div>
  );
};

export const GlowBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-black">
    <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[1px] h-[70vh] bg-gradient-to-b from-transparent via-[#ff4d00]/60 to-transparent shadow-[0_0_40px_#ff4d00]" />
    <div className="orange-glow top-[20%] left-[20%] w-[40%] h-[40%]" />
    <div className="orange-glow top-[40%] right-[10%] w-[30%] h-[30%] opacity-50" />
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/[0.05]" 
    />

    <TechnicalAtmosphere />
  </div>
);
