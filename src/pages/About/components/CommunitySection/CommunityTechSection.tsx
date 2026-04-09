import {
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandGithub,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { LinkButton, LinkTarget } from '@/components/UI/Button/LinkButton';
import { Typography } from '@/components/UI/Typography/Typography';
import { EXTERNAL_LINKS } from '@/constants/links.consts';
import { communitySectionStyle } from './styles';

export const CommunityTechSection = () => {
  const { t } = useTranslation();
  const iconSize = 18;

  return (
    <div style={communitySectionStyle.techSection}>
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
        </div>
      </div>

      <LinkButton
        href={EXTERNAL_LINKS.GITHUB.REPO}
        target={LinkTarget.Blank}
        variant='primary'
        style={communitySectionStyle.ctaButton}
      >
        <IconBrandGithub size={20} />
        {t('about_page.community.cta')}
      </LinkButton>
    </div>
  );
};