/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ id, label, title, subtitle, className = "" }) => (
  <div id={id} className={`mb-24 px-4 border-l-2 border-[#ff4d00]/30 ${className}`}>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-8 ml-8"
    >
      <div className="flex items-center gap-4">
        <span className="font-mono text-[10px] uppercase font-black text-[#ff4d00] tracking-[0.5em]">{label}</span>
      </div>
      <h2 className="text-6xl md:text-8xl font-sans italic text-white leading-[0.8] tracking-tighter uppercase font-black">{title}</h2>
      {subtitle && <p className="text-xl text-zinc-500 max-w-xl leading-snug uppercase tracking-tight font-bold">{subtitle}</p>}
    </motion.div>
  </div>
);
