import { theme } from '@/theme';

const colors = theme.colors as Record<string, readonly string[]>;

export const modalVariants = {
  primary: {
    backgroundColor: colors.primary[0],
    borderColor: colors.primary[5],
  },
  secondary: {
    backgroundColor: colors.purple[0],
    borderColor: colors.purple[5],
  },
  success: {
    backgroundColor: colors.success[0],
    borderColor: colors.success[5],
  },
  warning: {
    backgroundColor: colors.warning[0],
    borderColor: colors.warning[5],
  },
  error: {
    backgroundColor: colors.error[0],
    borderColor: colors.error[5],
  },
  default: {
    backgroundColor: '#ffffff',
    borderColor: colors.cyan[2],
  },
};
