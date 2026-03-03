import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { FeedbackCard } from './FeedbackCard';
import { ReviewsCarousel } from './ReviewsCarousel';
import type { TestimonialData } from './types';

const STORY_TESTIMONIALS: TestimonialData[] = [
  {
    name: 'Mariana Costa',
    role: 'Product Designer',
    rating: 5,
    comment: 'Atendimento impecável e produto melhor do que eu esperava. Recomendo 100%!',
    date: '2026-01-20',
  },
  {
    name: 'Lucas Oliveira',
    role: 'Frontend Developer',
    rating: 4,
    comment: 'Muito bom, entrega no prazo. Só poderia melhorar o tempo de resposta no chat.',
    date: '2026-02-05',
  },
  {
    name: 'Ana Souza',
    role: 'UX Researcher',
    rating: 5,
    comment: 'A ferramenta mudou completamente o nosso fluxo de trabalho. Incrível!',
    date: '2026-02-18',
  },
];

const cardMeta: Meta<typeof FeedbackCard> = {
  title: 'Components/Carousel/FeedbackCard',
  component: FeedbackCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default cardMeta;
type CardStory = StoryObj<typeof cardMeta>;

export const defaultCard: CardStory = {
  args: {
    name: 'Mariana Costa',
    role: 'Product Designer',
    rating: 5,
    comment: 'Atendimento impecável e produto melhor do que eu esperava. Recomendo 100%!',
    date: '2026-01-20',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Mariana Costa')).toBeInTheDocument();
    await expect(canvas.getByText('Product Designer')).toBeInTheDocument();
  },
};

export const withoutRole: CardStory = {
  args: {
    name: 'Lucas Oliveira',
    rating: 4,
    comment: 'Muito bom, entrega no prazo.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Lucas Oliveira')).toBeInTheDocument();
  },
};

export const withAvatar: CardStory = {
  args: {
    name: 'Ana Souza',
    role: 'UX Researcher',
    rating: 5,
    comment: 'A ferramenta mudou completamente o nosso fluxo de trabalho. Incrível!',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
  },
};

export const testimonialsCarousel: CardStory = {
  render: () => (
    <div style={{ width: '900px' }}>
      <ReviewsCarousel height={420}>
        {STORY_TESTIMONIALS.map((testimonial, index) => (
          <FeedbackCard key={index} {...testimonial} />
        ))}
      </ReviewsCarousel>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Mariana Costa')).toBeInTheDocument();
  },
};

export const emptyCarousel: CardStory = {
  render: () => (
    <div style={{ width: '900px' }}>
      <ReviewsCarousel height={420}>{[]}</ReviewsCarousel>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Nenhuma avaliação disponível.')).toBeInTheDocument();
  },
};
