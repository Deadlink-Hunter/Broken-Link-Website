import { theme } from '@/theme';

const colors = theme.colors;

export const cardStyles = {
  default: {
    padding: '1rem',
    borderRadius: '0.5rem',
    // backgroundColor: colors.primary[5],
    boxShadow: `0 1px 3px ${colors.primary[1]}`,
    color: colors.cyan[0],
  },
};
