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

const homeLink = NAVIGATION_LINKS[0];

const getMobileBurger = (canvas: ReturnType<typeof within>) => {
  const buttons = canvas.getAllByRole('button');
  return buttons[buttons.length - 1];
};

const verifyNavigationLinksAreRendered = async (canvas: ReturnType<typeof within>) => {
  const renderedLinks = NAVIGATION_LINKS.map((link) =>
    canvas.getByRole('link', { name: i18n.t(link.label) })
  );

  await expect(renderedLinks).toHaveLength(NAVIGATION_LINKS.length);
};

export const Desktop: StoryObj<typeof DesktopNav> = {
  render: () => <DesktopNav />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByAltText('Deadlink logo')).toBeInTheDocument();
  },
};

export const DesktopNavigationLinks: StoryObj<typeof DesktopNav> = {
  render: () => <DesktopNav />,
  play: async ({ canvasElement }) => {
    await verifyNavigationLinksAreRendered(within(canvasElement));
  },
};

export const DesktopGithubLink: StoryObj<typeof DesktopNav> = {
  render: () => <DesktopNav />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
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
    await expect(canvas.getByAltText('Deadlink logo')).toBeInTheDocument();
  },
};

export const MobileLinksHiddenByDefault: StoryObj<typeof MobileNav> = {
  render: () => <MobileNav />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.queryByRole('link', { name: i18n.t(homeLink.label) })
    ).not.toBeInTheDocument();
  },
};

export const MobileMenuOpenLinks: StoryObj<typeof MobileNav> = {
  render: () => <MobileNav />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: { story: { autoplay: true } },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(getMobileBurger(canvas));
    await verifyNavigationLinksAreRendered(canvas);
  },
};

export const MobileMenuOpenGithubLink: StoryObj<typeof MobileNav> = {
  render: () => <MobileNav />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: { story: { autoplay: true } },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(getMobileBurger(canvas));

    await expect(
      canvas.getByRole('link', { name: i18n.t('navbar.githubMobile') })
    ).toBeInTheDocument();
  },
};

export const MobileMenuCloses: StoryObj<typeof MobileNav> = {
  render: () => <MobileNav />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const burger = getMobileBurger(canvas);

    await userEvent.click(burger);
    await userEvent.click(burger);

    await expect(
      canvas.queryByRole('link', { name: i18n.t(homeLink.label) })
    ).not.toBeInTheDocument();
  },
};
