"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { NON_TECH_SOLO_FAQS } from './mockData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#000000] text-white py-32 px-6 border-b border-zinc-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
            Complete Clarity
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-400 font-sans">
            Honest answers about scope, pricing, expectations, and ownership.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {NON_TECH_SOLO_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.25) }}
                className="border border-zinc-900 rounded-2xl overflow-hidden bg-zinc-950/60 transition-colors hover:border-zinc-800"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-zinc-500 pt-1 shrink-0">
                      {faq.id < 10 ? `0${faq.id}` : faq.id}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-white font-sans leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="pt-1 shrink-0"
                  >
                    <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-zinc-500'}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-zinc-300 leading-relaxed font-sans border-t border-zinc-900 pt-4 space-y-3">
                        {Array.isArray(faq.answer) ? (
                          faq.answer.map((para, pIdx) => (
                            <p key={pIdx} className="leading-relaxed">
                              {para}
                            </p>
                          ))
                        ) : (
                          <p className="leading-relaxed">{faq.answer}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
