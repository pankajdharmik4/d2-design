import React from 'react';

const FormSection = () => {
  return (
    <div className="flex flex-col lg:flex-row py-16 mx-[10%]">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <img src="images/form_img.png" alt="Form Illustration" className="max-w-full h-auto" />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-4 mx-[5%]">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Take The First Step Toward The Smile You’ve Always Wanted
          </h2>
          <form>
            <div className="mb-4">
              {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label> */}
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div className="mb-4">
              {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label> */}
              <input 
                type="email" 
                id="email" 
                placeholder="Your Email" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div className="mb-4">
              {/* <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No</label> */}
              <input 
                type="tel" 
                id="phone" 
                placeholder="Your Phone Number" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div className="mb-4">
              {/* <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label> */}
              <input 
                type="text" 
                id="address" 
                placeholder="Your Address" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="flex-1">
                {/* <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label> */}
                <input 
                  type="date" 
                  id="date" 
                  required 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                />
              </div>
              <div className="flex-1">
                {/* <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label> */}
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
              className="w-full bg-[#13192d] text-white font-semibold p-2 rounded-md hover:bg-[#2e3d81] transition duration-300"
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
