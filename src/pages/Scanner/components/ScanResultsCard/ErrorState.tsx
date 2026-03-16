import { IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import type { ApiErrorTypes } from '@/services/LinkChecker/types';
import { getErrorTranslationKey, getErrorTranslationOptions } from '../../utils/errorTranslations';
import { CardShell } from './CardShell';
import { scanPageStyle } from '../styles';
import { Typography } from '@/components/UI/Typography/Typography';

const TITLE_KEY = 'scanner_page.scan_results_card.title';

export const ErrorState = ({ error }: { error: ApiErrorTypes }) => {
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
