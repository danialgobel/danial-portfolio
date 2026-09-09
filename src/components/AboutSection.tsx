import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { sectionHeaderVariants, staggeredCardVariants } from '../utils/animationVariants';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#0e0f12]">
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
              <span className="w-2 h-2 bg-white" />
              <span>ABOUT &bull; BACKGROUND &amp; PHILOSOPHY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Behind The Craft
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span>Yogyakarta, Indonesia &bull; Universitas Ahmad Dahlan</span>
          </div>
        </motion.div>

        {/* Structured Bio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            
            {/* Identity & Academic Context */}
            <motion.div
              custom={0}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-4 sm:p-6 rounded-2xl bg-[#131418] border border-white/10 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Mahasiswa Teknik Informatika
                  </h3>
                  <p className="text-[11px] font-mono text-zinc-400">
                    Universitas Ahmad Dahlan (UAD), Yogyakarta
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Halo, saya <strong className="text-white font-medium">Danial Habib Abdillah</strong>. Memiliki ketertarikan mendalam pada programming, web development, mobile app development, UI/UX, automation, dan creative technology. Saya terbiasa mengawal proyek dari riset kebutuhan, perancangan antarmuka, hingga penulisan kode fungsional.
              </p>
            </motion.div>

            {/* Core Philosophy Callout */}
            <motion.div
              custom={1}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 flex flex-col gap-2"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
                Prinsip Pengembangan (Philosophy)
              </span>
              <blockquote className="text-sm sm:text-base text-white font-medium leading-relaxed italic">
                "{PERSONAL_INFO.aboutQuote}"
              </blockquote>
            </motion.div>

          </div>

          {/* Pillars Breakdown Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            
            {/* Pillar 01: What I Build */}
            <motion.div
              custom={0}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ x: 4 }}
              className="p-3.5 sm:p-4 rounded-xl bg-[#131418] border border-white/10 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  What I Build
                </span>
                <span className="text-zinc-500">[ 01 ]</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Website interaktif, Web App dinamis (React, Vite, TypeScript), serta aplikasi mobile Android dan iOS yang siap mendukung kebutuhan bisnis riil.
              </p>
            </motion.div>

            {/* Pillar 02: Design & Prototyping */}
            <motion.div
              custom={1}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ x: 4 }}
              className="p-3.5 sm:p-4 rounded-xl bg-[#131418] border border-white/10 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  UI/UX &amp; Prototyping
                </span>
                <span className="text-zinc-500">[ 02 ]</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Menggunakan Figma untuk memetakan alur pengguna (user flow), merancang wireframe, dan membangun prototype interaktif sebelum proses coding dimulai.
              </p>
            </motion.div>

            {/* Pillar 03: Video Editing & Content */}
            <motion.div
              custom={2}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ x: 4 }}
              className="p-3.5 sm:p-4 rounded-xl bg-[#131418] border border-white/10 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  3 Years Video Production
                </span>
                <span className="text-zinc-500">[ 03 ]</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                3+ tahun menggunakan CapCut Desktop untuk memotong footage, menjaga ritme video, membuat motion sederhana, dan merilis konten promosi digital.
              </p>
            </motion.div>

            {/* Pillar 04: Automation & AI Exploration */}
            <motion.div
              custom={3}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ x: 4 }}
              className="p-3.5 sm:p-4 rounded-xl bg-[#131418] border border-white/10 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Automation &amp; AI
                </span>
                <span className="text-zinc-500">[ 04 ]</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Mengeksplorasi script otomasi cerdas dan pemanfaatan AI-assisted development guna mempercepat delivery proyek tanpa mengorbankan kualitas kode.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
