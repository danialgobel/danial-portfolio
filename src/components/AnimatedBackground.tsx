import React from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Base Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-terranova-grid opacity-40" />

      {/* 2. Floating Ambient Glow Orb 1 - Vivid Sage Mint (Top Left) */}
      <motion.div
        animate={{
          x: [-10, 45, -10],
          y: [-15, 30, -15],
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-16 -left-16 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-gradient-to-br from-[#6EE7B7]/35 via-[#38BDF8]/25 to-transparent blur-[45px] sm:blur-[65px] transform-gpu will-change-transform"
      />

      {/* 3. Floating Ambient Glow Orb 2 - Electric Cyan & Emerald (Center Right) */}
      <motion.div
        animate={{
          x: [10, -40, 10],
          y: [0, 45, 0],
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-16 w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full bg-gradient-to-bl from-[#38BDF8]/30 via-[#4ADE80]/20 to-transparent blur-[45px] sm:blur-[65px] transform-gpu will-change-transform"
      />

      {/* 4. Floating Ambient Glow Orb 3 - Deep Forest Pulse (Bottom Center Left) */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -35, 0],
          scale: [0.95, 1.08, 0.95],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-5 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#10B981]/25 via-[#34D399]/20 to-transparent blur-[45px] sm:blur-[65px] transform-gpu will-change-transform"
      />

      {/* 5. GPU-accelerated Shimmer Sweep Beam (uses translateY instead of top to prevent reflows) */}
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
