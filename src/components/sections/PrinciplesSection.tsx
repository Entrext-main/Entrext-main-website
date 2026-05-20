"use client";

import React from 'react';
import { motion } from 'motion/react';
import { SEVEN_CS } from '../../constants/data';

export const PrinciplesSection = () => {
  return (
    <section id="principles" className="py-24 md:py-40 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 md:mb-32 gap-12 md:gap-16">
          <div className="max-w-2xl text-center md:text-left">
            <span className="font-mono text-[9px] md:text-[10px] text-[#ff4d00] uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-6 block font-black">Architecture of Execution</span>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-sans font-black uppercase tracking-tighter text-black leading-[0.8] mb-8 md:mb-12">
              Founding <br/><span className="opacity-10">Principles.</span>
            </h2>
          </div>
          <div className="hidden lg:block text-right pb-4">
             <div className="flex items-center gap-4 justify-end mb-2">
                <div className="w-2 h-2 rounded-full bg-[#ff4d00]" />
                <span className="text-[10px] font-mono font-black text-black/20 uppercase tracking-widest">Protocol: Active_Standard</span>
             </div>
             <p className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-black/10">Version Control // Permanent</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10 md:mb-12">
               <span className="text-3xl md:text-4xl font-sans font-black italic opacity-20">01</span>
               <h3 className="text-2xl md:text-3xl font-sans font-black uppercase tracking-tighter text-black">The 7 C’s</h3>
               <div className="flex-1 h-[1px] bg-black/5" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
              {SEVEN_CS.map((c) => (
                <div key={c.id} className="group border-l-2 border-black/5 hover:border-[#ff4d00] pl-6 md:pl-8 transition-colors duration-500">
                  <span className="text-[9px] md:text-[10px] font-mono font-black text-black/20 uppercase tracking-[0.3em] mb-2 block">{c.id}</span>
                  <h4 className="text-xl md:text-2xl font-sans font-black uppercase tracking-tight text-black mb-1 group-hover:text-[#ff4d00] transition-colors">{c.title}</h4>
                  <p className="text-xs md:text-sm font-medium text-black/40 italic uppercase tracking-widest">{c.desc}</p>
                </div>
              ))}
              
              <div className="group bg-zinc-950 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between min-h-[140px] md:min-h-[160px]">
                 <span className="text-[9px] md:text-[10px] font-mono font-black text-[#ff4d00] uppercase tracking-[0.3em]">07 // Global_Core</span>
                 <h4 className="text-2xl md:text-3xl font-sans font-black uppercase tracking-tighter text-white leading-none">
                   We always <br/><span className="text-[#ff4d00]">find a way.</span>
                 </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-16 md:space-y-24">
            <div>
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                 <span className="text-xl md:text-2xl font-sans font-black italic opacity-20">02</span>
                 <h3 className="text-lg md:text-xl font-sans font-black uppercase tracking-tighter text-black">How We Work</h3>
              </div>
              <ul className="space-y-4 md:space-y-6">
                {[
                  "Excellence is the baseline",
                  "Long term thinking, short term execution",
                  "High velocity. High output",
                  "Relentless execution"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <span className="text-[#ff4d00] font-black">/</span>
                    <p className="text-[11px] md:text-[13px] font-black uppercase tracking-tight text-black/60 group-hover:text-black transition-colors">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-black/[0.03]">
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                 <span className="text-xl md:text-2xl font-sans font-black italic opacity-20">03</span>
                 <h3 className="text-lg md:text-xl font-sans font-black uppercase tracking-tighter text-black">Founder Mindset</h3>
              </div>
              <ul className="space-y-6 md:space-y-8">
                {[
                  { t: "Extreme ownership", s: "Full accountability" },
                  { t: "No alternatives", s: "Only outcomes" }
                ].map((m, idx) => (
                  <li key={idx}>
                    <h5 className="text-[9px] md:text-[11px] font-mono font-black text-[#ff4d00] uppercase tracking-widest mb-1">{m.t}</h5>
                    <p className="text-base md:text-lg font-sans font-black uppercase tracking-tighter text-black">{m.s}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-[400px] font-sans font-black text-black/[0.01] select-none pointer-events-none">
        CANVAS
      </div>
    </section>
  );
};
