import { Button } from '@/components/UI/Button/Button';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';

export const ErrorComponent = () => {
  return (
    <Card>
      <Typography variant="h2">Something went wrong!</Typography>
      <Typography>We're sorry, but something unexpected happened.</Typography>
      <Typography>
        <strong>What you can try:</strong>
      </Typography>
      <ul>
        <li>Refresh the page</li>
        <li>Clear your browser cache</li>
        <li>Try again in a few minutes</li>
      </ul>
      <Button onClick={() => (window.location.href = '/')}>Go to Home Page</Button>
    </Card>
  );
};
