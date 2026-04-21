import { CSSProperties } from 'react';
import { sharedStyles, theme } from '@/theme';

const colors = theme.colors;

export const exploreToolkitStyles = {
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: theme.spacing['2xl'],
    fontFamily: '"IBM Plex Mono", monospace',
  } satisfies CSSProperties,

  title: {
    ...sharedStyles.sectionTitle,
    color: `light-dark(${theme.black}, ${theme.white})`,
    marginBottom: theme.spacing.xl,
  } satisfies CSSProperties,

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: theme.spacing.xl,
  } satisfies CSSProperties,

  description: {
    maxWidth: 800,
    margin: `0 auto ${theme.spacing['2xl']}`,
    textAlign: 'center',
    fontSize: theme.fontSizes.lg,
    color: 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
  } satisfies CSSProperties,

  cardIcon: {
    marginBottom: theme.spacing.lg,
    padding: 14,
    borderRadius: '0px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `2px solid ${colors.orange[6]}`,
    backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
    color: 'light-dark(var(--mantine-color-orange-6), var(--mantine-color-orange-5))',
    boxShadow: '4px 4px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
  } satisfies CSSProperties,

  cardTitle: {
    fontFamily: '"Share Tech Mono", monospace',
    color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-white))',
    fontWeight: 400,
    fontSize: '1.5rem',
    marginBottom: theme.spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  } satisfies CSSProperties,

  cardDescription: {
    marginBottom: theme.spacing.xl,
    color: 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
    fontSize: '1rem',
    lineHeight: 1.6,
  } satisfies CSSProperties,

  cardButton: {
    marginTop: 'auto',
    padding: '12px 16px',
    backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
    border: `2px solid ${colors.orange[6]}`,
    color: 'light-dark(var(--mantine-color-orange-6), var(--mantine-color-orange-5))',
    fontFamily: '"Share Tech Mono", monospace',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    cursor: 'pointer',
    transition: 'all 0.1s ease',
  } satisfies CSSProperties,
};
