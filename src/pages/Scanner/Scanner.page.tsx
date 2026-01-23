import { useState } from 'react';
import { useViewportSize } from '@mantine/hooks';
import { ScanLinksCard } from './components/ScanLinksCard';
import { ScanResultsCard } from './components/ScanResultsCard';
import { ScanTitlePage } from './components/ScanTitle';
import { scanPageStyle } from './components/styles';
import { ScanMode } from './types/scan';

const ScannerPage = () => {
  const [scanType, setScanType] = useState<ScanMode>('single');
  const [url, setUrl] = useState('');
  const [multipleUrl, setMultipleUrl] = useState('');

  const { width } = useViewportSize();
  const isMobile = width <= 1024;

  const getCardsContainerStyle = () =>
    isMobile ? scanPageStyle.scanCardsContainerMobile : scanPageStyle.scanCardsContainer;

  return (
    <main style={scanPageStyle.container}>
      <header>
        <ScanTitlePage />
      </header>

      <section style={getCardsContainerStyle()} aria-label='Scanner tools'>
        <ScanLinksCard
          scanType={scanType}
          setScanType={setScanType}
          url={url}
          setUrl={setUrl}
          multipleUrl={multipleUrl}
          setMultipleUrl={setMultipleUrl}
        />
        <ScanResultsCard />
      </section>
    </main>
  );
};

export default ScannerPage;
