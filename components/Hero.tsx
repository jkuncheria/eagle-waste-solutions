import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('our-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[650px] md:h-[750px] bg-gray-900 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 0%' }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Background Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0 z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          LOS ANGELES'S PREMIER<br />
          <span className="inline-block font-black">
            WASTE REMOVAL COMPANY
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-md font-light">
          Professional waste removal services for residential and commercial properties. Fast, reliable, and eco-friendly disposal solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={scrollToProducts}
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105"
          >
            VIEW OUR SERVICES
          </button>
          <Link 
            to="/contact"
            className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-center"
          >
            GET FREE ESTIMATE
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;