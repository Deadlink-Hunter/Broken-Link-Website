import '@mantine/core/styles.css';

import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
      <DirectionProvider detectDirection>
        <MantineProvider theme={theme}>
          {/* The main content area gets flex: 1 */}
          <div style={{ flex: 1 }}>
            <Router />
          </div>
          {/* Footer stays at the end */}
          <Footer />
        </MantineProvider>
      </DirectionProvider>
    </div>
  );
}
