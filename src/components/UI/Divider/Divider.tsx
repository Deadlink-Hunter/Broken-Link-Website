import type React from 'react';
import type { CSSProperties } from 'react';
import { Divider as MantineDivider, useMantineTheme, useComputedColorScheme } from '@mantine/core';
import { getDividerVariants } from './styles';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  style?: CSSProperties;
  variant?: keyof ReturnType<typeof getDividerVariants>;
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = ({
  style,
  variant = 'primary',
  orientation = 'horizontal',
  ...props
}: DividerProps) => {
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme('light');
  const dividerVariants = getDividerVariants(theme, computedColorScheme);
  const variantStyle = dividerVariants[variant];

  return (
    <MantineDivider orientation={orientation} style={{ ...variantStyle, ...style }} {...props} />
  );
};