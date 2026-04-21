import { CSSProperties } from 'react';

export const coloredTitleStyles = {
  highlight: {
    color: 'light-dark(var(--mantine-color-orange-6), var(--mantine-color-orange-5))',
    textShadow: '4px 4px 0px light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
    display: 'inline-block',
  } satisfies CSSProperties,
};
