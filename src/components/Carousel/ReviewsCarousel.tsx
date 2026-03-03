import { Children, ReactNode, useCallback, useRef, useState } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';
import { getLoopDistance, getSlideTransitionStyle } from './styles';
import classes from './ReviewsCarousel.module.css';
import { Carousel } from '@mantine/carousel';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { UnstyledButton } from '@mantine/core';

interface ReviewsCarouselProps {
  children: ReactNode;
  height?: number | string;
}

export function ReviewsCarousel({ children, height = 500 }: ReviewsCarouselProps) {
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

  const loopedSlides = [...slidesArray, ...slidesArray];
  const totalLooped = loopedSlides.length;

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
            <Carousel.Slide key={i} style={{ padding: '3rem 0.5rem' }}>
              <div style={getSlideTransitionStyle(distance)}>{child}</div>
            </Carousel.Slide>
          );
        })}
      </Carousel>

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
