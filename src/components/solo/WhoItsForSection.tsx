"use client";

import React from 'react';
import { Check, X } from 'lucide-react';

export const WhoItsForSection: React.FC = () => {
  const goodFit = [
    'You’re not technical',
    'You want to make and launch small products',
    'You’re willing to distribute consistently (camera or text)',
    'You’re in North America (for now)',
  ];

  const notAFit = [
    'You want a co-founder',
    'You want guaranteed income',
    'You won’t distribute or build an audience',
  ];

  return (
    <section id="who-its-for" className="bg-[#000000] text-white py-32 px-6 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
            Founder Profile
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            WHO IT’S FOR
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-normal mt-4 max-w-xl">
            We are intentionally selective to make sure our collaboration produces real, lasting momentum.
          </p>
        </div>

        {/* Side by Side Fit Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* A Good Fit */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Ideal Profile</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">
                A Good Fit
              </h3>

              <ul className="space-y-4">
                {goodFit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-base text-zinc-200 font-sans">
                    <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-zinc-900 text-xs font-mono text-zinc-400">
              If this is you, we take care of the tech so you can focus entirely on audience.
            </div>
          </div>

          {/* Not a Fit */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-900 space-y-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                <span>Pass If</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-300 mb-6">
                Not a Fit
              </h3>

              <ul className="space-y-4">
                {notAFit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-base text-zinc-400 font-sans">
                    <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-zinc-900 text-xs font-mono text-zinc-400">
              We build micro-products fast, but distribution requires genuine personal commitment.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
