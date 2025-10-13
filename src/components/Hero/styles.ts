import { rem } from '@mantine/core';
import { gradients } from '@/theme';

const TITLE_FONT_SIZE = `clamp(${rem(48)}, 10vw, ${rem(80)})`;
const DESCRIPTION_FONT_SIZE = `clamp(${rem(16)}, 2.5vw, ${rem(20)})`;
const STATISTIC_FONT_SIZE = `clamp(${rem(32)}, 5vw, ${rem(48)})`;
const STATISTIC_FONT_SIZE_MOBILE = `clamp(${rem(32)}, 8vw, ${rem(40)})`;

export const heroStyles = {
  container: {
    minHeight: '100vh',
    background: gradients.hero.background,
    display: 'flex',
    alignItems: 'center',
  },

  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: rem(32),
    paddingBottom: rem(32),
  },

  containerWithMaxWidth: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: rem(32),
    paddingBottom: rem(32),
    maxWidth: rem(1200),
  },

  mainStack: {
    display: 'flex',
    flexDirection: 'column' as const,
    width: '100%',
    textAlign: 'center' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0,
  },

  titleStack: {
    display: 'flex',
    flexDirection: 'column' as const,
    marginBottom: rem(24),
    alignItems: 'center',
    gap: 0,
  },

  gradientTitle: {
    fontSize: TITLE_FONT_SIZE,
    lineHeight: 0.9,
    marginBottom: rem(-8),
    background: gradients.hero.title,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  whiteTitle: {
    fontSize: TITLE_FONT_SIZE,
    lineHeight: 0.9,
    color: 'var(--mantine-color-white)',
  },

  featuresGroup: {
    display: 'flex',
    marginBottom: rem(32),
    justifyContent: 'center',
    gap: rem(16),
  },

  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: rem(4),
  },

  featureText: {
    color: 'var(--mantine-color-primary-2)',
    fontSize: rem(14),
    fontWeight: 500,
  },

  dividerDot: {
    width: rem(4),
    height: rem(4),
    borderRadius: '50%',
    backgroundColor: 'var(--mantine-color-primary-4)',
  },

  cyanIcon: {
    color: 'var(--mantine-color-cyan-5)',
    fill: 'var(--mantine-color-cyan-5)',
  },

  purpleIcon: {
    color: 'var(--mantine-color-purple-5)',
  },

  descriptionContainer: {
    maxWidth: rem(650),
    margin: '0 auto',
    marginBottom: rem(48),
  },

  descriptionText: {
    color: 'var(--mantine-color-primary-2)',
    fontSize: DESCRIPTION_FONT_SIZE,
    lineHeight: 1.6,
    fontWeight: 400,
  },

  highlightSpan: {
    color: 'var(--mantine-color-cyan-5)',
    fontWeight: 600,
  },

  buttonsContainer: {
    marginBottom: rem(64),
  },

  // TODO: Replace this media query with future Mantine breakpoints that will come from the theme
  buttonsDesktop: {
    justifyContent: 'center',
    gap: rem(16),
    display: 'flex',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },

  // TODO: Replace this media query with future Mantine breakpoints that will come from the theme
  buttonsMobile: {
    alignItems: 'center',
    gap: rem(8),
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column' as const,
    },
  },

  primaryButton: {
    background: gradients.hero.button,
    border: 'none',
    borderRadius: rem(8),
    padding: `${rem(12)} ${rem(24)}`,
    fontSize: rem(16),
    fontWeight: 600,
    minWidth: rem(160),
    height: rem(44),
    color: 'var(--mantine-color-white)',
  },

  outlineButton: {
    background: 'transparent',
    border: `${rem(1)} solid rgba(148, 163, 184, 0.3)`,
    borderRadius: rem(8),
    padding: `${rem(12)} ${rem(24)}`,
    fontSize: rem(16),
    fontWeight: 600,
    minWidth: rem(160),
    height: rem(44),
    color: 'var(--mantine-color-primary-2)',
  },

  statisticsContainer: {
    width: '100%',
  },

  statisticsDesktop: {
    justifyContent: 'center',
    gap: rem(64),
    display: 'flex',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },

  // TODO: Replace this media query with future Mantine breakpoints that will come from the theme
  statisticsMobile: {
    alignItems: 'center',
    gap: rem(32),
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column' as const,
    },
  },

  statisticItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: rem(4),
  },

  statisticNumber: {
    fontSize: STATISTIC_FONT_SIZE,
    lineHeight: 1,
    marginBottom: rem(4),
  },

  statisticNumberMobile: {
    fontSize: STATISTIC_FONT_SIZE_MOBILE,
    lineHeight: 1,
    marginBottom: rem(4),
  },

  statisticLabel: {
    color: 'var(--mantine-color-primary-3)',
    fontSize: rem(14),
    fontWeight: 400,
    textAlign: 'center' as const,
  },

  cyanText: {
    color: 'var(--mantine-color-cyan-5)',
  },

  purpleText: {
    color: 'var(--mantine-color-purple-5)',
  },

  successText: {
    color: 'var(--mantine-color-success-5)',
  },
};