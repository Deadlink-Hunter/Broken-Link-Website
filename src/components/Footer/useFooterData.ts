import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useFooterData = () => {
  const { t } = useTranslation();

  const QUICK_LINKS = useMemo(() => [
    { href: '#', label: t('footer.About') },
    { href: '#', label: t('footer.Scanner') },
    { href: '#', label: t('footer.Statistics') },
    { href: '#', label: t('footer.Documentation') },
  ], [t]);

  const COMMUNITY_LINKS = useMemo(() => [
    { href: '#', label: t('footer.Contribute') },
    { href: '#', label: t('footer.Issues') },
    { href: '#', label: t('footer.FeatureRequests') },
    { href: '#', label: t('footer.Discord') },
  ], [t]);

  return {
    QUICK_LINKS,
    COMMUNITY_LINKS,
  };
};