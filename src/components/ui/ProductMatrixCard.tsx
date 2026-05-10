/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface ProductMatrixCardProps {
  name: string;
  index: number;
}

export const ProductMatrixCard: React.FC<ProductMatrixCardProps> = ({ name, index }) => (
  <div className="w-[260px] md:w-[300px] h-[300px] md:h-[340px] bg-zinc-950 border border-white/5 p-6 md:p-8 relative flex flex-col group hover:border-[#ff4d00]/50 transition-all overflow-hidden shrink-0">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4d00]/20 to-transparent" />
    
    <div className="flex justify-between items-start mb-10">
      <div className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest">
        UNIT_ID: EN_0{index + 1}
      </div>
      <div className="flex gap-1">
        <div className="w-1 h-1 bg-[#ff4d00] rounded-full animate-pulse" />
        <div className="w-1 h-1 bg-[#ff4d00] rounded-full animate-pulse delay-75" />
      </div>
    </div>

    <div className="flex-1 flex flex-col justify-center">
      <div className="text-[9px] font-mono text-[#ff4d00] mb-2 uppercase tracking-widest opacity-60">Strategic Performance //</div>
      <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white group-hover:text-[#ff4d00] transition-colors">{name}</h3>
    </div>

    <div className="mt-10 py-6 border-t border-white/5 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Status / Deploy</span>
        <span className="text-[9px] font-mono text-white uppercase tracking-widest">Active</span>
      </div>
      <div className="h-1 bg-white/5 w-full relative">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          className="absolute h-full bg-[#ff4d00]/30" 
        />
      </div>
    </div>
    
    <motion.div 
      animate={{ top: ["-10%", "110%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-[#ff4d00]/5 to-transparent pointer-events-none"
    />
  </div>
);
