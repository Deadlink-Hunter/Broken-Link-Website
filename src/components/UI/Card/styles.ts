import { MantineTheme } from '@mantine/core';

export const getCardStyles = (theme: MantineTheme, colorScheme: 'light' | 'dark') => ({
  default: {
    padding: '3rem',
    borderRadius: '0.5rem',
    backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    boxShadow: theme.shadows.sm,
    color: colorScheme === 'dark' ? theme.white : theme.black,
  },
});
