import type { CSSProperties, ReactNode } from 'react';
import { IconAlertCircle, IconCheck, IconSearch, IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Loader } from '@/components/UI/Loader/Loader';
import { Typography } from '@/components/UI/Typography/Typography';
import type { ApiErrorTypes, UrlCheckData } from '@/services/LinkChecker/types';
import {
  MultipleResultData,
  ResolvedKind,
  ScanResultsCardProps,
  SingleResultData,
} from '../types/scan';
import { getErrorTranslationKey, getErrorTranslationOptions } from '../utils/errorTranslations';
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

const UrlResultRow = ({ url, isBroken }: UrlResultRowProps) => {
  const StatusIcon = isBroken ? IconX : IconCheck;

  return (
    <div style={scanPageStyle.urlRowContainer}>
      <StatusIcon style={scanPageStyle.statusIcon(isBroken)} />
      <span style={scanPageStyle.resultDescription}>{url}</span>
    </div>
  );
};

const LoadingState = () => {
  const { t } = useTranslation();
  return (
    <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsStack}>
      <Loader size='large' />
      <Typography style={scanPageStyle.resultDescription}>
        {t('scanner_page.scan_results_card.loading')}
      </Typography>
    </CardShell>
  );
};

const ErrorState = ({ error }: { error: ApiErrorTypes }) => {
  const { t } = useTranslation();
  const errorKey = getErrorTranslationKey(error);
  const errorOptions = getErrorTranslationOptions(error);

  return (
    <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsStack}>
      <IconX style={scanPageStyle.errorIcon} />
      <Typography style={scanPageStyle.errorText}>{t(errorKey, errorOptions)}</Typography>
    </CardShell>
  );
};

const EmptyState = () => {
  const { t } = useTranslation();
  return (
    <CardShell title={TITLE_KEY} contentStyle={scanPageStyle.resultsStack}>
      <IconSearch style={scanPageStyle.emptyStateIcon} />
      <Typography style={scanPageStyle.resultDescription}>
        {t('scanner_page.scan_results_card.empty_state')}
      </Typography>
    </CardShell>
  );
};

const SingleResult = ({ data }: { data: SingleResultData }) => {
  const { t } = useTranslation();
  const { url, isBroken, responseTime } = data;
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
};

const MultipleResults = ({ data }: { data: MultipleResultData }) => {
  const { t } = useTranslation();
  const { results: resultsList, summary } = data;
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

export const ScanResultsCard = ({ results, loading, error }: ScanResultsCardProps) => {
  const resolved = resolveScanResults(results);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (!resolved) {
    return <EmptyState />;
  }

  if (resolved.kind === ResolvedKind.SINGLE) {
    return <SingleResult data={resolved as SingleResultData} />;
  }
  if (resolved.kind === ResolvedKind.MULTIPLE) {
    return <MultipleResults data={resolved as MultipleResultData} />;
  }

  return null;
};
