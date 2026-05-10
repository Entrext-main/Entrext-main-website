/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export const EcosystemVault = () => {
  return (
    <div className="relative w-full max-w-[800px] h-[500px] md:h-[700px] mx-auto mt-10 flex flex-col items-center justify-center [perspective:2000px]">
      <motion.div 
        animate={{ 
          rotateY: [0, 360],
          rotateX: [20, 40, 20],
          scale: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear",
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-48 h-48 md:w-72 md:h-72 [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 [transform-style:preserve-3d]">
          {['front', 'back', 'top', 'bottom', 'left', 'right'].map((face) => (
            <div 
              key={face}
              className={`absolute inset-0 border border-[#ff4d00]/40 bg-zinc-900/30 backdrop-blur-sm shadow-[0_0_50px_rgba(255,77,0,0.05)]
                ${face === 'front' ? '[transform:translateZ(96px)] md:[transform:translateZ(144px)]' : ''}
                ${face === 'back' ? '[transform:translateZ(-96px)] md:[transform:translateZ(-144px)]' : ''}
                ${face === 'top' ? '[transform:rotateX(-90deg)_translateZ(96px)] md:[transform:rotateX(-90deg)_translateZ(144px)]' : ''}
                ${face === 'bottom' ? '[transform:rotateX(90deg)_translateZ(96px)] md:[transform:rotateX(90deg)_translateZ(144px)]' : ''}
                ${face === 'left' ? '[transform:rotateY(-90deg)_translateZ(96px)] md:[transform:rotateY(-90deg)_translateZ(144px)]' : ''}
                ${face === 'right' ? '[transform:rotateY(90deg)_translateZ(96px)] md:[transform:rotateY(90deg)_translateZ(144px)]' : ''}
              `}
            >
              <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(#ff4d00 1.5px, transparent 1.5px), linear-gradient(90deg, #ff4d00 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
              <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#ff4d00] rounded-full shadow-[0_0_10px_#ff4d00]" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ff4d00] rounded-full shadow-[0_0_10px_#ff4d00]" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#ff4d00] rounded-full shadow-[0_0_10px_#ff4d00]" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#ff4d00] rounded-full shadow-[0_0_10px_#ff4d00]" />
              {face === 'top' && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 h-3 md:h-4 border border-[#ff4d00]/50 bg-black/40 rounded-full" />
              )}
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center [transform:translateZ(100px)] md:[transform:translateZ(150px)]">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-zinc-800/50 bg-zinc-950/40 backdrop-blur-md shadow-2xl flex items-center justify-center relative"
           >
              <div className="w-1 h-full bg-zinc-800/50 absolute rotate-0" />
              <div className="w-1 h-full bg-zinc-800/50 absolute rotate-120" />
              <div className="w-1 h-full bg-zinc-800/50 absolute rotate-240" />
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-[#ff4d00]/20 bg-black/40 shadow-[inset_0_0_15px_rgba(255,77,0,0.2)] flex items-center justify-center">
                 <div className="w-2 h-2 bg-[#ff4d00] rounded-full shadow-[0_0_8px_#ff4d00]" />
              </div>
           </motion.div>
        </div>

        <div className="absolute inset-0 [transform-style:preserve-3d]">
           {[...Array(5)].map((_, i) => (
             <motion.div
                key={i}
                initial={{ y: -200, opacity: 0 }}
                whileInView={{ y: 50 - i * 35, opacity: 0.8 }}
                transition={{ delay: i * 0.8, duration: 4, ease: "backOut" }}
                className="absolute left-1/2 -translate-x-1/2 w-28 md:w-36 h-6 md:h-8 bg-gradient-to-r from-zinc-900/80 via-[#ff4d00]/60 to-zinc-900/80 rounded-full border border-white/10 flex items-center justify-center [transform:translateZ(0px)]"
             >
                <div className="flex items-center gap-2">
                   <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white/40 rounded-full" />
                   <span className="text-[6px] md:text-[8px] font-mono font-bold text-white uppercase tracking-widest">Active Product.0{i+1}</span>
                </div>
             </motion.div>
           ))}
        </div>

        <motion.div
          animate={{ y: [-400, -145], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 w-28 md:w-36 h-6 md:h-8 bg-white/90 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.5)] flex items-center justify-center [transform:rotateX(90deg)_translateZ(0px)]"
        >
           <span className="text-[7px] md:text-[9px] font-mono font-black text-black uppercase tracking-widest">Validated Idea</span>
        </motion.div>
      </motion.div>

      <div className="mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full px-6 md:px-12 relative z-20">
         {[
           { label: "Products Released", value: "30 plus" },
           { label: "Revenue Achieved", value: "10k USD" },
           { label: "Global Partners", value: "20 plus" }
         ].map((stat, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.2 }}
             className="text-center group"
           >
              <div className="text-4xl md:text-6xl font-sans font-black uppercase text-white mb-2 group-hover:text-[#ff4d00] transition-colors duration-500 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[8px] md:text-[10px] font-mono font-black text-white/30 uppercase tracking-[0.4em]">
                {stat.label}
              </div>
              <div className="w-8 md:w-12 h-[1px] bg-white/10 mx-auto mt-4 md:mt-6 group-hover:w-16 md:group-hover:w-24 group-hover:bg-[#ff4d00] transition-all duration-500" />
           </motion.div>
         ))}
      </div>
    </div>
  );
};
