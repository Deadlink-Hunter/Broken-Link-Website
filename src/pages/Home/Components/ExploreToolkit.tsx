import React from 'react';
import { IconArrowRight, IconChartLine, IconInfoCircle, IconScan } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { SimpleGrid, Text, Title } from '@mantine/core';
import { Button } from '@/components/UI/Button/Button';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import classes from './ExploreToolkit.module.css';

export const ExploreToolkit = () => {
  const { t } = useTranslation();

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
      <Title className={classes.title} ta='center' mt={100}>
        {t('explore_toolkit_title_part1')}
        <Text inherit variant='gradient' component='span' gradient={{ from: 'pink', to: 'yellow' }}>
          {t('explore_toolkit_title_highlight')}
        </Text>
        {t('explore_toolkit_title_part2')}
      </Title>
      <Text
        c='dimmed'
        ta='center'
        size='lg'
        maw={580}
        mx='auto'
        mt='xl'
        className={classes.description}
      >
        {t('explore_toolkit_description')}
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing='xl'>
        {cardsData.map((card) => (
          <Card key={card.id} className={classes.card}>
            {card.icon && <card.icon size={36} className={classes.cardIcon} />}
            <div className={classes.cardHeader}>
              <Typography variant='h3'>{t(card.titleKey)}</Typography>
            </div>
            <Typography variant='body' className={classes.cardDescription}>
              {t(card.descriptionKey)}
            </Typography>
            {card.buttonTextKey && (
              <Button variant='primary' className={classes.cardButton}>
                {t(card.buttonTextKey)} <IconArrowRight size={18} />
              </Button>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};
