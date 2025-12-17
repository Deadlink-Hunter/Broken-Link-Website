import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;

const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const iconMinSizeMobile = theme.spacing.lg;
const iconMinSizeDesktop = '24px';
const iconMaxSize = '48px';

const getTaglineIconBase = (isMobileView: boolean): CSSProperties => ({
  width: isMobileView
    ? `clamp(${iconMinSizeMobile}, 4vw, ${iconMaxSize})`
    : `clamp(${iconMinSizeDesktop}, 2.5vw, ${iconMaxSize})`,
  height: isMobileView
    ? `clamp(${iconMinSizeMobile}, 4vw, ${iconMaxSize})`
    : `clamp(${iconMinSizeDesktop}, 2.5vw, ${iconMaxSize})`,
  flexShrink: 0,
});

export const heroStyles = {
  container: (isMobileView: boolean): CSSProperties => ({
    position: 'relative' as const,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(135deg, ${colors.primary[9]} 0%, ${colors.primary[8]} 50%, ${colors.primary[7]} 100%)`,
    overflow: 'hidden' as const,
    padding: isMobileView
      ? theme.spacing.md
      : `clamp(${theme.spacing.md}, 5vw, calc(${theme.spacing.xl} * 2))`,
    fontFamily: theme.fontFamily,
  }),

  glowTopLeft: {
    position: 'absolute' as const,
    top: '-20%',
    left: '-20%',
    width: '60%',
    height: '60%',
    background: `radial-gradient(circle, ${hexToRgba(colors.cyan[4], 0.2)} 0%, ${hexToRgba(colors.cyan[4], 0.1)} 40%, transparent 70%)`,
    pointerEvents: 'none' as const,
    zIndex: 0,
    filter: `blur(${theme.spacing['2xl']})`,
  } as CSSProperties,

  glowBottomRight: {
    position: 'absolute' as const,
    bottom: '-20%',
    right: '-20%',
    width: '60%',
    height: '60%',
    background: `radial-gradient(circle, ${hexToRgba(colors.purple[5], 0.2)} 0%, ${hexToRgba(colors.purple[5], 0.1)} 40%, transparent 70%)`,
    pointerEvents: 'none' as const,
    zIndex: 0,
    filter: `blur(${theme.spacing['2xl']})`,
  } as CSSProperties,

  content: (isMobileView: boolean): CSSProperties => ({
    position: 'relative' as const,
    zIndex: 1,
    maxWidth: isMobileView ? '100%' : 'clamp(90%, 80vw, 1400px)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    gap: isMobileView
      ? theme.spacing.xl
      : `clamp(${theme.spacing.md}, 4vw, calc(${theme.spacing.xl} * 2))`,
    padding: isMobileView
      ? `0 ${theme.spacing.sm}`
      : `0 clamp(${theme.spacing.xs}, 2vw, ${theme.spacing.xl})`,
  }),

  titleContainer: (isMobileView: boolean): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: isMobileView ? theme.spacing.xs : `clamp(${theme.spacing.xs}, 1vw, ${theme.spacing.md})`,
  }),

  title: (isMobileView: boolean): CSSProperties => ({
    fontSize: isMobileView ? 'clamp(4rem, 12vw, 7rem)' : 'clamp(4rem, 10vw, 7rem)',
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    letterSpacing: isMobileView ? '-0.02em' : 'clamp(-0.02em, -0.1vw, -0.05em)',
  }),

  titleGradient: {
    background: `linear-gradient(90deg, ${colors.cyan[4]} 0%, ${colors.purple[5]} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  } as CSSProperties,

  titleWhite: {
    color: theme.white,
  } as CSSProperties,

  tagline: (isMobileView: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobileView ? theme.spacing.md : `clamp(${theme.spacing.sm}, 2vw, ${theme.spacing.xl})`,
    flexWrap: 'nowrap' as const,
  }),

  taglineItem: (isMobileView: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: isMobileView ? theme.spacing.md : `clamp(${theme.spacing.xs}, 1.5vw, ${theme.spacing.lg})`,
  }),

  taglineIconCyan: (isMobileView: boolean): CSSProperties => ({
    ...getTaglineIconBase(isMobileView),
    color: colors.cyan[4],
  }),

  taglineIconPurple: (isMobileView: boolean): CSSProperties => ({
    ...getTaglineIconBase(isMobileView),
    color: colors.purple[4],
  }),

  buttonIcon: (isMobileView: boolean): CSSProperties => getTaglineIconBase(isMobileView),

  taglineText: (isMobileView: boolean): CSSProperties => ({
    color: colors.gray[5],
    fontSize: isMobileView
      ? `clamp(${theme.fontSizes.lg}, 2.5vw, ${theme.fontSizes['2xl']})`
      : `clamp(${theme.fontSizes.md}, 3vw, calc(${theme.fontSizes['2xl']} * 1.5))`,
    fontFamily: theme.fontFamily,
    padding: isMobileView
      ? `0 ${theme.spacing.lg}`
      : `0 clamp(${theme.spacing.xs}, 1.5vw, ${theme.spacing.md})`,
    fontWeight: isMobileView ? 600 : 500,
  }),

  taglineSeparator: (isMobileView: boolean): CSSProperties => ({
    color: colors.cyan[4],
    fontSize: isMobileView
      ? `clamp(${theme.fontSizes.lg}, 2vw, ${theme.fontSizes.xl})`
      : `clamp(${theme.fontSizes.lg}, 2.5vw, ${theme.fontSizes['2xl']})`,
    fontWeight: 900,
  }),

  description: (isMobileView: boolean): CSSProperties => ({
    maxWidth: isMobileView ? '90%' : 'clamp(90%, 60vw, 900px)',
    color: colors.gray[4],
    fontFamily: theme.fontFamily,
    fontSize: isMobileView
      ? `clamp(${theme.fontSizes.xl}, 2.5vw, ${theme.fontSizes['2xl']})`
      : `clamp(${theme.fontSizes.lg}, 2.5vw, calc(${theme.fontSizes['2xl']} * 1.25))`,
    lineHeight: isMobileView ? 1.8 : 'clamp(1.6, 0.1vw + 1.5, 2)',
    letterSpacing: isMobileView ? '0.02em' : 'clamp(0.01em, 0.1vw, 0.03em)',
    margin: 0,
    padding: isMobileView
      ? `0 ${theme.spacing.md}`
      : `0 clamp(${theme.spacing.sm}, 2vw, ${theme.spacing.xl})`,
    fontWeight: 500,
    textAlign: 'center' as const,
  }),

  highlight: {
    color: colors.cyan[4],
    fontWeight: 600,
  } as CSSProperties,

  buttons: (isMobileView: boolean): CSSProperties => ({
    display: 'flex',
    gap: isMobileView
      ? theme.spacing.xl
      : `clamp(${theme.spacing.lg}, 4vw, calc(${theme.spacing.xl} * 2))`,
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: isMobileView
      ? theme.spacing.xl
      : `clamp(${theme.spacing.xl}, 2vw, ${theme.spacing.xl})`,
    marginBottom: isMobileView
      ? theme.spacing.xl
      : `clamp(${theme.spacing.xl}, 2vw, ${theme.spacing.xl})`,
    width: '100%',
  }),

  startButton: (isMobileView: boolean): CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(90deg, ${colors.cyan[4]} 0%, ${colors.purple[5]} 100%)`,
    backgroundColor: 'transparent',
    border: 'none',
    color: theme.white,
    fontWeight: 600,
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    borderRadius: theme.spacing.md,
    transition: 'all 0.2s ease',
    fontSize: isMobileView ? theme.fontSizes.lg : theme.fontSizes.xl,
    whiteSpace: 'nowrap' as const,
    minWidth: theme.breakpoints.xxs,
    minHeight: theme.breakpoints.xxs,
    boxSizing: 'border-box',
    height: 'auto',
    boxShadow: `0 ${theme.spacing.sm} ${theme.spacing.lg} ${hexToRgba(colors.cyan[4], 0.3)}`,
  }),

  startButtonHovered: {
    background: `linear-gradient(90deg, ${colors.cyan[5]} 0%, ${colors.purple[6]} 100%)`,
  } as CSSProperties,

  githubButton: (isMobileView: boolean): CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.md,
    background: theme.white,
    border: 'none',
    color: colors.primary[9],
    fontWeight: 600,
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    borderRadius: theme.spacing.md,
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    cursor: 'pointer',
    minWidth: theme.breakpoints.xxs,
    minHeight: theme.breakpoints.xxs,
    fontSize: isMobileView ? theme.fontSizes.lg : theme.fontSizes.xl,
    whiteSpace: 'nowrap' as const,
    boxShadow: `0 ${theme.spacing.sm} ${theme.spacing.lg} ${hexToRgba(colors.primary[9], 0.2)}`,
  }),

  githubButtonHover: {
    background: colors.primary[9],
    backgroundColor: 'transparent',
    color: theme.white,
  } as CSSProperties,

  statistics: (isMobileView: boolean): CSSProperties => ({
    display: 'flex',
    flexDirection: isMobileView ? ('column' as const) : ('row' as const),
    gap: isMobileView ? `calc(${theme.spacing.xl} * 2)` : `calc(${theme.spacing['2xl']} * 3)`,
    marginTop: isMobileView ? theme.spacing.md : `calc(${theme.spacing['2xl']} * 1.5)`,
    flexWrap: 'nowrap' as const,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: isMobileView ? '100%' : 'clamp(90%, 60vw, 900px)',
    overflow: 'visible' as const,
  }),

  statItem: (isMobileView: boolean): CSSProperties => ({
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: isMobileView ? theme.spacing.md : `clamp(${theme.spacing.sm}, 1.5vw, ${theme.spacing.lg})`,
    flexShrink: 0,
    minWidth: 'fit-content',
  }),

  statNumber: (isMobileView: boolean, color: string): CSSProperties => ({
    fontSize: isMobileView ? 'clamp(2.25rem, 6vw, 3rem)' : 'clamp(2.5rem, 6vw, 3.5rem)',
    fontWeight: 700,
    lineHeight: 1,
    margin: 0,
    color,
  }),

  statNumberCyan: (isMobileView: boolean): CSSProperties =>
    heroStyles.statNumber(isMobileView, colors.cyan[4]),

  statNumberPurple: (isMobileView: boolean): CSSProperties =>
    heroStyles.statNumber(isMobileView, colors.purple[4]),

  statNumberSuccess: (isMobileView: boolean): CSSProperties =>
    heroStyles.statNumber(isMobileView, colors.success[5]),

  statLabel: (isMobileView: boolean): CSSProperties => ({
    color: colors.primary[2],
    fontSize: isMobileView
      ? theme.fontSizes.lg
      : `clamp(${theme.fontSizes.md}, 2vw, ${theme.fontSizes.xl})`,
    margin: 0,
  }),
};
