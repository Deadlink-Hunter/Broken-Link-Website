import { Avatar, Rating, Stack, Text, Title } from '@mantine/core';
import { Card } from '@/components/UI/Card/Card';
import { testimonialCardStyles } from './styles';
import type { FeedbackCardProps } from './types';

export function FeedbackCard({ name, role, rating, comment, date, avatarUrl }: FeedbackCardProps) {
  return (
    <Card style={testimonialCardStyles.default}>
      <Stack align='center' gap='lg'>
        <Avatar
          src={avatarUrl ?? null}
          size={100}
          radius='xl'
          color='cyan'
          style={{ border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        >
          {name.charAt(0).toUpperCase()}
        </Avatar>

        <Stack gap={4} align='center'>
          <Title order={3} fw={700}>
            {name}
          </Title>
          {role && (
            <Text size='sm' c='dimmed'>
              {role}
            </Text>
          )}
        </Stack>

        <Rating value={rating} fractions={1} readOnly size='xl' color='yellow' />

        <Text size='md' lh={1.7} c='dark.8' px={{ base: 'md', sm: 'xl' }}>
          {comment}
        </Text>

        {date && (
          <Text size='xs' c='dimmed'>
            {new Date(date).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        )}
      </Stack>
    </Card>
  );
}
