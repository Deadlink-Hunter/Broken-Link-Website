import { IconCode, IconHeart, IconStar } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Box, Container, SimpleGrid, Text } from '@mantine/core';
import { theme } from '@/theme';
import { Link } from '../Link/Link';
import { Button } from '../UI/Button/Button';
import { Divider } from '../UI/Divider/Divider';
import { Typography } from '../UI/Typography/Typography';
import { footerStyles } from './styles';
import styles from './styles.module.css';

export default function Footer() {
  const { t } = useTranslation();

  const QUICK_LINKS = [
    {
      href: '#',
      label: t('footer.About'),
    },
    {
      href: '#',
      label: t('footer.Scanner'),
    },
    {
      href: '#',
      label: t('footer.Statistics'),
    },
    {
      href: '#',
      label: t('footer.Documentation'),
    },
  ];
  const COMMUNITY_LINKS = [
    {
      href: '#',
      label: t('footer.Contribute'),
    },
    {
      href: '#',
      label: t('footer.Issues'),
    },
    {
      href: '#',
      label: t('footer.FeatureRequests'),
    },
    {
      href: '#',
      label: t('footer.Discord'),
    },
  ];

  return (
    <>
      <Divider />
      <Container style={{ ...footerStyles.container }}>
        <SimpleGrid
          spacing='xl'
          cols={{ base: 1, sm: 1, md: 3 }}
          style={{ ...footerStyles.linkBoxWrapper }}
        >
          <Box>
            <Text
              inherit
              variant='gradient'
              component='span'
              gradient={{ from: theme.colors.cyan[4], to: theme.colors.blue[6] }}
              style={{ fontWeight: 'bold', fontSize: '1.4em' }}
            >
              {t('footer.header')}
            </Text>

            <Typography py={theme.spacing.lg} c={theme.white}>
              {t('footer.about')}
            </Typography>

            <Button
              leftSection={<IconStar style={{ marginRight: theme.spacing.lg }} size={16} />}
              variant='primary'
            >
              {t('footer.gitBtnTxt')}
            </Button>
          </Box>
          <Box>
            <Typography c={theme.white} style={{ fontWeight: 'bold' }}>
              {t('footer.QuickLinks')}
            </Typography>
            {QUICK_LINKS.map((link, i) => (
              <Link key={i + link.label} href={link.href} label={link.label} />
            ))}
          </Box>
          <Box>
            ``
            <Typography c={theme.white} style={{ fontWeight: 'bold' }}>
              {t('footer.Community')}
            </Typography>
            {COMMUNITY_LINKS.map((link, i) => (
              <Link key={i + link.label} href={link.href} label={link.label} />
            ))}
          </Box>
        </SimpleGrid>

        <Divider />

        <SimpleGrid cols={{ base: 1, sm: 2 }} classNames={{ root: styles.grid }}>
          <Typography c={theme.colors.gray[5]} style={{ ...footerStyles.openSrcTxt }}>
            <IconCode size={16} /> {t('footer.madeWith')}
            <IconHeart color={theme.colors.red[8]} size={16} /> {t('footer.byOpenSrc')}
          </Typography>
          <Typography c={theme.colors.gray[5]}>{t('footer.rights')}</Typography>
        </SimpleGrid>
      </Container>
    </>
  );
}
