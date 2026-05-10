"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { LAYERS } from '../../constants/data';

export const CoreOSInfographic = () => {
  return (
    <section id="culture" className="py-32 md:py-60 bg-[#f8f8f8] relative overflow-hidden border-y-8 border-black">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-start">
          
          <div className="w-full lg:w-1/3 lg:sticky lg:top-40">
            <div className="bg-black text-white p-8 md:p-12 inline-block shadow-2xl mb-8 md:mb-12 w-full">
              <div className="text-[10px] font-mono text-[#ff4d00] mb-6 uppercase tracking-[0.5em] font-black">Strategic Stack //</div>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-none tracking-tighter mb-8">
                The CORE <br/> <span className="text-[#ff4d00]">OPERATING</span> <br/> SYSTEM
              </h2>
              <p className="text-base md:text-lg font-bold uppercase tracking-tight opacity-70 leading-snug">
                Not generic values. This is the structural architecture of how Entrext builders operate and compound equity.
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8 border-l-4 border-black pl-6 md:pl-8">
              <div className="space-y-2">
                 <div className="text-[9px] md:text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest">Protocol 01 / Integration</div>
                 <p className="text-[10px] md:text-xs font-bold uppercase leading-tight text-black">Every layer depends on the one below it. From Founder mindset to Product output.</p>
              </div>
              <div className="space-y-2">
                 <div className="text-[9px] md:text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest">Protocol 02 / Leverage</div>
                 <p className="text-[10px] md:text-xs font-bold uppercase leading-tight text-black">Culture is the multiplier that turns individual velocity into ecosystem growth.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col items-center">
            <div className="w-full flex flex-col gap-3 md:gap-4">
              {LAYERS.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-full group`}
                >
                  <div className={`p-6 md:p-10 border-4 ${layer.border} ${layer.color} ${layer.text || 'text-black'} shadow-sm group-hover:shadow-2xl transition-all duration-500`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                      <div className="space-y-2 md:w-1/3">
                        <div className={`text-[9px] md:text-[10px] font-mono font-black uppercase tracking-[0.3em] ${layer.id === 'COS' ? 'text-white' : 'text-[#ff4d00]'}`}>
                          {layer.label} //
                        </div>
                        <h4 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter leading-none">
                          {layer.title}
                        </h4>
                        <p className="text-[9px] font-bold uppercase opacity-50 tracking-widest">
                          {layer.details}
                        </p>
                      </div>

                      <div className="md:w-2/3 flex flex-wrap gap-2">
                        {layer.keywords.map((kw, i) => (
                          <div 
                            key={i} 
                            className={`px-2 py-1 md:px-3 md:py-1.5 border ${layer.id === 'FOUNDER' ? 'border-white/20 bg-white/5' : 'border-black/10 bg-black/5'} text-[8px] md:text-[10px] font-mono font-black uppercase tracking-widest rounded-sm`}
                          >
                            {kw}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index < LAYERS.length - 1 && (
                    <div className="h-4 flex items-center justify-center">
                       <Plus size={16} className="text-black/20" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 md:mt-20 flex flex-col items-center gap-4 md:gap-6">
               <div className="w-[2px] h-20 md:h-32 bg-gradient-to-b from-black to-transparent" />
               <div className="text-[9px] md:text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-rl]">
                  FOUNDATION LAYER
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
