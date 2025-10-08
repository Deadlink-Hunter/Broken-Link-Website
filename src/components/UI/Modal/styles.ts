import { theme } from '@/theme';

const colors = theme.colors as Record<string, readonly string[]>;

// Modal constants
export const MODAL_CONSTANTS = {
  BREAKPOINTS: {
    MOBILE: '(max-width: 50em)',
  },
  TRANSITIONS: {
    MOBILE: 'fade',
    DESKTOP: 'scale',
    DURATION: 200,
  },
  SIZES: {
    FULL: 'full',
    MEDIUM: 'md',
  },
  BORDERS: {
    WIDTH: '2px',
    RADIUS: '12px',
  },
} as const;

export const modalVariants = {
  primary: {
    backgroundColor: colors.primary[0],
    borderColor: colors.primary[5],
  },
  secondary: {
    backgroundColor: colors.purple[0],
    borderColor: colors.purple[5],
  },
  success: {
    backgroundColor: colors.success[0],
    borderColor: colors.success[5],
  },
  warning: {
    backgroundColor: colors.warning[0],
    borderColor: colors.warning[5],
  },
  error: {
    backgroundColor: colors.error[0],
    borderColor: colors.error[5],
  },
  default: {
    backgroundColor: colors.cyan[0],
    borderColor: colors.cyan[2],
  },
  centered: {
    backgroundColor: colors.cyan[0],
    border: `${MODAL_CONSTANTS.BORDERS.WIDTH} solid ${colors.purple[5]}`,
  },
  custom: {
    backgroundColor: colors.cyan[0],
    border: `${MODAL_CONSTANTS.BORDERS.WIDTH} solid ${colors.cyan[4]}`,
    borderRadius: MODAL_CONSTANTS.BORDERS.RADIUS,
  },
};
