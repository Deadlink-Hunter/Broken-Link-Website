import { useTranslation } from 'react-i18next';
import { scanPageStyle } from '../styles';

interface StatCardProps {
  count: number;
  isError?: boolean;
  isDark: boolean;
  label: string;
}

const StatCard = ({ count, isError, isDark, label }: StatCardProps) => (
  <div style={scanPageStyle.statCard(isDark)}>
    <span style={scanPageStyle.statNumber(isError ?? false, isDark)}>{count}</span>
    <span style={scanPageStyle.statLabel(isDark)}>{label}</span>
  </div>
);

interface StatCardsProps {
  working: number;
  broken: number;
  isDark: boolean;
}

export const StatCards = ({ working, broken, isDark }: StatCardsProps) => {
  const { t } = useTranslation();

  return (
    <div style={scanPageStyle.statCardsRow}>
      <StatCard
        count={working}
        isDark={isDark}
        label={t('scanner_page.scan_results_card.working_links')}
      />
      <StatCard
        count={broken}
        isError
        isDark={isDark}
        label={t('scanner_page.scan_results_card.broken_links')}
      />
    </div>
  );
};
