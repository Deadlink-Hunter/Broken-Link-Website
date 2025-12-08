import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;

export const footerStyles = (isDark: boolean) => {
  const textColor = isDark ? theme.white : colors.gray[7];
  const subTextColor = isDark ? colors.gray[2] : colors.gray[7];
  return {
    wrapper: {
      color: colors.gray[2],
      height: '41vh',
    },

    container: {
      marginTop: '3rem',
      padding: '0 1.4rem',
    },

    gradientText: { fontWeight: 'bold', fontSize: '1.4em' },

    text: {
      color: textColor,
      paddingBlock: theme.spacing.lg,
    },

    header: {
      fontWeight: 'bold',
      color: isDark ? theme.white : theme.black,
    },

    linkBoxWrapper: {
      paddingBottom: '2rem',
    },

    openSrcTxt: (isMobileView: boolean): CSSProperties => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: isMobileView ? 'center' : 'flex-start',
      gap: '.4rem',
      color: subTextColor,
    }),

    rightsTxt: (isMobileView: boolean): CSSProperties => ({
      color: subTextColor,
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
};
