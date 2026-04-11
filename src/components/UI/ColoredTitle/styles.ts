import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;

export const coloredTitleStyles = {
  highlight: {
    backgroundImage: `linear-gradient(90deg, ${colors.cyan[4]}, ${colors.purple[5]})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } satisfies CSSProperties,
};
