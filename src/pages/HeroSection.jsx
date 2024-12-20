import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import from swiper/modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Import Autoplay styles
import Hero from './Hero';
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Hero3'

const HeroCarousel = ({openModal}) => {
  
  return (
    <>
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay]} // Add Autoplay module here
      autoplay={{
        delay: 15000, // Time in milliseconds for each slide
        disableOnInteraction: false, // Keep autoplay running after interaction
      }}
      className="w-full md:h-auto h-[350px] hidden md:block"
    >
      <SwiperSlide > {/* Adjust heights as needed */}
        <Hero openModal={openModal}/>
      </SwiperSlide>
      {/* <SwiperSlide >
        <Hero1 />
      </SwiperSlide> */}
      <SwiperSlide >
        <Hero2 openModal={openModal} />
      </SwiperSlide>
    </Swiper>
    <div className="md:hidden">

    <Hero3  openModal={openModal}/>
    </div>
    </>
    
  );
};

export default HeroCarousel;
