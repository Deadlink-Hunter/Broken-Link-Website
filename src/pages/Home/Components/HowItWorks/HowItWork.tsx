import { IconBolt, IconCircleCheck, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { HowItWorkCard } from './HowItWorkCard';
import { HowItWorkFeatureCard } from './HowItWorkFeatureCard';
import { HowItWorkTitles } from './HowItWorkTitles';
import { cardIconStyles } from './styles';
import classes from './HowItWork.module.css';

export const HowItWork = () => {
  const { t } = useTranslation();

  return (
    <>
      <HowItWorkTitles />
      <div className={classes.cards}>
        <HowItWorkCard
          title={t('how_it_works_card1_title')}
          description={t('how_it_works_card1_description')}
          icon={<IconSearch size={40} />}
          stepNumber={1}
          iconStyle={cardIconStyles.scan}
          className={classes.card}
        />
        <HowItWorkCard
          title={t('how_it_works_card2_title')}
          description={t('how_it_works_card2_description')}
          icon={<IconBolt size={40} />}
          stepNumber={2}
          iconStyle={cardIconStyles.analyze}
          className={classes.card}
        />
        <HowItWorkCard
          title={t('how_it_works_card3_title')}
          description={t('how_it_works_card3_description')}
          icon={<IconCircleCheck size={40} />}
          stepNumber={3}
          iconStyle={cardIconStyles.fix}
          className={classes.card}
        />
      </div>

      <HowItWorkFeatureCard />
    </>
  );
};
