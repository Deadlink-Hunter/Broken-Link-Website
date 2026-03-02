import { Container } from '@mantine/core';
import { Hero } from '@/components/Hero/Hero';
import { FeedbackCard } from '@/components/Carousel/FeedbackCard';
import { ReviewsCarousel } from '@/components/Carousel/ReviewsCarousel';
import type { TestimonialData } from '@/components/Carousel/types';
import { ExploreToolkit } from './Components/ExploreToolkit';
import { HowItWork } from './Components/HowItWorks/HowItWork';

const TESTIMONIALS: TestimonialData[] = [
  {
    name: 'Mariana Costa',
    role: 'Product Designer',
    rating: 5,
    comment: 'Atendimento impecável e produto melhor do que eu esperava. Recomendo 100%!',
    date: '2026-01-20',
  },
  {
    name: 'Lucas Oliveira',
    role: 'Frontend Developer',
    rating: 4,
    comment: 'Muito bom, entrega no prazo. Só poderia melhorar o tempo de resposta no chat.',
    date: '2026-02-05',
  },
  {
    name: 'Ana Souza',
    role: 'UX Researcher',
    rating: 5,
    comment: 'A ferramenta mudou completamente o nosso fluxo de trabalho. Incrível!',
    date: '2026-02-18',
  },
];

export function HomePage() {
  return (
    <>
      <Hero />
      <ExploreToolkit />
      <HowItWork />
      <Container size="lg" py="xl">
        <ReviewsCarousel height={500}>
          {TESTIMONIALS.map((testimonial, index) => (
            <FeedbackCard key={index} {...testimonial} />
          ))}
        </ReviewsCarousel>
      </Container>
    </>
  );
}
