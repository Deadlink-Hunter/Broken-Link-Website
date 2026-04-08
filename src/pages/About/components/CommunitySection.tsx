import {
  IconBrandGithub,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconCircleLetterB,
  IconHeart,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { aboutPageStyle, communitySectionStyle } from './styles';

export const CommunitySection = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();
  const iconSize = 18;

  const paragraphs = t('about_page.community.paragraphs', { returnObjects: true }) as string[];

  return (
    <section style={communitySectionStyle.container}>
      {/* Main Page Title with Gradient on the second word */}
      <Typography variant='title' style={communitySectionStyle.mainTitle}>
        <span>{t('about_page.community.title_part1')}</span>
        <span style={aboutPageStyle.brandStyle}>{t('about_page.community.title_gradient')}</span>
      </Typography>

      <Typography style={aboutPageStyle.text(isDark)}>
        {t('about_page.community.subtitle')}
      </Typography>

      {/* THE SINGLE LARGE CARD */}
      <Card style={communitySectionStyle.largeCard}>
        {/* Header: Heart Icon + Why I Built This */}
        <div style={communitySectionStyle.cardHeader}>
          <IconHeart size={28} style={communitySectionStyle.heartIcon} />
          <Typography style={communitySectionStyle.cardTitle}>
            {t('about_page.community.card_title')}
          </Typography>
        </div>

        {/* Paragraphs mapped inside the card */}
        {paragraphs.map((text, index) => (
          <Typography key={index} style={communitySectionStyle.cardParagraph}>
            {text}
          </Typography>
        ))}

        {/* Footer: Tech Stack (Left) and GitHub CTA (Right) */}
        <div style={communitySectionStyle.footer}>
          <div style={communitySectionStyle.techStackGroup}>
            <Typography style={communitySectionStyle.techLabel}>
              {t('about_page.community.tech_stack_label')}
            </Typography>

            <div style={communitySectionStyle.pillsContainer}>
              <div style={communitySectionStyle.pill}>
                <IconBrandTypescript size={iconSize} />
                <Typography style={communitySectionStyle.pillText}>
                  {t('about_page.community.tech_stack.typescript')}
                </Typography>
              </div>
              <div style={communitySectionStyle.pill}>
                <IconBrandReact size={iconSize} />
                <Typography style={communitySectionStyle.pillText}>
                  {t('about_page.community.tech_stack.react')}
                </Typography>
              </div>
              <div style={communitySectionStyle.pill}>
                <IconBrandNodejs size={iconSize} />
                <Typography style={communitySectionStyle.pillText}>
                  {t('about_page.community.tech_stack.nodejs')}
                </Typography>
              </div>
              <div style={communitySectionStyle.pill}>
                <IconCircleLetterB size={iconSize} />
                <Typography style={communitySectionStyle.pillText}>
                  {t('about_page.community.tech_stack.base44')}
                </Typography>
              </div>
            </div>
          </div>

          {/* View on GitHub Button */}
          <button type="button" style={communitySectionStyle.ctaButton}>
            <IconBrandGithub size={20} />
            {t('about_page.community.cta')}
          </button>
        </div>
      </Card>
    </section>
  );
};
