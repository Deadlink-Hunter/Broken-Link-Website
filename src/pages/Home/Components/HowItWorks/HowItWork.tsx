import { IconBolt, IconCircleCheck, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { HowItWorkCard } from './HowItWorkCard';
import { HowItWorkFeatureCard } from './HowItWorkFeatureCard';
import { HowItWorkTitles } from './HowItWorkTitles';
import { cardIconStyles, howItWorksStyles } from './styles';

export const HowItWork = () => {
  const { t } = useTranslation();

  return (
    <>
      <HowItWorkTitles />
      <div style={howItWorksStyles.cards}>
        <HowItWorkCard
          title={t('how_it_works_card1_title')}
          description={t('how_it_works_card1_description')}
          icon={<IconSearch size={40} />}
          stepNumber={1}
          iconStyle={cardIconStyles.scan}
        />
        <HowItWorkCard
          title={t('how_it_works_card2_title')}
          description={t('how_it_works_card2_description')}
          icon={<IconBolt size={40} />}
          stepNumber={2}
          iconStyle={cardIconStyles.analyze}
        />
        <HowItWorkCard
          title={t('how_it_works_card3_title')}
          description={t('how_it_works_card3_description')}
          icon={<IconCircleCheck size={40} />}
          stepNumber={3}
          iconStyle={cardIconStyles.fix}
        />
      </div>

      <HowItWorkFeatureCard />
    </>
  );
};
