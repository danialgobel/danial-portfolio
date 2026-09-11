import React, { useState, Suspense } from 'react';
import { ArrowUpRight, Download, Code2, Smartphone, Terminal, Film, MapPin } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { motion } from 'motion/react';
import { SMOOTH_EASE } from '../utils/animationVariants';
import { Lanyard } from './Lanyard/Lanyard';

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--theme-border-hairline)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 relative z-10">
        
        {/* =================================================================
            1. FIRST FOLD: Hero Headline + Profile Photo
            Clean, impressive, spacious — no distracting clutter
            ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: SMOOTH_EASE }}
          className="apple-glass rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          {/* Subtle top specular reflection line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10">
            
            {/* Left: Name & Roles (Developer, Creative Technologist, CapCut Video Specialist) */}
            <div className="flex flex-col gap-3 sm:gap-4 flex-1 text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold uppercase tracking-tight text-[var(--theme-text-primary)] leading-[0.98]">
                Danial Habib <br />
                <span className="text-[var(--theme-text-muted)] font-medium">Abdillah</span>
              </h1>

              {/* 3 Core Roles */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-[var(--theme-accent)] uppercase tracking-wider font-semibold">
                <span>Developer</span>
                <span className="text-[var(--theme-text-muted)]">&bull;</span>
                <span>Creative Technologist</span>
                <span className="text-[var(--theme-text-muted)]">&bull;</span>
                <span>CapCut Video Specialist</span>
              </div>

              {/* Quick Specialized Pills on Top Fold */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="apple-glass-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-medium">
                  <Code2 className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>Web &bull; React 19 &amp; TS</span>
                </span>

                <span className="apple-glass-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-medium">
                  <Smartphone className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>Mobile &bull; Android &amp; iOS</span>
                </span>

                <span className="apple-glass-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-medium">
                  <TechIcon name="capcut" size={13} className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>CapCut Desktop Editor &bull; 3Y+</span>
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[var(--theme-text-muted)] pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                <span>Yogyakarta, Indonesia &bull; Universitas Ahmad Dahlan (UAD)</span>
              </div>
            </div>

            {/* Right: Interactive 3D Lanyard ID Card with Gravity Drop */}
            <div className="shrink-0 flex flex-col items-center gap-2.5 w-full md:w-[320px] lg:w-[360px] xl:w-[400px]">
              <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden p-1 apple-glass border border-white/20 shadow-2xl flex items-center justify-center">
                <Lanyard
                  frontImage="/images/profile.jpg"
                  position={[0, 0, 11]}
                  gravity={[0, -28, 0]}
                  fov={28}
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* =================================================================
            2. SECOND FOLD (Scroll Down): Narrative Bio, Tech Badges & CTAs
            ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: SMOOTH_EASE }}
          className="apple-glass rounded-2xl p-5 sm:p-8 flex flex-col gap-4 relative overflow-hidden"
        >
          {/* Bio Narrative */}
          <p className="text-sm sm:text-base lg:text-lg text-[var(--theme-text-secondary)] font-normal leading-relaxed max-w-4xl">
            Mahasiswa Teknik Informatika di <strong className="text-[var(--theme-text-primary)] font-semibold">Universitas Ahmad Dahlan (UAD)</strong>, Yogyakarta. Berfokus pada perancangan dan pengembangan ekosistem digital terintegrasi — mulai dari platform Web modern berperforma tinggi, aplikasi Android &amp; iOS, hingga produksi video konten kreatif berkualitas tinggi menggunakan CapCut Desktop.
          </p>

          {/* Specialization Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="apple-glass-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-medium">
              <Code2 className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
              <span>Web &bull; React 19 &amp; TypeScript</span>
            </span>

            <span className="apple-glass-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-medium">
              <Smartphone className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
              <span>Mobile &bull; Android &amp; iOS Client</span>
            </span>

            <span className="apple-glass-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-medium">
              <TechIcon name="capcut" size={13} className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
              <span>CapCut Desktop Editor &bull; 3+ Tahun</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="apple-glass-button-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold shadow-lg transition-all"
            >
              <span>Lihat Projek</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
            </a>

            <a
              href="#contact"
              className="apple-glass-button-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all"
            >
              <span>Hubungi Saya</span>
            </a>

            <a
              href="#about"
              className="apple-glass-subtle inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold hover:border-[var(--theme-accent)] transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
              <span>Resume [CV]</span>
            </a>
          </div>
        </motion.div>

        {/* =================================================================
            3. FOUR CAPABILITY CARDS (Apple Glass Styling)
            ================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="apple-glass-subtle p-4 rounded-2xl flex flex-col gap-1">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--theme-accent)] font-semibold">
              <Code2 className="w-3.5 h-3.5" />
              <span>WEB PLATFORM</span>
            </div>
            <span className="font-display text-sm sm:text-base font-bold text-[var(--theme-text-primary)]">React 19 &bull; TS</span>
            <span className="text-[10px] text-[var(--theme-text-muted)]">Vite &bull; Tailwind CSS</span>
          </div>

          <div className="apple-glass-subtle p-4 rounded-2xl flex flex-col gap-1">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--theme-accent)] font-semibold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>MOBILE APPS</span>
            </div>
            <span className="font-display text-sm sm:text-base font-bold text-[var(--theme-text-primary)]">Android &bull; iOS</span>
            <span className="text-[10px] text-[var(--theme-text-muted)]">Client Ecosystem</span>
          </div>

          <div className="apple-glass-subtle p-4 rounded-2xl flex flex-col gap-1">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--theme-accent)] font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>CLOUD &amp; DB</span>
            </div>
            <span className="font-display text-sm sm:text-base font-bold text-[var(--theme-text-primary)]">Firebase Realtime</span>
            <span className="text-[10px] text-[var(--theme-text-muted)]">Firestore &bull; Auth</span>
          </div>

          <div className="apple-glass-subtle p-4 rounded-2xl flex flex-col gap-1">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--theme-accent)] font-semibold">
              <Film className="w-3.5 h-3.5" />
              <span>VIDEO EDITING</span>
            </div>
            <span className="font-display text-sm sm:text-base font-bold text-[var(--theme-text-primary)]">CapCut Desktop</span>
            <span className="text-[10px] text-[var(--theme-text-muted)]">3+ Tahun Pacing</span>
          </div>
        </div>

      </div>
    </section>
  );
};
