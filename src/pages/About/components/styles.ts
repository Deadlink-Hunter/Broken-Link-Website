import { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { sharedStyles, theme } from '@/theme';

const colors = theme.colors;

export const pageWrapperStyle: CSSProperties = {
  width: '100%',
  maxWidth: '85rem',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6rem 1.5rem',
  margin: '0 auto',
};

export const centerGrid: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing['2xl'],
};

export const missionSectionStyle: CSSProperties = {
  ...centerGrid,
  width: '100%',
};

export const smallContainerStyle = {
  display: 'grid',
  width: '100%',
  gap: theme.spacing.lg,
  gridTemplateColumns: '1fr',
};

export const bigContainerStyle = {
  display: 'grid',
  width: '100%',
  justifyItems: 'stretch',
  alignItems: 'stretch',
  gap: theme.spacing.xl,
  gridTemplateColumns: 'repeat(2, 1fr)',
};
export const featureCardStyles = (isDark: boolean) => {
  return {
    featureCard: {
      backgroundColor: isDark ? colors.primary[8] : theme.white,
      border: `1px solid ${isDark ? colors.primary[9] : colors.gray[3]}`,
      borderRadius: '1.5rem',
      width: '100%',
      padding: theme.spacing.xl,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      alignItems: 'start',
      gap: theme.spacing.lg,
      height: '100%',
    },
    title: {
      color: isDark ? theme.colors.primary[0] : theme.colors.primary[2],
      fontWeight: 700,
      fontSize: theme.fontSizes.xl,
    },
    description: {
      color: isDark ? theme.colors.gray[3] : theme.colors.primary[7],
    },
  };
};

export const missionCardStyles = (isDark: boolean) => {
  return {
    card: {
      backgroundColor: isDark ? colors.primary[8] : theme.white,
      border: `1px solid ${isDark ? colors.primary[9] : colors.gray[3]}`,
      borderRadius: '1.5rem',
      minHeight: '15rem',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: theme.spacing.lg,
      padding: theme.spacing.xl,
      textAlign: 'center',
    } as CSSProperties,

    title: {
      color: isDark ? theme.colors.primary[0] : theme.colors.primary[2],
      fontWeight: 700,
      fontSize: theme.spacing.xl,
    } as CSSProperties,

    paragraph: {
      color: isDark ? theme.colors.primary[0] : colors.primary[2],
      fontSize: theme.fontSizes.lg,
      lineHeight: 1.6,
    } as CSSProperties,
  };
};

export const iconStyle = {
  gridRowEnd: 'span 2',
  padding: 10,
  borderRadius: 13,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(
      135deg,
      ${rgba(colors.cyan[4], 0.25)},
      ${rgba(colors.purple[5], 0.25)}
    )`,
  color: colors.cyan[4],
};

export const aboutPageStyle = {
  centerGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.xl,
  } satisfies CSSProperties,

  titleStyle: {
    ...sharedStyles.sectionTitle,
    display: 'inline-block',
    fontSize: '3.3rem',
    fontWeight: 800,
  } satisfies CSSProperties,

  brandStyle: {
    ...sharedStyles.gradientText,
  } satisfies CSSProperties,

  whiteText: {
    color: theme.white,
  } satisfies CSSProperties,

  blackText: {
    color: 'var(--mantine-color-black)',
  } satisfies CSSProperties,

  text: {
    paddingBlock: theme.spacing.lg,
    fontSize: theme.fontSizes.lg,
    textAlign: 'center',
    maxWidth: '43.75rem',
  } satisfies CSSProperties,
};
