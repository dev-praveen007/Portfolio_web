
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Layers, 
  Star, 
  X, 
  Menu,
  Zap,
  CheckCircle2,
  Download,
  Send,
  ArrowRight,
  BookOpen,
  Cpu,
  Globe,
  Database,
  Terminal,
  Codepen,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { PROJECTS, SKILL_GROUPS, EXPERIENCES, BLOG_POSTS, TECH_TILES, TOTAL_EXPERIENCE_MONTHS } from './constants';
import { Project } from './types';

// --- Typed Motion Components ---
const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;
const MotionSection = motion.section as any;
const MotionPath = motion.path as any;
const MotionSvg = motion.svg as any;

// --- Shared Lottie Sparkle Data ---
const SPARKLE_ANIMATION = {
  v: "5.7.1",
  fr: 30,
  ip: 0,
  op: 30,
  w: 100,
  h: 100,
  nm: "Sparkle",
  ddd: 0,
  assets: [],
  layers: [{
    ddd: 0, ind: 1, ty: 4, nm: "Shape Layer 1", sr: 1, ks: {
      o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 10, s: [100] }, { t: 25, s: [0] }], ix: 11 },
      r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] }, { t: 30, s: [180] }], ix: 10 },
      p: { k: [50, 50, 0], ix: 2 },
      a: { k: [0, 0, 0], ix: 1 },
      s: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0, 0, 100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [120, 120, 100] }, { t: 30, s: [0, 0, 100] }], ix: 6 }
    },
    ao: 0, shapes: [{
      ty: "gr", it: [{
        ty: "sr", sy: 1, p: { k: [0, 0], ix: 3 }, r: { k: 0, ix: 4 }, ir: { k: 10, ix: 5 }, is: { k: 0, ix: 7 }, or: { k: 30, ix: 6 }, os: { k: 0, ix: 8 }, d: 1, pt: { k: 4, ix: 2 }, nm: "Polystar Path 1", mn: "ADBE Vector Shape - Star", hd: false
      }, {
        ty: "fl", c: { k: [0.525, 0.718, 0.224, 1], ix: 4 }, o: { k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false
      }, {
        ty: "tr", p: { k: [0, 0], ix: 2 }, a: { k: [0, 0], ix: 1 }, s: { k: [100, 100], ix: 3 }, r: { k: 0, ix: 6 }, o: { k: 100, ix: 7 }, sk: { k: 0, ix: 8 }, sa: { k: 0, ix: 9 }, nm: "Transform"
      }], nm: "Star", mn: "ADBE Vector Group", hd: false
    }], ip: 0, op: 30, st: 0, bm: 0
  }]
};

// --- Innovative Theme Toggle Component ---
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme ? savedTheme === 'dark' : true;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.4);
    y.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] perspective-1000">
      <MotionDiv
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={toggleTheme}
        style={{ x: mouseX, y: mouseY }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-12 h-12 rounded-[18px] bg-white dark:bg-surface border border-black/5 dark:border-white/10 flex items-center justify-center cursor-pointer shadow-[0_8px_30px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_-8px_rgba(134,183,57,0.3)] group overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <MotionDiv
            key={isDark ? 'dark' : 'light'}
            initial={{ opacity: 0, y: 10, rotate: -45, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, rotate: 45, scale: 0.5 }}
            transition={{ type: 'spring', damping: 15 }}
            className="relative z-10"
          >
            {isDark ? (
              <Moon size={20} className="text-accent fill-accent/10" />
            ) : (
              <Sun size={20} className="text-orange-500 fill-orange-500/10" />
            )}
          </MotionDiv>
        </AnimatePresence>
        <MotionDiv
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: isDark 
              ? 'radial-gradient(circle at center, rgba(134,183,57,0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(249,115,22,0.1) 0%, transparent 70%)'
          }}
        />
        <MotionDiv
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute w-full h-full pointer-events-none"
        >
          <div className="absolute top-1 left-1/2 -translate-x-1/2">
            <Sparkles size={6} className={`${isDark ? 'text-accent' : 'text-orange-400'} opacity-40`} />
          </div>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

// --- Custom Experience Animations ---

