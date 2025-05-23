import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#AFDDFF] pt-[5%] text-black">
      <div className="">
        <div className="flex flex-col md:flex-row px-[10%] justify-between mb-8">
          {/* Section 1 - Logo, Address, Contact */}
          <div className="flex-1 mb-6 lg:mb-0 text-center md:text-left">
            <img src="images/logo.png" alt="Logo" className="h-16 mx-auto md:mx-0 rounded-md" /> {/* Center align logo in mobile */}
            <p className="pt-[5%] font-montserrat font-medium">15 Cherry Orchard, Staines,<br /> Middlesex TW18 2DE</p>
            <p className="font-montserrat font-medium my-2">
              <a href="tel:01784453448" className="text-black hover:text-[#3A59D1] text-sm">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                9309107552
              </a>
            </p>
            <p className="font-montserrat font-medium">
              <a href="mailto:akhilwase2510@gmail.com" className="text-black hover:text-[#3A59D1] text-sm mx-auto md:mx-0">
                <FontAwesomeIcon icon={faEnvelope} />
                akhilwase2510@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 mb-6 lg:mb-0 text-center md:text-left">
            <h3 className="text-lg mb-2 font-montserrat font-semibold">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-black hover:text-[#3A59D1] font-montserrat font-medium">Home</a></li>
              <li><a href="#about" className="text-black hover:text-[#3A59D1] font-montserrat font-medium">Why medi-core?</a></li>
              {/* <li><a href="#about" className="text-black hover:text-[#3A59D1] font-montserrat font-medium">How Invisalign Works?</a></li> */}
              <li><a href="#gallery" className="text-black hover:text-[#3A59D1] font-montserrat font-medium">Gallery</a></li>
              <li><a href="#faq" className="text-black hover:text-[#3A59D1] font-montserrat font-medium">FAQ</a></li>
              <li><a href="#testimonial" className="text-black hover:text-[#3A59D1] font-montserrat font-medium">Testimonial</a></li>
              <li><a href="#contactus" className="text-black hover:text-[#3A59D1] font-montserrat font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Opening Hours and Subscribe */}
          <div className="flex-1 mb-6 lg:mb-0 text-center md:text-left">
            <h3 className="text-lg mb-2 font-montserrat font-semibold">Opening Hours</h3>
            <p className="font-montserrat font-medium">Mon - Fri: 9 AM - 6 PM</p>
            <p className="font-montserrat font-medium">Sat: 10 AM - 4 PM</p>
            <p className="font-montserrat font-medium">Sun: Closed</p>
            <div className="flex flex-col items-center md:items-start my-8">
              <h3 className="text-lg font-montserrat font-semibold mb-2">Subscribe to our Newsletter</h3>
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-md bg-white mb-2 w-full max-w-xs"
              />
            </div>
          </div>
        </div>

        {/* Section 2 - Social Icons and Privacy Bar */}
        <div className="flex flex-col md:flex-row bg-[#3A59D1] px-[10%] justify-between items-center border-t border-gray-700 py-4">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com/rothleylodgedental/" target="_blank" rel="noopener noreferrer">
              <img src="images/instagram.png" alt="Instagram" className="h-6" />
            </a>
            <a href="https://www.facebook.com/RothleyLodgePractice/" target="_blank" rel="noopener noreferrer">
              <img src="images/facebook.png" alt="Facebook" className="h-6 px-4" />
            </a>
            <a href="https://x.com/RothleyLodge" target="_blank" rel="noopener noreferrer">
              <img src="images/twitter.png" alt="Twitter" className="h-6" />
            </a>
          </div>

          {/* Privacy and Terms Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white font-montserrat text-xs md:text-sm pr-2">Privacy Policy</a>
            <a href="#" className="text-white hover:text-white font-montserrat text-xs md:text-sm">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
