// Redesigned scan results UI — stat cards, link status rows, and summary bar
import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import { getReasonPhrase } from 'http-status-codes';
import { Trans, useTranslation } from 'react-i18next';
import type { UrlCheckData } from '@/services/LinkChecker/types';
import type { MultipleResultData } from '../../types/scan';
import { sumResponseTimes } from '../../utils/scan';
import { scanPageStyle } from '../styles';
import { CardShell } from './CardShell';

const TITLE_KEY = 'scanner_page.scan_results_card.title';

// Resolves a numeric status code to "200 OK" format.
// Falls back to the plain number if the code is non-standard,
// or to errorText (e.g. "Error") when no status code exists (e.g. timeout/DNS failure).
const getStatusText = (isBroken: boolean, statusCode?: number, errorText?: string): string => {
  if (statusCode !== undefined) {
    try {
      return `${statusCode} ${getReasonPhrase(statusCode)}`;
    } catch {
      return `${statusCode}`;
    }
  }
  if (isBroken) {
    return errorText ?? '';
  }
  return '';
};

interface UrlResultRowProps {
  url: string;
  isBroken: boolean;
  statusCode?: number;
  statusErrorText: string; // passed from parent — avoids calling t() inside a non-hook context
  isDark: boolean; // passed from parent for light/dark background adaptation
}

// URL result row — shows status icon, truncated URL, and HTTP status text
export const UrlResultRow = ({
  url,
  isBroken,
  statusCode,
  statusErrorText,
  isDark,
}: UrlResultRowProps) => {
  const StatusIcon = isBroken ? IconCircleX : IconCircleCheck;
  const statusText = getStatusText(isBroken, statusCode, statusErrorText);

  return (
    <div style={scanPageStyle.urlRowCard(isDark)}>
      <div style={scanPageStyle.urlRowLeft}>
        <StatusIcon style={scanPageStyle.circleIcon(isBroken, isDark)} />
        <span style={scanPageStyle.urlText(isDark)}>{url}</span>
      </div>
      {statusText && (
        <span style={scanPageStyle.urlStatusText(isBroken, isDark)}>{statusText}</span>
      )}
    </div>
  );
};

// Renders stat cards, scrollable link list, and summary bar for multi-URL scan results
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
  const totalResponseTime = sumResponseTimes(resultsList);
  // Convert ms to seconds with one decimal place for the summary bar
  const timeInSeconds = (totalResponseTime / 1000).toFixed(1);
  // Resolved once here to avoid calling t() inside a non-hook context (getStatusText)
  const statusErrorText = t('scanner_page.scan_results_card.status_error');

  return (
    <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsColumn}>
      {/* Stat cards */}
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

      {/* Link Status */}
      <span style={scanPageStyle.linkStatusHeader}>
        {t('scanner_page.scan_results_card.link_status_header')}
      </span>
      <div style={scanPageStyle.resultsListContainer}>
        {resultsList.map(({ url, isBroken, statusCode }: UrlCheckData, index: number) => (
          <UrlResultRow
            key={`${url}-${index}`}
            url={url}
            isBroken={isBroken}
            statusCode={statusCode}
            statusErrorText={statusErrorText}
            isDark={isDark}
          />
        ))}
      </div>

      {/* Summary bar */}
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
    </CardShell>
  );
};
