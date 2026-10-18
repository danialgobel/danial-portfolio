import React, { useEffect } from 'react';
import { X, Download, Mail, ExternalLink, GraduationCap, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TechIcon } from './TechIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-xl rounded-3xl apple-glass p-6 sm:p-8 shadow-2xl border border-white/20 z-10 overflow-hidden flex flex-col gap-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[var(--theme-border-hairline)]">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--theme-accent)] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)]" />
                <span>CURRICULUM VITAE // CREDENTIALS</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl apple-glass-subtle text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] transition-colors cursor-pointer"
                aria-label="Tutup jendela resume"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Candidate Identity */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/20 shadow-md shrink-0">
                <img
                  src="/images/profile.jpg"
                  alt="Danial Habib Abdillah"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-xl font-display font-bold text-[var(--theme-text-primary)]">
                  Danial Habib Abdillah
                </h3>
                <p className="text-xs font-mono text-[var(--theme-accent)] font-medium">
                  Developer &bull; Creative Technologist &bull; Video Editor
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[var(--theme-text-muted)] pt-0.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Teknik Informatika, Universitas Ahmad Dahlan (UAD)</span>
                </div>
              </div>
            </div>

            {/* Quick Skills Summary */}
            <div className="rounded-2xl apple-glass-subtle p-4 flex flex-col gap-2.5">
              <span className="font-mono text-[10px] uppercase text-[var(--theme-text-muted)] tracking-wider">
                Ringkasan Kompetensi Teknis:
              </span>
              <ul className="text-xs text-[var(--theme-text-secondary)] space-y-1.5 font-normal leading-relaxed">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0" />
                  <span><strong>Web Platform:</strong> React 19, TypeScript, Tailwind CSS, Vite</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0" />
                  <span><strong>Mobile & Backend:</strong> Android & iOS Client, Firebase Firestore & Auth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0" />
                  <span><strong>Creative Media:</strong> 3+ Tahun CapCut Desktop, Pacing Video, Motion</span>
                </li>
              </ul>
            </div>

            {/* Note & Action */}
            <div className="flex flex-col gap-3 pt-1">
              <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed">
                Untuk menjaga privasi nomor kontak pribadi, berkas dokumen resume (PDF) lengkap dapat diminta langsung melalui email resmi atau pesan diskusi proyek.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:danialgobel26@gmail.com?subject=Permintaan%20Dokumen%20Resume%20CV%20-%20Danial%20Habib"
                  className="apple-glass-button-primary px-5 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 shadow-lg"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                  <span>Minta Berkas CV Lengkap via Email</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="apple-glass-button-secondary px-4 py-2.5 rounded-xl text-xs font-mono font-semibold"
                >
                  Tutup
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
