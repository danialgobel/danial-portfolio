import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Loading assets...');
  const [isDone, setIsDone] = useState(false);

  // Real progress target reference
  const targetProgressRef = useRef(15);
  const currentProgressRef = useRef(0);

  // Circle geometry for SVG Donut Progress
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    let isCancelled = false;

    // 1. Initial DOM Ready Check
    if (document.readyState === 'complete') {
      targetProgressRef.current = Math.max(targetProgressRef.current, 30);
    } else {
      window.addEventListener(
        'DOMContentLoaded',
        () => {
          if (!isCancelled) targetProgressRef.current = Math.max(targetProgressRef.current, 30);
        },
        { once: true }
      );
    }

    // 2. Track Web Fonts
    if (document.fonts) {
      document.fonts.ready
        .then(() => {
          if (!isCancelled) {
            targetProgressRef.current = Math.max(targetProgressRef.current, 55);
            setStatusText('Loading typography & UI...');
          }
        })
        .catch(() => {});
    }

    // 3. Track Critical Visual Assets (Images)
    const criticalImages = [
      '/images/profile.jpg',
      '/images/tanabrew-preview.webp',
      '/images/capcut-project-preview.webp',
    ];

    let loadedImagesCount = 0;
    criticalImages.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        if (isCancelled) return;
        loadedImagesCount++;
        const imageProgress = 55 + Math.round((loadedImagesCount / criticalImages.length) * 25);
        targetProgressRef.current = Math.max(targetProgressRef.current, imageProgress);
        if (loadedImagesCount >= criticalImages.length) {
          setStatusText('Syncing visual assets...');
        }
      };
      img.src = src;
    });

    // 4. Track 3D Canvas & Physics Prewarming
    import('./Lanyard/Lanyard')
      .then((module) => {
        if (isCancelled) return;
        setStatusText('Preparing 3D environment...');
        return module.preloadLanyardAssets('/images/profile.jpg');
      })
      .then(() => {
        if (!isCancelled) {
          targetProgressRef.current = Math.max(targetProgressRef.current, 85);
          setStatusText('Compiling 3D simulation...');
        }
      })
      .catch(() => {
        if (!isCancelled) targetProgressRef.current = Math.max(targetProgressRef.current, 85);
      });

    // 5. TRULY wait until the 3D Lanyard has compiled shaders and rendered active frame
    const handleLanyardRendered = () => {
      if (!isCancelled) {
        targetProgressRef.current = 100;
        setStatusText('System ready.');
      }
    };
    window.addEventListener('lanyard-3d-rendered', handleLanyardRendered, { once: true });

    // 6. Safety Maximum Timeout (Guarantee completion after 3.2s on slower devices)
    const safetyTimer = setTimeout(() => {
      if (!isCancelled) {
        targetProgressRef.current = 100;
        setStatusText('System ready.');
      }
    }, 3200);

    // 6. Smooth Animation Loop (Interpolates current -> targetProgress smoothly)
    let animationFrameId: number;
    const updateProgress = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (diff > 0) {
        const step = Math.max(0.6, diff * 0.12);
        currentProgressRef.current = Math.min(100, currentProgressRef.current + step);
        setProgress(Math.floor(currentProgressRef.current));
      }

      if (currentProgressRef.current >= 99.5) {
        currentProgressRef.current = 100;
        setProgress(100);
        setStatusText('System ready.');

        setTimeout(() => {
          if (!isCancelled) {
            setIsDone(true);
            setTimeout(() => {
              onComplete();
            }, 850); // Exact duration of the luxury curtain slide-up
          }
        }, 220);
        return;
      }

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      isCancelled = true;
      clearTimeout(safetyTimer);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('lanyard-3d-rendered', handleLanyardRendered);
    };
  }, [onComplete]);

  // Handle skip if user clicks Cancel
  const handleSkip = () => {
    setIsDone(true);
    setTimeout(onComplete, 850);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader-curtain"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.77, 0, 0.175, 1], // Smooth luxury curtain slide up like version 1
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#F8FAFC] select-none overflow-hidden"
          style={{ willChange: 'transform' }}
        >
          {/* Subtle Ambient Radial Highlight on Light Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,transparent_70%)] pointer-events-none" />

          {/* =================================================================
              BROWSER / APP WINDOW MOCKUP CONTAINER (Clean White Theme)
              ================================================================= */}
          <div className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-[#F1F5F9] border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col">
            
            {/* 1. macOS Window Header Bar (Light Alabaster) */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-slate-200/80 bg-[#FAFAFC]">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 shadow-xs inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 shadow-xs inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 shadow-xs inline-block" />
              </div>

              {/* Window Address / Title Mockup */}
              <div className="px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-500 shadow-xs">
                danialhabib.dev
              </div>

              {/* Right Spacer for balance */}
              <div className="w-12" />
            </div>

            {/* 2. Window Content Area with Frosted Preview Behind Dialog */}
            <div className="relative min-h-[360px] sm:min-h-[420px] p-6 sm:p-10 flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
              
              {/* Background Mockup (Sales Analytics / Workspace blurred preview like screenshot) */}
              <div className="absolute inset-0 p-8 flex flex-col gap-6 filter blur-[5px] opacity-40 pointer-events-none select-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/70" />
                    <div className="h-4 w-32 rounded-md bg-slate-300" />
                  </div>
                  <div className="h-6 w-16 rounded-full bg-indigo-500/25" />
                </div>
                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="h-20 rounded-xl bg-white border border-slate-200/60 shadow-xs" />
                  <div className="h-20 rounded-xl bg-white border border-slate-200/60 shadow-xs" />
                  <div className="h-20 rounded-xl bg-white border border-slate-200/60 shadow-xs" />
                </div>
                <div className="h-28 rounded-xl bg-white border border-slate-200/60 shadow-xs" />
              </div>

              {/* 3. Floating Modal Dialog Card (Pure White with Crisp Drop Shadow) */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="relative z-10 w-full max-w-[340px] sm:max-w-[360px] rounded-2xl bg-white border border-slate-200/80 shadow-[0_20px_45px_rgba(0,0,0,0.08)] p-6 sm:p-7 flex flex-col gap-6"
              >
                {/* Modal Upper: Circular Donut Progress Ring + Shimmer Bars */}
                <div className="flex items-center gap-6">
                  
                  {/* Circular Donut Progress */}
                  <div className="relative shrink-0 w-[100px] h-[100px] flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                      {/* Background Inactive Track Ring (Soft Light Gray) */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="9"
                      />
                      {/* Active Progress Arc (Royal Purple / Indigo as in reference) */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="9"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-[stroke-dashoffset] duration-150 ease-linear"
                      />
                    </svg>

                    {/* Percentage Display at the Center of Donut */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-sans font-extrabold text-2xl text-slate-800 tabular-nums tracking-tight">
                        {progress}%
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Shimmer Placeholder Bars (as seen in screenshot) */}
                  <div className="flex flex-col gap-2.5 flex-1">
                    <div className="h-3.5 w-24 sm:w-28 rounded-full bg-slate-200 animate-pulse" />
                    <div className="h-2.5 w-16 sm:w-18 rounded-full bg-slate-100 animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-400 pt-1 truncate">
                      {statusText}
                    </span>
                  </div>

                </div>

                {/* Modal Lower: Action Buttons (Cancel / Loading...) */}
                <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 border border-slate-200 transition-colors cursor-pointer"
                  >
                    Batal
                  </button>

                  <button
                    type="button"
                    disabled
                    className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#6366F1] text-white shadow-md shadow-indigo-500/25 flex items-center gap-1.5 transition-all"
                  >
                    <span>{progress >= 100 ? 'Siap' : 'Memuat...'}</span>
                  </button>
                </div>

              </motion.div>

            </div>

          </div>

          {/* Bottom Hairline Specular Edge */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
