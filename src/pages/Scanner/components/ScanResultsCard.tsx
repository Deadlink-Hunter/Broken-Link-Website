import { IconAlertCircle, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Card, Group, rem, Stack, Text, Title } from '@mantine/core';

export const ScanResultsCard = () => {
  const { t } = useTranslation();

  return (
    <Card
      padding='xl'
      radius='lg'
      withBorder
      style={{
        backgroundColor: '#1e293b',
        borderColor: '#334155',
        minHeight: '400px', // Ensure it has some height to look like the design
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Group mb='lg'>
        <IconAlertCircle
          style={{ width: rem(24), height: rem(24) }}
          color='#fbbf24' // Amber/Warning color
        />
        <Title order={3} c='white'>
          {t('scanner_page.scan_results_card.title')}
        </Title>
      </Group>

      <Stack align='center' justify='center' style={{ flex: 1, height: '100%' }} gap='md'>
        <IconSearch style={{ width: rem(80), height: rem(80), opacity: 0.2 }} color='white' />
        <Text c='dimmed' ta='center' size='md' maw={300}>
          {t('scanner_page.scan_results_card.empty_state')}
        </Text>
      </Stack>
    </Card>
  );
};
