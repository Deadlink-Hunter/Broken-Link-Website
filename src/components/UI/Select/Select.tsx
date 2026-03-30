import React, { CSSProperties } from 'react';
import { Select as MantineSelect, MantineStyleProp, SelectProps } from '@mantine/core';
import { selectVariants } from './styles';

interface SharedSelectProps extends Omit<SelectProps, 'style' | 'data' | 'onChange'> {
  style?: CSSProperties;
  variant?: keyof typeof selectVariants;
  data: string[];
  onChange: (value: string | null) => void;
}

export const Select = ({
  style = {},
  variant = 'primary',
  data,
  onChange,
  ...props
}: SharedSelectProps) => {
  const variantStyle = selectVariants[variant];

  const mergedStyle: MantineStyleProp = {
    ...variantStyle,
    ...style,
  } as MantineStyleProp;

  return (
    <MantineSelect
      data-testid='select'
      data={data}
      onChange={onChange}
      style={mergedStyle}
      {...props}
    />
  );
};
