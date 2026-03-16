import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;
const getTextColor = (isDark: boolean) => (isDark ? theme.white : colors.gray[7]);

export const pageWrapperStyle: CSSProperties = {
  width: '100%',
  maxWidth: '80rem',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6rem 1.5rem',
  margin: '0 auto',
};

export const centerGrid = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing['2xl'],
};

export const smallContainerStyle = {
  display: 'grid',
  maxWidth: 'max-content',
  gap: theme.spacing.lg,
  gridTemplateColumns: '1fr',
};

export const bigContainerStyle = {
  display: 'grid',
  maxWidth: 'max-content',
  gap: theme.spacing.lg,
  gridTemplateColumns: '1fr 1fr',
};

export const getFeatureCardStyles = (isDark: boolean) => ({
  backgroundColor: isDark ? colors.primary[8] : theme.white,
  border: `1px solid ${isDark ? colors.primary[9] : colors.primary[1]}`,
  boxShadow: `0 1px 3px ${isDark ? colors.primary[1] : colors.primary[2]}`,
  padding: theme.spacing.lg,
  borderRadius: '0.5rem',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: theme.spacing.lg,
});

export const getMissionCardStyles = (isDark: boolean): CSSProperties => ({
  backgroundColor: isDark ? colors.primary[8] : theme.white,
  border: `1px solid ${isDark ? colors.primary[9] : colors.primary[1]}`,
  padding: theme.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: theme.spacing.lg,
});

export const getTitleStyle = (isDark: boolean) => ({
  color: isDark ? colors.primary[1] : theme.black,
});

export const getParagraphStyle = (isDark: boolean) => ({
  color: isDark ? colors.primary[2] : colors.gray[7],
  gridColumnStart: 2,
});

export const iconStyle = {
  gridRowEnd: 'span 2',
};

export const aboutPageStyle = {
  centerGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing['2xl'],
  } satisfies CSSProperties,

  titleStyle: {
    fontWeight: 900,
    fontSize: '3.5rem',
    lineHeight: 1.1,
    display: 'inline-block',
    textAlign: 'center',
  } satisfies CSSProperties,

  whiteText: {
    color: theme.white,
  } satisfies CSSProperties,

  blackText: {
    color: 'var(--mantine-color-black)',
  } satisfies CSSProperties,

  brandStyle: {
    background:
      'linear-gradient(90deg, var(--mantine-color-cyan-4) 0%, var(--mantine-color-purple-5) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  } satisfies CSSProperties,

  text: (isDark: boolean): CSSProperties => ({
    color: getTextColor(isDark),
    paddingBlock: theme.spacing.lg,
    fontSize: '1.1rem',
    textAlign: 'center',
    maxWidth: '700px',
  }),
};
