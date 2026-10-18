"use client";

import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Flame, 
  Repeat, 
  Heart, 
  Bookmark, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  TrendingUp,
  Users,
  Eye,
  Send,
  MessageSquareQuote
} from 'lucide-react';

interface ContentItem {
  id: string;
  type: 'x-post' | 'chat-message' | 'traction-stat';
  author: string;
  handle: string;
  role: string;
  avatarText: string;
  avatarBg: string;
  verified?: boolean;
  timestamp: string;
  content: string;
  tag?: string;
  metrics?: {
    impressions?: string;
    reposts?: string;
    likes?: string;
    replies?: string;
  };
  productMention?: {
    name: string;
    url: string;
    stat?: string;
  };
  chatSnippet?: {
    sender: string;
    message: string;
    time: string;
    isEntrextReply?: boolean;
  }[];
}

const WALL_CONTENT: ContentItem[] = [
  {
    id: 'post-1',
    type: 'x-post',
    author: 'Manthan Gupta',
    handle: '@manthanguptaa',
    role: 'Founder · Entrext',
    avatarText: 'MG',
    avatarBg: 'bg-emerald-950 border-emerald-500/30 text-emerald-300',
    verified: true,
    timestamp: '2h ago',
    tag: 'Micro-Product Launch',
    content: 'We built secretroom.entrext.in in 48 hours. Now seeing 300–400 daily rooms created with zero ad spend—pure organic distribution from X. When distribution meets rapid execution, solo founders win.',
    productMention: {
      name: 'secretroom.entrext.in',
      url: 'https://secretroom.entrext.in',
      stat: '300-400 daily rooms created'
    },
    metrics: {
      impressions: '38.4K',
      reposts: '47',
      likes: '312',
      replies: '29'
    }
  },
  {
    id: 'chat-1',
    type: 'chat-message',
    author: 'David K.',
    handle: 'Non-Tech Founder',
    role: 'Solo Founder Program · North America',
    avatarText: 'DK',
    avatarBg: 'bg-blue-950 border-blue-500/30 text-blue-300',
    verified: true,
    timestamp: 'Yesterday',
    tag: 'Founder DM',
    content: 'First paying customer hit my Stripe account while I was sleeping. I still cannot write a line of code, but the product works flawlessly and my X thread brought in 2,400 visitors.',
    chatSnippet: [
      {
        sender: 'David K.',
        message: 'Entrext team, check this out!! First 2 annual memberships just cleared on Stripe 🔥',
        time: '9:42 AM'
      },
      {
        sender: 'Entrext Studio',
        message: 'Congrats David! Analytics show 94% of traffic came through your pinned X thread. We are monitoring the servers now.',
        time: '9:45 AM',
        isEntrextReply: true
      }
    ]
  },
  {
    id: 'post-2',
    type: 'x-post',
    author: 'Alex P.',
    handle: '@alexp_builds',
    role: 'Operator & Solo Creator',
    avatarText: 'AP',
    avatarBg: 'bg-violet-950 border-violet-500/30 text-violet-300',
    verified: true,
    timestamp: '3d ago',
    tag: 'Product Ownership',
    content: 'The biggest unlock of the Entrext Solo Founder program is simple: You own 100% of the code, repo, domain, and Stripe account. If you leave, you take everything with you. No sketchy equity lock-ins.',
    metrics: {
      impressions: '19.8K',
      reposts: '24',
      likes: '189',
      replies: '14'
    }
  },
  {
    id: 'post-3',
    type: 'x-post',
    author: 'Nate Sterling',
    handle: '@natesterling_x',
    role: 'B2B Creator · LinkedIn & X',
    avatarText: 'NS',
    avatarBg: 'bg-amber-950 border-amber-500/30 text-amber-300',
    verified: true,
    timestamp: '4d ago',
    tag: 'Audience First',
    content: 'Launched Monkfeed after testing 3 hooks across channels. Entrext turned the wireframe into a full production app in under 10 days. I focused exclusively on audience building and content.',
    productMention: {
      name: 'monkfeed.com',
      url: 'https://www.monkfeed.com',
      stat: '10K+ visitors week 1'
    },
    metrics: {
      impressions: '27.1K',
      reposts: '39',
      likes: '244',
      replies: '22'
    }
  },
  {
    id: 'chat-2',
    type: 'chat-message',
    author: 'Sarah M.',
    handle: 'Solo Founder',
    role: 'Consumer SaaS Creator',
    avatarText: 'SM',
    avatarBg: 'bg-rose-950 border-rose-500/30 text-rose-300',
    verified: true,
    timestamp: '5d ago',
    tag: 'Live Session & Playbook',
    content: 'The monthly live strategy call on short-form TikTok/IG video hooks saved me months of trial and error. Shipped our companion tool and got 400 signups in 48 hours.',
    chatSnippet: [
      {
        sender: 'Sarah M.',
        message: 'The advice on camera demo hook structure literally 3xed our impression count this week.',
        time: '3:15 PM'
      },
      {
        sender: 'Entrext Studio',
        message: 'Love to see it! Picking the distribution format you excel at is the real growth engine.',
        time: '3:18 PM',
        isEntrextReply: true
      }
    ]
  },
  {
    id: 'post-4',
    type: 'x-post',
    author: 'Marcus Vance',
    handle: '@marcusvance',
    role: 'Solo Builder · Entrext Ecosystem',
    avatarText: 'MV',
    avatarBg: 'bg-cyan-950 border-cyan-500/30 text-cyan-300',
    verified: true,
    timestamp: '1w ago',
    tag: 'Fast Shipping',
    content: 'Traditional agencies take 4 months and charge $25K. With Entrext, non-tech founders get a battle-tested team building, maintaining bugs, and teaching the X distribution playbook for a flat fee.',
    metrics: {
      impressions: '31.2K',
      reposts: '52',
      likes: '348',
      replies: '37'
    }
  }
];

