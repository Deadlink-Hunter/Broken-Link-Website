import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
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

export const Desktop: StoryObj<typeof DesktopNav> = {
  render: () => <DesktopNav />,
};

export const Mobile: StoryObj<typeof MobileNav> = {
  render: () => <MobileNav />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
