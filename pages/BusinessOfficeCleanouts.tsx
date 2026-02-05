import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Recycle, ArrowRight, Phone, Zap, Building2 } from 'lucide-react';

const BusinessOfficeCleanouts: React.FC = () => {
  const benefits = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      title: 'Commercial Experts',
      description: 'We specialize in office and business cleanouts, from small offices to large corporate spaces.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'Minimal Disruption',
      description: 'We work around your schedule—evenings and weekends available to minimize business disruption.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Secure Disposal',
      description: 'Confidential documents and sensitive materials are handled securely and disposed of properly.'
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-900" />,
      title: 'E-Waste Recycling',
      description: 'Electronics and office equipment are recycled responsibly following all regulations.'
    }
  ];

  const items = [
    'Office furniture (desks, chairs, cubicles)',
    'Filing cabinets and storage units',
    'Computers and electronics',
    'Printers and copiers',
    'Office supplies and equipment',
    'Break room appliances',
    'Confidential documents (shredding available)',
    'Warehouse and storage items',
    'Retail fixtures and displays',
    'Complete office cleanouts'
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">BUSINESS OFFICE CLEANOUTS</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Business & Office Cleanout Services</h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Moving offices, downsizing, or closing a business? Our commercial cleanout service removes office furniture, equipment, and supplies quickly and professionally with minimal disruption to your operations.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">Get Free Estimate<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <a href="tel:13239260140" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Us</a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl">
                <img src="/eaglewaste/disposalbin.jpg" alt="Business Office Cleanout Service" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Business Cleanout Service?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional office cleanouts save time and ensure proper disposal of business assets.</p>
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
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need a Business or Office Cleanout?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Contact us today for a free estimate. We'll clear out your office space quickly and professionally.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">Get Free Estimate<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
            <a href="tel:13239260140" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOfficeCleanouts;
