import { Group, Box } from '@mantine/core';
import { IconCircle, IconBolt } from '@tabler/icons-react';
import { Typography } from '@/components/UI/Typography/Typography';
import { CONSTANTS } from '@/constants';
import { heroStyles } from '../styles';

export const HeroFeatures = () => {
  return (
    <Group style={heroStyles.featuresGroup}>
      <Group style={heroStyles.featureItem}>
        <IconCircle 
          size={14} 
          style={heroStyles.cyanIcon}
        />
        <Typography size="small" style={heroStyles.featureText}>
          {CONSTANTS.HERO.FEATURES.OPEN_SOURCE}
        </Typography>
      </Group>
      
      <Box style={heroStyles.dividerDot} />
      
      <Group style={heroStyles.featureItem}>
        <IconBolt size={14} style={heroStyles.purpleIcon} />
        <Typography size="small" style={heroStyles.featureText}>
          {CONSTANTS.HERO.FEATURES.LIGHTNING_FAST}
        </Typography>
      </Group>
    </Group>
  );
};
