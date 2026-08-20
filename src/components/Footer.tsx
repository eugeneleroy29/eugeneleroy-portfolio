'use client';

import React from 'react';
import { PROFILE } from '@/data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-xs text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 space-y-2">
        <p>
          &copy; {new Date().getFullYear()} <strong className="text-zinc-200">{PROFILE.fullName}</strong> &bull; AI Product Engineer & Full-Stack Builder
        </p>
        <p className="text-[11px] text-zinc-400">
          Built with Next.js 15, TypeScript, Tailwind CSS, and Groq Cloud &bull; Creator of <a href="https://www.forgecv.org" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">ForgeCV</a>
        </p>
      </div>
    </footer>
  );
}