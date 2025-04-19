import React from 'react';
import { Button } from '../components'; // Adjust the import path based on your folder structure
import Modal from './BookingModal'; // Adjust the import path based on your folder structure
import Navbar from './Navbar';

const Hero3 = ({ openModal }) => {
  return (
    <>
    <div className="relative w-full md:h-screen  md:mb-2 bg-cover bg-center z-20" style={{ backgroundImage: "url('/images/bg-img2.png')" }}>
      {/* Mobile View */}
      <div className="px-8 md:hidden relative w-full h-full flex flex-col items-center justify-center text-center bg-[#3A59D1] p-4">
        <img
          src="/images/hero_2.png" // Replace with the actual image path
          alt="About Us"
          className="w-64 h-64 rounded-lg object-contain m-4 " // Adjust size as needed
        />
        <h1 className="text-2xl font-lato font-bold text-white mb-2">
        Award-Winning Smiles in Surrey with Invisalign
        </h1>
        <p className="text-xs font-montserrat font-normal text-white">
        Say hello to your perfect smile with Invisalign! These clear, discreet aligners let you straighten your teeth without the hassle of traditional braces. In just months, you can transform your smile effortlessly.         </p>
        <p className="text-xs font-montserrat font-normal text-white">
        At Rothley Lodge Dental, with over 40 years of trusted expertise and with an award-winning team, we’re here to help you achieve the smile confidence you deserve in a comfortable and caring environment.
        </p>
        {/* <p className="text-xs font-montserrat font-normal text-white">
        Dental implants are designed to look and function like natural teeth, providing a stable foundation for crowns or bridges. Unlike dentures, they do not shift or slip, allowing you to eat, speak, and smile with confidence.
        </p>
        <p className="text-xs font-montserrat font-normal text-white">
        At Rothley Lodge Dental Practice, your journey to a renewed smile begins with us!
        </p> */}
        <button
          onClick={openModal}
          className="bg-white text-xs md:text-sm lg:text-xl text-[#3A59D1] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start mx-[7%] md:mb-0 mt-[5%]"
        >
            Get a Free Consultation
            </button>
      </div>


      {/* Logos */}
      {/* <div className="absolute invisible md:visible bottom-[-5%] right-0 w-[100%] md:w-[60%] lg:w-[40%] flex justify-around items-center border border-white bg-white rounded-lg shadow-lg p-2 md:p-4 ml-4 lg:mr-[10%]">
        <img src="images/img_image_4.png" alt="Logo 2" className="h-6 md:h-8" />
        <img src="images/img_image_5.png" alt="Logo 3" className="h-6 md:h-8" />
        <img src="images/img_image_6.png" alt="Logo 4" className="h-6 md:h-8" />
        <img src="images/img_image_7.png" alt="Logo 5" className="h-6 md:h-8" />
      </div> */}
    </div>
    </>
  );
};

export default Hero3;
