import { theme } from '@/theme';
import { getTaglineIconBase, ICON_MIN_SIZE_MOBILE } from './icon.utils';
import type { HeroStyle, HeroStylesStructure } from './shared.styles';

export const mobileOverrides: Partial<HeroStylesStructure> = {
  container: {
    padding: theme.spacing.md,
  },

  content: {
    maxWidth: '100%',
    gap: theme.spacing.xl,
    padding: `0 ${theme.spacing.sm}`,
  },

  titleContainer: {
    gap: theme.spacing.xs,
  },

  title: {
    fontSize: 'clamp(4rem, 12vw, 7rem)',
    letterSpacing: '-0.02em',
  },

  tagline: {
    gap: theme.spacing.md,
  },

  taglineItem: {
    gap: theme.spacing.md,
  },

  taglineIconCyan: {
    ...getTaglineIconBase(ICON_MIN_SIZE_MOBILE, '4vw'),
  },

  taglineIconPurple: {
    ...getTaglineIconBase(ICON_MIN_SIZE_MOBILE, '4vw'),
  },

  buttonIcon: getTaglineIconBase(ICON_MIN_SIZE_MOBILE, '4vw'),

  taglineText: {
    fontSize: `clamp(${theme.fontSizes.lg}, 2.5vw, ${theme.fontSizes['2xl']})`,
    padding: `0 ${theme.spacing.lg}`,
    fontWeight: 600,
  },

  taglineSeparator: {
    fontSize: `clamp(${theme.fontSizes.lg}, 2vw, ${theme.fontSizes.xl})`,
  },

  description: {
    maxWidth: '90%',
    fontSize: `clamp(${theme.fontSizes.xl}, 2.5vw, ${theme.fontSizes['2xl']})`,
    lineHeight: 1.8,
    letterSpacing: '0.02em',
    padding: `0 ${theme.spacing.md}`,
  },

  buttons: {
    gap: theme.spacing.xl,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },

  startButton: {
    fontSize: theme.fontSizes.lg,
  },

  githubButton: {
    fontSize: theme.fontSizes.lg,
  },

  statistics: {
    flexDirection: 'column',
    gap: `calc(${theme.spacing.xl} * 2)`,
    marginTop: theme.spacing.md,
    maxWidth: '100%',
  },

  statItem: {
    gap: theme.spacing.md,
  },

  statNumber: (_color: string): HeroStyle => ({
    fontSize: 'clamp(2.25rem, 6vw, 3rem)',
  }),

  statLabel: {
    fontSize: theme.fontSizes.lg,
  },
};
