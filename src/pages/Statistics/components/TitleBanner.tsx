import { Typography } from '@/components/UI/Typography/Typography';
import classes from './TitleBanner.module.css';

interface TitleBannerText {
  title: string;
  description: string;
}

interface TitleBannerProps {
  text: TitleBannerText;
}

export default function TitleBanner({ text }: TitleBannerProps) {
  return (
    <div className={classes.titleContainer}>
      <Typography variant='title' className={classes.title}>
        <span className={classes.titleGradient}>{text.title}</span>
      </Typography>
      <Typography variant='tertiary' className={classes.description}>
        {text.description}
      </Typography>
    </div>
  );
}

