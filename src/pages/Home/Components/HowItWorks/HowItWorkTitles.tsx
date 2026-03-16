import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import { getHowItWorksStyles } from './styles';

export const HowItWorkTitles = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();
  const howItWorksStyles = getHowItWorksStyles(isDark);

  return (
    <>
      <Typography variant='title' style={howItWorksStyles.title}>
        {t('how_it_works_title_part1')}
        <span style={howItWorksStyles.highlight}>{t('how_it_works_title_highlight')}</span>
        {t('how_it_works_title_part2')}
      </Typography>
      <Typography variant='secondary' style={howItWorksStyles.description}>
        {t('how_it_works_subtitle')}
      </Typography>
    </>
  );
};
