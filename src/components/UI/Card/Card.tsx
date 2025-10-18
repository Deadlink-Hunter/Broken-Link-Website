import React, { CSSProperties, ReactNode } from 'react';
import { CardProps, Card as MantineCard } from '@mantine/core';

interface SharedCardProps extends Omit<CardProps, "style"> {
  style?: CSSProperties;
  children: ReactNode;
}

export const Card = ({ style = {}, children, ...props }: SharedCardProps) => {
  return (
    <MantineCard style={{ ...style }} {...props}>
      {children}
    </MantineCard>
  );
};
