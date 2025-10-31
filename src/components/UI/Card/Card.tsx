import React, { CSSProperties, ReactNode } from 'react';
import { CardProps, Card as MantineCard } from '@mantine/core';
import { cardStyles } from './styles';

interface SharedCardProps extends Omit<CardProps, 'style'> {
  style?: CSSProperties;
  children: ReactNode;
}

export const Card = ({ style = {}, children, ...props }: SharedCardProps) => {
  const defaultStyle = cardStyles.default;

  return (
    <MantineCard style={{ ...defaultStyle, ...style }} {...props}>
      {children}
    </MantineCard>
  );
};
