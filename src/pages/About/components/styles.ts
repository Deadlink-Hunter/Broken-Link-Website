import { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { sharedStyles, theme } from '@/theme';

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

export const featureCardStyles = {
  backgroundColor: colors.primary[8],
  border: `1px solid ${rgba(colors.primary[2], 0.15)}`,
  padding: theme.spacing.lg,
  borderRadius: '0.5rem',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: theme.spacing.lg,
};

export const missionCardStyles: CSSProperties = {
  backgroundColor: colors.primary[8],
  border: `1px solid ${colors.primary[9]}`,
  padding: theme.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: theme.spacing.lg,
};

export const titleStyle = {
  color: colors.primary[1],
};

export const paragraphStyle = {
  color: colors.primary[2],
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
    marginBottom: theme.spacing['2xl'],
  } satisfies CSSProperties,

  titleStyle: {
    ...sharedStyles.sectionTitle,
    display: 'inline-block',
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
    fontSize: '1.1rem',
    textAlign: 'center',
    maxWidth: '700px',
  }),
};

export const communitySectionStyle = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing['2xl'],
    gap: theme.spacing.md,
  } satisfies CSSProperties,

  mainTitle: {
    ...aboutPageStyle.titleStyle,
  } satisfies CSSProperties,

  largeCard: {
    backgroundColor: colors.primary[8],
    border: `1px solid ${rgba(colors.primary[2], 0.1)}`,
    padding: '3rem',
    borderRadius: '1.25rem',
    width: '100%',
    maxWidth: '1050px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg,
    marginTop: theme.spacing.xl,
    textAlign: 'left',
    position: 'relative',
  } satisfies CSSProperties,

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  } satisfies CSSProperties,

  heartIcon: {
    color: colors.cyan[4],
  } satisfies CSSProperties,

  cardTitle: {
    color: theme.white,
    fontSize: theme.fontSizes['2xl'],
    fontWeight: 700,
  } satisfies CSSProperties,

  cardParagraph: {
    color: colors.primary[2],
    fontSize: '1.05rem',
    lineHeight: 1.7,
  } satisfies CSSProperties,

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: theme.spacing.xl,
    flexWrap: 'wrap',
    gap: theme.spacing.lg,
  } satisfies CSSProperties,

  techStackGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,
  } satisfies CSSProperties,

  techLabel: {
    color: colors.primary[3],
    fontSize: theme.fontSizes.sm,
  } satisfies CSSProperties,

  pillsContainer: {
    display: 'flex',
    gap: theme.spacing.md,
    flexWrap: 'wrap',
  } satisfies CSSProperties,

  pill: {
    backgroundColor: colors.primary[7],
    border: `1px solid ${rgba(colors.primary[3], 0.2)}`,
    padding: '0.4rem 1rem',
    borderRadius: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  } satisfies CSSProperties,

  pillText: {
    color: colors.primary[1],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  } satisfies CSSProperties,

  ctaButton: {
    background: `linear-gradient(90deg, ${colors.cyan[4]} 0%, ${colors.purple[5]} 100%)`,
    padding: '0.8rem 1.5rem',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    color: theme.white,
    fontWeight: 700,
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
  } satisfies CSSProperties,
};