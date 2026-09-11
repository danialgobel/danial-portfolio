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
import { motion, useScroll, useSpring } from 'motion/react';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [currentTheme, setCurrentTheme] = useState<string>('theme-1');

  // Activate GSAP Timeline & ScrollTrigger Animations
  useGsapAnimations();

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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const trigger = scrollY + windowHeight * 0.35;

      const heroEl = document.getElementById('hero');
      const projectsEl = document.getElementById('projects');
      const skillsEl = document.getElementById('skills');
      const creativeEl = document.getElementById('creative');
      const aboutEl = document.getElementById('about');
      const contactEl = document.getElementById('contact');

      if (contactEl && trigger >= contactEl.offsetTop) {
        setCurrentTheme('theme-4');
        setActiveSection('contact');
      } else if (aboutEl && trigger >= aboutEl.offsetTop) {
        setCurrentTheme('theme-4');
        setActiveSection('about');
      } else if (creativeEl && trigger >= creativeEl.offsetTop) {
        setCurrentTheme('theme-3');
        setActiveSection('creative');
      } else if (skillsEl && trigger >= skillsEl.offsetTop) {
        setCurrentTheme('theme-3');
        setActiveSection('skills');
      } else if (projectsEl && trigger >= projectsEl.offsetTop) {
        setCurrentTheme('theme-2');
        setActiveSection('projects');
      } else {
        setCurrentTheme('theme-1');
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
  );
};

export default App;
