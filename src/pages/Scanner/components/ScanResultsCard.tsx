import { IconAlertCircle, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { scanPageStyle } from './styles';

export const ScanResultsCard = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  return (
    <Card withBorder style={scanPageStyle.scanCardStyle}>
      <div style={scanPageStyle.cardHeader}>
        <IconAlertCircle style={scanPageStyle.alertIcon} />
        <Typography style={scanPageStyle.cardTitle(isDark)}>
          {t('scanner_page.scan_results_card.title')}
        </Typography>
      </div>

      <div style={scanPageStyle.resultsStack}>
        <IconSearch style={scanPageStyle.emptyStateIcon} />
        <Typography style={scanPageStyle.resultDescription}>
          {t('scanner_page.scan_results_card.empty_state')}
        </Typography>
      </div>
    </Card>
  );
};
