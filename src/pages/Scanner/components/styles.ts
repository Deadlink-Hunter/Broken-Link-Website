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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing['2xl'],

    marginTop: theme.spacing.lg,
  } satisfies CSSProperties,
  titleStyle: {
    background:
      'linear-gradient(90deg, var(--mantine-color-cyan-4) 0%, var(--mantine-color-purple-5) 100%)',

    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',

    fontWeight: 900,
    fontSize: '4rem',
    lineHeight: 1.1,
    display: 'inline-block',
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

  scanCardsContainerMobile: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing.xl,
    marginTop: theme.spacing.xl,
  },

  scanCardStyle: {
    display: 'flex',
    backgroundColor: colors.primary[6],
    borderColor: colors.primary[5],
    padding: theme.spacing.xl,
    borderRadius: theme.radius.lg,
    gap: theme.spacing.md,
    width: '100%',
    height: '400px',
    flexDirection: 'column',
    boxShadow: 'none',
  } satisfies CSSProperties,

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
  } satisfies CSSProperties,

  searchIcon: {
    width: '24px',
    height: '24px',
    color: colors.cyan[4],
    marginBottom: theme.spacing.sm,
  },

  cardTitle: (isDark: boolean): CSSProperties => ({
    color: getTextColor(isDark),
    fontSize: theme.fontSizes['2xl'],
    fontWeight: 'bold',
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
      color: colors.gray[0],
      '&::placeholder': {
        color: colors.gray[4],
      },
    },
  },

  scanSubmitButtonIcon: {
    marginRight: '10px',
  },

  alertIcon: {
    width: '24px',
    height: '24px',
    color: colors.yellow[5],
  },

  fieldLabel: {
    color: colors.gray[0],
    fontSize: theme.fontSizes.sm,
    width: '500px',
  },

  scanSubmitButton: {
    borderRadius: theme.radius.md,
    fontSize: theme.fontSizes.lg,
    height: '50px',
    width: '100%',
    paddingInline: theme.spacing.lg,
    backgroundImage: `linear-gradient(90deg, ${theme.colors.cyan[4]} 0%, ${theme.colors.grape[5]} 100%)`,
    color: theme.white,
    border: 0,
    cursor: 'pointer',
  },
  resultDescription: {
    color: colors.gray[6],
    maxWidth: '300px',
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    fontSize: theme.fontSizes.md,
  } satisfies CSSProperties,

  resultsStack: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.md,
  } satisfies CSSProperties,

  emptyStateIcon: {
    width: '80px',
    height: '80px',
    opacity: 0.2,
    color: 'white',
  },

  inputSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg,
    flex: 1,
  } satisfies CSSProperties,

  formFieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xs,
  } satisfies CSSProperties,

  textInputStyle: {
    fontSize: theme.fontSizes.md,
    backgroundColor: colors.primary[7],
    borderColor: colors.primary[5],
    color: colors.gray[5],
    padding: '8px 12px',
    borderRadius: theme.radius.md,
    border: `1px solid ${colors.primary[5]}`,
    outline: 'none',
    width: '100%',
  } satisfies CSSProperties,

  textareaStyle: {
    fontSize: theme.fontSizes.md,
    backgroundColor: colors.primary[7],
    borderColor: colors.primary[5],
    color: colors.gray[5],
    padding: '8px 12px',
    borderRadius: theme.radius.md,
    border: `1px solid ${colors.primary[5]}`,
    outline: 'none',
    width: '100%',
  } satisfies CSSProperties,

  segmentedWrapper: {
    display: 'flex',
    backgroundColor: colors.primary[7],
    padding: '4px',
    borderRadius: theme.radius.md,
  } satisfies CSSProperties,

  activeTab: {
    flex: 1,
    backgroundColor: colors.primary[5],
    color: 'white',
    border: 'none',
    borderRadius: theme.radius.sm,
    padding: '8px',
    cursor: 'pointer',
  } satisfies CSSProperties,

  passiveTab: {
    flex: 1,
    backgroundColor: 'transparent',
    color: colors.gray[4],
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
  } satisfies CSSProperties,
};
