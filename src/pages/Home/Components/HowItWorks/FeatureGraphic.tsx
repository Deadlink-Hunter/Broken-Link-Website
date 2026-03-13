import { IconCheck, IconTool, IconX } from '@tabler/icons-react';
import { theme } from '@/theme';
import { howItWorksStyles } from './styles';
import classes from './FeatureGraphic.module.css';

export const FeatureGraphic = () => {
  return (
    <div style={howItWorksStyles.featureGraphicContainer}>
      <div style={howItWorksStyles.graphicLineGroup}>
        <div style={howItWorksStyles.graphicLineCyan} />
        <div style={howItWorksStyles.graphicIconRed}>
          <IconX size='1rem' color={theme.white} />
        </div>
      </div>

      <div style={howItWorksStyles.graphicMainIcon} className={classes.floatingIcon}>
        <IconTool size='2.5rem' color={theme.white} />
        <div style={howItWorksStyles.graphicCheckBadge}>
          <IconCheck size='0.75rem' color={theme.white} />
        </div>
      </div>

      <div style={howItWorksStyles.graphicLineGroup}>
        <div style={howItWorksStyles.graphicLinePurple} />
        <div style={howItWorksStyles.graphicIconGreen}>
          <IconCheck size='1rem' color={theme.white} />
        </div>
      </div>
    </div>
  );
};
