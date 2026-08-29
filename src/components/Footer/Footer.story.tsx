import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
import Footer from './Footer';

import '@/i18';

const queryClient = new QueryClient();

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme}>
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </MantineProvider>
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
