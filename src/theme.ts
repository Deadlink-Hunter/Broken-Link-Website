import { createTheme, MantineColorsTuple } from '@mantine/core';

const primary: MantineColorsTuple = [
  '#e6f7ff',
  '#bae7ff',
  '#91d5ff',
  '#69c0ff',
  '#40a9ff',
  '#1890ff',
  '#096dd9',
  '#0050b3',
  '#003a8c',
  '#002766',
];

const accent: MantineColorsTuple = [
  '#e6faff',
  '#b3f0ff',
  '#80e6ff',
  '#4ddbff',
  '#1ad1ff',
  '#00bcd4',
  '#00acc1',
  '#0097a7',
  '#00838f',
  '#006064',
];

const success: MantineColorsTuple = [
  '#f0f9f0',
  '#d4edd4',
  '#b8e2b8',
  '#9cd69c',
  '#7fcb7f',
  '#2e7d32',
  '#2c6e2c',
  '#295f29',
  '#265026',
  '#234123',
];

export const theme = createTheme({
  colors: {
    primary,
    accent,
    success,
  },
  primaryColor: 'primary',
  primaryShade: 5,
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
  fontFamily: 'Open Sans, sans-serif',
});
