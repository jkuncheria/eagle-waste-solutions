import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Recycle, ArrowRight, Phone, Zap, Warehouse } from 'lucide-react';
import SEO from '../components/SEO';

const GarageCleanouts: React.FC = () => {
  const benefits = [
    {
      icon: <Warehouse className="w-8 h-8 text-blue-900" />,
      title: 'Complete Cleanouts',
      description: 'We clear out everything—from old tools and equipment to forgotten boxes and clutter.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'Fast Service',
      description: 'Most garage cleanouts are completed in just a few hours, giving you back your space quickly.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Safe Handling',
      description: 'We safely handle heavy items, chemicals, and hazardous materials found in garages.'
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-900" />,
      title: 'Sort & Recycle',
      description: 'We sort through items, donate usable goods, and recycle materials whenever possible.'
    }
  ];

  const items = [
    'Old tools and equipment',
    'Broken lawn mowers and yard equipment',
    'Paint cans and chemicals',
    'Sports equipment',
    'Holiday decorations',
    'Old furniture and storage items',
    'Automotive parts and tires',
    'Boxes and general clutter',
    'Shelving and storage units',
    'Anything else taking up space'
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Garage Cleanout",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eagle Waste Solutions LLC",
      "telephone": "+1-323-926-0140"
    },
    "areaServed": ["Los Angeles", "San Fernando Valley", "Orange County"],
    "description": "Professional garage cleanout services. We remove tools, equipment, clutter, and everything else taking up space in your garage."
  };

  return (
    <>
      <SEO 
        title="Garage Cleanout Services | Los Angeles Garage Junk Removal | Eagle Waste Solutions"
        description="Professional garage cleanout services in Los Angeles, San Fernando Valley & Orange County. Tools, equipment, clutter removal. Fast service. Call (323) 926-0140."
        canonicalPath="/garage-cleanouts"
        schema={serviceSchema}
      />
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">GARAGE CLEANOUTS</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Professional Garage Cleanout Services</h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Reclaim your garage space! Our professional garage cleanout service removes years of accumulated clutter, junk, and unwanted items so you can finally park your car or create a functional workspace.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">Get Free Estimate<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <a href="tel:13239260140" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Us</a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl">
                <img src="/eaglewaste/348s-6.jpg" alt="Garage Cleanout Service" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Garage Cleanout Service?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional garage cleanouts save you time and the hassle of dealing with years of accumulated stuff.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">What We Remove</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Reclaim Your Garage?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Contact us today for a free estimate. We'll clear out your garage so you can use it again.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">Get Free Estimate<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
            <a href="tel:13239260140" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Us</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default GarageCleanouts;
