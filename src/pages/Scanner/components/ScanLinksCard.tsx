import { IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Button } from '@/components/UI/Button/Button';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { MAX_URLS_PER_REQUEST } from '@/services/LinkChecker/constants';
import linkCheckerService from '@/services/LinkChecker/linkCheckerService';
import { ApiErrorTypes } from '@/services/LinkChecker/types';
import { AsyncCallbacks, ScanLinkCardProps, ScanMode, ScanResult } from '../types/scan';
import { RepositoryScanForm } from './RepositoryScanForm';
import { SingleScanForm } from './SingleScanForm';
import { scanPageStyle } from './styles';

const parseMultipleUrls = (input: string): string[] =>
  input
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

const hasError = (result: { error?: string | null }): result is { error: string } =>
  Boolean(result.error);

const runWithLoading = async (
  apiCall: () => Promise<ScanResult>,
  callbacks: AsyncCallbacks
): Promise<void> => {
  const { onLoading, onError, onResults } = callbacks;

  onLoading(true);
  try {
    const result = await apiCall();
    if (hasError(result)) {
      onError(result.error ?? null);
    } else {
      onResults(result);
    }
  } catch {
    onError(ApiErrorTypes.INTERNAL_SERVER_ERROR);
  } finally {
    onLoading(false);
  }
};

export const ScanLinksCard = ({
  scanType,
  setScanType,
  url,
  setUrl,
  multipleUrl,
  setMultipleUrl,
  callbacks,
}: ScanLinkCardProps) => {
  const { onError, onResults } = callbacks;
  const { t } = useTranslation();
  const isDark = useIsDark();

  const isSingleTabActive = scanType === ScanMode.SINGLE;

  const singleButtonStyle = isSingleTabActive ? scanPageStyle.activeTab : scanPageStyle.passiveTab;
  const repositoryButtonStyle = isSingleTabActive
    ? scanPageStyle.passiveTab
    : scanPageStyle.activeTab;

  const getSingleUrlCall = () => {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      onError(ApiErrorTypes.URL_REQUIRED);
      return null;
    }
    return () => linkCheckerService.checkLink(trimmedUrl);
  };

  const getMultipleUrlsCall = () => {
    const urls = parseMultipleUrls(multipleUrl);
    if (urls.length === 0) {
      onError(ApiErrorTypes.ONE_URL_REQUIRED);
      return null;
    }
    if (urls.length > MAX_URLS_PER_REQUEST) {
      onError(ApiErrorTypes.MAXIMUM_URLS_ALLOWED);
      return null;
    }
    return () => linkCheckerService.checkLinks(urls);
  };

  const submitScanRequest = async () => {
    onError(null);
    onResults(null);

    const call = isSingleTabActive ? getSingleUrlCall() : getMultipleUrlsCall();
    if (!call) {
      return;
    }

    await runWithLoading(call, callbacks);
  };

  return (
    <Card withBorder shadow='0' style={scanPageStyle.scanCardStyle}>
      <header style={scanPageStyle.cardHeader}>
        <IconSearch style={scanPageStyle.searchIcon} />
        <Typography style={scanPageStyle.cardTitle(isDark)}>
          {t('scanner_page.scan_links_card.title')}
        </Typography>
      </header>

      <div style={scanPageStyle.inputSection}>
        <div style={scanPageStyle.segmentedWrapper}>
          <Button onClick={() => setScanType(ScanMode.SINGLE)} style={singleButtonStyle}>
            {t('scanner_page.scan_links_card.toggle.single')}
          </Button>
          <Button onClick={() => setScanType(ScanMode.REPOSITORY)} style={repositoryButtonStyle}>
            {t('scanner_page.scan_links_card.toggle.repository')}
          </Button>
        </div>

        {isSingleTabActive ? (
          <SingleScanForm url={url} setUrl={setUrl} onSubmit={submitScanRequest} />
        ) : (
          <RepositoryScanForm
            url={url}
            setUrl={setUrl}
            multipleUrl={multipleUrl}
            setMultipleUrl={setMultipleUrl}
            onSubmit={submitScanRequest}
          />
        )}
      </div>
    </Card>
  );
};
