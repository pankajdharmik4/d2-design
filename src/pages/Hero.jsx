import React, { useState } from 'react';
import { Button } from '../components'; // Adjust the import path based on your folder structure
import Modal from './BookingModal'; // Adjust the import path based on your folder structure

const Hero = ({ openModal }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <div id="home" className="relative w-full h-full md:mb-2 bg-repeat bg-center" style={{ backgroundImage: "url('/images/bg-img.png')" }}>
      <div className="relative w-full h-auto md:h-[500px] lg:h-[600px] flex flex-col-reverse md:flex-row">
        {/* Section 1: Text */}
        <div className="flex flex-col mb-10 items-center justify-center w-full lg:w-1/2 md:p-10 p-2 text-white">
          <h1 className="text-sx md:text-3xl lg:text-5xl md:mb-4 text-center lg:text-left mx-[5%] font-lato font-bold">
            Award-winning Invisalign Treatment In Staines
          </h1>
          <p className="text-xs md:text-md mb-3 text-center lg:text-left mx-[5%] md:my-0 my-[5%] font-montserrat font-normal">
            Get ready to say cheese with Invisalign! Our clear, sleek retainers provide a discreet way to achieve your perfect smile without the hassle of traditional braces. In just a few months, you can transform your teeth effortlessly. </p>
          <p className="hidden md:block text-xs md:text-md mb-8 text-center lg:text-left mx-[5%] font-montserrat font-normal"> 
            At Rothley Lodge Dental Practice, we take pride in our award-winning service and over 40 years of experience in dental care. We understand the importance of your dental health and strive to make your experience as comfortable as possible. Our dedicated team will support you throughout your journey, ensuring you achieve the beautiful smile you deserve!</p>

          <button onClick={openModal} className="bg-white text-xs md:text-sm lg:text-xl text-[#13192D] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start lg:mx-[5%] md:mb-0 mb-[10%]">
            Get Free Invisalign Consultation
          </button>
        </div>

        {/* Section 2: hero_2 Image */}
        {/* <div className="hidden  md:hidden w-full  flex-col items-center justify-center p-2">
          <img
            src="images/hero_2.png"
            alt="Center Image"
            className="h-[200px] md:h-[400px] lg:h-[600px] w-[80%] lg:mb-0"
          />
        </div> */}

        {/* Section 2: Image and Button */}
        <div className="relative invisible md:visible w-full lg:w-1/2 md:flex flex-col items-center justify-center p-6 lg:p-12">
          {/* Image taking dynamic height based on viewport */}
          <img
            src="images/hero.png"
            alt="Center Image"
            className="absolute bottom-0 w-[80%] lg:w-[80%] max-h-[80vh]  object-contain lg:mb-0"
          />

          {/* Centered button */}
          <Button
            onClick={openModal} // Add the click handler here as well
            size="xs"
            variant="fill"
            className="text-white lg:text-xl md:text-sm hidden md:flex ml-[70%] w-[150px] lg:min-w-[200px] border border-white px-4 lg:px-[34px] py-4 lg:py-8 text-center font-montserrat font-medium rounded-lg md:rounded-[16px] lg:rounded-[20px] z-20"
          >
            No 1 <br /> Top Best Clinics
          </Button>
        </div>

      </div>

      {/* Logos */}
      <div className="absolute bottom-[-5%] left-0 w-[90%] md:w-[60%] lg:w-[40%] flex justify-around items-center border border-white bg-white rounded-lg shadow-lg p-2 md:p-4 ml-4 lg:ml-[10%]">
        {/* <img src="images/img_image_4.png" alt="Logo 1" className="h-6 md:h-8" /> */}
        <img src="images/img_image_5.png" alt="Logo 2" className="h-6 md:h-8" />
        <img src="images/img_image_6.png" alt="Logo 3" className="h-6 md:h-8" />
        <img src="images/img_image_7.png" alt="Logo 4" className="h-6 md:h-8" />
      </div>

      {/* Modal */}
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
  );
};

export default Hero;
