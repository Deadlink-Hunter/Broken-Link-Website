import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { FeatureCard } from './FeatureCard';
import { IconType } from './IconTypes';
import { bigContainerStyle, smallContainerStyle } from './styles';

export const FeaturesCards = () => {
  const bigScreen = useMediaQuery('(min-width: 600px)');
  const { t } = useTranslation();

  const featureItems = [
    {
      icon: IconType.Target,
      titleKey: 'about_feature_card.card_one.title',
      descKey: 'about_feature_card.card_one.description',
    },
    {
      icon: IconType.File,
      titleKey: 'about_feature_card.card_two.title',
      descKey: 'about_feature_card.card_two.description',
    },
    {
      icon: IconType.ArrowGuide,
      titleKey: 'about_feature_card.card_three.title',
      descKey: 'about_feature_card.card_three.description',
    },
    {
      icon: IconType.BracketsAngle,
      titleKey: 'about_feature_card.card_four.title',
      descKey: 'about_feature_card.card_four.description',
    },
  ];

  return (
    <div style={bigScreen ? bigContainerStyle : smallContainerStyle}>
      {featureItems.map((item) => (
        <FeatureCard
          key={item.titleKey}
          icon={item.icon}
          title={t(item.titleKey)}
          description={t(item.descKey)}
        />
      ))}
    </div>
  );
};
