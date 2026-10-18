"use client";

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, Video, FileText } from 'lucide-react';
import { FounderApplication } from './types';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<FounderApplication>({
    name: '',
    email: '',
    handle: '',
    platform: 'Instagram',
    distributionStyle: 'camera',
    location: '',
    isNorthAmerica: true,
    audienceDescription: '',
    productIdea: '',
    committedToPost: true,
    acknowledgedTerms: true,
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleDistributionStyleSelect = (style: 'camera' | 'not-camera') => {
    setFormData({
      ...formData,
      distributionStyle: style,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-zinc-950 text-white border border-zinc-800 rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Application Transmitted.
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed font-sans max-w-sm mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. We review every applicant and distribution track personally for the 3-founder pilot.
            </p>

            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-left text-xs space-y-2.5 text-zinc-300 font-mono">
              <div className="text-white font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                Next Steps:
              </div>
              <div>1. We evaluate your distribution channels and product vision (24–48h).</div>
              <div>2. If it’s a fit, we schedule a 20-minute strategy call.</div>
              <div>3. Simple agreement ($1,500/mo, 3-mo min, 100% you own it).</div>
              <div>4. We start building; product launches in 2–3 weeks.</div>
            </div>

            <button
              onClick={resetAndClose}
              className="mt-4 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 rounded-full transition-colors cursor-pointer shadow-lg"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            
            {/* Header */}
            <div className="mb-6 border-b border-zinc-800/80 pb-4 pr-8">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                SOLO NON-TECH FOUNDERS PROGRAM
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Apply for the 3-Founder Pilot
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Step {step} of 3 · $1,500/mo · 100% You Own It
              </p>
            </div>

            {/* Step 1: Basic Identity & Channels */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Vance"
                    className="w-full px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Primary Platform *
                    </label>
                    <select
                      name="platform"
                      value={formData.platform}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="Instagram">Instagram</option>
                      <option value="TikTok">TikTok</option>
                      <option value="Reddit">Reddit</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="X / Twitter">X / Twitter</option>
                      <option value="YouTube Shorts">YouTube Shorts</option>
                      <option value="Threads">Threads</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Handle or Profile Link *
                    </label>
                    <input
                      type="text"
                      required
                      name="handle"
                      value={formData.handle}
                      onChange={handleChange}
                      placeholder="@handle or profile link"
                      className="w-full px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Location (North America for now) *
                  </label>
                  <input
                    type="text"
                    required
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State / Province (e.g. Austin, TX)"
                    className="w-full px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.name || !formData.email || !formData.handle || !formData.location) {
                        alert('Please fill out all required fields.');
                        return;
                      }
                      setStep(2);
                    }}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Next: Distribution & Idea</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Distribution Preference & Product Idea */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Pick what you are good at (Distribution Track) *
                  </label>

                  <div className="grid grid-cols-1 gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleDistributionStyleSelect('camera')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                        formData.distributionStyle === 'camera'
                          ? 'bg-zinc-900 border-white text-white'
                          : 'bg-black border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-white">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                          <span>Comfortable with Camera (Consumer SaaS)</span>
                          <span className="text-[10px] text-emerald-400 font-mono">Faster results</span>
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-0.5">
                          Instagram, TikTok, LinkedIn, YouTube Shorts
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDistributionStyleSelect('not-camera')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                        formData.distributionStyle === 'not-camera'
                          ? 'bg-zinc-900 border-white text-white'
                          : 'bg-black border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-white">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          Comfortable Not on Camera (Text & Communities)
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-0.5">
                          Early distribution (Reddit), personal branding with text (X, LinkedIn, Carousels, Threads)
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Tell us about your distribution channels or experience *
                  </label>
                  <textarea
                    required
                    rows={3}
                    name="audienceDescription"
                    value={formData.audienceDescription}
                    onChange={handleChange}
                    placeholder="What channels do you focus on? What formats or topics do you like creating?"
                    className="w-full px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    What idea or problem do you want to build? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    name="productIdea"
                    value={formData.productIdea}
                    onChange={handleChange}
                    placeholder="Describe the product or micro-tool you envision (or if you need help finding one)..."
                    className="w-full px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.audienceDescription || !formData.productIdea) {
                        alert('Please share details about your distribution experience and product idea.');
                        return;
                      }
                      setStep(3);
                    }}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Next: Terms & Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Terms & Agreement Confirmation */}
            {step === 3 && (
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-mono space-y-2 text-zinc-300">
                  <div className="text-white font-bold uppercase tracking-wider">
                    Pilot Parameters:
                  </div>
                  <div>• Pricing: $1,500 / month (3-month minimum).</div>
                  <div>• Equity: 0% taken by Entrext.</div>
                  <div>• Ownership: 100% yours (code, domain, accounts, data).</div>
                  <div>• Velocity: First product launches in 2–3 weeks.</div>
                  <div>• Scope: We build & maintain; you distribute consistently.</div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-zinc-300 font-sans">
                    <input
                      type="checkbox"
                      name="committedToPost"
                      checked={formData.committedToPost}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-zinc-700 bg-black text-white focus:ring-0"
                    />
                    <span>
                      I am committed to distributing consistently on my chosen channels and talking directly to users.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer text-xs text-zinc-300 font-sans">
                    <input
                      type="checkbox"
                      name="acknowledgedTerms"
                      checked={formData.acknowledgedTerms}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-zinc-700 bg-black text-white focus:ring-0"
                    />
                    <span>
                      I understand that Entrext builds and maintains the software, while user acquisition and distribution depend on me.
                    </span>
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.committedToPost || !formData.acknowledgedTerms}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

          </form>
        )}

      </div>
    </div>
  );
};
