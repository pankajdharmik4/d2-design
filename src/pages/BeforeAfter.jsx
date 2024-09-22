import React from 'react';

const beforeAfterImages = [
  'images/before1.png',
  'images/after1.png',
  'images/before1.png',
  'images/after1.png',
  'images/before1.png',
  'images/after1.png',
  'images/before1.png',
  'images/after1.png',
];

const BeforeAfterSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Before & After Invisalign Treatment
        </h2>

        {/* Grid for Before & After Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-[10%]">
          {beforeAfterImages.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`Before & After ${index + 1}`} className="w-full h-auto rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 text-center font-semibold text-white rounded-b-lg py-1">
                {index % 2 === 0 ? 'Before' : 'After'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
