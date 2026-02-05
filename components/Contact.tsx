import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, ChevronDown, Clock, Facebook, Instagram, Twitter, Youtube, Calendar, Users } from 'lucide-react';

interface ContactProps {
  simplified?: boolean;
}

const Contact: React.FC<ContactProps> = ({ simplified = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const inquiryOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request a Quote' },
    { value: 'residential', label: 'Residential Waste Removal' },
    { value: 'commercial', label: 'Commercial Waste Removal' },
    { value: 'junk', label: 'Junk Removal' },
    { value: 'cleanouts', label: 'Cleanouts' },
    { value: 'other', label: 'Other' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectOption = (value: string) => {
    setFormData({
      ...formData,
      inquiryType: value
    });
    setIsDropdownOpen(false);
  };

  const selectedOption = inquiryOptions.find(opt => opt.value === formData.inquiryType) || inquiryOptions[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: ''
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4 md:px-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Let's Talk About Your Waste Removal Needs
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions? Need a quote? Our waste removal experts are here to help you with professional, eco-friendly disposal solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach out to us through any of these channels. We're here to help you every step of the way.
              </p>

              <div className="space-y-6">
                <a href="tel:13239260140" className="group flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">Phone</h4>
                    <p className="text-gray-700 font-semibold text-lg">(323) 926-0140</p>
                    <p className="text-sm text-gray-500 mt-1">Call for Free Estimate</p>
                  </div>
                </a>

                <a href="mailto:eaglewastesolutionsllc@gmail.com" className="group flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-md flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">Email</h4>
                    <p className="text-gray-700 font-semibold break-words text-sm sm:text-base">eaglewastesolutionsllc@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">Service Area</h4>
                    <p className="text-gray-700 font-semibold">Los Angeles County</p>
                    <p className="text-gray-700 font-semibold">& Orange County</p>
                    <p className="text-sm text-blue-900 mt-1 font-semibold group-hover:underline">
                      Contact Us →
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10 transition-all bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10 transition-all bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10 transition-all bg-gray-50 focus:bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <label htmlFor="inquiryType" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="hidden"
                    name="inquiryType"
                    value={formData.inquiryType}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10 transition-all bg-gray-50 hover:bg-white font-medium text-left flex items-center justify-between group"
                  >
                    <span className={formData.inquiryType ? 'text-gray-900' : 'text-gray-400'}>
                      {selectedOption.label}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl overflow-hidden">
                      {inquiryOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleSelectOption(option.value)}
                          className={`w-full px-5 py-3.5 text-left hover:bg-blue-50 transition-colors ${
                            formData.inquiryType === option.value
                              ? 'bg-blue-50 text-blue-900 font-semibold'
                              : 'text-gray-900'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10 transition-all resize-none bg-gray-50 focus:bg-white"
                  placeholder="Tell us about your waste removal needs, questions, or how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* Store Hours & Location Section - Only show on full Contact page */}
        {!simplified && (
          <>
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-50 p-3 rounded-xl mr-4">
                <Clock className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Store Hours</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <p className="font-semibold text-blue-900">Available</p>
                <p className="text-gray-700">By Appointment</p>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-semibold text-gray-900">Monday - Sunday</span>
                <span className="text-gray-600">By Appointment</span>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic">We work around your schedule. Call for availability.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-50 p-3 rounded-xl mr-4">
                <MapPin className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Service Area</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-2">We Serve</p>
                <p className="text-gray-900 font-semibold">Los Angeles County</p>
                <p className="text-gray-900 font-semibold">& Orange County</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-600 mb-4">
                  We provide professional waste removal services throughout Los Angeles County and Orange County. Contact us to see if we service your area.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

            {/* Social Media & Additional Info */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
                <div className="bg-white bg-opacity-20 p-4 rounded-full inline-flex mb-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Schedule a Consultation</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Book a free consultation to discuss your waste removal needs and get expert recommendations.
                </p>
                <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-2 px-6 rounded-lg transition-all">
                  Book Now
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
                <div className="bg-white bg-opacity-20 p-4 rounded-full inline-flex mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Join Our Community</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Follow us on social media for waste removal tips, special offers, and eco-friendly disposal information.
                </p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-all">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
                <div className="bg-white bg-opacity-20 p-4 rounded-full inline-flex mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Need Immediate Help?</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Call us directly for urgent questions or to speak with a waste removal specialist right away.
                </p>
                <a href="tel:13239260140" className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-2 px-6 rounded-lg transition-all inline-block">
                  (323) 926-0140
                </a>
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default Contact;

