import type { CSSProperties } from 'react';

const SLIDE_TRANSITION =
  'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s ease, filter 0.5s ease';

export const testimonialCardStyles = {
  default: {
    backgroundColor: 'white',
    borderRadius: 32,
    border: '1px solid var(--mantine-color-gray-2)',
    backdropFilter: 'none',
    textAlign: 'center',
    justifyContent: 'flex-start',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.07)',
  } satisfies CSSProperties,
} as const;

/**
 * Returns the shortest signed distance between a slide index and the active
 * index in a looped/circular list.
 *   0  → active slide
 *  ±1  → immediate left/right neighbours
 *  ±2+ → further away (hidden in practice with 3 visible slides)
 */
export function getLoopDistance(index: number, activeIndex: number, total: number): number {
  const raw = ((index - activeIndex) % total + total) % total;
  return raw > total / 2 ? raw - total : raw;
}

/**
 * Returns the inline CSSProperties applied to the wrapper <div> inside each
 * Carousel.Slide, based on that slide's signed distance from the active one.
 *
 * Distance  0  → active:  scale 1.2, no blur, full opacity, z-index 2 (front)
 * Distance ±1  → side:    scale 1.0, blur 2 px, reduced opacity, z-index 1 (behind)
 * Distance ±2+ → hidden:  collapsed, fully transparent (loop clones, off-screen)
 */
export function getSlideTransitionStyle(distance: number): CSSProperties {
  const base: CSSProperties = {
    position: 'relative',
    height: '100%',
    willChange: 'transform, opacity, filter',
    transition: SLIDE_TRANSITION,
  };

  if (distance === 0) {
    return {
      ...base,
      transform: 'scale(1.2)',
      opacity: 1,
      filter: 'blur(0px)',
      zIndex: 2,
    };
  }

  if (Math.abs(distance) === 1) {
    return {
      ...base,
      transform: 'scale(1)',
      opacity: 0.72,
      filter: 'blur(2px)',
      zIndex: 1,
    };
  }

  // Off-screen slides — kept invisible; Embla may reposition them for loop continuity
  return {
    ...base,
    transform: 'scale(0.85)',
    opacity: 0,
    filter: 'blur(4px)',
    zIndex: 0,
  };
}
