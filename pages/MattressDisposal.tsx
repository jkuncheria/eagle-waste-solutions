import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Recycle, ArrowRight, Phone, Zap, Bed } from 'lucide-react';
import SEO from '../components/SEO';

const MattressDisposal: React.FC = () => {
  const benefits = [
    {
      icon: <Bed className="w-8 h-8 text-blue-900" />,
      title: 'All Mattress Types',
      description: 'We remove all sizes and types—twin, full, queen, king, memory foam, box springs, and more.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'Same-Day Pickup',
      description: 'Need your old mattress gone today? We offer same-day pickup service in most areas.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Safe Removal',
      description: 'Our team carefully removes mattresses without damaging your walls, floors, or doorways.'
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-900" />,
      title: 'Eco-Friendly',
      description: 'Mattresses are recycled whenever possible—steel springs, foam, and fabric are all recyclable.'
    }
  ];

  const items = [
    'Twin and twin XL mattresses',
    'Full/double mattresses',
    'Queen mattresses',
    'King and California king mattresses',
    'Memory foam mattresses',
    'Box springs and foundations',
    'Adjustable bed bases',
    'Futon mattresses',
    'Crib and toddler mattresses',
    'Sofa bed mattresses'
  ];

  return (
    <>
      <SEO 
        title="Mattress Disposal Services | Los Angeles Mattress Removal | Eagle Waste Solutions"
        description="Professional mattress disposal in Los Angeles, San Fernando Valley & Orange County. All sizes, same-day pickup, eco-friendly recycling. Call (323) 926-0140."
        canonicalPath="/mattress-disposal"
      />
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">MATTRESS DISPOSAL</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Professional Mattress Disposal Services</h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Old mattresses are bulky, heavy, and difficult to dispose of properly. Our mattress removal service picks up your old mattress and ensures it's recycled or disposed of responsibly.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">Get Free Estimate<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <a href="tel:13239260140" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Us</a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl">
                <img src="/eaglewaste/348s-9.jpg" alt="Mattress Disposal Service" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Mattress Disposal Service?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional mattress removal is the easiest way to get rid of your old mattress responsibly.</p>
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
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Mattresses We Remove</h3>
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
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Rid of Your Old Mattress?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Contact us today for a free estimate. We'll pick up your mattress and dispose of it responsibly.</p>
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

export default MattressDisposal;
