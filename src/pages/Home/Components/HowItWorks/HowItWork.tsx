import { IconBolt, IconCircleCheck, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { theme } from '@/theme';
import { HowItWorkCard } from './HowItWorkCard';
import { HowItWorkTitles } from './HowItWorkTitles';
import { howItWorksStyles } from './styles';

const colors = theme.colors;

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
          iconFrom={colors.cyan[3]}
          iconTo={colors.cyan[6]}
        />
        <HowItWorkCard
          title={t('how_it_works_card2_title')}
          description={t('how_it_works_card2_description')}
          icon={<IconBolt size={40} />}
          stepNumber={2}
          iconFrom={colors.error[4]}
          iconTo={colors.purple[5]}
        />
        <HowItWorkCard
          title={t('how_it_works_card3_title')}
          description={t('how_it_works_card3_description')}
          icon={<IconCircleCheck size={40} />}
          stepNumber={3}
          iconFrom={colors.success[3]}
          iconTo={colors.success[6]}
        />
      </div>
    </>
  );
};
