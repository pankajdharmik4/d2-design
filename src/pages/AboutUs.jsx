import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Install this library first
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles


const AboutUs = () => {

  const images = [
    "images/d2-0.jpg",
    "images/d2-1.png",
    "images/d2-2.jpeg",
    "images/d2-3.png",
  ];


  return (
    <div id="about" className="relative bg-[#3A59D1]">
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
                Empowering Clinics & Hospitals with Smart Digital Healthcare – About medi-core
              </h2>
              <p className="text-white font-montserrat font-normal mb-4 text-sm md:text-md">
                At <b>medi-core</b>, we believe in empowering healthcare professionals through smart, efficient, and reliable digital tools. We are a passionate team of developers and healthcare enthusiasts who saw the daily struggles of doctors and clinic staff in managing patient records, appointments, and operations.
              </p>
              <p className="text-white font-montserrat font-normal text-sm mb-4 md:text-xs">
                <b>Purpose-Driven Innovation:</b> Our goal is to simplify clinic and hospital management through a SaaS platform tailored to the real-world needs of healthcare professionals.
              </p>
              <p className="text-white font-montserrat font-normal text-sm mb-4 md:text-xs">
                <b>Doctor-Centric Design:</b> Built with direct input from medical practitioners, medi-core helps streamline daily tasks like patient tracking, appointments, medical records, and billing — all in one secure place.
              </p>
              <p className="text-white font-montserrat font-normal text-sm mb-4 md:text-xs">
                <b>Secure & Scalable:</b> Whether you're a local clinic or a growing healthcare facility, medi-core grows with you — keeping your data safe and your workflow smooth.
              </p>
              <p className="text-white font-montserrat font-normal text-sm mb-4 md:text-xs">
                <b>Advanced Analytics & Insights:</b> Make informed decisions with powerful dashboards and reporting tools that offer real-time visibility into patient data, appointment trends, and operational performance.
              </p>
              <p className="text-white font-montserrat font-normal text-sm mb-4 md:text-xs">
                <b>Your Digital Healthcare Partner:</b> With real-time insights and easy accessibility, medi-core empowers you to focus more on your patients and less on paperwork.
              </p>
            </div>


          </div>
        </div>
      </div>
      <div className="mx-auto px-6 md:px-[10%] py-10 bg-[#3A59D1]">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center bg-[#3A59D1]">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[20%] h-24 bg-[#3A59D1]"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="h-full max-w-full object-contain bg-[#3A59D1]"
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
