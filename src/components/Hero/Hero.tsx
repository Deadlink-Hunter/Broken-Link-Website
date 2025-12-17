import { IconBolt, IconBrandGithub, IconSearch, IconShield } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import { Button } from '@/components/UI/Button/Button';
import { Typography } from '@/components/UI/Typography/Typography';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { ROUTES } from '@/constants/routes.consts';
import { theme } from '@/theme';
import { heroStyles as allHeroStyles } from './shared.styles';
import classes from './Hero.module.css';

const colors = theme.colors;

export const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobileView = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const heroStyles = isMobileView ? allHeroStyles.mobile : allHeroStyles.desktop;

  const handleStartScanning = () => {
    navigate(ROUTES.SCANNER);
  };

  return (
    <div style={heroStyles.container}>
      <div style={allHeroStyles.shared.glowTopLeft} aria-hidden='true' />
      <div style={allHeroStyles.shared.glowBottomRight} aria-hidden='true' />
      <div style={heroStyles.content}>
        <div style={heroStyles.titleContainer}>
          <Typography variant='title' style={heroStyles.title}>
            <span style={allHeroStyles.shared.titleGradient}>{t('hero.title.deadlink')}</span>
          </Typography>
          <Typography variant='title' style={heroStyles.title}>
            <span style={allHeroStyles.shared.titleWhite}>{t('hero.title.hunter')}</span>
          </Typography>
        </div>

        <div style={heroStyles.tagline}>
          <div style={heroStyles.taglineItem}>
            <IconShield style={heroStyles.taglineIconCyan} />
            <Typography variant='primary' style={heroStyles.taglineText}>
              {t('hero.tagline.openSource')}
            </Typography>
          </div>
          <span style={heroStyles.taglineSeparator}>•</span>
          <div style={heroStyles.taglineItem}>
            <Typography variant='primary' style={heroStyles.taglineText}>
              {t('hero.tagline.lightningFast')}
            </Typography>
            <IconBolt style={heroStyles.taglineIconPurple} />
          </div>
        </div>

        <Typography variant='body' style={heroStyles.description}>
          {t('hero.description.part1')}{' '}
          <span style={allHeroStyles.shared.highlight}>{t('hero.description.highlight')}</span>{' '}
          {t('hero.description.part2')}
        </Typography>

        <div style={heroStyles.buttons}>
          <Button
            variant='primary'
            onClick={handleStartScanning}
            className={classes.startButton}
            style={heroStyles.startButton}
            leftSection={<IconSearch style={heroStyles.buttonIcon} />}
          >
            {t('hero.buttons.startScanning')}
          </Button>
          <a
            href={HERO_CONSTANTS.GITHUB_URL}
            target='_blank'
            rel='noopener noreferrer'
            className={classes.githubButton}
            style={heroStyles.githubButton}
          >
            <IconBrandGithub style={heroStyles.buttonIcon} />
            {t('hero.buttons.viewOnGitHub')}
          </a>
        </div>

        <div style={heroStyles.statistics}>
          <div style={heroStyles.statItem}>
            <Typography variant='primary' style={heroStyles.statNumber(colors.cyan[4])}>
              {HERO_CONSTANTS.STATISTICS.LINKS_SCANNED}
            </Typography>
            <Typography variant='body' style={heroStyles.statLabel}>
              {t('hero.statistics.linksScanned')}
            </Typography>
          </div>
          <div style={heroStyles.statItem}>
            <Typography variant='secondary' style={heroStyles.statNumber(colors.purple[4])}>
              {HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED}
            </Typography>
            <Typography variant='body' style={heroStyles.statLabel}>
              {t('hero.statistics.reposAnalyzed')}
            </Typography>
          </div>
          <div style={heroStyles.statItem}>
            <Typography variant='primary' style={heroStyles.statNumber(colors.success[5])}>
              {HERO_CONSTANTS.STATISTICS.ACCURACY_RATE}
            </Typography>
            <Typography variant='body' style={heroStyles.statLabel}>
              {t('hero.statistics.accuracyRate')}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
