import { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { theme } from '@/theme';

const colors = theme.colors;

export const getExploreToolkitStyles = (isDark: boolean) => ({
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: theme.spacing['2xl'],
  } satisfies CSSProperties,

  title: {
    color: isDark ? theme.white : theme.black,
    fontWeight: 900,
    fontSize: '3.5rem',
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  } satisfies CSSProperties,

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: theme.spacing.xl,
  } satisfies CSSProperties,

  highlight: {
    backgroundImage: `linear-gradient(90deg, ${colors.cyan[4]}, ${colors.purple[5]})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies CSSProperties,

  description: {
    maxWidth: 520,
    margin: `0 auto ${theme.spacing['2xl']}`,
    textAlign: 'center',
  } satisfies CSSProperties,

  cardIcon: {
    marginBottom: theme.spacing.lg,
    padding: 14,
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
  } satisfies CSSProperties,

  cardTitle: {
    color: isDark ? theme.white : theme.black,
    fontWeight: 900,
    fontSize: '1.25rem',
    marginBottom: theme.spacing.sm,
  } satisfies CSSProperties,

  cardDescription: {
    marginBottom: theme.spacing.xl,
    color: isDark ? rgba(theme.white, 0.72) : colors.gray[7],
    fontSize: '0.95rem',
    lineHeight: 1.6,
  } satisfies CSSProperties,

  cardButton: {
    marginTop: 'auto',
    padding: 0,
    backgroundColor: 'transparent',
    border: 'none',

    color: isDark ? colors.cyan[4] : colors.cyan[7],
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
  } satisfies CSSProperties,
});
