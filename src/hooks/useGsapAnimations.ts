/**
 * ScrollTrigger has been superseded by native Motion IntersectionObserver
 * to prevent dual scroll-engine conflicts, frame drops, and clearProps snapping on mobile devices.
 */
export const useGsapAnimations = () => {
  // No-op: all animations are now handled seamlessly by hardware-accelerated Motion
};
