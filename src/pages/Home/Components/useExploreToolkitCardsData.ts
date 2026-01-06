import { IconChartLine, IconInfoCircle, IconScan } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export const useExploreToolkitCardsData = () => {
  const { t } = useTranslation();

  const CARDS_DATA = [
    {
      id: 'card1',
      titleKey: t('explore_toolkit_card1_title'),
      descriptionKey: t('explore_toolkit_card1_description'),
      buttonTextKey: t('explore_toolkit_card1_button'),
      icon: IconScan,
    },
    {
      id: 'card2',
      titleKey: t('explore_toolkit_card2_title'),
      descriptionKey: t('explore_toolkit_card2_description'),
      buttonTextKey: t('explore_toolkit_card2_button'),
      icon: IconChartLine,
    },
    {
      id: 'card3',
      titleKey: t('explore_toolkit_card3_title'),
      descriptionKey: t('explore_toolkit_card3_description'),
      buttonTextKey: t('explore_toolkit_card3_button'),
      icon: IconInfoCircle,
    },
  ];

  return { CARDS_DATA };
};
