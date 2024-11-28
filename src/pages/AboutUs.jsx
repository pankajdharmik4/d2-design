import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Install this library first
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles


const AboutUs = () => {

  const images = [
    "images/Denplan-Holder-Logo.png",
    "images/brand-logo1.jpg",
    "images/brand-logo2.jpg",
    "images/brand-logo3.jpg",
    "images/brand-logo4.jpg",
    "images/brand-logo5.jpg",
  ];


  return (
    <div id="about" className="relative">
      <div className="bg-[#13192d] py-16">
        <div className="container mx-auto px-6 md:px-[10%]">
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
              <h2 className="text-3xl md:text-4xl text-white mb-6 font-lato font-bold">
                Why Choose Invisalign with Us?
              </h2>
              <p className="text-white font-montserrat font-normal mb-4">
                {/* At Rothley Lodge Dental practice, we combine over a century of family-focused care with cutting-edge technology. As the oldest dental practice in Staines, we’ve built lasting relationships with generations of families.  */}
                Rothley Lodge is the oldest practice in Staines and has been responsible for looking after the dental welfare
                of families going back many generations within the Staines area and beyond.Our experienced team, many with over a decade of service, provides a range of modern treatments, including cosmetic and implant dentistry.
              </p>
              <p className="text-white font-montserrat font-normal">
                Recognised for excellence, including awards such as Best Young Dentist in the UK, we are committed to delivering top-tier care using advanced tools such as CAD-CAM CEREC crowns and 3D imaging for a comfortable, efficient patient experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-6 md:px-[10%] my-10">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center gap-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[18%] h-20"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="h-full max-w-full object-contain "
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
