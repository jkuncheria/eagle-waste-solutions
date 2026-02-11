import React from 'react';
import ContactComponent from '../components/Contact';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Eagle Waste Solutions | Get a Free Estimate | Los Angeles Waste Removal"
        description="Contact Eagle Waste Solutions for a free waste removal estimate in Los Angeles, San Fernando Valley & Orange County. Call (323) 926-0140 or fill out our contact form."
        canonicalPath="/contact"
      />
      <ContactComponent />
    </>
  );
};

export default Contact;

