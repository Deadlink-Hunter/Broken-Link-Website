import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import { scanPageStyle } from './styles';

export const ScanTitlePage = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  return (
    <div style={scanPageStyle.centerGrid}>
      <Typography variant='title' style={scanPageStyle.titleStyle}>
        <span style={scanPageStyle.titleStyle}>{t('scanner_page.title')} </span>
      </Typography>
      <Typography style={scanPageStyle.text(isDark)}>{t('scanner_page.description')}</Typography>
    </div>
  );
};
