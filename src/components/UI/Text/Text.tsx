import { ReactNode } from 'react';
import { Text as MantineText, TextProps } from '@mantine/core';

interface UITextProps extends TextProps {
  children?: ReactNode;
}

export const Text = ({ children, ...props }: UITextProps) => {
  return <MantineText {...props}>{children}</MantineText>;
};
