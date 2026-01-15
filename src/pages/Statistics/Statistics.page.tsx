import { useTranslation } from 'react-i18next';
import Charts from './components/Charts';
import { pageContainer } from './components/styles';
import TitleBanner from './components/TitleBanner';

const StatisticsPage = () => {
  const { t } = useTranslation();
  const titleBannerText = {
    title: t('statistics_page.title'),
    description: t('statistics_page.description'),
  };

  return (
    <div style={pageContainer}>
      <TitleBanner text={titleBannerText} />
      <Charts />
    </div>
  );
};

export default StatisticsPage;
