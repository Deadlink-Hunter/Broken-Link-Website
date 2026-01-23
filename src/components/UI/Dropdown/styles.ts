import { theme } from '@/theme';

const colors = theme.colors;

export const dropdownVariants = {
  primary: {
    backgroundColor: colors.white,
    border: `1px solid ${colors.gray[4]}`,
    borderRadius: '0.5rem',
  },

  outline: {
    backgroundColor: 'transparent',
    border: `2px solid ${colors.cyan[5]}`,
    borderRadius: '0.5rem',
  },

  ghost: {
    backgroundColor: 'transparent',
    border: 'none',
  },
};
