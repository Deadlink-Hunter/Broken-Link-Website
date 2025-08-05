import React, { CSSProperties } from 'react';
import { ButtonProps, Button as MantineButton } from '@mantine/core';

interface SharedButtonProps extends ButtonProps {
  style?: CSSProperties;
}

export const Button = ({ style = {}, ...props }: SharedButtonProps) => {
  return <MantineButton style={style} {...props} />;
};
