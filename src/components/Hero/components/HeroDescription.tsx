import { Box } from '@mantine/core';
import { Typography } from '@/components/UI/Typography/Typography';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { heroStyles } from '../styles';

export const HeroDescription = () => {
  return (
    <Box style={heroStyles.descriptionContainer}>
      <Typography 
        variant="body"
        style={heroStyles.descriptionText}
      >
        {HERO_CONSTANTS.DESCRIPTION.MAIN} 
        <span 
          style={{
            ...heroStyles.highlightText,
            color: 'var(--mantine-color-cyan-5)',
            fontWeight: 600,
          }}
        >
          {HERO_CONSTANTS.DESCRIPTION.HIGHLIGHT}
        </span> 
        {HERO_CONSTANTS.DESCRIPTION.CONTINUATION}
      </Typography>
    </Box>
  );
};
