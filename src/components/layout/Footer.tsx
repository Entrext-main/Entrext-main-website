/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';

export const Footer = () => (
  <footer className="py-20 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="w-8 h-8 bg-white flex items-center justify-center transition-colors group-hover:bg-brand-orange">
              <span className="text-black font-bold text-xl">X</span>
            </div>
            <span className="font-sans font-bold text-xl tracking-tighter uppercase text-white">Entrext</span>
          </Link>
          <p className="text-neutral-500 max-w-xs text-sm leading-relaxed mb-8">
            The world&apos;s first technology-owned founder ecosystem. High velocity, high trust, deep ownership.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:hello@entrext.com"
              className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 hover:text-brand-orange focus-visible:text-brand-orange focus-visible:outline-none focus-visible:underline transition-colors"
            >
              hello@entrext.com
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-mono text-xs uppercase font-bold mb-8 text-neutral-500">Engine //</h5>
          <ul className="space-y-4 text-sm">
            <li><Link href="/pro" className="text-neutral-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline transition-colors">Entrext Pro</Link></li>
            <li><Link href="/labs" className="text-neutral-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline transition-colors">Entrext Labs</Link></li>
            <li><Link href="/edge" className="text-neutral-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline transition-colors">Edge Foundation</Link></li>
            <li><Link href="/products" className="text-neutral-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline transition-colors">Products</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-mono text-xs uppercase font-bold mb-8 text-neutral-500">Contact //</h5>
          <ul className="space-y-4 text-sm">
            <li><Link href="/apply#primary" className="text-neutral-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline transition-colors">Apply as Partner</Link></li>
            <li><Link href="/ecosystem" className="text-neutral-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline transition-colors">Ecosystem</Link></li>
            <li><Link href="/#faq" className="text-neutral-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline transition-colors">FAQ</Link></li>
            <li><Link href="/blog" className="text-neutral-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline transition-colors">Blog</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
        <div className="text-[9px] md:text-[10px] font-mono uppercase text-neutral-600 text-center md:text-left">
          Everything demands greater execution.
        </div>
        <div className="text-[9px] md:text-[10px] font-mono uppercase text-neutral-600 text-center md:text-right">
          © {new Date().getUTCFullYear()} Entrext. Built by founders who own what they build.
        </div>
      </div>
    </div>
  </footer>
);
