import type { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { theme } from '@/theme';

const colors = theme.colors;

export const cardStyles = {
  default: {
    height: '100%',
    padding: theme.spacing.xl,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 16,
    backgroundColor: rgba(colors.primary[6], 0.5),
    border: `1px solid ${rgba(colors.primary[2], 0.15)}`,
    backdropFilter: 'blur(12px)',
  } satisfies CSSProperties,
};
