"use client";

import React, { useState } from "react";
import { PROFILE, PROJECTS } from "@/data/portfolioData";
import { Check, Copy, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-center gap-8 justify-between">
          {/* Left Text Column with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl space-y-4"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide shadow-sm shadow-emerald-950"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {PROFILE.availabilityStatus}
            </motion.div>

            {/* YOUR NAME: BIGGEST, BOLDEST HEADLINE */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                {PROFILE.fullName}
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-indigo-200 to-zinc-200 bg-clip-text text-transparent mt-1.5">
                {PROFILE.headline}
              </p>
            </div>

            {/* Plain-English Bio */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Building fast, affordable, and profitable AI web applications.
              Creator of <strong className="text-white">ForgeCV</strong> (live
              commercial SaaS) and 6 deployed AI applications spanning autonomous web
              research, voice intelligence, and token metering.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {[
                { label: "1 Live SaaS", sub: "ForgeCV (Commercial)", color: "text-white" },
                { label: `${PROJECTS.length} Systems`, sub: "Production Deployed", color: "text-white" },
                { label: "Instant Speed", sub: "Sub-Second Responses", color: "text-indigo-400" },
                { label: "Fast 0-to-1", sub: "High-Velocity Shipper", color: "text-emerald-400" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2, borderColor: "rgba(99, 102, 241, 0.4)" }}
                  className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 transition-all duration-200"
                >
                  <div className={`text-base sm:text-lg font-bold ${stat.color}`}>
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-zinc-400">{stat.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-950 transition"
              >
                Explore {PROJECTS.length} Live Projects
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#ai-twin"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-indigo-500/40 text-indigo-300 text-xs font-semibold transition"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                Ask My AI Twin
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo Card with Floating 3D Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end shrink-0"
          >
            <div className="relative group">
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-3xl blur-md opacity-40 group-hover:opacity-85 transition duration-500 animate-pulse" />

              <div className="relative w-64 h-72 sm:w-72 sm:h-84 lg:w-80 lg:h-96 rounded-3xl bg-zinc-900 border-2 border-zinc-700/80 overflow-hidden flex items-center justify-center shadow-2xl transition duration-300 group-hover:border-indigo-400">
                {!imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/profile.png"
                    alt={PROFILE.fullName}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}