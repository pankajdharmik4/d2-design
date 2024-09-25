import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Assuming you're using react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

const beforeAfterImages = [
  'images/ba_1.png',
  'images/ba_2.png',
  'images/ba_3.png',
  'images/ba_4.png',
  'images/ba_5.png',
  'images/ba_6.png',
  // 'images/before4.jpeg',  
  // 'images/after4.jpeg',
];

const BeforeAfterSection = () => {
  return (
    <div id="gallery" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
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
              {/* <div className="absolute bottom-2 left-0 right-0 text-center font-semibold text-white rounded-b-lg py-1">
                {index % 2 === 0 ? 'Before' : 'After'}
              </div> */}
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
            className="overflow-hidden"
          >
            {beforeAfterImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Before & After ${index + 1}`}
                  className="w-full h-[300px] rounded-lg object-contain"
                />
                {/* <div className="absolute bottom-2 left-0 right-0 text-center font-semibold text-white rounded-b-lg py-1">
                  {index % 2 === 0 ? 'Before' : 'After'}
                </div> */}
              </div>
            ))}
          </Carousel>

          {/* Horizontal Scrollbar */}
          <div className="flex justify-center mt-4">
            {beforeAfterImages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === 0 ? 'bg-gray-800' : 'bg-gray-400'
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
