import { Box, Group, Stack } from '@mantine/core';
import { Typography } from '@/components/UI/Typography/Typography';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { heroStyles } from '../styles';

interface StatisticItemProps {
  value: string;
  label: string;
  colorType: 'cyan' | 'purple' | 'success';
  isMobile?: boolean;
}

const StatisticItem = ({ value, label, colorType, isMobile }: StatisticItemProps) => {
  const getColorStyle = () => {
    const baseStyle = isMobile ? heroStyles.statisticNumberMobile : heroStyles.statisticNumber;
    switch (colorType) {
      case 'cyan':
        return { ...baseStyle, ...heroStyles.cyanText };
      case 'purple':
        return { ...baseStyle, ...heroStyles.purpleText };
      case 'success':
        return { ...baseStyle, ...heroStyles.successText };
      default:
        return baseStyle;
    }
  };

  return (
    <Stack style={heroStyles.statisticItem}>
      <Typography
        style={getColorStyle()}
      >
        {value}
      </Typography>
      <Typography 
        size="small"
        style={heroStyles.statisticLabel}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export const HeroStatistics = () => {
  return (
    <Box style={heroStyles.statisticsContainer}>
      <Group style={heroStyles.statisticsDesktop}>
        <StatisticItem
          value={HERO_CONSTANTS.STATISTICS.LINKS_SCANNED.VALUE}
          label={HERO_CONSTANTS.STATISTICS.LINKS_SCANNED.LABEL}
          colorType="cyan"
        />
        <StatisticItem
          value={HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.VALUE}
          label={HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.LABEL}
          colorType="purple"
        />
        <StatisticItem
          value={HERO_CONSTANTS.STATISTICS.ACCURACY_RATE.VALUE}
          label={HERO_CONSTANTS.STATISTICS.ACCURACY_RATE.LABEL}
          colorType="success"
        />
      </Group>

      <Stack style={heroStyles.statisticsMobile}>
        <StatisticItem
          value={HERO_CONSTANTS.STATISTICS.LINKS_SCANNED.VALUE}
          label={HERO_CONSTANTS.STATISTICS.LINKS_SCANNED.LABEL}
          colorType="cyan"
          isMobile
        />
        <StatisticItem
          value={HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.VALUE}
          label={HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.LABEL}
          colorType="purple"
          isMobile
        />
      </Stack>
    </Box>
  );
};
