import { CSSProperties } from 'react';
import { sharedStyles, theme } from '@/theme';

const colors = theme.colors;
const getTextColor = (isDark: boolean) => (isDark ? theme.white : colors.gray[7]);

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
    ...sharedStyles.sectionTitle,
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
