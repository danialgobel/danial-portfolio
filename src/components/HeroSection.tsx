import React, { useState, useEffect, Suspense } from 'react';
import { ArrowUpRight, Download, Code2, Smartphone, Film, MapPin, Sparkles, Layers } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { motion } from 'motion/react';
import { SMOOTH_EASE } from '../utils/animationVariants';
import { ResumeModal } from './ResumeModal';

// Code-split heavy 3D Three.js & Rapier physics canvas
const Lanyard = React.lazy(() =>
  import('./Lanyard/Lanyard').then((m) => ({ default: m.Lanyard }))
);

export const HeroSection: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit'
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime('WIB');
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--theme-border-hairline)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 relative z-10">
        
        {/* =================================================================
            1. HERO STAGE: Unified Editorial Card + Interactive 3D Lanyard
            Instant LCP rendering, cohesive layout, zero AI clutter
            ================================================================= */}
        <div className="apple-glass spotlight-card rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle top specular reflection line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left: Editorial Hero Content */}
            <div className="flex flex-col gap-4 sm:gap-5 flex-1 text-left">
              
              {/* Role Tag & Availability */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="apple-glass-pill inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[var(--theme-text-primary)] font-medium">AVAILABLE FOR PROJECTS</span>
                  {localTime && (
                    <>
                      <span className="text-[var(--theme-text-muted)]">&bull;</span>
                      <span className="text-[var(--theme-accent)] font-semibold">{localTime} WIB</span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--theme-text-muted)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>Yogyakarta, ID &bull; UAD</span>
                </div>
              </div>

              {/* Primary Name Display */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-[var(--theme-text-primary)] leading-[0.96]">
                Danial Habib <br />
                <span className="text-[var(--theme-text-muted)] font-medium">Abdillah</span>
              </h1>

              {/* Core Roles Sub-headline */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-[var(--theme-accent)] uppercase tracking-wider font-semibold">
                <span>Informatics Student</span>
                <span className="text-[var(--theme-text-muted)]">&bull;</span>
                <span>Digital Creator</span>
                <span className="text-[var(--theme-text-muted)]">&bull;</span>
                <span>CapCut Video Specialist</span>
              </div>

              {/* Natural Narrative Bio */}
              <p className="text-sm sm:text-base lg:text-lg text-[var(--theme-text-secondary)] font-normal leading-relaxed max-w-2xl">
                Mahasiswa Teknik Informatika di <strong className="text-[var(--theme-text-primary)] font-semibold">Universitas Ahmad Dahlan (UAD)</strong>. Berfokus merancang ekosistem produk digital yang fungsional: dari aplikasi Web performa tinggi, aplikasi Mobile (Android &amp; iOS), hingga produksi video kreatif dengan 3+ tahun jam terbang CapCut Desktop.
              </p>

              {/* Call to Actions */}
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

                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="apple-glass-subtle inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold hover:border-[var(--theme-accent)] transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>Resume [CV]</span>
                </button>
              </div>

            </div>

            {/* Right: Interactive 3D Lanyard ID Card with Rapier Physics */}
            <div className="shrink-0 flex flex-col items-center gap-2.5 w-full md:w-[320px] lg:w-[360px] xl:w-[400px]">
              <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] lg:h-[500px] rounded-3xl overflow-hidden p-1 apple-glass border border-white/20 shadow-2xl flex items-center justify-center">
                <Suspense
                  fallback={
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-36 h-48 rounded-2xl overflow-hidden border border-white/30 shadow-xl mb-4 relative bg-slate-900">
                        <img
                          src="/images/profile.webp"
                          alt="Danial Habib Abdillah"
                          className="w-full h-full object-cover object-top opacity-90"
                        />
                        <div className="absolute inset-x-0 bottom-0 py-1 bg-black/75 text-[9px] font-mono text-white/90">
                          DANIAL GOBEL
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[var(--theme-accent)] flex items-center gap-2 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)] animate-pulse" />
                        <span>Menyiapkan 3D Pass...</span>
                      </span>
                    </div>
                  }
                >
                  <Lanyard
                    frontImage="/images/profile.webp"
                    position={[0, 0, 11]}
                    gravity={[0, -28, 0]}
                    fov={28}
                  />
                </Suspense>
              </div>

              {/* Subtle Interactive Instruction */}
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--theme-text-muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] animate-ping" />
                <span>Tarik &amp; ayunkan kartu ID 3D</span>
              </div>
            </div>

          </div>
        </div>

        {/* Resume Modal */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        {/* =================================================================
            2. THREE REFINED CORE PILLARS (Clean, Breathing & Non-Redundant)
            ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="apple-glass-subtle p-5 rounded-2xl flex flex-col gap-2 transition-all hover:border-[var(--theme-accent)]">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--theme-accent)] font-semibold">
              <Code2 className="w-4 h-4" />
              <span>WEB &bull; REACT 19 &amp; TS</span>
            </div>
            <h3 className="font-display text-base font-bold text-[var(--theme-text-primary)]">
              Modern Web Architecture
            </h3>
            <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
              Arsitektur web cepat dengan React 19, TypeScript, dan Tailwind CSS terintegrasi database realtime.
            </p>
          </div>

          <div className="apple-glass-subtle p-5 rounded-2xl flex flex-col gap-2 transition-all hover:border-[var(--theme-accent)]">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--theme-accent)] font-semibold">
              <Smartphone className="w-4 h-4" />
              <span>MOBILE &bull; ANDROID &amp; IOS</span>
            </div>
            <h3 className="font-display text-base font-bold text-[var(--theme-text-primary)]">
              Multi-Platform Ecosystem
            </h3>
            <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
              Aplikasi pendukung bisnis operasional dan roastery (Tanabrew) yang sinkron lintas perangkat.
            </p>
          </div>

          <div className="apple-glass-subtle p-5 rounded-2xl flex flex-col gap-2 transition-all hover:border-[var(--theme-accent)]">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--theme-accent)] font-semibold">
              <Film className="w-4 h-4" />
              <span>VIDEO &bull; CAPCUT DESKTOP</span>
            </div>
            <h3 className="font-display text-base font-bold text-[var(--theme-text-primary)]">
              3+ Tahun Creative Production
            </h3>
            <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
              Pacing presisi, ritme audio, dan storytelling visual untuk konten digital dan arsip sinematik.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
