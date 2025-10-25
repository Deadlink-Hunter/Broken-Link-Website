import React, { CSSProperties } from 'react';
import { ButtonProps, Button as MantineButton } from '@mantine/core';
import { buttonVariants } from './styles';

interface SharedButtonProps extends Omit<ButtonProps, 'style'> {
  style?: CSSProperties;
  variant?: keyof typeof buttonVariants;
  onClick?: () => void;
}

export const Button = ({ style = {}, variant = 'primary', ...props }: SharedButtonProps) => {
  const variantStyle = buttonVariants[variant];

  return <MantineButton style={{ ...variantStyle, ...style }} {...props} />;
};
