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
          src="/images/hero3.png" 
          alt="Hero Image"
          className="w-full h-auto"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center md:items-end p-4 md:p-12 lg:p-16 md:absolute md:bottom-0 md:right-[5%] md:w-2/5">
        <button
          onClick={openModal}
          className="text-white text-xs md:text-sm lg:text-xl bg-[#261FB3] font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left md:mt-48"
        >
          Get a Free Consultation
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center p-4 md:p-12 lg:p-16 md:absolute md:bottom-0">

        <button disabled={true} className="bg-white text-xs md:text-sm lg:text-xl font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left md:mt-48">
          {`    Dr. Simon Chard    `}
        </button>
      </div>

      {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
  );
};

export default Hero2;
