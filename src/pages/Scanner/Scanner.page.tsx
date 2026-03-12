import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/theme';
import { ScanLinksCard } from './components/ScanLinksCard';
import { ScanResultsCard } from './components/ScanResultsCard';
import { ScanTitlePage } from './components/ScanTitle';
import { scanPageStyle } from './components/styles';
import { ScanMode, type ScanMutationVariables } from './types/scan';
import { useScanMutation } from './useScanMutation';

const ScannerPage = () => {
  const [scanType, setScanType] = useState<ScanMode>(ScanMode.SINGLE);
  const [url, setUrl] = useState('');
  const [multipleUrl, setMultipleUrl] = useState('');

  const { data, isLoading, error, mutate, reset } = useScanMutation();

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const cardsContainerStyle = isMobile
    ? scanPageStyle.scanCardsContainerMobile
    : scanPageStyle.scanCardsContainer;

  const handleScan = (variables: ScanMutationVariables) => {
    reset();
    mutate(variables);
  };

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
          onScan={handleScan}
        />
        <ScanResultsCard results={data} loading={isLoading} error={error} />
      </section>
    </main>
  );
};

export default ScannerPage;
