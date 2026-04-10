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
  const highlightStart = highlight ? text.indexOf(highlight) : -1;
  const hasHighlight = highlightStart >= 0;
  const before = hasHighlight ? text.slice(0, highlightStart) : text;
  const after = hasHighlight ? text.slice(highlightStart + highlight.length) : '';

  return (
    <Typography variant={variant} style={style} {...props}>
      {before && beforeStyle ? <span style={beforeStyle}>{before}</span> : before}
      {hasHighlight ? <span style={coloredTitleStyles.highlight}>{highlight}</span> : null}
      {after && afterStyle ? <span style={afterStyle}>{after}</span> : after}
    </Typography>
  );
};
