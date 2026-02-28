import { CSSProperties, ReactNode } from 'react';
import { CardProps, Card as MantineCard } from '@mantine/core';
import { cardStyles } from './styles';

interface SharedCardProps extends Omit<CardProps, 'style'> {
  style?: CSSProperties;
  children: ReactNode;
}

export const Card = ({ children, className, style, ...props }: SharedCardProps) => {
  const mergedStyle: CSSProperties = {
    ...cardStyles.default,
    ...style,
  };

  return (
    <MantineCard data-testid='card' className={className} style={mergedStyle} {...props}>
      {children}
    </MantineCard>
  );
};
