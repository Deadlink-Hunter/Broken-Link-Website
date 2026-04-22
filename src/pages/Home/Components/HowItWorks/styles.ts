import type { CSSProperties } from 'react';
import { sharedStyles, theme } from '@/theme';

const colors = theme.colors;

const cardIconBase: CSSProperties = {
  marginBottom: theme.spacing.lg,
  padding: '1rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-9))',
  border: '2px solid light-dark(var(--mantine-color-white), var(--mantine-color-dark-9))',
};

const baseGraphicIcon: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const baseListDot: CSSProperties = {
  width: '1rem',
  height: '1rem',
  flexShrink: 0,
  margin: '0 0.5rem',
  border: '2px solid light-dark(var(--mantine-color-dark-9), var(--mantine-color-dark-9))',
};

export const cardIconStyles = {
  scan: {
    ...cardIconBase,
    background: colors.orange[5],
  },
  analyze: {
    ...cardIconBase,
    background: colors.warning[5],
  },
  fix: {
    ...cardIconBase,
    background: colors.green[5],
  },
} satisfies Record<string, CSSProperties>;

export const howItWorksStyles = {
  container: {
    maxWidth: '75rem',
    margin: '0 auto',
    padding: theme.spacing['2xl'],
    fontFamily: '"IBM Plex Mono", monospace',
  } satisfies CSSProperties,

  title: {
    ...sharedStyles.sectionTitle,
    color: `light-dark(${theme.black}, ${theme.white})`,
    marginBottom: theme.spacing.xl,
  } satisfies CSSProperties,

  highlightCyan: {
    color: 'light-dark(var(--mantine-color-orange-6), var(--mantine-color-orange-5))',
  } satisfies CSSProperties,

  description: {
    maxWidth: '32.5rem',
    margin: `0 auto ${theme.spacing['2xl']}`,
    textAlign: 'center',
    color: 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
  } satisfies CSSProperties,

  cards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    paddingBottom: theme.spacing['2xl'],
  } satisfies CSSProperties,

  cardsMobile: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.25rem',
    flexWrap: 'wrap',
    paddingBottom: theme.spacing['2xl'],
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
  } satisfies CSSProperties,

  card: {
    width: 'calc(100% - 2.5rem)',
    maxWidth: '25rem',
    minHeight: '18rem',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: theme.spacing.md,
    position: 'relative',
    overflow: 'visible',
    boxSizing: 'border-box',
    border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-orange-6))',
    backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
    boxShadow: '8px 8px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
    padding: '24px',
  } satisfies CSSProperties,

  cardMobile: {
    width: '100%',
    maxWidth: '100%',
    minHeight: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: theme.spacing.md,
    position: 'relative',
    overflow: 'visible',
    boxSizing: 'border-box',
    border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-orange-6))',
    backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
    boxShadow: '4px 4px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
    padding: '24px',
  } satisfies CSSProperties,

  stepBadge: {
    position: 'absolute',
    top: '-1rem',
    left: '-1rem',
    width: '3rem',
    height: '3rem',
    background: colors.orange[6],
    color: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-9))',
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 'bold',
    fontSize: theme.fontSizes.xl,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-9))',
    boxShadow: '2px 2px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
  } satisfies CSSProperties,

  cardTitle: {
    color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-white))',
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: theme.fontSizes.xl,
    marginBottom: theme.spacing.sm,
  } satisfies CSSProperties,

  cardDescription: {
    marginBottom: theme.spacing.xl,
    color: 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
    fontSize: theme.fontSizes.md,
    lineHeight: 1.6,
  } satisfies CSSProperties,

  featureGraphicContainer: {
    flex: 1,
    minWidth: 'min(15.625rem, 100%)',
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
    height: '0.375rem',
    flex: 1,
    background: `linear-gradient(90deg, ${colors.orange[6]}, transparent)`,
  } satisfies CSSProperties,

  graphicLinePurple: {
    height: '0.375rem',
    flex: 1,
    background: `linear-gradient(90deg, transparent, ${colors.orange[6]})`,
  } satisfies CSSProperties,

  graphicIconRed: {
    ...baseGraphicIcon,
    width: '2rem',
    height: '2rem',
    backgroundColor: colors.error[5],
    border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-9))',
  } satisfies CSSProperties,

  graphicIconGreen: {
    ...baseGraphicIcon,
    width: '2rem',
    height: '2rem',
    backgroundColor: colors.green[5],
    border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-9))',
  } satisfies CSSProperties,

  graphicMainIcon: {
    ...baseGraphicIcon,
    width: '5rem',
    height: '5rem',
    background: colors.orange[6],
    position: 'relative',
    border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-9))',
    boxShadow: '4px 4px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
    color: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-9))',
  } satisfies CSSProperties,

  graphicCheckBadge: {
    ...baseGraphicIcon,
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: colors.green[5],
    border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-9))',
  } satisfies CSSProperties,

  featureTextContent: {
    flex: 1.5,
    minWidth: 'min(18.75rem, 100%)',
  } satisfies CSSProperties,

  featureTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1.5rem',
  } satisfies CSSProperties,

  featureTitleLine: {
    fontFamily: '"Share Tech Mono", monospace',
    fontSize: '2rem',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    lineHeight: 1.2,
    color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-white))',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  } satisfies CSSProperties,

  featureTitleGradient: {
    color: 'light-dark(var(--mantine-color-orange-6), var(--mantine-color-orange-5))',
    textShadow: '2px 2px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
  } satisfies CSSProperties,

  featureDescriptionText: {
    marginBottom: '2rem',
    fontSize: theme.fontSizes.md,
    lineHeight: 1.6,
    color: 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
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

  featureListText: {
    fontSize: theme.fontSizes.sm,
    color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-white))',
    fontFamily: '"Share Tech Mono", monospace',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  } satisfies CSSProperties,

  listDotCyan: {
    ...baseListDot,
    backgroundColor: colors.orange[5],
  } satisfies CSSProperties,

  listDotPurple: {
    ...baseListDot,
    backgroundColor: colors.warning[5],
  } satisfies CSSProperties,

  listDotGreen: {
    ...baseListDot,
    backgroundColor: colors.green[5],
  } satisfies CSSProperties,
};
