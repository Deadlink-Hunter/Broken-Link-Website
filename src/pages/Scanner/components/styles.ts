import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;
const getTextColor = (isDark: boolean) => (isDark ? theme.white : colors.gray[7]);

export const scanPageStyle = {
  container: {
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  } satisfies CSSProperties,

  centerGrid: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing['2xl'],
    marginTop: theme.spacing.lg,
  },

  titleStyle: {
    gradientText: { fontWeight: 'bold', fontSize: '3em' },

    gradientConfig: {
      from: colors.cyan[4],
      to: colors.purple[6],
    },
  },
  text: (isDark: boolean): CSSProperties => ({
    color: getTextColor(isDark),
    paddingBlock: theme.spacing.lg,
    fontSize: '1.2em',
  }),

  scanCardsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing.xl,
    marginTop: theme.spacing.xl,
  },

  scanCardStyle: {
    backgroundColor: colors.primary[6],
    borderColor: colors.primary[5],
    padding: theme.spacing.xl,
    borderRadius: theme.radius.lg,
    gap: theme.spacing.md,
    width: '100%',
    height: '400px',
    flexDirection: 'column',
  } satisfies CSSProperties,

  searchIcon: {
    width: '24px',
    height: '24px',
    color: colors.cyan[4],
    marginBottom: theme.spacing.sm,
  },

  cardTitle: (isDark: boolean): CSSProperties => ({
    color: getTextColor(isDark),
    fontSize: '1.5em',
    fontWeight: 'semi-bold',
    paddingBlock: theme.spacing.sm,
  }),

  segmentedControl: {
    borderRadius: theme.radius.md,
    root: {
      backgroundColor: colors.primary[7],
    },
    label: {
      color: colors.gray[4],
    },
    indicator: {
      backgroundColor: colors.primary[5],
    },
  },

  textInput: {
    input: {
      fontSize: theme.fontSizes.md,
      backgroundColor: colors.primary[7],
      borderColor: colors.primary[5],
      color: 'white',
      '&::placeholder': {
        color: colors.gray[4],
      },
    },
  },

  buttonIcon: {
    marginRight: '10px',
  },

  alertIcon: {
    width: '24px',
    height: '24px',
    color: colors.yellow[5],
  },

  linkDescription: {
    color: colors.gray[0],
    fontSize: theme.fontSizes.sm,
    width: '500px',
  },

  linkButton: {
    borderRadius: theme.radius.md,
    fontSize: theme.fontSizes.lg,
    height: '50px',
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
  },

  resultsStack: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.md,
  },

  resultDescription: {
    color: colors.gray[6],
    maxWidth: '300px',
    textAlign: 'center',
    fontSize: theme.fontSizes.md,
  } satisfies CSSProperties,

  emptyStateIcon: {
    width: '80px',
    height: '80px',
    opacity: 0.2,
    color: 'white',
  },
};
