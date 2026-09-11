import React from 'react';
import { Film, Sliders, CheckCircle2 } from 'lucide-react';
import { CREATIVE_EXPERIENCE } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { motion } from 'motion/react';
import { sectionHeaderVariants, featuredCardVariants } from '../utils/animationVariants';

export const CreativeSection: React.FC = () => {
  return (
    <section id="creative" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--theme-border-hairline)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
        
        {/* Section Header */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeaderVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 border-b border-[var(--theme-border-hairline)] pb-4 sm:pb-5"
        >
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[var(--theme-accent)]">
              <span className="w-2 h-2 bg-[var(--theme-accent)] rounded-full" />
              <span>CREATIVE PRODUCTION // VIDEO EDITING &amp; MOTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium uppercase tracking-tight text-[var(--theme-text-primary)]">
              Video Production &amp; Content
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[var(--theme-text-secondary)] font-normal leading-relaxed">
            Menghubungkan engineering dengan visual storytelling. 3+ tahun pengalaman video editing, sound design, dan motion dinamis menggunakan CapCut Desktop.
          </p>
        </motion.div>

        {/* Highlight Feature Card (Apple Glass) */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.12 }}
          variants={featuredCardVariants}
          className="rounded-3xl apple-glass p-5 sm:p-8 shadow-2xl flex flex-col gap-5 sm:gap-6"
        >
          
          {/* 1. TOP: CapCut Desktop Workspace Preview */}
          <div className="w-full">
            <div className="rounded-2xl apple-glass-subtle p-3 sm:p-5 shadow-sm flex flex-col gap-3 group">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-2.5 border-b border-[var(--theme-border-hairline)] font-mono text-[10px] text-[var(--theme-text-muted)]">
                <div className="flex items-center gap-2">
                  <TechIcon name="capcut" size={14} className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span className="text-[var(--theme-text-primary)] font-semibold">CapCut Desktop Production Workspace</span>
                </div>
                <span className="text-[var(--theme-accent)] font-medium text-[10px]">Real Project Draft // 4K 60FPS</span>
              </div>

              {/* Real Workspace Screenshot */}
              <motion.div 
                whileHover={{ scale: 1.006 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative rounded-xl overflow-hidden border border-white/20 shadow-lg bg-black cursor-pointer"
              >
                <img
                  src="/images/capcut-project-preview.png"
                  alt="CapCut Desktop Real Video Editing Timeline"
                  className="w-full h-auto max-h-[480px] object-cover object-top filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                />
              </motion.div>

              <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[var(--theme-text-muted)]">
                <span>Footage Cutting &bull; Audio Keyframes &bull; Color Grading &bull; Dynamic Typography</span>
                <span className="text-[var(--theme-accent)] font-semibold">3Y+ Production Experience</span>
              </div>

            </div>
          </div>

          {/* 2. BOTTOM: Story, Capabilities Grid, and Action Links */}
          <div className="flex flex-col gap-5 pt-1">
            
            {/* Tagline & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[var(--theme-accent-light)] text-[var(--theme-badge-text)] border border-[var(--theme-border-subtle)] text-xs font-mono font-semibold">
                <TechIcon name="capcut" size={16} className="w-4 h-4 text-[var(--theme-accent)]" />
                <span>CapCut Desktop Specialist</span>
                <span className="text-[var(--theme-accent)]">&bull;</span>
                <span>3+ Tahun Pengalaman</span>
              </div>
              <span className="text-xs font-mono text-[var(--theme-text-muted)]">
                100+ Video Produksi Siap Tayang
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl font-display font-semibold uppercase text-[var(--theme-text-primary)] tracking-tight">
                Pacing Presisi, Visual Motion &amp; Storytelling Konten
              </h3>
              <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)] leading-relaxed font-normal max-w-4xl">
                {CREATIVE_EXPERIENCE.description}
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
              {CREATIVE_EXPERIENCE.capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="p-4 rounded-2xl apple-glass-subtle flex flex-col gap-1.5 shadow-md"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--theme-text-primary)] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
                    <span>{cap.title}</span>
                  </div>
                  <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
