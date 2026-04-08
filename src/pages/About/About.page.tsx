import { AboutTitle } from './components/AboutTitle';
import { CommunitySection } from './components/CommunitySection';
import { FeaturesCards } from './components/FeaturesCards';
import { MissionCard } from './components/MissionCard';
import { centerGrid, pageWrapperStyle } from './components/styles';

const AboutPage = () => {
  return (
    <main style={pageWrapperStyle}>
      <AboutTitle />
      <section style={centerGrid}>
        <FeaturesCards />
      </section>

      <MissionCard />
      <CommunitySection />
    </main>
  );
};

export default AboutPage;