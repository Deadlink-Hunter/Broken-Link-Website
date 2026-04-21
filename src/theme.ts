import type { CSSProperties } from 'react';
import { createTheme, DEFAULT_THEME, MantineColorsTuple, mergeMantineTheme } from '@mantine/core';

// Industrial Palette
const hazardOrange: MantineColorsTuple = [
  '#fff0e5',
  '#ffdacc',
  '#ffb099',
  '#ff8366',
  '#ff5d3a',
  '#ff431c',
  '#ff3609',
  '#e42900',
  '#cb2200',
  '#b11900',
];

const terminalGreen: MantineColorsTuple = [
  '#e3fff0',
  '#ccfde2',
  '#99fac5',
  '#62f6a6',
  '#37f28b',
  '#1cf07a',
  '#09ef70',
  '#00d55e',
  '#00be52',
  '#00a443',
];

const concreteGrey: MantineColorsTuple = [
  '#f4f4f5',
  '#e4e4e7',
  '#d4d4d8',
  '#a1a1aa',
  '#71717a',
  '#52525b',
  '#3f3f46',
  '#27272a',
  '#18181b', // 8
  '#09090b', // 9 (Darkest)
];

const warning: MantineColorsTuple = [
  '#fff9e1',
  '#fff1cc',
  '#ffe29b',
  '#ffd364',
  '#ffc535',
  '#ffbc14',
  '#ffb700',
  '#e3a200',
  '#ca8f00',
  '#af7a00',
];

const error: MantineColorsTuple = [
  '#ffe9e9',
  '#ffd1d1',
  '#fba0a1',
  '#f76d6f',
  '#f34143',
  '#f12526',
  '#f01515',
  '#d6080b',
  '#bf0008',
  '#a70004',
];

const breakpoints = {
  xs: '30em',
  sm: '48em',
  md: '64em',
  lg: '74em',
  xl: '90em',
};

const themeOverride = createTheme({
  colors: {
    orange: hazardOrange,
    green: terminalGreen,
    dark: concreteGrey,
    warning,
    error,
    primary: concreteGrey,
    purple: hazardOrange,
    cyan: terminalGreen,
    success: terminalGreen,
  },
  primaryColor: 'orange',
  primaryShade: 6,
  fontFamily: '"IBM Plex Mono", monospace',
  headings: {
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: '400',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    xxl: '2.1rem',
  },
  defaultRadius: '0px', // Brutalist sharp edges
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '64px',
  },
  breakpoints,
  components: {
    Button: {
      defaultProps: {
        radius: 0,
      },
      styles: {
        root: {
          border: '2px solid var(--mantine-color-orange-6)',
          boxShadow:
            '4px 4px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-orange-6))',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontFamily: '"Share Tech Mono", monospace',
          transition: 'all 0.1s ease',
          '&:active': {
            transform: 'translate(4px, 4px)',
            boxShadow:
              '0px 0px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-orange-6))',
          },
          '&:hover': {
            backgroundColor: 'var(--mantine-color-orange-6)',
            color: 'var(--mantine-color-white)',
          },
        },
      },
    },
    Card: {
      defaultProps: {
        radius: 0,
        withBorder: true,
      },
      styles: {
        root: {
          border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
          boxShadow:
            '8px 8px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-8))',
          backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-9))',
          position: 'relative',
        },
      },
    },
    TextInput: {
      defaultProps: {
        radius: 0,
      },
      styles: {
        input: {
          border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
          backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
          color: 'light-dark(var(--mantine-color-green-6), var(--mantine-color-green-4))',
          fontFamily: '"IBM Plex Mono", monospace',
          '&:focus': {
            borderColor: 'var(--mantine-color-orange-6)',
          },
        },
        label: {
          fontFamily: '"Share Tech Mono", monospace',
          color: 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '8px',
        },
      },
    },
    Textarea: {
      defaultProps: {
        radius: 0,
      },
      styles: {
        input: {
          border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
          backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
          color: 'light-dark(var(--mantine-color-green-6), var(--mantine-color-green-4))',
          fontFamily: '"IBM Plex Mono", monospace',
          '&:focus': {
            borderColor: 'var(--mantine-color-orange-6)',
          },
        },
        label: {
          fontFamily: '"Share Tech Mono", monospace',
          color: 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '8px',
        },
      },
    },
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const sharedStyles = {
  sectionTitle: {
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 400,
    fontSize: '3.5rem',
    textAlign: 'center',
    lineHeight: 1.1,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-white))',
    textShadow:
      '4px 4px 0px light-dark(var(--mantine-color-orange-5), var(--mantine-color-orange-6))',
  } satisfies CSSProperties,

  gradientText: {
    color: 'light-dark(var(--mantine-color-orange-6), var(--mantine-color-orange-5))',
  } satisfies CSSProperties,
};
