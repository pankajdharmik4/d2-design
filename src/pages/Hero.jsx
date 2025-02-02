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
          <h1 className="text-sx md:text-3xl lg:text-5xl md:mb-4 text-center lg:text-left mx-[10%] font-lato font-bold">
            Award-Winning Smiles in Surrey with Invisalign
          </h1>
          <p className="text-sm md:text-md mb-4 text-center lg:text-left mx-[10%] md:my-0 my-[5%] font-montserrat font-normal">
            Say hello to your perfect smile with Invisalign! These clear, discreet aligners let you straighten your teeth without the hassle of traditional braces. In just months, you can transform your smile effortlessly.  </p>
            
          <p className="hidden md:block text-sm md:text-md mb-8 text-center lg:text-left mx-[10%] font-montserrat font-normal">
            At Rothley Lodge Dental, with over 40 years of trusted expertise and with an award-winning team, we’re here to help you achieve the smile confidence you deserve in a comfortable and caring environment.</p>
          <button onClick={openModal} className="bg-white text-sm md:text-sm lg:text-xl text-[#00102d] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start lg:mx-[10%] md:mb-0 mb-[10%]">
            Get a Free Consultation
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
            className="absolute bottom-0 w-[80%] lg:w-[80%] max-h-[100%]  object-contain lg:mb-0"
          />

          {/* Centered button */}
          {/* <Button
            onClick={openModal} // Add the click handler here as well
            size="xs"
            variant="fill"
            className="text-white lg:text-xl md:text-sm hidden md:flex ml-[70%] w-[150px] lg:min-w-[200px] border border-white px-4 lg:px-[34px] py-4 lg:py-8 text-center font-montserrat font-medium rounded-lg md:rounded-[16px] lg:rounded-[20px] z-20"
          >
            No 1 <br /> Top Best Clinics
          </Button> */}
        </div>

      </div>

      {/* Logos */}
      {/* <div className="absolute bottom-[-5%] left-0 w-[90%] md:w-[60%] lg:w-[40%] flex justify-around items-center border border-white bg-white rounded-lg shadow-lg p-2 md:p-4 ml-4 lg:ml-[10%]">
        <img src="images/img_image_4.png" alt="Logo 1" className="h-6 md:h-8" />
        <img src="images/Denplan-Holder-Logo.png" alt="Logo 2" className="h-6 md:h-8" />
        <img src="images/brand-logo1.jpg" alt="Logo 3" className="h-6 md:h-8" />
        <img src="images/brand-logo2.jpg" alt="Logo 4" className="h-6 md:h-8" />
        <img src="images/brand-logo3.jpg" alt="Logo 4" className="h-6 md:h-8" />
        <img src="images/brand-logo4.jpg" alt="Logo 4" className="h-6 md:h-8" />
        <img src="images/brand-logo5.jpg" alt="Logo 4" className="h-6 md:h-8" />

      </div> */}

      {/* Modal */}
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
  );
};

export default Hero;
