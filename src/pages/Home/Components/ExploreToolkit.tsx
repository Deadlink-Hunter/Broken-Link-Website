import { ToolkitCard } from './ToolkitCard';
import { SimpleGrid, Container } from '@mantine/core';
import { ROUTES } from '../../../constants/routes.consts';
import { IconScan, IconChartBar, IconInfoCircle } from '@tabler/icons-react';

const cardData = [
  {
    title: 'Instant Link Scanner',
    description: 'Quickly check a single URL or scan an entire repository for broken links with our powerful, easy-to-use scanner.',
    buttonText: 'Start Scanning',
    link: ROUTES.SCANNER,
    icon: IconScan,
  },
  {
    title: 'Performance Analytics',
    description: 'Dive into detailed statistics and visualizations about scan history, link health, and project performance over time.',
    buttonText: 'View Statistics',
    link: ROUTES.STATISTICS,
    icon: IconChartBar,
  },
  {
    title: 'About the Project',
    description: 'Learn more about the mission behind Deadlink-Hunter, its open-source nature, and how you can contribute.',
    buttonText: 'Learn More',
    link: ROUTES.ABOUT,
    icon: IconInfoCircle,
  },
];

export const ExploreToolkit = () => {
  return (
    <Container size="lg" py="xl">
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
