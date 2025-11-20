import { type MantineTheme } from '@mantine/core';
import { theme } from '@/theme';

const colors = theme.colors;

export const footerStyles = {
  wrapper: {
    color: colors.gray[2],
    height: '41vh',
  },

  container: {
    minWidth: '62%',
    marginTop: '3rem',
    padding: '0 1.4rem',
  },

  gradientText: { fontWeight: 'bold', fontSize: '1.4em' },

  text: {
    color: theme.white,
    paddingBlock: theme.spacing.lg,
  },

  header: {
    fontWeight: 'bold',
    color: theme.white,
  },

  linkBoxWrapper: {
    paddingBottom: '2rem',
  },

  openSrcTxt: (isMobileView: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobileView ? 'center' : 'flex-start',
    gap: '.4rem',
    color: theme.colors.gray[5],
  }),

  rightsTxt: (isMobileView: boolean) => ({
    color: theme.colors.gray[5],
    textAlign: isMobileView
      ? ('center' as React.CSSProperties['textAlign'])
      : ('end' as React.CSSProperties['textAlign']),
  }),

  gradientConfig: {
    from: theme.colors.cyan[4],
    to: theme.colors.blue[6],
  },

  iconSize: 16,
  topGridColLayout: { base: 1, sm: 1, md: 3 },
  bottomGridColLayout: { base: 1, sm: 2 },
  bottomGrid: {
    paddingTop: '1rem',
    paddingBottom: '4rem',
  },
};
