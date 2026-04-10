import { CSSProperties } from 'react';
import { Typography } from '@/components/UI/Typography/Typography';
import { typographyVariants } from '../Typography/styles';
import { CustomSize } from '../Typography/types';
import { coloredTitleStyles } from './styles';

interface ColoredTitleProps {
  text: string;
  highlight: string;
  variant?: keyof typeof typographyVariants;
  style?: CSSProperties;
  size?: CustomSize;
  beforeStyle?: CSSProperties;
  afterStyle?: CSSProperties;
}

export const ColoredTitle = ({
  text,
  highlight,
  variant = 'primary',
  style,
  beforeStyle,
  afterStyle,

  ...props
}: ColoredTitleProps) => {
  const highlightIndex = text.indexOf(highlight);

  const prefixText = text.slice(0, highlightIndex);
  const suffixText = text.slice(highlightIndex + highlight.length);

  return (
    <Typography variant={variant} style={style} {...props}>
      <span style={beforeStyle}>{prefixText}</span>
      <span style={coloredTitleStyles.highlight}>{highlight}</span>
      <span style={afterStyle}>{suffixText}</span>
    </Typography>
  );
};
