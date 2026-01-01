import { IconArrowRight, IconChartLine, IconInfoCircle, IconScan } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Title } from '@mantine/core';
import { Button } from '@/components/UI/Button/Button';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import classes from '@/pages/Home/Components/ExploreToolkit.module.css';

// TODO - Make this more according to the design inside base44
export const ExploreToolkit = () => {
  const { t } = useTranslation();

  // TODO: Extract the card data to another file and no hardcoded strings, bring it from the translation file
  const cardsData = [
    {
      id: 'card1',
      titleKey: 'explore_toolkit_card1_title',
      descriptionKey: 'explore_toolkit_card1_description',
      buttonTextKey: 'explore_toolkit_card1_button',
      icon: IconScan,
    },
    {
      id: 'card2',
      titleKey: 'explore_toolkit_card2_title',
      descriptionKey: 'explore_toolkit_card2_description',
      buttonTextKey: 'explore_toolkit_card2_button',
      icon: IconChartLine,
    },
    {
      id: 'card3',
      titleKey: 'explore_toolkit_card3_title',
      descriptionKey: 'explore_toolkit_card3_description',
      buttonTextKey: 'explore_toolkit_card3_button',
      icon: IconInfoCircle,
    },
  ];

  return (
    <div className={classes.container}>
      <Title order={1} className={classes.title}>
        {t('explore_toolkit_title_part1')}
        <span className={classes.highlight}> {t('explore_toolkit_title_highlight')}</span>{' '}
        {t('explore_toolkit_title_part2')}
      </Title>
      <Typography variant='body' className={classes.description}>
        {t('explore_toolkit_description')}
      </Typography>
      <div className={classes.grid}>
        {cardsData.map((card) => (
          <Card key={card.id} className={classes.card}>
            <div>
              {card.icon && <card.icon size={36} className={classes.cardIcon} />}
              <div className={classes.cardHeader}>
                <Title order={3} className={classes.cardTitle}>
                  {t(card.titleKey)}
                </Title>
              </div>
              <Typography variant='body' className={classes.cardDescription}>
                {t(card.descriptionKey)}
              </Typography>
            </div>
            {card.buttonTextKey && (
              <Button variant='primary' className={classes.cardButton}>
                {t(card.buttonTextKey)} <IconArrowRight size={18} />
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
