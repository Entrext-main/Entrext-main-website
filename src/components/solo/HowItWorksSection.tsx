"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface HowItWorksSectionProps {
  onOpenApply: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenApply }) => {
  const steps = [
    {
      step: '01',
      title: 'Apply',
      description: 'Tell us about your chosen distribution channels (camera or text) and product idea.',
    },
    {
      step: '02',
      title: 'Call',
      description: 'If it’s a fit, we talk on a 20-minute strategic alignment call.',
    },
    {
      step: '03',
      title: 'Agree',
      description: 'A simple agreement covering price ($1,500/mo), monthly scope, and 100% your ownership.',
    },
    {
      step: '04',
      title: 'Build',
      description: 'We start building immediately and your first working product launches in 2 to 3 weeks.',
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#000000] text-white py-32 px-6 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
            Execution Roadmap
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            HOW IT WORKS
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-normal mt-4 max-w-xl">
            From initial application to your first live product in less than a month.
          </p>
        </div>

        {/* 4 Linear Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col justify-between space-y-8"
            >
              <div className="text-xs font-mono text-zinc-500 tracking-wider">
                STEP {item.step}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-sans">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Container */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-900/80">
          <div>
            <div className="text-base font-medium text-white">
              Ready to launch your first product?
            </div>
            <div className="text-xs text-zinc-400 font-mono mt-1">
              Currently accepting 3 founders for the initial pilot batch.
            </div>
          </div>

          <MagneticButton
            onClick={onOpenApply}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 active:scale-95 rounded-full shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Apply for the 3-Founder Pilot</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};
