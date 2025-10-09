import { Stack } from '@mantine/core';
import { Typography } from '@/components/UI/Typography/Typography';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { heroStyles } from '../styles';

export const HeroTitle = () => {
  return (
    <Stack style={heroStyles.titleStack}>
      <Typography
        variant="h1"
        style={{
          ...heroStyles.titleText,
          background: 'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-purple-5))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {HERO_CONSTANTS.TITLE}
      </Typography>
      <Typography
        variant="h1"
        style={{
          ...heroStyles.subtitleText,
          color: 'var(--mantine-color-white)',
        }}
      >
        {HERO_CONSTANTS.SUBTITLE}
      </Typography>
    </Stack>
  );
};
