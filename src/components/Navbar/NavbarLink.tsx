import { useMatch, useResolvedPath } from 'react-router-dom';
import { Link } from '../UI/Link/Link';
import { desktopStyles, mobileStyles } from './styles';

interface NavbarLinkItemProps {
  href: string;
  label: string;
  variant: 'mobile' | 'desktop';
}

export default function NavbarLink({ href, label, variant }: NavbarLinkItemProps) {
  const resolvedPath = useResolvedPath(href);
  const match = useMatch({ path: resolvedPath.pathname, end: true });
  const isActive = Boolean(match);

  if (variant === 'desktop') {
    return (
      <Link
        href={href}
        label={label}
        hoverColor={desktopStyles.linkHoverColor(isActive)}
        labelColor={desktopStyles.linkColor(isActive)}
        labelStyle={desktopStyles.linkStyle}
      />
    );
  }

  if (variant === 'mobile')
    return (
      <Link
        href={href}
        label={label}
        labelColor={mobileStyles.linkColor(isActive)}
        labelStyle={mobileStyles.link}
        rootStyle={mobileStyles.linkContainer(isActive)}
      />
    );
}

