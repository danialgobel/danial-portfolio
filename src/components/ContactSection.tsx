import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Clock, MapPin, Send, MessageSquare, Share2, Loader2, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { motion } from 'motion/react';
import { sectionHeaderVariants, staggeredCardVariants } from '../utils/animationVariants';
import { useToast } from './Toast';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const { showToast } = useToast();
  const email = 'danialgobel26@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    showToast('Alamat email berhasil disalin!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPortfolioLink = () => {
    const url = window.location.origin || 'https://danial-portfolio-inky.vercel.app';
    navigator.clipboard.writeText(url);
    showToast('Tautan portofolio berhasil disalin!');
  };

  const handleShareWhatsApp = () => {
    const url = window.location.origin || 'https://danial-portfolio-inky.vercel.app';
    const text = encodeURIComponent(
      `Halo, silakan cek portofolio Danial Habib Abdillah (Informatics Student & Digital Creator): ${url}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleSubmitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      showToast('Mohon lengkapi semua kolom formulir.', 'info');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'MESSAGE',
          senderName: formData.name.trim(),
          senderContact: formData.contact.trim(),
          senderMessage: formData.message.trim()
        })
      });

      if (!res.ok) {
        throw new Error('Gagal mengirim pesan');
      }

      setFormSubmitted(true);
      showToast('Pesan berhasil terkirim ke Discord Danial! Akan segera dibalas.');
      setFormData({ name: '', contact: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch {
      showToast('Gagal mengirim formulir. Silakan hubungi via WhatsApp atau Email.', 'info');
    } finally {
      setIsSubmitting(false);
    }
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
              <span>Get In Touch &bull; Collaboration &amp; Inquiries</span>
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
          
          {/* Left Column: Direct Message Form (Direct to Discord) */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            
            <motion.div
              custom={0}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              className="rounded-3xl apple-glass spotlight-card p-6 sm:p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between font-mono text-xs text-[var(--theme-text-muted)] border-b border-[var(--theme-border-hairline)] pb-3.5">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[var(--theme-accent)]" />
                  <span className="uppercase tracking-widest font-semibold text-[var(--theme-text-primary)]">
                    KIRIM PESAN LANGSUNG
                  </span>
                </div>
                <span className="text-[var(--theme-accent)] flex items-center gap-1.5 text-[11px] font-medium">
                  NOTIFIKASI INSTAN
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-lg sm:text-xl font-display font-semibold text-[var(--theme-text-primary)] tracking-tight">
                  Ada Rencana Proyek atau Pertanyaan?
                </h3>
                <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                  Tulis pesanmu di bawah. Pesan ini akan langsung masuk ke ponsel saya secara real-time.
                </p>
              </div>

              <form onSubmit={handleSubmitMessage} className="flex flex-col gap-3.5 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                      Nama Lengkap / Panggilan
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Budi Santoso"
                      className="px-3.5 py-2.5 rounded-xl apple-glass-subtle border border-[var(--theme-border-hairline)] text-xs font-mono text-[var(--theme-text-primary)] placeholder-[var(--theme-text-muted)] focus:outline-none focus:border-[var(--theme-accent)] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                      No. WhatsApp atau Email
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. 0812xxxx / email@domain.com"
                      className="px-3.5 py-2.5 rounded-xl apple-glass-subtle border border-[var(--theme-border-hairline)] text-xs font-mono text-[var(--theme-text-primary)] placeholder-[var(--theme-text-muted)] focus:outline-none focus:border-[var(--theme-accent)] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                    Pesan / Ringkasan Kolaborasi
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan gambaran kebutuhan proyek, video editing, atau sistem yang ingin dibuat..."
                    className="px-3.5 py-2.5 rounded-xl apple-glass-subtle border border-[var(--theme-border-hairline)] text-xs font-mono text-[var(--theme-text-primary)] placeholder-[var(--theme-text-muted)] focus:outline-none focus:border-[var(--theme-accent)] transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="apple-glass-button-primary px-5 py-2.5 rounded-xl font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[var(--theme-accent)]" />
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : formSubmitted ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Pesan Berhasil Terkirim!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                        <span>Kirim Pesan Langsung</span>
                      </>
                    )}
                  </motion.button>

                  <span className="text-[10px] font-mono text-[var(--theme-text-muted)]">
                    Diterima langsung via Discord Webhook
                  </span>
                </div>
              </form>
            </motion.div>

            {/* Academic & Geographic Anchor */}
            <motion.div
              custom={1}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              className="p-5 rounded-2xl apple-glass spotlight-card shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono"
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

          {/* Right Column: Email, Quick Share & Social Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Primary Email Card */}
            <motion.div
              custom={2}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              className="rounded-3xl apple-glass spotlight-card p-5 sm:p-6 flex flex-col gap-4 shadow-xl"
            >
              <div className="flex items-center justify-between font-mono text-xs text-[var(--theme-text-muted)] border-b border-[var(--theme-border-hairline)] pb-2.5">
                <div className="flex items-center gap-2">
                  <TechIcon name="gmail" size={18} className="w-4.5 h-4.5 shrink-0" />
                  <span className="uppercase tracking-widest font-semibold text-[var(--theme-text-primary)]">GOOGLE GMAIL</span>
                </div>
                <span className="text-[var(--theme-accent)] text-[10px] font-medium">
                  RESPON CEPAT
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                  Official Email Address
                </span>
                <span className="text-base sm:text-xl font-mono font-semibold text-[var(--theme-text-primary)] break-all">
                  {email}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <motion.a
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${email}?subject=Kolaborasi%20Proyek%20Digital%20-%20Danial%20Habib`}
                  className="apple-glass-button-primary px-3.5 py-2 rounded-xl font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                >
                  <Send className="w-3 h-3 text-[var(--theme-accent)]" />
                  <span>Kirim Email</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleCopyEmail}
                  className="apple-glass-button-secondary px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[var(--theme-accent)]" />
                      <span className="text-[var(--theme-accent)]">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-[var(--theme-text-muted)]" />
                      <span>Salin Email</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Share Card (Bagikan ke WA / Salin Tautan) */}
            <motion.div
              custom={3}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              className="rounded-3xl apple-glass spotlight-card p-5 flex flex-col gap-3 shadow-xl"
            >
              <div className="flex items-center justify-between font-mono text-xs text-[var(--theme-text-muted)] border-b border-[var(--theme-border-hairline)] pb-2">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[var(--theme-accent)]" />
                  <span className="uppercase tracking-widest font-semibold text-[var(--theme-text-primary)]">
                    BAGIKAN PORTOFOLIO
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[var(--theme-text-muted)]">1-CLICK SHARE</span>
              </div>

              <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed font-normal">
                Suka dengan karya atau profil ini? Kamu bisa membagikannya langsung ke rekan kerja atau grup WhatsApp.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="apple-glass-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-semibold text-emerald-400 hover:bg-emerald-500/10 transition-colors cursor-pointer"
                >
                  <TechIcon name="whatsapp" size={14} className="w-3.5 h-3.5 shrink-0" />
                  <span>Kirim ke WhatsApp</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleCopyPortfolioLink}
                  className="apple-glass-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-medium text-[var(--theme-text-primary)] hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>Salin Tautan Web</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Social Channels List */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-[var(--theme-text-muted)] uppercase tracking-wider">
                Network &amp; Repositories:
              </span>

              <div className="flex flex-col gap-2">
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
                    className="p-3 rounded-2xl apple-glass spotlight-card hover:border-[var(--theme-accent)] transition-all shadow-md flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-xl apple-glass-subtle group-hover:scale-105 transition-all">
                        <TechIcon name={link.iconName} size={16} className="w-4 h-4 text-[var(--theme-text-primary)]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-display font-semibold uppercase text-[var(--theme-text-primary)] group-hover:text-[var(--theme-accent)] transition-colors">
                          {link.platform}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--theme-text-muted)]">
                          {link.label}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--theme-text-muted)] group-hover:text-[var(--theme-accent)] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
