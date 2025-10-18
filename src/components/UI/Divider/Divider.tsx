import type React from 'react';
import type { CSSProperties } from 'react';
import { Divider as MantineDivider } from '@mantine/core';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  style?: CSSProperties;
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = ({
  style,
  orientation = 'horizontal',
  ...props
}: DividerProps) => {
  return (
    <MantineDivider orientation={orientation} style={{ ...style }} {...props} />
  );
};
