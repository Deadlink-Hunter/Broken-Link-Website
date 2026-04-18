import { IconBolt, IconShield } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@/components/UI/Typography/Typography';
import classes from './HeroTitle.module.css';

export const HeroTitle = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.titleContainer}>
        <Typography variant='title' className={classes.title}>
          <span className={classes.titleGradient}>{t('hero.title.deadlink')}</span>
        </Typography>
        <Typography variant='title' className={classes.title}>
          {t('hero.title.hunter')}
        </Typography>
      </div>

      <div className={classes.tagline}>
        <div className={classes.taglineItem}>
          <IconShield className={classes.taglineIconCyan} />
          <Typography variant='primary' className={classes.taglineText}>
            {t('hero.tagline.openSource')}
          </Typography>
        </div>
        <span className={classes.taglineSeparator}>•</span>
        <div className={classes.taglineItem}>
          <Typography variant='primary' className={classes.taglineText}>
            {t('hero.tagline.lightningFast')}
          </Typography>
          <IconBolt className={classes.taglineIconPurple} />
        </div>
      </div>
    </>
  );
};