import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { ColoredTitle } from '@/components/UI/ColoredTitle/ColoredTitle';
import { Typography } from '@/components/UI/Typography/Typography';
import { statisticsPageStyle } from './styles';

export const StatisticsTitle = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  const statisticTextColor = isDark ? statisticsPageStyle.whiteText : statisticsPageStyle.blackText;

  return (
    <div style={statisticsPageStyle.centerGrid}>
      <ColoredTitle
        variant='title'
        style={statisticsPageStyle.titleStyle}
        text={`${t('statistics_page.title.performance')} ${t('statistics_page.title.analytics')}`}
        highlight={t('statistics_page.title.analytics')}
        beforeStyle={statisticTextColor}
      />

      <Typography style={statisticsPageStyle.text(isDark)}>
        {t('statistics_page.description')}
      </Typography>
    </div>
  );
};
