import { useTranslation } from 'react-i18next';
import { AboutTitle } from './components/AboutTitle';
import { CommunitySection } from './components/CommunitySection/CommunitySection';
import { FeaturesCards } from './components/FeaturesCards';
import { MissionCard } from './components/MissionCard';
import { centerGrid, missionSectionStyle, pageWrapperStyle } from './components/styles';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <main style={pageWrapperStyle}>
      <AboutTitle />

      <section style={centerGrid}>
        <FeaturesCards />
      </section>

      <section style={missionSectionStyle}>
        <MissionCard
          title={t('about_page.mission.title')}
          description={t('about_page.mission.description')}
        />
      </section>

      <CommunitySection />
    </main>
  );
};

export default AboutPage;