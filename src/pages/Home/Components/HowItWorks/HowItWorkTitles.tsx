import { useTranslation } from 'react-i18next';
import { ColoredTitle } from '@/components/UI/ColoredTitle/ColoredTitle';
import { Typography } from '@/components/UI/Typography/Typography';
import { howItWorksStyles } from './styles';

export const HowItWorkTitles = () => {
  const { t } = useTranslation();

  return (
    <>
      <ColoredTitle
        text={`${t('how_it_works_title_part1')}${t('how_it_works_title_highlight')}${t('how_it_works_title_part2')}`}
        highlight={t('how_it_works_title_highlight')}
        variant='h1'
        style={howItWorksStyles.title}
      />
      <Typography variant='body' style={howItWorksStyles.description}>
        {t('how_it_works_subtitle')}
      </Typography>
    </>
  );
};
