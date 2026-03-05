import type { Meta, StoryObj } from '@storybook/react';
import { ReviewsCarousel } from './ReviewsCarousel';
import { Card } from '@/components/UI/Card/Card';
import { Avatar, Rating, Stack, Title, Text } from '@mantine/core';

const SAMPLE_ITEMS = [
  { name: 'Mariana Costa', role: 'Product Designer', comment: 'Atendimento impecável!', rating: 5 },
  { name: 'Lucas Oliveira', role: 'Developer', comment: 'Muito bom o serviço.', rating: 4 },
  { name: 'Ana Souza', role: 'UX Researcher', comment: 'Incrível!', rating: 5 },
];

const SampleCard = ({ name, role, comment, rating }: { name: string; role: string; comment: string; rating: number }) => (
  <Card style={{ padding: '2rem' }}>
    <Stack align='center' gap='md'>
      <Avatar size={80} radius='xl' color='cyan'>{name.charAt(0)}</Avatar>
      <Title order={4}>{name}</Title>
      <Text size='sm' c='dimmed'>{role}</Text>
      <Rating value={rating} readOnly color='yellow' />
      <Text size='md'>{comment}</Text>
    </Stack>
  </Card>
);

const meta: Meta<typeof ReviewsCarousel> = {
  title: 'Components/Carousel/ReviewsCarousel',
  component: ReviewsCarousel,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const withContent: Story = {
  render: () => (
    <div style={{ width: '900px' }}>
      <ReviewsCarousel>
        {SAMPLE_ITEMS.map((item, index) => (
          <SampleCard key={index} {...item} />
        ))}
      </ReviewsCarousel>
    </div>
  ),
};
