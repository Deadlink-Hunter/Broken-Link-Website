import { IconChartHistogram, IconInfoCircle, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_LINKS } from '@/constants/links.consts';

export const useExploreToolkitCardsData = () => {
  const { t } = useTranslation();

  const CARDS_DATA = [
    {
      id: 'card1',
      titleKey: t('explore_toolkit_card1_title'),
      descriptionKey: t('explore_toolkit_card1_description'),
      buttonTextKey: t('explore_toolkit_card1_button'),
      icon: IconSearch,
      link: '/Broken-Link-Website' + NAVIGATION_LINKS[1].href,
    },
    {
      id: 'card2',
      titleKey: t('explore_toolkit_card2_title'),
      descriptionKey: t('explore_toolkit_card2_description'),
      buttonTextKey: t('explore_toolkit_card2_button'),
      icon: IconChartHistogram,
      link: '/Broken-Link-Website' + NAVIGATION_LINKS[2].href,
    },
    {
      id: 'card3',
      titleKey: t('explore_toolkit_card3_title'),
      descriptionKey: t('explore_toolkit_card3_description'),
      buttonTextKey: t('explore_toolkit_card3_button'),
      icon: IconInfoCircle,
      link: '/Broken-Link-Website' + NAVIGATION_LINKS[3].href,
    },
  ];

  return { CARDS_DATA };
};

