import { useMediaQuery } from '@mantine/hooks';
import { ROUTES } from '@/constants/routes.consts';
import { theme } from '@/theme';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export const NAVIGATION_LINKS = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Scanner', href: ROUTES.SCANNER },
  { label: 'Statistics', href: ROUTES.STATISTICS },
  { label: 'About', href: ROUTES.ABOUT },
];

export type NavbarVariant = 'mobile' | 'desktop';

interface NavbarProps {
  variant?: NavbarVariant;
}

export default function Navbar() {
  const isMobileView = useMediaQuery(
    `(max-width: ${theme.breakpoints.lg})`
  );
  
  return isMobileView ? <MobileNav /> : <DesktopNav />;
}
