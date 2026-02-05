import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Shield, Recycle, ArrowRight, Phone, Trash2, Truck } from 'lucide-react';

const ResidentialWasteRemoval: React.FC = () => {
  const benefits = [
    {
      icon: <Home className="w-8 h-8 text-blue-900" />,
      title: 'Clean & Safe Home',
      description: 'Remove unwanted items and clutter from your home, creating a cleaner, safer living environment for you and your family.'
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-900" />,
      title: 'Eco-Friendly Disposal',
      description: 'We prioritize recycling and proper disposal methods, ensuring your waste is handled responsibly and sustainably.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Professional Service',
      description: 'Our experienced team handles all types of residential waste safely and efficiently, protecting your property.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
      title: 'Convenient & Fast',
      description: 'Schedule a pickup that works with your schedule. We arrive on time and complete the job quickly.'
    }
  ];

  const features = [
    'Furniture removal (sofas, mattresses, tables)',
    'Appliance disposal (refrigerators, washers, dryers)',
    'Yard waste and debris removal',
    'Construction and renovation debris',
    'Electronics and e-waste disposal',
    'General household junk and clutter',
    'Complete property cleanouts',
    'Same-day and scheduled pickups available'
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">RESIDENTIAL WASTE REMOVAL</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Professional Home Waste Removal Services
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Keep your home clean and clutter-free with our professional residential waste removal services. 
                From furniture and appliances to yard waste and general junk, we handle it all quickly and responsibly.
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
                  src="/residential-waste-removal-hero.png" 
                  alt="Professional Residential Waste Removal Service" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Professional Residential Waste Removal?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional waste removal offers convenience, safety, and peace of mind for your home.
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

        {/* Features List */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              What We Remove
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process & Care Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Professional Process</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We follow a streamlined process to ensure efficient and safe waste removal from your property.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Free estimate and consultation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Scheduled pickup at your convenience</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Professional removal and loading</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Eco-friendly disposal and cleanup</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Residential Services</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We handle all types of residential waste removal projects, big or small, with the same level of professionalism and care.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Single item removal</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Room-by-room cleanouts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete home cleanouts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Estate and moving cleanouts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Clear Out Your Home?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate. Let's make your home clean and clutter-free with professional residential waste removal.
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

export default ResidentialWasteRemoval;

