import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Hero } from '@/components/Hero/Hero';
import { Welcome } from '@/components/Welcome/Welcome';
import { ExploreToolkit } from './Components/ExploreToolkit';

export function HomePage() {
  return (
    <>
      <Welcome />
      <Hero />
      <ExploreToolkit />
      <ColorSchemeToggle />
    </>
  );
}
