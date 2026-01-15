import { useTranslation } from 'react-i18next';
import { Stack, Text } from '@mantine/core';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import { scanPageStyle } from './styles';

export const ScanTitlePage = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  return (
    <Stack style={scanPageStyle.centerGrid}>
      <Text
        inherit
        variant='gradient'
        style={scanPageStyle.titleStyle.gradientText}
        gradient={scanPageStyle.titleStyle.gradientConfig}
      >
        {t('scanner_page.title')}{' '}
      </Text>
      <Typography style={scanPageStyle.text(isDark)}>{t('scanner_page.description')}</Typography>
    </Stack>
  );
};
