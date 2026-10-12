import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArrowFillButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

// Orange pill with a trailing arrow disc. On hover the disc grows to fill the pill
// (the "arrow fill"), the label slides over it and the arrow nudges forward.
export const ArrowFillButton = ({ href, children, className = "" }: ArrowFillButtonProps) => (
  <Link
    href={href}
    className={`group relative inline-flex items-center overflow-hidden rounded-full bg-[#ff4d00] pl-7 pr-2 py-2 text-white shadow-[0_20px_50px_rgba(255,77,0,0.25)] transition-shadow hover:shadow-[0_25px_60px_rgba(255,77,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${className}`}
  >
    <span
      aria-hidden
      className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[14] motion-reduce:transition-none"
    />
    <span className="relative z-10 pr-5 text-[10px] font-black uppercase tracking-[0.35em] transition-colors duration-500 group-hover:text-black">
      {children}
    </span>
    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-[#ff4d00]">
      <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-500 group-hover:translate-x-0.5" />
    </span>
  </Link>
);
