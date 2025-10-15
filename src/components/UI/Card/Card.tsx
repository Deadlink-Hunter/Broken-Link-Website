import React, { CSSProperties, ReactNode } from 'react';
import { CardProps, Card as MantineCard, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { getCardStyles } from './styles';

interface SharedCardProps extends Omit<CardProps, "style"> {
  style?: CSSProperties;
  children: ReactNode;
}

export const Card = ({ style = {}, children, ...props }: SharedCardProps) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const computedColorScheme = colorScheme === 'auto' ? (prefersDarkMode ? 'dark' : 'light') : colorScheme;
  const defaultStyle = getCardStyles(theme, computedColorScheme).default;

  return (
    <MantineCard style={{ ...defaultStyle, ...style }} {...props}>
      {children}
    </MantineCard>
  );
};