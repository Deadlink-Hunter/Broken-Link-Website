import { IconBolt, IconCheck, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { HowItWorkCard } from './HowItWorkCard';
import { HowItWorkTitles } from './HowItWorkTitles';
import { cardIconStyles, getHowItWorksStyles } from './styles';

export const HowItWork = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();
  const howItWorksStyles = getHowItWorksStyles(isDark);

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
          icon={<IconCheck size={40} />}
          stepNumber={3}
          iconStyle={cardIconStyles.fix}
        />
      </div>
    </>
  );
};
