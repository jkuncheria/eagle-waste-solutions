import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Shield, Clock, ArrowRight, Phone, Trash2, Calendar } from 'lucide-react';

const DumpsterRental: React.FC = () => {
  const benefits = [
    {
      icon: <Package className="w-8 h-8 text-blue-900" />,
      title: 'Multiple Sizes Available',
      description: 'We offer dumpsters in various sizes to match your project needs, from small home cleanouts to large construction projects.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Flexible Rental Periods',
      description: 'Rent for a day, a week, or longer. We work with your schedule and project timeline.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Convenient Delivery & Pickup',
      description: 'We deliver the dumpster to your location and pick it up when you\'re done. Simple and hassle-free.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-900" />,
      title: 'Easy Scheduling',
      description: 'Schedule delivery and pickup times that work for you. Same-day delivery available in many cases.'
    }
  ];

  const sizes = [
    '10-yard dumpster - Perfect for small cleanouts and minor projects',
    '15-yard dumpster - Ideal for garage cleanouts and small renovations',
    '20-yard dumpster - Great for home renovations and medium projects',
    '30-yard dumpster - Suitable for large home projects and construction',
    '40-yard dumpster - Best for major construction and commercial projects'
  ];

  const uses = [
    'Home renovation and remodeling projects',
    'Construction and demolition debris',
    'Yard waste and landscaping cleanup',
    'Basement or garage cleanouts',
    'Roofing and siding replacement',
    'Commercial construction projects',
    'Estate cleanouts',
    'Moving and relocation cleanup'
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">DUMPSTER RENTAL</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Convenient Dumpster Rental Services
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Need a dumpster for your project? We offer reliable dumpster rental services with flexible sizes 
                and rental periods. Perfect for renovations, cleanouts, construction, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:13239260140" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl">
                <img 
                  src="/dumpster-rental-hero.png" 
                  alt="Professional Dumpster Rental Service" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist yet
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = "overflow-hidden h-[500px] md:h-[600px] bg-gray-200 rounded-2xl flex items-center justify-center";
                      parent.innerHTML = '<svg class="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Rent a Dumpster?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dumpster rental provides a convenient and cost-effective solution for managing waste during your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 transition-colors duration-300 border border-gray-100"
              >
                <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sizes List */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Dumpster Sizes Available
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {sizes.map((size, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Uses Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dumpster rentals are ideal for a wide variety of projects and cleanouts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uses.map((use, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300 border border-gray-100"
              >
                <CheckCircle className="w-6 h-6 text-blue-900 mx-auto mb-3" />
                <p className="text-gray-700 font-medium">{use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process & Care Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Rental Process</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Renting a dumpster is simple and straightforward. We handle delivery, pickup, and disposal.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Call or request a quote online</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Choose the right size for your project</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Schedule delivery at your convenience</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Fill it up and call for pickup when ready</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Know</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Important information about our dumpster rental service to help you plan your project.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Rental periods typically 7-14 days</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Weight limits apply based on dumpster size</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Placement location must be accessible</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Some items may require special handling</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Rent a Dumpster?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. We'll help you choose the right dumpster size for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:13239260140" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DumpsterRental;

