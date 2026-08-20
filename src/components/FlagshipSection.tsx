'use client';

import React from 'react';
import { CheckCircle2, ExternalLink, Globe, Layout, Sparkles, Wand2 } from 'lucide-react';
import { ShimmerBorder } from './ui/VisualEffects';
import { motion } from 'framer-motion';

export function FlagshipSection() {
  return (
    <section id="flagship" className="py-12 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Commercial Flagship
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
          ForgeCV — Live Commercial SaaS
        </h2>

        {/* Spotlight Card with Rotating Conic Shimmer Border */}
        <ShimmerBorder>
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live in Production at www.forgecv.org
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  All-in-One AI Career Suite with Real-Time Side-by-Side Previews
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  ForgeCV is a complete career acceleration platform featuring <strong>Resume Builder</strong>, <strong>Cover Letter Generator</strong>, and <strong>Website Portfolio Builder</strong>. Users can upload existing resumes for instant AI transformation, audit their ATS match score, and optimize applications for specific job descriptions.
                </p>

                {/* 4 Core Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-indigo-500/40 transition">
                    <Layout className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-white block font-semibold">Resume, Letter & Portfolio</strong>
                      <span className="text-zinc-400">Side-by-side builder with live instant preview.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-emerald-500/40 transition">
                    <Wand2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-white block font-semibold">ATS Scorer & Job Optimizer</strong>
                      <span className="text-zinc-400">Tailors bullets to match job descriptions.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/40 transition">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-white block font-semibold">Resume Upload & Transform</strong>
                      <span className="text-zinc-400">Extracts and polishes existing documents with AI.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/40 transition">
                    <Globe className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-white block font-semibold">PayMongo & Polar.sh Payments</strong>
                      <span className="text-zinc-400">Seamless checkout for PHP and USD ($) plans.</span>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.forgecv.org"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-950 transition"
                  >
                    Visit ForgeCV Live Platform
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </div>

              {/* Right Visual Box */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-4 shadow-inner">
                  <div className="flex items-center justify-between border-b border-zinc-850 pb-3 mb-3 text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-[11px]">https://forgecv.org</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3 font-mono text-xs text-zinc-300">
                    <div className="text-indigo-400 font-semibold">// ForgeCV Platform Suite</div>
                    <div>&gt; Resume Builder: <span className="text-emerald-400">Live Preview</span></div>
                    <div>&gt; Cover Letter Builder: <span className="text-emerald-400">Active</span></div>
                    <div>&gt; Website Portfolio: <span className="text-emerald-400">Active</span></div>
                    <div>&gt; ATS Scorer & Optimizer: <span className="text-emerald-400">AI Powered</span></div>
                    <div>&gt; Payments: <span className="text-emerald-400">PayMongo & Polar.sh</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ShimmerBorder>
      </div>
    </section>
  );
}