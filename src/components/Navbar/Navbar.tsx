import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/theme';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Scanner', href: '/scanner' },
  { label: 'Statistics', href: '/statistics' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const isMobileView = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  return isMobileView ? <MobileNav /> : <DesktopNav />;
}
