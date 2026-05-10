/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export interface SitelinkItem {
  label: string;
  description: string;
  /** Required unless `disabled`. May be an internal route, anchor (#id), or absolute URL. */
  href?: string;
  /** Renders as a non-interactive row. Used for "Coming soon" entries. */
  disabled?: boolean;
  /** Marks the row as an external link — opens in a new tab with rel=noopener. */
  external?: boolean;
}

interface SitelinksListProps {
  items: SitelinkItem[];
  /** Optional eyebrow above the list (e.g. "Site Sections // 04"). */
  eyebrow?: string;
}

const RowContent = ({ item }: { item: SitelinkItem }) => (
  <>
    <div className="flex-1 min-w-0">
      <div className="font-display text-2xl md:text-3xl tracking-tight text-[#ff4d00] group-hover:text-white group-focus-visible:text-white transition-colors leading-snug">
        {item.label}
      </div>
      <div className="mt-2 text-sm md:text-base text-zinc-400 group-hover:text-white/70 transition-colors leading-relaxed">
        {item.description}
      </div>
    </div>
    <ChevronRight
      size={20}
      className="ml-4 md:ml-8 shrink-0 text-zinc-600 group-hover:text-[#ff4d00] group-hover:translate-x-2 group-focus-visible:text-[#ff4d00] transition-all duration-300"
      aria-hidden
    />
  </>
);

const rowClasses =
  "group flex items-center justify-between gap-4 py-7 md:py-9 px-2 md:px-4 outline-none transition-colors";

export const SitelinksList: React.FC<SitelinksListProps> = ({ items, eyebrow }) => {
  return (
    <div className="border-t border-white/5">
      {eyebrow && (
        <div className="pt-10 md:pt-14 px-2 md:px-4">
          <span className="font-mono text-[9px] md:text-[10px] text-[#ff4d00]/60 uppercase tracking-[0.5em] font-black">
            {eyebrow}
          </span>
        </div>
      )}

      <ul className="divide-y divide-white/5">
        {items.map((item, i) => {
          const isExternal = item.external && item.href?.startsWith("http");
          const isAnchor = item.href?.startsWith("#");

          if (item.disabled || !item.href) {
            return (
              <li key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`${rowClasses} cursor-default opacity-50`}
                  aria-disabled
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-2xl md:text-3xl tracking-tight text-zinc-500 leading-snug">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm md:text-base text-zinc-600 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                  <span className="ml-4 md:ml-8 shrink-0 font-mono text-[9px] uppercase tracking-widest text-zinc-700">
                    Coming Soon
                  </span>
                </motion.div>
              </li>
            );
          }

          const sharedRowProps = {
            className: `${rowClasses} hover:bg-white/[0.02] focus-visible:bg-white/[0.04] focus-visible:ring-1 focus-visible:ring-[#ff4d00]/40 rounded-sm`,
          };

          return (
            <li key={i}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...sharedRowProps}
                  >
                    <RowContent item={item} />
                  </a>
                ) : isAnchor ? (
                  <a href={item.href} {...sharedRowProps}>
                    <RowContent item={item} />
                  </a>
                ) : (
                  <Link href={item.href!} {...sharedRowProps}>
                    <RowContent item={item} />
                  </Link>
                )}
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
