import { CSSProperties } from 'react';
import { Text as MantineText, TextProps } from '@mantine/core';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { theme } from '@/theme';
import { getTypographyAutoColor, typographyVariants } from './styles';
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
  color?: string;
}

export const Typography = ({
  style,
  variant = 'primary',
  size = 'medium',
  children,
  color,
  ...props
}: SharedTypographyProps) => {
  const isDark = useIsDark();
  const variantStyle = typographyVariants[variant] ?? {};

  const autoColor = getTypographyAutoColor(variant as string, isDark, theme, variantStyle.color);

  const finalColor = color || style?.color || autoColor;
  const resolvedSize = variantStyle.size ?? size;
  const mappedSize = sizeMapper[resolvedSize];

  return (
    <MantineText
      size={mappedSize}
      style={{
        ...variantStyle,
        ...style,
        color: finalColor,
      }}
      data-testid='typography-component'
      {...props}
    >
      {children}
    </MantineText>
  );
};
