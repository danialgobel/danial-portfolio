export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web App' | 'Mobile App' | 'Agency Website' | 'Automation & AI';
  tagline: string;
  description: string;
  detailedCaseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    keyFeatures: string[];
    architecture: string[];
  };
  technologies: string[];
  featured?: boolean;
  statusText: string;
  isPrivateClient?: boolean;
  liveUrl?: string;
  instagramUrl?: string;
  githubUrl?: string;
  imagePlaceholderText: string;
  imageSrc?: string;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: {
    name: string;
    category: string;
    iconKey: string;
    level?: string;
    highlight?: string;
  }[];
}

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
  iconName: string;
  isAvailable: boolean;
}
