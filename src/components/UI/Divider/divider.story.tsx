// src/components/UI/Divider.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/UI/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default horizontal divider
export const DividerDefault: Story = {
  args: {
    variant: 'primary',
    orientation: 'horizontal',
  },
};

// Divider with custom style
export const WithStyles: Story = {
  args: {
    variant: 'secondary',
    orientation: 'horizontal',
    style: {
      backgroundColor: 'cyan',
      height: '4px',
      margin: '1rem 0',
    },
  },
};