export const WallOfContentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'posts' | 'messages'>('all');

  const filteredContent = WALL_CONTENT.filter(item => {
    if (activeTab === 'posts') return item.type === 'x-post';
    if (activeTab === 'messages') return item.type === 'chat-message';
    return true;
  });

  return (
    <section className="bg-[#050505] border-y border-zinc-900 py-16 px-6 relative overflow-hidden" id="wall-of-content">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-zinc-800/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block matching user brief */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-wider uppercase text-zinc-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Founder Credibility & Proof
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-2">
              Wall of Content
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
              Real posts and messages from founders, builders and operators in the Entrext community.
            </p>
          </div>

          <a
            href="https://www.entrext.com/wall-of-content"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/70 hover:border-zinc-500 text-zinc-200 hover:text-white text-xs font-mono transition-all self-start md:self-auto shrink-0"
          >
            <span>entrext.com/wall-of-content</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 3 Core Stats Cards requested by user */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-b border-zinc-800/80">
          
          {/* Stat 1 */}
          <div className="p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/90 relative overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
                25,000+
              </span>
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                <Users className="w-4 h-4 text-zinc-300" />
              </div>
            </div>
            <div className="text-sm font-medium text-zinc-200">Total followers</div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">Across founders & ecosystem</div>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/90 relative overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
                100,000+
              </span>
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                <Eye className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
            <div className="text-sm font-medium text-zinc-200">Combined impressions</div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">Total impressions across community posts</div>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/90 relative overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
                10+
              </span>
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                <TrendingUp className="w-4 h-4 text-amber-400" />
              </div>
            </div>
            <div className="text-sm font-medium text-zinc-200">Active founders</div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">Builders launching & building in public</div>
          </div>

        </div>

        {/* Content Navigation Filter */}
        <div className="flex items-center justify-between pt-8 pb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              All Signals ({WALL_CONTENT.length})
            </button>
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeTab === 'posts'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Public X Posts
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeTab === 'messages'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Founder DMs & Messages
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Updated live from community</span>
          </div>
        </div>

        {/* Content Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-black/50"
            >
              <div>
                {/* Author row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full border flex items-center justify-center font-mono text-xs font-bold ${item.avatarBg}`}>
                      {item.avatarText}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-white">
                        <span>{item.author}</span>
                        {item.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-500">
                        {item.handle} · {item.timestamp}
                      </div>
                    </div>
                  </div>

                  {item.tag && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 shrink-0">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Main body content */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mb-4">
                  {item.content}
                </p>

                {/* If there's a product mention tag */}
                {item.productMention && (
                  <div className="mb-4 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/70 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-zinc-200 font-medium">
                        {item.productMention.name}
                      </div>
                      {item.productMention.stat && (
                        <div className="text-[10px] font-mono text-emerald-400">
                          {item.productMention.stat}
                        </div>
                      )}
                    </div>
                    <a
                      href={item.productMention.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="Visit product"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {/* If it's a chat snippet */}
                {item.chatSnippet && (
                  <div className="mb-4 space-y-2 p-3 rounded-lg bg-zinc-900/50 border border-zinc-900 font-sans">
                    {item.chatSnippet.map((chat, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                          chat.isEntrextReply
                            ? 'bg-zinc-800/80 text-zinc-200 border border-zinc-700/50 ml-3'
                            : 'bg-zinc-950 text-zinc-300 border border-zinc-800 mr-3'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1">
                          <span className={chat.isEntrextReply ? 'text-emerald-400 font-medium' : 'text-zinc-400'}>
                            {chat.sender}
                          </span>
                          <span>{chat.time}</span>
                        </div>
                        <div>{chat.message}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom engagement metrics bar */}
              {item.metrics ? (
                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-zinc-500 text-[11px] font-mono">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <Flame className="w-3 h-3 text-amber-500" />
                    {item.metrics.impressions} impressions
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-zinc-300">
                      <Repeat className="w-3 h-3" />
                      {item.metrics.reposts}
                    </span>
                    <span className="flex items-center gap-1 hover:text-rose-400">
                      <Heart className="w-3 h-3 text-rose-500/70" />
                      {item.metrics.likes}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-zinc-500 text-[11px] font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400/90">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Community Message
                  </span>
                  <span className="text-zinc-500">{item.timestamp}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom invitation link to full wall */}
        <div className="mt-10 p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
              <MessageSquareQuote className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">Want to see all real posts from founders?</div>
              <div className="text-xs text-zinc-400 font-sans">
                Explore unfiltered posts, milestone updates, and launch threads on the official Wall of Content.
              </div>
            </div>
          </div>

          <a
            href="https://www.entrext.com/wall-of-content"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 text-xs font-mono transition-colors shrink-0"
          >
            <span>view all founder posts</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
