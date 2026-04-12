import { IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@/components/UI/Typography/Typography';
import { scanPageStyle } from '../styles';
import { CardShell } from './CardShell';

const TITLE_KEY = 'scanner_page.scan_results_card.title';

export const EmptyState = ({ isDark }: { isDark: boolean }) => {
  const { t } = useTranslation();

  return (
    <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsStack}>
      <IconSearch style={scanPageStyle.emptyStateIcon(isDark)} />
      <Typography style={scanPageStyle.resultDescription}>
        {t('scanner_page.scan_results_card.empty_state')}
      </Typography>
    </CardShell>
  );
};
