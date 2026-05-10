"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../../constants/data';

export const ProductPuzzle = () => {
  return (
    <section id="products" className="py-24 md:py-40 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 md:mb-32 gap-12 md:gap-16">
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
               <div className="w-12 h-[1px] bg-[#ff4d00]" />
               <span className="font-mono text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.5em] font-black">Archive_System // v4.0</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-sans font-black uppercase tracking-tighter text-white leading-[0.9] mb-8 md:mb-12">
               Strategic <br/> <span className="text-white/20">Performers.</span>
            </h2>
            <p className="text-base md:text-lg font-medium text-white/30 italic uppercase tracking-tight leading-relaxed">
              "Products aren’t built. They evolve. Every node represents a journey of pivots, ownership compression, and validated direction."
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-end gap-4 opacity-20">
             <div className="text-[10px] font-mono font-black text-white uppercase tracking-widest">Protocol: Node_Validation</div>
             <div className="text-[10px] font-mono font-black text-white uppercase tracking-widest">Status: Evolutionary_Sync</div>
             <div className="w-40 h-[2px] bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-zinc-950 hover:bg-zinc-900/40 p-8 md:p-10 flex flex-col group transition-all duration-700 min-h-[600px] md:h-[750px]"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <span className={`text-3xl md:text-4xl font-sans font-black italic opacity-10 group-hover:opacity-40 transition-opacity ${product.color}`}>{product.id}</span>
                  <div className="text-right">
                     <span className="text-[8px] md:text-[9px] font-mono font-black text-white/20 uppercase tracking-widest block mb-1">Category</span>
                     <span className="text-[9px] md:text-[10px] font-mono font-black text-white/60 uppercase tracking-widest">{product.category}</span>
                  </div>
                </div>

                <div className="mb-8 md:mb-12">
                   <h3 className="text-4xl md:text-5xl font-sans font-black uppercase tracking-tighter text-white mb-4 group-hover:text-[#ff4d00] transition-colors">
                     {product.name}
                   </h3>
                   <div className="flex items-center gap-3 opacity-40">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[9px] font-mono font-black text-white uppercase tracking-widest">{product.status}</span>
                   </div>
                </div>

                <div className="flex-1 space-y-4 md:space-y-6 mb-8 md:mb-12 border-l border-white/5 pl-6">
                   <div className="text-[8px] font-mono font-black text-white/20 uppercase tracking-widest mb-2 md:mb-4">Evolution_Timeline</div>
                   {product.journey.map((step, sIdx) => (
                     <div key={sIdx} className="relative">
                        <div className="absolute -left-[27px] top-1.5 w-1.5 h-1.5 bg-white/10 rounded-full group-hover:bg-[#ff4d00]/30 transition-colors" />
                        <p className="text-[10px] md:text-[11px] font-medium text-white/40 leading-relaxed italic group-hover:text-white/60 transition-colors uppercase tracking-tight">
                          {step}
                        </p>
                     </div>
                   ))}
                </div>

                <div className={`mt-auto bg-zinc-900 border border-white/5 rounded-2xl p-4 md:p-6 group-hover:border-white/10 transition-all ${product.glow} shadow-2xl`}>
                   <div className="flex items-center gap-2 mb-4">
                      <div className={`w-1 h-1 rounded-full bg-current ${product.color}`} />
                      <span className="text-[8px] font-mono font-black text-white/40 uppercase tracking-widest">Active Signal</span>
                   </div>
                   <p className="text-lg md:text-xl font-sans font-bold italic text-white leading-tight tracking-tight uppercase">
                     {product.signal}
                   </p>
                </div>

                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000">
                    <img 
                      src={product.preview} 
                      className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-[30s] ease-linear"
                      alt=""
                      referrerPolicy="no-referrer"
                    />
                </div>
              </div>

              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
                 <ArrowUpRight size={16} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-center opacity-10 border-t border-white/10 pt-8 md:pt-12 gap-8">
           <div className="text-[9px] md:text-[10px] font-mono font-black text-white tracking-[0.4em] uppercase">Archive_System_Verified // 2026.04.29</div>
           <p className="text-[8px] md:text-[9px] font-mono font-black text-white uppercase tracking-widest text-center">All nodes are active and validated within the lattice</p>
           <div className="flex gap-4">
              {[1,2,3,4].map(k => <div key={k} className="w-1.5 h-1.5 bg-white rounded-full opacity-20" />)}
           </div>
        </div>
      </div>
    </section>
  );
};
