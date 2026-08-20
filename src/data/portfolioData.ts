import { ProjectItem, SkillCategory } from '@/lib/types';

export const PROFILE = {
  fullName: 'Eugene Leroy Sunie Jr.',
  shortName: 'Eugene Leroy',
  headline: 'AI Product Engineer & Full-Stack Builder',
  tagline: 'Fast 0-to-1 Product Builder & "Vibe Coder"',
  bio: 'Building fast, affordable, and profitable AI web applications. Creator of ForgeCV (live commercial SaaS) and 6 production AI applications spanning AI web research, real-time voice, token metering, and reliable SDKs.',
  availabilityStatus: 'Available for AI Product Roles & Builder Positions',
  email: 'eugene.sunie@gmail.com',
  github: 'https://github.com/eugeneleroy29',
  linkedin: 'https://linkedin.com/in/eugeneleroy',
  location: 'Remote / Global'
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'forgecv',
    title: 'ForgeCV',
    tagline: 'All-in-One AI Career Suite (Resume, Cover Letter & Portfolio)',
    category: 'flagship',
    badge: 'LIVE COMMERCIAL SAAS',
    description: 'An all-in-one AI career suite featuring Resume, Cover Letter, and Website Portfolio builders with live side-by-side previews, ATS score auditing, job description optimization, and multi-currency payments.',
    problemSolved: 'Job seekers struggle with ATS rejection and disjointed tools; ForgeCV unifies resume transformation, cover letter generation, and custom web portfolios in a single live-preview workspace.',
    architectureHighlights: [
      'Resume Upload & Instant AI Content Transformation',
      'ATS Scorer & Job Description Matching Optimizer',
      'Live Side-by-Side Builder & Document Previews',
      'Multi-currency checkout via PayMongo (PHP) & Polar.sh (USD)'
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Groq AI', 'Tailwind CSS', 'PayMongo', 'Polar.sh'],
    liveUrl: 'https://www.forgecv.org',
    isFlagship: true,
    featured: true,
    status: 'production'
  },
  {
    id: 'saasforge-engine',
    title: 'SaaSForge Engine',
    tagline: 'Multi-Tenant AI SaaS Dashboard & Token Quota Hub',
    category: 'saas-monetization',
    badge: 'CAPSTONE PROJECT',
    description: 'AI SaaS monetization dashboard with live token usage metering, subscription tier paywalls (Free vs Pro vs Enterprise), and developer API key management.',
    problemSolved: 'Prevents runaway AI cloud bills by enforcing real-time token limits, gating heavy reasoning models behind paywalls, and managing secret API keys.',
    architectureHighlights: [
      'Real-time token quota meter with instant balance countdown',
      '1-Click Role Switcher for interviewers (Free, Pro, Enterprise)',
      'Reveal-once Developer API Key manager with revocation',
      'Live request telemetry feed with millisecond latency tracking'
    ],
    techStack: ['Next.js 15', 'Groq Cloud SDK', 'TypeScript', 'Tailwind CSS', 'LocalStorage Sync'],
    liveUrl: 'https://saasforge-engine.vercel.app/',
    githubUrl: 'https://github.com/eugeneleroy29/saasforge-engine',
    featured: true,
    status: 'deployed'
  },
  {
    id: 'agentpulse',
    title: 'AgentPulse',
    tagline: 'AI Web Research Agent & Competitive Intelligence Tool',
    category: 'agents',
    badge: 'AI WEB AGENT',
    description: 'An AI research agent that searches live Google web data, analyzes competitors, creates SWOT matrices, and drafts executive outreach emails in seconds.',
    problemSolved: 'Manual company research takes hours; AgentPulse automatically finds live web information, assesses market threats, and drafts customized outreach.',
    architectureHighlights: [
      'Multi-step AI web search agent workflow',
      'Live Google Search integration via Serper API',
      'Real-time AI streaming for instant response delivery',
      'Interactive SWOT matrix visualizer'
    ],
    techStack: ['Next.js 15', 'Edge Runtime', 'Serper Web API', 'Groq SDK', 'Tailwind CSS'],
    liveUrl: 'https://agentpulse-neon.vercel.app/',
    githubUrl: 'https://github.com/eugeneleroy29/agentpulse',
    featured: true,
    status: 'deployed'
  },
  {
    id: 'voicecoach-ai',
    title: 'VoiceCoach AI',
    tagline: 'Real-Time Voice Mock Interviewer with STAR Rubric Scoring',
    category: 'voice-multimodal',
    badge: 'VOICE AI',
    description: 'An interactive voice interview simulator with animated sound waveforms, sub-second speech-to-text, and STAR rubric answer grading.',
    problemSolved: 'Candidates lack realistic interview practice with objective scoring; VoiceCoach evaluates speaking pace, filler words, and behavioral answer structure.',
    architectureHighlights: [
      'Voice-to-Text (Whisper AI) with sub-second response times',
      'Live audio waveform visualizer on HTML canvas',
      'STAR rubric grading (Situation, Task, Action, Result)',
      'Dynamic follow-up interview questions'
    ],
    techStack: ['Next.js 15', 'Web Audio API', 'Groq Whisper STT', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://voicecoach-ai-azure.vercel.app/',
    githubUrl: 'https://github.com/eugeneleroy29/voicecoach-ai',
    featured: true,
    status: 'deployed'
  },
  {
    id: 'meetingmind-ai',
    title: 'MeetingMind AI',
    tagline: 'Voice Memo Meeting Notes & Action Item Extraction Tool',
    category: 'voice-multimodal',
    badge: 'AUDIO NOTES AI',
    description: 'Audio memo assistant that transcribes voice recordings, extracts organized action items with owners and deadlines, and drafts 1-click follow-up emails.',
    problemSolved: 'Audio voice memos and meeting recordings are hard to review; MeetingMind converts spoken recordings into structured to-do lists and instant email drafts.',
    architectureHighlights: [
      'Voice-to-Text transcription using Whisper Turbo',
      'Structured AI Data Output (JSON) for action items and deadlines',
      '1-Click email draft creator with pre-filled tasks',
      'Interactive task table with status tracking'
    ],
    techStack: ['Next.js 15', 'Groq Whisper', 'Compound AI', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://meetingmind-ai-alpha.vercel.app/',
    githubUrl: 'https://github.com/eugeneleroy29/meetingmind-ai',
    featured: true,
    status: 'deployed'
  },
  {
    id: 'brandcanvas-ai',
    title: 'BrandCanvas AI',
    tagline: 'Generative Visual Banner Studio & 4K Image Export Studio',
    category: 'saas-monetization',
    badge: 'VISUAL STUDIO',
    description: 'AI visual banner studio with real-time gradient pickers, inline copy editing, multi-aspect ratio switching (16:9, 1:1, 4:5), and high-resolution 4K PNG downloads.',
    problemSolved: 'Creating and resizing social media banners for multiple platforms takes hours; BrandCanvas generates marketing graphics with instant aspect ratio switching and 4K export.',
    architectureHighlights: [
      'Real-time HTML5 canvas rendering engine',
      'Instant aspect ratio switching for LinkedIn, Twitter, and Instagram',
      'AI marketing copy generation matched to brand tone',
      'Crystal-clear 4K PNG export pipeline'
    ],
    techStack: ['Next.js 15', 'HTML5 Canvas API', 'Groq AI', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://brandcanvas-ai-black.vercel.app/',
    githubUrl: 'https://github.com/eugeneleroy29/brandcanvas-ai',
    featured: true,
    status: 'deployed'
  },
  {
    id: 'resilient-llm-fallback',
    title: 'resilient-llm-fallback',
    tagline: 'Zero-Dependency TypeScript SDK for LLM Failover & Reliability',
    category: 'infrastructure',
    badge: 'OPEN SOURCE SDK',
    description: 'A TypeScript developer library solving LLM rate limits (429), model outages, token limits, and self-healing malformed JSON.',
    problemSolved: 'AI applications crash when AI providers hit rate limits or go down; this package automatically tries backup models in milliseconds so users never see errors.',
    architectureHighlights: [
      'Automatic multi-model backup failover chains',
      'Auto-retry with exponential backoff',
      'Self-healing repair for corrupted JSON outputs',
      'Zero external dependencies with full TypeScript typings'
    ],
    techStack: ['TypeScript', 'Node.js', 'Vitest', 'NPM Packaging', 'CI/CD'],
    githubUrl: 'https://github.com/eugeneleroy29/resilient-llm-fallback',
    featured: true,
    status: 'deployed'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI Models & Workflows',
    iconName: 'Bot',
    skills: [
      { name: 'Voice-to-Text (Whisper AI)', level: 'expert', highlight: true },
      { name: 'Multi-Step AI Workflows', level: 'expert', highlight: true },
      { name: 'Prompt Design & Testing', level: 'expert', highlight: true },
      { name: 'Structured AI Data Output (JSON)', level: 'expert', highlight: true },
      { name: 'Groq Cloud & Compound AI', level: 'expert' },
      { name: 'Multi-Model Fallback Chains', level: 'expert' }
    ]
  },
  {
    title: 'Full-Stack & Web Apps',
    iconName: 'Layers',
    skills: [
      { name: 'Next.js 15 (App Router, Server Actions)', level: 'expert', highlight: true },
      { name: 'TypeScript', level: 'expert', highlight: true },
      { name: 'Tailwind CSS & Framer Motion', level: 'expert', highlight: true },
      { name: 'Real-time AI Streaming', level: 'advanced', highlight: true },
      { name: 'Token Metering & Paywalls', level: 'expert' },
      { name: 'Developer API Key Management', level: 'expert' }
    ]
  },
  {
    title: 'Engineering & Delivery',
    iconName: 'Zap',
    skills: [
      { name: 'Fast 0-to-1 Product Builder', level: 'expert', highlight: true },
      { name: 'Live Audio Waveforms & Canvas', level: 'advanced' },
      { name: 'Multi-Currency Checkout (PayMongo & Polar.sh)', level: 'expert', highlight: true },
      { name: 'Open Source NPM Packaging', level: 'advanced' },
      { name: 'Vercel Edge Deployment & CI/CD', level: 'expert' }
    ]
  }
];