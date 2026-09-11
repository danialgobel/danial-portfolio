import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Clock, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
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
    <section id="contact" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--theme-border-hairline)]">
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
              <span>GET IN TOUCH // COLLABORATION &amp; INQUIRIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium uppercase tracking-tight text-[var(--theme-text-primary)]">
              Let's Build Something Meaningful
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[var(--theme-text-secondary)] font-normal leading-relaxed">
            Terbuka untuk kolaborasi proyek digital, perancangan web/mobile app, otomatisasi sistem, maupun kebutuhan video editing kreatif.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
          
          {/* Left Column: Direct Email & Status Card */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            
            {/* Primary Email Card with Official Google Gmail Logo (Apple Glass) */}
            <motion.div
              custom={0}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              className="rounded-3xl apple-glass p-6 sm:p-8 flex flex-col gap-5 shadow-2xl"
            >
              <div className="flex items-center justify-between font-mono text-xs text-[var(--theme-text-muted)] border-b border-[var(--theme-border-hairline)] pb-3.5">
                <div className="flex items-center gap-2">
                  <TechIcon name="gmail" size={20} className="w-5 h-5 shrink-0" />
                  <span className="uppercase tracking-widest font-semibold text-[var(--theme-text-primary)]">GOOGLE GMAIL</span>
                </div>
                <span className="text-[var(--theme-accent)] flex items-center gap-1.5 text-[11px] font-medium">
                  RESPONSIVE IN WIB (UTC+7)
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                  Official Google Email Address
                </span>
                <span className="text-xl sm:text-3xl font-mono font-semibold text-[var(--theme-text-primary)] break-all">
                  {email}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <motion.a
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${email}?subject=Kolaborasi%20Proyek%20Digital%20—%20Danial%20Habib`}
                  className="apple-glass-button-primary px-5 py-2.5 rounded-xl font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg"
                >
                  <Send className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>Kirim Email Langsung</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleCopyEmail}
                  className="apple-glass-button-secondary px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                      <span className="text-[var(--theme-accent)]">Email Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--theme-text-muted)]" />
                      <span>Salin Email</span>
                    </>
                  )}
                </motion.button>
              </div>

              <div className="p-3.5 rounded-2xl apple-glass-subtle flex items-center gap-2.5 text-xs text-[var(--theme-text-secondary)] font-mono">
                <Clock className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                <span>Respon cepat: Kurang dari 24 jam untuk inquiries proyek digital &amp; editing.</span>
              </div>
            </motion.div>

            {/* Academic & Geographic Anchor */}
            <motion.div
              custom={1}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              className="p-5 rounded-2xl apple-glass shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono"
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--theme-accent)]" />
                <div className="flex flex-col">
                  <span className="font-semibold text-[var(--theme-text-primary)]">Yogyakarta, Indonesia</span>
                  <span className="text-[10px] text-[var(--theme-text-muted)]">Universitas Ahmad Dahlan (UAD)</span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-lg bg-[var(--theme-accent-light)] text-[var(--theme-badge-text)] text-[10px] font-bold self-start sm:self-auto border border-[var(--theme-border-subtle)]">
                BASE OPERATIONAL
              </span>
            </motion.div>

          </div>

          {/* Right Column: Social Channels & Platform Matrix */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="font-mono text-xs text-[var(--theme-text-muted)] uppercase tracking-wider">
              Network Channels &amp; Repositories:
            </span>

            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((link, idx) => (
                <motion.a
                  key={link.platform}
                  custom={idx}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={staggeredCardVariants}
                  whileHover={{ x: 4, y: -1 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-2xl apple-glass hover:border-[var(--theme-accent)] transition-all shadow-md flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl apple-glass-subtle group-hover:scale-105 transition-all">
                      <TechIcon name={link.iconName} size={18} className="w-4.5 h-4.5 text-[var(--theme-text-primary)]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-display font-semibold uppercase text-[var(--theme-text-primary)] group-hover:text-[var(--theme-accent)] transition-colors">
                        {link.platform}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--theme-text-muted)]">
                        {link.label}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-[var(--theme-text-muted)] group-hover:text-[var(--theme-accent)] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
