import React from "react";
import "./FeatureCard.css";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <div className="feature-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);
