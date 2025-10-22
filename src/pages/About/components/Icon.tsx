import { IconArrowGuide, IconBracketsAngle, IconFile, IconTarget } from '@tabler/icons-react';
import { theme } from '@/theme';
import { iconStyle } from './styles';

export const Icon = ({ icon }: { icon: string }) => {
  const color = theme.colors.cyan[4];
  const size = 50;

  switch (icon) {
    case 'iconTarget':
      return <IconTarget color={color} style={iconStyle} size={size} />;
    case 'iconFile':
      return <IconFile color={color} style={iconStyle} size={size} />;
    case 'iconArrowGuide':
      return <IconArrowGuide color={color} style={iconStyle} size={size} />;
    case 'iconBracketsAngle':
      return <IconBracketsAngle color={color} style={iconStyle} size={size} />;
    default:
      return <IconTarget color={color} style={iconStyle} size={size} />;
  }
};
