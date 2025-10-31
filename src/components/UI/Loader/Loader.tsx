import React from 'react';
import { Loader as MantineLoader } from '@mantine/core';
import { loaderStyles } from './styles';

type LoaderSize = 'small' | 'medium' | 'large' | 'extraLarge';

interface LoaderProps {
  size?: LoaderSize;
  className?: string;
}
const sizeMapper: Record<LoaderSize, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extraLarge: 'xl',
};

export const Loader: React.FC<LoaderProps> = ({ size = 'medium', className, ...props }) => {
  return (
    <div style={loaderStyles.default} className={className}>
      <MantineLoader size={sizeMapper[size as LoaderSize]} {...props} />
    </div>
  );
};
