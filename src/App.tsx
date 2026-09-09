import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CreativeSection } from './components/CreativeSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useGsapAnimations } from './hooks/useGsapAnimations';
import { motion, useScroll, useSpring } from 'motion/react';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Activate GSAP Timeline & ScrollTrigger Animations
  useGsapAnimations();

  // Trending Smooth Motion Scroll Progress Indicator (60-120fps GPU accelerated)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = ['hero', 'projects', 'skills', 'creative', 'about', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f4f6] flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Smooth Motion Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-zinc-600 via-white to-zinc-400 origin-left z-[100] pointer-events-none"
      />

      {/* Dynamic Floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <CreativeSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
