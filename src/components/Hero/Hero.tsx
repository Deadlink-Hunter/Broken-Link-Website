import React from 'react';
import { Container, Stack, Group, Box, Text } from '@mantine/core';
import { IconSearch, IconBrandGithub, IconCircle, IconBolt } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/UI/Button/Button';
import { Typography } from '@/components/UI/Typography/Typography';
import { ROUTES } from '@/constants/routes.consts';
import { HERO_CONSTANTS, HERO_COLORS } from './constants';
import { heroStyles } from './styles';

export const Hero = () => {
  const navigate = useNavigate();

  const handleStartScanning = () => {
    navigate(`/${ROUTES.SCANNER}`);
  };

  const handleViewOnGithub = () => {
    window.open(HERO_CONSTANTS.URLS.GITHUB_REPO, '_blank');
  };

  return (
    <Box style={heroStyles.container}>
      <Container 
        size="xl" 
        style={heroStyles.innerContainer}
      >
      <Stack align="center" justify="center" gap={0} style={heroStyles.mainStack}>
        
        <Stack align="center" gap={0} style={heroStyles.titleStack}>
          <Text
            size="5rem"
            fw={700}
            variant="gradient"
            gradient={{ from: HERO_COLORS.GRADIENT.PRIMARY.FROM, to: HERO_COLORS.GRADIENT.PRIMARY.TO, deg: 45 }}
            style={heroStyles.titleText}
          >
            {HERO_CONSTANTS.TITLE.FIRST_PART}
          </Text>
          <Text
            size="5rem"
            fw={700}
            c={HERO_COLORS.TEXT.WHITE}
            style={heroStyles.subtitleText}
          >
            {HERO_CONSTANTS.TITLE.SECOND_PART}
          </Text>
        </Stack>

        <Group justify="center" gap="lg" style={heroStyles.featuresGroup}>
          <Group gap="xs" align="center">
            <IconCircle size={14} color={HERO_COLORS.ACCENT.CYAN} fill={HERO_COLORS.ACCENT.CYAN} />
            <Typography size="small" style={heroStyles.featureText}>
              {HERO_CONSTANTS.FEATURES.OPEN_SOURCE}
            </Typography>
          </Group>
          
          <Box style={heroStyles.dividerDot} />
          
          <Group gap="xs" align="center">
            <IconBolt size={14} color={HERO_COLORS.ACCENT.PURPLE} />
            <Typography size="small" style={heroStyles.featureText}>
              {HERO_CONSTANTS.FEATURES.LIGHTNING_FAST}
            </Typography>
          </Group>
        </Group>

        <Box style={heroStyles.descriptionContainer}>
          <Text 
            size="xl"
            style={heroStyles.descriptionText}
          >
            {HERO_CONSTANTS.DESCRIPTION.MAIN}{' '}
            <Text 
              component="span" 
              c={HERO_COLORS.ACCENT.CYAN} 
              fw={600}
              style={heroStyles.highlightText}
            >
              {HERO_CONSTANTS.DESCRIPTION.HIGHLIGHT}
            </Text>{' '}
            {HERO_CONSTANTS.DESCRIPTION.CONTINUATION}
          </Text>
        </Box>

        <Box style={heroStyles.buttonsContainer}>
          <Group 
            justify="center" 
            gap="md" 
            visibleFrom="md"
          >
            <Button
              variant="primary"
              size="lg"
              leftSection={<IconSearch size={18} />}
              onClick={handleStartScanning}
              style={heroStyles.primaryButton}
            >
              {HERO_CONSTANTS.BUTTONS.START_SCANNING}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              leftSection={<IconBrandGithub size={18} />}
              onClick={handleViewOnGithub}
              style={heroStyles.outlineButton}
            >
              {HERO_CONSTANTS.BUTTONS.VIEW_ON_GITHUB}
            </Button>
          </Group>

          <Stack
            align="center"
            gap="sm"
            hiddenFrom="md"
          >
            <Button
              variant="primary"
              size="lg"
              leftSection={<IconSearch size={18} />}
              onClick={handleStartScanning}
              style={heroStyles.primaryButton}
            >
              {HERO_CONSTANTS.BUTTONS.START_SCANNING}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              leftSection={<IconBrandGithub size={18} />}
              onClick={handleViewOnGithub}
              style={heroStyles.outlineButton}
            >
              {HERO_CONSTANTS.BUTTONS.VIEW_ON_GITHUB}
            </Button>
          </Stack>
        </Box>

        <Box style={heroStyles.statisticsContainer}>
          <Group 
            justify="center" 
            gap="4rem"
            visibleFrom="md"
          >
            <Stack align="center" gap={4}>
              <Text
                size="3rem"
                fw={700}
                c={HERO_COLORS.ACCENT.CYAN}
                style={heroStyles.statisticNumber}
              >
                {HERO_CONSTANTS.STATISTICS.LINKS_SCANNED.VALUE}
              </Text>
              <Text 
                size="sm"
                style={heroStyles.statisticLabel}
              >
                {HERO_CONSTANTS.STATISTICS.LINKS_SCANNED.LABEL}
              </Text>
            </Stack>

            <Stack align="center" gap={4}>
              <Text
                size="3rem"
                fw={700}
                c={HERO_COLORS.ACCENT.PURPLE}
                style={heroStyles.statisticNumber}
              >
                {HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.VALUE}
              </Text>
              <Text 
                size="sm"
                style={heroStyles.statisticLabel}
              >
                {HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.LABEL}
              </Text>
            </Stack>

            <Stack align="center" gap={4}>
              <Text
                size="3rem"
                fw={700}
                c={HERO_COLORS.ACCENT.GREEN}
                style={heroStyles.statisticNumber}
              >
                {HERO_CONSTANTS.STATISTICS.ACCURACY_RATE.VALUE}
              </Text>
              <Text 
                size="sm"
                style={heroStyles.statisticLabel}
              >
                {HERO_CONSTANTS.STATISTICS.ACCURACY_RATE.LABEL}
              </Text>
            </Stack>
          </Group>

          <Stack align="center" gap="2rem" hiddenFrom="md">
            <Stack align="center" gap={4}>
              <Text
                size="2.5rem"
                fw={700}
                c={HERO_COLORS.ACCENT.CYAN}
                style={heroStyles.statisticNumberMobile}
              >
                {HERO_CONSTANTS.STATISTICS.LINKS_SCANNED.VALUE}
              </Text>
              <Text 
                size="sm"
                style={heroStyles.statisticLabel}
              >
                {HERO_CONSTANTS.STATISTICS.LINKS_SCANNED.LABEL}
              </Text>
            </Stack>

            <Stack align="center" gap={4}>
              <Text
                size="2.5rem"
                fw={700}
                c={HERO_COLORS.ACCENT.PURPLE}
                style={heroStyles.statisticNumberMobile}
              >
                {HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.VALUE}
              </Text>
              <Text 
                size="sm"
                style={heroStyles.statisticLabel}
              >
                {HERO_CONSTANTS.STATISTICS.REPOS_ANALYZED.LABEL}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    </Box>
  );
};
