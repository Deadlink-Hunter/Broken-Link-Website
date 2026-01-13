import { useTranslation } from 'react-i18next';
import { FOOTER_QUICK_LINKS, FOOTER_COMMUNITY_LINKS } from '@/constants/links.consts';

export const useFooterData = () => {
  const { t } = useTranslation();

  const QUICK_LINKS = FOOTER_QUICK_LINKS.map(link => ({
    href: link.href,
    label: t(link.label),
  }));

  const COMMUNITY_LINKS = FOOTER_COMMUNITY_LINKS.map(link => ({
    href: link.href,
    label: t(link.label),
  }));

  return {
    QUICK_LINKS,
    COMMUNITY_LINKS,
  };
};
