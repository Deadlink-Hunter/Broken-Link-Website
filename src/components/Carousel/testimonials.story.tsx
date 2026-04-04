import type { Meta, StoryObj } from '@storybook/react';
import { ReviewsCarousel } from './ReviewsCarousel';

const SAMPLE_ITEMS = [
  { id: 1, text: 'Slide 1' },
  { id: 2, text: 'Slide 2' },
  { id: 3, text: 'Slide 3' },
  { id: 4, text: 'Slide 4' },
  { id: 5, text: 'Slide 5' },
];

const meta: Meta<typeof ReviewsCarousel> = {
  title: 'Components/Carousel/ReviewsCarousel',
  component: ReviewsCarousel,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '900px' }}>
      <ReviewsCarousel>
        {SAMPLE_ITEMS.map((item) => (
          <div
            key={item.id}
            style={{
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8f9fa',
              borderRadius: 8,
            }}
          >
            <p style={{ fontSize: 24, fontWeight: 700 }}>{item.text}</p>
          </div>
        ))}
      </ReviewsCarousel>
    </div>
  ),
};
