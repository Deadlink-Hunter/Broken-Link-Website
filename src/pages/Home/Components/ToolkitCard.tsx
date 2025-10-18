import { Card } from '../../../components/UI/Card/Card';
import { Typography } from '../../../components/UI/Typography/Typography';
import { Button, Group, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { ElementType } from 'react';

interface ToolkitCardProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  icon: ElementType;
}

export const ToolkitCard = ({ title, description, buttonText, link, icon: Icon }: ToolkitCardProps) => {
  const theme = useMantineTheme();
  return (
    <Card
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <Group align="flex-start" mb="md">
        <Icon size={36} color={theme.colors.blue[5]} />
        <div>
          <Typography variant="subtitle" mb="md" style={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </div>
      </Group>
      <Group justify="flex-start" mt="md">
        <Link to={link} style={{ textDecoration: 'none' }}>
          <Button
            variant="subtle"
            rightSection={<IconArrowRight size={14} />}
            style={{
              paddingLeft: 0,
              color: theme.colors.blue[5],
              '&:hover': {
                backgroundColor: theme.colors.blue[1],
                color: theme.colors.blue[8],
              },
            }}
          >
            {buttonText}
          </Button>
        </Link>
      </Group>
    </Card>
  );
};