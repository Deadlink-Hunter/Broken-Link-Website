'use client';

import React from 'react';
import FeaturesCards from './components/FeaturesCards/FeaturesCards';

const AboutUs: React.FC = () => {
  return (
    <div style={{ padding: '2.5rem 1.25rem', maxWidth: '1200px', margin: '0 auto' }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>About Us</h1>
        <p style={{ fontSize: '1.125rem', color: '#555' }}>
          We are committed to delivering excellence and innovation in every project we undertake.
        </p>
      </section>

      <section>
        <FeaturesCards />
      </section>
    </div>
  );
};

export default AboutUs;
