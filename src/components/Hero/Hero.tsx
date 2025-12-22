import { HeroTitle } from './components/HeroTitle/HeroTitle';
import { HeroDescription } from './components/HeroDescription/HeroDescription';
import { HeroButtons } from './components/HeroButtons/HeroButtons';
import { HeroStatistics } from './components/HeroStatistics/HeroStatistics';
import classes from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.glowTopLeft} aria-hidden='true' />
      <div className={classes.glowBottomRight} aria-hidden='true' />
      <div className={classes.content}>
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
        <HeroStatistics />
      </div>
    </div>
  );
};
