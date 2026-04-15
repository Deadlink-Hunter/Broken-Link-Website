import { MantineTheme } from '@mantine/core';
import { theme } from '@/theme';
import { CUSTOM_SIZES, TypographyVariant } from './types';

const colors = theme.colors;

export const typographyVariants: Record<string, TypographyVariant> = {
  primary: { color: colors.primary[5] },
  secondary: { color: colors.gray[5] },
  tertiary: { color: colors.gray[4] },
  cyan: { color: colors.cyan[5] },
  purple: { color: colors.purple[5] },
  success: { color: colors.success[5] },
  warning: { color: colors.warning[5] },
  error: { color: colors.error[5] },
  title: { color: colors.primary[1], size: CUSTOM_SIZES.EXTRA_LARGE },
  subtitle: { color: colors.primary[6], size: CUSTOM_SIZES.LARGE },
};

export const getTypographyAutoColor = (
  variant: string,
  isDark: boolean,
  themeContext: MantineTheme,
  defaultVariantColor: string | undefined
) => {
  if (isDark) { return defaultVariantColor; }
  const lightModeMapping: Record<string, string> = {
    title: themeContext.colors.primary[9],
    h1: themeContext.colors.primary[9],
    h2: themeContext.colors.primary[9],
    h3: themeContext.colors.primary[9],
    primary: themeContext.colors.primary[9],
    body: themeContext.colors.gray[8],
    secondary: themeContext.colors.gray[8],
    tertiary: themeContext.colors.gray[8],
  };

  return lightModeMapping[variant] || defaultVariantColor;
};
