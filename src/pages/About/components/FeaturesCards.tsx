import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { FeatureCard } from './FeatureCard';
import { IconType } from './IconTypes';
import { bigContainerStyle, smallContainerStyle } from './styles';

const cards = [
  { id: 'card-one', icon: IconType.Target, titleKey: 'about_feature_card.card_one.title', descriptionKey: 'about_feature_card.card_one.description' },
  { id: 'card-two', icon: IconType.File, titleKey: 'about_feature_card.card_two.title', descriptionKey: 'about_feature_card.card_two.description' },
  { id: 'card-three', icon: IconType.ArrowGuide, titleKey: 'about_feature_card.card_three.title', descriptionKey: 'about_feature_card.card_three.description' },
  { id: 'card-four', icon: IconType.BracketsAngle, titleKey: 'about_feature_card.card_four.title', descriptionKey: 'about_feature_card.card_four.description' },
];

export const FeaturesCards = () => {
  const bigScreen = useMediaQuery('(min-width: 600px)');
  const { t } = useTranslation();

  return (
    <div style={bigScreen ? bigContainerStyle : smallContainerStyle}>
      {cards.map((c) => (
        <FeatureCard key={c.id} icon={c.icon} title={t(c.titleKey)} description={t(c.descriptionKey)} />
      ))}
    </div>
  );
};
