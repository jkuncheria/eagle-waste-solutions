import React from 'react';
import { DIFFERENCE_FEATURES } from '../constants';

const Difference: React.FC = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">WHY CHOOSE US</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                We are locally owned and operated, and we're dedicated to delivering exceptional painting results that exceed your expectations.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DIFFERENCE_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="bg-red-50 p-4 rounded-full mb-6">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;