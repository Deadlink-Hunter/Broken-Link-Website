import { IconArrowGuide, IconBracketsAngle, IconFile, IconTarget } from '@tabler/icons-react';
import { theme } from '@/theme';
import { iconStyle } from './styles';



export enum IconType {
    Target = "iconTarget",
    File = "iconFile",
    ArrowGuide = "iconArrowGuide",
    BracketsAngle = "iconBracketsAngle",
  }
  

export const Icon = (
    {icon}:
    {icon: IconType}
) => {
    const color = theme.colors.cyan[4];
    const size = 50;

    switch(icon) {
        case IconType.Target:
            return <IconTarget color={color} style={iconStyle} size={size} />;
        case IconType.File:
            return <IconFile color={color} style={iconStyle} size={size} />;
        case IconType.ArrowGuide:
            return <IconArrowGuide color={color} style={iconStyle} size={size} />;
        case IconType.BracketsAngle:
            return <IconBracketsAngle color={color} style={iconStyle} size={size} />;
        default:
            return <IconTarget color={color} style={iconStyle} size={size} />;
    }
}