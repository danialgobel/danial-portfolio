import type { Variants } from 'motion/react';

/**
 * Luxurious, ultra-smooth cubic-bezier deceleration curve (2x slower tempo).
 * Starts with clear intent, then decelerates like silk into place over 1.2s - 1.35s,
 * delivering an ultra-cinematic, majestic feel with zero jerk or abrupt stop.
 */
export const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

export const sectionHeaderVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 25,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: SMOOTH_EASE,
    },
  },
};

export const featuredCardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 42,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.35,
      ease: SMOOTH_EASE,
    },
  },
};

export const staggeredCardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 32,
  },
  onscreen: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
      delay: i * 0.15,
      ease: SMOOTH_EASE,
    },
  }),
};
