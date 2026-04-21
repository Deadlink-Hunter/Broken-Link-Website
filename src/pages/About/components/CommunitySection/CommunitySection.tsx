import { IconHeart } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { ColoredTitle } from '@/components/UI/ColoredTitle/ColoredTitle';
import { Typography } from '@/components/UI/Typography/Typography';
import { aboutPageStyle } from '../styles';
import { CommunityTechSection } from './CommunityTechSection';
import { communitySectionStyle } from './styles';

export const CommunitySection = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();
  const titleColor = isDark ? aboutPageStyle.whiteText : aboutPageStyle.blackText;

  return (
    <section style={communitySectionStyle.container}>
      <Typography style={communitySectionStyle.badge}>⭐ 80+ GitHub Stars</Typography>
      <ColoredTitle
        variant='title'
        style={communitySectionStyle.mainTitle}
        text={`${t('about_page.community.title_part1')}${t('about_page.community.title_gradient')}`}
        highlight={t('about_page.community.title_gradient')}
        beforeStyle={titleColor}
      />
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
