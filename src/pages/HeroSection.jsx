import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import from swiper/modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Import Autoplay styles
import Hero from './Hero';
import Hero1 from './Hero1';
import Hero2 from './Hero2';

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay]} // Add Autoplay module here
      autoplay={{
        delay: 4000, // Time in milliseconds for each slide
        disableOnInteraction: false, // Keep autoplay running after interaction
      }}
      className="w-full"
    >
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
      <SwiperSlide>
        <Hero1 />
      </SwiperSlide>
      <SwiperSlide>
        <Hero2 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;