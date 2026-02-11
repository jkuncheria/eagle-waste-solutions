import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Difference from '../components/Difference';
import AboutHome from '../components/AboutHome';
import Inspiration from '../components/Inspiration';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Eagle Waste Solutions LLC | Waste Removal Services | Los Angeles, San Fernando Valley & Orange County"
        description="Professional waste removal services in Los Angeles County, San Fernando Valley, and Orange County. Construction debris removal, office cleanouts, garage cleanouts, furniture hauling, and more. Call (323) 926-0140 for a free estimate."
        canonicalPath="/"
      />
      <Hero />
      <Contact simplified={true} />
      <Categories />
      <AboutHome />
      <Difference />
      {/* <Inspiration /> */}
      <Testimonials />
      
      {/* Bottom CTA Banner */}
      <section className="bg-blue-900 py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. We offer fast, reliable waste removal services throughout Los Angeles, San Fernando Valley, and Orange County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-center"
            >
              GET FREE QUOTE
            </Link>
            <a 
              href="tel:13239260140"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-center"
            >
              CALL US
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

