import { MantineTheme } from '@mantine/core';

export const getDividerVariants = (theme: MantineTheme, colorScheme: 'light' | 'dark') => {
  const isDarkMode = colorScheme === 'dark';

  const defaultDividerStyle = {
    margin: theme.spacing?.md,
    height: '1px',
  };

  return {
    primary: {
      ...defaultDividerStyle,
      backgroundColor: isDarkMode ? theme.colors.cyan[7] : theme.colors.cyan[5],
    },
    secondary: {
      ...defaultDividerStyle,
      backgroundColor: isDarkMode ? theme.colors.success[7] : theme.colors.success[5],
    },
    muted: {
      ...defaultDividerStyle,
      backgroundColor: isDarkMode ? theme.colors.gray[5] : theme.colors.gray[3],
    },
    border: {
      ...defaultDividerStyle,
      backgroundColor: isDarkMode ? theme.colors.purple[7] : theme.colors.purple[5],
    },
    accent: {
      ...defaultDividerStyle,
      backgroundColor: isDarkMode ? theme.colors.blue[7] : theme.colors.blue[5],
    },
    error: {
      ...defaultDividerStyle,
      backgroundColor: isDarkMode ? theme.colors.red[7] : theme.colors.red[5],
    },
  };
};