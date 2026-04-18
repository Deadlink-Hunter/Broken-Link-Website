import { useTranslation } from 'react-i18next';
import { ColoredTitle } from '@/components/UI/ColoredTitle/ColoredTitle';
import { Typography } from '@/components/UI/Typography/Typography';
import { aboutPageStyle } from './styles';

export const AboutTitle = () => {
  const { t } = useTranslation();

  return (
    <div style={aboutPageStyle.centerGrid}>
      <ColoredTitle
        variant='title'
        style={aboutPageStyle.titleStyle}
        text={`${t('about_page.title.about')} ${t('about_page.title.deadlink_hunter')}`}
        highlight={t('about_page.title.deadlink_hunter')}
      />

      <Typography variant='primary' style={aboutPageStyle.text}>
        {t('about_page.description')}
      </Typography>
    </div>
  );
};