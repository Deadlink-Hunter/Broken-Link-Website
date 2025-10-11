import React from "react";
import FeaturesCards from "./components/FeaturesCards/FeaturesCards";
import { Typography } from "@/components/UI/Typography/Typography";
import { Container } from "@mantine/core";

const AboutPage = () => {
  return (
    <Container size="lg" py="xl">
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Typography variant="primary" size="extraLarge">
          About Us
        </Typography>
        <Typography size="medium" style={{ opacity: 0.8 }}>
          Discover what makes our platform unique and powerful.
        </Typography>
      </section>

      <FeaturesCards />
    </Container>
  );
};

export default AboutPage;
