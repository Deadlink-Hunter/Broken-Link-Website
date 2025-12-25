import { useTranslation } from 'react-i18next';
import { Typography } from '@/components/UI/Typography/Typography';
import classes from './HeroDescription.module.css';

export const HeroDescription = () => {
  const { t } = useTranslation();

  return (
    <Typography variant='tertiary' className={classes.description}>
      {t('hero.description.part1')}{' '}
      <span className={classes.highlight}>{t('hero.description.highlight')}</span>{' '}
      {t('hero.description.part2')}
    </Typography>
  );
};
