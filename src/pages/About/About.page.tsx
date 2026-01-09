import { FeaturesCards } from './components/FeaturesCards';
import { MissionCard } from './components/MissionCard';
import { centerGrid, pageWrapperStyle } from './components/styles';

const AboutPage = () => {
  return (
    <main style={pageWrapperStyle}>
      <section style={centerGrid}>
        <FeaturesCards />
      </section>

      <MissionCard />
    </main>
  );
};

export default AboutPage;
