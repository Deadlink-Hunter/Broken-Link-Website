import { IconBolt, IconShield } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@/components/UI/Typography/Typography';
import { useMantineTheme, useMantineColorScheme } from '@mantine/core';
import classes from './HeroTitle.module.css';

export const HeroTitle = () => {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const hunterColor =
    colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9];

  return (
    <>
      <div className={classes.titleContainer}>
        <Typography variant='title' className={classes.title}>
          <span className={classes.titleGradient}>{t('hero.title.deadlink')}</span>
        </Typography>
        <Typography 
          variant='title' 
          className={classes.title}
          style={{
          color: hunterColor,
          transition: 'color 0.3s ease',
          }}          
        >
          <span>{t('hero.title.hunter')}</span>
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
