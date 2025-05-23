import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel'; // Assuming you're using react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

const beforeAfterImages = [
  'images/ba111.jpeg',
  'images/ba222.jpeg',
  'images/ba333.jpeg',
  'images/111.jpeg',
  'images/112.jpeg',
  'images/113.jpeg',
];

const BeforeAfterSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="gallery" className="bg-[#AFDDFF] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1B56FD] text-center mb-10">
          Before & After Invisalign Treatment
        </h2>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 mx-[10%]">
          {beforeAfterImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Before & After ${index + 1}`}
                className="w-full h-[300px] rounded-lg object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <Carousel
            showThumbs={false}
            showIndicators={false}
            infiniteLoop
            showStatus={false}
            onChange={(index) => setActiveIndex(index)} // Update active index on slide change
            className="overflow-hidden"
          >
            {beforeAfterImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Before & After ${index + 1}`}
                  className="w-full h-[300px] rounded-lg object-contain"
                />
              </div>
            ))}
          </Carousel>

          {/* Horizontal Scrollbar */}
          <div className="flex justify-center mt-4">
            {beforeAfterImages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
