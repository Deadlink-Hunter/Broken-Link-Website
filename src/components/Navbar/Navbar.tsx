import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/theme';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';


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
