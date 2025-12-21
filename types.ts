
export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tags: string[];
  image: string;
  links: {
    live?: string;
    github?: string;
  };
  details: {
    approach: string;
    stack: string[];
    challenges: string;
  };
}

export interface Skill {
  name: string;
  context: string;
  icon: string;
  logoUrl: string;
  experienceMonths: number;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  impact: string[];
}

export interface GithubRepo {
  name: string;
  description: string;
  stars: number;
  url: string;
}
