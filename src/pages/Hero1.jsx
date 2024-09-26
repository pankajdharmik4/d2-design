import React from 'react';

const Hero1 = () => {
  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center bg-cover bg-center bg-[#13192d]" 
    // style={{ backgroundImage: "url('/images/full-hero-bg.png')" }}
    >
      {/* Section 1: Title */}
      <div className="w-full text-center text-white py-12 px-4">
        <h1 className="text-xl md:mx-0 mx-4 md:text-4xl lg:text-5xl font-bold font-lato">
        Generations of Dentists caring <br/> for Generations of Smile!
        </h1>
      </div>

      {/* Section 2: Full-Width Image */}
      <div className="w-full">
        <img
          src="/images/hero2.png"
          alt="Full Hero Image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero1;
