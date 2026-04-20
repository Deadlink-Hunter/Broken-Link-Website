// Single URL scan result — uses the same stat card + link row + summary bar layout as MultipleResults
import { Trans, useTranslation } from 'react-i18next';
import type { SingleResultData } from '../../types/scan';
import { scanPageStyle } from '../styles';
import { CardShell } from './CardShell';
import { UrlResultRow } from './MultipleResults';

const TITLE_KEY = 'scanner_page.scan_results_card.title';

export const SingleResult = ({ data, isDark }: { data: SingleResultData; isDark: boolean }) => {
  const { t } = useTranslation();
  const { url, isBroken, statusCode, responseTime } = data;
  const working = isBroken ? 0 : 1;
  const broken = isBroken ? 1 : 0;
  // Use responseTime (ms) for the summary bar; fall back to "0.0" if unavailable
  const timeInSeconds = responseTime !== undefined ? (responseTime / 1000).toFixed(1) : '0.0';
  // Resolved once here to avoid calling t() inside a non-hook context (getStatusText)
  const statusErrorText = t('scanner_page.scan_results_card.status_error');

  return (
    <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsColumn}>
      {/* Stat cards — exactly one of working/broken will be 1, the other 0 */}
      <div style={scanPageStyle.statCardsRow}>
        <div style={scanPageStyle.statCard(isDark)}>
          <span style={scanPageStyle.statNumber(false, isDark)}>{working}</span>
          <span style={scanPageStyle.statLabel(isDark)}>
            {t('scanner_page.scan_results_card.working_links')}
          </span>
        </div>
        <div style={scanPageStyle.statCard(isDark)}>
          <span style={scanPageStyle.statNumber(true, isDark)}>{broken}</span>
          <span style={scanPageStyle.statLabel(isDark)}>
            {t('scanner_page.scan_results_card.broken_links')}
          </span>
        </div>
      </div>

      {/* Link Status — single row */}
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

      {/* Summary bar */}
      <div style={scanPageStyle.summaryBar(isDark)}>
        <Trans
          i18nKey='scanner_page.scan_results_card.scanned_summary'
          values={{ total: 1, time: timeInSeconds }}
          components={{
            bold: <strong style={scanPageStyle.summaryBold(isDark)} />,
            cyan: <span style={scanPageStyle.summaryTime(isDark)} />,
          }}
        />
      </div>
    </CardShell>
  );
};
