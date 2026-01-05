import { useTranslation } from 'react-i18next';
import { Typography } from '@/components/UI/Typography/Typography';
import classes from './HeroStatistics.module.css';

//TODO: Replace with data from the server
const STATISTICS = [
  { value: '10,000+', variant: 'cyan', labelKey: 'hero.statistics.linksScanned' },
  { value: '500+', variant: 'purple', labelKey: 'hero.statistics.reposAnalyzed' },
  { value: '99.9%', variant: 'success', labelKey: 'hero.statistics.accuracyRate' },
];

export const HeroStatistics = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.statistics}>
      {STATISTICS.map((stat) => (
        <div key={stat.labelKey} className={classes.statItem}>
          <Typography variant={stat.variant} className={classes.statNumber}>
            {stat.value}
          </Typography>
          <Typography variant='body' className={classes.statLabel}>
            {t(stat.labelKey)}
          </Typography>
        </div>
      ))}
    </div>
  );
};
