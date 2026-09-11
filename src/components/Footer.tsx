import React from 'react';
import { ArrowUp } from 'lucide-react';
import { TechIcon } from './TechIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 apple-glass-subtle border-t border-[var(--theme-border-hairline)] font-mono text-xs text-[var(--theme-text-muted)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)]" />
            <span className="text-[var(--theme-text-primary)] font-display font-semibold uppercase">Danial Habib Abdillah</span>
          </div>
          <span className="hidden sm:inline-block text-[var(--theme-text-muted)]">&bull;</span>
          <span className="text-[var(--theme-text-muted)] text-[11px]">DEVELOPER &amp; CREATIVE TECHNOLOGIST</span>
        </div>

        {/* Social Links Quick Access */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-[var(--theme-text-secondary)]">
          <a
            href="https://github.com/danialgobel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--theme-text-primary)] transition-colors flex items-center gap-1.5"
            aria-label="GitHub @danialgobel"
          >
            <TechIcon name="github" size={14} className="w-3.5 h-3.5 text-[var(--theme-text-primary)]" />
            <span className="text-[11px] font-mono">GITHUB</span>
          </a>

          <a
            href="https://www.instagram.com/danialgobell/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--theme-text-primary)] transition-colors flex items-center gap-1.5"
            aria-label="Instagram @danialgobell"
          >
            <TechIcon name="instagram" size={14} className="w-3.5 h-3.5 text-[var(--theme-text-primary)]" />
            <span className="text-[11px] font-mono">INSTAGRAM</span>
          </a>

          <a
            href="https://www.tiktok.com/@danialgobelll"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--theme-text-primary)] transition-colors flex items-center gap-1.5"
            aria-label="TikTok @danialgobelll"
          >
            <TechIcon name="tiktok" size={14} className="w-3.5 h-3.5 text-[var(--theme-text-primary)]" />
            <span className="text-[11px] font-mono">TIKTOK</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] text-[var(--theme-text-muted)]">
            REACT 19 &bull; TS &bull; TAILWIND &bull; MOTION
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="apple-glass-button-secondary p-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
            aria-label="Kembali ke atas halaman"
          >
            <span className="text-[10px] font-mono uppercase">Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
