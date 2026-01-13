import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import './app.css';

import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function App() {
  return (
    <DirectionProvider detectDirection>
      <MantineProvider theme={theme}>
      <ScrollToTop />
        <Router />
      </MantineProvider>
    </DirectionProvider>
  );
}
