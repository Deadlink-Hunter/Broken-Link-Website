import type { CSSProperties } from 'react';

const SLIDE_TRANSITION =
  'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s ease, filter 0.5s ease';

export const testimonialCardStyles = {
  default: {
    backgroundColor: 'var(--mantine-color-white)',
    borderRadius: 'var(--mantine-radius-md)',
    border: '1px solid var(--mantine-color-gray-4)',
    backdropFilter: 'none',
    textAlign: 'center',
    justifyContent: 'flex-start',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
  } satisfies CSSProperties,
} as const;

export function getLoopDistance(index: number, activeIndex: number, total: number): number {
  const raw = (((index - activeIndex) % total) + total) % total;
  return raw > total / 2 ? raw - total : raw;
}

export function getSlideTransitionStyle(distance: number): CSSProperties {
  const isActive = distance === 0;
  const isAdjacent = Math.abs(distance) === 1;

  return {
    position: 'relative',
    height: '100%',
    willChange: 'transform, opacity, filter',
    transition: SLIDE_TRANSITION,
    transform: isActive ? 'scale(1.2)' : isAdjacent ? 'scale(1)' : 'scale(0.85)',
    opacity: isActive ? 1 : isAdjacent ? 'var(--mantine-opacity-lg)' : 'var(--mantine-opacity-0)',
    filter: isActive ? 'blur(0px)' : isAdjacent ? 'blur(2px)' : 'blur(4px)',
    zIndex: isActive ? 2 : isAdjacent ? 1 : 0,
  };
}
