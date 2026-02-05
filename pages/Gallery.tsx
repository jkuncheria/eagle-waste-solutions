import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: '/eaglewaste/348s.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-2.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-3.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-4.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-5.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-6.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-7.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-8.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-9.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-10.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-11.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-12.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-13.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-14.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-15.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-16.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-17.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-18.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-19.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-20.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-21.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-22.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-23.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-24.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-25.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-26.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/348s-27.jpg', alt: 'Eagle Waste Solutions Work' },
    { src: '/eaglewaste/appliance-disposal1.jpg', alt: 'Appliance Disposal' },
    { src: '/eaglewaste/appliance-disposal2.jpg', alt: 'Appliance Disposal' },
    { src: '/eaglewaste/disposalbin.jpg', alt: 'Disposal Bin' },
    { src: '/eaglewaste/disposalbin2.jpg', alt: 'Disposal Bin' },
    { src: '/eaglewaste/furniture.jpg', alt: 'Furniture Removal' },
    { src: '/eaglewaste/furniture2.jpg', alt: 'Furniture Removal' },
    { src: '/eaglewaste/furniture3.jpg', alt: 'Furniture Removal' },
    { src: '/eaglewaste/truck.jpg', alt: 'Eagle Waste Truck' },
    { src: '/eaglewaste/truck2.jpg', alt: 'Eagle Waste Truck' },
    { src: '/eaglewaste/truck3.jpg', alt: 'Eagle Waste Truck' },
    { src: '/eaglewaste/truck4.jpg', alt: 'Eagle Waste Truck' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">OUR WORK</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Project Gallery</h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our completed projects and see the quality of work we deliver to our customers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-yellow-400 transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-yellow-400 transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-h-[95vh] max-w-[95vw] object-contain"
          />
          <div className="absolute bottom-4 text-white text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
