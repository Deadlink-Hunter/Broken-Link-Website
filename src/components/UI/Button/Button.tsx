import React, { CSSProperties } from 'react';
import { ButtonProps, Button as MantineButton, MantineStyleProp } from '@mantine/core';
import { buttonVariants } from './styles';

interface SharedButtonProps extends Omit<ButtonProps, 'style'> {
  style?: CSSProperties;
  variant?: keyof typeof buttonVariants;
  onClick?: () => void;
}

export const Button = ({ style = {}, variant = 'primary', ...props }: SharedButtonProps) => {
  const variantStyle = buttonVariants[variant];
  // TODO: Check why need this line?(add color withe in styles.ts)
  const mergedStyle: MantineStyleProp = { ...variantStyle, ...style } as MantineStyleProp;

  return <MantineButton style={mergedStyle} {...props} />;
};
