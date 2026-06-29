import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/UI/Button/Button';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { ROUTES } from '@/constants/routes.consts';

export const ErrorComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Card>
      <Typography variant='h2'>{t('error_boundary.title')}</Typography>
      <Typography>{t('error_boundary.description')}</Typography>
      <Typography>
        <strong>{t('error_boundary.what_you_can_try')}</strong>
      </Typography>
      <ul>
        <li>{t('error_boundary.suggestions.refresh')}</li>
        <li>{t('error_boundary.suggestions.clear_cache')}</li>
        <li>{t('error_boundary.suggestions.try_again')}</li>
      </ul>
      <Button onClick={() => navigate(ROUTES.HOME)}>{t('error_boundary.go_home')}</Button>
    </Card>
  );
};
