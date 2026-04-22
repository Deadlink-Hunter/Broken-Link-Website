import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/theme';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export type NavbarVariant = 'mobile' | 'desktop';

interface NavbarProps {
  variant?: NavbarVariant;
}

export default function Navbar({ variant }: NavbarProps) {
  const isMobileView = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const showMobile = variant === 'mobile' || (variant !== 'desktop' && isMobileView);

  return showMobile ? <MobileNav /> : <DesktopNav />;
}
