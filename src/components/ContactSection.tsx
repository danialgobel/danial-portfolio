import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Clock, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { motion } from 'motion/react';
import { sectionHeaderVariants, staggeredCardVariants } from '../utils/animationVariants';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'danialgobel26@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#0c0d0e]">
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
              <span>GET IN TOUCH &bull; COLLABORATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Let's Build Something Meaningful
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            Terbuka untuk kolaborasi proyek digital, perancangan web/mobile app, otomatisasi sistem, maupun kebutuhan video editing kreatif.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Direct Email & Status Card */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            
            {/* Primary Email Card */}
            <motion.div
              custom={0}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              className="rounded-2xl bg-gradient-to-b from-[#15161a] to-[#101114] border border-white/10 p-5 sm:p-7 flex flex-col gap-5 shadow-xl"
            >
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                <span className="uppercase tracking-widest">[ DIRECT INBOX ]</span>
                <span className="text-zinc-400 flex items-center gap-1.5 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  RESPONSIVE IN WIB (UTC+7)
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-zinc-400 uppercase">Primary Communication</span>
                <span className="text-xl sm:text-2xl font-mono font-semibold text-white break-all">
                  {email}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${email}?subject=Kolaborasi%20Proyek%20Digital%20—%20Danial%20Habib`}
                  className="px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Email Langsung</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span className="text-white">Email Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Salin Email</span>
                    </>
                  )}
                </motion.button>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 leading-relaxed font-normal">
                Anda juga dapat mengirimkan brief kebutuhan aplikasi, spesifikasi web, atau bahan mentah video untuk didiskusikan alur produksinya.
              </div>
            </motion.div>

            {/* Time & Location Badge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                custom={1}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggeredCardVariants}
                whileHover={{ y: -2 }}
                className="p-4 rounded-xl bg-[#121316] border border-white/5 flex items-center gap-3"
              >
                <MapPin className="w-4 h-4 text-zinc-400" />
                <div className="flex flex-col text-xs">
                  <span className="text-zinc-400 font-mono">Location Base</span>
                  <span className="text-white font-medium">Yogyakarta, Indonesia</span>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggeredCardVariants}
                whileHover={{ y: -2 }}
                className="p-4 rounded-xl bg-[#121316] border border-white/5 flex items-center gap-3"
              >
                <Clock className="w-4 h-4 text-zinc-400" />
                <div className="flex flex-col text-xs">
                  <span className="text-zinc-400 font-mono">Timezone</span>
                  <span className="text-white font-medium">WIB &bull; UTC+7</span>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Right Column: Professional Profiles & Links */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 px-1">
              Professional Profiles
            </span>

            <motion.a
              custom={0}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href="https://github.com/danialgobel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#131418] hover:bg-[#181a1f] border border-white/10 hover:border-white/20 transition-colors duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/10">
                  <TechIcon name="github" size={18} className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white group-hover:text-zinc-200">
                      GitHub
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-mono text-zinc-400 border border-white/5">
                      @danialgobel
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Repositories &bull; Codebases &bull; Projects
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </motion.a>

            <motion.a
              custom={1}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href="https://www.instagram.com/danialgobell/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#131418] hover:bg-[#181a1f] border border-white/10 hover:border-white/20 transition-colors duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/10">
                  <TechIcon name="instagram" size={18} className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white group-hover:text-zinc-200">
                      Instagram
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-mono text-zinc-400 border border-white/5">
                      @danialgobell
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Visual Works &bull; Personal &bull; Life Updates
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </motion.a>

            <motion.a
              custom={2}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href="https://www.tiktok.com/@danialgobelll"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#131418] hover:bg-[#181a1f] border border-white/10 hover:border-white/20 transition-colors duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/10">
                  <TechIcon name="tiktok" size={18} className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white group-hover:text-zinc-200">
                      TikTok
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-mono text-zinc-400 border border-white/5">
                      @danialgobelll
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Video Editing &bull; Creative Reels &bull; Content
                  </span>
                </div>
              </div>
            </motion.a>

          </div>

        </div>

      </div>
    </section>
  );
};
