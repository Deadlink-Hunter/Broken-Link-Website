import { createTheme, DEFAULT_THEME, MantineColorsTuple, mergeMantineTheme } from '@mantine/core';

const primary: MantineColorsTuple = [
  '#f1f5f9',
  '#cbd5e1',
  '#94a3b8',
  '#64748b',
  '#475569',
  '#334155',
  '#1e293b',
  '#0f172a',
  '#0f172a',
  '#0f172a',
];

const accentCyan: MantineColorsTuple = [
  '#e0faff',
  '#b3f0ff',
  '#80e6ff',
  '#4ddbff',
  '#22d3ee',
  '#06b6d4',
  '#0891b2',
  '#036c87',
  '#025b71',
  '#02475b',
];

const accentPurple: MantineColorsTuple = [
  '#f5f3ff',
  '#ede9fe',
  '#ddd6fe',
  '#c4b5fd',
  '#a78bfa',
  '#8b5cf6',
  '#7c3aed',
  '#6d28d9',
  '#5b21b6',
  '#4c1d95',
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

// TODO: Check if this is the correct way to create a theme

const breakpoints = {
  xs: '30em',
  sm: '48em',
  md: '64em',
  lg: '74em',
  xl: '90em',
};

const appColors = {
  primary,
  cyan: accentCyan,
  purple: accentPurple,
  success,
  warning,
  error,
};

const themeOverride = createTheme({
  colors: appColors,
  primaryColor: 'cyan',
  primaryShade: 5,
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
export const CHART_COLORS = [
  accentCyan[4],
  warning[2],
  success[3],
  accentPurple[3],
  error[3],
  primary[2],
] as const;
export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
