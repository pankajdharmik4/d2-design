import React, { useRef } from 'react';

const testimonials = [
  {
    image: 'images/img_image_11.png',
    name: 'John Doe',
    comment: 'Making an appointment is very easy because it can be done online so it can save a lot of things and be done more clearly.',
    rating: 5,
  },
  {
    image: 'images/img_image_12.png',
    name: 'Jane Smith',
    comment: 'Amazing service and wonderful staff. I love my new smile!',
    rating: 5,
  },
  {
    image: 'images/img_image_13.png',
    name: 'Emily Johnson',
    comment: 'Invisalign was so comfortable and effective. I couldn’t be happier!',
    rating: 5,
  },
  {
    image: 'images/img_image_13.png',
    name: 'Michael Brown',
    comment: 'Excellent experience! The results were beyond my expectations.',
    rating: 5,
  },
  {
    image: 'images/img_image_13.png',
    name: 'Sarah Williams',
    comment: 'Professional staff and great results!',
    rating: 5,
  },
  {
    image: 'images/img_image_13.png',
    name: 'David Lee',
    comment: 'My smile has never looked better!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8 mx-[10%]">
          <h2 className="text-4xl font-bold text-gray-800">Our Services in the Eyes of Our Patients</h2>
          <div className='px-16'>
            <h5 className='text-lg'>Opinions from our patients who have experienced dental services at our clinic.</h5>
            <div className='h-[2px] bg-black rounded mb-2'></div>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="flex items-center mx-[10%] p-4">
          <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 w-[40%] flex-none">
                <div className="flex items-center mb-2">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                  <div className="ml-4 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.121-6.53L0 6.52l6.586-1.017L10 0l2.414 5.503L20 6.52l-5.243 4.04 1.121 6.53z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 ">{testimonial.comment}</p>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="flex flex-row absolute pl-[10%] right-20 bottom-5">
            <button 
              onClick={scrollLeft} 
              className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-blue-600 transition duration-300 mx-2 bg-[#13192d]"
            >
              &lt;
            </button>
            <button 
              onClick={scrollRight} 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#13192d] text-white hover:bg-blue-600 transition duration-300 mx-2"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
