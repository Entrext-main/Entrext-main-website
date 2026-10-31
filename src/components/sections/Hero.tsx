"use client";

import React from 'react';
import { motion } from 'motion/react';
import { EcosystemTriangle } from '../ui/EcosystemTriangle';
import Link from 'next/link';
import { ArrowFillButton } from '../ui/ArrowFillButton';

const NOT_LIST = ["Not an accelerator", "Not an incubator", "Not a VC"];

export const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden flex flex-col items-center">
      <div className="max-w-350 w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[8px] md:text-[10px] font-mono text-brand-orange mb-8 md:mb-10 uppercase tracking-[0.4em] md:tracking-[0.6em] font-black flex items-center justify-center gap-2 md:gap-4 px-4"
        >
          <span className="hidden sm:block w-2 md:w-4 h-px bg-brand-orange" />
          <span className="text-center">Build. Own. Compound.</span>
          <span className="hidden sm:block w-2 md:w-4 h-px bg-brand-orange" />
        </motion.div>

        {/* Phones break the headline into four short lines; wider screens run two. */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto text-balance text-4xl sm:text-5xl md:text-[54px] lg:text-7xl xl:text-[96px] font-sans font-black leading-[0.95] tracking-[-0.02em] uppercase"
        >
          You&apos;ve lived
          <br className="sm:hidden" />{" "}
          the{" "}
          <span className="orange-gradient-text font-display italic font-normal normal-case tracking-[-0.01em] pr-[0.1em]">
            Problem.
          </span>
          <br />
          Now build
          <br className="sm:hidden" />{" "}
          the{" "}
          <span className="font-display italic font-normal normal-case tracking-[-0.01em] text-brand-orange">
            Company.
          </span>
        </motion.h1>

        <div aria-hidden className="mx-auto mt-10 md:mt-14 mb-8 md:mb-10 h-px w-28 md:w-48 bg-linear-to-r from-transparent via-white/30 to-transparent" />

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-10 mb-8 md:mb-10 font-sans font-extrabold uppercase tracking-[0.16em] text-sm sm:text-base md:text-lg lg:text-xl text-zinc-500"
        >
          {NOT_LIST.map((line) => (
            <li key={line}>
              <s className="decoration-zinc-400/80 decoration-1 md:decoration-2">{line}</s>.
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <p className="font-sans font-black uppercase leading-none tracking-tight text-[34px] sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">We&apos;re a</span>
            <span className="block text-brand-orange">Venture Builder.</span>
          </p>
          <p className="mt-2 md:mt-4 font-sans font-light text-sm md:text-2xl text-zinc-300 tracking-wide">
            A new way to work, build and own.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 md:mt-14 flex justify-center"
        >
          <ArrowFillButton href="/mission">Our Mission</ArrowFillButton>
        </motion.div>
      </div>

      {/* Phones/tablets stack graphic then copy; laptops put the copy on the left and the graphic on the right. */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center mt-12 md:mt-10 lg:mt-0 lg:justify-end lg:order-2"
      >
        <EcosystemTriangle />
      </motion.div>

      <div className="w-full max-w-3xl mx-auto lg:mx-0 mt-14 md:mt-24 lg:mt-0 text-zinc-500 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
            The venture studio where industry operators and tech builders pair up, validate products, and co-own the companies they build.
          </h2>
          <p className="text-sm md:text-lg leading-relaxed uppercase tracking-tight font-bold opacity-80 mb-6 md:mb-8">
            Nobody gets hired here. Operators who know the problem and builders who can solve it launch, validate, and scale niche digital products together.
          </p>
          <p className="font-display italic text-xl md:text-2xl text-white leading-snug tracking-tight border-l-2 border-brand-orange pl-4 md:pl-5 mb-10 md:mb-12">
            Walk in with experience. Walk out with equity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full"
        >
          <Link href="/apply" className="w-full sm:w-auto bg-brand-orange text-white px-8 md:px-10 py-4 rounded-full font-extrabold text-sm md:text-base shadow-[0_20px_50px_rgba(255,77,0,0.2)] hover:shadow-[0_25px_60px_rgba(255,77,0,0.3)] transition-all hover:-translate-y-1 text-center">
            Apply as an Operator
          </Link>
          <Link href="/apply" className="w-full sm:w-auto border border-brand-orange hover:bg-brand-orange/10 px-8 md:px-10 py-4 rounded-full font-extrabold text-sm md:text-base text-white transition-all text-center">
            Apply as a Builder
          </Link>
        </motion.div>
      </div>
      </div>
    </section>
  );
};
