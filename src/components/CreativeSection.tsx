import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CREATIVE_EXPERIENCE } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { motion } from 'motion/react';
import { sectionHeaderVariants, featuredCardVariants } from '../utils/animationVariants';

export const CreativeSection: React.FC = () => {
  return (
    <section id="creative" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
        
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
              <span>CREATIVE TECHNOLOGIST &bull; VIDEO PRODUCTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Video Editing &amp; Content Creation
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            Menghubungkan engineering dengan storytelling visual. 3+ tahun pengalaman video editing dan motion grafis menggunakan CapCut Desktop.
          </p>
        </motion.div>

        {/* Highlight Feature Card: Top-to-Bottom Layout with Smooth whileInView */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.12 }}
          variants={featuredCardVariants}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#14161a] to-[#0e1012] border border-white/10 p-4 sm:p-7 shadow-xl flex flex-col gap-6 sm:gap-8"
        >
          
          {/* 1. TOP: CapCut Desktop Workspace Preview */}
          <div className="w-full">
            <div className="rounded-2xl bg-[#0a0b0d] border border-white/10 p-3 sm:p-5 shadow-xl flex flex-col gap-3 group">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-2.5 border-b border-white/5 font-mono text-[10px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <TechIcon name="capcut" size={14} className="w-3.5 h-3.5 text-white" />
                  <span className="text-zinc-200 font-medium">CapCut Desktop Workspace</span>
                </div>
                <span className="text-zinc-400 text-[10px]">Real Project Draft // 4K 60FPS</span>
              </div>

              {/* Real Workspace Screenshot */}
              <motion.div 
                whileHover={{ scale: 1.008 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/60 cursor-pointer"
              >
                <img
                  src="/images/capcut-project-preview.png"
                  alt="CapCut Desktop Real Video Editing Timeline"
                  className="w-full h-auto max-h-[480px] object-cover object-top filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                />
              </motion.div>

              <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>Footage &bull; Effects &bull; Audio Keyframes &bull; Dynamic Motion</span>
                <span className="text-zinc-400">3Y+ Production Experience</span>
              </div>

            </div>
          </div>

          {/* 2. BOTTOM: Story, Capabilities Grid, and Action Links */}
          <div className="flex flex-col gap-5 pt-1">
            
            {/* Tagline & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono">
                <TechIcon name="capcut" size={16} className="w-4 h-4" />
                <span className="text-white font-medium">CapCut Desktop Specialist</span>
                <span className="text-zinc-500">&bull;</span>
                <span className="text-zinc-300">3+ Tahun Pengalaman</span>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                100+ Video Produksi Siap Tayang
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Pacing Presisi, Visual Motion &amp; Storytelling Konten
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal max-w-4xl">
                {CREATIVE_EXPERIENCE.description}
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {CREATIVE_EXPERIENCE.capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col gap-1.5 hover:border-white/15 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    <span>{cap.title}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons to View Creative Works */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/5">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.tiktok.com/@danialgobelll"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-zinc-200 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <TechIcon name="tiktok" size={14} className="w-3.5 h-3.5" />
                <span>Lihat Video di TikTok</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.instagram.com/danialgobell/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <TechIcon name="instagram" size={14} className="w-3.5 h-3.5" />
                <span>Instagram Reels</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
