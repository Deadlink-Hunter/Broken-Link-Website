import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { ColoredTitle } from '@/components/UI/ColoredTitle/ColoredTitle';
import { Typography } from '@/components/UI/Typography/Typography';
import { scanPageStyle } from './styles';

export const ScanTitlePage = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();
  const titleColor = isDark ? scanPageStyle.whiteText : scanPageStyle.blackText;

  return (
    <div style={scanPageStyle.centerGrid}>
      <ColoredTitle
        variant='title'
        style={scanPageStyle.titleStyle}
        text={`${t('scanner_page.title.prefix')}${t('scanner_page.title.highlight')}`}
        highlight={t('scanner_page.title.highlight')}
        beforeStyle={titleColor}
      />
      <Typography style={scanPageStyle.text(isDark)}>{t('scanner_page.description')}</Typography>
    </div>
  );
};
