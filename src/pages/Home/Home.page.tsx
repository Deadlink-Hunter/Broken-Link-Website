import { Hero } from '@/components/Hero/Hero';
import { ExploreToolkit } from './Components/ExploreToolkit';
import { HowItWork } from './Components/HowItWorks/HowItWork';

export function HomePage() {
  return (
    <>
      <Hero />
      <ExploreToolkit />
      <HowItWork />
    </>
  );
}
