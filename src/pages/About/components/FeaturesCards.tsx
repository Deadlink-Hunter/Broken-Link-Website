import { FeatureCard } from './FeatureCard';
import { IconType } from './Icon';
import { useTranslation } from 'react-i18next';

export const FeaturesCards = () => {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
};
