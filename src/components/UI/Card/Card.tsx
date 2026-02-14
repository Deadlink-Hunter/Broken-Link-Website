import { CSSProperties, ReactNode } from 'react';
import { CardProps, Card as MantineCard } from '@mantine/core';

interface SharedCardProps extends Omit<CardProps, 'style'> {
  style?: CSSProperties;
  children: ReactNode;
}

export const Card = ({ children, className, ...props }: SharedCardProps) => {
  return (
    <MantineCard data-testid='card' className={className} {...props}>
      {children}
    </MantineCard>
  );
};
