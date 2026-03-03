import { ReactNode } from 'react';
import { Title as MantineTitle, TitleProps } from '@mantine/core';

interface UITitleProps extends TitleProps {
  children?: ReactNode;
}

export const Title = ({ children, ...props }: UITitleProps) => {
  return <MantineTitle {...props}>{children}</MantineTitle>;
};
