import { Trans } from 'react-i18next';
import { scanPageStyle } from '../styles';

interface SummaryBarProps {
  total: number;
  timeInSeconds: string;
  isDark: boolean;
}

export const SummaryBar = ({ total, timeInSeconds, isDark }: SummaryBarProps) => (
  <div style={scanPageStyle.summaryBar(isDark)}>
    <Trans
      i18nKey='scanner_page.scan_results_card.scanned_summary'
      values={{ total, time: timeInSeconds }}
      components={{
        bold: <strong style={scanPageStyle.summaryBold(isDark)} />,
        cyan: <span style={scanPageStyle.summaryTime(isDark)} />,
      }}
    />
  </div>
);
