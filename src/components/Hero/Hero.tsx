import { IconBolt, IconBrandGithub, IconSearch, IconShield } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/UI/Button/Button';
import { Typography } from '@/components/UI/Typography/Typography';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { ROUTES } from '@/constants/routes.consts';
import classes from './Hero.module.css';

export const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleStartScanning = () => {
    navigate(ROUTES.SCANNER);
  };

  return (
    <div className={classes.container}>
      <div className={classes.glowTopLeft} aria-hidden='true' />
      <div className={classes.glowBottomRight} aria-hidden='true' />
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <Typography variant='title' className={classes.title}>
            <span className={classes.titleGradient}>{t('hero.title.deadlink')}</span>
          </Typography>
          <Typography variant='title' className={classes.title}>
            <span className={classes.titleWhite}>{t('hero.title.hunter')}</span>
          </Typography>
        </div>

        <div className={classes.tagline}>
          <div className={classes.taglineItem}>
            <IconShield className={classes.taglineIconCyan} />
            <Typography variant='secondary' className={classes.taglineText}>
              {t('hero.tagline.openSource')}
            </Typography>
          </div>
          <span className={classes.taglineSeparator}>•</span>
          <div className={classes.taglineItem}>
            <Typography variant='secondary' className={classes.taglineText}>
              {t('hero.tagline.lightningFast')}
            </Typography>
            <IconBolt className={classes.taglineIconPurple} />
          </div>
        </div>

        <Typography variant='tertiary' className={classes.description}>
          {t('hero.description.part1')}{' '}
          <span className={classes.highlight}>{t('hero.description.highlight')}</span>{' '}
          {t('hero.description.part2')}
        </Typography>

        <div className={classes.buttons}>
          <Button
            variant='primary'
            onClick={handleStartScanning}
            className={classes.startButton}
            leftSection={<IconSearch className={classes.buttonIcon} />}
          >
            {t('hero.buttons.startScanning')}
          </Button>
          <Button variant='white' className={classes.githubButton}>
            <a href={HERO_CONSTANTS.GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <IconBrandGithub className={classes.buttonIcon} />
              {t('hero.buttons.viewOnGitHub')}
            </a>
          </Button>
        </div>

        <div className={classes.statistics}>
          <div className={classes.statItem}>
            <Typography variant='cyan' className={`${classes.statNumber}`}>
              10,000+
            </Typography>
            <Typography variant='body' className={classes.statLabel}>
              {t('hero.statistics.linksScanned')}
            </Typography>
          </div>
          <div className={classes.statItem}>
            <Typography variant='purple' className={`${classes.statNumber}`}>
              500+
            </Typography>
            <Typography variant='body' className={classes.statLabel}>
              {t('hero.statistics.reposAnalyzed')}
            </Typography>
          </div>
          <div className={classes.statItem}>
            <Typography variant='success' className={`${classes.statNumber}`}>
              99.9%
            </Typography>
            <Typography variant='body' className={classes.statLabel}>
              {t('hero.statistics.accuracyRate')}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
