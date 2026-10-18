"use client";

import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { ENTREXT_PORTFOLIO_PRODUCTS, EXTERNAL_EXAMPLES } from './mockData';

export const ExamplesSection: React.FC = () => {
  return (
    <section id="examples" className="bg-[#000000] text-white py-32 px-6 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
            Real Proof
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            EXAMPLES
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-normal mt-4 max-w-xl">
            Small products built on audience. Micro-utilities that solve one sharp problem and acquire users directly.
          </p>
        </div>

        {/* Featured Showcase: Built by Entrext + External Reference Apps */}
        <div className="space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Featured Micro-Products
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Built by Entrext: secretroom */}
            <a
              href="https://secretroom.entrext.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-white font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                    Built by Entrext
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-base font-mono font-bold text-white group-hover:underline mb-2">
                  secretroom.entrext.in
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-3">
                  Our own micro-product.
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-white" />
                <span>300–400 daily rooms creation</span>
              </div>
            </a>

            {/* External Examples */}
            {EXTERNAL_EXAMPLES.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="text-zinc-500">{item.highlight}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-base font-mono font-bold text-white group-hover:underline mb-2">
                    {item.name}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {item.tagline}
                  </p>
                </div>
              </a>
            ))}

          </div>
        </div>

        {/* Products Made By Entrext (Simple, clean, minimalist directory) */}
        <div className="space-y-6 pt-12 border-t border-zinc-900">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Why You Should Do This
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Products Made by Entrext
            </h3>
            <p className="text-sm text-zinc-400 font-sans">
              Simple micro-products and tools built across the ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ENTREXT_PORTFOLIO_PRODUCTS.map((prod, idx) => (
              <a
                key={idx}
                href={prod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all group flex items-center justify-between gap-3"
              >
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-sm font-medium text-white group-hover:text-zinc-200 truncate">
                    {prod.name}
                  </span>
                  {prod.highlight && (
                    <span className="text-[11px] font-mono text-zinc-400 mt-1">
                      ({prod.highlight})
                    </span>
                  )}
                </div>

                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
