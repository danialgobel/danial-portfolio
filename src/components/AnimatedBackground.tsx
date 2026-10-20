import React from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Floating Ambient Aura 1 - Emerald & Cyan Blend (Top Left) */}
      <motion.div
        animate={{
          x: [-10, 35, -10],
          y: [-15, 25, -15],
          scale: [1, 1.06, 1],
          opacity: [0.22, 0.35, 0.22],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -left-20 w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] rounded-full bg-gradient-to-br from-[#10B981]/25 via-[#38BDF8]/20 to-transparent blur-[60px] sm:blur-[90px] transform-gpu will-change-transform"
      />

      {/* 2. Floating Ambient Aura 2 - Electric Azure (Center Right) */}
      <motion.div
        animate={{
          x: [10, -35, 10],
          y: [0, 35, 0],
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.30, 0.18],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-20 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-gradient-to-bl from-[#38BDF8]/25 via-[#4ADE80]/15 to-transparent blur-[60px] sm:blur-[90px] transform-gpu will-change-transform"
      />

      {/* 3. Floating Ambient Aura 3 - Deep Forest Pulse (Bottom Left) */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [0.96, 1.06, 0.96],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-0 w-[280px] sm:w-[440px] h-[280px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#10B981]/20 via-[#059669]/15 to-transparent blur-[60px] sm:blur-[90px] transform-gpu will-change-transform"
      />
    </div>
  );
};
