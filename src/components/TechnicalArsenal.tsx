'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Bot, Layers, Sparkles, Zap } from 'lucide-react';
import { SpotlightCard, ScrollReveal } from './ui/VisualEffects';
import { motion } from 'framer-motion';

export function TechnicalArsenal() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Bot':
        return <Bot className="w-4 h-4 text-indigo-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      default:
        return <Zap className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="stack" className="py-12 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Skills
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Technical Arsenal
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mb-6">
            The engineering toolkit used across production applications, developer SDKs, and commercial SaaS products.
          </p>
        </ScrollReveal>

        {/* Skill Matrix Grid with Staggered Swoop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.12}>
              <SpotlightCard className="p-5 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                  {getIcon(cat.iconName)}
                  <h3 className="text-sm font-bold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-2">
                  {cat.skills.map((s, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 3 }}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-850 hover:border-zinc-700 text-xs transition"
                    >
                      <span className={`font-medium ${s.highlight ? 'text-indigo-300 font-semibold' : 'text-zinc-300'}`}>
                        {s.name}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                        {s.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}