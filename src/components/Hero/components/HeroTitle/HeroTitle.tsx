import { IconBolt, IconShield } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import classes from './HeroTitle.module.css';

export const HeroTitle = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  const hunterColor = isDark ? classes.titleWhite : classes.titleBlack;

  return (
    <>
      <div className={classes.titleContainer}>
        <Typography variant='title' className={classes.title}>
          <span className={classes.titleGradient}>{t('hero.title.deadlink')}</span>
        </Typography>
        <Typography variant='title' className={classes.title}>
          <span className={hunterColor}>{t('hero.title.hunter')}</span>
        </Typography>
      </div>

      <div className={classes.tagline}>
        <div className={classes.taglineItem}>
          <IconShield className={classes.taglineIconCyan} />
          <Typography variant='tertiary' className={classes.taglineText}>
            {t('hero.tagline.openSource')}
          </Typography>
        </div>
        <span className={classes.taglineSeparator}>•</span>
        <div className={classes.taglineItem}>
          <Typography variant='tertiary' className={classes.taglineText}>
            {t('hero.tagline.lightningFast')}
          </Typography>
          <IconBolt className={classes.taglineIconPurple} />
        </div>
      </div>
    </>
  );
};
