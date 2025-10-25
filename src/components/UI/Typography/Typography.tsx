import { CSSProperties } from 'react';
import { Text as MantineText, TextProps } from '@mantine/core';
import { typographyVariants } from './styles';
import { CustomSize } from './types';

const sizeMapper: Record<CustomSize, string> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extraLarge: 'xl',
};

interface SharedTypographyProps extends Omit<TextProps, 'variant' | 'style' | 'size'> {
  variant?: keyof typeof typographyVariants;
  children?: React.ReactNode;
  style?: CSSProperties;
  size?: CustomSize;
}

export const Typography = ({
  style,
  variant = 'primary',
  size = 'medium',
  children,

  ...props
}: SharedTypographyProps) => {
  const variantStyle = typographyVariants[variant] ?? {};
  const resolvedSize = variantStyle.size ?? size;
  const mappedSize = sizeMapper[resolvedSize];

  return (
    <MantineText
      size={mappedSize}
      style={{ ...variantStyle, ...style }}
      data-testid='typography-component'
      {...props}
    >
      {children}
    </MantineText>
  );
};
