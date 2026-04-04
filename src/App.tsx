import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/carousel/styles.css';
import './app.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DirectionProvider detectDirection>
        <MantineProvider theme={theme}>
          <Router />
        </MantineProvider>
      </DirectionProvider>
    </QueryClientProvider>
  );
}
