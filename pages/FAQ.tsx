import React from 'react';
import FAQComponent from '../components/FAQ';
import SEO from '../components/SEO';

const FAQ: React.FC = () => {
  // FAQ Schema for structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly will you respond to my inquiry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically respond to all inquiries within 24 hours. For urgent matters or immediate assistance, please call us directly at (323) 926-0140."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer free, no-obligation estimates for all waste removal projects. Our experts will assess your project and provide a detailed quote."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Los Angeles County, San Fernando Valley, and Orange County. Contact us to confirm if we service your specific area."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer same-day service for many projects, subject to availability. Contact us as early as possible to schedule same-day pickup."
        }
      },
      {
        "@type": "Question",
        "name": "What waste removal services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer hot tub removal, furniture pickup & hauling, appliance disposal, construction debris removal, garage cleanouts, green waste disposal, hoarder house cleanouts, mattress disposal, business office cleanouts, and cardboard disposal."
        }
      },
      {
        "@type": "Question",
        "name": "Do you recycle items?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We prioritize recycling and proper disposal methods whenever possible. We sort items and ensure they are disposed of responsibly."
        }
      },
      {
        "@type": "Question",
        "name": "How is pricing determined?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing is based on the volume and type of items being removed, project size, and location. We provide free estimates with transparent, upfront pricing—no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are fully licensed and insured. This protects both you and us during the waste removal process. We carry comprehensive insurance coverage for all our operations."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="FAQ | Waste Removal Questions Answered | Eagle Waste Solutions"
        description="Frequently asked questions about waste removal services in Los Angeles. Learn about pricing, scheduling, what we remove, and more. Eagle Waste Solutions."
        canonicalPath="/faq"
        schema={faqSchema}
      />
      <FAQComponent />
    </>
  );
};

export default FAQ;

