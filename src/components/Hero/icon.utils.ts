import { CSSProperties } from 'react';
import { theme } from '@/theme';

export const ICON_MIN_SIZE_MOBILE = theme.spacing.lg;
export const ICON_MIN_SIZE_DESKTOP = theme.spacing.iconDesktop;
const ICON_MAX_SIZE = theme.spacing.iconMax;

export const getTaglineIconBase = (minSize: string, viewportSize: string): CSSProperties => ({
  width: `clamp(${minSize}, ${viewportSize}, ${ICON_MAX_SIZE})`,
  height: `clamp(${minSize}, ${viewportSize}, ${ICON_MAX_SIZE})`,
  flexShrink: 0,
});
