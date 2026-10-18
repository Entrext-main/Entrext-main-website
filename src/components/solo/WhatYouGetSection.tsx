"use client";

import React from 'react';
import { Hammer, Wrench, BookOpen, Users2, Sparkles } from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  const offerings = [
    {
      title: 'We build',
      description: 'We turn your idea into a working product and set up payments, hosting, and analytics.',
      icon: Hammer,
      badge: 'Engineering',
    },
    {
      title: 'We maintain',
      description: 'Bugs and small updates are on us. You never worry about code breakage or server ops.',
      icon: Wrench,
      badge: 'Reliability',
    },
    {
      title: 'We teach',
      description: 'A tailored distribution playbook for what you are good at — on camera (TikTok, IG, Shorts) or text (Reddit, X, LinkedIn, Threads).',
      icon: BookOpen,
      badge: 'Playbook',
    },
    {
      title: 'We connect',
      description: 'A private community of solo founders, plus one live strategic session every month.',
      icon: Users2,
      badge: 'Community',
    },
  ];

  return (
    <section id="what-you-get" className="bg-[#000000] text-white py-32 px-6 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
            Core Deliverables
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            WHAT YOU GET
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-normal mt-4 max-w-xl">
            Everything non-tech founders need to ship software without hiring a tech team or finding a technical co-founder.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {offerings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all group flex flex-col justify-between space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-2.5 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/80">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Feature Box */}
        <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Bonus Deliverable</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Idea Research
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl font-sans">
                Real-time research into what’s working across TikTok, Reddit, Instagram, X, and LinkedIn right now, trending micro-niches, and validated problems. We do this when we can, but it isn’t guaranteed.
              </p>
            </div>
            <div className="shrink-0 self-start sm:self-center">
              <span className="text-xs font-mono text-zinc-400 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
                Included in Pilot
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
