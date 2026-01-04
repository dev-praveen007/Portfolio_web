import React from "react"
import { getMonthDifference, getYearMonthDiff } from './common';
import { Project, SkillGroup, Experience, GithubRepo } from './types';

export const TOTAL_EXPERIENCE_MONTHS = 40; // 3 years 4 months

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Pulse Commerce SaaS',
    problem: 'A legacy monolith was failing to handle peak traffic during sales events.',
    solution: 'Re-architected into microservices using Next.js and Go, improving scalability by 300%.',
    tags: ['Next.js', 'Go', 'Redis', 'Docker'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    links: { github: '#', live: '#' },
    details: {
      approach: 'Moved from a synchronous PHP backend to an event-driven Go architecture with RabbitMQ.',
      stack: ['Next.js', 'Go', 'PostgreSQL', 'RabbitMQ', 'AWS'],
      challenges: 'Data consistency across microservices during high-volume transactions.'
    }
  },
  {
    id: '2',
    title: 'CollabDoc Real-time',
    problem: 'Teams lacked a low-latency way to collaborate on technical documentation.',
    solution: 'Built a collaborative editor using Yjs and WebSockets with conflict-free replicated data types.',
    tags: ['React', 'Node.js', 'WebSockets', 'Yjs'],
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=1000',
    links: { github: '#', live: '#' },
    details: {
      approach: 'Implemented CRDTs to ensure seamless offline-to-online sync without server-side locking.',
      stack: ['React', 'Express', 'Socket.io', 'Yjs', 'MongoDB'],
      challenges: 'Handling complex nested state updates in real-time across multiple users.'
    }
  },
  {
    id: '3',
    title: 'FinSight Analytics',
    problem: 'Users struggled to interpret raw financial data without complex spreadsheets.',
    solution: 'An AI-powered dashboard that translates transactions into visual trends and forecasts.',
    tags: ['TypeScript', 'OpenAI', 'Python', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bbda48336ad1?auto=format&fit=crop&q=80&w=1000',
    links: { github: '#', live: '#' },
    details: {
      approach: 'Used OpenAI embeddings to categorize spending and D3.js for interactive forecasting.',
      stack: ['React', 'FastAPI', 'PyTorch', 'PostgreSQL', 'Tailwind'],
      challenges: 'Maintaining sub-second query performance on datasets with millions of records.'
    }
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { 
        name: 'React', 
        context: getYearMonthDiff("2022-10-04T18:30:00.000Z"), 
        icon: 'zap', 
        logoUrl: 'https://cdn.simpleicons.org/react/61DAFB',
        experienceMonths: getMonthDifference("2022-10-04T18:30:00.000Z")  
      },
      { 
        name: 'React Native', 
        context: getYearMonthDiff("2022-10-04T18:30:00.000Z"), 
        icon: 'code', 
        logoUrl: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000',
        experienceMonths: getMonthDifference("2022-10-04T18:30:00.000Z") 
      },
      { 
        name: 'JavaScript', 
        context: getYearMonthDiff("2022-10-04T18:30:00.000Z"), 
        icon: 'code', 
        logoUrl: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
        experienceMonths: getMonthDifference("2022-10-04T18:30:00.000Z") 
      },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { 
        name: 'Node.js', 
        context: getYearMonthDiff("2022-10-04T18:30:00.000Z"), 
        icon: 'server', 
        logoUrl: 'https://cdn.simpleicons.org/nodedotjs/339933',
        experienceMonths: getMonthDifference("2022-10-04T18:30:00.000Z") 
      },
      { 
        name: 'MongoDB', 
        context: '2 Years', 
        icon: 'database', 
        logoUrl: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000',
        experienceMonths: 24 
      },
      { 
        name: 'Express.js', 
        context: '2 Years', 
        icon: 'database', 
        logoUrl: 'https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000',
        experienceMonths: 24 
      },
      // { 
      //   name: 'FastAPI / Python', 
      //   context: '1 Year 2 Months', 
      //   icon: 'terminal', 
      //   logoUrl: 'https://cdn.simpleicons.org/fastapi/05998B',
      //   experienceMonths: 14 
      // }
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { 
        name: 'Docker', 
        context: '1 Year 6 Months', 
        icon: 'box', 
        logoUrl: 'https://cdn.simpleicons.org/docker/2496ED',
        experienceMonths: 18 
      },
      { 
        name: 'AWS', 
        context: '2 Years 2 Months', 
        icon: 'cloud', 
        logoUrl: 'https://img.icons8.com/?size=100&id=G0CnLqqcRBXl&format=png&color=000000',
        experienceMonths: 26 
      },
      { 
        name: 'Git / CI/CD', 
        context: '3 Years 4 Months', 
        icon: 'github', 
        logoUrl: 'https://cdn.simpleicons.org/git/F05032',
        experienceMonths: 40 
      }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Fullstack developer',
    company: 'Maticz technologies',
    period: '2022 - Present',
    impact: [
      'Developed and optimized backend services using Node.js and MongoDB to support high-traffic applications, improving performance and data reliability.',
      'Built cross-platform mobile applications using React Native, delivering consistent user experience across Android and iOS platforms.',
      'Designed and deployed decentralized applications using Solidity smart contracts, enabling secure transactions and trustless workflows.'
    ]
  },
  {
    role: 'Junior software developer',
    company: 'Maticz technologies',
    period: '2022 - 2023',
    impact: [
      'Built and maintained RESTful APIs using Node.js and MongoDB to support core application features.',
      'Identified and resolved bugs, improved code quality, and contributed to stable production releases.',
    ]
  },
  {
    role: 'Junior Java Developer',
    company: 'Safs',
    period: '2022 - 2022',
    impact: [
      'Started journey as intern as springboot developer',
    ]
  }
];

export const REPOS: GithubRepo[] = [
  {
    name: 'react-query-auth',
    description: 'A robust boilerplate for React Query based authentication flows.',
    stars: 245,
    url: '#'
  },
  {
    name: 'turbo-go-starter',
    description: 'High-performance Go microservices template with Docker support.',
    stars: 180,
    url: '#'
  }
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'The Future of Real-time Web with CRDTs',
    excerpt: 'Why conflict-free replicated data types are superior to server-side locking for collaboration.',
    date: 'Oct 12, 2023',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Optimizing Next.js for Core Web Vitals',
    excerpt: 'A deep dive into server components and image optimization strategies.',
    date: 'Sep 28, 2023',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Why I Switched to Go for Microservices',
    excerpt: 'How Go simplified our backend architecture and improved developer productivity.',
    date: 'Aug 15, 2023',
    readTime: '6 min read'
  }
];

export const TECH_TILES = [
  'React', 'TypeScript', 'Node.js',
  'MongoDB', 'Docker', 'AWS', 'Redis', "Express", "RabbitMq"
];
