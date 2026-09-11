import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    { label: 'Overview', code: '01', href: '#hero', id: 'hero' },
    { label: 'Projects', code: '02', href: '#projects', id: 'projects' },
    { label: 'Architecture', code: '03', href: '#skills', id: 'skills' },
    { label: 'Creative Media', code: '04', href: '#creative', id: 'creative' },
    { label: 'About', code: '05', href: '#about', id: 'about' },
    { label: 'Contact', code: '06', href: '#contact', id: 'contact' },
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
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none transition-all duration-300">
      {/* Floating Apple Glass Navigation Bar */}
      <div className="w-full pointer-events-auto transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <div
          className={`max-w-7xl mx-auto rounded-2xl apple-glass transition-all duration-500 ${
            isScrolled
              ? 'py-2.5 sm:py-3 px-4 sm:px-6 shadow-2xl'
              : 'py-3 sm:py-3.5 px-4 sm:px-6 shadow-md'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo / Monogram Lockup with Profile Pic Thumbnail */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Danial Habib Abdillah - Home"
            >
              <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-white/20 bg-black/50 text-white flex items-center justify-center font-display font-bold text-xs tracking-tight shadow-md">
                <img
                  src="/images/profile.jpg"
                  alt="Danial Habib"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="hidden group-hover:inline">DH</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-sm font-semibold tracking-tight text-[var(--theme-text-primary)] group-hover:text-[var(--theme-accent)] transition-colors">
                    DANIAL HABIB
                  </span>
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--theme-text-muted)]">
                  DEVELOPER &bull; CREATIVE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-[11px] tracking-wider transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'apple-glass-button-primary font-semibold shadow-md'
                        : 'text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:bg-white/10'
                    }`}
                  >
                    <span className={isActive ? 'text-[var(--theme-accent)]' : 'text-[var(--theme-text-muted)]'}>
                      {link.code} //
                    </span>
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="apple-glass-subtle inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-xl text-[var(--theme-text-primary)] transition-all font-medium"
              >
                <Download className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                <span>RESUME [CV]</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="apple-glass-button-primary inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-xl transition-all shadow-md font-medium"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--theme-text-primary)] hover:bg-white/10 rounded-xl border border-[var(--theme-border-hairline)] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="lg:hidden mt-3 pt-3 border-t border-[var(--theme-border-hairline)] flex flex-col gap-1 pb-2"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:bg-white/10 rounded-xl font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-[var(--theme-text-muted)]">{link.code} //</span>
                  </a>
                ))}
                
                <div className="pt-2 mt-1 border-t border-[var(--theme-border-hairline)] flex flex-col gap-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="apple-glass-button-primary text-center text-xs font-mono uppercase tracking-wider py-2.5 px-4 rounded-xl font-semibold shadow-md"
                  >
                    Hubungi Saya &rarr;
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
