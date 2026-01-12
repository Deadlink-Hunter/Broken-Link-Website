import { useTranslation } from 'react-i18next';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { ROUTES } from '@/constants/routes.consts';


export const useFooterData = () => {
  const { t } = useTranslation();

  const GITHUB_ISSUE_HREF = "https://github.com/Deadlink-Hunter/Broken-Link-Website/issues"

  const QUICK_LINKS = [
    { href: ROUTES.ABOUT, label: t('footer.About') },
    { href: ROUTES.SCANNER, label: t('footer.Scanner') },
    { href: ROUTES.STATISTICS, label: t('footer.Statistics') },
    { href: HERO_CONSTANTS.GITHUB_URL, label: t('footer.Documentation') },
  ];

  const COMMUNITY_LINKS = [
    { href: HERO_CONSTANTS.GITHUB_URL, label: t('footer.Contribute') },
    { href: GITHUB_ISSUE_HREF, label: t('footer.Issues') },
    { href: GITHUB_ISSUE_HREF, label: t('footer.FeatureRequests') },
  ];

  return {
    QUICK_LINKS,
    COMMUNITY_LINKS,
  };
};
