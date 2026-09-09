import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Film, Layers, Smartphone, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  // Graceful state: if user places a real photo at /images/profile.jpg, it renders cleanly; otherwise sleek monogram fallback
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pt-28 sm:pt-32 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-grid-pattern transition-opacity duration-700"
    >
      {/* Subtle radial ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-white/[0.025] blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Profile Card Frame: Appears at the very beginning on mobile (order-first), and right column on desktop (lg:order-last) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="profile-card-container lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last"
          >
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-sm"
            >
              
              {/* Outer Editorial Container with Ambient Luminous Breathing */}
              <motion.div
                animate={{
                  borderColor: [
                    'rgba(255, 255, 255, 0.08)',
                    'rgba(255, 255, 255, 0.22)',
                    'rgba(255, 255, 255, 0.08)',
                  ],
                  boxShadow: [
                    '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
                    '0 14px 35px -8px rgba(255, 255, 255, 0.05)',
                    '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
                  ],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative rounded-2xl bg-[#131417] border border-white/10 p-2.5 sm:p-3.5 shadow-xl overflow-hidden group"
              >
                
                {/* Profile Portrait Frame - Ultra HD */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0d0e10] border border-white/5 flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src="/images/profile.jpg"
                      alt="Danial Habib Abdillah"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full p-6 flex flex-col items-center justify-between text-center bg-gradient-to-b from-white/[0.04] to-transparent">
                      <div className="flex flex-col items-center gap-2 my-auto">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center font-mono text-xl font-bold text-white">
                          DH
                        </div>
                        <span className="text-sm font-semibold text-white">Danial Habib</span>
                      </div>
                    </div>
                  )}
                </div>

              </motion.div>

            </motion.div>
          </motion.div>

          {/* Editorial & Value Proposition Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-5"
          >

            {/* Main Headline */}
            <div className="flex flex-col gap-1.5 items-center lg:items-start">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Danial Habib <br className="hidden sm:inline" />
                <span className="text-zinc-400 font-medium"> Abdillah</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Web &bull; Mobile &bull; Automation &bull; CapCut Editor
                </span>
              </div>
            </div>

            {/* Core Narrative / Bio Summary */}
            <p className="hero-bio text-sm sm:text-base lg:text-lg text-zinc-300 max-w-xl leading-relaxed font-normal">
              Mahasiswa Teknik Informatika di <strong className="text-white font-medium">Universitas Ahmad Dahlan (UAD)</strong>, Yogyakarta. Fokus mengubah ide kompleks menjadi produk digital fungsional — mulai dari platform Web, aplikasi Android &amp; iOS, otomasi cerdas, hingga produksi video visual bernarasi kuat.
            </p>

            {/* Key Expertise Matrix Badges */}
            <div className="hero-badge-grid grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-1 text-left">
              <motion.div whileHover={{ y: -2 }} className="p-2.5 rounded-xl bg-surface-subtle border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono">
                  <Code2 className="w-3.5 h-3.5 text-white" />
                  <span>Web App</span>
                </div>
                <span className="text-[11px] text-zinc-400">React &bull; TS &bull; Tailwind</span>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} className="p-2.5 rounded-xl bg-surface-subtle border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono">
                  <Smartphone className="w-3.5 h-3.5 text-white" />
                  <span>Mobile</span>
                </div>
                <span className="text-[11px] text-zinc-400">Android &amp; iOS</span>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} className="p-2.5 rounded-xl bg-surface-subtle border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono">
                  <Terminal className="w-3.5 h-3.5 text-white" />
                  <span>Cloud &amp; DB</span>
                </div>
                <span className="text-[11px] text-zinc-400">Firebase &bull; Firestore</span>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} className="p-2.5 rounded-xl bg-surface-subtle border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono">
                  <Film className="w-3.5 h-3.5 text-white" />
                  <span>Editing</span>
                </div>
                <span className="text-[11px] text-zinc-400">3Y CapCut Desktop</span>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-white/5 font-mono uppercase tracking-wider"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors flex items-center justify-center gap-2 font-mono uppercase tracking-wider"
              >
                <span>Contact &bull; Hire</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </motion.a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
