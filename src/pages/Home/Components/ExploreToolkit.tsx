import { IconArrowRight } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/UI/Button/Button';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { useExploreToolkitCardsData } from './useExploreToolkitCardsData';
import { exploreToolkitStyles } from './styles';

export const ExploreToolkit = () => {
  const { t } = useTranslation();
  const { CARDS_DATA } = useExploreToolkitCardsData();

  return (
    <div style={exploreToolkitStyles.container}>
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

      <div style={exploreToolkitStyles.grid}>
        {CARDS_DATA.map((card) => (
          <Card key={card.id} style={exploreToolkitStyles.cardRoot}>
            <div>
              {card.icon && (
                <div style={exploreToolkitStyles.cardIcon}>
                  <card.icon size={40} />
                </div>
              )}

              <Typography variant="h3" style={exploreToolkitStyles.cardTitle}>
                {card.titleKey}
              </Typography>

              <Typography variant="body" style={exploreToolkitStyles.cardDescription}>
                {card.descriptionKey}
              </Typography>
            </div>

            {card.buttonTextKey && (
              <Button variant="primary" style={exploreToolkitStyles.cardButton}>
                {card.buttonTextKey} <IconArrowRight size={18} />
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
