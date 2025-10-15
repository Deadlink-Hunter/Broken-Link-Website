import { MantineTheme } from '@mantine/core';
import { CUSTOM_SIZES, TypographyVariant } from './types';

export const getTypographyVariants = (theme: MantineTheme, colorScheme: 'light' | 'dark'): Record<string, TypographyVariant> => {
  const isDarkMode = colorScheme === 'dark';
  return {
    primary: { color: isDarkMode ? theme.colors.gray[4] : theme.colors.dark[5] },
    secondary: { color: isDarkMode ? theme.colors.purple[4] : theme.colors.purple[6] },
    success: { color: isDarkMode ? theme.colors.green[4] : theme.colors.green[6] },
    warning: { color: isDarkMode ? theme.colors.yellow[4] : theme.colors.yellow[6] },
    error: { color: isDarkMode ? theme.colors.red[4] : theme.colors.red[6] },
    title: { color: isDarkMode ? theme.white : theme.black, size: CUSTOM_SIZES.EXTRA_LARGE },
    subtitle: { color: isDarkMode ? theme.colors.gray[5] : theme.colors.dark[3], size: CUSTOM_SIZES.LARGE },
  };
};