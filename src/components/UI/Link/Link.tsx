import { useMantineColorScheme } from '@mantine/core';
import { NavLink } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { linkStyles } from './styles';

interface LinkProps {
  label: string;
  href: string;
}

export const Link = ({ label, href, ...props }: LinkProps) => {
  const { hovered, ref } = useHover();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = linkStyles(isDark);
  return (
    <NavLink
      ref={ref}
      label={label}
      href={href}
      styles={{
        root: styles.root,
        label: styles.label(hovered),
      }}
      {...props}
    />
  );
};
