import React from 'react';
import { Loader as MantineLoader, type LoaderProps as MantineLoaderProps } from '@mantine/core';
import { loaderStyles } from './styles';

type LoaderSize = 'small' | 'medium' | 'large' | 'extraLarge';

interface LoaderProps extends Omit<MantineLoaderProps, 'size' | 'className'> {
  size?: LoaderSize;
  className?: string;
}
const sizeMapper: Record<LoaderSize, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extraLarge: 'xl',
};

export const Loader = ({ size = 'medium', className, ...props }: LoaderProps) => {
  return (
    <div data-testid='loader' style={loaderStyles.default} className={className}>
      <MantineLoader
        data-testid='mantine-loader'
        size={sizeMapper[size as LoaderSize]}
        {...props}
      />
    </div>
  );
};
