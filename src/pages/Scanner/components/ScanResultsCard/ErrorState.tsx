import { IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@/components/UI/Typography/Typography';
import type { ApiErrorTypes } from '@/services/LinkChecker/types';
import { getErrorTranslationKey, getErrorTranslationOptions } from '../../utils/errorTranslations';
import { scanPageStyle } from '../styles';
import { CardShell } from './CardShell';

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
