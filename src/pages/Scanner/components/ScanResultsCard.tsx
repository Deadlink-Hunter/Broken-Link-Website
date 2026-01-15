import { IconAlertCircle, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Card, Group, Stack, Text, Title } from '@mantine/core';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { scanPageStyle } from './styles';

export const ScanResultsCard = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  return (
    <Card withBorder style={scanPageStyle.scanCardStyle}>
      <Group mb='lg'>
        <IconAlertCircle style={scanPageStyle.alertIcon} />
        <Title style={scanPageStyle.cardTitle(isDark)}>
          {t('scanner_page.scan_results_card.title')}
        </Title>
      </Group>

      <Stack style={scanPageStyle.resultsStack}>
        <IconSearch style={scanPageStyle.emptyStateIcon} />
        <Text style={scanPageStyle.resultDescription}>
          {t('scanner_page.scan_results_card.empty_state')}
        </Text>
      </Stack>
    </Card>
  );
};
