import { IconArrowRight } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/UI/Button/Button';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import classes from '@/pages/Home/Components/ExploreToolkit.module.css';
import { useExploreToolkitCardsData } from './useExploreToolkitCardsData';

// TODO - Make this more according to the design inside base44
export const ExploreToolkit = () => {
  const { t } = useTranslation();
  const { CARDS_DATA } = useExploreToolkitCardsData(); 

  return (
    <div className={classes.container}>
      <Typography variant='h1' className={classes.title}>
        {t('explore_toolkit_title_part1')}
        <span className={classes.highlight}>{t('explore_toolkit_title_highlight')}</span>
        {t('explore_toolkit_title_part2')}
      </Typography>
      <Typography variant='body' className={classes.description}>
        {t('explore_toolkit_description')}
      </Typography>
      <div className={classes.grid}>
        {CARDS_DATA.map((card) => (
          <Card key={card.id} className={classes.card}>
            <div>
              {card.icon && <card.icon size={36} className={classes.cardIcon} />}
              <div className={classes.cardHeader}>
                <Typography variant='h3'>{card.titleKey}</Typography>
              </div>
              <Typography variant='body' className={classes.cardDescription}>
                {card.descriptionKey}
              </Typography>
            </div>
            {card.buttonTextKey && (
              <Button variant='primary' className={classes.cardButton}>
                {card.buttonTextKey} <IconArrowRight size={18} />
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};