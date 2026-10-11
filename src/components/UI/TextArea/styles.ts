import type { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;

export const getTextAreaInputStyles = (isDark: boolean): CSSProperties => ({
  color: isDark ? colors.gray[0] : colors.gray[7],
  backgroundColor: isDark ? colors.primary[7] : colors.primary[1],
  borderRadius: theme.radius.md,
});
