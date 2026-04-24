import { useTranslation } from 'react-i18next';
import type { MultipleResultData } from '../../types/scan';
import { sumResponseTimes } from '../../utils/scan';
import { scanPageStyle } from '../styles';
import { CardShell } from './CardShell';
import { LinkStatusList } from './LinkStatusList';
import { StatCards } from './StatCards';
import { SummaryBar } from './SummaryBar';

const TITLE_KEY = 'scanner_page.scan_results_card.title';

export const MultipleResults = ({
  data,
  isDark,
}: {
  data: MultipleResultData;
  isDark: boolean;
}) => {
  const { t } = useTranslation();
  const { results: resultsList, summary } = data;
  const { total, working, broken } = summary;
  const timeInSeconds = (sumResponseTimes(resultsList) / 1000).toFixed(1);
  const statusErrorText = t('scanner_page.scan_results_card.status_error');

  return (
    <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsColumn}>
      <StatCards working={working} broken={broken} isDark={isDark} />
      <span style={scanPageStyle.linkStatusHeader}>
        {t('scanner_page.scan_results_card.link_status_header')}
      </span>
      <LinkStatusList resultsList={resultsList} statusErrorText={statusErrorText} isDark={isDark} />
      <SummaryBar total={total} timeInSeconds={timeInSeconds} isDark={isDark} />
    </CardShell>
  );
};
