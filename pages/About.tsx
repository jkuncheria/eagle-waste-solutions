import React from 'react';
import AboutComponent from '../components/About';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Eagle Waste Solutions | Professional Waste Removal Company | Los Angeles"
        description="Learn about Eagle Waste Solutions LLC - your trusted waste removal partner in Los Angeles, San Fernando Valley & Orange County. Licensed, insured, and committed to eco-friendly disposal."
        canonicalPath="/about"
      />
      <AboutComponent />
    </>
  );
};

export default About;

