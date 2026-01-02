import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Hero } from '@/components/Hero/Hero';
import { ExploreToolkit } from './Components/ExploreToolkit';

export function HomePage() {
  return (
    <>
      <Hero />
      <ExploreToolkit />
      <ColorSchemeToggle />
    </>
  );
}
