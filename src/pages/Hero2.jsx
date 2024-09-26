import React from 'react';
import { Button } from '../components'; // Adjust the import according to your Button component location

const Hero2 = () => {
  return (
    <div className="relative flex flex-col md:flex-row w-full bg-[#ECEBF0]">
      {/* Section 1: Image */}
      <div className="w-full md:w-3/5 relative">
        <img
          src="/images/hero3.png" // Change to your image source
          alt="Hero Image"
          className="w-full h-auto"
        />
      </div>

      {/* Section 2: Description */}
      <div className="w-full invisible md:visible flex flex-col justify-center items-end p-6 md:p-12 lg:p-16  md:absolute md:top-0 md:right-[5%]">
        <h2 className="text-xl md:text-3xl lg:text-4xl  font-lato font-bold text-black mb-4">
            Generations of Dentists caring <br/> for Generations of Smile!
        </h2>
      </div>
    </div>
  );
};

export default Hero2;
