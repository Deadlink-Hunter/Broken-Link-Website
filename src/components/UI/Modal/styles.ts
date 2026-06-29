import type { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { theme } from '@/theme';

const colors = theme.colors;

export const getModalContentStyles = (isDark: boolean): CSSProperties => ({
  border: `1px solid ${rgba(colors.primary[2], 0.15)}`,
  borderRadius: theme.defaultRadius,
  backgroundColor: isDark ? colors.primary[7] : theme.white,
  color: isDark ? theme.white : colors.primary[7],
});
