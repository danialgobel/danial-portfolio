import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CreativeSection } from './components/CreativeSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { useGsapAnimations } from './hooks/useGsapAnimations';
import { initDiscordTracker } from './services/discordTracker';
import { motion, useScroll, useSpring } from 'motion/react';
import { ToastProvider } from './components/Toast';
import { Preloader } from './components/Preloader';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [currentTheme, setCurrentTheme] = useState<string>('theme-1');

  // Activate GSAP Timeline & ScrollTrigger Animations
  useGsapAnimations();

  // Initialize Discord Tracker & Card Spotlight Glow Tracker
  useEffect(() => {
    initDiscordTracker();

    const handlePointerMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement)?.closest?.('.spotlight-card') as HTMLElement | null;
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Scroll tracking for progress indicator
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* =========================================================================
     4-THEME SECTION CONTROLLER (Zero Jank / 120 FPS Native Performance)
     Theme 1: Light Alabaster (Hero)
     Theme 2: Deep Navy Sapphire (Projects / Tanabrew)
     Theme 3: Deep Cyber Pine (Skills & Creative Media / CapCut)
     Theme 4: Midnight Obsidian (About, Contact & Footer)
     ========================================================================= */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const trigger = scrollY + windowHeight * 0.35;

          const projectsEl = document.getElementById('projects');
          const skillsEl = document.getElementById('skills');
          const creativeEl = document.getElementById('creative');
          const aboutEl = document.getElementById('about');
          const contactEl = document.getElementById('contact');

          let newTheme = 'theme-1';
          let newSection = 'hero';

          if (contactEl && trigger >= contactEl.offsetTop) {
            newTheme = 'theme-4';
            newSection = 'contact';
          } else if (aboutEl && trigger >= aboutEl.offsetTop) {
            newTheme = 'theme-4';
            newSection = 'about';
          } else if (creativeEl && trigger >= creativeEl.offsetTop) {
            newTheme = 'theme-3';
            newSection = 'creative';
          } else if (skillsEl && trigger >= skillsEl.offsetTop) {
            newTheme = 'theme-3';
            newSection = 'skills';
          } else if (projectsEl && trigger >= projectsEl.offsetTop) {
            newTheme = 'theme-2';
            newSection = 'projects';
          }

          setCurrentTheme((prev) => (prev !== newTheme ? newTheme : prev));
          setActiveSection((prev) => (prev !== newSection ? newSection : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ToastProvider>
      {/* Real Asset Tracking Cinematic Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div
        id="app-theme-root"
        data-theme={currentTheme}
        className="relative min-h-screen flex flex-col font-sans overflow-x-hidden transition-colors duration-700"
      >
        {/* Dynamic Looping Ambient Aura Mesh & Beam */}
        <AnimatedBackground />

        {/* Scroll Progress Bar at the Top */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[var(--theme-accent)] via-[var(--theme-text-primary)] to-[var(--theme-accent)] origin-left z-[100] pointer-events-none"
        />

        {/* Floating Apple Glass Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Sections */}
        <main className="relative z-10 flex-1 w-full">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <CreativeSection />
          <AboutSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </ToastProvider>
  );
};

export default App;
