import { useTranslation } from 'react-i18next';
import { Loader } from '@/components/UI/Loader/Loader';
import { Typography } from '@/components/UI/Typography/Typography';
import { scanPageStyle } from '../styles';
import { CardShell } from './CardShell';

const TITLE_KEY = 'scanner_page.scan_results_card.title';

export const LoadingState = () => {
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
