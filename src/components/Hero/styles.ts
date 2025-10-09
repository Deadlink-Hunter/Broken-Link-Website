import { rem } from '@mantine/core';

export const heroStyles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, var(--mantine-color-primary-7) 0%, var(--mantine-color-primary-6) 25%, var(--mantine-color-primary-7) 50%, var(--mantine-color-purple-8) 75%, var(--mantine-color-primary-7) 100%)',
    display: 'flex',
    alignItems: 'center',
  },

  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: rem(32),
    paddingBottom: rem(32),
  },

  mainStack: {
    width: '100%',
    textAlign: 'center' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0,
  },

  titleStack: {
    marginBottom: rem(24),
    alignItems: 'center',
    gap: 0,
  },

  titleText: {
    fontSize: `clamp(${rem(48)}, 10vw, ${rem(80)})`,
    lineHeight: 0.9,
    fontFamily: 'inherit',
    marginBottom: rem(-8),
  },

  subtitleText: {
    fontSize: `clamp(${rem(48)}, 10vw, ${rem(80)})`,
    lineHeight: 0.9,
    fontFamily: 'inherit',
  },

  featuresGroup: {
    marginBottom: rem(32),
    justifyContent: 'center',
    gap: rem(16),
  },

  featureItem: {
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

  descriptionContainer: {
    maxWidth: rem(650),
    margin: '0 auto',
    marginBottom: rem(48),
  },

  descriptionText: {
    color: 'var(--mantine-color-primary-2)',
    fontSize: `clamp(${rem(16)}, 2.5vw, ${rem(20)})`,
    lineHeight: 1.6,
    fontWeight: 400,
  },

  highlightText: {
    fontSize: 'inherit',
  },

  buttonsContainer: {
    marginBottom: rem(64),
  },

  buttonsDesktop: {
    justifyContent: 'center',
    gap: rem(16),
    display: 'flex',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },

  buttonsMobile: {
    alignItems: 'center',
    gap: rem(8),
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  primaryButton: {
    background: 'linear-gradient(90deg, var(--mantine-color-cyan-5), var(--mantine-color-purple-5))',
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
    border: '1px solid rgba(148, 163, 184, 0.3)',
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

  statisticsMobile: {
    alignItems: 'center',
    gap: rem(32),
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  statisticItem: {
    alignItems: 'center',
    gap: rem(4),
  },

  statisticNumber: {
    fontSize: `clamp(${rem(32)}, 5vw, ${rem(48)})`,
    lineHeight: 1,
    marginBottom: rem(4),
  },

  statisticNumberMobile: {
    fontSize: `clamp(${rem(32)}, 8vw, ${rem(40)})`,
    lineHeight: 1,
    marginBottom: rem(4),
  },

  statisticLabel: {
    color: 'var(--mantine-color-primary-3)',
    fontSize: rem(14),
    fontWeight: 400,
    textAlign: 'center' as const,
  },
};