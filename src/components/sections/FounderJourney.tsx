"use client";

import React from "react";
import { motion } from "motion/react";
import { Rocket, Settings, GraduationCap, ArrowRight, Check } from "lucide-react";

type Stage = {
  id: string;
  icon: React.ElementType;
  range: string;
  title: string;
  tagline: string;
  desc: string;
  steps: string[];
  graduationLabel: string;
  graduationTarget: string;
  color: string;
  glow: string;
};

const STAGES: Stage[] = [
  {
    id: "LABS",
    icon: Rocket,
    range: "0 → 1",
    title: "Entrext Labs",
    tagline: "Where ideas become an opportunity.",
    desc: "We start with a founder and a strong thesis, then work together to prove there is real demand.",
    steps: [
      "Join as a Solo Primary Founder",
      "Identify your core strength: Tech or Growth",
      "Build and test the first version",
      "Talk to real customers",
      "Get your first 10 paying customers",
      "Turn early traction into a clear proof of demand",
      "Bring in the right co-founder to complete the founding team",
    ],
    graduationLabel: "Graduation",
    graduationTarget: "$1K MRR for B2C / Services or $5K MRR for B2B SaaS",
    color: "text-[#ff4d00]",
    glow: "shadow-[#ff4d00]/10",
  },
  {
    id: "PRO",
    icon: Settings,
    range: "1 → 10",
    title: "Entrext Pro",
    tagline: "Where the opportunity starts becoming a real product.",
    desc: "Once demand is proven, we help the founding team build the company around it.",
    steps: [
      "Build the product",
      "Scale sales & distribution",
      "Refine the business model",
      "Set up the legal company",
      "Spin off from Entrext",
      "Build the first team",
      "Establish systems & processes",
      "Bootstrap or raise funding when the time is right",
    ],
    graduationLabel: "Graduation",
    graduationTarget: "$10K MRR",
    color: "text-blue-400",
    glow: "shadow-blue-500/10",
  },
  {
    id: "GRAD",
    icon: GraduationCap,
    range: "10 → 100",
    title: "Founder's Graduation",
    tagline: "Where Partners earn the Founder title and start building the company.",
    desc: "This is where you graduate from being an Entrext Partner to becoming a Founder of an independent company.",
    steps: [
      "Take full operational control",
      "Lead the company independently",
      "Establish the Board",
      "Complete the transition from Entrext",
      "Build your own team and infrastructure",
      "Entrext steps away from day-to-day operations",
      "Entrext remains a shareholder and long-term partner",
      "Raise institutional capital independently if you choose",
    ],
    graduationLabel: "You earn the title",
    graduationTarget: "FOUNDER · $10K → $100K+ MRR",
    color: "text-emerald-400",
    glow: "shadow-emerald-500/10",
  },
];

export const FounderJourney = () => {
  return (
    <section id="journey" className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-[9px] md:text-[10px] text-[#ff4d00] uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-6 block font-black">
              The Founder Journey
            </span>
            <h2 className="text-5xl md:text-8xl font-sans font-black uppercase tracking-tighter text-white leading-none mb-6 md:mb-8">
              Zero to <span className="text-white/20">Founder.</span>
            </h2>
            <p className="text-base md:text-lg font-medium text-white/40 italic">
              Every product moves through three stages. Every stage has a clear graduation line.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col group hover:bg-zinc-900 transition-all duration-500 ${stage.glow}`}
              >
                <div className="flex justify-between items-start mb-8 md:mb-10">
                  <div className={`p-3 bg-white/5 rounded-2xl ${stage.color}`}>
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-lg md:text-xl font-black text-white/30 tracking-tighter">
                    {stage.range}
                  </span>
                </div>

                <div className="mb-6 md:mb-8">
                  <h3 className={`text-2xl md:text-3xl font-sans font-black uppercase tracking-tighter text-white mb-2 group-hover:${stage.color} transition-colors`}>
                    {stage.title}
                  </h3>
                  <div className={`text-[9px] md:text-[10px] font-mono font-black ${stage.color} uppercase tracking-widest mb-4 md:mb-5`}>
                    {stage.tagline}
                  </div>
                  <p className="text-[12px] md:text-[13px] font-medium text-white/50 leading-relaxed italic">
                    {stage.desc}
                  </p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {stage.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[12px] md:text-[13px] text-white/60 leading-snug">
                      <Check size={13} className={`shrink-0 mt-0.5 ${stage.color}`} />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-white/10">
                  <span className="text-[8px] md:text-[9px] font-mono font-black text-white/30 uppercase tracking-widest block mb-2">
                    {stage.graduationLabel}
                  </span>
                  <span className={`text-sm md:text-base font-sans font-black uppercase ${stage.color}`}>
                    {stage.graduationTarget}
                  </span>
                </div>

                {i < STAGES.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black border border-white/10 items-center justify-center text-white/40">
                    <ArrowRight size={14} />
                  </div>
                )}

                <div className="absolute bottom-4 right-8 text-7xl md:text-[100px] font-sans font-black text-white/[0.02] select-none pointer-events-none">
                  {i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
