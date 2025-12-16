import { useViewportSize } from '@mantine/hooks';
import { BREAKPOINTS } from '@/constants/breakpoints.consts';

export const useViewportBreakpoints = () => {
  const { width } = useViewportSize();

  return {
    isMobileView: width < BREAKPOINTS.MOBILE,
    width,
  };
};
