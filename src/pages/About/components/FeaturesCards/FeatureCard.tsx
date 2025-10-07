import React from "react";
import { Card, Text, Title, Stack, useMantineTheme } from "@mantine/core";

interface FeatureCardProps {
title: string;
icon: React.ElementType;
description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon: Icon, description }) => {
const theme = useMantineTheme();

return (
<Card
shadow="sm"
radius="md"
p="lg"
withBorder
bg={theme.colorScheme === "dark" ? "dark.6" : "gray.0"}
> <Stack align="center" gap="sm"> <Icon size={32} color={theme.colors.blue[5]} /> <Title order={4} fw={600}>
{title} </Title> <Text c="dimmed" size="sm" ta="center">
{description} 
</Text> 
</Stack> 
</Card>
);
};

export default FeatureCard;
