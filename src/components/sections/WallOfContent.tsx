"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WALL_ITEMS, WALL_STATS, WallSource } from "@/src/constants/wall";

const INITIAL_COUNT = 9;

const SOURCE_LABEL: Record<WallSource, string> = {
  x: "Posted on X",
  linkedin: "Posted on LinkedIn",
  dm: "Direct message",
};

const SourceIcon = ({ source }: { source: WallSource }) => {
  if (source === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3" aria-hidden="true">
        <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
      </svg>
    );
  }
  if (source === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    );
  }
  return <MessageCircle className="size-3" strokeWidth={2} aria-hidden="true" />;
};

interface WallOfContentProps {
  /** Render every post (the /wall-of-content page). Otherwise a preview with a link to that page. */
  full?: boolean;
}

export const WallOfContent = ({ full = false }: WallOfContentProps) => {
  const reduceMotion = useReducedMotion();
  // Preview mode only mounts the first batch, so the rest never download from the home page.
  const items = full ? WALL_ITEMS : WALL_ITEMS.slice(0, INITIAL_COUNT);
  const rise = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 };
  const Heading = full ? "h1" : "h2";

  return (
    <section id="wall" aria-labelledby="wall-heading" className="relative mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-16 md:px-6 md:py-24">
      <motion.div
        initial={rise}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Heading id="wall-heading" className="font-display text-[34px] leading-[1.08] md:text-[48px]">Wall of Content</Heading>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-zinc-400 md:text-[18px]">
          Real posts and messages from founders, builders and operators in the Entrext community.
        </p>
      </motion.div>

      <motion.div
        initial={rise}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mt-12 md:mt-14"
      >
        <div className="grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
          {WALL_STATS.map((stat) => (
            <div key={stat.label} className="px-3 py-6 text-center md:py-8">
              <div className="font-display text-[28px] leading-none tracking-[-0.04em] md:text-[44px]">{stat.value}</div>
              <div className="mt-2 text-[13px] font-semibold text-white md:text-[15px]">{stat.label}</div>
              <div className="mt-1 text-balance text-[12px] text-zinc-400 md:text-[13.5px]">{stat.description}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="relative mt-14 md:mt-16">
        <ul className="columns-1 gap-8 sm:columns-2 lg:columns-3" id="wall-list">
          {items.map((item, i) => (
            <motion.li
              key={item.src}
              initial={rise}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="mb-10 list-none break-inside-avoid"
            >
              <figure className="group">
                <figcaption>
                  <div className="flex items-center gap-2 whitespace-nowrap text-[12.5px] text-zinc-400">
                    <span className="grid size-6 place-items-center rounded-full bg-white/10 text-white/80">
                      <SourceIcon source={item.source} />
                    </span>
                    {SOURCE_LABEL[item.source]}
                    <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#ff4d00]/10 px-2 py-0.5 text-[11.5px] font-semibold text-[#ff4d00]">
                      <span className="size-1.5 rounded-full bg-[#ff4d00]" />
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-balance font-display text-[22px] leading-[1.15] tracking-[-0.03em]">
                    &ldquo;{item.headline}&rdquo;
                  </p>
                </figcaption>
                <div className="mt-4 overflow-hidden rounded-[14px] ring-1 ring-white/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                    loading="lazy"
                    decoding="async"
                    quality={70}
                    className="h-auto w-full bg-white/5"
                  />
                </div>
              </figure>
            </motion.li>
          ))}
        </ul>

        {!full && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
        )}
      </div>

      {!full && (
        <div className="relative mt-2 flex justify-center">
          <Link
            href="/wall-of-content"
            className="rounded-full border border-white/15 px-8 py-3 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-colors hover:border-[#ff4d00] hover:text-[#ff4d00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Show all {WALL_ITEMS.length} posts
          </Link>
        </div>
      )}
    </section>
  );
};
