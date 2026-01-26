import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import { aboutPageStyle } from './styles';

export const AboutTitlePage = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  return (
    <div style={aboutPageStyle.centerGrid}>
    <Typography variant="title" style={aboutPageStyle.titleStyle}>
        <span style={aboutPageStyle.whiteText}>{t('about_page.title.about')}</span>
        <span style={aboutPageStyle.brandStyle}>{t('about_page.title.deadlink_hunter')}</span>
    </Typography>

      <Typography style={aboutPageStyle.text(isDark)}>
        {t('about_page.description')}
      </Typography>
    </div>
  );
};
