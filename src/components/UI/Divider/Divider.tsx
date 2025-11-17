import type React from 'react';
import type { CSSProperties } from 'react';
import { Divider as MantineDivider } from '@mantine/core';
import { dividerVariants } from './styles';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  style?: CSSProperties;
  variant?: keyof typeof dividerVariants;
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = ({
  style,
  variant = 'primary',
  orientation = 'horizontal',
  ...props
}: DividerProps) => {
  const variantStyle = dividerVariants[variant];

  return (
    <MantineDivider
      data-testid='divider'
      orientation={orientation}
      style={{ ...variantStyle, ...style }}
      {...props}
    />
  );
};
