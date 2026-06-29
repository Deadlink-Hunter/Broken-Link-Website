import { useTranslation } from 'react-i18next';
import type { SingleResultData } from '@/pages/Scanner/types/scan';
import { msToSeconds } from '@/util/timeutils';
import { scanPageStyle } from '../styles';
import { CardShell } from './CardShell';
import { StatCards } from './StatCards';
import { SummaryBar } from './SummaryBar';
import { UrlResultRow } from './UrlResultRow';

const TITLE_KEY = 'scanner_page.scan_results_card.title';

export const SingleResult = ({ data, isDark }: { data: SingleResultData; isDark: boolean }) => {
  const { t } = useTranslation();
  const { url, isBroken, statusCode, responseTime } = data;
  const working = isBroken ? 0 : 1;
  const broken = isBroken ? 1 : 0;
  const timeInSeconds = responseTime ? msToSeconds(responseTime) : '0.0';
  const statusErrorText = t('scanner_page.scan_results_card.status_error');

  return (
    <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsColumn}>
      <StatCards working={working} broken={broken} isDark={isDark} />
      <span style={scanPageStyle.linkStatusHeader}>
        {t('scanner_page.scan_results_card.link_status_header')}
      </span>
      <UrlResultRow
        url={url}
        isBroken={isBroken}
        statusCode={statusCode}
        statusErrorText={statusErrorText}
        isDark={isDark}
      />
      <SummaryBar total={1} timeInSeconds={timeInSeconds} isDark={isDark} />
    </CardShell>
  );
};
