import { useTranslation } from 'react-i18next';
import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  const { t } = useTranslation();

  return (
    <>
      <Title className={classes.title} ta='center' mt={100}>
        {t('welcome_title')}
        <Text inherit variant='gradient' component='span' gradient={{ from: 'pink', to: 'yellow' }}>
          {t('welcome_highlight')}
        </Text>
      </Title>

      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        {t('welcome_description_before_link')}{' '}
        <Anchor href='https://mantine.dev/guides/vite/'>{t('welcome_link_text')}</Anchor>
        {t('welcome_description_after_link')}
      </Text>
    </>
  );
}
