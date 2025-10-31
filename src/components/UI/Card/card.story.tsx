import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Button } from '../Button/Button';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    children: <div>This is the card content!</div>,
  },
};

export const CardWithImage: Story = {
  args: {
    children: (
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <img src='https://picsum.photos/200/150' alt='Example' />
        <p>This is the card with the image!</p>
      </div>
    ),
  },
};

export const CardWithCustomStyle: Story = {
  args: {
    children: (
      <div>
        <h3>Custom Card</h3>
        <p>Card with a light background and rounded corners.</p>
      </div>
    ),
    style: {
      backgroundColor: '#e0f7fa',
      border: '2px solid #00acc1',
      color: '#006064',
      borderRadius: '1rem',
      width: '20rem',
    },
  },
};

export const CardWithNestedElements: Story = {
  render: () => (
    <Card
      style={{
        width: '22rem',
        padding: '1.5rem',
        backgroundColor: '#ffffff',
        color: '#333',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Card Title</h3>
      <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
        This is a card with nested elements like text, headers and buttons. It shows layout
        flexibility.
      </p>
      <Button variant='primary'>Learn More</Button>
    </Card>
  ),
};

const mockOnClick = fn();
export const InteractionTest: Story = {
  args: {
    children: <Button onClick={mockOnClick}>Clickable Child</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const childButton = canvas.getByRole('button', { name: /Clickable Child/i });

    await expect(childButton).toBeInTheDocument();

    await userEvent.click(childButton);

    await expect(mockOnClick).toHaveBeenCalledTimes(1);
  },
};
