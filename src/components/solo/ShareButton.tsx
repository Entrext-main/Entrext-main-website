"use client";

import React, { useState } from 'react';
import { Share2, Check, Copy, Twitter, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShareButtonProps {
  label?: string;
  variant?: 'pill' | 'subtle' | 'outline' | 'minimal';
  className?: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  label = 'Share',
  variant = 'outline',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://entrext.in';
  const shareTitle = 'Entrext Solo Founders — 75% Ownership & Distribution-First System';
  const shareText =
    'Traditional pattern of creating a company is dead. One person can create thousands of products with distribution first. Doing a pilot with 3 founders:';

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // User dismissed or share failed, fallback to modal/clipboard
      }
    }
    setShowModal(true);
  };

  const copyToClipboard = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const shareToLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'pill':
        return 'px-4 py-2 text-xs font-mono uppercase tracking-wider text-black bg-white hover:bg-zinc-200 rounded-full border border-white';
      case 'outline':
        return 'px-4 py-2 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 rounded-full';
      case 'subtle':
        return 'px-3 py-1.5 text-xs font-mono text-zinc-400 hover:text-white bg-transparent hover:bg-zinc-900/60 rounded-md';
      case 'minimal':
        return 'text-xs font-mono text-zinc-400 hover:text-white inline-flex items-center gap-1.5';
      default:
        return 'px-4 py-2 text-xs font-mono text-white bg-zinc-900 rounded-full';
    }
  };

  return (
    <>
      <button
        onClick={handleNativeShare}
        className={`inline-flex items-center justify-center gap-2 transition-all cursor-pointer ${getVariantStyles()} ${className}`}
        aria-label="Share this opportunity"
      >
        <Share2 className="w-3.5 h-3.5" />
        <span>{label}</span>
      </button>

      {/* Share Modal Dialog */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 w-full max-w-sm text-white shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Share Opportunity
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-zinc-500 hover:text-white text-xs font-mono p-1"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-zinc-300 mb-5 leading-relaxed font-sans">
                Doing a pilot with 3 founders first. Spread the word to builders and creators.
              </p>

              <div className="space-y-2 mb-5">
                <button
                  onClick={shareToTwitter}
                  className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-xs font-mono flex items-center justify-center gap-2 text-white border border-zinc-800 transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>Share on X (Twitter)</span>
                </button>

                <button
                  onClick={shareToLinkedIn}
                  className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-xs font-mono flex items-center justify-center gap-2 text-white border border-zinc-800 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Share on LinkedIn</span>
                </button>
              </div>

              {/* Copy URL Strip */}
              <div className="flex items-center gap-2 p-2 bg-black rounded-lg border border-zinc-800">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="bg-transparent text-xs text-zinc-400 font-mono flex-1 outline-none px-2 truncate"
                />
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-1.5 bg-white text-black text-xs font-mono rounded font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-1 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
