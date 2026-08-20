'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/portfolioData';
import { ProjectCategory } from '@/lib/types';
import { ExternalLink, Layers, Search } from 'lucide-react';

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Systems' },
  { id: 'saas-monetization', label: 'SaaS & Quotas' },
  { id: 'agents', label: 'Autonomous Agents' },
  { id: 'voice-multimodal', label: 'Voice & Audio STT' },
  { id: 'infrastructure', label: 'Infrastructure & SDKs' }
];

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-12 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              Production Systems Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Deployed AI Architectures ({PROJECTS.length})
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Every system is live, open-sourced, and engineered to solve a distinct commercial or technical challenge.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by model or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-950'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-indigo-500/40 p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-indigo-950/20 group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    {p.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Deployed
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-1">
                  {p.tagline}
                </p>

                {/* Problem Solved */}
                <div className="mt-3.5 p-3 rounded-xl bg-zinc-950 border border-zinc-850 text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-indigo-400 block font-semibold mb-1">Problem Solved:</strong>
                  {p.problemSolved}
                </div>

                {/* Architecture Bullets */}
                <ul className="mt-3.5 space-y-1.5 text-[11px] text-zinc-400">
                  {p.architectureHighlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-indigo-400 font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer / Tech Stack & Links */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-zinc-800/80 text-[10px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-950 transition"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}