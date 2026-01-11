import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;
const getTextColor = (isDark: boolean) => (isDark ? theme.white : colors.gray[7]);
const getSubTextColor = (isDark: boolean) => (isDark ? colors.gray[2] : colors.gray[7]);

export const footerStyles = {
  wrapper: {
    color: colors.gray[2],
    height: '41vh',
  },

 container: {
    maxWidth: '100%',
    marginTop: '3rem',
    padding: '0 1.4rem',
  },

  gradientText: { fontWeight: 'bold', fontSize: '1.4em' },

  text: (isDark: boolean): CSSProperties => ({
    color: getTextColor(isDark),
    paddingBlock: theme.spacing.lg,
  }),

  header: (isDark: boolean): CSSProperties => ({
    fontWeight: 'bold',
    color: isDark ? theme.white : theme.black,
  }),

  linkBoxWrapper: {
    paddingBottom: '2rem',
  },

  openSrcTxt: (isMobileView: boolean, isDark: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobileView ? 'center' : 'flex-start',
    gap: '.4rem',
    color: getSubTextColor(isDark),
  }),

  rightsTxt: (isMobileView: boolean, isDark: boolean): CSSProperties => ({
    color: getSubTextColor(isDark),
    textAlign: isMobileView ? 'center' : 'end',
  }),

  gradientConfig: {
    from: colors.cyan[4],
    to: colors.blue[6],
  },

  iconSize: 16,
  topGridColLayout: { base: 1, sm: 1, md: 3 },
  bottomGridColLayout: { base: 1, sm: 2 },
  bottomGrid: {
    paddingTop: '1rem',
    paddingBottom: '4rem',
  },
};

