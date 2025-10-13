import { Box } from '@mantine/core';
import { Typography } from '@/components/UI/Typography/Typography';
import { CONSTANTS } from '@/constants';
import { heroStyles } from '../styles';

interface StatisticItemProps {
  value: string;
  label: string;
  colorType: 'cyan' | 'purple' | 'success';
  isMobile?: boolean;
}

const StatisticItem = ({ value, label, colorType, isMobile }: StatisticItemProps) => {
  const baseStyle = isMobile ? heroStyles.statisticNumberMobile : heroStyles.statisticNumber;
  
  const colorStyle = (() => {
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
  })();

  return (
    <div style={heroStyles.statisticItem}>
      <Typography style={colorStyle}>
        {value}
      </Typography>
      <Typography 
        size="small"
        style={heroStyles.statisticLabel}
      >
        {label}
      </Typography>
    </div>
  );
};

export const HeroStatistics = () => {
  return (
    <Box style={heroStyles.statisticsContainer}>
      <div style={heroStyles.statisticsDesktop}>
        <StatisticItem
          value={CONSTANTS.HERO.STATISTICS.LINKS_SCANNED.VALUE}
          label={CONSTANTS.HERO.STATISTICS.LINKS_SCANNED.LABEL}
          colorType="cyan"
        />
        <StatisticItem
          value={CONSTANTS.HERO.STATISTICS.REPOS_ANALYZED.VALUE}
          label={CONSTANTS.HERO.STATISTICS.REPOS_ANALYZED.LABEL}
          colorType="purple"
        />
        <StatisticItem
          value={CONSTANTS.HERO.STATISTICS.ACCURACY_RATE.VALUE}
          label={CONSTANTS.HERO.STATISTICS.ACCURACY_RATE.LABEL}
          colorType="success"
        />
      </div>

      <div style={heroStyles.statisticsMobile}>
        <StatisticItem
          value={CONSTANTS.HERO.STATISTICS.LINKS_SCANNED.VALUE}
          label={CONSTANTS.HERO.STATISTICS.LINKS_SCANNED.LABEL}
          colorType="cyan"
          isMobile
        />
        <StatisticItem
          value={CONSTANTS.HERO.STATISTICS.REPOS_ANALYZED.VALUE}
          label={CONSTANTS.HERO.STATISTICS.REPOS_ANALYZED.LABEL}
          colorType="purple"
          isMobile
        />
      </div>
    </Box>
  );
};
