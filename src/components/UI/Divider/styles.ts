import { theme } from '@/theme';

const defaultDividerStyle = {
  margin: theme.spacing?.md,
  height: '1px',
};

const colors = theme.colors;

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
