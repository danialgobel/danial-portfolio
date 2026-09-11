import React from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Base Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-terranova-grid opacity-50" />

      {/* 2. Floating Ambient Glow Orb 1 - Vivid Sage Mint (Top Left) */}
      <motion.div
        animate={{
          x: [-15, 60, -15],
          y: [-20, 40, -20],
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-16 -left-16 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-gradient-to-br from-[#6EE7B7]/40 via-[#38BDF8]/30 to-transparent blur-[60px] sm:blur-[85px] transform-gpu will-change-transform"
      />

      {/* 3. Floating Ambient Glow Orb 2 - Electric Cyan & Emerald (Center Right) */}
      <motion.div
        animate={{
          x: [15, -50, 15],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-16 w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full bg-gradient-to-bl from-[#38BDF8]/35 via-[#4ADE80]/25 to-transparent blur-[60px] sm:blur-[85px] transform-gpu will-change-transform"
      />

      {/* 4. Floating Ambient Glow Orb 3 - Deep Forest Pulse (Bottom Center Left) */}
      <motion.div
        animate={{
          x: [0, 45, 0],
          y: [0, -45, 0],
          scale: [0.95, 1.15, 0.95],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-5 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#10B981]/30 via-[#34D399]/25 to-transparent blur-[60px] sm:blur-[85px] transform-gpu will-change-transform"
      />

      {/* 5. Looping Continuous Shimmer Sweep Beam (Light Scanning Beam) */}
      <motion.div
        animate={{
          top: ['-20%', '120%'],
          opacity: [0, 0.25, 0.4, 0.25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-0 right-0 h-[160px] sm:h-[220px] bg-gradient-to-b from-transparent via-white/40 to-transparent blur-xl transform -skew-y-6 pointer-events-none transform-gpu"
      />
    </div>
  );
};