const ExperienceDecoration = ({ type }: { type: number }) => {
  const accentColor = '#86B739';
  if (type === 0) {
    return (
      <MotionDiv 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
      >
        <MotionSvg width="180" height="180" viewBox="0 0 200 200" fill="none" className="opacity-20">
          <circle cx="100" cy="100" r="80" stroke={accentColor} strokeWidth="1" strokeDasharray="4 4" />
          <MotionDiv 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="origin-center"
          >
            <circle cx="100" cy="20" r="5" fill={accentColor} />
            <circle cx="100" cy="180" r="5" fill={accentColor} />
          </MotionDiv>
          <MotionPath
            d="M60,100 L140,100 M100,60 L100,140"
            stroke={accentColor}
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </MotionSvg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Database size={80} strokeWidth={0.5} className="text-accent/30 animate-pulse" />
        </div>
      </MotionDiv>
    );
  }
  if (type === 1) {
    return (
      <MotionDiv 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <div className="relative glass-card p-6 rounded-2xl border-accent/10 w-48 h-48 flex flex-col gap-3 overflow-hidden opacity-30">
          {[1, 2, 3, 4].map(i => (
            <MotionDiv 
              key={i}
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ delay: i * 0.15, duration: 1 }}
              className={`h-2 rounded-full ${i === 1 ? 'bg-accent/40 w-12' : 'bg-dark/10 dark:bg-white/10 w-full'}`}
            />
          ))}
          <MotionDiv 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-accent/60 mt-1.5"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Terminal size={80} strokeWidth={0.5} className="text-accent/20" />
        </div>
      </MotionDiv>
    );
  }
  return (
    <MotionDiv 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <MotionSvg width="160" height="160" viewBox="0 0 100 100" className="opacity-15">
        <MotionPath
          d="M10,50 Q50,10 90,50 T10,50"
          stroke={accentColor}
          strokeWidth="0.5"
          fill="none"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <MotionPath
          d="M50,10 L50,90 M10,50 L90,50"
          stroke={accentColor}
          strokeWidth="0.2"
        />
      </MotionSvg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Layers size={80} strokeWidth={0.5} className="text-accent/20 animate-float" />
      </div>
    </MotionDiv>
  );
};

