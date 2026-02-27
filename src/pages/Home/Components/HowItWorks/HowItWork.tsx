import { IconBolt, IconCircleCheck, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { HowItWorkCard } from './HowItWorkCard';
import { HowItWorkTitles } from './HowItWorkTitles';
import { howItWorksStyles } from './styles';

export const HowItWork = () => {
  const { t } = useTranslation();

  return (
    <>
      <HowItWorkTitles />
      <div style={howItWorksStyles.cards}>
        <HowItWorkCard
          title={t('how_it_works_card1_title')}
          description={t('how_it_works_card1_description')}
          icon={<IconSearch size={48} />}
        />
        <HowItWorkCard
          title={t('how_it_works_card2_title')}
          description={t('how_it_works_card2_description')}
          icon={<IconBolt size={48} />}
        />
        <HowItWorkCard
          title={t('how_it_works_card3_title')}
          description={t('how_it_works_card3_description')}
          icon={<IconCircleCheck size={48} />}
        />
      </div>
    </>
  );
};
