import React from 'react';

const AboutUs = () => {
  return (
    <div id="about" className="bg-[#13192d] py-16">
      <div className="container mx-auto px-6 md:px-[10%]">
        <div className="flex flex-col md:flex-row items-center">
          {/* Section 1 - Image */}
          <div className="w-full md:w-[40%] mb-8 md:mb-0 px-4">
            <img
              src="images/aboutus.png" // Replace with actual image path
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
            At Rothley Lodge Dental Surgery, we combine over a century of family-focused care with cutting-edge technology. As the oldest dental practice in Staines, we’ve built lasting relationships with generations of families. Our experienced team, many with over a decade of service, provides a range of modern treatments, including cosmetic and implant dentistry.
            </p>
            <p className="text-white font-montserrat font-normal">
            Recognized for excellence, including awards like Best Young Dentist in the UK, we are committed to delivering top-tier care using advanced tools such as CAD-CAM CEREC crowns and 3D imaging for a comfortable, efficient patient experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
