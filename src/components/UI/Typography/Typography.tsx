import { CSSProperties } from 'react';
import { Text as MantineText, TextProps, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { getTypographyVariants } from './styles';
import { CustomSize } from './types';

const sizeMapper: Record<CustomSize, string> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extraLarge: 'xl',
};

interface SharedTypographyProps extends Omit<TextProps, 'variant' | 'style' | 'size'> {
  variant?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  size?: CustomSize;
  ta?: TextProps['ta'];
}

export const Typography = ({
  style,
  variant = 'primary',
  size = 'medium',
  children,
  ta,
  ...props
}: SharedTypographyProps) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const computedColorScheme = colorScheme === 'auto' ? (prefersDarkMode ? 'dark' : 'light') : colorScheme;
  const typographyVariants = getTypographyVariants(theme, computedColorScheme);
  const variantStyle = typographyVariants[variant] ?? {};
  const resolvedSize = variantStyle.size ?? size;
  const mappedSize = sizeMapper[resolvedSize];

  return (
    <MantineText
      size={mappedSize}
      style={{ ...variantStyle, ...style }}
      data-testid="typography-component"
      ta={ta}
      {...props}
    >
      {children}
    </MantineText>
  );
};