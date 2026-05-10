/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import type { Division } from '../../constants/data';

interface MemberCardProps {
  name: string;
  division: Division;
  image: string | null;
  index: number;
}

export const MemberCard: React.FC<MemberCardProps> = ({ name, division, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative flex flex-col shrink-0 w-[300px] md:w-[380px] mx-5 md:mx-10"
  >
    <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-zinc-900 rounded-sm">
      <div className="absolute top-4 left-4 z-20">
        <div className="px-3 py-1 bg-black/80 backdrop-blur-md text-white font-mono text-[9px] font-black uppercase tracking-widest border border-white/10 rounded-sm">
          {division}
        </div>
      </div>

      {image ? (
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={`${name} — ${division.toLowerCase()} division at Entrext`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:scale-110 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a0a00] via-black to-[#1a0a00]">
          {/* Subtle scan-line texture for the fallback tile */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(255,77,0,0.6) 1px, transparent 1px)', backgroundSize: '4px 4px' }}
            aria-hidden
          />
          <span
            className="font-display italic text-[160px] md:text-[200px] leading-none text-[#ff4d00]/80 group-hover:text-[#ff4d00] transition-colors duration-700 select-none"
            aria-hidden
          >
            {name.charAt(0)}
          </span>
          <div className="absolute bottom-4 right-4 font-mono text-[8px] uppercase tracking-widest text-white/30">
            Awaiting_Signal
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      )}

      <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
    </div>

    <div className="text-center px-4">
      <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-1 group-hover:text-[#ff4d00] transition-colors leading-none tracking-tight">
        {name}
      </h3>
      <p className="text-[9px] md:text-[10px] font-mono font-black text-white/40 uppercase tracking-[0.3em]">
        {division} Node
      </p>
    </div>

    <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-20 transition-opacity">
      <div className="text-[8px] font-mono text-white uppercase tracking-widest">Personnel_Node // v4.0.{index + 1}</div>
    </div>
  </motion.div>
);
