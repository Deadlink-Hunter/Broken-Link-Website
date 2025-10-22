import { render, screen } from '@test-utils';
import { i18n } from 'i18next';
import { vi } from 'vitest';
import { ExploreToolkit } from '@/pages/Home/Components/ExploreToolkit';

// Mock the useTranslation hook
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Mock t function to return the key itself
    i18n: {} as i18n,
  }),
}));

describe('ExploreToolkit component', () => {
  it('renders the title and description correctly', async () => {
    render(<ExploreToolkit />);
    expect(await screen.findByText(/explore_toolkit_title/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_description/i)).toBeInTheDocument();
  });

  it('renders three cards with their titles and descriptions', async () => {
    render(<ExploreToolkit />);
    expect(await screen.findByText(/explore_toolkit_card1_title/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_card1_description/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_card2_title/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_card2_description/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_card3_title/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_card3_description/i)).toBeInTheDocument();
  });
});
