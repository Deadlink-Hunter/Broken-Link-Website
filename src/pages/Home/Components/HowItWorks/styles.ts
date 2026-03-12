import type { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { theme } from '@/theme';

const colors = theme.colors;

// TODO: there is a code duplication in here, we should extract common title styles to a single place
export const cardIconWrapper = (from: string, to: string): CSSProperties => ({
  marginBottom: theme.spacing.lg,
  padding: '0.875rem',
  borderRadius: '0.875rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${from}, ${to})`,
  color: theme.white,
});

export const howItWorksStyles = {
  container: {
    maxWidth: '75rem',
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

  highlight: {
    backgroundImage: `linear-gradient(90deg, ${colors.cyan[4]}, ${colors.purple[5]})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies CSSProperties,

  description: {
    maxWidth: '32.5rem',
    margin: `0 auto ${theme.spacing['2xl']}`,
    textAlign: 'center',
  } satisfies CSSProperties,

  cards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    paddingBottom: theme.spacing['2xl'],
  } satisfies CSSProperties,

  card: {
    width: '25rem',
    height: '18rem',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: theme.spacing.md,
    position: 'relative',
    overflow: 'visible',
  } satisfies CSSProperties,

  stepBadge: {
    position: 'absolute',
    top: '-1rem',
    left: '-1rem',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${colors.cyan[4]}, ${colors.purple[5]})`,
    color: theme.white,
    fontWeight: 750,
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
};
