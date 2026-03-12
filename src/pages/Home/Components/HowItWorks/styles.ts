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

const baseGraphicIcon: CSSProperties = {
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const baseListDot: CSSProperties = {
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '50%',
  flexShrink: 0,
  margin: '0 0.25rem',
};

export const cardIconStyles = {
  scan: { ...cardIconBase, background: `linear-gradient(135deg, ${colors.cyan[3]}, ${colors.cyan[6]})` },
  analyze: { ...cardIconBase, background: `linear-gradient(135deg, ${colors.error[4]}, ${colors.purple[5]})` },
  fix: { ...cardIconBase, background: `linear-gradient(135deg, ${colors.success[3]}, ${colors.success[6]})` },
} satisfies Record<string, CSSProperties>;

export const howItWorksStyles = {
  container: {
    maxWidth: '75rem',
    margin: '0 auto',
    padding: theme.spacing['2xl'],
  } satisfies CSSProperties,

  title: {
    color: `light-dark(${theme.black}, ${theme.white})`,
    fontFamily: theme.fontFamily,
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
    fontFamily: theme.fontFamily,
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
    fontFamily: theme.fontFamily,
    fontWeight: 750,
    fontSize: theme.fontSizes.xl,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } satisfies CSSProperties,

  cardTitle: {
    color: theme.white,
    fontFamily: theme.fontFamily,
    fontWeight: 900,
    fontSize: theme.fontSizes.xl,
    marginBottom: theme.spacing.sm,
  } satisfies CSSProperties,

  cardDescription: {
    marginBottom: theme.spacing.xl,
    color: rgba(theme.white, 0.72),
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.md,
    lineHeight: 1.6,
  } satisfies CSSProperties,

  featureCard: {
    width: '100%',
    maxWidth: '65rem',
    margin: `0 auto ${theme.spacing['2xl']}`,
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
    minWidth: '15.625rem',
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
    borderRadius: '0.25rem',
    background: `linear-gradient(90deg, ${colors.cyan[6]}, transparent)`,
  } satisfies CSSProperties,

  graphicLinePurple: {
    height: '0.375rem',
    flex: 1,
    borderRadius: '0.25rem',
    background: `linear-gradient(90deg, transparent, ${colors.purple[6]})`,
  } satisfies CSSProperties,

  graphicIconRed: {
    ...baseGraphicIcon,
    width: '2rem',
    height: '2rem',
    backgroundColor: rgba(colors.error[5], 0.2),
    border: `0.0625rem dashed ${colors.error[5]}`,
  } satisfies CSSProperties,

  graphicIconGreen: {
    ...baseGraphicIcon,
    width: '2rem',
    height: '2rem',
    backgroundColor: colors.success[6],
  } satisfies CSSProperties,

  graphicMainIcon: {
    ...baseGraphicIcon,
    width: '5rem',
    height: '5rem',
    background: `linear-gradient(135deg, ${colors.cyan[5]}, ${colors.purple[5]})`,
    position: 'relative',
  } satisfies CSSProperties,

  graphicCheckBadge: {
    ...baseGraphicIcon,
    position: 'absolute',
    top: 0,
    right: '-0.3125rem',
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: colors.success[5],
    border: `0.1875rem solid ${colors.primary[7]}`, 
  } satisfies CSSProperties,

  featureTextContent: {
    flex: 1.5,
    minWidth: '18.75rem',
  } satisfies CSSProperties,

  featureTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1.5rem',
  } satisfies CSSProperties,

  featureTitleLine: {
    fontFamily: theme.fontFamily,
    fontSize: '2.1rem',
    fontWeight: 900,
    lineHeight: 1.2,
    color: theme.white,
  } satisfies CSSProperties,

  featureTitleGradient: {
    backgroundImage: `linear-gradient(90deg, ${colors.cyan[4]}, ${colors.purple[5]})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies CSSProperties,

  featureDescriptionText: {
    marginBottom: '2rem',
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.md,
    lineHeight: 1.6,
    color: rgba(theme.white, 0.75),
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
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.sm,
    color: theme.white,
  } satisfies CSSProperties,

  listDotCyan: {
    ...baseListDot,
    backgroundColor: colors.cyan[4],
    boxShadow: `0 0 0 0.25rem ${rgba(colors.cyan[4], 0.2)}`,
  } satisfies CSSProperties,

  listDotPurple: {
    ...baseListDot,
    backgroundColor: colors.purple[5],
    boxShadow: `0 0 0 0.25rem ${rgba(colors.purple[5], 0.2)}`,
  } satisfies CSSProperties,

  listDotGreen: {
    ...baseListDot,
    backgroundColor: colors.success[5],
    boxShadow: `0 0 0 0.25rem ${rgba(colors.success[5], 0.2)}`,
  } satisfies CSSProperties,
};