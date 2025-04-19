import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Install this library first
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles


const AboutUs = () => {

  const images = [
    "images/d2-0.jpg",
    "images/d2-1.png",
    "images/d2-2.jpeg",
    "images/d2-3.png",
    // "images/brand-logo4.jpg",
    // "images/brand-logo5.jpg",
  ];


  return (
    <div id="about" className="relative bg-[#261FB3]">
      <div className=" py-16">
        <div className="container mx-auto px-6 md:px-[2%]">
          <div className="flex flex-col md:flex-row items-center">
            {/* Section 1 - Image */}
            <div className="w-full md:w-[40%] mb-8 md:mb-0 px-4">
              <img
                src="images/b2.jpg" // Replace with actual image path
                alt="About Us"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>

            {/* Section 2 - Title and Description */}
            <div className="w-full md:w-[60%] md:pl-12 text-center md:text-left px-4">
              <h2 className="text-2xl md:text-3xl text-white mb-6 font-lato font-bold">
              Why Choose Rothley Lodge Dental for Invisalign?
              </h2>
              <p className="text-white font-montserrat font-normal mb-4 text-sm md:text-md">
                {/* At Rothley Lodge Dental practice, we combine over a century of family-focused care with cutting-edge technology. As the oldest dental practice in Staines, we’ve built lasting relationships with generations of families.  */}
                Looking for a discreet way to straighten your teeth and achieve the smile you’ve always wanted? At Rothley Lodge Dental, the oldest dental practice in Staines-Upon-Thames, we combine decades of trusted care and award winning dentists with cutting-edge technology to deliver stunning results with Invisalign – the clear alternative to braces.
              </p>
              <p className="text-white font-montserrat font-normal text-xs mb-4 md:text-xs">
              <b>Generations of Expertise:</b> Trusted by families in Surrey and beyond for over 40 years, our practice has a proud heritage of delivering exceptional dental care with thousands of smiles enhanced.
              </p>
              <p className="text-white font-montserrat font-normal text-sm mb-4 md:text-xs">
              <b>Award-Winning Team:</b> Our experienced clinicians, including the UK’s Best Young Dentist and previous President of the British Academy of Cosmetic Dentistry (BACD), provide unparalleled expertise to help you achieve your dream smile.
              </p>
              <p className="text-white font-montserrat font-normal text-sm mb-4 md:text-xs">
              <b>Cutting Edge Technology:</b> Benefit from state-of-the-art tools like intra-oral scanners, 3D imaging and digital smile design for precise planning, augmented reality smile simulations and a comfortable, 5 Star Invisalign experience.
              </p>
              <p className="text-white font-montserrat font-normal text-sm mb-4 md:text-xs">
              <b>First Class Care:</b> We have treated everyone from supermodels and premiership footballers to celebrity musicians and actors but all of our patients get the VIP service - we design your treatment to fit your unique lifestyle and goals, ensuring a comfortable, efficient and predictable journey from start to finish. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-6 md:px-[10%] py-10 bg-[#261FB3]">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center bg-[#261FB3]">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[20%] h-24 bg-[#261FB3]"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="h-full max-w-full object-contain bg-[#261FB3]"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            showThumbs={false}
            infiniteLoop
            showStatus={false}
            autoPlay
            interval={3000}
            showArrows={false}
            showIndicators={false}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-20"
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="h-full max-w-full object-contain"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
