import '@mantine/core/styles.css';

import React from 'react';
import type { Preview } from '@storybook/react';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { theme } from '../src/theme';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
      storySort: (a, b) => {
        return a.title.localeCompare(b.title, undefined, { numeric: true });
      },
    },
  },
  globalTypes: {
    colorScheme: {
      description: 'Global color scheme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Color Scheme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

function ColorSchemeWrapper({ children, globals }: { children: React.ReactNode; globals: any }) {
  const { setColorScheme } = useMantineColorScheme();

  React.useEffect(() => {
    setColorScheme(globals.colorScheme);
  }, [globals.colorScheme, setColorScheme]);

  return <>{children}</>;
}

export const decorators = [
  (Story, context) => (
    <MantineProvider theme={theme}>
      <ColorSchemeWrapper globals={context.globals}>
        <Story />
      </ColorSchemeWrapper>
    </MantineProvider>
  ),
];

export default preview;
