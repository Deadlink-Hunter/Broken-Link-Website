import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;
const getTextColor = (isDark: boolean) => (isDark ? colors.dark[2] : colors.dark[8]);
const getSubTextColor = (isDark: boolean) => (isDark ? colors.dark[2] : colors.dark[8]);

export const footerStyles = {
  container: {
    maxWidth: '75rem',
    margin: '0 auto',
    padding: '3rem 2.5rem 0',
    fontFamily: '"IBM Plex Mono", monospace',
    backgroundColor: 'transparent',
  } satisfies CSSProperties,

  gradientText: {
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 'bold',
    fontSize: '1.4em',
    color: colors.orange[6],
    textTransform: 'uppercase',
  },

  text: (isDark: boolean): CSSProperties => ({
    color: getTextColor(isDark),
    paddingBlock: theme.spacing.lg,
  }),

  header: (isDark: boolean): CSSProperties => ({
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 'bold',
    color: isDark ? theme.white : colors.dark[9],
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: theme.spacing.md,
  }),

  linkBoxWrapper: {
    paddingBottom: '3rem',
  },

  openSrcTxt: (isMobileView: boolean, isDark: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobileView ? 'center' : 'flex-start',
    gap: '.4rem',
    fontSize: theme.fontSizes.sm,
    color: getSubTextColor(isDark),
    textTransform: 'uppercase',
  }),

  rightsTxt: (isMobileView: boolean, isDark: boolean): CSSProperties => ({
    fontSize: theme.fontSizes.sm,
    color: getSubTextColor(isDark),
    textAlign: isMobileView ? 'center' : 'end',
    textTransform: 'uppercase',
  }),

  gradientConfig: {
    from: colors.orange[5],
    to: colors.orange[7],
  },

  iconSize: 16,
  topGridColLayout: { base: 1, sm: 1, md: 3 },
  bottomGridColLayout: { base: 1, sm: 2 },
  bottomGrid: {
    paddingTop: '1rem',
    paddingBottom: '4rem',
  },
};
