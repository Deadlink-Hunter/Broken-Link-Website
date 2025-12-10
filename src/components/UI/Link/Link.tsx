import { NavLink } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { linkStyles } from './styles';

interface LinkProps {
  label: string;
  href: string;
}

export const Link = ({ label, href, ...props }: LinkProps) => {
  const { hovered, ref } = useHover();
  const isDark = useIsDark();
  return (
    <NavLink
      ref={ref}
      label={label}
      href={href}
      styles={{
        root: linkStyles.root,
        label: linkStyles.label(hovered, isDark),
      }}
      {...props}
    />
  );
};
