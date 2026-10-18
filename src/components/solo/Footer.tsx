"use client";

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-zinc-400 py-16 text-xs border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-zinc-500 font-mono">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 text-white font-mono text-xs font-bold">
              <span className="tracking-widest">ENTREXT</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400 font-medium">SOLO NON-TECH FOUNDERS</span>
            </div>
            <span className="hidden sm:inline text-zinc-700">·</span>
            <span className="text-zinc-500 text-xs">
              Entrext Studio · Pilot with 3 founders first.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-zinc-500">
            <span>You Own 100%</span>
            <span>·</span>
            <span>$1,500/mo</span>
            <span>·</span>
            <span>Zero Equity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
