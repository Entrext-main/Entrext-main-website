"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NeuralBrain } from './NeuralBrain';
import { InteractiveFlower } from './InteractiveFlower';
import { ArrowRight, Sparkles, Terminal, Rocket, Megaphone, Repeat2 } from 'lucide-react';

interface InteractiveFeatureSectionProps {
  onOpenApply: () => void;
}

export const InteractiveFeatureSection: React.FC<InteractiveFeatureSectionProps> = ({ onOpenApply }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Find your niche',
      subtitle: 'Identify underserved problems and opportunities worth exploring. You don\'t need to arrive with the perfect idea.',
      highlight: 'AI Niche Radar & Unmet Demand',
      metric: 'Day 1–3',
      visualType: 'brain',
    },
    {
      num: '02',
      title: 'Build and launch',
      subtitle: 'Turn one problem into a focused, one-feature digital product. Use Entrext\'s launch playbooks and infrastructure to get it into customers\' hands.',
      highlight: '14-Day Production Sprint',
      metric: 'Day 4–14',
      visualType: 'code',
    },
    {
      num: '03',
      title: 'Build your name',
      subtitle: 'Document your journey, share what you learn, and build a personal brand that helps you distribute your products.',
      highlight: 'Owned Distribution Engine',
      metric: 'Ongoing',
      visualType: 'flower',
    },
    {
      num: '04',
      title: 'Repeat and compound',
      subtitle: 'Learn from every launch. Scale what works, move on from what doesn\'t, and build your own portfolio of digital products.',
      highlight: 'Compounding Micro-Portfolio',
      metric: 'Infinite Horizon',
      visualType: 'portfolio',
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="system" className="relative bg-[#071912] text-neutral-100 py-28 border-b border-emerald-950/80 overflow-hidden">
      
      {/* Background subtle ambient warmth */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Minimalist Kicker & Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-emerald-900/40">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#f3cb42] mb-3">
              The Entrext Solo Founder System
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white leading-tight">
              Four steps. Infinite leverage.
            </h2>
          </div>

          <div className="text-xs font-mono text-emerald-400/80">
            [ 0{activeStep + 1} / 04 ] · SPRINT_CYCLE
          </div>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              {steps.map((s, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={s.num}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-[#103527] border-[#f3cb42] shadow-lg -translate-x-1'
                        : 'bg-[#0b241b]/60 border-emerald-900/40 hover:bg-[#0f2e22] text-neutral-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono mb-1">
                        <span className={isActive ? 'text-[#f3cb42] font-bold' : 'text-neutral-500'}>
                          {s.num}
                        </span>
                        <span className="text-neutral-600">/</span>
                        <span className={isActive ? 'text-emerald-300' : 'text-neutral-500'}>
                          {s.metric}
                        </span>
                      </div>
                      <div className={`text-lg sm:text-xl font-serif font-bold ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                        {s.title}
                      </div>
                    </div>

                    <div className={`w-2 h-2 rounded-full transition-all ${isActive ? 'bg-[#f3cb42] scale-125' : 'bg-transparent'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenApply}
                className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-[#f3cb42] hover:bg-[#e5be37] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Apply to start this cycle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Stage Showcase */}
          <div className="lg:col-span-7 bg-[#0b241b] rounded-2xl border border-emerald-800/50 p-8 flex flex-col justify-between min-h-[440px] relative overflow-hidden shadow-2xl">
            
            {/* Visual Center Stage */}
            <div className="relative w-full h-64 mb-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {current.visualType === 'brain' && (
                  <motion.div
                    key="brain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <NeuralBrain
                      nodeColor="#e8eed5"
                      lineColor="rgba(243, 203, 66, 0.25)"
                      pulseColor="#f3cb42"
                      nodeCount={55}
                    />
                    <div className="absolute bottom-2 left-2 text-[10px] font-mono text-emerald-400/80 bg-black/60 px-2.5 py-1 rounded border border-emerald-800/40">
                      NEURAL_NICHE_MAPPING · ACTIVE
                    </div>
                  </motion.div>
                )}

                {current.visualType === 'code' && (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col justify-center max-w-md mx-auto"
                  >
                    <div className="bg-[#06140e] border border-emerald-700/60 rounded-xl p-5 shadow-2xl font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-900/60 text-neutral-500">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                          <span className="text-neutral-400 ml-2">entrext-v1.ts</span>
                        </div>
                        <span className="text-[#f3cb42]">SHIP_DAY_14</span>
                      </div>
                      <div className="space-y-1.5 text-neutral-300">
                        <p><span className="text-emerald-400">const</span> product = <span className="text-[#f3cb42]">createSoloProduct</span>({'{'}</p>
                        <p className="pl-4">feature: <span className="text-emerald-300">"Single Painful Workflow"</span>,</p>
                        <p className="pl-4">pricing: <span className="text-emerald-300">"Stripe Self-Serve"</span>,</p>
                        <p className="pl-4">founderOwnership: <span className="text-[#f3cb42]">0.75</span>,</p>
                        <p className="pl-4">cofounderFriction: <span className="text-rose-400">0</span></p>
                        <p>{'}'});</p>
                        <p className="text-neutral-500 pt-2">// Launched to 4,200 waitlist customers</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {current.visualType === 'flower' && (
                  <motion.div
                    key="flower"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <InteractiveFlower
                      petalColor="#f5f7eb"
                      innerGlowColor="#f3cb42"
                      stamenColor="#f3cb42"
                      stemColor="#144633"
                      petalCount={24}
                    />
                    <div className="absolute bottom-2 left-2 text-[10px] font-mono text-emerald-400/80 bg-black/60 px-2.5 py-1 rounded border border-emerald-800/40">
                      ORGANIC_REPUTATION_BLOOM · DRAG TO ROTATE
                    </div>
                  </motion.div>
                )}

                {current.visualType === 'portfolio' && (
                  <motion.div
                    key="portfolio"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                      <div className="bg-[#103527] border border-[#f3cb42]/40 rounded-xl p-4 text-center">
                        <div className="text-2xl font-serif font-black text-[#f3cb42]">04</div>
                        <div className="text-xs text-neutral-300 mt-1">Live Products</div>
                        <div className="text-[10px] text-emerald-400 font-mono mt-0.5">$32k / mo MRR</div>
                      </div>
                      <div className="bg-[#103527] border border-emerald-700/40 rounded-xl p-4 text-center">
                        <div className="text-2xl font-serif font-black text-white">75%</div>
                        <div className="text-xs text-neutral-300 mt-1">You Own</div>
                        <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Zero Dilution</div>
                      </div>
                      <div className="col-span-2 bg-[#06140e] border border-emerald-800/60 rounded-xl p-3 text-center text-xs text-neutral-300 font-mono">
                        COMPOUNDING_RUN_RATE: $384,000 / YR
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Step Description */}
            <div className="border-t border-emerald-900/60 pt-6">
              <div className="text-xs font-mono uppercase tracking-wider text-[#f3cb42] mb-1.5">
                {current.highlight}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                {current.title}
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed font-sans max-w-xl">
                {current.subtitle}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
