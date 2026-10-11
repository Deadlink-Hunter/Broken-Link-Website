import type { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;

export const getTextAreaInputStyles = (isDark: boolean): CSSProperties => ({
  backgroundColor: isDark ? colors.dark[6] : theme.white,
  border: `1px solid ${isDark ? colors.dark[4] : colors.gray[4]}`,
  borderRadius: '0.5rem',
});
