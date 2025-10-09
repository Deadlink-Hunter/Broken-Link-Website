import { CSSProperties } from 'react';
import { ModalProps, Modal as MantineModal, MantineTransition } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { modalVariants, MODAL_CONSTANTS } from './styles';

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
  size = MODAL_CONSTANTS.SIZES.MEDIUM,
  ...props 
}: SharedModalProps) => {
  const variantStyle = modalVariants[variant];
  const isMobile = useMediaQuery(MODAL_CONSTANTS.BREAKPOINTS.MOBILE);
  
  const responsiveProps = {
    fullScreen: isMobile,
    size: isMobile ? MODAL_CONSTANTS.SIZES.FULL : size,
    transitionProps: { 
      transition: (isMobile ? MODAL_CONSTANTS.TRANSITIONS.MOBILE : MODAL_CONSTANTS.TRANSITIONS.DESKTOP) as MantineTransition, 
      duration: MODAL_CONSTANTS.TRANSITIONS.DURATION
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
