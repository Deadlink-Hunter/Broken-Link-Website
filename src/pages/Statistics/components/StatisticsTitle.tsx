import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import { statisticsPageStyle } from './styles';

export const StatisticsTitle = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  return (
    <div style={statisticsPageStyle.centerGrid}>
      <Typography variant='title' style={statisticsPageStyle.titleStyle}>
        <span style={statisticsPageStyle.whiteText}>{t('statistics_page.title.performance')} </span>
        <span style={statisticsPageStyle.brandStyle}>{t('statistics_page.title.analytics')}</span>
      </Typography>

      <Typography style={statisticsPageStyle.text(isDark)}>
        {t('statistics_page.description')}
      </Typography>
    </div>
  );
};
