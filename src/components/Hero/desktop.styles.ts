import { theme } from '@/theme';
import { getTaglineIconBase, ICON_MIN_SIZE_DESKTOP } from './icon.utils';
import type { HeroStyle, HeroStylesStructure } from './shared.styles';

export const desktopOverrides: Partial<HeroStylesStructure> = {
  container: {
    padding: `clamp(${theme.spacing.md}, 5vw, calc(${theme.spacing.xl} * 2))`,
  },

  content: {
    maxWidth: 'clamp(90%, 80vw, 1400px)',
    gap: `clamp(${theme.spacing.md}, 4vw, calc(${theme.spacing.xl} * 2))`,
    padding: `0 clamp(${theme.spacing.xs}, 2vw, ${theme.spacing.xl})`,
  },

  titleContainer: {
    gap: `clamp(${theme.spacing.xs}, 1vw, ${theme.spacing.md})`,
  },

  title: {
    fontSize: 'clamp(4rem, 10vw, 7rem)',
    letterSpacing: 'clamp(-0.02em, -0.1vw, -0.05em)',
  },

  tagline: {
    gap: `clamp(${theme.spacing.sm}, 2vw, ${theme.spacing.xl})`,
  },

  taglineItem: {
    gap: `clamp(${theme.spacing.xs}, 1.5vw, ${theme.spacing.lg})`,
  },

  taglineIconCyan: {
    ...getTaglineIconBase(ICON_MIN_SIZE_DESKTOP, '2.5vw'),
  },

  taglineIconPurple: {
    ...getTaglineIconBase(ICON_MIN_SIZE_DESKTOP, '2.5vw'),
  },

  buttonIcon: getTaglineIconBase(ICON_MIN_SIZE_DESKTOP, '2.5vw'),

  taglineText: {
    fontSize: `clamp(${theme.fontSizes.md}, 3vw, calc(${theme.fontSizes['2xl']} * 1.5))`,
    padding: `0 clamp(${theme.spacing.xs}, 1.5vw, ${theme.spacing.md})`,
    fontWeight: 500,
  },

  taglineSeparator: {
    fontSize: `clamp(${theme.fontSizes.lg}, 2.5vw, ${theme.fontSizes['2xl']})`,
  },

  description: {
    maxWidth: 'clamp(90%, 60vw, 900px)',
    fontSize: `clamp(${theme.fontSizes.lg}, 2.5vw, calc(${theme.fontSizes['2xl']} * 1.25))`,
    lineHeight: 'clamp(1.6, 0.1vw + 1.5, 2)',
    letterSpacing: 'clamp(0.01em, 0.1vw, 0.03em)',
    padding: `0 clamp(${theme.spacing.sm}, 2vw, ${theme.spacing.xl})`,
  },

  buttons: {
    gap: `clamp(${theme.spacing.lg}, 4vw, calc(${theme.spacing.xl} * 2))`,
    marginTop: `clamp(${theme.spacing.xl}, 2vw, ${theme.spacing.xl})`,
    marginBottom: `clamp(${theme.spacing.xl}, 2vw, ${theme.spacing.xl})`,
  },

  startButton: {
    fontSize: theme.fontSizes.xl,
  },

  githubButton: {
    fontSize: theme.fontSizes.xl,
  },

  statistics: {
    flexDirection: 'row',
    gap: `calc(${theme.spacing['2xl']} * 3)`,
    marginTop: `calc(${theme.spacing['2xl']} * 1.5)`,
    maxWidth: 'clamp(90%, 60vw, 900px)',
  },

  statItem: {
    gap: `clamp(${theme.spacing.sm}, 1.5vw, ${theme.spacing.lg})`,
  },

  statNumber: (_color: string): HeroStyle => ({
    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
  }),

  statLabel: {
    fontSize: `clamp(${theme.fontSizes.md}, 2vw, ${theme.fontSizes.xl})`,
  },
};
