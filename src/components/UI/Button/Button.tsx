import React, { CSSProperties } from 'react';
import { ButtonProps, Button as MantineButton, useMantineTheme, useComputedColorScheme } from '@mantine/core';
import { getButtonVariants } from './styles';

interface SharedButtonProps extends Omit<ButtonProps, 'style'> {
  style?: CSSProperties;
  variant?: keyof ReturnType<typeof getButtonVariants>;
  onClick?: () => void;
}

export const Button = ({ style = {}, variant = 'primary', ...props }: SharedButtonProps) => {
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme('light');
  const buttonVariants = getButtonVariants(theme, computedColorScheme);
  const variantStyle = buttonVariants[variant];

  return <MantineButton style={{ ...variantStyle, ...style }} {...props} />;
};