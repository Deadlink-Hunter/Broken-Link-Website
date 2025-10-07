import React, { CSSProperties } from 'react';
import { ModalProps, Modal as MantineModal } from '@mantine/core';
import { modalVariants } from './styles';

interface SharedModalProps extends Omit<ModalProps, 'style'> {
  style?: CSSProperties;
  variant?: keyof typeof modalVariants;
}

export const Modal = ({ style = {}, variant = 'default', ...props }: SharedModalProps) => {
  const variantStyle = modalVariants[variant];

  return (
    <MantineModal 
      style={{ ...variantStyle, ...style }} 
      {...props} 
    />
  );
};
