import React from 'react';
import { Award, Heart, Shield, Users, Clock, Home, DollarSign, CheckCircle, Wrench } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: <DollarSign className="w-8 h-8 text-blue-900" />,
      title: 'Transparent Pricing',
      description: 'We provide upfront, transparent pricing with no hidden fees. Get a free estimate and know exactly what you\'ll pay before we start.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured professionals who handle your waste removal safely and protect your property throughout the process.'
    },
    {
      icon: <Home className="w-8 h-8 text-blue-900" />,
      title: 'Residential & Commercial',
      description: 'We serve both residential and commercial clients with the same level of professionalism and care, handling projects of any size.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: 'Eco-Friendly Disposal',
      description: 'We prioritize recycling and proper disposal methods whenever possible, ensuring your waste is handled responsibly and sustainably.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-900" />,
      title: '100% Satisfaction Guarantee',
      description: 'We guarantee your satisfaction. If you\'re not completely happy with our work, we\'ll make it right—no questions asked.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Same-Day Service',
      description: 'Need it gone today? We offer same-day removal for urgent jobs throughout Los Angeles County, San Fernando Valley, and Orange County.'
    }
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">GET TO KNOW US</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            All About Eagle Waste Solutions
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          {/* Tagline */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              PROFESSIONALISM. EXCELLENCE. RELIABILITY.
            </p>
          </div>

          {/* Main About Content */}
          <div className="max-w-4xl mx-auto text-left mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Eagle Waste Solutions LLC is a full-service waste removal company proudly serving Los Angeles County, San Fernando Valley, and Orange County. We specialize in construction debris removal, business office cleanouts, garage cleanouts, furniture hauling, appliance disposal, hot tub removal, and much more.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Whether you're a contractor needing construction debris hauled away, a business relocating offices, or a homeowner clearing out years of accumulated items, our experienced team handles it all. We arrive on time, work efficiently, and leave your space spotless.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With transparent upfront pricing, same-day service availability, and a commitment to eco-friendly disposal practices, Eagle Waste Solutions is the trusted choice for all your waste removal needs in Southern California.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Story Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-24 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Fast, Efficient, and Reliable
            </h3>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6">
              From construction sites to corporate offices to residential garages, Eagle Waste Solutions handles it all. Our team specializes in high-volume jobs like construction debris removal and commercial cleanouts, but we're equally equipped for smaller residential projects like furniture hauling and appliance disposal.
            </p>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              We're fully licensed and insured, offering same-day service when you need it most. Our commitment to recycling and responsible disposal means your waste is handled the right way. Call us at (323) 926-0140 for a free estimate—we guarantee you'll be satisfied with our work!
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Eagle Waste Solutions?</h3>
            <div className="space-y-4">
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Same-Day Service Available</h4>
                  <p className="text-gray-600">Need debris removed today? We offer same-day service for urgent jobs throughout Los Angeles County, San Fernando Valley, and Orange County.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Transparent Pricing</h4>
                  <p className="text-gray-600">No hidden fees or surprise charges. We provide upfront quotes so you know exactly what you're paying before we start.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Eco-Friendly Disposal</h4>
                  <p className="text-gray-600">We recycle and donate whenever possible. Your waste is sorted and disposed of responsibly to minimize environmental impact.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Licensed & Insured</h4>
                  <p className="text-gray-600">We're fully licensed and insured for your peace of mind. Your property is protected throughout the entire removal process.</p>
                </div>
              </div>
              <div className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">All Jobs, Big or Small</h4>
                  <p className="text-gray-600">From single-item pickups to full construction site cleanouts, we handle projects of any size with the same level of professionalism.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Feed Widget */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Follow Us on Instagram</h3>
          </div>
          <div className="elfsight-app-9880a697-8647-4850-8275-07d2cfc68687" data-elfsight-app-lazy></div>
        </div>

      </div>
    </section>
  );
};

export default About;


