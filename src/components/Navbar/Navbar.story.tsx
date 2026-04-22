import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
import Navbar from './Navbar';

import '@/i18';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MantineProvider theme={theme}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </MantineProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};

export const Mobile: Story = {
  args: {
    variant: 'mobile',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};