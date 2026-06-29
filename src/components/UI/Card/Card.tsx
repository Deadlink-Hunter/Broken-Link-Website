import { CSSProperties, ReactNode } from 'react';
import { CardProps, Card as MantineCard, rgba } from '@mantine/core';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { theme } from '@/theme';
import { cardStyles } from './styles';

interface SharedCardProps extends Omit<CardProps, 'style'> {
  style?: CSSProperties;
  children: ReactNode;
}

export const Card = ({ children, className, style, ...props }: SharedCardProps) => {
  const isDark = useIsDark();
  const { colors, shadows } = theme;

  const themeStyles: CSSProperties = {
    backgroundColor: isDark ? colors.primary[8] : theme.white,
    border: `1px solid ${isDark ? rgba(colors.primary[2], 0.15) : colors.gray[3]}`,
    boxShadow: isDark ? 'none' : shadows.sm,
    borderRadius: '1.25rem',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
  };

  const mergedStyle: CSSProperties = {
    ...cardStyles.default,
    ...themeStyles,
    ...style,
  };

  return (
    <MantineCard data-testid='card' className={className} style={mergedStyle} {...props}>
      {children}
    </MantineCard>
  );
};
