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
            <p className='pt-[5%]'>4321 Invasign St, CA 12345</p>
            <p>+1 123 456 789</p>
            <p>info@company.com</p>
          </div>

          <div className="flex-1 mb-6 lg:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-black hover:text-white">Home</a></li>
              <li><a href="#" className="text-black hover:text-white">About Us</a></li>
              <li><a href="#" className="text-black hover:text-white">Services</a></li>
              <li><a href="#" className="text-black hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="flex-1 mb-6 lg:mb-0">
            <h3 className="text-lg font-bold mb-2">Opening Hours</h3>
            <p>Mon - Fri: 9 AM - 6 PM</p>
            <p>Sat: 10 AM - 4 PM</p>
            <p>Sun: Closed</p>
            <div className="flex flex-col  my-8">
              <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-md border border-gray-600 bg-gray-700  mb-2"
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
            <a href="#" className="text-white hover:text-white">Privacy Policy</a>
            <a href="#" className="text-white hover:text-white">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
