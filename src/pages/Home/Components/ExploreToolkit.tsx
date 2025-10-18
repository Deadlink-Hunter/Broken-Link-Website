import { ToolkitCard } from './ToolkitCard';
import { SimpleGrid, Container, Title, Text } from '@mantine/core';
import { ROUTES } from '../../../constants/routes.consts';
import { IconScan, IconChartBar, IconInfoCircle } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import classes from './ExploreToolkit.module.css';

export const ExploreToolkit = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      title: t('explore_toolkit.cards.scanner.title'),
      description: t('explore_toolkit.cards.scanner.description'),
      buttonText: t('explore_toolkit.cards.scanner.button'),
      link: ROUTES.SCANNER,
      icon: IconScan,
    },
    {
      title: t('explore_toolkit.cards.analytics.title'),
      description: t('explore_toolkit.cards.analytics.description'),
      buttonText: t('explore_toolkit.cards.analytics.button'),
      link: ROUTES.STATISTICS,
      icon: IconChartBar,
    },
    {
      title: t('explore_toolkit.cards.about.title'),
      description: t('explore_toolkit.cards.about.description'),
      buttonText: t('explore_toolkit.cards.about.button'),
      link: ROUTES.ABOUT,
      icon: IconInfoCircle,
    },
  ];

  return (
    <Container size="lg" py={80}>
      <Title className={classes.title} ta="center" mb="sm">
        {t('explore_toolkit_title')}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'blue', to: 'purple' }}
        >
          {t('explore_toolkit_highlight')}
        </Text>
      </Title>
      <Text ta="center" mb="xl" c="dimmed">
        {t('explore_toolkit_description')}
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
        {cardData.map((card, index) => (
          <ToolkitCard
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            link={card.link}
            icon={card.icon}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
