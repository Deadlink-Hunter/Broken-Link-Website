import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, userEvent, within } from 'storybook/test';
import { MantineProvider } from '@mantine/core';
import { EXTERNAL_LINKS, NAVIGATION_LINKS } from '@/constants/links.consts';
import i18n from '@/i18';
import { theme } from '@/theme';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const meta: Meta<typeof DesktopNav> = {
  title: 'Components/Navbar',
  component: DesktopNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
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

const expectNavLinksToBeVisible = async (canvas: ReturnType<typeof within>) => {
  for (const link of NAVIGATION_LINKS) {
    await expect(canvas.getByRole('link', { name: i18n.t(link.label) })).toBeInTheDocument();
  }
};

export const Desktop: StoryObj<typeof DesktopNav> = {
  render: () => <DesktopNav />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByAltText('Deadlink logo')).toBeInTheDocument();
    await expectNavLinksToBeVisible(canvas);

    const githubLink = canvas
      .getAllByRole('link')
      .find((link) => link.getAttribute('href') === EXTERNAL_LINKS.GITHUB.REPO);
    await expect(githubLink).toBeInTheDocument();
  },
};

export const Mobile: StoryObj<typeof MobileNav> = {
  render: () => <MobileNav />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const homeLink = NAVIGATION_LINKS[0];

    await expect(canvas.getByAltText('Deadlink logo')).toBeInTheDocument();
    await expect(
      canvas.queryByRole('link', { name: i18n.t(homeLink.label) })
    ).not.toBeInTheDocument();

    const buttons = canvas.getAllByRole('button');
    const burger = buttons[buttons.length - 1];

    await userEvent.click(burger);
    await expectNavLinksToBeVisible(canvas);
    await expect(
      canvas.getByRole('link', { name: i18n.t('navbar.githubMobile') })
    ).toBeInTheDocument();

    await userEvent.click(burger);
    await expect(
      canvas.queryByRole('link', { name: i18n.t(homeLink.label) })
    ).not.toBeInTheDocument();

    await userEvent.click(burger);
    await expectNavLinksToBeVisible(canvas);
  },
};
