import { IconCode, IconHeart, IconStar } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Box, Container, SimpleGrid, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { theme } from '@/theme';
import { Link } from '../Link/Link';
import { Button } from '../UI/Button/Button';
import { Divider } from '../UI/Divider/Divider';
import { Typography } from '../UI/Typography/Typography';
import { footerStyles } from './styles';

export default function Footer() {
  const { t } = useTranslation();
  const { width } = useViewportSize();
  const isMobileView = width < 1024;
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
      <Container style={footerStyles.container}>
        {/* TODO: Replace mantine grid with styling from styles.ts or create a new grid component thats based on simple grid */}
        <SimpleGrid
          spacing={theme.spacing.xl}
          cols={footerStyles.topGridColLayout}
          style={footerStyles.linkBoxWrapper}
        >
          <Box>
            <Text
              inherit
              variant='gradient'
              component='span'
              gradient={footerStyles.gradientConfig}
              style={footerStyles.gradientText}
            >
              {t('footer.header')}
            </Text>
            <Typography style={footerStyles.text}>{t('footer.about')}</Typography>
            <Button
              leftSection={
                <IconStar style={{ marginRight: theme.spacing.lg }} size={footerStyles.iconSize} />
              }
              variant='primary'
            >
              {t('footer.gitBtnTxt')}
            </Button>
          </Box>

          <Box>
            <Typography style={footerStyles.header}>{t('footer.QuickLinks')}</Typography>
            {QUICK_LINKS.map((link, i) => (
              <Link key={i + link.label} href={link.href} label={link.label} />
            ))}
          </Box>

          <Box>
            <Typography style={footerStyles.header}>{t('footer.Community')}</Typography>
            {COMMUNITY_LINKS.map((link, i) => (
              <Link key={i + link.label} href={link.href} label={link.label} />
            ))}
          </Box>
        </SimpleGrid>

        <Divider />

        <SimpleGrid style={footerStyles.bottomGrid} cols={footerStyles.bottomGridColLayout}>
          <Typography style={footerStyles.openSrcTxt(isMobileView)}>
            <IconCode size={footerStyles.iconSize} /> {t('footer.madeWith')}
            <IconHeart color={theme.colors.red[8]} size={footerStyles.iconSize} />
            {t('footer.byOpenSrc')}
          </Typography>
          <Typography style={footerStyles.rightsTxt(isMobileView)}>{t('footer.rights')}</Typography>
        </SimpleGrid>
      </Container>
    </>
  );
}
