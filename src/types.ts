export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: 'Fullstack' | 'Mobile' | 'AI' | 'Frontend' | 'Backend';
  tags: string[];
  githubUrl: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  architecture?: string[];
  image?: string;
  year: string;
  stars?: number;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Bases de datos' | 'DevOps' | 'AI & Automation' | 'Tools';
  level: number; // 0 - 100
  experienceYears: number;
  highlight?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Tiempo Completo' | 'Remoto' | 'Híbrido' | 'Freelance';
  summary: string;
  achievements: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  honors?: string;
  courses?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeColor?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: 'Arquitectura' | 'Frontend' | 'Backend' | 'DevOps' | 'Carrera Tech';
  tags: string[];
  coverImage: string;
  views?: number;
}

export interface ProfileInfo {
  name: string;
  username?: string;
  role: string;
  headline: string;
  bio: string[];
  location: string;
  email: string;
  phone?: string;
  availability: string;
  githubUrl: string;
  linkedinUrl: string;
  websiteUrl?: string;
  twitterUrl?: string;
  avatarUrl?: string;
  cvDownloadUrl: string;
  stats: {
    yearsExperience: number;
    projectsCompleted: number;
    openSourceContributions: number;
    codeReviews: number;
  };
}
