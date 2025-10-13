import { Container, Box } from '@mantine/core';
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
      <Container style={heroStyles.containerWithMaxWidth}>
        <div style={heroStyles.mainStack}>
          <HeroTitle />
          <HeroFeatures />
          <HeroDescription />
          <HeroButtons />
          <HeroStatistics />
        </div>
      </Container>
    </Box>
  );
};
