import { NavLink } from '@mantine/core';
import { linkStyles } from './styles';
import classes from './styles.module.css';

export const Link = ({ label, href, ...props }: { label: string; href: string }) => {
  return (
    <NavLink
      label={label}
      href={href}
      styles={{
        root: {
          ...linkStyles.root,
        },
        label: {
          ...linkStyles.label,
        },
      }}
      classNames={{ label: classes.label }}
      {...props}
    />
  );
};
