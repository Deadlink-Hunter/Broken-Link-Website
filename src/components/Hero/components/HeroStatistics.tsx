import { Box, Group, Stack } from '@mantine/core';
import { Typography } from '@/components/UI/Typography/Typography';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { heroStyles } from '../styles';

interface StatisticItemProps {
  value: string;
  label: string;
  color: string;
  isMobile?: boolean;
}

const StatisticItem = ({ value, label, color, isMobile }: StatisticItemProps) => {
  return (
    <Stack style={heroStyles.statisticItem}>
      <Typography
        style={{
          ...(isMobile ? heroStyles.statisticNumberMobile : heroStyles.statisticNumber),
          color,
        }}
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
          color="var(--mantine-color-cyan-5)"
        />
        <StatisticItem
          value={HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.VALUE}
          label={HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.LABEL}
          color="var(--mantine-color-purple-5)"
        />
        <StatisticItem
          value={HERO_CONSTANTS.STATISTICS.ACCURACY_RATE.VALUE}
          label={HERO_CONSTANTS.STATISTICS.ACCURACY_RATE.LABEL}
          color="var(--mantine-color-success-5)"
        />
      </Group>

      <Stack style={heroStyles.statisticsMobile}>
        <StatisticItem
          value={HERO_CONSTANTS.STATISTICS.LINKS_SCANNED.VALUE}
          label={HERO_CONSTANTS.STATISTICS.LINKS_SCANNED.LABEL}
          color="var(--mantine-color-cyan-5)"
          isMobile
        />
        <StatisticItem
          value={HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.VALUE}
          label={HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.LABEL}
          color="var(--mantine-color-purple-5)"
          isMobile
        />
      </Stack>
    </Box>
  );
};
