import { IconCheck, IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@/components/UI/Typography/Typography';
import type { UrlCheckData } from '@/services/LinkChecker/types';
import type { MultipleResultData } from '../../types/scan';
import { sumResponseTimes } from '../../utils/scan';
import { CardShell } from './CardShell';
import { scanPageStyle } from '../styles';

const TITLE_KEY = 'scanner_page.scan_results_card.title';

export const UrlResultRow = ({ url, isBroken }: { url: string; isBroken: boolean }) => {
  const StatusIcon = isBroken ? IconX : IconCheck;

  return (
    <div style={scanPageStyle.urlRowContainer}>
      <StatusIcon style={scanPageStyle.statusIcon(isBroken)} />
      <span style={scanPageStyle.resultDescription}>{url}</span>
    </div>
  );
};

export const MultipleResults = ({ data }: { data: MultipleResultData }) => {
  const { t } = useTranslation();
  const { results: resultsList, summary } = data;
  const { total, working, broken } = summary;
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
          total,
          working,
          broken,
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
