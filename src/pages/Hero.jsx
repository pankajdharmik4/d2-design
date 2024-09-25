import React, { useState } from 'react';
import { Button } from '../components';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <>
      <div id="home" className="relative w-full bg-repeat bg-center" style={{ backgroundImage: "url('/images/bg-img.png')" }}>
        {/* Navbar */}
        <nav className="w-full bg-transparent py-8 md:py-4 px-4 lg:px-16 ">
          <div className="container mx-auto flex items-center justify-between px-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/images/logo.png" alt="Logo" className="h-16 md:h-24 lg:h-32 w-auto" />
            </div>

            {/* Nav Links for Desktop */}
            <div className="hidden space-x-4 md:space-x-8 lg:flex">
              <a href="#home" className="text-white font-montserrat font-medium text-sm lg:text-lg">Why Invisalign</a>
              <a href="#about" className="text-white font-montserrat font-medium text-sm lg:text-lg">About Us</a>
              <a href="#faq" className="text-white font-montserrat font-medium text-sm lg:text-lg">FAQ</a>
              <a href="#testimonial" className="text-white font-montserrat font-medium text-sm lg:text-lg">Testimonial</a>
            </div>

            {/* Book Now Button for Desktop */}
            <Button
              size="xs"
              variant="fill"
              className="text-white min-w-[120px] lg:min-w-[200px] rounded-lg lg:rounded-[12px] border border-white px-4 lg:px-[34px] py-2 lg:py-[14px] font-montserrat font-medium invisible lg:visible"
            >
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-4">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navbar Links */}
        {isMenuOpen && (
          <div className="lg:hidden z-40 bg-white absolute top-16 left-0 right-0 shadow-lg p-4">
            {/* Mobile Menu Links */}
            <a href="#home" onClick={closeMenu} className="block font-montserrat font-medium text-black py-2">Why Invisalign</a>
            <a href="#about" onClick={closeMenu} className="block font-montserrat font-medium text-black py-2">About Us</a>
            <a href="#faq" onClick={closeMenu} className="block font-montserrat font-medium text-black py-2">FAQ</a>
            <a href="#testimonial" onClick={closeMenu} className="block font-montserrat font-medium text-black py-2">Testimonial</a>

            {/* Book Now Button for Mobile */}
            <Button
              size="xs"
              variant="fill"
              className="bg-[#13192D] text-white mt-4 w-full py-2 rounded-lg font-montserrat font-medium"
            >
              Book Now
            </Button>
          </div>
        )}

        {/* Hero Section */}
        <div className="relative w-full h-auto md:h-[500px] lg:h-[600px] flex flex-col-reverse md:flex-row">
          {/* Section 1: Text */}
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2 md:p-10 p-2 text-white">
            <h1 className="text-xl md:text-3xl lg:text-5xl mb-4 text-center lg:text-left mx-[5%] font-lato font-bold">
              Award-winning Invisalign Treatment In Staines
            </h1>
            <p className="text-xs md:text-lg mb-8 text-center lg:text-left mx-[5%] font-montserrat font-normal">
              Rothley Lodge Dental is one of the top providers of Invisalign in the country. We’ve had the privilege of providing Invisalign to patients from all across the U.K. Our reputation for excellence has led us to winning numerous awards, both locally and nationally.
            </p>
            <button className="bg-white text-xs md:text-sm lg:text-xl text-[#13192D] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start lg:mx-[5%] md:mb-0 mb-[10%]">
              Get Free Invisalign Consultation
            </button>
          </div>

          {/* Section 2: hero_2 Image */}
          <div className="relative md:hidden w-full flex flex-col items-center justify-center p-2">
            <img
              src="images/hero_2.png"
              alt="Center Image"
              className="h-[300px] md:h-[400px] lg:h-[600px] w-[80%] lg:mb-0"
            />
          </div>

          {/* Section 2: Image and Button */}
          <div className="relative invisible md:visible w-full lg:w-1/2 md:flex flex-col items-center justify-center p-6 lg:p-12">
            {/* Image taking 3/4 width */}
            <img
              src="images/hero.png"
              alt="Center Image"
              className="h-[300px] invisible md:visible absolute bottom-0 md:h-[400px] lg:h-[600px] w-[60%] lg:mb-0"
            />

            {/* Centered button */}
            <Button
              size="xs"
              variant="fill"
              className="text-white lg:text-xl md:text-sm hidden md:flex ml-[70%] w-[150px] lg:min-w-[200px] border border-white px-4 lg:px-[34px] py-4 lg:py-8 text-center font-montserrat font-medium rounded-lg md:rounded-[16px] lg:rounded-[20px]"
            >
              No 1 <br /> Top Best Clinics
            </Button>
          </div>
        </div>

        {/* Logos */}
        <div className="absolute bottom-[-5%] left-0 w-[90%] md:w-[60%] lg:w-[40%] flex justify-around items-center border border-white bg-white rounded-lg shadow-lg p-2 md:p-4 ml-4 lg:ml-[10%]">
          <img src="images/img_image_4.png" alt="Logo 1" className="h-6 md:h-8" />
          <img src="images/img_image_5.png" alt="Logo 2" className="h-6 md:h-8" />
          <img src="images/img_image_6.png" alt="Logo 3" className="h-6 md:h-8" />
          <img src="images/img_image_7.png" alt="Logo 4" className="h-6 md:h-8" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
