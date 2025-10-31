import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { FeatureCard } from './FeatureCard';
import { IconType } from './IconTypes';
import { bigContainerStyle, smallContainerStyle } from './styles';

export const FeaturesCards = () => {
  const bigScreen = useMediaQuery('(min-width: 600px)');
  const { t } = useTranslation();

  return (
    <div style={bigScreen ? bigContainerStyle : smallContainerStyle}>
      <FeatureCard
        icon={IconType.Target}
        title={t('about_feature_card.card_one.title')}
        description={t('about_feature_card.card_one.description')}
      />
      <FeatureCard
        icon={IconType.File}
        title={t('about_feature_card.card_two.title')}
        description={t('about_feature_card.card_two.description')}
      />
      <FeatureCard
        icon={IconType.ArrowGuide}
        title={t('about_feature_card.card_three.title')}
        description={t('about_feature_card.card_three.description')}
      />
      <FeatureCard
        icon={IconType.BracketsAngle}
        title={t('about_feature_card.card_four.title')}
        description={t('about_feature_card.card_four.description')}
      />
    </div>
  );
};
