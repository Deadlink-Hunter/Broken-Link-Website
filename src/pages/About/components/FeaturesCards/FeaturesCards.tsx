
'use client';

import React from 'react';
import { Card, SimpleGrid, Group, Box } from '@mantine/core';
import { Typography } from '@/components/UI/Typography/Typography';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

// Icon wrapper
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ width: 56, height: 56, display: 'grid', placeItems: 'center', borderRadius: 10 }}>
    {children}
  </Box>
);

// ✅ SVG icons typed as JSX.Element
const TargetIcon: JSX.Element = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" opacity="0.22" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ReportIcon: JSX.Element = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" opacity="0.22" />
    <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon: JSX.Element = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.7 3 8.7 7.2 10.1.5.1.7-.2.7-.5v-1.9c-2.9.6-3.6-1.2-3.6-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7.7 2.2 1.2.1-.9.4-1.6.7-2-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.2 1-3-.1-.3-.4-1.4.1-2.9 0 0 .8-.2 2.8 1.1.8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3C16.6 3.6 17.4 3.8 17.4 3.8c.5 1.5.2 2.6 .1 2.9.6.8 1 1.8 1 3 0 4.1-2.5 5-4.9 5.3.4.3 .8 1 .8 2.1v3.1c0 .3.2.6.8.5 4.2-1.4 7.2-5.4 7.2-10.1C23.1 5.3 18.3.5 12 .5z"
      fill="currentColor"
      opacity="0.9"
    />
  </svg>
);

const CodeIcon: JSX.Element = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Feature data
const features: Feature[] = [
  { icon: TargetIcon, title: 'Precision Scanning', description: 'Advanced algorithms detect broken links across markdown files, documentation, and code comments with pinpoint accuracy.' },
  { icon: ReportIcon, title: 'Automated Reports', description: 'Generate comprehensive reports with detailed breakdowns, fix suggestions, and priority rankings for efficient maintenance.' },
  { icon: GithubIcon, title: 'GitHub Integration', description: 'Seamlessly integrate with your GitHub workflow through Actions, webhooks, and automated pull request creation.' },
  { icon: CodeIcon, title: 'Open Source', description: "Completely open source and community-driven. Contribute, customize, and extend to fit your project's needs." },
];

// FeaturesCards component
const FeaturesCards: React.FC = () => {
  return (
    <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: 980, cols: 1 }]}>
      {features.map((f, idx) => (
        <Card
          key={idx}
          withBorder
          radius="md"
          p="lg"
          sx={(theme) => ({
            background:
              theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors.dark[7], 0.7) : theme.white,
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3],
            minHeight: 120,
          })}
        >
          <Group align="flex-start" spacing="md" noWrap>
            <IconWrapper>
              <Box sx={(t) => ({ color: t.colorScheme === 'dark' ? t.colors.teal[4] : t.colors.teal[6] })}>
                {f.icon}
              </Box>
            </IconWrapper>

            <div style={{ flex: 1 }}>
              <Typography variant="primary" size="large" style={{ fontWeight: 700 }}>
                {f.title}
              </Typography>

              <Typography size="small" style={{ marginTop: 8, display: 'block', lineHeight: 1.6, opacity: 0.85 }}>
                {f.description}
              </Typography>
            </div>
          </Group>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default FeaturesCards;
