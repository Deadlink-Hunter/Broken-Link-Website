import { Group, Box } from '@mantine/core';
import { IconCircle, IconBolt } from '@tabler/icons-react';
import { Typography } from '@/components/UI/Typography/Typography';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
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
          {HERO_CONSTANTS.FEATURES.OPEN_SOURCE}
        </Typography>
      </Group>
      
      <Box style={heroStyles.dividerDot} />
      
      <Group style={heroStyles.featureItem}>
        <IconBolt size={14} style={heroStyles.purpleIcon} />
        <Typography size="small" style={heroStyles.featureText}>
          {HERO_CONSTANTS.FEATURES.LIGHTNING_FAST}
        </Typography>
      </Group>
    </Group>
  );
};
