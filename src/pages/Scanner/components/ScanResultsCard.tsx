import type { CSSProperties, ReactNode } from 'react';
import { IconAlertCircle, IconCheck, IconSearch, IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Loader } from '@/components/UI/Loader/Loader';
import { Typography } from '@/components/UI/Typography/Typography';
import type { UrlCheckData } from '@/services/LinkChecker/types';
import { ResolvedKind, ScanResultsCardProps } from '../types/scan';
import { resolveScanResults, sumResponseTimes } from '../utils/scan';
import { scanPageStyle } from './styles';

const TITLE_KEY = 'scanner_page.scan_results_card.title';

interface UrlResultRowProps {
  url: string;
  isBroken: boolean;
}

interface CardShellProps {
  title: string;
  contentStyle: CSSProperties;
  children: ReactNode;
}

const CardShell = ({ title, contentStyle, children }: CardShellProps) => {
  const { t } = useTranslation();
  const isDark = useIsDark();
  return (
    <Card withBorder style={scanPageStyle.scanCardStyle}>
      <div style={scanPageStyle.cardHeader}>
        <IconAlertCircle style={scanPageStyle.alertIcon} />
        <Typography style={scanPageStyle.cardTitle(isDark)}>{t(title)}</Typography>
      </div>
      <div style={contentStyle}>{children}</div>
    </Card>
  );
};

const UrlResultRow = ({ url, isBroken }: UrlResultRowProps) => (
  <div style={scanPageStyle.urlRowContainer}>
    {isBroken ? (
      <IconX style={scanPageStyle.statusIcon(isBroken)} />
    ) : (
      <IconCheck style={scanPageStyle.statusIcon(isBroken)} />
    )}
    <span style={scanPageStyle.resultDescription}>{url}</span>
  </div>
);

export const ScanResultsCard = ({ results, loading, error }: ScanResultsCardProps) => {
  const { t } = useTranslation();

  if (loading) {
    return (
      <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsStack}>
        <Loader size='large' />
        <Typography style={scanPageStyle.resultDescription}>
          {t('scanner_page.scan_results_card.loading')}
        </Typography>
      </CardShell>
    );
  }

  if (error) {
    return (
      <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsStack}>
        <IconX style={scanPageStyle.errorIcon} />
        <Typography style={scanPageStyle.errorText}>{error}</Typography>
      </CardShell>
    );
  }

  const resolved = resolveScanResults(results);
  if (!resolved) {
    return (
      <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsStack}>
        <IconSearch style={scanPageStyle.emptyStateIcon} />
        <Typography style={scanPageStyle.resultDescription}>
          {t('scanner_page.scan_results_card.empty_state')}
        </Typography>
      </CardShell>
    );
  }

  if (resolved.kind === ResolvedKind.SINGLE) {
    const { url, isBroken, responseTime } = resolved;
    return (
      <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsStack}>
        <UrlResultRow url={url} isBroken={isBroken} />
        {responseTime !== undefined && (
          <Typography style={scanPageStyle.resultDescription}>
            {t('scanner_page.scan_results_card.response_time', { responseTime })}
          </Typography>
        )}
      </CardShell>
    );
  }

  const { results: resultsList, summary } = resolved;
  const totalResponseTime = sumResponseTimes(resultsList);
  return (
    <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsColumn}>
      <div style={scanPageStyle.resultsListContainer}>
        {resultsList.map(({ url, isBroken }: UrlCheckData, index: number) => (
          <UrlResultRow key={`${url}-${index}`} url={url} isBroken={isBroken} />
        ))}
      </div>
      <Typography style={scanPageStyle.resultDescription}>
        {t('scanner_page.scan_results_card.summary', {
          total: summary.total,
          working: summary.working,
          broken: summary.broken,
        })}
      </Typography>
      {totalResponseTime > 0 && (
        <Typography style={scanPageStyle.resultDescription}>
          {t('scanner_page.scan_results_card.total_response_time', {
            responseTime: totalResponseTime,
          })}
        </Typography>
      )}
    </CardShell>
  );
};
