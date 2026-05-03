import { CSSProperties } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { NavLink } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { LinkTarget } from '../Button/LinkButton';
import { defaultHoverColor, linkStyles } from './styles';

interface LinkProps {
  label: string;
  href: string;
  labelStyle?: CSSProperties;
  rootStyle?: CSSProperties;
  disableHover?: boolean;
  hoverColor?: string;
  labelColor?: string;
  target?: LinkTarget;
}

export const Link = ({
  label,
  href,
  labelStyle,
  rootStyle,
  disableHover = false,
  hoverColor = defaultHoverColor,
  labelColor,
  target,
  ...props
}: LinkProps) => {
  const { hovered, ref } = useHover();
  const isDark = useIsDark();
  const applyHover = disableHover ? false : hovered;

  const sharedStyles = {
    root: { ...linkStyles.root, ...rootStyle },
    label: { ...linkStyles.label(applyHover, isDark, hoverColor, labelColor), ...labelStyle },
  };

  if (target === LinkTarget.Blank) {
    return (
      <NavLink
        component="a"
        ref={ref}
        label={label}
        href={href}
        target={target}
        rel="noopener noreferrer"
        styles={sharedStyles}
        {...props}
      />
    );
  }

  return (
    <NavLink
      component={RouterLink}
      ref={ref}
      label={label}
      to={href}
      styles={sharedStyles}
      {...props}
    />
  );
};