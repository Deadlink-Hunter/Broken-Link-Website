import { Box } from '@mantine/core';
import { Typography } from '@/components/UI/Typography/Typography';
import { CONSTANTS } from '@/constants';
import { heroStyles } from '../styles';

export const HeroDescription = () => {
  return (
    <Box style={heroStyles.descriptionContainer}>
      <Typography 
        variant="body"
        style={heroStyles.descriptionText}
      >
          {CONSTANTS.HERO.DESCRIPTION.MAIN} 
        <span style={heroStyles.highlightSpan}>
            {CONSTANTS.HERO.DESCRIPTION.HIGHLIGHT}
        </span> 
          {CONSTANTS.HERO.DESCRIPTION.CONTINUATION}
      </Typography>
    </Box>
  );
};
