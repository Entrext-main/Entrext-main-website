"use client";

import React from "react";
import { motion } from "motion/react";
import { Network, Users, Briefcase } from "lucide-react";

type Pillar = {
  id: string;
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  tagline: string;
  desc: string;
};

const PILLARS: Pillar[] = [
  {
    id: "01",
    icon: Network,
    eyebrow: "Entrepreneur's Next",
    title: "Entrext Ecosystem",
    tagline: "The core studio.",
    desc: "The core Entrext ecosystem for entrepreneurs to discover, build, validate and grow companies — with access to our people, resources, operating systems and venture-building infrastructure.",
  },
  {
    id: "02",
    icon: Users,
    eyebrow: "Match by Entrext",
    title: "Find your people.",
    tagline: "Find opportunities. Find what to build. Find the community.",
    desc: "A platform for finding the right people, discovering Entrext-backed theses and opportunities, accessing our resources and operating systems, and building meaningful partnerships through a structured alignment process.",
  },
  {
    id: "03",
    icon: Briefcase,
    eyebrow: "VSaaS by Entrext",
    title: "Venture Studio as a Service",
    tagline: "Expertise, on demand.",
    desc: "Bring Entrext into your company to validate ideas, discover opportunities, or build new ventures. Get our team for consultation, research, strategy, reporting, and execution — along with MVPs, AI automation, tools, GTM, and customer acquisition when needed. We can also help you find the right co-founders, operators, and technical talent. Use exactly what you need, whenever you need it.",
  },
];

export const OfferingPillars = () => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="font-mono text-[9px] md:text-[10px] text-[#ff4d00] uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-6 block font-black">
            What Entrext Is
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black uppercase tracking-tighter text-white leading-[0.95]">
            Three ways in.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col group hover:bg-zinc-900 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8 md:mb-10">
                  <div className="p-3 bg-white/5 rounded-2xl text-[#ff4d00]">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-lg md:text-xl font-black text-white/30 tracking-tighter">
                    {pillar.id}
                  </span>
                </div>

                <div className="mb-6 md:mb-8">
                  <span className="text-[9px] md:text-[10px] font-mono font-black text-[#ff4d00] uppercase tracking-widest mb-3 md:mb-4 block">
                    {pillar.eyebrow}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-sans font-black uppercase tracking-tighter text-white mb-3 leading-[0.95]">
                    {pillar.title}
                  </h3>
                  <p className="font-display italic text-lg md:text-xl text-white/70 leading-snug">
                    {pillar.tagline}
                  </p>
                </div>

                <p className="text-[12px] md:text-[13px] font-medium text-white/50 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
