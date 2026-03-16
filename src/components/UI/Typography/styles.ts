import { theme } from '@/theme';
import { CUSTOM_SIZES, TypographyVariant } from './types';

const colors = theme.colors;

export const getTypographyVariants = (isDark: boolean): Record<string, TypographyVariant> => ({
  primary: { color: isDark ? colors.primary[5] : colors.primary[7] },
  secondary: { color: isDark ? colors.gray[5] : colors.gray[7] },
  tertiary: { color: isDark ? colors.gray[4] : colors.gray[8] },
  cyan: { color: colors.cyan[5] },
  purple: { color: colors.purple[5] },
  success: { color: colors.success[5] },
  warning: { color: colors.warning[5] },
  error: { color: colors.error[5] },
  title: { color: isDark ? colors.primary[1] : colors.primary[9], size: CUSTOM_SIZES.EXTRA_LARGE },
  subtitle: { color: isDark ? colors.primary[6] : colors.primary[8], size: CUSTOM_SIZES.LARGE },
});
