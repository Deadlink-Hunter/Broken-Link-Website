import { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { sharedStyles, theme } from '@/theme';

const colors = theme.colors;

export const ABOUT_CARD_MAX_WIDTH = '65.625rem';

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

export const featureCardStyles: CSSProperties = {
  padding: theme.spacing.lg,
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: theme.spacing.lg,
  width: '100%',
};

export const missionCardStyles = (isDark: boolean): CSSProperties => ({
  backgroundColor: isDark ? colors.primary[8] : colors.gray[1],
  border: `1px solid ${isDark ? colors.primary[9] : colors.gray[3]}`,
  padding: '3rem 2.5rem',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem',
  width: '100%',
  maxWidth: ABOUT_CARD_MAX_WIDTH,
  borderRadius: '1.25rem',
  margin: '2rem auto',
  boxSizing: 'border-box',
});

const getMediumTextColor = (isDark: boolean) => (isDark ? theme.white : colors.gray[7]);

export const missionTitleStyle = (isDark: boolean): CSSProperties => ({
  color: getMediumTextColor(isDark),
  fontSize: '1.5rem',
  fontWeight: 400,
  marginBottom: '0.5rem',
});

export const missionDescriptionStyle = (isDark: boolean): CSSProperties => ({
  color: getMediumTextColor(isDark),
  fontSize: '1rem',
  lineHeight: 1.6,
});

export const titleStyle = {
  fontSize: '1.25rem',
  fontWeight: 600,
};

export const paragraphStyle = {
  gridColumnStart: 2,
};

export const iconStyle = {
  gridRowEnd: 'span 2',
  marginBottom: theme.spacing.lg,
  padding: 8,
  borderRadius: 14,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${rgba(colors.cyan[4], 0.25)}, ${rgba(colors.purple[5], 0.25)})`,
  color: colors.cyan[4],
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
    ...sharedStyles.sectionTitle,
    display: 'inline-block',
  } satisfies CSSProperties,

  whiteText: {
    color: theme.white,
  } satisfies CSSProperties,

  blackText: {
    color: 'var(--mantine-color-black)',
  } satisfies CSSProperties,

  text: (isDark: boolean): CSSProperties => ({
    color: isDark ? theme.white : theme.colors.gray[7],
    paddingBlock: theme.spacing.lg,
    fontSize: '1.1rem',
    textAlign: 'center',
    maxWidth: '700px',
  }),
};
