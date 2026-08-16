import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { EXTERNAL_LINKS } from '@/constants/links.consts';
import { theme } from '@/theme';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

import '@/i18';

const meta: Meta = {
  title: 'Components/Navbar',
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
  await expect(canvas.getByRole('link', { name: /home/i })).toBeInTheDocument();
  await expect(canvas.getByRole('link', { name: /scanner/i })).toBeInTheDocument();
  await expect(canvas.getByRole('link', { name: /statistics/i })).toBeInTheDocument();
  await expect(canvas.getByRole('link', { name: /about/i })).toBeInTheDocument();
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
    docs: { story: { autoplay: true } },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByAltText('Deadlink logo')).toBeInTheDocument();
    expect(canvas.queryByRole('link', { name: /home/i })).not.toBeInTheDocument();

    const buttons = canvas.getAllByRole('button');
    const burger = buttons[buttons.length - 1];
    await userEvent.click(burger);

    await expectNavLinksToBeVisible(canvas);
    await expect(canvas.getByRole('link', { name: /view on github/i })).toBeInTheDocument();
  },
};
