import { IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Card,
  Group,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { scanPageStyle } from './styles';

interface ScanLinksCardProps {
  scanType: string;
  setScanType: (value: string) => void;
  url: string;
  setUrl: (value: string) => void;
}

export const ScanLinksCard = ({ scanType, setScanType, url, setUrl }: ScanLinksCardProps) => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  return (
    <Card withBorder style={scanPageStyle.scanCardStyle}>
      <Group mb='lg'>
        <IconSearch style={scanPageStyle.searchIcon} />
        <Title style={scanPageStyle.cardTitle(isDark)}>
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
          styles={scanPageStyle.segmentedControl}
        />

        <Stack gap='xs'>
          <Text style={scanPageStyle.linkDescription}>
            {t('scanner_page.scan_links_card.input_label')}
          </Text>
          <TextInput
            placeholder={t('scanner_page.scan_links_card.input_placeholder')}
            value={url}
            onChange={(event) => setUrl(event.currentTarget.value)}
            styles={scanPageStyle.textInput}
          />
        </Stack>

        <Button
          style={scanPageStyle.linkButton}
          fullWidth
          leftSection={<img alt='Deadlink logo' src='logo.svg' style={scanPageStyle.buttonIcon} />}
          variant='gradient'
          gradient={scanPageStyle.titleStyle.gradientConfig}
        >
          {t('scanner_page.scan_links_card.button_check')}
        </Button>
      </Stack>
    </Card>
  );
};
