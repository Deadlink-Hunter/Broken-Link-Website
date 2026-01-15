import { useState } from 'react';
import { ScanLinksCard } from './components/ScanLinksCard';
import { ScanResultsCard } from './components/ScanResultsCard';
import { ScanTitlePage } from './components/ScanTitle';
import { scanPageStyle } from './components/styles';

const ScannerPage = () => {
  const [scanType, setScanType] = useState('single');
  const [url, setUrl] = useState('');

  return (
    <div style={scanPageStyle.container}>
      <ScanTitlePage />

      <div style={scanPageStyle.scanCardsContainer}>
        <ScanLinksCard scanType={scanType} setScanType={setScanType} url={url} setUrl={setUrl} />
        <ScanResultsCard />
      </div>
    </div>
  );
};

export default ScannerPage;
