import { IconChartHistogram, IconInfoCircle, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useNavigationLinks } from '@/components/Hooks/useNavigationLinks';

export const useExploreToolkitCardsData = () => {
  const { t } = useTranslation();
  const { navigationLinks } = useNavigationLinks();

  const CARDS_DATA = [
    {
      id: 'card1',
      titleKey: t('explore_toolkit_card1_title'),
      descriptionKey: t('explore_toolkit_card1_description'),
      buttonTextKey: t('explore_toolkit_card1_button'),
      icon: IconSearch,
      link: navigationLinks.find((link) => link.label === 'Scanner')?.href,
    },
    {
      id: 'card2',
      titleKey: t('explore_toolkit_card2_title'),
      descriptionKey: t('explore_toolkit_card2_description'),
      buttonTextKey: t('explore_toolkit_card2_button'),
      icon: IconChartHistogram,
      link: navigationLinks.find((link) => link.label === 'Statistics')?.href,
    },
    {
      id: 'card3',
      titleKey: t('explore_toolkit_card3_title'),
      descriptionKey: t('explore_toolkit_card3_description'),
      buttonTextKey: t('explore_toolkit_card3_button'),
      icon: IconInfoCircle,
      link: navigationLinks.find((link) => link.label === 'About')?.href,
    },
  ];

  return { CARDS_DATA };
};
