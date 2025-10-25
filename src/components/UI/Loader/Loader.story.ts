import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/UI/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extraLarge'],
      description: 'Loader size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    size: 'medium',
  },
};
