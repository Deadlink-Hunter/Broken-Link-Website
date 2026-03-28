import { ReactElement, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Carousel } from '@mantine/carousel';
import { Button } from '@/components/UI/Button/Button';
import { carouselIcons, emblaOptions, getLoopDistance, getSlideTransitionStyle } from './styles';
import classes from './ReviewsCarousel.module.css';

interface ReviewsCarouselProps {
  children: ReactElement[];
}

export const ReviewsCarousel = ({ children }: ReviewsCarouselProps) => {
  const [activeEmblaIndex, setActiveEmblaIndex] = useState(0);
  const [, emblaApi] = useEmblaCarousel();

  const carouselLength = children.length;

  const loopedSlides = [...children, ...children];
  const indicators = Array.from({ length: carouselLength }, (_, i) => i);

  return (
    <div className={classes.carouselWrapper}>
      <Carousel
        withIndicators={false}
        withControls
        draggable
        onSlideChange={setActiveEmblaIndex}
        nextControlIcon={carouselIcons.next}
        previousControlIcon={carouselIcons.previous}
        classNames={classes}
        emblaOptions={emblaOptions}
      >
        {loopedSlides.map((child, i) => {
          const distance = getLoopDistance(i, activeEmblaIndex, loopedSlides.length);
          return (
            <Carousel.Slide key={i} className={classes.slide}>
              <div style={getSlideTransitionStyle(distance)}>{child}</div>
            </Carousel.Slide>
          );
        })}
      </Carousel>

      <div className={classes.customIndicators}>
        {indicators.map((idx) => (
          <Button
            key={idx}
            className={classes.indicator}
            data-active={idx === activeEmblaIndex || undefined}
            onClick={() => emblaApi?.scrollTo(idx)}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
};
