import { MantineTheme } from '@mantine/core';

export const getButtonVariants = (theme: MantineTheme, colorScheme: 'light' | 'dark') => {
  const isDarkMode = colorScheme === 'dark';

  return {
    primary: {
      backgroundColor: isDarkMode ? theme.colors.blue[7] : theme.colors.blue[5],
      color: theme.white,
    },
    secondary: {
      backgroundColor: isDarkMode ? theme.colors.purple[7] : theme.colors.purple[5],
      color: theme.white,
    },
    success: {
      backgroundColor: isDarkMode ? theme.colors.green[7] : theme.colors.green[5],
      color: theme.white,
    },
    warning: {
      backgroundColor: isDarkMode ? theme.colors.yellow[7] : theme.colors.yellow[5],
      color: theme.white,
    },
    error: {
      backgroundColor: isDarkMode ? theme.colors.red[7] : theme.colors.red[5],
      color: theme.white,
    },
    outline: {
      backgroundColor: 'transparent',
      color: isDarkMode ? theme.colors.blue[5] : theme.colors.blue[7],
      border: `2px solid ${isDarkMode ? theme.colors.blue[5] : theme.colors.blue[7]}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: isDarkMode ? theme.colors.blue[5] : theme.colors.blue[7],
    },
  };
};