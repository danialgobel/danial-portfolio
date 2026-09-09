import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, ChevronRight, X, Sparkles, Smartphone, Globe, Shield, Terminal, ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { TechIcon } from './TechIcons';
import { motion, AnimatePresence } from 'motion/react';
import { sectionHeaderVariants, featuredCardVariants, staggeredCardVariants } from '../utils/animationVariants';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const tanabrew = PROJECTS_DATA.find((p) => p.id === 'tanabrew')!;
  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== 'tanabrew');

  return (
    <section id="projects" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10">
        
        {/* Section Header */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeaderVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-white/10 pb-4 sm:pb-6"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
              <span className="w-2 h-2 bg-white rounded-none" />
              <span>PROJECT SHOWCASE &bull; CASE STUDIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Beberapa Projek Saya
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            Platform operasional bisnis multi-platform hingga web agency modern. Dikembangkan dengan arsitektur bersih dan performa tinggi.
          </p>
        </motion.div>

        {/* FEATURED PROJECT: TANABREW */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={featuredCardVariants}
          className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#15171c] to-[#101114] border border-white/10 p-4 sm:p-7 shadow-xl overflow-hidden group"
        >
          
          {/* Ambient Corner Spec Label */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/5 font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded bg-white text-black font-semibold text-[10px] uppercase tracking-wider">
                Featured Case Study
              </span>
              <span className="text-zinc-400 tracking-wider hidden sm:inline-block text-[11px]">
                [ TANABREW // MULTI-PLATFORM ]
              </span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>Web App &bull; Android &bull; iOS</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-7 mt-6">
            
            {/* Project Visual Presentation Mockup (TOP) */}
            <div className="w-full">
              <div className="relative rounded-2xl bg-[#0e1013] border border-white/10 p-3 sm:p-5 shadow-inner flex flex-col gap-3">
                
                {/* Simulated UI Window Bar */}
                <div className="flex items-center justify-between pb-2 border-b border-white/5 font-mono text-[10px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="ml-1.5 text-zinc-400 font-mono text-[10px]">tanabrew.app/dashboard</span>
                  </div>
                  <span className="text-zinc-400 text-[10px] font-mono">
                    v3.4.4 &bull; ACTIVE
                  </span>
                </div>

                {/* Real UI Screenshot Mockup */}
                <motion.div 
                  whileHover={{ scale: 1.008 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl bg-black group/preview cursor-pointer"
                  onClick={() => setSelectedProject(tanabrew)}
                >
                  <img
                    src="/images/tanabrew-preview.png"
                    alt="Tanabrew Dashboard System Preview"
                    className="w-full h-auto max-h-[440px] object-cover object-top filter brightness-95 group-hover/preview:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 sm:p-4 opacity-0 group-hover/preview:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-white flex items-center gap-2">
                      <Eye className="w-4 h-4 text-white" />
                      Klik untuk melihat studi kasus &amp; detail arsitektur Tanabrew
                    </span>
                  </div>
                </motion.div>

                {/* Dashboard Architecture Preview Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-0.5">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase">Module 01</span>
                    <span className="text-[11px] font-semibold text-white">Stock Ledger</span>
                    <span className="text-[10px] text-zinc-400">Green &amp; Roasted</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase">Module 02</span>
                    <span className="text-[11px] font-semibold text-white">Auto Invoice</span>
                    <span className="text-[10px] text-zinc-400">Kasir &amp; Faktur</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex flex-col gap-0.5">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase">Module 03</span>
                    <span className="text-[11px] font-semibold text-white">Multi-Device</span>
                    <span className="text-[10px] text-zinc-400">Web + Mobile</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Project Information & Specs (BOTTOM) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Title, Tagline, Description, Tech */}
              <div className="lg:col-span-7 flex flex-col gap-3.5">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                    Operasional Bisnis &bull; Roastery &amp; Inventory Management
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Tanabrew Platform
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400">
                    {tanabrew.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {tanabrew.description}
                </p>

                {/* Technologies Pill Group */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {tanabrew.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-zinc-300"
                    >
                      <TechIcon name={tech} size={12} className="w-3 h-3" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Features, Action Buttons, Security Disclaimer */}
              <div className="lg:col-span-5 flex flex-col gap-3.5">
                {/* Key Features Quick Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-zinc-300">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="text-[11px]">Real-time Stock Ledger</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="text-[11px]">Automated Invoice System</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <Smartphone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="text-[11px]">Android &amp; iOS Client</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <Globe className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="text-[11px]">Cloud Firestore Sync</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setSelectedProject(tanabrew)}
                    className="px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Baca Case Study</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>

                  {tanabrew.instagramUrl && (
                    <motion.a
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={tanabrew.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors text-xs font-mono uppercase tracking-wider flex items-center gap-2"
                    >
                      <span>Instagram Roastery</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>

                <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-2">
                  <Shield className="w-3 h-3 text-zinc-500" />
                  <span>Private Operations System &bull; Kredensial internal terlindungi</span>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

        {/* OTHER PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              custom={idx}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.12 }}
              variants={staggeredCardVariants}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-[#121316] border border-white/10 p-5 sm:p-6 flex flex-col justify-between gap-5 hover:border-white/20 transition-colors duration-200 group"
            >
              <div className="flex flex-col gap-4">
                
                {/* Meta Top Line */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-white/5 text-zinc-300 border border-white/10 uppercase tracking-wider text-[10px]">
                    {project.category}
                  </span>
                  <span className="text-zinc-500">{project.statusText}</span>
                </div>

                {/* Project Screenshot Thumbnail if available */}
                {project.imageSrc && (
                  project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 aspect-[16/9] group/img cursor-pointer block"
                    >
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="w-full h-full object-cover object-top filter brightness-90 group-hover/img:brightness-100 group-hover/img:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-[11px] font-mono text-white flex items-center gap-1.5">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                          Kunjungi Website Langsung ↗
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 aspect-[16/9] group/img cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="w-full h-full object-cover object-top filter brightness-90 group-hover/img:brightness-100 group-hover/img:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-[11px] font-mono text-white flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-zinc-300" />
                          Lihat Case Study Dossier
                        </span>
                      </div>
                    </div>
                  )
                )}

                {/* Title & Tagline */}
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] font-mono text-zinc-400"
                    >
                      <TechIcon name={tech} size={12} className="w-3 h-3" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono uppercase tracking-wider text-white hover:text-zinc-300 flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <span>Detail &bull; Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                  >
                    <span>Kunjungi Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* DETAILED CASE STUDY MODAL / DRAWER */}
      <AnimatePresence>
        {selectedProject && selectedProject.detailedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#14161a] border border-white/15 p-6 sm:p-8 shadow-2xl flex flex-col gap-6"
            >
              
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    Case Study Dossier &bull; {selectedProject.category}
                  </span>
                  <h3 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Tutup case study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Live Interface Snapshot */}
              {selectedProject.imageSrc && (
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/80 shadow-2xl">
                  <img
                    src={selectedProject.imageSrc}
                    alt={`${selectedProject.title} Interface Snapshot`}
                    className="w-full h-auto max-h-[380px] object-cover object-top"
                  />
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-zinc-400" />
                    <span>Verified Production Interface</span>
                  </div>
                </div>
              )}

              {/* Overview */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">01. Overview</span>
                <p className="text-sm text-zinc-200 leading-relaxed">
                  {selectedProject.detailedCaseStudy.overview}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                    Tantangan (Challenge)
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {selectedProject.detailedCaseStudy.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                    Solusi (Solution)
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {selectedProject.detailedCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">02. Fitur Utama</span>
                <ul className="space-y-2">
                  {selectedProject.detailedCaseStudy.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Architecture */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">03. Arsitektur Teknis</span>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1.5 text-xs font-mono text-zinc-300">
                  {selectedProject.detailedCaseStudy.architecture.map((arch, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-zinc-500">&bull;</span>
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2"
                  >
                    <span>Buka Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : selectedProject.instagramUrl ? (
                  <a
                    href={selectedProject.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2"
                  >
                    <span>Lihat Instagram Tanabrew</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-zinc-500">Internal System Case Study</span>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-wider text-zinc-300 cursor-pointer"
                >
                  Tutup
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
