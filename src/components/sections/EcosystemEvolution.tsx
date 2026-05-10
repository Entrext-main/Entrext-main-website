"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Users, Zap } from 'lucide-react';
import { EcosystemVault } from '../ui/EcosystemVault';
import { DIVISIONS } from '../../constants/data';

export const EcosystemEvolution = () => {
  const getIcon = (id: string) => {
    switch(id) {
      case 'LABS': return <Cpu size={20} />;
      case 'PRO': return <Users size={20} />;
      case 'EDGE': return <Zap size={20} />;
      default: return <Zap size={20} />;
    }
  };

  return (
    <section id="divisions" className="py-24 md:py-40 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
           <div className="max-w-xl">
              <span className="font-mono text-[9px] md:text-[10px] text-[#ff4d00] uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-6 block font-black">Our Ecosystem // v4.0</span>
              <h2 className="text-5xl md:text-8xl font-sans font-black uppercase tracking-tighter text-white leading-none mb-6 md:mb-8">
                Living <span className="text-white/20">Growth.</span>
              </h2>
              <p className="text-base md:text-lg font-medium text-white/40 italic">
                A connected network of people, products, and capital—where every new addition makes the whole system stronger.
              </p>
           </div>
           <div className="hidden lg:block text-right pb-4">
              <div className="flex items-center gap-4 justify-end mb-2">
                 <div className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse" />
                 <span className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">Growth Engine: Active</span>
              </div>
              <p className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-white/10">Built for Scale</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {DIVISIONS.map((div, i) => (
             <motion.div
               key={div.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className={`relative bg-zinc-900/50 backdrop-blur-xl border ${div.color} rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col group hover:bg-zinc-900 transition-all duration-500`}
             >
                <div className="flex justify-between items-start mb-8 md:mb-12">
                   <div className="p-3 bg-white/5 rounded-2xl text-white group-hover:text-[#ff4d00] transition-colors">
                      {getIcon(div.id)}
                   </div>
                   <div className="flex flex-col items-end">
                      <span className="text-[8px] md:text-[9px] font-mono font-black text-white/20 tracking-tighter uppercase mb-1">Phase</span>
                      <span className="text-lg md:text-xl font-sans font-black text-white/40">0{i+1}</span>
                   </div>
                </div>

                <div className="mb-8 md:mb-10 flex-1">
                   <h3 className="text-2xl md:text-3xl font-sans font-black uppercase tracking-tighter text-white mb-2 group-hover:text-[#ff4d00] transition-colors">{div.title}</h3>
                   <div className="text-[9px] md:text-[10px] font-mono font-black text-[#ff4d00] uppercase tracking-widest mb-4 md:mb-6">{div.tagline}</div>
                   <p className="text-[12px] md:text-[13px] font-medium text-white/50 leading-relaxed mb-6 italic">
                      {div.desc}
                   </p>
                   {div.subDesc && (
                     <p className="text-[10px] md:text-[11px] font-medium text-white/30 border-l border-white/10 pl-4 py-1 italic">
                       {div.subDesc}
                     </p>
                   )}
                </div>

                <div className="pt-6 md:pt-8 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                      <span className="text-[7px] md:text-[8px] font-mono font-bold text-white uppercase tracking-widest">
                        {div.status === 'BUILD_ACTIVE' ? 'Building' : div.status === 'NODE_READY' ? 'Ready' : 'Live'}
                      </span>
                   </div>
                   <ArrowRight size={14} className="text-white" />
                </div>

                <div className="absolute bottom-4 right-10 rotate-90 text-7xl md:text-[100px] font-sans font-black text-white/[0.02] select-none pointer-events-none">
                  {div.id}
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-16 md:mt-20 flex justify-center">
           <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 px-6 md:px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <div className="flex gap-2">
                 {[1,2,3].map(j => <div key={j} className="w-1 h-1 rounded-full bg-[#ff4d00] opacity-40" />)}
              </div>
              <p className="text-[8px] md:text-[9px] font-mono font-black text-white/30 uppercase tracking-[0.2em] md:tracking-[0.4em] text-center">Compounding_Network_Effect // v4.0</p>
              <div className="hidden sm:flex gap-2 text-white/20">
                 <ArrowRight size={12} />
              </div>
           </div>
        </div>

        <EcosystemVault />
      </div>
    </section>
  );
};
