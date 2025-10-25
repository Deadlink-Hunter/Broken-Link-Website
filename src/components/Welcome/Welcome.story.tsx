import type { Meta, StoryObj } from '@storybook/react';
import { Welcome } from './Welcome';

const meta: Meta<typeof Welcome> = {
  title: 'Welcome',
  component: Welcome,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {},
};
