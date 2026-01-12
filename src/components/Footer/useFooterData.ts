import { useTranslation } from 'react-i18next';
import { EXTERNAL_LINKS } from '@/constants/links.consts';
import { ROUTES } from '@/constants/routes.consts';


export const useFooterData = () => {
  const { t } = useTranslation();

  const QUICK_LINKS = [
    { href: ROUTES.ABOUT, label: t('footer.About') },
    { href: ROUTES.SCANNER, label: t('footer.Scanner') },
    { href: ROUTES.STATISTICS, label: t('footer.Statistics') },
    { href: EXTERNAL_LINKS.GITHUB.REPO, label: t('footer.Documentation') },
  ];

  const COMMUNITY_LINKS = [
    { href: EXTERNAL_LINKS.GITHUB.REPO, label: t('footer.Contribute') },
    { href: `${EXTERNAL_LINKS.GITHUB.REPO}/issues`, label: t('footer.Issues') },
    { href: `${EXTERNAL_LINKS.GITHUB.REPO}/issues`, label: t('footer.FeatureRequests') },
  ];

  return {
    QUICK_LINKS,
    COMMUNITY_LINKS,
  };
};
