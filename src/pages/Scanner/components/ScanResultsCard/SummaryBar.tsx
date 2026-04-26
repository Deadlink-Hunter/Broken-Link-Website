import { useTranslation } from 'react-i18next';
import { scanPageStyle } from '../styles';

interface SummaryBarProps {
  total: number;
  timeInSeconds: string;
  isDark: boolean;
}

export const SummaryBar = ({ total, timeInSeconds, isDark }: SummaryBarProps) => {
  const { t } = useTranslation();
  return (
    <div style={scanPageStyle.summaryBar(isDark)}>
      {t('scanner_page.scan_results_card.scanned_label')}{' '}
      <strong style={scanPageStyle.summaryBold(isDark)}>
        {t('scanner_page.scan_results_card.link', { count: total })}
      </strong>
      {' · '}
      <span style={scanPageStyle.summaryTime(isDark)}>{timeInSeconds}s</span>
    </div>
  );
};
