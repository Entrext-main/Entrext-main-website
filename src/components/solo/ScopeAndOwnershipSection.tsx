"use client";

import React from 'react';
import { Check, X, KeyRound, Sparkles } from 'lucide-react';

export const ScopeAndOwnershipSection: React.FC = () => {
  const whatYouDo = [
    'Distribute consistently (pick camera or text/Reddit)',
    'Talk to your audience and users',
    'Decide what to build next',
  ];

  const whatsNotIncluded = [
    {
      title: 'Users or traffic',
      desc: 'You build your own audience.',
    },
    {
      title: 'Guaranteed income or results',
      desc: 'Most products earn little.',
    },
    {
      title: 'Unlimited requests',
      desc: 'We agree on scope each month.',
    },
  ];

  return (
    <section className="bg-[#000000] text-white py-32 px-6 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Two Column Grid: What You Do vs What's Not Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Column 1: WHAT YOU DO */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Your Sole Responsibility
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              WHAT YOU DO
            </h3>

            <ul className="space-y-4 pt-2">
              {whatYouDo.map((task, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base text-zinc-200 font-sans">
                  <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: WHAT’S NOT INCLUDED */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Expectation Alignment
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              WHAT’S NOT INCLUDED
            </h3>

            <ul className="space-y-4 pt-2">
              {whatsNotIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400 font-sans">
                  <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-zinc-200 font-medium block">{item.title}.</span>
                    <span className="text-zinc-400">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Featured Ownership Callout: YOU OWN IT */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
                <KeyRound className="w-4 h-4 text-white" />
                <span>100% Sovereign Ownership</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                YOU OWN IT
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans">
                The product, the code, the domain, and every account are yours. If we part ways, you get a full handover.
              </p>
            </div>

            <div className="shrink-0 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono space-y-2.5 text-zinc-400">
              <div className="text-white font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                Full Handover Includes:
              </div>
              <div>• GitHub Repository Transfer</div>
              <div>• Custom Domain & DNS Keys</div>
              <div>• Stripe & Payment Accounts</div>
              <div>• Complete Database & Production Hosting</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
