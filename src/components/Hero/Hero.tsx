import { Container, Stack, Box, rem } from '@mantine/core';
import { 
  HeroTitle, 
  HeroFeatures, 
  HeroDescription, 
  HeroButtons, 
  HeroStatistics 
} from './components';
import { heroStyles } from './styles';

export const Hero = () => {
  return (
    <Box style={heroStyles.container}>
      <Container 
        style={{
          ...heroStyles.innerContainer,
          maxWidth: rem(1200),
        }}
      >
        <Stack style={heroStyles.mainStack}>
          <HeroTitle />
          <HeroFeatures />
          <HeroDescription />
          <HeroButtons />
          <HeroStatistics />
        </Stack>
      </Container>
    </Box>
  );
};
