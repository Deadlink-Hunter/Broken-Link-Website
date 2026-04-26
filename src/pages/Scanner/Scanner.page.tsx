import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { Typography } from '@/components/UI/Typography/Typography';
import { ApiErrorTypes } from '@/services/LinkChecker/types';
import { theme } from '@/theme';
import { ScanLinksCard } from './components/ScanLinksCard';
import { ScanResultsCard } from './components/ScanResultsCard/ScanResultsCard';
import { ScanTitlePage } from './components/ScanTitle';
import { scanPageStyle } from './components/styles';
import { ScanMode, type ScanMutationVariables, type ScanResult } from './types/scan';
import { runScan } from './utils/scanMutation';

const ScannerPage = () => {
  const { t } = useTranslation();
  const [scanType, setScanType] = useState<ScanMode>(ScanMode.SINGLE);
  const [url, setUrl] = useState('');
  const [multipleUrl, setMultipleUrl] = useState('');

  const { data, isPending, error, mutate, reset } = useMutation<
    ScanResult,
    ApiErrorTypes,
    ScanMutationVariables
  >({
    mutationFn: runScan,
  });

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
        <ScanResultsCard results={data ?? null} loading={isPending} error={error ?? null} />
        {/* TODO - Remove this when we have a deployed server */}
        <Typography variant='title'>{t('scanner_page.server_notice')}</Typography>
      </section>
    </main>
  );
};

export default ScannerPage;
