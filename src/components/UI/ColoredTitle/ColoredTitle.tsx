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
}

export const ColoredTitle = ({
  text,
  highlight,
  variant = 'primary',
  style,

  ...props
}: ColoredTitleProps) => {
  const [before, after] = text.split(highlight);

  return (
    <Typography variant={variant} style={style} {...props}>
      {before}
      <span style={coloredTitleStyles.highlight}>{highlight}</span>
      {after}
    </Typography>
  );
};
