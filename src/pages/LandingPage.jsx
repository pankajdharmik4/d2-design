import { Box, Typography } from '@mui/material';
import { landingTwo } from '../assets';

export function LandingPage() {
  return <div id="home" className="relative w-full h-full bg-repeat bg-center bg-[#3A59D1]">
    <div className="relative w-full h-auto md:h-[500px] lg:h-[620px] flex flex-col-reverse md:flex-row">
      {/* Section 1: Text */}
      <div className="flex flex-col mb-7 items-center justify-center w-full lg:w-1/2 md:p-10 p-2 text-white">
        <h1 className="text-sx md:text-3xl lg:text-5xl md:mb-4 text-center lg:text-left mx-[10%] font-lato font-bold">
          Empower your partners and patients with seamless access to data
        </h1>
        <p className="text-sm md:text-md mb-2 text-center lg:text-left mx-[10%] md:my-0 my-[3%] font-montserrat font-normal">
          Medi-Core's developer-friendly healthcare vault is customizable, extensible, and built for scale. Leverage our secure platform to streamline data sharing and improve patient outcomes.
        </p>
        <button className="bg-white text-sm md:text-sm lg:text-xl text-[#3A59D1] font-bold mt-1 py-3 md:py-3 px-4 md:px-6 rounded-lg font-lato text-left lg:self-start lg:mx-[10%] md:mb-0 mb-[10%]">
          Get a Free Consultation
        </button>
      </div>

      <div className="relative invisible md:visible w-full lg:w-1/2 md:flex flex-col items-center justify-center p-6 lg:p-12">
        {/* Image taking dynamic height based on viewport */}
        <img
          src={landingTwo}
          alt="Center Image"
          className="absolute bottom-0 w-[80%] lg:w-[80%] max-h-[100%]  object-contain lg:mb-0"
        />

      </div>

    </div>

  </div>
}
