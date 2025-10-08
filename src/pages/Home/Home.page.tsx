import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Hero } from '@/components/Hero/Hero';
import { Welcome } from '@/components/Welcome/Welcome';


export function HomePage() {
  return (
    <>
    <Welcome />
    <ColorSchemeToggle />
    </>
  );
}
