import { IconTool, IconX, IconCheck } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { howItWorksStyles } from './styles';

export const HowItWorkFeatureCard = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Adding a small inline style block for the keyframe animation. */}
      <style>
        {`
          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .floating-icon {
            animation: subtleFloat 4s ease-in-out infinite;
          }
          
          /* Accessibility fix: Disables animation for users who prefer reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .floating-icon {
              animation: none;
            }
          }
        `}
      </style>

      <Card style={howItWorksStyles.featureCard}>
        {/* Left Side: Graphic Element */}
        <div style={howItWorksStyles.featureGraphicContainer}>
          <div style={howItWorksStyles.graphicLineGroup}>
            <div style={howItWorksStyles.graphicLineCyan} />
            <div style={howItWorksStyles.graphicIconRed}>
              <IconX size={16} color="white" />
            </div>
          </div>
          
          <div style={howItWorksStyles.graphicMainIcon} className="floating-icon">
            <IconTool size={40} color="white" />
            <div style={howItWorksStyles.graphicCheckBadge}>
              <IconCheck size={12} color="white" />
            </div>
          </div>

          <div style={howItWorksStyles.graphicLineGroup}>
            <div style={howItWorksStyles.graphicLinePurple} />
            <div style={howItWorksStyles.graphicIconGreen}>
              <IconCheck size={16} color="white" />
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div style={howItWorksStyles.featureTextContent}>
          <Typography variant='title' style={{ fontSize: '2.1rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            {t('how_it_works_feature_title_prefix')} <span style={howItWorksStyles.highlightCyan}>{t('how_it_works_feature_title_highlight')}</span>
            <br />
            <span style={howItWorksStyles.featureTitleGradient}>{t('how_it_works_feature_title_suffix')}</span>
          </Typography>
          
          <Typography variant='description' style={howItWorksStyles.featureDescriptionText}>
            {t('how_it_works_feature_description')}
          </Typography>

          <ul style={howItWorksStyles.featureList}>
            <li style={howItWorksStyles.featureListItem}>
              <div style={howItWorksStyles.listDotCyan} />
              <Typography variant='body'>{t('how_it_works_feature_point_1')}</Typography>
            </li>
            <li style={howItWorksStyles.featureListItem}>
              <div style={howItWorksStyles.listDotPurple} />
              <Typography variant='body'>{t('how_it_works_feature_point_2')}</Typography>
            </li>
            <li style={howItWorksStyles.featureListItem}>
              <div style={howItWorksStyles.listDotGreen} />
              <Typography variant='body'>{t('how_it_works_feature_point_3')}</Typography>
            </li>
          </ul>
        </div>
      </Card>
    </>
  );
};