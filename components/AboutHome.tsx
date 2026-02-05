import React from 'react';
import { Heart, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHome: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ width: '450px' }}>
              <img 
                src="/fulleagle.png" 
                alt="Professional Waste Removal Services" 
                className="w-full h-auto object-cover"
                style={{ minWidth: '450px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">GET TO KNOW US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Eagle Waste Solutions LLC is your trusted partner for professional waste removal services in Los Angeles County and Orange County. From construction debris removal to office cleanouts and garage cleanups, we handle jobs of all sizes with speed and efficiency.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We specialize in construction debris removal, business office cleanouts, garage cleanouts, furniture hauling, appliance disposal, and more. Our experienced team arrives on time, works quickly, and leaves your space clean—guaranteed.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With transparent pricing, same-day service availability, and eco-friendly disposal practices, Eagle Waste Solutions is the dependable choice for residential and commercial customers throughout Southern California.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-blue-900 mb-2">Eco-Friendly Disposal</h3>
              <p className="text-gray-700 text-sm">
                We prioritize recycling and proper disposal methods whenever possible, ensuring your waste is handled responsibly and sustainably.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Learn More About Us
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-lg transition-all text-center"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;

