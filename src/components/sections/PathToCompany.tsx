"use client";

import React from "react";
import { motion } from "motion/react";

type Step = {
  id: string;
  title: string;
  desc: string;
};

type Path = {
  letter: string;
  title: string;
  subtitle: string;
  steps: Step[];
};

const PATHS: Path[] = [
  {
    letter: "A",
    title: "Path A — Primary Partner",
    subtitle: "You bring the hypothesis. We help you prove it.",
    steps: [
      {
        id: "01",
        title: "Bring Your Hypothesis",
        desc: "Bring a problem, friction, or opportunity you believe is worth solving. You can also pick from our Hypothesis Bank and refine it with us.",
      },
      {
        id: "02",
        title: "Build the MVP",
        desc: "We help you build a lean MVP and provide the tech infrastructure needed to test it with 100–1,000 real users.",
      },
      {
        id: "03",
        title: "Prove Demand",
        desc: "Pass the validation checkpoint: 20–30+ paying customers, clear user patterns, retention/referrals, scalability potential, and competitive understanding.",
      },
      {
        id: "04",
        title: "Meet Your Secondary Partner",
        desc: "Once validated, we match you with an opposite founder — Tech × Growth — who complements your strengths and believes in the opportunity.",
      },
      {
        id: "05",
        title: "Scale Together",
        desc: "Build, evolve, and scale the company together. We stay involved as you grow.",
      },
    ],
  },
  {
    letter: "B",
    title: "Path B — Secondary Partner",
    subtitle: "You join what is already being proven.",
    steps: [
      {
        id: "01",
        title: "Apply With Your Skill",
        desc: "Apply as a Tech or Growth founder without needing your own product or idea.",
      },
      {
        id: "02",
        title: "Get Matched",
        desc: "We match you with a validated product based on your skills, interests, and working style.",
      },
      {
        id: "03",
        title: "Join With Context",
        desc: "Enter a product with paying users, proven demand, and an existing Primary Partner.",
      },
      {
        id: "04",
        title: "Own Your Function",
        desc: "Own your Tech or Growth function with 20% fixed equity + 5% performance-based equity, up to 25%.",
      },
      {
        id: "05",
        title: "Build Together",
        desc: "Scale the product, evolve the company, and own what you build.",
      },
    ],
  },
];

export const PathToCompany = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F5C518] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-[9px] md:text-[10px] text-black/70 uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-6 block font-black">
            From Idea to Company
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black uppercase tracking-tighter text-brand-orange leading-[0.95]">
            One Ecosystem.
            <br />
            Two Stages.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {PATHS.map((path, pathIndex) => (
            <div key={path.letter}>
              <div className="flex items-center gap-4 mb-10 md:mb-14">
                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 bg-black text-[#F5C518] flex items-center justify-center font-sans font-black text-2xl md:text-3xl">
                  {path.letter}
                </div>
                <div>
                  <h3 className="font-sans font-black uppercase italic text-xl md:text-2xl text-black tracking-tight leading-none mb-1.5">
                    {path.title}
                  </h3>
                  <p className="font-mono text-[9px] md:text-[10px] text-black/60 uppercase tracking-[0.25em] font-bold">
                    {path.subtitle}
                  </p>
                </div>
              </div>

              <ol className="relative">
                <span
                  aria-hidden
                  className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px bg-black/20"
                />
                {path.steps.map((step, i) => (
                  <motion.li
                    key={step.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: pathIndex * 0.1 + i * 0.06 }}
                    className="relative flex gap-5 md:gap-6 pb-10 md:pb-12 last:pb-0"
                  >
                    <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white border-2 border-black flex items-center justify-center font-mono font-black text-xs md:text-sm text-black">
                      {step.id}
                    </div>
                    <div className="pt-1 md:pt-1.5">
                      <h4 className="font-sans font-black uppercase italic text-base md:text-lg text-black tracking-tight mb-1.5 md:mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm md:text-base text-black/70 font-medium leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
