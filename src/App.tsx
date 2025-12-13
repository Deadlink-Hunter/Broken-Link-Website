import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

import { DirectionProvider, MantineProvider } from '@mantine/core';
import Footer from './components/Footer/Footer';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <DirectionProvider detectDirection>
      <MantineProvider theme={theme}>
        <Router />
        <Footer />
      </MantineProvider>
    </DirectionProvider>
  );
}
