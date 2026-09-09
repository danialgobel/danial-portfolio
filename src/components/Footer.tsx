import React from 'react';
import { ArrowUp } from 'lucide-react';
import { TechIcon } from './TechIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0b0d] border-t border-white/5 font-mono text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <span className="text-zinc-300 font-medium">Danial Habib Abdillah</span>
          <span className="hidden sm:inline-block text-zinc-700">&bull;</span>
          <span className="text-zinc-500 text-[11px]">UAD Yogyakarta</span>
        </div>

        {/* Social Links Quick Access */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400">
          <a
            href="https://github.com/danialgobel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 p-1"
            aria-label="GitHub @danialgobel"
          >
            <TechIcon name="github" size={14} className="w-3.5 h-3.5" />
            <span className="text-[11px]">GitHub</span>
          </a>

          <a
            href="https://www.instagram.com/danialgobell/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 p-1"
            aria-label="Instagram @danialgobell"
          >
            <TechIcon name="instagram" size={14} className="w-3.5 h-3.5" />
            <span className="text-[11px]">Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@danialgobelll"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 p-1"
            aria-label="TikTok @danialgobelll"
          >
            <TechIcon name="tiktok" size={14} className="w-3.5 h-3.5" />
            <span className="text-[11px]">TikTok</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] text-zinc-500">
            React &bull; TS &bull; Tailwind
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Kembali ke atas halaman"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
