import React from 'react';

const FormSection = () => {
  return (
    <div id='contactus' className="flex flex-col md:flex-row py-16 mx-[5%] lg:mx-[10%]">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <img 
          src="images/form_img.png" 
          alt="Form Illustration" 
          className="w-full max-w-xs lg:max-w-md h-auto" 
        />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 md:w-[80%]">
          <h2 className="text-2xl mb-4 text-center font-montserrat font-semibold">
            Take The First Step Toward The Smile You’ve Always Wanted
          </h2>
          <form>
            <div className="mb-4">
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="tel" 
                id="phone" 
                placeholder="Your Phone Number" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="text" 
                id="address" 
                placeholder="Your Address" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div className="flex flex-col md:flex-row mb-4 space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <input 
                  type="date" 
                  id="date" 
                  required 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                />
              </div>
              <div className="flex-1">
                <input 
                  type="time" 
                  id="time" 
                  required 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                />
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#13192d] text-white font-montserrat font-semibold p-2 rounded-md hover:bg-[#2e3d81] transition duration-300" 
            >
              Book Now!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
