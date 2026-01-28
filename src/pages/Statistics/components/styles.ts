import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;
const getTextColor = (isDark: boolean) =>
  isDark ? theme.white : colors.gray[7];

export const graphsStyles = {
  containerDisplay: (isMobileView: boolean): CSSProperties => ({
    display: 'flex',
    flexDirection: isMobileView ? 'column' : 'row',
    justifyContent: isMobileView ? 'flex-start' : 'center',
  }),
  cardStyles: (isMobileView: boolean): CSSProperties => ({
    width: isMobileView ? '90%' : '30%',
    margin: theme.spacing.lg,
  }),
  cardHeader: { color: theme.white, fontWeight: 'bold', fontSize: '1.4em', marginBottom: '1rem' },
};

export const statisticsPageStyle = {
  centerGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing['2xl'],
    marginTop: theme.spacing['2xl'],
  } satisfies CSSProperties,

  titleStyle: {
    fontWeight: 900,
    fontSize: '3.5rem',
    lineHeight: 1.1,
    textAlign: 'center',
  } satisfies CSSProperties,

  whiteText: {
    color: theme.white,
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