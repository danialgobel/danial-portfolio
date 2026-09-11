import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, ChevronRight, X, Smartphone, Globe, ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { TechIcon } from './TechIcons';
import { motion, AnimatePresence } from 'motion/react';
import { sectionHeaderVariants, featuredCardVariants, staggeredCardVariants, SMOOTH_EASE } from '../utils/animationVariants';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const tanabrew = PROJECTS_DATA.find((p) => p.id === 'tanabrew')!;
  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== 'tanabrew');

  return (
    <section id="projects" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--theme-border-hairline)]">
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
              <span>PORTFOLIO // SELECTED WORKS &amp; SYSTEMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium uppercase tracking-tight text-[var(--theme-text-primary)]">
              Selected Systems &amp; Case Studies
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[var(--theme-text-secondary)] font-normal leading-relaxed">
            Platform operasional bisnis multi-platform hingga web agency modern. Dikembangkan dengan arsitektur bersih, performa tinggi, dan ketahanan sistem.
          </p>
        </motion.div>

        {/* FEATURED PROJECT: TANABREW (Apple Glass Edition) */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={featuredCardVariants}
          className="relative rounded-3xl apple-glass p-5 sm:p-8 shadow-2xl overflow-hidden group"
        >
          {/* Top Spec Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-[var(--theme-border-hairline)] font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[var(--theme-accent-light)] text-[var(--theme-badge-text)] font-bold text-[10px] uppercase tracking-wider border border-[var(--theme-border-subtle)]">
                FEATURED CASE STUDY
              </span>
              <span className="text-[var(--theme-text-muted)] tracking-wider hidden sm:inline-block text-[11px]">
                [ TANABREW // MULTI-PLATFORM ECOSYSTEM ]
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[var(--theme-accent)] font-medium text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
              <span>Web App &bull; Android &bull; iOS Client</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:gap-6 mt-4 sm:mt-5">
            
            {/* 1. PROJECT HEADER & DESCRIPTION FIRST (TULISAN / PENJELASAN DULU) */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[var(--theme-text-muted)]">
                  Operasional Bisnis &bull; Roastery &amp; Inventory Management
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-[var(--theme-text-primary)] tracking-tight uppercase">
                  Tanabrew Platform
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[var(--theme-accent)] font-medium">
                  {tanabrew.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)] leading-relaxed font-normal max-w-4xl">
                {tanabrew.description}
              </p>

              {/* Technologies Pill Group */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {tanabrew.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="apple-glass-pill inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono"
                  >
                    <TechIcon name={tech} size={12} className="w-3 h-3 text-[var(--theme-accent)]" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 2. REAL UI SCREENSHOT MOCKUP (GAMBAR DI BAWAH PENJELASAN) */}
            <div className="w-full">
              <div className="relative rounded-2xl apple-glass-subtle p-3 sm:p-4 shadow-sm flex flex-col gap-3">
                
                {/* Simulated Browser Bar */}
                <div className="flex items-center justify-between pb-2 border-b border-[var(--theme-border-hairline)] font-mono text-[10px] text-[var(--theme-text-muted)]">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A]/80 shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EAB308]/80 shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/80 shrink-0" />
                    <span className="ml-2 text-[var(--theme-text-secondary)] font-mono text-[10px] truncate">tanabrew.app/dashboard</span>
                  </div>
                  <span className="text-[var(--theme-accent)] font-semibold text-[9px] sm:text-[10px] font-mono shrink-0">
                    v3.4.4 &bull; LIVE PRODUCTION
                  </span>
                </div>

                {/* Screenshot Frame */}
                <motion.div 
                  whileHover={{ scale: 1.004 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative rounded-xl overflow-hidden border border-white/20 shadow-lg bg-black group/preview cursor-pointer"
                  onClick={() => setSelectedProject(tanabrew)}
                >
                  <img
                    src="/images/tanabrew-preview.png"
                    alt="Tanabrew Dashboard System Preview"
                    className="w-full h-auto max-h-[380px] object-cover object-top filter brightness-95 group-hover/preview:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-3 sm:p-4 opacity-0 group-hover/preview:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-white flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[var(--theme-accent)]" />
                      Klik untuk melihat studi kasus &amp; detail arsitektur Tanabrew
                    </span>
                  </div>
                </motion.div>

                {/* Architecture Modules Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-0.5">
                  <div className="p-2.5 rounded-xl apple-glass border border-[var(--theme-border-hairline)] flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-[var(--theme-text-muted)] uppercase">Module 01</span>
                    <span className="text-xs font-semibold text-[var(--theme-text-primary)]">Stock Ledger System</span>
                    <span className="text-[10px] text-[var(--theme-text-secondary)]">Green &amp; Roasted Beans</span>
                  </div>
                  <div className="p-2.5 rounded-xl apple-glass border border-[var(--theme-border-hairline)] flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-[var(--theme-text-muted)] uppercase">Module 02</span>
                    <span className="text-xs font-semibold text-[var(--theme-text-primary)]">Auto Invoice Engine</span>
                    <span className="text-[10px] text-[var(--theme-text-secondary)]">Kasir &amp; Faktur Transaksi</span>
                  </div>
                  <div className="p-2.5 rounded-xl apple-glass border border-[var(--theme-border-hairline)] flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-[var(--theme-text-muted)] uppercase">Module 03</span>
                    <span className="text-xs font-semibold text-[var(--theme-text-primary)]">Multi-Device Client</span>
                    <span className="text-[10px] text-[var(--theme-text-secondary)]">Web App + Mobile Sync</span>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. KEY FEATURES CHECKLIST & ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs text-[var(--theme-text-secondary)] flex-1">
                <div className="flex items-center gap-1.5 p-2 rounded-xl apple-glass-subtle">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0" />
                  <span className="text-[10px] sm:text-[11px]">Real-time Ledger</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl apple-glass-subtle">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0" />
                  <span className="text-[10px] sm:text-[11px]">Auto Invoice</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl apple-glass-subtle">
                  <Smartphone className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0" />
                  <span className="text-[10px] sm:text-[11px]">Android &amp; iOS</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl apple-glass-subtle">
                  <Globe className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0" />
                  <span className="text-[10px] sm:text-[11px]">Cloud Firestore</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 shrink-0">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setSelectedProject(tanabrew)}
                  className="apple-glass-button-primary px-4 py-2.5 rounded-xl font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <span>Baca Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                </motion.button>

                {tanabrew.instagramUrl && (
                  <motion.a
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    href={tanabrew.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-glass-button-secondary px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 text-[var(--theme-accent)]" />
                  </motion.a>
                )}
              </div>
            </div>

          </div>
        </motion.div>

        {/* OTHER PROJECTS GRID (Apple Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              custom={idx}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.12 }}
              variants={staggeredCardVariants}
              whileHover={{ y: -3 }}
              className="rounded-2xl apple-glass p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col gap-3">
                
                {/* Meta Top Line */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-md bg-[var(--theme-accent-light)] text-[var(--theme-badge-text)] uppercase tracking-wider text-[10px] font-semibold border border-[var(--theme-border-subtle)]">
                    {project.category}
                  </span>
                  <span className="text-[var(--theme-text-muted)] text-[10px]">{project.statusText}</span>
                </div>

                {/* 1. PROJECT TITLE & DESCRIPTION FIRST */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-[var(--theme-text-primary)] tracking-tight uppercase group-hover:text-[var(--theme-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--theme-accent)]">
                    {project.tagline}
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)] leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>

                {/* 2. PROJECT SCREENSHOT BELOW DESCRIPTION */}
                {project.imageSrc && (
                  project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative rounded-xl overflow-hidden border border-white/20 bg-black aspect-[16/9] group/img cursor-pointer block shadow-md"
                    >
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="w-full h-full object-cover object-top filter brightness-95 group-hover/img:brightness-100 group-hover/img:scale-104 transition-all duration-300"
                      />
                      <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white font-mono text-[9px] flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity border border-white/20">
                        <span>Live Preview</span>
                        <ArrowUpRight className="w-3 h-3 text-[var(--theme-accent)]" />
                      </div>
                    </a>
                  ) : (
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative rounded-xl overflow-hidden border border-white/20 bg-black aspect-[16/9] cursor-pointer group/img shadow-md"
                    >
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="w-full h-full object-cover object-top filter brightness-95 group-hover/img:brightness-100 group-hover/img:scale-104 transition-all duration-300"
                      />
                    </div>
                  )
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-1 pt-0.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="apple-glass-pill inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-mono"
                    >
                      <TechIcon name={tech} size={11} className="w-3 h-3 text-[var(--theme-accent)]" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-[var(--theme-border-hairline)]">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[var(--theme-text-primary)] hover:text-[var(--theme-accent)] font-semibold transition-colors cursor-pointer"
                >
                  <span>Lihat Detail</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-glass-button-primary inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-lg shadow-sm"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3 text-[var(--theme-accent)]" />
                    </a>
                  )}

                  {project.instagramUrl && (
                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-glass-button-secondary inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-lg"
                    >
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3 text-[var(--theme-accent)]" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal (Apple Glass) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/65 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: SMOOTH_EASE }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto apple-glass rounded-3xl p-6 sm:p-8 flex flex-col gap-5 z-10 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-[var(--theme-border-hairline)] pb-3.5">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[var(--theme-accent-light)] text-[var(--theme-badge-text)] font-mono text-[10px] font-bold uppercase border border-[var(--theme-border-subtle)]">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-[var(--theme-text-muted)]">{selectedProject.statusText}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--theme-text-primary)] uppercase">
                    {selectedProject.title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--theme-accent)]">{selectedProject.tagline}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-xl hover:bg-white/10 text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex flex-col gap-4 text-sm text-[var(--theme-text-secondary)] leading-relaxed">
                <p>{selectedProject.description}</p>

                {selectedProject.detailedCaseStudy?.keyFeatures && (
                  <div className="flex flex-col gap-2 pt-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--theme-text-primary)] font-semibold">
                      Fitur &amp; Arsitektur Unggulan:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.detailedCaseStudy.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl apple-glass-subtle text-xs font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-col gap-2 pt-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--theme-text-primary)] font-semibold">
                    Teknologi yang Digunakan:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="apple-glass-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono"
                      >
                        <TechIcon name={tech} size={13} className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-3 pt-3.5 border-t border-[var(--theme-border-hairline)]">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="apple-glass-button-secondary px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold"
                >
                  Tutup
                </button>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-glass-button-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold shadow-lg"
                  >
                    <span>Kunjungi Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
