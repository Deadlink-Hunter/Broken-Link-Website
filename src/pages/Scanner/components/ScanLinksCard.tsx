import { IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Card,
  Group,
  rem,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

interface ScanLinksCardProps {
  scanType: string;
  setScanType: (value: string) => void;
  url: string;
  setUrl: (value: string) => void;
}

export const ScanLinksCard = ({ scanType, setScanType, url, setUrl }: ScanLinksCardProps) => {
  const { t } = useTranslation();

  return (
    <Card
      padding='xl'
      radius='lg'
      withBorder
      style={{
        backgroundColor: '#1e293b', // Dark slate/navy
        borderColor: '#334155',
      }}
    >
      <Group mb='lg'>
        <IconSearch
          style={{ width: rem(24), height: rem(24) }}
          color='#38bdf8' // Light blue
        />
        <Title order={3} c='white'>
          {t('scanner_page.scan_links_card.title')}
        </Title>
      </Group>

      <Stack gap='lg'>
        <SegmentedControl
          value={scanType}
          onChange={setScanType}
          data={[
            {
              label: t('scanner_page.scan_links_card.toggle_single'),
              value: 'single',
            },
            {
              label: t('scanner_page.scan_links_card.toggle_repo'),
              value: 'repository',
            },
          ]}
          fullWidth
          radius='md'
          styles={{
            root: {
              backgroundColor: '#0f172a',
            },
            label: {
              color: '#94a3b8',
            },
            indicator: {
              backgroundColor: '#334155',
            },
          }}
        />

        <Stack gap='xs'>
          <Text c='white' size='sm' fw={500}>
            {t('scanner_page.scan_links_card.input_label')}
          </Text>
          <TextInput
            placeholder={t('scanner_page.scan_links_card.input_placeholder')}
            value={url}
            onChange={(event) => setUrl(event.currentTarget.value)}
            styles={{
              input: {
                backgroundColor: '#0f172a',
                borderColor: '#334155',
                color: 'white',
                '&::placeholder': {
                  color: '#64748b',
                },
              },
            }}
            size='md'
          />
        </Stack>

        <Button
          size='lg'
          fullWidth
          leftSection={<img alt='Deadlink logo' src='logo.svg' style={{ marginRight: '10px' }} />}
          variant='gradient'
          gradient={{ from: '#22d3ee', to: '#8b5cf6', deg: 45 }}
          radius='md'
        >
          {t('scanner_page.scan_links_card.button_check')}
        </Button>
      </Stack>
    </Card>
  );
};
