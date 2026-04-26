import { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { theme } from '@/theme';

const colors = theme.colors;
const DARK_STATUS_SHADE = 4;
const getTextColor = (isDark: boolean) => (isDark ? theme.white : theme.black);

const getUrlStatusColor = (isError: boolean, isDark: boolean, lightShade: number): string => {
  const palette = isError ? colors.error : colors.success;
  const shade = isDark ? DARK_STATUS_SHADE : lightShade;
  return palette[shade];
};

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
    fontWeight: 900,
    fontSize: '4rem',
    lineHeight: 1.1,
    display: 'inline-block',
  } satisfies CSSProperties,

  whiteText: {
    color: theme.white,
  } satisfies CSSProperties,

  blackText: {
    color: theme.black,
  } satisfies CSSProperties,

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
    backgroundColor: rgba(colors.primary[6], 0.5),
    border: `1px solid ${rgba(colors.primary[2], 0.15)}`,
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

  cardTitle: {
    color: theme.white,
    fontSize: theme.fontSizes['2xl'],
    fontWeight: 'bold',
    paddingBlock: theme.spacing.sm,
  } satisfies CSSProperties,

  scanSubmitButtonIcon: {
    marginRight: '10px',
  } satisfies CSSProperties,

  alertIcon: {
    width: '24px',
    height: '24px',
    color: colors.yellow[5],
  } satisfies CSSProperties,

  fieldLabel: (isDark: boolean): CSSProperties => ({
    color: isDark ? colors.gray[0] : rgba(theme.white, 0.72),
    fontSize: theme.fontSizes.sm,
    width: '500px',
  }),

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
    color: rgba(theme.white, 0.72),
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

  emptyStateIcon: (isDark: boolean): CSSProperties => ({
    width: '80px',
    height: '80px',
    opacity: 0.2,
    color: getTextColor(isDark),
  }),

  errorIcon: {
    width: '5rem',
    height: '5rem',
    opacity: 0.2,
    color: colors.error[5],
  } satisfies CSSProperties,

  errorText: {
    color: colors.error[5],
    maxWidth: '18.75rem',
    width: '100%',
    textAlign: 'center',
    fontSize: theme.fontSizes.md,
  } satisfies CSSProperties,

  urlRowContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    maxWidth: '100%',
  } satisfies CSSProperties,

  statusIcon: (isBroken: boolean): CSSProperties => ({
    color: isBroken ? colors.error[5] : colors.success[5],
    flexShrink: 0,
  }),

  resultsColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,
    flex: 1,
  } satisfies CSSProperties,

  resultsListContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
    overflow: 'auto',
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

  textInputStyle: (isDark: boolean): CSSProperties => ({
    ...baseInputStyle,
    color: isDark ? colors.gray[0] : colors.gray[7],
    backgroundColor: isDark ? colors.primary[7] : colors.primary[1],
    border: `1px solid ${isDark ? colors.primary[5] : colors.primary[3]}`,
  }),

  textareaStyle: (isDark: boolean): CSSProperties => ({
    ...baseInputStyle,
    resize: 'vertical',
    minHeight: '100px',
    color: isDark ? colors.gray[0] : colors.gray[7],
    backgroundColor: isDark ? colors.primary[7] : colors.primary[1],
    border: `1px solid ${isDark ? colors.primary[5] : colors.primary[3]}`,
  }),

  segmentedWrapper: (isDark: boolean): CSSProperties => ({
    display: 'flex',
    backgroundColor: isDark ? colors.primary[7] : colors.primary[1],
    padding: '4px',
    borderRadius: theme.radius.md,
  }),

  activeTab: (isDark: boolean): CSSProperties => ({
    flex: 1,
    backgroundColor: isDark ? colors.primary[5] : colors.primary[2],
    color: isDark ? colors.gray[0] : colors.gray[8],
    border: 'none',
    borderRadius: theme.radius.sm,
    padding: '8px',
    cursor: 'pointer',
  }),

  passiveTab: (isDark: boolean): CSSProperties => ({
    flex: 1,
    backgroundColor: 'transparent',
    color: isDark ? colors.gray[4] : colors.gray[6],
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
  }),

  statCardsRow: {
    display: 'flex',
    gap: theme.spacing.md,
    width: '100%',
  } satisfies CSSProperties,

  statCard: (isDark: boolean): CSSProperties => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDark ? colors.primary[5] : colors.primary[1],
    borderRadius: theme.radius.md,
    padding: theme.spacing.lg,
    gap: theme.spacing.sm,
  }),

  statNumber: (isError: boolean, isDark: boolean): CSSProperties => ({
    fontSize: '1.9rem',
    fontWeight: 'bold',
    color: getUrlStatusColor(isError, isDark, 5),
    lineHeight: 1,
  }),

  statLabel: (isDark: boolean): CSSProperties => ({
    fontSize: theme.fontSizes.sm,
    color: isDark ? rgba(theme.white, 0.7) : colors.gray[7],
  }),

  linkStatusHeader: {
    color: theme.white,
    fontSize: theme.fontSizes.md,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
  } satisfies CSSProperties,

  urlRowCard: (isDark: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: isDark ? colors.primary[6] : rgba(colors.primary[1], 0.7),
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    gap: theme.spacing.md,
    width: '100%',
    boxSizing: 'border-box',
  }),

  urlRowLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    overflow: 'hidden',
    flex: 1,
  } satisfies CSSProperties,

  urlText: (isDark: boolean): CSSProperties => ({
    color: isDark ? rgba(theme.white, 0.85) : colors.gray[7],
    fontSize: theme.fontSizes.sm,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),

  urlStatusText: (isBroken: boolean, isDark: boolean): CSSProperties => ({
    fontSize: theme.fontSizes.sm,
    color: getUrlStatusColor(isBroken, isDark, 6),
    flexShrink: 0,
  }),

  circleIcon: (isBroken: boolean, isDark: boolean): CSSProperties => ({
    width: '20px',
    height: '20px',
    color: getUrlStatusColor(isBroken, isDark, 6),
    flexShrink: 0,
  }),

  summaryBar: (isDark: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    backgroundColor: isDark ? colors.primary[5] : colors.primary[1],
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    marginTop: theme.spacing.sm,
    width: '100%',
    boxSizing: 'border-box',
    fontSize: theme.fontSizes.sm,
    color: isDark ? rgba(theme.white, 0.85) : colors.gray[7],
  }),

  summaryTime: (isDark: boolean): CSSProperties => ({
    color: isDark ? colors.cyan[4] : colors.cyan[5],
    fontWeight: 'bold',
  }),

  summaryBold: (isDark: boolean): CSSProperties => ({
    color: isDark ? theme.white : colors.gray[8],
    fontWeight: 'bold',
  }),
};
