'use client';

import React, { useState } from 'react';
import { Bot, Loader2, Send, Sparkles, User } from 'lucide-react';
import { ChatMessage } from '@/lib/types';
import { ShimmerBorder, ScrollReveal } from './ui/VisualEffects';
import { motion } from 'framer-motion';

const SAMPLE_QUESTIONS = [
  'Why hire Eugene as an AI Product Engineer?',
  'How does Eugene handle LLM rate limits (429s)?',
  'Tell me about his voice and audio AI projects',
  'What is SaaSForge Engine and why is it technically unique?'
];

export function AskAITwin() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hi! I’m Eugene’s AI Twin. Ask me anything about his technical stack, portfolio projects, commercial SaaS experience with ForgeCV, or how he builds 0-to-1 AI products.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: textToSend };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to query AI Twin.');

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err: unknown) {
      const e = err as { message?: string };
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `Error: ${e.message || 'Unable to connect to AI Twin.'}` }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-twin" className="py-12 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Interactive Conversational Representative
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Ask Eugene’s AI Twin
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mb-6">
            Powered by sub-second Groq inference. Test Eugene’s background, system architectures, and engineering principles directly.
          </p>
        </ScrollReveal>

        {/* Chat Console with Shimmer Border Beam */}
        <ScrollReveal delay={0.15}>
          <ShimmerBorder>
            <div className="p-4 sm:p-6 flex flex-col gap-4">
              {/* Quick Prompts */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-zinc-400 font-medium">Quick Prompts:</span>
                {SAMPLE_QUESTIONS.map((q, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => sendMessage(q)}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/60 text-[11px] transition shadow-sm"
                  >
                    {q}
                  </motion.button>
                ))}
              </div>

              {/* Messages Container */}
              <div className="min-h-[220px] max-h-[360px] overflow-y-auto space-y-3.5 pr-2">
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-start gap-3 text-xs leading-relaxed ${
                      m.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {m.role === 'assistant' && (
                      <div className="h-7 w-7 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center shrink-0 shadow-sm shadow-indigo-950">
                        <Bot className="w-4 h-4 text-indigo-400" />
                      </div>
                    )}
                    <div
                      className={`p-3.5 rounded-xl max-w-[85%] whitespace-pre-wrap ${
                        m.role === 'user'
                          ? 'bg-indigo-600 text-white font-medium shadow-md'
                          : 'bg-zinc-950 border border-zinc-800 text-zinc-300'
                      }`}
                    >
                      {m.content}
                    </div>
                    {m.role === 'user' && (
                      <div className="h-7 w-7 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-zinc-300" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex items-center gap-2 text-xs text-zinc-400 animate-pulse">
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                    Thinking and fetching portfolio telemetry...
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex items-center gap-2 pt-2 border-t border-zinc-850"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Eugene's experience, code, or architecture..."
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-950 transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Ask</span>
                </motion.button>
              </form>
            </div>
          </ShimmerBorder>
        </ScrollReveal>
      </div>
    </section>
  );
}