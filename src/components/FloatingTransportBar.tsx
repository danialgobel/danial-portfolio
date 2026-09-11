import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Activity, Radio, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingTransportBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hzValue, setHzValue] = useState(14.2);
  const [progress, setProgress] = useState(38);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setHzValue((prev) => +(12 + Math.random() * 8).toFixed(1));
      setProgress((prev) => (prev >= 100 ? 0 : +(prev + 0.5).toFixed(1)));
    }, 400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-xl pointer-events-auto">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="glass-terranova rounded-full border border-[#191C1B]/15 shadow-terranova-elevated px-4 py-2 sm:py-2.5 flex items-center justify-between gap-3 text-xs font-mono"
      >
        {/* Left: Stream Info & Live Status */}
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-7 h-7 rounded-full bg-[#191C1B] text-white flex items-center justify-center hover:bg-[#466554] transition-colors shrink-0 shadow-terranova"
            aria-label={isPlaying ? 'Pause telemetry stream' : 'Play telemetry stream'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
          </button>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#466554] animate-pulse shrink-0" />
              <span className="font-semibold text-[#191C1B] text-[11px] truncate">
                TERRANOVA RUNTIME // AMZ-049
              </span>
            </div>
            <span className="text-[9px] text-[#747874] truncate hidden sm:inline">
              96 kHz 24-BIT FLAC &bull; LIVE TELEMETRY
            </span>
          </div>
        </div>

        {/* Center: Live Hz / SPL Readout */}
        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#F3F4F1] border border-[#191C1B]/08 text-[10px]">
          <Activity className="w-3 h-3 text-[#466554]" />
          <span className="text-[#191C1B] font-bold">{hzValue} kHz</span>
          <span className="text-[#747874]">SPL: 64.2 dBA</span>
        </div>

        {/* Right: Mute & Quick Jump */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="p-1.5 rounded-full hover:bg-[#F3F4F1] text-[#747874] hover:text-[#191C1B] transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#466554]" />}
          </button>

          <a
            href="#projects"
            className="px-2.5 py-1 rounded-full bg-[#191C1B] text-[#C8EBD5] text-[10px] uppercase tracking-wider font-semibold hover:bg-[#466554] hover:text-white transition-colors"
          >
            Projects
          </a>
        </div>
      </motion.div>
    </div>
  );
};
