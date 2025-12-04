import { useTranslation } from 'react-i18next';

export const useFooterData = () => {
  const { t } = useTranslation();

  const QUICK_LINKS = [
    { href: '#', label: t('footer.About') },
    { href: '#', label: t('footer.Scanner') },
    { href: '#', label: t('footer.Statistics') },
    { href: '#', label: t('footer.Documentation') },
  ];

  const COMMUNITY_LINKS = [
    { href: '#', label: t('footer.Contribute') },
    { href: '#', label: t('footer.Issues') },
    { href: '#', label: t('footer.FeatureRequests') },
    { href: '#', label: t('footer.Discord') },
  ];

  return {
    QUICK_LINKS,
    COMMUNITY_LINKS,
  };
};