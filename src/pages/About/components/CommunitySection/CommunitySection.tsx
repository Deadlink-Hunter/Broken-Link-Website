import { IconHeart } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { aboutPageStyle } from '../styles';
import { CommunityTechSection } from './CommunityTechSection';
import { communitySectionStyle } from './styles';

export const CommunitySection = () => {
  const { t, i18n } = useTranslation();
  const isDark = useIsDark();
  const titleColor = isDark ? aboutPageStyle.whiteText : aboutPageStyle.blackText;

  return (
    <section style={communitySectionStyle.container}>
      <Typography variant='title' style={communitySectionStyle.mainTitle}>
        <span style={titleColor}>{t('about_page.community.title_part1')}</span>
        <span style={aboutPageStyle.brandStyle}>{t('about_page.community.title_gradient')}</span>
        {i18n.exists('about_page.community.title_part2') && (
          <span style={titleColor}>{t('about_page.community.title_part2')}</span>
        )}
      </Typography>

      <Typography style={aboutPageStyle.text(isDark)}>
        {t('about_page.community.subtitle')}
      </Typography>

      <Card style={communitySectionStyle.largeCard}>
        <div style={communitySectionStyle.cardHeader}>
          <IconHeart size={28} style={communitySectionStyle.heartIcon} />
          <Typography style={communitySectionStyle.cardTitle}>
            {t('about_page.community.card_title')}
          </Typography>
        </div>

        <Typography style={communitySectionStyle.cardParagraph}>
          {t('about_page.community.paragraph1')}
        </Typography>
        <Typography style={communitySectionStyle.cardParagraph}>
          {t('about_page.community.paragraph2')}
        </Typography>
        <Typography style={communitySectionStyle.cardParagraph}>
          {t('about_page.community.paragraph3')}
        </Typography>

        <CommunityTechSection />
      </Card>
    </section>
  );
};
