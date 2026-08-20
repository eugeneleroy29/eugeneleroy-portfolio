export type ProjectCategory = 
  | 'all'
  | 'flagship'
  | 'agents'
  | 'voice-multimodal'
  | 'infrastructure'
  | 'saas-monetization';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: Exclude<ProjectCategory, 'all'>;
  badge: string;
  description: string;
  problemSolved: string;
  architectureHighlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  stars?: number;
  isFlagship?: boolean;
  featured?: boolean;
  status: 'production' | 'deployed' | 'in-development';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: 'expert' | 'advanced' | 'proficient'; highlight?: boolean }[];
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
}