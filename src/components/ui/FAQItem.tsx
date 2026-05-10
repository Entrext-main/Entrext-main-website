"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex justify-between items-start text-left group transition-all"
      >
        <div className="flex gap-8 items-start">
          <div className={`mt-2 w-1.5 h-1.5 rounded-full transition-all duration-500 ${isOpen ? 'bg-[#ff4d00] scale-150' : 'bg-white/20 group-hover:bg-white/40'}`} />
          <h4 className={`text-xl md:text-2xl font-sans font-black uppercase transition-all duration-500 leading-tight tracking-tighter ${isOpen ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
            {question}
          </h4>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.2 : 1 }}
          className={`mt-1 transition-colors duration-500 ${isOpen ? 'text-[#ff4d00]' : 'text-white/10 group-hover:text-white/30'}`}
        >
          <Plus size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 pl-10 border-l border-[#ff4d00]/30 ml-[3px]">
              <p className="text-base md:text-lg font-medium text-white/50 italic leading-relaxed max-w-2xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
