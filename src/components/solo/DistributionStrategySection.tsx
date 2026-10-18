"use client";

import React from 'react';

interface DistributionStrategySectionProps {
  onOpenApply?: () => void;
}

export const DistributionStrategySection: React.FC<DistributionStrategySectionProps> = () => {
  return (
    <section className="bg-[#000000] text-white py-24 sm:py-32 px-6 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Distribution
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            You pick what you are good at.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            It’s not just for X. Pick the format that fits you best.
          </p>
        </div>

        {/* 2 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Comfortable with Camera */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Consumer SaaS
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Comfortable with Camera
            </h3>
            <p className="text-sm text-zinc-300 font-sans leading-relaxed">
              Instagram, TikTok <span className="text-emerald-400 font-mono text-xs">(Faster results)</span>, LinkedIn, YouTube Shorts.
            </p>
          </div>

          {/* Comfortable Not on Camera */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Text & Communities
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Comfortable not on camera
            </h3>
            <div className="space-y-1.5 text-sm text-zinc-300 font-sans leading-relaxed">
              <div>
                Early distribution <span className="text-zinc-400">(Reddit)</span>
              </div>
              <div>
                Personal branding with text <span className="text-zinc-400">(X, LinkedIn, Instagram carousels, Threads)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
