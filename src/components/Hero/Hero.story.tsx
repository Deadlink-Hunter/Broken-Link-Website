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
    
    const linksScanned = canvas.getByText(/10,000\+/i);
    await expect(linksScanned).toBeInTheDocument();
    
    const reposAnalyzed = canvas.getByText(/500\+/i);
    await expect(reposAnalyzed).toBeInTheDocument();
    
    const accuracyRate = canvas.getByText(/99\.9%/i);
    await expect(accuracyRate).toBeInTheDocument();
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

