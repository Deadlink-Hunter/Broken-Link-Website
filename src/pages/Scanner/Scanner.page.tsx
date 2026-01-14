import { useState } from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import { ScanLinksCard } from './components/ScanLinksCard';
import { ScanResultsCard } from './components/ScanResultsCard';
import { ScanTitlePage } from './components/ScanTitle';

const ScannerPage = () => {
  const [scanType, setScanType] = useState('single');
  const [url, setUrl] = useState('');

  return (
    <Container size='xl' py='xl'>
      <ScanTitlePage />

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
        <ScanLinksCard scanType={scanType} setScanType={setScanType} url={url} setUrl={setUrl} />
        <ScanResultsCard />
      </SimpleGrid>
    </Container>
  );
};

export default ScannerPage;
