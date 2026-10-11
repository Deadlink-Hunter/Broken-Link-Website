import type { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;

export const getTextAreaInputStyles = (isDark: boolean): CSSProperties => ({
  backgroundColor: isDark ? colors.dark[6] : theme.white,
  borderRadius: '0.5rem',
});
