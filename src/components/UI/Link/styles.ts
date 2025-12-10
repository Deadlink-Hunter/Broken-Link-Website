import { theme } from '@/theme';

const getTextColor = (isDark: boolean) => (isDark ? theme.white : theme.colors.gray[7]);

export const linkStyles =  {
  root: {
    backgroundColor: 'transparent',
  },
  label: (hovered: boolean, isDark: boolean) => ({
    textDecoration: 'none',
    fontWeight: '500',
    color: hovered ? theme.colors.cyan[4] : getTextColor(isDark),
  }),
};
