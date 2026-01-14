import { useTranslation } from 'react-i18next';
import { rem, Stack, Text, Title } from '@mantine/core';

export const ScanTitlePage = () => {
  const { t } = useTranslation();

  return (
    <Stack align='center' gap='lg' mb={50} mt={50}>
      <Title
        order={1}
        style={{
          fontSize: rem(48),
          fontWeight: 900,
          background: 'linear-gradient(to left, #8b5cf6 0%, #22d3ee 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {t('scanner_page.title')}
      </Title>
      <Text size='xl' ta='center'>
        {t('scanner_page.description')}
      </Text>
    </Stack>
  );
};
