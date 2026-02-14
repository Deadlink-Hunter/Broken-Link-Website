import { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { theme } from '@/theme';

const colors = theme.colors;

export const exploreToolkitStyles = {
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: theme.spacing['2xl'],
  } satisfies CSSProperties,

  title: {
    color: `light-dark(${theme.black}, ${theme.white})`,
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
    color: 'var(--mantine-color-dimmed)',
    textAlign: 'center',
  } satisfies CSSProperties,

  cardRoot: {
    height: '100%',
    minHeight: 340,
    padding: theme.spacing.xl,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 16,

    backgroundColor: rgba(colors.primary[6], 0.5),
    border: `1px solid ${rgba(colors.primary[2], 0.15)}`,
    backdropFilter: 'blur(12px)',
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
    color: theme.white,
    fontWeight: 900,
    fontSize: '1.25rem',
    marginBottom: theme.spacing.sm,
  } satisfies CSSProperties,

  cardDescription: {
    marginBottom: theme.spacing.xl,
    color: rgba(theme.white, 0.72),
    fontSize: '0.95rem',
    lineHeight: 1.6,
  } satisfies CSSProperties,

  cardButton: {
    marginTop: 'auto',
    padding: 0,
    backgroundColor: 'transparent',
    border: 'none',

    color: colors.cyan[4],
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
  } satisfies CSSProperties,
};
