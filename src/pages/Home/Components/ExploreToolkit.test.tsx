import { render, screen } from '@test-utils';
import { i18n } from 'i18next';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { ExploreToolkit } from '@/pages/Home/Components/ExploreToolkit';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {} as i18n,
  }),
}));

describe('ExploreToolkit component', () => {
  const renderExploreToolkit = () =>
    render(
      <MemoryRouter>
        <ExploreToolkit />
      </MemoryRouter>
    );

  it('renders the title and description correctly', async () => {
    renderExploreToolkit();
    expect(await screen.findByText(/explore_toolkit_title_part1/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_title_highlight/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_title_part2/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_description/i)).toBeInTheDocument();
  });

  it('renders three cards with their titles and descriptions', async () => {
    renderExploreToolkit();
    expect(await screen.findByText(/explore_toolkit_card1_title/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_card1_description/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_card2_title/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_card2_description/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_card3_title/i)).toBeInTheDocument();
    expect(await screen.findByText(/explore_toolkit_card3_description/i)).toBeInTheDocument();
  });
});
