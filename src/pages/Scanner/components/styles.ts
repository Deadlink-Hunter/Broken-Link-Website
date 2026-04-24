import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;

const flexColumnCenter: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

// Brutalist base input
const baseInputStyle = (isDark: boolean): CSSProperties => ({
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: theme.fontSizes.md,
  color: isDark ? colors.green[4] : colors.green[6],
  backgroundColor: isDark ? colors.dark[8] : theme.white,
  padding: `${theme.spacing.md} ${theme.spacing.lg}`,
  borderRadius: '0px',
  border: `2px solid ${isDark ? colors.dark[4] : colors.dark[2]}`,
  outline: 'none',
  transition: 'border-color 0.2s',
});

export const scanPageStyle = {
  container: {
    ...flexColumnCenter,
    padding: '6rem 1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: '"IBM Plex Mono", monospace',
  } satisfies CSSProperties,

  centerGrid: {
    ...flexColumnCenter,
    marginBottom: theme.spacing['2xl'],
    marginTop: theme.spacing.lg,
  } satisfies CSSProperties,

  titleStyle: {
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 400,
    fontSize: '4rem',
    lineHeight: 1.1,
    display: 'inline-block',
    textTransform: 'uppercase',
  } satisfies CSSProperties,

  whiteText: {
    color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-white))',
    textShadow: '4px 4px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
  } satisfies CSSProperties,

  blackText: {
    color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-white))',
    textShadow: '4px 4px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
  } satisfies CSSProperties,

  text: (isDark: boolean): CSSProperties => ({
    color: isDark ? colors.dark[2] : colors.dark[8],
    paddingBlock: theme.spacing.lg,
    fontSize: '1.2em',
  }),

  scanCardsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing.xl,
    marginTop: theme.spacing.xl,
    width: '100%',
  } satisfies CSSProperties,

  scanCardsContainerMobile: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing.xl,
    marginTop: theme.spacing.xl,
    width: '100%',
  } satisfies CSSProperties,

  scanCardStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,
    width: '100%',
    backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-9))',
    border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
    borderRadius: '0px',
    boxShadow: '8px 8px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-8))',
    padding: theme.spacing.xl,
    position: 'relative',
    overflow: 'hidden',
  } satisfies CSSProperties,

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    borderBottom: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
    paddingBottom: theme.spacing.md,
    marginBottom: theme.spacing.md,
  } satisfies CSSProperties,

  searchIcon: {
    width: '32px',
    height: '32px',
    color: colors.orange[5],
  } satisfies CSSProperties,

  cardTitle: {
    fontFamily: '"Share Tech Mono", monospace',
    color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-white))',
    fontSize: theme.fontSizes['2xl'],
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  } satisfies CSSProperties,

  scanSubmitButtonIcon: {
    marginRight: '10px',
  } satisfies CSSProperties,

  alertIcon: {
    width: '24px',
    height: '24px',
    color: colors.warning[5],
  } satisfies CSSProperties,

  fieldLabel: (isDark: boolean): CSSProperties => ({
    fontFamily: '"Share Tech Mono", monospace',
    color: isDark ? colors.dark[2] : colors.dark[8],
    fontSize: theme.fontSizes.md,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    width: '100%',
    marginBottom: '8px',
  }),

  scanSubmitButton: {
    height: '60px',
    width: '100%',
    paddingInline: theme.spacing.lg,
    fontSize: theme.fontSizes.xl,
    fontFamily: '"Share Tech Mono", monospace',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    borderRadius: '0px',
    marginTop: '24px',
    backgroundColor: colors.orange[6],
    color: colors.dark[9],
    border: `2px solid ${colors.orange[6]}`,
    boxShadow: '4px 4px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    fontWeight: 'bold',
  } satisfies CSSProperties,

  resultDescription: {
    fontFamily: '"IBM Plex Mono", monospace',
    color: 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
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
    color: isDark ? colors.dark[4] : colors.dark[2],
  }),

  errorIcon: {
    width: '5rem',
    height: '5rem',
    color: colors.error[5],
  } satisfies CSSProperties,

  errorText: {
    fontFamily: '"IBM Plex Mono", monospace',
    color: colors.error[5],
    maxWidth: '18.75rem',
    width: '100%',
    textAlign: 'center',
    fontSize: theme.fontSizes.md,
    border: `1px dashed ${colors.error[5]}`,
    padding: theme.spacing.sm,
    backgroundColor: 'rgba(240, 21, 21, 0.1)',
  } satisfies CSSProperties,

  urlRowContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    maxWidth: '100%',
    padding: theme.spacing.sm,
    borderBottom: '1px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-6))',
  } satisfies CSSProperties,

  statusIcon: (isBroken: boolean): CSSProperties => ({
    color: isBroken ? colors.error[5] : colors.green[5],
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
    gap: 0,
    overflow: 'auto',
    border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
    backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
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
    ...baseInputStyle(isDark),
  }),

  textareaStyle: (isDark: boolean): CSSProperties => ({
    ...baseInputStyle(isDark),
    resize: 'vertical',
    minHeight: '120px',
  }),

  segmentedWrapper: (isDark: boolean): CSSProperties => ({
    display: 'flex',
    backgroundColor: isDark ? colors.dark[9] : theme.white,
    padding: '4px',
    border: `2px solid ${isDark ? colors.dark[4] : colors.dark[2]}`,
  }),

  activeTab: (_isDark: boolean): CSSProperties => ({
    flex: 1,
    backgroundColor: colors.orange[6],
    color: colors.dark[9],
    fontFamily: '"Share Tech Mono", monospace',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: 'none',
    borderRadius: '0px',
    padding: '12px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }),

  passiveTab: (isDark: boolean): CSSProperties => ({
    flex: 1,
    backgroundColor: 'transparent',
    color: isDark ? colors.dark[2] : colors.dark[8],
    fontFamily: '"Share Tech Mono", monospace',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: 'none',
    borderRadius: '0px',
    padding: '12px',
    cursor: 'pointer',
  }),
};
