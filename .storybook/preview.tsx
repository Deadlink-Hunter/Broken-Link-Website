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
      storySort: (a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }),
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

function ColorSchemeWrapper({
  children,
  colorScheme,
}: {
  children: React.ReactNode;
  colorScheme: 'light' | 'dark';
}) {
  const { setColorScheme } = useMantineColorScheme();

  React.useEffect(() => {
    setColorScheme(colorScheme);
  }, [colorScheme, setColorScheme]);

  return <>{children}</>;
}

export const decorators = [
  (Story, context) => (
    <MantineProvider theme={theme}>
      <ColorSchemeWrapper colorScheme={context.globals.colorScheme}>
        <Story />
      </ColorSchemeWrapper>
    </MantineProvider>
  ),
];

export default preview;
