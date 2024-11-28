import React, { useState } from 'react';
import Modal from './BookingModal'; // Adjust the import path based on your folder structure

const Hero2 = ({ openModal }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative flex flex-col md:flex-row w-full bg-[#ECEBF0]">
      {/* Section 1: Image */}
      <div className="w-full relative">
        <img
          src="/images/hero3.png" // Change to your image source
          alt="Hero Image"
          className="w-full h-auto"
        />
      </div>

      {/* Section 2: Description */}
      <div className="w-full flex flex-col justify-center items-center md:items-end p-4 md:p-12 lg:p-16 md:absolute md:bottom-0 md:right-[5%] md:w-2/5">
        {/* <h2 className="text-xl md:text-3xl lg:text-4xl font-lato font-bold text-black mb-4 text-center md:text-left hidden md:block">
          Generations of Dentists caring <br /> for Generations of Smile!
        </h2> */}
        <button
          onClick={openModal}
          className="text-white text-xs md:text-sm lg:text-xl bg-[#13192D] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left md:mt-48"
        >
          Get a Free Consultation
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center p-4 md:p-12 lg:p-16 md:absolute md:bottom-20">

        <button disabled={true} className="bg-white text-xs md:text-sm lg:text-xl font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left md:mt-48">
          {`    Dr. Simon Chard    `}
        </button>
      </div>

      {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
  );
};

export default Hero2;
