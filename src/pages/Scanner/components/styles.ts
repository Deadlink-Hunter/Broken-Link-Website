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

const getBaseInputStyle = (isDark: boolean): CSSProperties => ({
  width: '100%',
  boxSizing: 'border-box',
  fontSize: theme.fontSizes.md,
  color: isDark ? colors.gray[5] : colors.gray[7],
  backgroundColor: isDark ? colors.primary[7] : theme.white,
  padding: `${theme.spacing.md} ${theme.spacing.lg}`,
  borderRadius: theme.radius.md,
  border: `1px solid ${isDark ? colors.primary[5] : colors.gray[4]}`,
  outline: 'none',
});

export const getScanPageStyle = (isDark: boolean) => ({
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

  text: {
    color: getTextColor(isDark),
    paddingBlock: theme.spacing.lg,
    fontSize: '1.2em',
  } satisfies CSSProperties,

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
    backgroundColor: isDark ? colors.primary[6] : theme.white,
    borderColor: isDark ? colors.primary[5] : colors.gray[3],
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: theme.radius.lg,
    boxShadow: isDark ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
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

  cardTitle: {
    color: getTextColor(isDark),
    fontSize: theme.fontSizes['2xl'],
    fontWeight: 'bold',
    paddingBlock: theme.spacing.sm,
  } satisfies CSSProperties,

  segmentedControl: {
    borderRadius: theme.radius.md,
    root: {
      backgroundColor: isDark ? colors.primary[7] : colors.gray[1],
    },
    label: {
      color: isDark ? colors.gray[4] : colors.gray[7],
    },
    indicator: {
      backgroundColor: isDark ? colors.primary[5] : theme.white,
    },
  },

  textInput: {
    input: {
      fontSize: theme.fontSizes.md,
      backgroundColor: isDark ? colors.primary[7] : theme.white,
      borderColor: isDark ? colors.primary[5] : colors.gray[4],
      color: isDark ? colors.gray[0] : colors.gray[9],
      '&::placeholder': {
        color: isDark ? colors.gray[4] : colors.gray[5],
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
    color: isDark ? colors.gray[0] : colors.gray[9],
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
    color: isDark ? 'white' : 'black',
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
    ...getBaseInputStyle(isDark),
  } satisfies CSSProperties,

  textareaStyle: {
    ...getBaseInputStyle(isDark),
    resize: 'vertical',
    minHeight: '100px',
  } satisfies CSSProperties,

  segmentedWrapper: {
    display: 'flex',
    backgroundColor: isDark ? colors.primary[7] : colors.gray[1],
    padding: '4px',
    borderRadius: theme.radius.md,
  } satisfies CSSProperties,

  activeTab: {
    flex: 1,
    backgroundColor: isDark ? colors.primary[5] : theme.white,
    color: isDark ? 'white' : colors.gray[9],
    border: 'none',
    boxShadow: isDark ? 'none' : '0 1px 3px rgba(0,0,0,0.1)',
    borderRadius: theme.radius.sm,
    padding: '8px',
    cursor: 'pointer',
  } satisfies CSSProperties,

  passiveTab: {
    flex: 1,
    backgroundColor: 'transparent',
    color: isDark ? colors.gray[4] : colors.gray[6],
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
  } satisfies CSSProperties,
});
