import type { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { theme } from '@/theme';

const colors = theme.colors;

const cardIconBase: CSSProperties = {
  marginBottom: theme.spacing.lg,
  padding: '0.875rem',
  borderRadius: '0.875rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.white,
};

export const cardIconStyles = {
  scan: {
    ...cardIconBase,
    background: `linear-gradient(135deg, ${colors.cyan[3]}, ${colors.cyan[6]})`,
  },
  analyze: {
    ...cardIconBase,
    background: `linear-gradient(135deg, ${colors.error[4]}, ${colors.purple[5]})`,
  },
  fix: {
    ...cardIconBase,
    background: `linear-gradient(135deg, ${colors.success[3]}, ${colors.success[6]})`,
  },
} satisfies Record<string, CSSProperties>;

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

  highlightCyan: {
    color: colors.cyan[4],
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

  featureCard: {
    width: '100%',
    maxWidth: '65rem',
    margin: '0 auto',
    marginBottom: theme.spacing['2xl'],
    display: 'flex',
    flexDirection: 'row',
    gap: '3rem',
    padding: '3rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  } satisfies CSSProperties,

  featureGraphicContainer: {
    flex: 1,
    minWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    position: 'relative',
  } satisfies CSSProperties,

  graphicLineGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
  } satisfies CSSProperties,

  graphicLineCyan: {
    height: '6px',
    flex: 1,
    borderRadius: '4px',
    background: `linear-gradient(90deg, ${colors.cyan[6]}, transparent)`,
  } satisfies CSSProperties,

  graphicLinePurple: {
    height: '6px',
    flex: 1,
    borderRadius: '4px',
    background: `linear-gradient(90deg, transparent, ${colors.purple[6]})`,
  } satisfies CSSProperties,

  graphicIconRed: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgba(250, 82, 82, 0.2)',
    border: `1px dashed ${colors.error[5]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } satisfies CSSProperties,

  graphicIconGreen: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: colors.success[6],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } satisfies CSSProperties,

  graphicMainIcon: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${colors.cyan[5]}, ${colors.purple[5]})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  } satisfies CSSProperties,

  graphicCheckBadge: {
    position: 'absolute',
    top: 0,
    right: -5,
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: colors.success[5],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid #1a1b1e',
  } satisfies CSSProperties,

  featureTextContent: {
    flex: 1.5,
    minWidth: '300px',
  } satisfies CSSProperties,

  featureList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  } satisfies CSSProperties,

  featureListItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
  } satisfies CSSProperties,

  listDotCyan: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: colors.cyan[4],
    boxShadow: `0 0 0 4px ${rgba(colors.cyan[4], 0.2)}`,
    flexShrink: 0,
    margin: '0 4px',
  } satisfies CSSProperties,

  listDotPurple: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: colors.purple[5],
    boxShadow: `0 0 0 4px ${rgba(colors.purple[5], 0.2)}`,
    flexShrink: 0,
    margin: '0 4px',
  } satisfies CSSProperties,

  listDotGreen: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: colors.success[5],
    boxShadow: `0 0 0 4px ${rgba(colors.success[5], 0.2)}`,
    flexShrink: 0,
    margin: '0 4px',
  } satisfies CSSProperties,

  featureTitleGradient: {
    backgroundImage: `linear-gradient(90deg, ${colors.cyan[4]}, ${colors.purple[5]})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies CSSProperties,

  featureDescriptionText: {
    marginBottom: '2rem',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: rgba(theme.white, 0.75),
  } satisfies CSSProperties,
};
