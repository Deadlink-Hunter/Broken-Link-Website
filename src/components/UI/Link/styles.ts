import { theme } from '@/theme';

export const linkStyles = (isDark: boolean) => {
  const colortext = isDark ? theme.white : theme.colors.gray[7];
  return {
    root: {
      backgroundColor: 'transparent',
    },
    label: (hovered: boolean) => ({
      textDecoration: 'none',
      fontWeight: '500',
      color: hovered ? theme.colors.cyan[4] : colortext,
    }),
  };
};
