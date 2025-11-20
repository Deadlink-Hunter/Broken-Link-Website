import { theme } from '@/theme';

export const linkStyles = {
  root: {
    backgroundColor: 'transparent',
  },
  label: (hovered: boolean) => ({
    textDecoration: 'none',
    fontWeight: '500',
    color: hovered ? theme.colors.cyan[4] : theme.white,
  }),
};
