import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/theme';
import { ScanLinksCard } from './components/ScanLinksCard';
import { ScanResultsCard } from './components/ScanResultsCard';
import { ScanTitlePage } from './components/ScanTitle';
import { scanPageStyle } from './components/styles';
import { ScanMode, ScanResult } from './types/scan';

const ScannerPage = () => {
  const [scanType, setScanType] = useState<ScanMode>(ScanMode.SINGLE);
  const [url, setUrl] = useState('');
  const [multipleUrl, setMultipleUrl] = useState('');
  const [results, setResults] = useState<ScanResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const cardsContainerStyle = isMobile
    ? scanPageStyle.scanCardsContainerMobile
    : scanPageStyle.scanCardsContainer;

  return (
    <main style={scanPageStyle.container}>
      <header>
        <ScanTitlePage />
      </header>

      <section style={cardsContainerStyle} aria-label='Scanner tools'>
        <ScanLinksCard
          scanType={scanType}
          setScanType={setScanType}
          url={url}
          setUrl={setUrl}
          multipleUrl={multipleUrl}
          setMultipleUrl={setMultipleUrl}
          callbacks={{ onLoading: setLoading, onError: setError, onResults: setResults }}
        />
        <ScanResultsCard results={results} loading={loading} error={error} />
      </section>
    </main>
  );
};

export default ScannerPage;
