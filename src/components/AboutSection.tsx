import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, MapPin, Sparkles, Terminal, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { sectionHeaderVariants, staggeredCardVariants } from '../utils/animationVariants';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--theme-border-hairline)]">
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
              <span>BACKGROUND // PHILOSOPHY &amp; PROFILE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium uppercase tracking-tight text-[var(--theme-text-primary)]">
              Behind The Engineering
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--theme-text-muted)]">
            <MapPin className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
            <span>YOGYAKARTA, ID &bull; UNIVERSITAS AHMAD DAHLAN</span>
          </div>
        </motion.div>

        {/* Structured Bio Cards Grid (Apple Glass) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Identity & Academic Context */}
            <motion.div
              custom={0}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-6 sm:p-8 rounded-3xl apple-glass shadow-xl flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 pb-3.5 border-b border-[var(--theme-border-hairline)]">
                <div className="p-2.5 rounded-xl apple-glass-subtle">
                  <GraduationCap className="w-5 h-5 text-[var(--theme-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-display font-semibold uppercase text-[var(--theme-text-primary)] tracking-tight">
                    Mahasiswa Teknik Informatika
                  </h3>
                  <p className="text-xs font-mono text-[var(--theme-text-muted)]">
                    Universitas Ahmad Dahlan (UAD), Yogyakarta
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed font-normal">
                Halo, saya <strong className="text-[var(--theme-text-primary)] font-semibold">Danial Habib Abdillah</strong>. Memiliki ketertarikan mendalam pada software architecture, web systems, mobile applications (Android &amp; iOS), automated tools, serta multimedia motion. Terbiasa menangani siklus hidup proyek digital dari perancangan awal antarmuka, pembuatan database realtime, hingga peluncuran sistem fungsional siap pakai.
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
              className="p-6 sm:p-8 rounded-3xl apple-glass-subtle shadow-xl flex flex-col gap-3"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--theme-accent)] font-semibold">
                PRINSIP PENGEMBANGAN // CORE DOGMA
              </span>
              <blockquote className="text-sm sm:text-base text-[var(--theme-text-primary)] font-display font-medium leading-relaxed italic">
                "{PERSONAL_INFO.aboutQuote}"
              </blockquote>
            </motion.div>

          </div>

          {/* Pillars Breakdown Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Pillar 01: What I Build */}
            <motion.div
              custom={0}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ y: -2 }}
              className="p-5 rounded-2xl apple-glass shadow-lg flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[var(--theme-text-primary)] uppercase">
                <Code2 className="w-4 h-4 text-[var(--theme-accent)]" />
                <span>Full Lifecycle Engineering</span>
              </div>
              <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                Membangun arsitektur frontend teruji dengan React 19, TypeScript, dan Tailwind CSS, terhubung langsung ke Firebase Firestore dengan latensi rendah.
              </p>
            </motion.div>

            {/* Pillar 02: Multi-Platform */}
            <motion.div
              custom={1}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ y: -2 }}
              className="p-5 rounded-2xl apple-glass shadow-lg flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[var(--theme-text-primary)] uppercase">
                <Terminal className="w-4 h-4 text-[var(--theme-accent)]" />
                <span>Multi-Device Ecosystem</span>
              </div>
              <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                Menghubungkan aplikasi web desktop manajemen dengan klien mobile iOS dan Android dalam basis data cloud terpusat.
              </p>
            </motion.div>

            {/* Pillar 03: Visual Storytelling */}
            <motion.div
              custom={2}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ y: -2 }}
              className="p-5 rounded-2xl apple-glass shadow-lg flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[var(--theme-text-primary)] uppercase">
                <Sparkles className="w-4 h-4 text-[var(--theme-accent)]" />
                <span>Visual Rhythm &amp; Polish</span>
              </div>
              <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                Memadukan motion micro-interactions presisi di web serta ritme pacing video sinematik melalui CapCut Desktop.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
