import { useState } from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import { ScanLinksCard } from './components/ScanLinksCard';
import { ScanResultsCard } from './components/ScanResultsCard';
import { ScanTitlePage } from './components/ScanTitle';
import { scanPageStyle } from './components/styles';

const ScannerPage = () => {
  const [scanType, setScanType] = useState('single');
  const [url, setUrl] = useState('');

  return (
    <Container style={scanPageStyle.container}>
      <ScanTitlePage />

      <SimpleGrid style={scanPageStyle.scanCardsContainer}>
        <ScanLinksCard scanType={scanType} setScanType={setScanType} url={url} setUrl={setUrl} />
        <ScanResultsCard />
      </SimpleGrid>
    </Container>
  );
};

export default ScannerPage;
