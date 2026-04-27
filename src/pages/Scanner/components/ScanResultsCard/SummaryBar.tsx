import { useTranslation } from 'react-i18next';
import { DOT } from '@/constants/ui.consts';
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
      <div>{t('scanner_page.scan_results_card.scanned_label')}</div>
      <div style={scanPageStyle.summaryBold(isDark)}>
        {t('scanner_page.scan_results_card.link', { count: total })}
      </div>
      <div>{DOT}</div>
      {/* TODO: Update linter rule to allow text coming from props" */}
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <div style={scanPageStyle.summaryTime(isDark)}>{timeInSeconds}s</div>
    </div>
  );
};
