import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-4 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4 group">
              <img 
                src="/eagle-logo.png" 
                alt="Eagle Waste Solutions" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Serving Los Angeles County<br />
              & Orange County
            </p>
            <div className="text-sm text-gray-600 mb-4 space-y-1">
              <p><a href="tel:13239260140" className="hover:text-blue-900">(323) 926-0140</a> Office</p>
              <p><a href="mailto:eaglewastesolutionsllc@gmail.com" className="hover:text-blue-900">eaglewastesolutionsllc@gmail.com</a></p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61581473744592#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-900 transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.instagram.com/eaglewastesolutionsllc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="https://www.tiktok.com/@eaglewastesolutionsllc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/construction-debris-removal" onClick={scrollToTop} className="hover:text-blue-900">
                  Construction Debris Removal
                </Link>
              </li>
              <li>
                <Link to="/business-office-cleanouts" onClick={scrollToTop} className="hover:text-blue-900">
                  Office Cleanouts
                </Link>
              </li>
              <li>
                <Link to="/garage-cleanouts" onClick={scrollToTop} className="hover:text-blue-900">
                  Garage Cleanouts
                </Link>
              </li>
              <li>
                <Link to="/hot-tub-removal" onClick={scrollToTop} className="hover:text-blue-900">
                  Hot Tub Removal
                </Link>
              </li>
              <li>
                <Link to="/furniture-pickup-hauling" onClick={scrollToTop} className="hover:text-blue-900">
                  Furniture Hauling
                </Link>
              </li>
              <li>
                <Link to="/appliance-disposal" onClick={scrollToTop} className="hover:text-blue-900">
                  Appliance Disposal
                </Link>
              </li>
              <li>
                <Link to="/green-waste-disposal" onClick={scrollToTop} className="hover:text-blue-900">
                  Green Waste Disposal
                </Link>
              </li>
              <li>
                <Link to="/mattress-disposal" onClick={scrollToTop} className="hover:text-blue-900">
                  Mattress Disposal
                </Link>
              </li>
              <li>
                <Link to="/hoarder-house-cleanouts" onClick={scrollToTop} className="hover:text-blue-900">
                  Hoarder House Cleanouts
                </Link>
              </li>
              <li>
                <Link to="/cardboard-disposal" onClick={scrollToTop} className="hover:text-blue-900">
                  Cardboard Disposal
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-blue-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="hover:text-blue-900">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-blue-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-blue-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

           {/* Hours */}
           <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Hours</h4>
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900">Available</p>
              <p>Monday - Sunday</p>
              <div className="pt-2 space-y-1">
                <p>By Appointment</p>
                <p className="text-xs text-gray-500 mt-2">We work around your schedule. Call for availability.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 Eagle Waste Solutions LLC. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;