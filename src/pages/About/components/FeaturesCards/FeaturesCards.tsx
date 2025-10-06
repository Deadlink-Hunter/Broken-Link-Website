import React from "react";
import { Card, SimpleGrid, Group } from "@mantine/core";
import { Typography } from "@/components/UI/Typography/Typography";
import { icons } from "./Icons";

const features = [
  {
    icon: icons.target,
    title: "Precision Scanning",
    description: "Advanced algorithms detect broken links across markdown files, documentation, and code comments with pinpoint accuracy.",
  },
  {
    icon: icons.report,
    title: "Automated Reports",
    description: "Generate comprehensive reports with detailed breakdowns, fix suggestions, and priority rankings for efficient maintenance.",
  },
  {
    icon: icons.github,
    title: "GitHub Integration",
    description: "Seamlessly integrate with your GitHub workflow through Actions, webhooks, and automated pull request creation.",
  },
  {
    icon: icons.code,
    title: "Open Source",
    description: "Completely open source and community-driven. Contribute, customize, and extend to fit your project’s needs.",
  },
];

const FeaturesCards: React.FC = () => {
  return (
    <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: 980, cols: 1 }]}>
      {features.map((feature, id) => (
        <Card key={id} withBorder radius="md" p="lg">
          <Group align="flex-start" spacing="md" noWrap>
            {feature.icon}
            <div>
              <Typography variant="primary" size="large" style={{ fontWeight: 600 }}>
                {feature.title}
              </Typography>
              <Typography size="small" style={{ marginTop: 8 }}>
                {feature.description}
              </Typography>
            </div>
          </Group>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default FeaturesCards;
