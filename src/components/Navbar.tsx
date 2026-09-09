import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills & Stack', href: '#skills', id: 'skills' },
    { label: 'Creative & Video', href: '#creative', id: 'creative' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-5 pointer-events-none">
      <div
        className={`w-full max-w-6xl transition-all duration-300 pointer-events-auto rounded-2xl ${
          isScrolled
            ? 'glass-panel shadow-2xl shadow-black/50 px-4 sm:px-6 py-3'
            : 'bg-[#121316]/60 backdrop-blur-md border border-white/5 px-4 sm:px-6 py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Monogram -> Real Profile Photo Avatar */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
            aria-label="Kembali ke atas — Danial Habib Abdillah"
          >
            <img
              src="/images/profile.jpg"
              alt="Danial Habib Abdillah"
              className="w-8 h-8 rounded-full object-cover object-top border border-white/20 shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium tracking-tight text-white group-hover:text-zinc-200">
                Danial Habib
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                Dev &amp; Creative
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg transition-colors font-mono uppercase text-[11px] tracking-wider ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors font-mono uppercase tracking-wider"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white rounded-lg border border-white/10 hover:border-white/20 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1.5 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg font-mono text-[11px] uppercase tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-2 text-center text-xs font-mono uppercase tracking-wider py-2.5 px-4 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
