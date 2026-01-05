import { theme } from '@/theme';

export const defaultHoverColor = theme.colors.cyan[4];
export const defaultLabelColor = theme.white;

const getTextColor = (isDark: boolean) => (isDark ? theme.white : theme.colors.gray[7]);

export const linkStyles = {
  root: {
    backgroundColor: 'transparent',
  },
  label: (hovered: boolean, isDark: boolean, hoverColor: string, labelColor: string) => {
    return {
      textDecoration: 'none',
      fontWeight: '500',
      color: hovered ? hoverColor : labelColor ? labelColor : getTextColor(isDark),
    };
  },
};
