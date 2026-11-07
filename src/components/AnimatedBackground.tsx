import React from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Base Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-terranova-grid opacity-40" />

      {/* 2. Floating Ambient Accent Light 1 (Top Left) */}
      <motion.div
        animate={{
          x: [-10, 45, -10],
          y: [-15, 30, -15],
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-16 -left-16 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-[radial-gradient(circle_at_center,var(--theme-accent)_0%,transparent_70%)] opacity-20 blur-2xl transform-gpu will-change-transform"
      />

      {/* 3. Floating Ambient Accent Light 2 (Center Right) */}
      <motion.div
        animate={{
          x: [10, -40, 10],
          y: [0, 45, 0],
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-16 w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full bg-[radial-gradient(circle_at_center,var(--theme-accent-light)_0%,transparent_70%)] opacity-20 blur-2xl transform-gpu will-change-transform"
      />

      {/* 4. Floating Ambient Accent Light 3 (Bottom Center Left) */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -35, 0],
          scale: [0.95, 1.08, 0.95],
          opacity: [0.10, 0.18, 0.10],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-5 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-[radial-gradient(circle_at_center,var(--theme-accent)_0%,transparent_70%)] opacity-15 blur-2xl transform-gpu will-change-transform"
      />

      {/* 5. GPU-accelerated Shimmer Sweep Beam */}
      <motion.div
        animate={{
          y: ['-100vh', '150vh'],
          opacity: [0, 0.18, 0.3, 0.18, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 right-0 h-[140px] sm:h-[180px] bg-gradient-to-b from-transparent via-white/30 to-transparent blur-lg transform -skew-y-6 pointer-events-none transform-gpu will-change-transform"
      />
    </div>
  );
};
