import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import beforeImage from '../assets/002.jpg';
import afterImage from '../assets/001.jpg';

const FormSection = () => {
  // Set default values
  const today = new Date();
  const defaultDate = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const defaultTime = today.toTimeString().split(' ')[0].slice(0, 5); // Format: HH:MM

  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [selectedTime, setSelectedTime] = useState(defaultTime);

  return (
    <div id='contactus' className="flex flex-col md:flex-row py-16 mx-[5%] lg:mx-[10%]">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        {/* <img 
          src="images/contact.jpg" 
          alt="Form Illustration" 
          className="w-full max-w-xs lg:max-w-md h-auto" 
        /> */}
        <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
                position={50} // Set the position based on the state
                className="w-[80%] h-auto"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-400" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-400" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="tel" 
                id="phone" 
                placeholder="Your Phone Number" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-400" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="text" 
                id="address" 
                placeholder="Your Address" 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-400" 
              />
            </div>
            <div className="flex flex-col md:flex-row mb-4 space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <input 
                  type="date" 
                  id="date" 
                  value={selectedDate} 
                  onChange={(e) => setSelectedDate(e.target.value)} 
                  required 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-400" 
                />
              </div>
              <div className="flex-1">
                <input 
                  type="time" 
                  id="time" 
                  value={selectedTime} 
                  onChange={(e) => setSelectedTime(e.target.value)} 
                  required 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md placeholder-gray-400" 
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
