import React from "react";
import { SimpleGrid } from "@mantine/core";
import FeatureCard from "./FeatureCard";
import { icons } from "./Icons";

const features = [
{
id: "precision",
icon: icons.target,
title: "Precision Scanning",
description:
"Detects broken links and errors in documentation with pinpoint accuracy using advanced algorithms.",
},
{
id: "reports",
icon: icons.report,
title: "Automated Reports",
description:
"Generates detailed analytics and recommendations for quick fixes and optimized maintenance.",
},
{
id: "github",
icon: icons.github,
title: "GitHub Integration",
description:
"Easily integrates with your GitHub workflow through actions, webhooks, and automated PR creation.",
},
{
id: "opensource",
icon: icons.code,
title: "Open Source",
description:
"Fully open source and community-driven. Extend, customize, and contribute freely.",
},
];

const FeaturesCards: React.FC = () => {
return (
<SimpleGrid
cols={{ base: 1, sm: 2 }}
spacing="lg"
>
{features.map((feature) => ( <FeatureCard
       key={feature.id}
       icon={feature.icon}
       title={feature.title}
       description={feature.description}
     />
))} </SimpleGrid>
);
};

export default FeaturesCards;
