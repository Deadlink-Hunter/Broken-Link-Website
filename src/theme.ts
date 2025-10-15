import { createTheme, DEFAULT_THEME, MantineColorsTuple, mergeMantineTheme } from '@mantine/core';

const blue: MantineColorsTuple = [
  '#e7f5ff',
  '#d0ebff',
  '#a5d8ff',
  '#74c0fc',
  '#4dabf7',
  '#339af0',
  '#228be6',
  '#1c7ed6',
  '#1971c2',
  '#1864ab',
];

const purple: MantineColorsTuple = [
  '#f3e8ff',
  '#e9d5ff',
  '#d8b4fe',
  '#c084fc',
  '#a855f7',
  '#9333ea',
  '#7e22ce',
  '#6b21a8',
  '#581c87',
  '#4c1d95',
];

const skyblue: MantineColorsTuple = [
  '#e0f2fe',
  '#bae6fd',
  '#7dd3fc',
  '#38bdf8',
  '#0ea5e9',
  '#0284c7',
  '#0369a1',
  '#075985',
  '#0c4a6e',
  '#082f49',
];

const pink: MantineColorsTuple = [
  '#fff0f6',
  '#ffdeeb',
  '#fcc2d7',
  '#faa2c1',
  '#f783ac',
  '#f06595',
  '#e64980',
  '#d6336c',
  '#c2255c',
  '#a61e4d',
];

const success: MantineColorsTuple = [
  '#ecfdf5',
  '#d1fae5',
  '#a7f3d0',
  '#6ee7b7',
  '#34d399',
  '#10b981',
  '#16a34a',
  '#15803d',
  '#166534',
  '#14532d',
];

const warning: MantineColorsTuple = [
  '#fef3c7',
  '#fde68a',
  '#fcd34d',
  '#fbbf24',
  '#facc15',
  '#eab308',
  '#ca8a04',
  '#a16207',
  '#92400e',
  '#78350f',
];

const error: MantineColorsTuple = [
  '#fee2e2',
  '#fecaca',
  '#fca5a5',
  '#f87171',
  '#ef4444',
  '#dc2626',
  '#b91c1c',
  '#991b1b',
  '#7f1d1d',
  '#6b1414',
];

const breakpoints = {
  xs: '30em',
  sm: '48em',
  md: '64em',
  lg: '74em',
  xl: '90em',
};

const appColors = {
  blue,
  purple,
  skyblue,
  pink,
  success,
  warning,
  error,
};

const themeOverride = createTheme({
  colors: appColors,
  primaryColor: 'blue',
  primaryShade: 6,
  fontFamily: 'Open Sans, sans-serif',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
  defaultRadius: 'md',
  spacing: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
    '2xl': '64px',
  },
  breakpoints,
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);