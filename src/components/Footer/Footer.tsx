import { IconCode, IconHeart, IconStar } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Box, Container, SimpleGrid, Text, useMantineColorScheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { theme } from '@/theme';
import { Button } from '../UI/Button/Button';
import { Divider } from '../UI/Divider/Divider';
import { Link } from '../UI/Link/Link';
import { Typography } from '../UI/Typography/Typography';
import { footerStyles } from './styles';
import { useFooterData } from './useFooterData';

export default function Footer() {
  const { t } = useTranslation();
  const { width } = useViewportSize();
  const isMobileView = width < 1024;
  const { QUICK_LINKS, COMMUNITY_LINKS } = useFooterData();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = footerStyles(isDark);

  return (
    <>
      <Divider />
      <Container style={styles.container}>
        {/* TODO: Replace mantine grid with styling from styles.ts or create a new grid component thats based on simple grid */}
        <SimpleGrid
          spacing={theme.spacing.xl}
          cols={styles.topGridColLayout}
          style={styles.linkBoxWrapper}
        >
          <Box>
            <Text
              inherit
              variant='gradient'
              component='span'
              gradient={styles.gradientConfig}
              style={styles.gradientText}
            >
              {t('footer.header')}
            </Text>
            <Typography style={styles.text}>{t('footer.about')}</Typography>
            <Button
              leftSection={
                <IconStar style={{ marginRight: theme.spacing.lg }} size={styles.iconSize} />
              }
              variant='primary'
            >
              {t('footer.gitBtnTxt')}
            </Button>
          </Box>

          <Box>
            <Typography style={styles.header}>{t('footer.QuickLinks')}</Typography>
            {QUICK_LINKS.map((link, i) => (
              <Link key={i + link.label} href={link.href} label={link.label} />
            ))}
          </Box>

          <Box>
            <Typography style={styles.header}>{t('footer.Community')}</Typography>
            {COMMUNITY_LINKS.map((link, i) => (
              <Link key={i + link.label} href={link.href} label={link.label} />
            ))}
          </Box>
        </SimpleGrid>

        <Divider />

        <SimpleGrid style={styles.bottomGrid} cols={styles.bottomGridColLayout}>
          <Typography style={styles.openSrcTxt(isMobileView)}>
            <IconCode size={styles.iconSize} /> {t('footer.madeWith')}
            <IconHeart color={theme.colors.red[8]} size={styles.iconSize} />
            {t('footer.byOpenSrc')}
          </Typography>
          <Typography style={styles.rightsTxt(isMobileView)}>{t('footer.rights')}</Typography>
        </SimpleGrid>
      </Container>
    </>
  );
}
