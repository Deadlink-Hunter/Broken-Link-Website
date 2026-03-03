import { ReactNode } from 'react';
import { Stack as MantineStack, StackProps } from '@mantine/core';

interface UIStackProps extends StackProps {
  children: ReactNode;
}

export const Stack = ({ children, ...props }: UIStackProps) => {
  return <MantineStack {...props}>{children}</MantineStack>;
};