// --- Sub-components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lottieHeaderRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeaderLogoHover = () => {
    if (lottieHeaderRef.current) {
      lottieHeaderRef.current.stop();
      lottieHeaderRef.current.play();
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <a 
          href="#about" 
          className="flex items-center gap-2 group relative"
          onMouseEnter={handleHeaderLogoHover}
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 shadow-md shadow-accent/20">
            <Zap className="text-black w-5 h-5" />
          </div>
          <span className="text-xl font-outfit font-bold tracking-tight text-dark dark:text-text-primary">Alex<span className="text-accent">.</span></span>
          <div className="absolute -top-3 -right-5 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <Lottie 
              lottieRef={lottieHeaderRef}
              autoplay={false}
              loop={false}
              animationData={SPARKLE_ANIMATION}
            />
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-semibold text-dark/60 dark:text-text-muted hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-1.5 bg-dark dark:bg-accent text-white dark:text-black font-bold text-xs rounded-full hover:bg-accent-hover transition-all">
            Hire Me
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-dark dark:text-text-primary p-1.5">
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MotionDiv 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-surface border-b border-black/10 dark:border-white/10 overflow-hidden lg:hidden shadow-xl"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-dark/70 dark:text-text-primary hover:text-accent">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-2.5 bg-accent text-black font-bold rounded-full text-sm">
                Contact
              </a>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => {
  return (
    <MotionDiv 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-5xl font-outfit font-extrabold mb-4 leading-tight text-dark dark:text-text-primary">
        {title}
      </h2>
      {subtitle && <p className={`text-dark/40 dark:text-text-muted text-base md:text-lg max-w-3xl ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </MotionDiv>
  );
};

const ProjectCard: React.FC<{ project: Project; onOpen: (p: Project) => void }> = ({ project, onOpen }) => {
  return (
    <MotionDiv 
      whileHover={{ y: -8 }}
      className="group glass-card rounded-[24px] overflow-hidden border border-black/5 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-md text-[8px] font-bold uppercase tracking-wider text-white">{tag}</span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors text-dark dark:text-text-primary">{project.title}</h3>
        <p className="text-dark/50 dark:text-text-muted text-xs mb-6 leading-relaxed line-clamp-2">{project.problem}</p>
        <div className="flex items-center justify-between">
          <button onClick={() => onOpen(project)} className="text-accent text-xs font-black uppercase tracking-widest flex items-center gap-1.5 group/btn hover:text-accent-hover transition-colors">
            View Details <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
          </button>
          <div className="flex gap-3">
            <a href={project.links.github} className="text-dark/40 dark:text-text-muted hover:text-accent transition-colors"><Github size={16} /></a>
            <a href={project.links.live} className="text-dark/40 dark:text-text-muted hover:text-accent transition-colors"><ExternalLink size={16} /></a>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
      <MotionDiv 
        initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.95 }}
        className="relative w-full max-w-4xl bg-white dark:bg-surface border border-black/10 dark:border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2.5 bg-dark/5 dark:bg-white/5 hover:bg-dark/10 dark:hover:bg-white/10 rounded-full transition-colors z-20"><X size={18} className="text-dark dark:text-text-primary" /></button>
        <div className="grid lg:grid-cols-2">
          <div className="h-full min-h-[300px]">
            <img src={project.image} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-3xl font-outfit font-extrabold mb-3 text-dark dark:text-text-primary">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.details.stack.map(s => <span key={s} className="px-2.5 py-0.5 bg-accent/10 border border-accent/20 text-accent text-[9px] font-bold uppercase rounded-md">{s}</span>)}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/40 dark:text-text-muted mb-3">The Challenge</h4>
                <p className="text-dark/70 dark:text-text-muted leading-relaxed text-sm">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/40 dark:text-text-muted mb-3">My Solution</h4>
                <p className="text-dark/70 dark:text-text-muted leading-relaxed text-sm">{project.solution}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/40 dark:text-text-muted mb-3">Technical Approach</h4>
                <p className="text-dark/70 dark:text-text-muted leading-relaxed text-sm">{project.details.approach}</p>
              </div>
            </div>
            <div className="flex gap-3 pt-3">
              <a href="#" className="flex-1 px-6 py-3 bg-accent text-black font-black uppercase tracking-widest text-xs rounded-xl text-center hover:bg-accent-hover transition-all">Launch Site</a>
              <a href="#" className="flex-1 px-6 py-3 border border-black/10 dark:border-white/10 text-dark dark:text-text-primary font-black uppercase tracking-widest text-xs rounded-xl text-center hover:bg-dark/5 transition-all">Source Code</a>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const lottieFooterRef = useRef<LottieRefCurrentProps>(null);

  const handleFooterLogoHover = () => {
    if (lottieFooterRef.current) {
      lottieFooterRef.current.stop();
      lottieFooterRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-dark text-dark dark:text-text-primary selection:bg-accent selection:text-black transition-colors duration-700 font-sans">
      <Navbar />
      <ThemeToggle />

      {/* Hero Section */}
      <MotionSection id="about" className="relative pt-24 lg:pt-36 pb-16 lg:pb-24 overflow-hidden scroll-mt-header">
        <div className="absolute top-[-15%] right-[-5%] w-[50%] h-[60%] bg-accent/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <MotionDiv initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full lg:flex-1 order-1 lg:order-2">
              <div className="relative z-10 mx-auto w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[480px] aspect-[4/5] bg-white dark:bg-surface border border-black/5 dark:border-white/10 rounded-[32px] lg:rounded-[64px] overflow-hidden p-2 lg:p-4 group shadow-xl">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover rounded-[24px] lg:rounded-[52px] grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -left-4 lg:-bottom-10 lg:-left-10 glass-card p-5 lg:p-10 rounded-[28px] lg:rounded-[40px] border-accent/20 dark:border-accent/20 animate-float shadow-2xl z-20">
                <div className="text-2xl lg:text-5xl font-outfit font-black text-accent mb-0.5">10+</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-dark/40 dark:text-text-muted">Production Apps Deployed</div>
              </div>
            </MotionDiv>

            <div className="flex-1 space-y-5 lg:space-y-10 order-2 lg:order-1 text-center lg:text-left">
              <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="w-8 lg:w-14 h-[1px] bg-accent" />
                <span className="text-[10px] lg:text-sm font-black uppercase tracking-[0.2em] text-accent">3+ Years of Experience</span>
              </MotionDiv>
              <MotionH1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-8xl font-outfit font-extrabold leading-[0.95] tracking-tighter text-dark dark:text-text-primary"
              >
                Building <br /> <span className="text-accent">Robust</span> Digital Experiences.
              </MotionH1>
              <MotionP 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-base md:text-lg lg:text-xl text-dark/40 dark:text-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                I'm Alex, a Senior Full-Stack Developer crafting high-performance, scalable web applications with a focus on clean architecture and user-centric design.
              </MotionP>
              <MotionDiv 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start"
              >
                <a href="#projects" className="px-8 lg:px-10 py-3.5 lg:py-5 bg-accent text-black font-black uppercase tracking-[0.1em] text-[10px] lg:text-xs rounded-xl hover:bg-accent-hover hover:shadow-lg transition-all flex items-center gap-3">
                  View Case Studies <ArrowRight size={16} />
                </a>
                <a href="#contact" className="px-8 lg:px-10 py-3.5 lg:py-5 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-dark dark:text-text-primary font-black uppercase tracking-[0.1em] text-[10px] lg:text-xs rounded-xl transition-all flex items-center gap-3">
                  Hire Me <Mail size={16} />
                </a>
              </MotionDiv>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Quick Stats Bar */}
      <section className="py-12 lg:py-20 border-y border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-14 text-center max-w-7xl">
          {[
            { label: 'Years Experience', val: '3+' },
            { label: 'Major Tech Stack', val: 'T3 / MERN' },
            { label: 'Success Rate', val: '99%' },
            { label: 'GitHub Stars', val: '500+' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl lg:text-5xl font-outfit font-black text-accent mb-1.5">{stat.val}</div>
              <div className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-dark/30 dark:text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-4 lg:py-8 overflow-hidden bg-accent border-y border-black/5">
        <div className="flex gap-14 lg:gap-24 animate-marquee items-center">
          {[...TECH_TILES, ...TECH_TILES].map((tech, i) => (
            <div key={i} className="text-xl lg:text-3xl font-outfit font-black text-black uppercase opacity-90 flex items-center gap-8 lg:gap-14">
              {tech} <span className="text-xs lg:text-sm">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 lg:py-40 scroll-mt-header">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading 
            title="Selected Projects" 
            subtitle="A curated list of technical challenges solved through innovative engineering and design."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={(p) => setSelectedProject(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-20 lg:py-40 bg-black/[0.01] dark:bg-white/[0.01] border-y border-black/5 dark:border-white/5 scroll-mt-header">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading title="Technical Mastery" subtitle="Progress bars represent time spent using each technology relative to total experience (3y 4m)." centered />
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {SKILL_GROUPS.map((group, i) => (
              <div key={i} className="glass-card p-8 lg:p-12 rounded-[40px] border border-black/5 dark:border-white/5 space-y-8 lg:space-y-12 shadow-sm transition-transform duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl lg:text-4xl font-outfit font-extrabold text-accent">{group.category}</h3>
                <div className="space-y-6 lg:space-y-10">
                  {group.skills.map((skill, si) => {
                    const progress = (skill.experienceMonths / TOTAL_EXPERIENCE_MONTHS) * 100;
                    return (
                      <div key={si} className="group">
                        <div className="flex justify-between items-center mb-3 lg:mb-5">
                          <div className="flex items-center gap-4 lg:gap-6">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 p-2.5 lg:p-3 bg-black/[0.03] dark:bg-white/[0.05] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-110 border border-transparent dark:group-hover:border-accent/10">
                                <img src={skill.logoUrl} alt={skill.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="font-bold text-base lg:text-xl text-dark dark:text-text-primary">{skill.name}</span>
                          </div>
                          <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-widest text-dark/40 dark:text-text-muted">{skill.context}</span>
                        </div>
                        <div className="h-1.5 lg:h-2 bg-black/[0.04] dark:bg-white/5 rounded-full overflow-hidden">
                          <MotionDiv 
                            initial={{ width: 0 }} 
                            whileInView={{ width: `${progress}%` }} 
                            viewport={{ once: true }} 
                            transition={{ duration: 2, ease: "easeOut", delay: si * 0.1 }}
                            className="h-full bg-accent shadow-[0_0_12px_rgba(134,183,57,0.3)]" 
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 lg:py-40 scroll-mt-header relative overflow-hidden">
        <div className="absolute top-1/4 left-10 opacity-[0.03] rotate-12 hidden xl:block text-dark dark:text-text-primary">
          <Cpu size={300} strokeWidth={1} />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-[0.03] -rotate-12 hidden xl:block text-dark dark:text-text-primary">
          <Globe size={300} strokeWidth={1} />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <SectionHeading title="Experience" centered />
          <div className="space-y-12 lg:space-y-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-dark/10 dark:before:via-white/10 before:to-transparent">
            {EXPERIENCES.map((exp, i) => (
              <MotionDiv 
                key={i} 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-surface shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                   <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-[0_0_12px_rgba(134,183,57,0.8)]" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] glass-card p-8 lg:p-14 rounded-[40px] border border-black/5 dark:border-white/5 ml-14 md:ml-0 hover:border-accent/40 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <h4 className="text-xl lg:text-3xl font-outfit font-black text-dark dark:text-text-primary leading-tight">{exp.role}</h4>
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 px-4 py-2 rounded-xl w-fit border border-accent/5">{exp.period}</span>
                  </div>
                  <div className="text-dark/40 dark:text-text-muted font-bold mb-8 flex items-center gap-3 text-base lg:text-lg">
                    <Terminal size={22} className="text-accent" /> {exp.company}
                  </div>
                  <ul className="space-y-5 lg:space-y-6">
                    {exp.impact.map((point, pi) => (
                      <li key={pi} className="flex gap-5 lg:gap-6 text-sm lg:text-base text-dark/60 dark:text-text-muted leading-relaxed">
                        <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:flex md:w-[calc(50%-4rem)] items-center justify-center p-10 select-none pointer-events-none">
                  <ExperienceDecoration type={i % 3} />
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 lg:py-40 bg-black/[0.01] dark:bg-white/[0.01] border-y border-black/5 dark:border-white/5 scroll-mt-header">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-10 mb-16 lg:mb-24">
            <SectionHeading title="Writings" subtitle="Sharing insights on software architecture, performance, and the future of the web." />
            <a href="#" className="flex items-center gap-3 text-accent font-black uppercase tracking-widest text-[11px] lg:text-sm hover:gap-6 transition-all mb-8 lg:mb-24 hover:text-accent-hover">View All Posts <ArrowRight size={20} /></a>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {BLOG_POSTS.map((post) => (
              <MotionDiv key={post.id} whileHover={{ y: -12 }} className="glass-card p-8 lg:p-12 rounded-[48px] border border-black/5 dark:border-white/5 space-y-8 lg:space-y-10 flex flex-col justify-between shadow-sm hover:shadow-2xl duration-500">
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-center gap-5 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] text-dark/30 dark:text-text-muted">
                    <span>{post.date}</span>
                    <div className="w-1.5 h-1.5 bg-black/10 dark:bg-white/10 rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="text-xl lg:text-3xl font-outfit font-bold leading-snug hover:text-accent transition-colors cursor-pointer text-dark dark:text-text-primary">{post.title}</h4>
                  <p className="text-dark/40 dark:text-text-muted text-sm lg:text-base leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
                <button className="flex items-center gap-3 text-dark/60 dark:text-text-muted text-[11px] font-bold uppercase tracking-widest group hover:text-accent transition-colors">
                  Read Article <BookOpen size={16} className="transition-transform group-hover:scale-110" />
                </button>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-40 scroll-mt-header">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-6xl mx-auto bg-white dark:bg-surface border border-black/5 dark:border-white/5 rounded-[48px] lg:rounded-[64px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="flex-1 p-10 md:p-16 lg:p-24 bg-accent text-black space-y-12 lg:space-y-16">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-black leading-[0.85] tracking-tighter text-center lg:text-left">Let's build <br className="hidden lg:block" /> something <br className="hidden lg:block" /> great.</h2>
              <p className="text-black/60 text-lg lg:text-xl font-medium leading-relaxed text-center lg:text-left">I'm currently available for freelance projects or full-time roles. If you have a project that needs a technical touch, let's talk.</p>
              <div className="space-y-8 lg:space-y-10 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-6 lg:gap-8 group cursor-pointer w-fit">
                  <div className="w-14 h-14 lg:w-20 lg:h-20 bg-black rounded-[28px] lg:rounded-[36px] flex items-center justify-center group-hover:rotate-12 transition-transform shadow-xl">
                    <Mail size={32} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] lg:text-[11px] font-black uppercase tracking-widest text-black/40">Email Me</div>
                    <div className="text-xl lg:text-3xl font-bold font-outfit">alex@rivera.dev</div>
                  </div>
                </div>
                <div className="flex gap-5">
                  {[Github, Linkedin, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="w-14 h-14 lg:w-18 lg:h-18 border-2 border-black/10 rounded-2xl lg:rounded-[28px] flex items-center justify-center hover:bg-black hover:text-accent transition-all duration-300 shadow-sm">
                      <Icon size={26} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-[1.4] p-10 md:p-16 lg:p-24 bg-white dark:bg-surface">
              <form className="space-y-10 lg:space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
                  <div className="space-y-3 lg:space-y-4">
                    <label className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em] text-dark/30 dark:text-text-muted">Your Name</label>
                    <input type="text" className="w-full bg-black/[0.02] dark:bg-white/[0.02] border-b border-black/10 dark:border-white/10 py-4 lg:py-5 focus:outline-none focus:border-accent transition-colors font-medium text-base lg:text-lg text-dark dark:text-text-primary" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <label className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em] text-dark/30 dark:text-text-muted">Email Address</label>
                    <input type="email" className="w-full bg-black/[0.02] dark:bg-white/[0.02] border-b border-black/10 dark:border-white/10 py-4 lg:py-5 focus:outline-none focus:border-accent transition-colors font-medium text-base lg:text-lg text-dark dark:text-text-primary" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  <label className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em] text-dark/30 dark:text-text-muted">Project Details</label>
                  <textarea rows={4} className="w-full bg-black/[0.02] dark:bg-white/[0.02] border-b border-black/10 dark:border-white/10 py-4 lg:py-5 focus:outline-none focus:border-accent transition-colors font-medium resize-none text-base lg:text-lg text-dark dark:text-text-primary" placeholder="Tell me about your vision..."></textarea>
                </div>
                <button type="submit" className="w-full py-6 lg:py-9 bg-dark dark:bg-accent text-white dark:text-black font-black uppercase tracking-[0.2em] text-[11px] lg:text-sm rounded-3xl flex items-center justify-center gap-5 hover:bg-accent-hover hover:shadow-2xl transition-all duration-500">
                  Send Inquiry <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 lg:py-24 border-t border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-14">
            <div 
              className="flex items-center gap-3 group relative cursor-pointer"
              onMouseEnter={handleFooterLogoHover}
            >
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6 shadow-md shadow-accent/20">
                <Zap size={24} className="text-black" />
              </div>
              <span className="text-2xl font-outfit font-bold tracking-tight text-dark dark:text-text-primary">Alex<span className="text-accent">.</span></span>
              <div className="absolute -top-6 -right-8 w-14 h-14 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <Lottie 
                  lottieRef={lottieFooterRef}
                  autoplay={false}
                  loop={false}
                  animationData={SPARKLE_ANIMATION}
                />
              </div>
            </div>
            <div className="flex gap-10 lg:gap-14 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em] text-dark/30 dark:text-text-muted">
              <a href="#" className="hover:text-accent transition-colors">Dribbble</a>
              <a href="#" className="hover:text-accent transition-colors">Behance</a>
              <a href="#" className="hover:text-accent transition-colors">Product Hunt</a>
            </div>
            <div className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em] text-dark/20 dark:text-text-muted/20">
              © 2024 Alex Rivera. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 40s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
