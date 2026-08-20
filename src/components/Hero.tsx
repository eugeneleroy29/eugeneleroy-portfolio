"use client";

import React, { useState } from "react";
import { PROFILE, PROJECTS } from "@/data/portfolioData";
import { Check, Copy, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-10 pb-8 md:pt-16 md:pb-12 border-b border-zinc-900 overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-center gap-8 justify-between">
          {/* Left Text Column */}
          <div className="max-w-2xl space-y-4">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {PROFILE.availabilityStatus}
            </div>

            {/* YOUR NAME: BIGGEST, BOLDEST HEADLINE */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                {PROFILE.fullName}
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-indigo-200 to-zinc-200 bg-clip-text text-transparent mt-1.5">
                {PROFILE.headline}
              </p>
            </div>

            {/* Clear, Plain-English Bio */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Building fast, affordable, and profitable AI web applications.
              Creator of <strong className="text-white">ForgeCV</strong> (live
              commercial SaaS) and 6 deployed AI applications spanning AI web
              research, voice notes, and token metering.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-base sm:text-lg font-bold text-white">
                  1 Live SaaS
                </div>
                <div className="text-[11px] text-zinc-400">
                  ForgeCV (Commercial)
                </div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-base sm:text-lg font-bold text-white">
                  {PROJECTS.length} Systems
                </div>
                <div className="text-[11px] text-zinc-400">
                  Production Deployed
                </div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-base sm:text-lg font-bold text-indigo-400">
                  Instant Speed
                </div>
                <div className="text-[11px] text-zinc-400">
                  Sub-Second Responses
                </div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-base sm:text-lg font-bold text-emerald-400">
                  Fast 0-to-1
                </div>
                <div className="text-[11px] text-zinc-400">
                  High-Velocity Shipper
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-950 transition"
              >
                Explore {PROJECTS.length} Live Projects
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#ai-twin"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-indigo-500/40 text-indigo-300 text-xs font-semibold transition"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Ask My AI Twin
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-semibold transition"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="flex justify-center md:justify-end shrink-0">
            <div className="relative group">
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />

              <div className="relative w-64 h-72 sm:w-72 sm:h-84 lg:w-80 lg:h-96 rounded-3xl bg-zinc-900 border-2 border-zinc-700/80 overflow-hidden flex items-center justify-center shadow-2xl">
                {!imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/profile.png"
                    alt={PROFILE.fullName}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 to-zinc-900 text-indigo-300">
                    <span className="text-4xl font-extrabold tracking-tight">
                      ES
                    </span>
                    <span className="text-xs text-zinc-400 mt-1">
                      Eugene Leroy
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
