import { IconTool, IconX, IconCheck } from '@tabler/icons-react';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { howItWorksStyles } from './styles';

export const HowItWorkFeatureCard = () => {
  return (
    <>
      <style>
        {`
          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .floating-icon {
            animation: subtleFloat 4s ease-in-out infinite;
          }
        `}
      </style>

      <Card style={howItWorksStyles.featureCard}>
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

        <div style={howItWorksStyles.featureTextContent}>
          <Typography variant='title' style={{ fontSize: '2.1rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Healing Broken Links, <span style={howItWorksStyles.highlightCyan}>One</span>
            <br />
            <span style={howItWorksStyles.featureTitleGradient}>Repository at a Time</span>
          </Typography>
          
          <Typography variant='description' style={howItWorksStyles.featureDescriptionText}>
            Think of Deadlink-Hunter as your repository's healthcare provider. We diagnose broken connections, identify the issues, and provide you with a clear treatment plan to restore your project's health.
          </Typography>

          <ul style={howItWorksStyles.featureList}>
            <li style={howItWorksStyles.featureListItem}>
              <div style={howItWorksStyles.listDotCyan} />
              <Typography variant='body'>No more 404 errors breaking your documentation</Typography>
            </li>
            <li style={howItWorksStyles.featureListItem}>
              <div style={howItWorksStyles.listDotPurple} />
              <Typography variant='body'>Keep your users' trust with working references</Typography>
            </li>
            <li style={howItWorksStyles.featureListItem}>
              <div style={howItWorksStyles.listDotGreen} />
              <Typography variant='body'>Maintain professional repository standards</Typography>
            </li>
          </ul>
        </div>
      </Card>
    </>
  );
};