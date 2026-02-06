import { IconArrowRight } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Box, Container, SimpleGrid } from '@mantine/core';
import { Button } from '@/components/UI/Button/Button';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { useExploreToolkitCardsData } from './useExploreToolkitCardsData';
import { exploreToolkitStyles } from './styles';

export const ExploreToolkit = () => {
  const { t } = useTranslation();
  const { CARDS_DATA } = useExploreToolkitCardsData();

  return (
    <Container style={exploreToolkitStyles.container}>
      <Typography variant="h1" style={exploreToolkitStyles.title}>
        {t('explore_toolkit_title_part1')}
        <span style={exploreToolkitStyles.highlight}>
          {t('explore_toolkit_title_highlight')}
        </span>
        {t('explore_toolkit_title_part2')}
      </Typography>

      <Typography variant="body" style={exploreToolkitStyles.description}>
        {t('explore_toolkit_description')}
      </Typography>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
        {CARDS_DATA.map((card) => (
          <Card key={card.id} style={exploreToolkitStyles.cardRoot}>
            <Box>
              {card.icon && (
                <Box style={exploreToolkitStyles.cardIcon}>
                  <card.icon size={35} />
                </Box>
              )}

              <Typography variant="h3" style={exploreToolkitStyles.cardTitle}>
                {card.titleKey}
              </Typography>

              <Typography variant="body" style={exploreToolkitStyles.cardDescription}>
                {card.descriptionKey}
              </Typography>
            </Box>

            {card.buttonTextKey && (
              <Button variant="primary" style={exploreToolkitStyles.cardButton}>
                {card.buttonTextKey} <IconArrowRight size={18} />
              </Button>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};
