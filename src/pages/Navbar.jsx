import React, { useEffect, useState } from 'react';
import { Button } from '../components'; // Adjust the import path based on your folder structure
import BookingModal from './BookingModal'; // Adjust the import path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeMenu(); // Close the mobile menu if it's open
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    openModal()
  },[])

  return (
    <>
      <nav className="w-full bg-[#13192d] px-4 lg:px-16">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/images/logo.png" alt="Logo" className="h-16 md:h-24 lg:h-32 w-auto" />
          </div>

          {/* Desktop Nav Links */}
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
            onClick={openModal}
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

        {/* Mobile Navbar Links */}
        {isMenuOpen && (
          <div className="lg:hidden z-40 bg-white absolute top-16 left-0 right-0 shadow-lg p-4">
            <a href="#home" onClick={closeMenu} className="block font-montserrat font-medium text-black py-2">Why Invisalign</a>
            <a href="#about" onClick={closeMenu} className="block font-montserrat font-medium text-black py-2">About Us</a>
            <a href="#faq" onClick={closeMenu} className="block font-montserrat font-medium text-black py-2">FAQ</a>
            <a href="#testimonial" onClick={closeMenu} className="block font-montserrat font-medium text-black py-2">Testimonial</a>

            <Button
              size="xs"
              variant="fill"
              onClick={openModal}
              className="bg-[#13192D] text-white mt-4 w-full py-2 rounded-lg font-montserrat font-medium"
            >
              Book Now
            </Button>
          </div>
        )}
      </nav>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;