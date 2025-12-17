import { CSSProperties } from 'react';
import { theme } from '@/theme';
import { desktopOverrides } from './desktop.styles';
import { mobileOverrides } from './mobile.styles';

export const colors = theme.colors;

export interface HeroStyle extends CSSProperties {}

export interface HeroStylesStructure {
  container: HeroStyle;
  content: HeroStyle;
  titleContainer: HeroStyle;
  title: HeroStyle;
  tagline: HeroStyle;
  taglineItem: HeroStyle;
  taglineIconCyan?: HeroStyle;
  taglineIconPurple?: HeroStyle;
  buttonIcon?: HeroStyle;
  taglineText: HeroStyle;
  taglineSeparator: HeroStyle;
  description: HeroStyle;
  buttons: HeroStyle;
  startButton: HeroStyle;
  githubButton: HeroStyle;
  statistics: HeroStyle;
  statItem: HeroStyle;
  statNumber: (color: string) => HeroStyle;
  statLabel: HeroStyle;
}

interface SharedStyles {
  glowTopLeft: HeroStyle;
  glowBottomRight: HeroStyle;
  titleGradient: HeroStyle;
  titleWhite: HeroStyle;
  highlight: HeroStyle;
}

const baseStyles: HeroStylesStructure = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(135deg, ${colors.primary[9]} 0%, ${colors.primary[8]} 50%, ${colors.primary[7]} 100%)`,
    overflow: 'hidden',
    fontFamily: theme.fontFamily,
  },

  content: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
  },

  tagline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },

  taglineItem: {
    display: 'flex',
    alignItems: 'center',
  },

  taglineIconCyan: {
    color: colors.cyan[4],
  },

  taglineIconPurple: {
    color: colors.purple[4],
  },

  taglineText: {
    color: colors.gray[5],
    fontFamily: theme.fontFamily,
  },

  taglineSeparator: {
    color: colors.cyan[4],
    fontWeight: 900,
  },

  description: {
    color: colors.gray[4],
    fontFamily: theme.fontFamily,
    margin: 0,
    fontWeight: 500,
    textAlign: 'center',
  },

  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  startButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    color: theme.white,
    fontWeight: 600,
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    borderRadius: theme.spacing.md,
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    minWidth: theme.breakpoints.xxs,
    minHeight: theme.breakpoints.xxs,
    boxSizing: 'border-box',
    height: 'auto',
    boxShadow: `0 ${theme.spacing.sm} ${theme.spacing.lg} #22d3ee4D`,
  },

  githubButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.md,
    border: 'none',
    fontWeight: 600,
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    borderRadius: theme.spacing.md,
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    cursor: 'pointer',
    minWidth: theme.breakpoints.xxs,
    minHeight: theme.breakpoints.xxs,
    whiteSpace: 'nowrap',
    boxShadow: `0 ${theme.spacing.sm} ${theme.spacing.lg} #0f172a33`,
  },

  statistics: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'visible',
  },

  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
    minWidth: 'fit-content',
  },

  statNumber: (color: string): HeroStyle => ({
    fontWeight: 700,
    lineHeight: 1,
    margin: 0,
    color,
  }),

  statLabel: {
    color: colors.primary[2],
    margin: 0,
  },
};

const sharedStyles: SharedStyles = {
  glowTopLeft: {
    position: 'absolute',
    top: '-20%',
    left: '-20%',
    width: '60%',
    height: '60%',
    background: 'radial-gradient(circle, #22d3ee33 0%, #22d3ee1A 40%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 0,
    filter: `blur(${theme.spacing['2xl']})`,
  },

  glowBottomRight: {
    position: 'absolute',
    bottom: '-20%',
    right: '-20%',
    width: '60%',
    height: '60%',
    background: 'radial-gradient(circle, #8b5cf633 0%, #8b5cf61A 40%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 0,
    filter: `blur(${theme.spacing['2xl']})`,
  },

  titleGradient: {
    background: `linear-gradient(90deg, ${colors.cyan[4]} 0%, ${colors.purple[5]} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  titleWhite: {
    color: theme.white,
  },

  highlight: {
    color: colors.cyan[4],
    fontWeight: 600,
  },
};

const mergeStyles = (base: typeof baseStyles, overrides: Partial<HeroStylesStructure>) => {
  return {
    ...base,
    container: { ...base.container, ...overrides.container },
    content: { ...base.content, ...overrides.content },
    titleContainer: { ...base.titleContainer, ...overrides.titleContainer },
    title: { ...base.title, ...overrides.title },
    tagline: { ...base.tagline, ...overrides.tagline },
    taglineItem: { ...base.taglineItem, ...overrides.taglineItem },
    taglineIconCyan: { ...base.taglineIconCyan, ...overrides.taglineIconCyan },
    taglineIconPurple: { ...base.taglineIconPurple, ...overrides.taglineIconPurple },
    buttonIcon: overrides.buttonIcon,
    taglineText: { ...base.taglineText, ...overrides.taglineText },
    taglineSeparator: { ...base.taglineSeparator, ...overrides.taglineSeparator },
    description: { ...base.description, ...overrides.description },
    buttons: { ...base.buttons, ...overrides.buttons },
    startButton: { ...base.startButton, ...overrides.startButton },
    githubButton: { ...base.githubButton, ...overrides.githubButton },
    statistics: { ...base.statistics, ...overrides.statistics },
    statItem: { ...base.statItem, ...overrides.statItem },
    statNumber: (color: string) => ({
      ...base.statNumber(color),
      ...overrides.statNumber?.(color),
    }),
    statLabel: { ...base.statLabel, ...overrides.statLabel },
  };
};

export const heroStyles = {
  desktop: mergeStyles(baseStyles, desktopOverrides),
  mobile: mergeStyles(baseStyles, mobileOverrides),
  shared: sharedStyles,
};
