"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X as CloseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Replace href values with real division URLs once they're live.
const divisionLinks = [
  { name: "Pro",   href: "/pro",   logo: "/logos/pro.webp" },
  { name: "Labs",  href: "/labs",  logo: "/logos/labs.webp" },
  { name: "Edge",  href: "/edge",  logo: "/logos/edge.webp" },
];

const secondaryLinks = [
  { name: "Products",  href: "/products" },
  { name: "Blog",      href: "/blog" },
  { name: "Apply",     href: "/apply" },
  { name: "Advertise", href: "/advertise" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? "bg-black/80 backdrop-blur-xl py-4 md:py-6 border-b border-white/5" : "bg-transparent py-6 md:py-10"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Entrext home">
          <Image
            src="/logos/entrext.webp"
            alt=""
            width={36}
            height={36}
            priority
            className="w-8 h-8 md:w-9 md:h-9 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="font-sans font-black text-xl md:text-2xl tracking-tighter uppercase italic text-white underline decoration-[#ff4d00] decoration-4 underline-offset-4">Entrext</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md rounded-full pl-2 pr-4 py-1.5 border border-white/5">
          {divisionLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group/link flex items-center gap-2 pl-2 pr-3 py-1 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-300 font-extrabold hover:text-white hover:bg-white/4 transition-all whitespace-nowrap"
            >
              <Image
                src={link.logo}
                alt=""
                width={20}
                height={20}
                className="w-4 h-4 object-contain opacity-80 group-hover/link:opacity-100 transition-opacity"
              />
              {link.name}
            </Link>
          ))}
          <span aria-hidden className="mx-2 h-4 w-px bg-white/10" />
          {secondaryLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-extrabold hover:text-white transition-all whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/apply"
              className="hidden md:block bg-zinc-100 text-black px-6 lg:px-10 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.4em] transition-all hover:bg-[#ff4d00] hover:text-white"
            >
              Partner Up
            </Link>
          </motion.div>
          
          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-b border-white/5 overflow-hidden"
          >
            <div className="px-12 py-10 flex flex-col gap-5">
              {divisionLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-2xl font-black uppercase tracking-tighter text-white/60 hover:text-brand-orange transition-colors"
                >
                  <Image
                    src={link.logo}
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                  {link.name}
                </Link>
              ))}
              <span aria-hidden className="my-1 h-px w-12 bg-white/10" />
              {secondaryLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black uppercase tracking-tighter text-white/60 hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-[#ff4d00] text-white py-4 rounded-md text-center font-black uppercase tracking-widest text-xs"
              >
                Partner Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
