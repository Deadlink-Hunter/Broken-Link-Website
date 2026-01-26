import { IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { useIsDark } from '@/components/Hooks/useIsDark';
import { Button } from '@/components/UI/Button/Button';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';

import { ScanLinkCardProps, ScanMode } from '../types/scan';
import { scanPageStyle } from './styles';
import { RepositoryScanForm } from './RepositoryScanForm'
import { SingleScanForm } from './SingleScanForm';

export const ScanLinksCard = ({ scanType, setScanType, url, setUrl, multipleUrl, setMultipleUrl }: ScanLinkCardProps) => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  const isSingleTabActive = scanType === ScanMode.SINGLE;
  
  const singleButtonStyle = isSingleTabActive ? scanPageStyle.activeTab : scanPageStyle.passiveTab;
  const repositoryButtonStyle = isSingleTabActive ? scanPageStyle.passiveTab : scanPageStyle.activeTab;

  const submitScanRequest = () => {
    // TODO: Connect to scanning backend
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
          <Button
            onClick={() => setScanType(ScanMode.SINGLE)}
            style={singleButtonStyle}
          >
            {t('scanner_page.scan_links_card.toggle.single')}
          </Button>
          <Button
            onClick={() => setScanType(ScanMode.REPOSITORY)}
            style={repositoryButtonStyle}
          >
            {t('scanner_page.scan_links_card.toggle.repository')}
          </Button>
        </div>

        {isSingleTabActive ? (
          <SingleScanForm
            url={url}
            setUrl={setUrl}
            onSubmit={submitScanRequest}
          />
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
