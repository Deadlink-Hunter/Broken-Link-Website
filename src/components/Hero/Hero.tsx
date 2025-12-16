import { IconBolt, IconBrandGithub, IconSearch, IconShield } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useHover, useViewportSize } from '@mantine/hooks';
import { Button } from '@/components/UI/Button/Button';
import { Typography } from '@/components/UI/Typography/Typography';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { ROUTES } from '@/constants/routes.consts';
import { heroStyles } from './styles';

export const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { width } = useViewportSize();
  const isMobileView = width < HERO_CONSTANTS.BREAKPOINTS.MOBILE;
  const isTabletView = width < HERO_CONSTANTS.BREAKPOINTS.TABLET;
  const { hovered: githubHovered, ref: githubRef } = useHover();
  const { hovered: startHovered, ref: startRef } = useHover();

  const handleStartScanning = () => {
    navigate(ROUTES.SCANNER);
  };

  return (
    <div style={heroStyles.container(isMobileView)}>
      <div style={heroStyles.glowTopLeft} aria-hidden='true' />
      <div style={heroStyles.glowBottomRight} aria-hidden='true' />
      <div style={heroStyles.content(isMobileView)}>
        <div style={heroStyles.titleContainer(isMobileView)}>
          <Typography variant='title' style={heroStyles.title(isMobileView)}>
            <span style={heroStyles.titleGradient}>{t('hero.title.deadlink')}</span>
          </Typography>
          <Typography variant='title' style={heroStyles.title(isMobileView)}>
            <span style={heroStyles.titleWhite}>{t('hero.title.hunter')}</span>
          </Typography>
        </div>

        <div style={heroStyles.tagline(isMobileView)}>
          <div style={heroStyles.taglineItem(isMobileView)}>
            <IconShield style={heroStyles.taglineIconCyan(isMobileView)} />
            <Typography variant='primary' style={heroStyles.taglineText(isMobileView)}>
              {t('hero.tagline.openSource')}
            </Typography>
          </div>
          <span style={heroStyles.taglineSeparator(isMobileView)}>•</span>
          <div style={heroStyles.taglineItem(isMobileView)}>
            <Typography variant='primary' style={heroStyles.taglineText(isMobileView)}>
              {t('hero.tagline.lightningFast')}
            </Typography>
            <IconBolt style={heroStyles.taglineIconPurple(isMobileView)} />
          </div>
        </div>

        <Typography variant='body' style={heroStyles.description(isMobileView)}>
          {t('hero.description.part1')}{' '}
          <span style={heroStyles.highlight}>{t('hero.description.highlight')}</span>{' '}
          {t('hero.description.part2')}
        </Typography>

        <div style={heroStyles.buttons(isMobileView)}>
          <div ref={startRef}>
            <Button
              variant='primary'
              onClick={handleStartScanning}
              style={
                startHovered
                  ? { ...heroStyles.startButton(isMobileView), ...heroStyles.startButtonHovered }
                  : heroStyles.startButton(isMobileView)
              }
              leftSection={<IconSearch style={heroStyles.buttonIcon(isMobileView)} />}
            >
              {t('hero.buttons.startScanning')}
            </Button>
          </div>
          <a
            ref={githubRef}
            href={HERO_CONSTANTS.GITHUB_URL}
            target='_blank'
            rel='noopener noreferrer'
            style={
              githubHovered
                ? { ...heroStyles.githubButton(isMobileView), ...heroStyles.githubButtonHover }
                : heroStyles.githubButton(isMobileView)
            }
          >
            <IconBrandGithub style={heroStyles.buttonIcon(isMobileView)} />
            {t('hero.buttons.viewOnGitHub')}
          </a>
        </div>

        <div style={heroStyles.statistics(isMobileView, isTabletView)}>
          <div style={heroStyles.statItem(isMobileView)}>
            <Typography variant='primary' style={heroStyles.statNumberCyan(isMobileView)}>
              {HERO_CONSTANTS.STATISTICS.LINKS_SCANNED}
            </Typography>
            <Typography variant='body' style={heroStyles.statLabel(isMobileView)}>
              {t('hero.statistics.linksScanned')}
            </Typography>
          </div>
          <div style={heroStyles.statItem(isMobileView)}>
            <Typography variant='secondary' style={heroStyles.statNumberPurple(isMobileView)}>
              {HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED}
            </Typography>
            <Typography variant='body' style={heroStyles.statLabel(isMobileView)}>
              {t('hero.statistics.reposAnalyzed')}
            </Typography>
          </div>
          <div style={heroStyles.statItem(isMobileView)}>
            <Typography variant='primary' style={heroStyles.statNumberSuccess(isMobileView)}>
              {HERO_CONSTANTS.STATISTICS.ACCURACY_RATE}
            </Typography>
            <Typography variant='body' style={heroStyles.statLabel(isMobileView)}>
              {t('hero.statistics.accuracyRate')}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
