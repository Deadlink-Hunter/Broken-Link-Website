import React, { CSSProperties } from 'react';
import { ModalProps, Modal as MantineModal, MantineTransition } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { modalVariants } from './styles';

interface SharedModalProps extends Omit<ModalProps, 'style'> {
  style?: CSSProperties;
  variant?: keyof typeof modalVariants;
  opened: boolean;
  onClose: () => void;
}

export const Modal = ({ 
  style = {}, 
  variant = 'default', 
  opened, 
  onClose, 
  size = 'md',
  ...props 
}: SharedModalProps) => {
  const variantStyle = modalVariants[variant];
  
  // Mobile responsiveness - make modal fullscreen on small screens
  const isMobile = useMediaQuery('(max-width: 50em)');
  
  // Responsive props
  const responsiveProps = {
    fullScreen: isMobile,
    size: isMobile ? 'full' : size,
    transitionProps: { 
      transition: (isMobile ? 'fade' : 'scale') as MantineTransition, 
      duration: 200 
    },
  };

  return (
    <MantineModal
      opened={opened}
      onClose={onClose}
      style={{ ...variantStyle, ...style }}
      {...responsiveProps}
      {...props}
    />
  );
};
