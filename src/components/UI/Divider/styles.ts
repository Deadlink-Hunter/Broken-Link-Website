import { theme } from '@/theme';

const defaultDividerStyle = {
  // TODO: Replace with theme spacing when we will fix the type of the theme 
  margin: theme.spacing?.md || '16px',
  height: '1px',
};

const colors = theme.colors as Record<string, readonly string[]>;

export const dividerVariants = {
  primary: {
    ...defaultDividerStyle,
    backgroundColor: colors.cyan[5],
  },
  secondary: {
    ...defaultDividerStyle,
    backgroundColor: colors.success[5],
  },
  muted: {
    ...defaultDividerStyle,
    backgroundColor: colors.primary[5],
  },
  border: {
    ...defaultDividerStyle,
    backgroundColor: colors.purple[5],
  },
  accent: {
    ...defaultDividerStyle,
    backgroundColor: colors.primary[5],
  },
  error: {
    ...defaultDividerStyle,
    backgroundColor: colors.error[5],
  },
};
