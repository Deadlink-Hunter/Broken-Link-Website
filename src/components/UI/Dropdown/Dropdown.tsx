import React, { CSSProperties } from 'react';
import { Select, SelectProps, MantineStyleProp } from '@mantine/core';
import { dropdownVariants } from './styles';

interface DropdownProps extends Omit<SelectProps, 'style' | 'data' | 'onChange'> {
  style?: CSSProperties;
  variant?: keyof typeof dropdownVariants;
  data: string[];
  onValueChange: (value: string | null) => void;
}

export const Dropdown = ({
  style = {},
  variant = 'primary',
  data,
  onValueChange,
  ...props
}: DropdownProps) => {
  const variantStyle = dropdownVariants[variant];

  const mergedStyle: MantineStyleProp = {
    ...variantStyle,
    ...style,
  } as MantineStyleProp;

  return (
    <Select
      data-testid="dropdown"
      data={data}
      onChange={onValueChange}
      style={mergedStyle}
      {...props}
    />
  );
};
