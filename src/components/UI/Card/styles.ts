import type { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { theme } from '@/theme';

const colors = theme.colors;

export const getCardStyles = (isDark: boolean) => ({
  default: {
    height: '100%',
    padding: theme.spacing.xl,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 16,
    backgroundColor: isDark ? rgba(colors.primary[6], 0.5) : theme.white,
    border: `1px solid ${isDark ? rgba(colors.primary[2], 0.15) : colors.primary[1]}`,
    backdropFilter: 'blur(12px)',
    boxShadow: isDark
      ? 'none'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  } satisfies CSSProperties,
});
