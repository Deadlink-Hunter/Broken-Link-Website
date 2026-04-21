import { useTranslation } from 'react-i18next';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { FeatureGraphic } from './FeatureGraphic';
import { howItWorksStyles } from './styles';
import classes from './HowItWorkFeatureCard.module.css';

export const HowItWorkFeatureCard = () => {
  const { t } = useTranslation();

  const featurePoints = [
    { dotStyle: howItWorksStyles.listDotCyan, text: t('how_it_works_feature_point_1') },
    { dotStyle: howItWorksStyles.listDotPurple, text: t('how_it_works_feature_point_2') },
    { dotStyle: howItWorksStyles.listDotGreen, text: t('how_it_works_feature_point_3') },
  ];

  return (
    <Card className={classes.featureCard}>
      <div className={classes.innerContent}>
        <FeatureGraphic />

        <div style={howItWorksStyles.featureTextContent}>
          <div style={howItWorksStyles.featureTitleContainer}>
            <Typography variant='title' style={howItWorksStyles.featureTitleLine}>
              {t('how_it_works_feature_title_prefix')}{' '}
              <span style={howItWorksStyles.highlightCyan}>
                {t('how_it_works_feature_title_highlight')}
              </span>
            </Typography>
            <Typography variant='title' style={howItWorksStyles.featureTitleLine}>
              <span style={howItWorksStyles.featureTitleGradient}>
                {t('how_it_works_feature_title_suffix')}
              </span>
            </Typography>
          </div>

          <Typography variant='primary' style={howItWorksStyles.featureDescriptionText}>
            {t('how_it_works_feature_description')}
          </Typography>

          <ul style={howItWorksStyles.featureList}>
            {featurePoints.map((point, index) => (
              <li key={index} style={howItWorksStyles.featureListItem}>
                <div style={point.dotStyle} />
                <Typography variant='primary' style={howItWorksStyles.featureListText}>
                  {point.text}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
