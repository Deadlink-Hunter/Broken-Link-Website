import { Typography } from '@/components/UI/Typography/Typography';
import { CONSTANTS } from '@/constants';
import { heroStyles } from '../styles';

export const HeroTitle = () => {
  return (
    <div style={heroStyles.titleStack}>
      <Typography
        variant="h1"
        style={heroStyles.gradientTitle}
      >
        {CONSTANTS.HERO.TITLE}
      </Typography>
      <Typography
        variant="h1"
        style={heroStyles.whiteTitle}
      >
        {CONSTANTS.HERO.SUBTITLE}
      </Typography>
    </div>
  );
};
