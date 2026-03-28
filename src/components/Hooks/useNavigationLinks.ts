import { useTranslation } from 'react-i18next';
import {
  EXTERNAL_LINKS,
  FOOTER_COMMUNITY_LINKS,
  FOOTER_QUICK_LINKS,
  NAVIGATION_LINKS,
} from '@/constants/links.consts';

export const useNavigationLinks = () => {
  const { t } = useTranslation();

  const translatedNavigationLinks = NAVIGATION_LINKS.map((link) => ({
    ...link,
    label: t(link.label),
  }));

  const translatedFooterQuickLinks = FOOTER_QUICK_LINKS.map((link) => ({
    ...link,
    label: t(link.label),
  }));

  const translatedFooterCommunityLinks = FOOTER_COMMUNITY_LINKS.map((link) => ({
    ...link,
    label: t(link.label),
  }));

  return {
    externalLinks: EXTERNAL_LINKS,
    navigationLinks: translatedNavigationLinks,
    footerQuickLinks: translatedFooterQuickLinks,
    footerCommunityLinks: translatedFooterCommunityLinks,
  };
};
