import { CSSProperties } from 'react';
import { Modal as MantineModal, ModalProps } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { getModalContentStyles } from './styles';

interface SharedModalProps extends ModalProps {
  contentStyle?: CSSProperties;
}

export const Modal = ({
  contentStyle = {},
  fullScreen,
  size = 'lg',
  styles,
  ...props
}: SharedModalProps) => {
  const isMobile = useMediaQuery('(max-width: 48em)');
  const resolvedFullScreen = fullScreen ?? isMobile;
  const isDark = useIsDark();
  const baseContentStyles = getModalContentStyles(isDark);
  const resolvedStyles: ModalProps['styles'] = {
    ...styles,
    content: {
      ...baseContentStyles,
      ...styles?.content,
      ...contentStyle,
    },
  };

  return (
    <MantineModal {...props} fullScreen={resolvedFullScreen} size={size} styles={resolvedStyles} />
  );
};
