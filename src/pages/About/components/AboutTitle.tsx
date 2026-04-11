import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { ColoredTitle } from '@/components/UI/ColoredTitle/ColoredTitle';
import { Typography } from '@/components/UI/Typography/Typography';
import { aboutPageStyle } from './styles';

export const AboutTitle = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  const aboutTextColor = isDark ? aboutPageStyle.whiteText : aboutPageStyle.blackText;

  return (
    <div style={aboutPageStyle.centerGrid}>
      <ColoredTitle
        variant='title'
        style={aboutPageStyle.titleStyle}
        text={`${t('about_page.title.about')} ${t('about_page.title.deadlink_hunter')}`}
        highlight={t('about_page.title.deadlink_hunter')}
        beforeStyle={aboutTextColor}
      />

      <Typography style={aboutPageStyle.text(isDark)}>{t('about_page.description')}</Typography>
    </div>
  );
};
