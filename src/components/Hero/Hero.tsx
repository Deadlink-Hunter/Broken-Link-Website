import React from 'react';
import { Container, Stack, Group, Box, Text } from '@mantine/core';
import { IconSearch, IconBrandGithub, IconCircle, IconBolt } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/UI/Button/Button';
import { Typography } from '@/components/UI/Typography/Typography';
import { ROUTES } from '@/constants/routes.consts';

export const Hero = () => {
  const navigate = useNavigate();

  const handleStartScanning = () => {
    navigate(`/${ROUTES.SCANNER}`);
  };

  const handleViewOnGithub = () => {
    window.open('https://github.com/Deadlink-Hunter/Broken-Link-Website', '_blank');
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e1b3a 75%, #0f172a 100%)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container 
        size="xl" 
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          paddingTop: '2rem',
          paddingBottom: '2rem'
        }}
      >
      <Stack align="center" justify="center" gap={0} style={{ width: '100%', textAlign: 'center' }}>
        
        {/* Main Title */}
        <Stack align="center" gap={0} style={{ marginBottom: '1.5rem' }}>
          <Text
            size="5rem"
            fw={700}
            variant="gradient"
            gradient={{ from: '#22d3ee', to: '#8b5cf6', deg: 45 }}
            style={{ 
              fontSize: 'clamp(3rem, 10vw, 5rem)',
              lineHeight: 0.9,
              fontFamily: 'inherit',
              marginBottom: '-0.5rem'
            }}
          >
            Deadlink
          </Text>
          <Text
            size="5rem"
            fw={700}
            c="white"
            style={{ 
              fontSize: 'clamp(3rem, 10vw, 5rem)',
              lineHeight: 0.9,
              fontFamily: 'inherit'
            }}
          >
            Hunter
          </Text>
        </Stack>

        {/* Features badges */}
        <Group justify="center" gap="lg" style={{ marginBottom: '2rem' }}>
          <Group gap="xs" align="center">
            <IconCircle size={14} color="#22d3ee" fill="#22d3ee" />
            <Typography size="small" style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 500 }}>
              Open Source
            </Typography>
          </Group>
          
          <Box 
            style={{ 
              width: '4px', 
              height: '4px', 
              borderRadius: '50%',
              backgroundColor: '#475569' 
            }} 
          />
          
          <Group gap="xs" align="center">
            <IconBolt size={14} color="#8b5cf6" />
            <Typography size="small" style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 500 }}>
              Lightning Fast
            </Typography>
          </Group>
        </Group>

        {/* Description */}
        <Box style={{ maxWidth: '650px', margin: '0 auto', marginBottom: '3rem' }}>
          <Text 
            size="xl"
            style={{ 
              color: '#94a3b8', 
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            Eliminate broken links from your GitHub repositories with{' '}
            <Text 
              component="span" 
              c="#22d3ee" 
              fw={600}
              style={{ fontSize: 'inherit' }}
            >
              precision scanning
            </Text>{' '}
            and comprehensive reporting
          </Text>
        </Box>

        {/* Action Buttons */}
        <Box style={{ marginBottom: '4rem' }}>
          {/* Desktop Layout */}
          <Group 
            justify="center" 
            gap="md" 
            style={{
              '@media (max-width: 768px)': {
                display: 'none'
              }
            }}
            visibleFrom="md"
          >
            <Button
              variant="primary"
              size="lg"
              leftSection={<IconSearch size={18} />}
              onClick={handleStartScanning}
              style={{
                background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 600,
                minWidth: '160px',
                height: '44px',
                color: 'white'
              }}
            >
              Start Scanning
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              leftSection={<IconBrandGithub size={18} />}
              onClick={handleViewOnGithub}
              style={{
                background: 'transparent',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 600,
                minWidth: '160px',
                height: '44px',
                color: '#94a3b8'
              }}
            >
              View on GitHub
            </Button>
          </Group>

          {/* Mobile Layout */}
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
              style={{
                background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 600,
                minWidth: '160px',
                height: '44px',
                color: 'white'
              }}
            >
              Start Scanning
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              leftSection={<IconBrandGithub size={18} />}
              onClick={handleViewOnGithub}
              style={{
                background: 'transparent',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 600,
                minWidth: '160px',
                height: '44px',
                color: '#94a3b8'
              }}
            >
              View on GitHub
            </Button>
          </Stack>
        </Box>

        {/* Statistics */}
        <Box style={{ width: '100%' }}>
          {/* Desktop Layout */}
          <Group 
            justify="center" 
            gap="4rem"
            visibleFrom="md"
          >
            <Stack align="center" gap={4}>
              <Text
                size="3rem"
                fw={700}
                c="#22d3ee"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  lineHeight: 1,
                  marginBottom: '0.25rem'
                }}
              >
                10,000+
              </Text>
              <Text 
                size="sm"
                style={{ 
                  color: '#64748b',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textAlign: 'center'
                }}
              >
                Links Scanned
              </Text>
            </Stack>

            <Stack align="center" gap={4}>
              <Text
                size="3rem"
                fw={700}
                c="#8b5cf6"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  lineHeight: 1,
                  marginBottom: '0.25rem'
                }}
              >
                500+
              </Text>
              <Text 
                size="sm"
                style={{ 
                  color: '#64748b',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textAlign: 'center'
                }}
              >
                Repos Analyzed
              </Text>
            </Stack>

            <Stack align="center" gap={4}>
              <Text
                size="3rem"
                fw={700}
                c="#10b981"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  lineHeight: 1,
                  marginBottom: '0.25rem'
                }}
              >
                99.9%
              </Text>
              <Text 
                size="sm"
                style={{ 
                  color: '#64748b',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textAlign: 'center'
                }}
              >
                Accuracy Rate
              </Text>
            </Stack>
          </Group>

          {/* Mobile Layout */}
          <Stack align="center" gap="2rem" hiddenFrom="md">
            <Stack align="center" gap={4}>
              <Text
                size="2.5rem"
                fw={700}
                c="#22d3ee"
                style={{ 
                  fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                  lineHeight: 1,
                  marginBottom: '0.25rem'
                }}
              >
                10,000+
              </Text>
              <Text 
                size="sm"
                style={{ 
                  color: '#64748b',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textAlign: 'center'
                }}
              >
                Links Scanned
              </Text>
            </Stack>

            <Stack align="center" gap={4}>
              <Text
                size="2.5rem"
                fw={700}
                c="#8b5cf6"
                style={{ 
                  fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                  lineHeight: 1,
                  marginBottom: '0.25rem'
                }}
              >
                500+
              </Text>
              <Text 
                size="sm"
                style={{ 
                  color: '#64748b',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textAlign: 'center'
                }}
              >
                Repos Analyzed
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    </Box>
  );
};
