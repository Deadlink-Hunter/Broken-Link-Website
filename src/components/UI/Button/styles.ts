import { theme } from '@/theme';

const colors = theme.colors;

export const buttonVariants = {
  primary: {
    backgroundColor: colors.primary[5],
  },
  secondary: {
    backgroundColor: colors.purple[5],
  },
  success: {
    backgroundColor: colors.success[5],
  },
  warning: {
    backgroundColor: colors.warning[5],
  },
  error: {
    backgroundColor: colors.error[5],
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.cyan[5],
    border: `2px solid ${colors.cyan[5]}`,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.cyan[5],
  },
};
