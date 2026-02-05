import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Recycle, ArrowRight, Phone, Zap, Package } from 'lucide-react';

const CardboardDisposal: React.FC = () => {
  const benefits = [
    {
      icon: <Package className="w-8 h-8 text-blue-900" />,
      title: 'Bulk Pickup',
      description: 'We handle large volumes of cardboard from businesses, warehouses, and residential moves.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'Scheduled Service',
      description: 'Set up regular pickups or call for one-time removal—we work around your schedule.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Clean Removal',
      description: 'We collect, load, and haul away all cardboard, leaving your space clean and organized.'
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-900" />,
      title: '100% Recycled',
      description: 'All cardboard we collect is taken directly to recycling facilities—nothing goes to landfill.'
    }
  ];

  const items = [
    'Moving boxes',
    'Shipping boxes and packaging',
    'Retail packaging',
    'Appliance boxes',
    'Furniture boxes',
    'Industrial cardboard',
    'Corrugated cardboard',
    'Cardboard pallets',
    'Display boxes and stands',
    'Any cardboard materials'
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">CARDBOARD DISPOSAL</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Cardboard Disposal & Recycling Services</h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Drowning in cardboard after a move or shipment? Our cardboard disposal service picks up and recycles all your cardboard waste, keeping it out of landfills and your space clutter-free.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">Get Free Estimate<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <a href="tel:13239260140" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Us</a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl">
                <img src="/eaglewaste/disposalbin2.jpg" alt="Cardboard Disposal Service" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Cardboard Disposal Service?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional cardboard removal is fast, eco-friendly, and keeps your space organized.</p>
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
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Cardboard We Collect</h3>
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
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need Cardboard Removed?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Contact us today for a free estimate. We'll pick up your cardboard and ensure it's recycled properly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">Get Free Estimate<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
            <a href="tel:13239260140" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardboardDisposal;
