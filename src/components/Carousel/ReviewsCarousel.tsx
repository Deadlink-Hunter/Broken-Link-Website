import { Carousel } from '@mantine/carousel';
import { UnstyledButton } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { Children, ReactNode, useCallback, useRef, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { getLoopDistance, getSlideTransitionStyle } from './styles';
import classes from './ReviewsCarousel.module.css';

interface ReviewsCarouselProps {
  children: ReactNode;
  height?: number | string;
}

export function ReviewsCarousel({ children, height = 500 }: ReviewsCarouselProps) {
  // All hooks must come before any early return
  const id = useId();
  const [activeEmblaIndex, setActiveEmblaIndex] = useState(0);
  const emblaApiRef = useRef<EmblaCarouselType | null>(null);

  const handleEmblaApi = useCallback((embla: EmblaCarouselType) => {
    emblaApiRef.current = embla;
  }, []);

  const slidesArray = Children.toArray(children);
  const totalReal = slidesArray.length;

  if (totalReal === 0) {
    return <div className={classes.empty}>Nenhuma avaliação disponível.</div>;
  }

  // Embla's canLoop() requires: other slides total >= viewport width.
  // With slideSize 33.33%: 3 slides = 100% of viewport → canLoop = false (loop disabled).
  // Doubling to 6 slides = 200% → other slides = 5 × 33.33% = 166% ≥ 100% → canLoop = true ✓
  const loopedSlides = [...slidesArray, ...slidesArray];
  const totalLooped = loopedSlides.length;

  // Map Embla's 0-5 index back to the real 0-2 data index for indicators
  const activeDataIndex = activeEmblaIndex % totalReal;

  return (
    <div className={classes.carouselWrapper}>
      <Carousel
        height={height}
        slideSize={{ base: '80%', sm: '33.33%' }}
        slideGap={{ base: 'sm', sm: 'md' }}
        withIndicators={false}
        withControls
        draggable
        getEmblaApi={handleEmblaApi}
        onSlideChange={setActiveEmblaIndex}
        nextControlIcon={<IconChevronRight size={40} stroke={2} />}
        previousControlIcon={<IconChevronLeft size={40} stroke={2} />}
        classNames={classes}
        emblaOptions={{
          align: 'center',
          loop: true,
          dragFree: false,
          slidesToScroll: 1,
        }}
      >
        {loopedSlides.map((child, i) => {
          const distance = getLoopDistance(i, activeEmblaIndex, totalLooped);
          return (
            <Carousel.Slide key={`${id}-${i}`} style={{ padding: '3rem 0.5rem' }}>
              <div style={getSlideTransitionStyle(distance)}>{child}</div>
            </Carousel.Slide>
          );
        })}
      </Carousel>

      {/* Custom indicators: show only totalReal dots, not totalLooped */}
      <div className={classes.customIndicators}>
        {Array.from({ length: totalReal }, (_, idx) => (
          <UnstyledButton
            key={idx}
            className={classes.indicator}
            data-active={idx === activeDataIndex || undefined}
            onClick={() => emblaApiRef.current?.scrollTo(idx)}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}
