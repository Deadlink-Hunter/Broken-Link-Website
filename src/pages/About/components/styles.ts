import { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { sharedStyles, theme } from '@/theme';

const colors = theme.colors;
const getTextColor = (isDark: boolean) => (isDark ? theme.colors.primary[1] : colors.gray[7]);

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
  gap: theme.spacing.xl,
  gridTemplateColumns: '2fr 2fr',
};

export const featureCardStyles = {
  backgroundColor: colors.primary[8],
  border: `1px solid ${rgba(colors.primary[2], 0.15)}`,
  borderRadius: '24px',
  padding: theme.spacing.xl,
  width: '640px',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  alignItems: 'start',
  gap: theme.spacing.lg,
};

export const missionCardStyles: CSSProperties = {
  backgroundColor: colors.primary[8],
  border: `1px solid ${colors.primary[9]}`,
  borderRadius: '24px',
  height: '241px',
  width: '1312px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  textAlign: 'center',
};

export const titleStyle = {
  color: 'white',
  fontWeight: 700,
  fontSize: theme.fontSizes.xl,
  gridColumnStart: 2, // to start in the same line
};
export const LargeTitleStyle = {
  ...titleStyle,
  fontSize: '24px',
};
export const paragraphStyle = {
  color: colors.primary[1],
  gridColumnStart: 2,
};
export const largeParagraphStyle = {
  ...paragraphStyle,
  fontSize: theme.fontSizes.lg,
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
    fontSize: '3rem',
    fontWeight: 700,
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

  text: (isDark: boolean): CSSProperties => ({
    color: getTextColor(isDark),
    paddingBlock: theme.spacing.lg,
    fontSize: theme.fontSizes.lg,
    textAlign: 'center',
    maxWidth: '700px',
  }),
};
