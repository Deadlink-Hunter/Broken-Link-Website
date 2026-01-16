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
  const { width } = useViewportSize();
  const isMobile = width <= 1024;

  return (
    <div style={scanPageStyle.container}>
      <ScanTitlePage />

      <div
        style={isMobile ? scanPageStyle.scanCardsContainerMobile : scanPageStyle.scanCardsContainer}
      >
        <ScanLinksCard scanType={scanType} setScanType={setScanType} url={url} setUrl={setUrl} />
        <ScanResultsCard />
      </div>
    </div>
  );
};

export default ScannerPage;
