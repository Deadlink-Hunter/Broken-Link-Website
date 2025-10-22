import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@/components/Welcome/Welcome';
import { ExploreToolkit } from './Components/ExploreToolkit';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ExploreToolkit />
      <ColorSchemeToggle />
    </>
  );
}
