import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-[5%] text-black">
      <div className="">
        <div className="flex  px-[10%] flex-col md:flex-row justify-between mb-8">
          {/* Section 1 */}
          <div className="flex-1 mb-6 lg:mb-0">
            {/* <h3 className="text-lg font-bold mb-2">Logo</h3> */}
            <img src="images/logo.png" alt="Logo" className="h-16" /> {/* Replace with your logo */}
            <p className='pt-[5%] font-montserrat font-medium	'>4321 Invasign St, CA 12345</p>
            <p className='font-montserrat font-medium	'>+1 123 456 789</p>
            <p className='font-montserrat font-medium	'>info@company.com</p>
          </div>

          <div className="flex-1 mb-6 lg:mb-0">
            <h3 className="text-lg mb-2 font-montserrat font-semibold">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-black hover:text-white font-montserrat font-medium	">Home</a></li>
              <li><a href="#" className="text-black hover:text-white font-montserrat font-medium	">About Us</a></li>
              <li><a href="#" className="text-black hover:text-white font-montserrat font-medium	">Services</a></li>
              <li><a href="#" className="text-black hover:text-white font-montserrat font-medium	">Contact</a></li>
            </ul>
          </div>

          <div className="flex-1 mb-6 lg:mb-0">
            <h3 className="text-lg mb-2 font-montserrat font-semibold">Opening Hours</h3>
            <p className='font-montserrat font-medium	'>Mon - Fri: 9 AM - 6 PM</p>
            <p className='font-montserrat font-medium	'>Sat: 10 AM - 4 PM</p>
            <p className='font-montserrat font-medium	'>Sun: Closed</p>
            <div className="flex flex-col  my-8">
              <h3 className="text-lg font-montserrat font-semibold mb-2">Subscribe to our Newsletter</h3>
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-md bg-white  mb-2"
              />
              {/* <button className="bg-blue-500 text-blackp-2 rounded-md hover:bg-blue-600 transition duration-300">
                Subscribe
              </button> */}
            </div>
          </div>

        </div>

        {/* Subscribe Section */}


        {/* Section 2 */}
        <div className="flex bg-[#13192d] px-[10%] justify-end items-center border-t border-gray-700 py-4">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white font-montserrat font-medium	">Privacy Policy</a>
            <a href="#" className="text-white hover:text-white font-montserrat font-medium	">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
