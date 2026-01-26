import { AboutTitlePage } from './components/AboutTitle';
import { FeaturesCards } from './components/FeaturesCards';
import { MissionCard } from './components/MissionCard';
import { centerGrid, pageWrapperStyle } from './components/styles';

const AboutPage = () => {
  return (
    <main style={pageWrapperStyle}>
      <AboutTitlePage />
      <section style={centerGrid}>
        <FeaturesCards />
      </section>

      <MissionCard />
    </main>
  );
};

export default AboutPage;
