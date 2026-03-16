import { CSSProperties } from 'react';
import { Text as MantineText, TextProps } from '@mantine/core';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { getTypographyVariants } from './styles';
import { CustomSize } from './types';

const sizeMapper: Record<CustomSize, string> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extraLarge: 'xl',
};

type TypographyVariantKey = keyof ReturnType<typeof getTypographyVariants>;

interface SharedTypographyProps extends Omit<TextProps, 'variant' | 'style' | 'size'> {
  variant?: TypographyVariantKey;
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
  const isDark = useIsDark();
  const typographyVariants = getTypographyVariants(isDark);
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
