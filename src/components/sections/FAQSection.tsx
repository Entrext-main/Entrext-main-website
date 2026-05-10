"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Zap, Shield, Target, Layers } from "lucide-react";
import { FAQItem } from '../ui/FAQItem';
import { FAQ_DATA } from '../../constants/data';

export const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const icons = [
    <Zap size={18} />,
    <Shield size={18} />,
    <Target size={18} />,
    <Layers size={18} />
  ];

  return (
    <section id="faq" className="py-24 md:py-48 bg-black text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="orange-glow bottom-0 right-0 w-1/3 h-1/3 opacity-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-10 md:mb-16">
                 <div className="w-12 h-[1px] bg-[#ff4d00]" />
                 <span className="font-mono text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.5em] font-black">System_Dossier // FAQ</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-sans font-black uppercase text-white mb-12 md:mb-20 leading-[0.8] tracking-tighter text-center lg:text-left">
                THE <br/><span className="text-[#ff4d00]">FAQ.</span>
              </h2>

              <div className="space-y-3 md:space-y-4">
                 {FAQ_DATA.map((cat, i) => (
                   <button
                     key={i}
                     onClick={() => setActiveCategory(i)}
                     className={`w-full group flex items-center justify-between p-4 md:p-6 rounded-xl border transition-all duration-500 ${activeCategory === i ? 'bg-white/5 border-white/20' : 'bg-transparent border-transparent grayscale opacity-40 hover:opacity-100 hover:grayscale-0'}`}
                   >
                     <div className="flex items-center gap-4 md:gap-6">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors ${activeCategory === i ? 'bg-[#ff4d00] text-white' : 'bg-white/5 text-white/40 group-hover:bg-white/10'}`}>
                          {icons[i] || <Layers size={18} />}
                        </div>
                        <div className="text-left">
                           <div className="font-mono text-[7px] md:text-[8px] uppercase tracking-widest text-[#ff4d00] mb-0.5 md:mb-1 font-bold">{cat.id}</div>
                           <div className="font-sans font-black uppercase tracking-tighter text-xs md:text-sm">{cat.category}</div>
                        </div>
                     </div>
                     <ChevronRight size={16} className={`transition-transform duration-500 hidden md:block ${activeCategory === i ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                   </button>
                 ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
             <motion.div
               key={activeCategory}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
               className="bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 backdrop-blur-sm"
             >
                <div className="flex items-center justify-between mb-8 md:mb-16 pb-8 md:pb-12 border-b border-white/5">
                   <h3 className="text-3xl md:text-5xl font-sans font-black uppercase text-white italic tracking-tighter leading-none">
                     {FAQ_DATA[activeCategory].category}
                   </h3>
                   <div className="font-mono text-[9px] md:text-[10px] text-white/20 uppercase tracking-widest hidden md:block">
                     Module :: {FAQ_DATA[activeCategory].id}
                   </div>
                </div>

                <div className="space-y-4">
                   {FAQ_DATA[activeCategory].questions.map((faq, idx) => (
                     <FAQItem key={idx} question={faq.q} answer={faq.a} />
                   ))}
                </div>

                <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/5 flex flex-wrap gap-6 md:gap-12">
                   <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse" />
                      <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-tighter text-white/40">Status: Verified</span>
                   </div>
                   <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                      <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-tighter text-white/40">
                        Last Update: {new Date().toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })}
                      </span>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
