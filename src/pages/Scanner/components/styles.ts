import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;
const getTextColor = (isDark: boolean) => (isDark ? theme.white : colors.gray[7]);

const gradientPrimary =
  'linear-gradient(90deg, var(--mantine-color-cyan-4) 0%, var(--mantine-color-purple-5) 100%)';

const flexColumnCenter: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const baseInputStyle: CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  fontSize: theme.fontSizes.md,
  color: colors.gray[5],
  backgroundColor: colors.primary[7],
  padding: `${theme.spacing.md} ${theme.spacing.lg}`,
  borderRadius: theme.radius.md,
  border: `1px solid ${colors.primary[5]}`,
  outline: 'none',
};

export const scanPageStyle = {
  container: {
    ...flexColumnCenter,
    padding: '6rem 1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  } satisfies CSSProperties,

  centerGrid: {
    ...flexColumnCenter,
    marginBottom: theme.spacing['2xl'],
    marginTop: theme.spacing.lg,
  } satisfies CSSProperties,

  titleStyle: {
    background: gradientPrimary,
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
  } satisfies CSSProperties,

  scanCardsContainerMobile: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing.xl,
    marginTop: theme.spacing.xl,
  } satisfies CSSProperties,

  scanCardStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,
    width: '100%',
    backgroundColor: colors.primary[6],
    borderColor: colors.primary[5],
    borderRadius: theme.radius.lg,
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
  } satisfies CSSProperties,

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
  } satisfies CSSProperties,

  fieldLabel: {
    color: colors.gray[0],
    fontSize: theme.fontSizes.sm,
    width: '500px',
  } satisfies CSSProperties,

  scanSubmitButton: {
    height: '50px',
    width: '100%',
    paddingInline: theme.spacing.lg,
    fontSize: theme.fontSizes.lg,
    borderRadius: theme.radius.md,
    marginTop: '16px',
    backgroundImage: `linear-gradient(90deg, ${colors.cyan[4]} 0%, ${colors.grape[5]} 100%)`,
    color: theme.white,
    border: 0,
    cursor: 'pointer',
  } satisfies CSSProperties,

  resultDescription: {
    color: colors.gray[6],
    maxWidth: '300px',
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    fontSize: theme.fontSizes.md,
  } satisfies CSSProperties,

  resultsStack: {
    ...flexColumnCenter,
    flex: 1,
    height: '100%',
    gap: theme.spacing.md,
  } satisfies CSSProperties,

  emptyStateIcon: {
    width: '80px',
    height: '80px',
    opacity: 0.2,
    color: 'white',
  } satisfies CSSProperties,

  inputSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg,
    flex: 1,
  } satisfies CSSProperties,

  formFieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '16px',
    gap: theme.spacing.xs,
  } satisfies CSSProperties,

  textInputStyle: {
    ...baseInputStyle,
  } satisfies CSSProperties,

  textareaStyle: {
    ...baseInputStyle,
    resize: 'vertical',
    minHeight: '100px',
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
