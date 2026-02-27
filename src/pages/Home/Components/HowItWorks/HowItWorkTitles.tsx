import { useTranslation } from 'react-i18next';
import { Typography } from '@/components/UI/Typography/Typography';
import { howItWorksStyles } from './styles';

export const HowItWorkTitles = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant='h1' style={howItWorksStyles.title}>
        {t('how_it_works_title_part1')}
        <span style={howItWorksStyles.highlight}>{t('how_it_works_title_highlight')}</span>
        {t('how_it_works_title_part2')}
      </Typography>
      <Typography variant='body' style={howItWorksStyles.description}>
        {t('how_it_works_subtitle')}
      </Typography>
    </>
  );
};
