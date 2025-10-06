import React from "react";
import { FeatureCard } from "./FeatureCard";
import { icons } from "./Icons";
import "./FeaturesCards.css";

const features = [
  {
    icon: icons.target,
    title: "Precision Scanning",
    description: "Detect broken links across markdown files with pinpoint accuracy.",
  },
  {
    icon: icons.report,
    title: "Automated Reports",
    description: "Generate detailed reports with fix suggestions and priorities.",
  },
  {
    icon: icons.github,
    title: "GitHub Integration",
    description: "Integrate seamlessly with your GitHub workflow.",
  },
  {
    icon: icons.code,
    title: "Open Source",
    description: "Completely open source and community-driven.",
  },
];

export const FeaturesCards = () => (
  <div className="features-grid">
    {features.map((feature) => (
      <FeatureCard key={feature.title} {...feature} />
    ))}
  </div>
);
