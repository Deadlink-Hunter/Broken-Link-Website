import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { MemoryRouter } from 'react-router-dom';
import { Hero } from './Hero';

import '@/i18';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const deadlinkTitle = canvas.getByText(/deadlink/i);
    await expect(deadlinkTitle).toBeInTheDocument();

    const hunterTitle = canvas.getByText(/hunter/i);
    await expect(hunterTitle).toBeInTheDocument();

    const startButton = canvas.getByRole('button', { name: /start scanning/i });
    await expect(startButton).toBeInTheDocument();

    const githubLink = canvas.getByRole('link', { name: /view on github/i });
    await expect(githubLink).toBeInTheDocument();
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const deadlinkTitle = canvas.getByText(/deadlink/i);
    await expect(deadlinkTitle).toBeInTheDocument();

    const hunterTitle = canvas.getByText(/hunter/i);
    await expect(hunterTitle).toBeInTheDocument();
  },
};
