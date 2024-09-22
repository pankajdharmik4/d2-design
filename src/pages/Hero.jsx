import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import { Button,Img } from '../components';
const HeroSection = () => {
  return (
    <>
      <Helmet>
        <title>Award-Winning Invisalign Treatment in Staines | Rothley Lodge Dental</title>
        <meta
          name="description"
          content="Discover top Invisalign treatment at Rothley Lodge Dental, Staines. Enjoy a free consultation, award-winning service, and a confident smile with our custom aligners. Book now!"
        />
      </Helmet>
      <div className="relative w-full bg-[url('images/bg-img.png')] bg-cover bg-center">
        {/* Navbar */}
        <nav className="w-full bg-transparent py-4 px-16">
          <div className="container mx-auto flex items-center justify-between px-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/public/images/logo.png" alt="Logo" className="h-32 w-auto" />
            </div>

            {/* Nav Links */}
            <div className="hidden space-x-8 lg:flex">
              <a href="#home" className="text-white text-lg">Home</a>
              <a href="#about" className="text-white text-lg">About</a>
              <a href="#services" className="text-white text-lg">Services</a>
              <a href="#pricing" className="text-white text-lg">Pricing</a>
              <a href="#contact" className="text-white text-lg">Contact</a>
            </div>

            {/* Book Now Button */}
            <Button
              size="xs"
              variant="fill"
              className="mr-[140px] text-white min-w-[200px] rounded-[12px] border-[1.335px] border-solid border-white-a700 px-[34px] font-medium md:mr-0 sm:px-4 "
            >
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button className="text-white focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative w-full h-[600px]">
          {/* Left Section */}
        <div className="absolute inset-y-0 left-0 w-2/4 flex items-center justify-center ml-[10%]">
          <div className="text-white p-8">
            <h1 className="text-5xl font-bold mb-4">
              Award-winning Invisalign Treatment In Staines
            </h1>
            <p className="text-lg mb-8">
              Rothley Lodge Dental is one of the top providers of Invisalign in the country. We’ve had the privilege of providing Invisalign to patients from all across the U.K. Our reputation for excellence has led us to winning numerous awards, both locally and nationally.
            </p>
            <button className="bg-white text-blue-900 font-bold py-3 px-6 rounded-md">
              Get Free Invisalign Consultation
            </button>
          </div>
        </div>

  {/* Image in the center */}
  <div className="absolute bottom-0 ml-[20%] left-2/4 z-20 transform -translate-x-1/2">
    <img
      src="images/hero.png"
      alt="Center Image"
      className="h-[600px] w-auto"
    />
  </div>

  {/* Right Section */}
  <div className="absolute inset-y-0 right-0 w-1/4 bg-white flex items-center justify-center">
    <div className="flex flex-col items-center p-4 rounded-lg">
    <Button
      size="xs"
      variant="fill"
      className="mr-[140px] text-white min-w-[200px] rounded-[12px] border-[1.335px] border-solid border-white-a700 px-[34px] font-medium md:mr-0 sm:px-4 py-8"
    >
      No 1 
      <br /> Top Best Clinics
    </Button>

    </div>
  </div>
</div>

<div className="absolute bottom-[-5%] left-0 w-[40%] ml-[10%] flex justify-around items-center  border border-white bg-white rounded-lg shadow-lg p-4">
      <img src="images/img_image_4.png" alt="Logo 1" className="h-8" />
      <img src="images/img_image_5.png" alt="Logo 2" className="h-8" />
      <img src="images/img_image_6.png" alt="Logo 3" className="h-8" />
      <img src="images/img_image_7.png" alt="Logo 4" className="h-8" />
    </div>
      </div>
      
    </>
  );
};

export default HeroSection;