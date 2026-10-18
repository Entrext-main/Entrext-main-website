"use client";

import React from 'react';
import { Sparkles, Trophy, Globe, Zap } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  return (
    <section className="bg-[#000000] text-white py-32 px-6 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Case Study · The Power of Audience + Relentless Shipping</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Look at Marc Lou.
        </h2>

        {/* Narrative Flow */}
        <div className="space-y-6 text-base sm:text-xl text-zinc-300 leading-relaxed font-sans max-w-3xl">
          <p>
            Marc Lou started building startups in 2016. It took him 2 years to make his first $1 online. After being fired by Tai Lopez in November 2021, he discovered the build-in-public community and started shipping products relentlessly.
          </p>
          <p>
            In December 2021, he launched <span className="text-white font-medium">Mood2Movie</span>, which attracted 10K visitors from Reddit.
          </p>
        </div>

        {/* Metric Highlight Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-zinc-800/80">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1">
                Current Annual Revenue
              </div>
              <div className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans">
                $3 Million <span className="text-xl sm:text-2xl text-zinc-400 font-normal">USD / year</span>
              </div>
            </div>
            <div className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800 self-start sm:self-auto">
              Solo · No Employees
            </div>
          </div>

          <p className="text-base sm:text-lg text-zinc-200 font-sans leading-relaxed">
            Today, he works alone and earns $3 Million annually in USD sitting in Bali. From digital products, newsletters, and sponsorships.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-white" />
              <span>Active catalog of products</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-white" />
              <span>Sold several ventures</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white" />
              <span>Work from anywhere, anytime</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
