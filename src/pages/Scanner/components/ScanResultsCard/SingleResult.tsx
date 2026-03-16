import { useTranslation } from 'react-i18next';
import { Typography } from '@/components/UI/Typography/Typography';
import type { SingleResultData } from '../../types/scan';
import { CardShell } from './CardShell';
import { UrlResultRow } from './MultipleResults';
import { scanPageStyle } from '../styles';

const TITLE_KEY = 'scanner_page.scan_results_card.title';

export const SingleResult = ({ data }: { data: SingleResultData }) => {
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
