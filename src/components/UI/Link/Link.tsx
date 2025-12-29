import { CSSProperties } from 'react';
import { NavLink } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { defaultHoverColor, defaultLabelColor, linkStyles } from './styles';

interface LinkProps {
  label: string;
  href: string;
  labelStyle?: CSSProperties;
  rootStyle?: CSSProperties;
  disableHover?: boolean;
  hoverColor?: string;
  labelColor?: string;
}

export const Link = ({
  label,
  href,
  labelStyle,
  rootStyle,
  disableHover = false,
  hoverColor = defaultHoverColor,
  labelColor = defaultLabelColor,
  ...props
}: LinkProps) => {
  const { hovered, ref } = useHover();
  const isDark = useIsDark();
  const applyHover = disableHover ? false : hovered;
  return (
    <NavLink
      ref={ref}
      label={label}
      href={href}
      styles={{
        root: { ...linkStyles.root, ...rootStyle },
        label: { ...linkStyles.label(applyHover, isDark, hoverColor, labelColor), ...labelStyle },
      }}
      {...props}
    />
  );
};
