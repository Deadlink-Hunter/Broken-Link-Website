import { HERO_COLORS } from './constants';

export const heroStyles = {
  container: {
    minHeight: '100vh',
    background: HERO_COLORS.GRADIENT.BACKGROUND,
    display: 'flex',
    alignItems: 'center',
  },

  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },

  mainStack: {
    width: '100%',
    textAlign: 'center',
  },

  titleStack: {
    marginBottom: '1.5rem',
  },

  titleText: {
    fontSize: 'clamp(3rem, 10vw, 5rem)',
    lineHeight: 0.9,
    fontFamily: 'inherit',
    marginBottom: '-0.5rem',
  },

  subtitleText: {
    fontSize: 'clamp(3rem, 10vw, 5rem)',
    lineHeight: 0.9,
    fontFamily: 'inherit',
  },

  featuresGroup: {
    marginBottom: '2rem',
  },

  featureText: {
    color: HERO_COLORS.TEXT.LIGHT_GRAY,
    fontSize: '0.875rem',
    fontWeight: 500,
  },

  dividerDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: HERO_COLORS.TEXT.DIVIDER,
  },

  descriptionContainer: {
    maxWidth: '650px',
    margin: '0 auto',
    marginBottom: '3rem',
  },

  descriptionText: {
    color: HERO_COLORS.TEXT.LIGHT_GRAY,
    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
    lineHeight: 1.6,
    fontWeight: 400,
  },

  highlightText: {
    fontSize: 'inherit',
  },

  buttonsContainer: {
    marginBottom: '4rem',
  },

  primaryButton: {
    background: HERO_COLORS.GRADIENT.BUTTON,
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 600,
    minWidth: '160px',
    height: '44px',
    color: HERO_COLORS.TEXT.WHITE,
  },

  outlineButton: {
    background: 'transparent',
    border: `1px solid ${HERO_COLORS.BORDER}`,
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 600,
    minWidth: '160px',
    height: '44px',
    color: HERO_COLORS.TEXT.LIGHT_GRAY,
  },

  statisticsContainer: {
    width: '100%',
  },

  statisticNumber: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    lineHeight: 1,
    marginBottom: '0.25rem',
  },

  statisticNumberMobile: {
    fontSize: 'clamp(2rem, 8vw, 2.5rem)',
    lineHeight: 1,
    marginBottom: '0.25rem',
  },

  statisticLabel: {
    color: HERO_COLORS.TEXT.DARK_GRAY,
    fontSize: '0.875rem',
    fontWeight: 400,
    textAlign: 'center',
  },
} as const;