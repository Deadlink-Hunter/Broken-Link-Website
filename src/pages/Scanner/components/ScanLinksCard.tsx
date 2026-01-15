import { IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Button } from '@/components/UI/Button/Button';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { ScanLinkCardProps } from '../types/scan';
import { scanPageStyle } from './styles';

export const ScanLinksCard = ({ scanType, setScanType, url, setUrl }: ScanLinkCardProps) => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  return (
    <Card withBorder shadow='0' style={scanPageStyle.scanCardStyle}>
      <div style={scanPageStyle.cardHeader}>
        <IconSearch style={scanPageStyle.searchIcon} />
        <Typography style={scanPageStyle.cardTitle(isDark)}>
          {t('scanner_page.scan_links_card.title')}
        </Typography>
      </div>

      <div style={scanPageStyle.inputSection}>
        <div style={scanPageStyle.segmentedWrapper}>
          <Button
            onClick={() => setScanType('single')}
            style={scanType === 'single' ? scanPageStyle.activeTab : scanPageStyle.passiveTab}
          >
            {t('scanner_page.scan_links_card.toggle_single')}
          </Button>
          <Button
            onClick={() => setScanType('repository')}
            style={scanType === 'repository' ? scanPageStyle.activeTab : scanPageStyle.passiveTab}
          >
            {t('scanner_page.scan_links_card.toggle_repo')}
          </Button>
        </div>

        <div style={scanPageStyle.inputGroup}>
          <Typography style={scanPageStyle.linkDescription}>
            {t('scanner_page.scan_links_card.input_label')}
          </Typography>

          <input
            type='text'
            placeholder={t('scanner_page.scan_links_card.input_placeholder')}
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            style={scanPageStyle.customInput}
          />
        </div>

        <Button
          style={scanPageStyle.linkButton}
          leftSection={<img alt='Deadlink logo' src='logo.svg' style={scanPageStyle.buttonIcon} />}
        >
          {t('scanner_page.scan_links_card.button_check')}
        </Button>
      </div>
    </Card>
  );
};
