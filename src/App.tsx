import '@mantine/core/styles.css';

import { DirectionProvider, MantineProvider } from '@mantine/core';
import { useRTLEffect } from './hooks/useRTLEffect';
import { Router } from './Router';
import { theme } from './theme';

function AppContent() {
  useRTLEffect();
  return <Router />;
}

export default function App() {
  return (
    <DirectionProvider detectDirection>
      <MantineProvider theme={theme}>
        <AppContent />
      </MantineProvider>
    </DirectionProvider>
  );
}
