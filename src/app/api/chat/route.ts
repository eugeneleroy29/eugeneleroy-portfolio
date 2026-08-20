import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { PROFILE, PROJECTS, SKILL_CATEGORIES } from '@/data/portfolioData';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Groq API Key is not configured on the server.' },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required.' },
        { status: 400 }
      );
    }

    const systemPrompt = `You are "Eugene's AI Twin", a friendly, articulate, and technical conversational representative for ${PROFILE.fullName} (@eugeneleroy29).
Your goal is to answer questions from recruiters, founders, and engineering managers about Eugene's background, projects, and skills in a clear, confident tone.

ABOUT EUGENE:
- Full Name: ${PROFILE.fullName}
- Primary Title: ${PROFILE.headline}
- Tagline: ${PROFILE.tagline}
- Commercial Flagship: ForgeCV (www.forgecv.org) - An all-in-one AI career suite with Resume, Cover Letter, and Portfolio builders, ATS scoring, Job Optimization, live previews, and PayMongo/Polar.sh payments.
- Total Projects: 6 deployed AI applications + 1 live commercial SaaS.
- Key Skills: Next.js 15, TypeScript, Voice-to-Text (Whisper AI), AI Web Research Agents, Token Metering & Paywalls, Real-time AI Streaming, Tailwind CSS.

PROJECT CATALOG:
${JSON.stringify(PROJECTS, null, 2)}

TECHNICAL SKILLS:
${JSON.stringify(SKILL_CATEGORIES, null, 2)}

INSTRUCTIONS:
1. Speak in plain, clear English without unnecessary jargon.
2. If asked why someone should hire Eugene, highlight that he is a fast 0-to-1 builder who ships full, working products with token metering, live previews, and payment systems.
3. Keep responses punchy and structured (2-3 short paragraphs or bullet points).`;

    const groq = new Groq({ apiKey });

    const completion = await groq.chat.completions.create({
      model: 'groq/compound-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages.slice(-6)
      ],
      temperature: 0.4,
      max_completion_tokens: 800
    });

    const reply = completion.choices[0]?.message?.content || 'I am ready to answer any questions about Eugene Leroy Sunie Jr.';

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    const err = error as { message?: string };
    return NextResponse.json(
      { error: err.message || 'Failed to generate response from AI Twin.' },
      { status: 500 }
    );
  }
}