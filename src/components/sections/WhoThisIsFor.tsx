"use client";

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const WhoThisIsFor = () => {
  const targets = [
    { t: "Serious and Committed Founders", d: "Ready to build and own high-impact products." },
    { t: "Technical Builders", d: "Tired of building for someone else's vision." },
    { t: "Content Creators", d: "Ready to turn audience into a real business." },
    { t: "Builders", d: "Who wake up thinking about problems worth solving." }
  ];

  return (
    <section className="py-24 md:py-40 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="text-center lg:text-left">
            <div className="text-[10px] font-mono text-[#ff4d00] mb-6 md:mb-8 uppercase tracking-[0.4em]">Membership //</div>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black italic mb-6 md:mb-10 leading-[0.9] uppercase">
               This is <br/>For You.
            </h3>
            <p className="text-lg md:text-xl text-zinc-500 max-w-md mx-auto lg:mx-0 leading-relaxed uppercase tracking-tighter mb-10 md:mb-12 font-bold">
               Entrext is where you belong. Not as an employee. Not as a contractor. As a serious and committed founder.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {targets.map((target, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-6 md:p-8 sleek-card bg-black border-white/5 hover:border-[#ff4d00]/30 transition-all rounded-2xl"
              >
                <div className="text-[#ff4d00] mb-4"><CheckCircle2 size={24}/></div>
                <h4 className="text-xl md:text-2xl font-black mb-2 uppercase italic">{target.t}</h4>
                <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-tight">{target.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
