import { Stack } from '@mantine/core';
import { Typography } from '@/components/UI/Typography/Typography';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { heroStyles } from '../styles';

export const HeroTitle = () => {
  return (
    <Stack style={heroStyles.titleStack}>
      <Typography
        variant="h1"
        style={heroStyles.gradientTitle}
      >
        {HERO_CONSTANTS.TITLE}
      </Typography>
      <Typography
        variant="h1"
        style={heroStyles.whiteTitle}
      >
        {HERO_CONSTANTS.SUBTITLE}
      </Typography>
    </Stack>
  );
};
