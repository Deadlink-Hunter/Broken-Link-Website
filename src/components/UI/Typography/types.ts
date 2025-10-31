export const CUSTOM_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extraLarge',
} as const;

export type CustomSize = (typeof CUSTOM_SIZES)[keyof typeof CUSTOM_SIZES];

export interface TypographyVariant {
  color: string;
  size?: CustomSize;
}
