import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, ExternalLink, Mail, Copy, Share2, FileText, X, FolderGit2, Sparkles, Terminal, Code2, Film, User, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useToast } from './Toast';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigasi' | 'Aksi' | 'Tautan Luar';
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const commands: CommandItem[] = [
    // Navigasi
    {
      id: 'nav-projects',
      title: 'Loncat ke Selected Projects (Tanabrew, Nostra, dll)',
      category: 'Navigasi',
      icon: <FolderGit2 className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-skills',
      title: 'Loncat ke System Architecture & Tech Stack',
      category: 'Navigasi',
      icon: <Code2 className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-creative',
      title: 'Loncat ke Video Production & CapCut Showcase',
      category: 'Navigasi',
      icon: <Film className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        document.getElementById('creative')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-about',
      title: 'Loncat ke Background Profile (Mahasiswa Informatika UAD)',
      category: 'Navigasi',
      icon: <User className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-contact',
      title: 'Loncat ke Kontak & Formulir Pesan Langsung',
      category: 'Navigasi',
      icon: <Send className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },

    // Aksi
    {
      id: 'act-resume',
      title: 'Buka Curriculum Vitae [CV] Modal',
      category: 'Aksi',
      icon: <FileText className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'act-copy-email',
      title: 'Salin Alamat Email (danialgobel26@gmail.com)',
      category: 'Aksi',
      icon: <Copy className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        navigator.clipboard.writeText('danialgobel26@gmail.com');
        showToast('Alamat email berhasil disalin!');
        onClose();
      }
    },
    {
      id: 'act-copy-url',
      title: 'Salin Tautan Web Portofolio',
      category: 'Aksi',
      icon: <Share2 className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        navigator.clipboard.writeText(window.location.origin || 'https://danial-portfolio-inky.vercel.app');
        showToast('Tautan portofolio berhasil disalin!');
        onClose();
      }
    },
    {
      id: 'act-share-wa',
      title: 'Bagikan Portofolio ke WhatsApp',
      category: 'Aksi',
      icon: <ExternalLink className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        const text = encodeURIComponent(
          'Halo, silakan cek portofolio Danial Habib Abdillah (Informatics Student & Digital Creator): ' +
            (window.location.origin || 'https://danial-portfolio-inky.vercel.app')
        );
        window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        onClose();
      }
    },

    // Tautan Luar
    {
      id: 'link-github',
      title: 'Buka Profil GitHub (@danialgobel)',
      category: 'Tautan Luar',
      icon: <ExternalLink className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        window.open('https://github.com/danialgobel', '_blank');
        onClose();
      }
    },
    {
      id: 'link-instagram',
      title: 'Buka Akun Instagram (@danialgobell)',
      category: 'Tautan Luar',
      icon: <ExternalLink className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        window.open('https://www.instagram.com/danialgobell/', '_blank');
        onClose();
      }
    },
    {
      id: 'link-tiktok',
      title: 'Buka Akun TikTok (@danialgobelll)',
      category: 'Tautan Luar',
      icon: <ExternalLink className="w-4 h-4 text-[var(--theme-accent)]" />,
      action: () => {
        window.open('https://www.tiktok.com/@danialgobelll', '_blank');
        onClose();
      }
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 sm:pt-28 p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Palette Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-2xl apple-glass shadow-2xl border border-white/20 z-10 overflow-hidden flex flex-col"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--theme-border-hairline)]">
              <Search className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ketik perintah atau cari navigasi..."
                className="w-full bg-transparent font-mono text-xs sm:text-sm text-[var(--theme-text-primary)] placeholder-[var(--theme-text-muted)] focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-72 overflow-y-auto p-2 flex flex-col gap-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-[var(--theme-text-muted)]">
                  Tidak ada perintah yang cocok dengan "{query}"
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between text-left transition-all ${
                        isSelected
                          ? 'bg-[var(--theme-accent-light)] text-[var(--theme-text-primary)] border border-[var(--theme-border-subtle)]'
                          : 'text-[var(--theme-text-secondary)] hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-1.5 rounded-lg apple-glass-subtle shrink-0">
                          {cmd.icon}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-mono text-xs font-medium truncate">
                            {cmd.title}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                            {cmd.category}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Bar */}
            <div className="px-4 py-2.5 border-t border-[var(--theme-border-hairline)] flex items-center justify-between font-mono text-[10px] text-[var(--theme-text-muted)]">
              <div className="flex items-center gap-3">
                <span>[↑↓] Navigasi</span>
                <span>[Enter] Pilih</span>
                <span>[Esc] Tutup</span>
              </div>
              <span className="text-[var(--theme-accent)] font-semibold">DanialGobel Palette</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
