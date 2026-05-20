"use client";

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MemberCard } from '../ui/MemberCard';
import { MEMBERS } from '../../constants/data';

export const FoundingMembers = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="people" className="py-24 md:py-40 bg-[#0a0a0a] relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.2]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ff4d00]/5 blur-[200px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 mb-20 md:mb-32">
        <div className="text-center md:text-left">
           <span className="font-mono text-[9px] md:text-[10px] text-[#ff4d00]/60 uppercase tracking-[0.5em] mb-4 block font-black">Collective_Personnel // 03</span>
           <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display italic tracking-tighter text-white leading-none mb-8 md:mb-12">
             Strategic <span className="text-white/20">People.</span>{" "}
             {/* <span className="text-white/40 text-3xl md:text-5xl lg:text-6xl align-middle not-italic font-sans font-black tracking-tight uppercase">
               (People)
             </span> */}
           </h2>
           <p className="max-w-2xl text-base md:text-lg font-medium text-white/40 leading-relaxed italic uppercase tracking-tight">
             Entrext is built on high-trust relationships. Each role in this network represents a specialized operator helping scale the ecosystem.
           </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden pb-12 md:pb-20">
        <motion.div
           animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
           transition={reduceMotion ? undefined : { duration: 80, repeat: Infinity, ease: "linear" }}
           className="flex whitespace-nowrap"
        >
          {[...MEMBERS, ...MEMBERS].map((member, i) => (
            <MemberCard
              key={`${member.name}-${i}`}
              name={member.name}
              division={member.division}
              image={member.image}
              index={i}
            />
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-12 md:mt-20 flex justify-between items-center opacity-20 border-t border-white/5 pt-8 md:pt-12">
         <div className="text-[8px] md:text-[9px] font-mono text-white tracking-[0.3em] uppercase">Personnel_DB.v4</div>
         <div className="text-[8px] md:text-[9px] font-mono text-white tracking-[0.3em] uppercase italic">{MEMBERS.length} Active Nodes</div>
      </div>
    </section>
  );
};
