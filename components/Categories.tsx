import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const scrollTo = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="our-products" className="py-16 bg-gray-50 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">OUR SERVICES</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 px-2" style={{ minWidth: 'max-content' }}>
        {CATEGORIES.map((cat) => {
              const linkMap: Record<string, string> = {
                'hot-tub-removal': '/hot-tub-removal',
                'furniture-pickup-hauling': '/furniture-pickup-hauling',
                'appliance-disposal': '/appliance-disposal',
                'construction-debris-removal': '/construction-debris-removal',
                'garage-cleanouts': '/garage-cleanouts',
                'green-waste-disposal': '/green-waste-disposal',
                'hoarder-house-cleanouts': '/hoarder-house-cleanouts',
                'mattress-disposal': '/mattress-disposal',
                'business-office-cleanouts': '/business-office-cleanouts',
                'cardboard-disposal': '/cardboard-disposal'
              };

          const content = (
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white w-80 md:w-96 flex-shrink-0">
                  <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {cat.name}
                    </h3>
                    <div className="mt-2 flex items-center text-blue-900 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
            </div>
              );

          if (linkMap[cat.id]) {
            return (
              <Link 
                key={cat.id} 
                to={linkMap[cat.id]} 
                    className="block"
              >
                {content}
              </Link>
            );
          }

          return (
                <div key={cat.id}>
              {content}
          </div>
          );
        })}
          </div>
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
      
      <div className="mt-12 text-center">
          <Link 
            to="/residential-waste-removal"
            className="inline-block border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-2 px-6 rounded transition-colors"
          >
              VIEW ALL SERVICES
          </Link>
      </div>
    </section>
  );
};

export default Categories;