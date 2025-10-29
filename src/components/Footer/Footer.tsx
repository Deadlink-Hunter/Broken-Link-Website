import React from 'react';
import { Affix, Container, Flex, useMantineTheme } from '@mantine/core';
import { Typography } from '../UI/Typography/Typography';
import { Button } from '../UI/Button/Button';
import { Divider } from '../UI/Divider/Divider';

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Scanner', href: '/scanner' },
  { label: 'Statistics', href: '/statistics' },
  { label: 'Documentation', href: '/documentation' },
];
const communityLinks = [
  { label: 'Contribute', href: '/contribute' },
  { label: 'Issues', href: '/issues' },
  { label: 'Feature Requests', href: '/feature-requests' },
  { label: 'Discord', href: '/discord' },
];

export const Footer = () => {
  const theme = useMantineTheme();

  return (
    <Affix position={{ bottom: 0, left: 0, right: 0 }}>
      <footer
        style={{
          backgroundColor: theme.colors.dark[7],
          color: theme.colors.gray[0],
          paddingTop: theme.spacing.lg,
          paddingBottom: theme.spacing.md,
          width: '100vw',
          boxSizing: 'border-box',
        }}
      >
        <Container size="lg" px="md">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={theme.spacing.xl}
            align="start"
            justify="space-between"
            wrap="wrap"
          >
            {/* Left Section */}
            <div>
              <Typography
                variant="title"
                size="extraLarge"
                style={{ color: theme.colors.blue[3] }}
              >
                Deadlink-Hunter
              </Typography>
              <Typography
                size="small"
                mt={theme.spacing.xs}
                style={{ color: theme.colors.gray[0] }}
              >
                Open-source tool for finding and eliminating broken links in GitHub repositories.
                Built with <span style={{ color: theme.colors.red[6] }}>♥</span> for the developer community.
              </Typography>
              <a
                href="https://github.com/Deadlink-Hunter/Broken-Link-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  mt={theme.spacing.md}
                  size="sm"
                  style={{
                    borderColor: theme.colors.blue[3],
                    color: theme.colors.blue[3],
                  }}
                >
                  Star on GitHub
                </Button>
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <Typography
                variant="subtitle"
                size="large"
                mb={theme.spacing.xs}
                style={{ color: theme.colors.gray[0] }}
              >
                Quick Links
              </Typography>
              {quickLinks.map((link) => (
                <Typography size="small" key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: theme.colors.gray[0],
                      textDecoration: 'underline',
                    }}
                  >
                    {link.label}
                  </a>
                </Typography>
              ))}
            </div>

            {/* Community Links */}
            <div>
              <Typography
                variant="subtitle"
                size="large"
                mb={theme.spacing.xs}
                style={{ color: theme.colors.gray[0] }}
              >
                Community
              </Typography>
              {communityLinks.map((link) => (
                <Typography size="small" key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: theme.colors.gray[0],
                      textDecoration: 'underline',
                    }}
                  >
                    {link.label}
                  </a>
                </Typography>
              ))}
            </div>
          </Flex>
          <Divider variant="muted" />
          <Flex
            justify="space-between"
            mt={theme.spacing.xl}
            direction={{ base: 'column', md: 'row' }}
            style={{ color: theme.colors.gray[0] }}
          >
            <Typography size="small">
              {'<>'} Made with <span style={{ color: theme.colors.red[6] }}>♥</span> by the open source community
            </Typography>
            <Typography size="small">
              © 2024 Deadlink-Hunter. Licensed under MIT.
            </Typography>
          </Flex>
        </Container>
      </footer>
    </Affix>
  );
};

export default Footer;
