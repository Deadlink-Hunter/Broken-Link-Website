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
  target?: LinkTarget | string;
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

  const isExternal = href.startsWith('http') || target === LinkTarget.Blank || target === '_blank';

  const sharedStyles = {
    root: { ...linkStyles.root, ...rootStyle },
    label: { ...linkStyles.label(applyHover, isDark, hoverColor, labelColor), ...labelStyle },
  };

  return (
    <NavLink
      ref={ref}
      label={label}
      styles={sharedStyles}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component={(isExternal ? 'a' : RouterLink) as any}
      href={isExternal ? href : undefined}
      to={!isExternal ? href : undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    />
  );
};