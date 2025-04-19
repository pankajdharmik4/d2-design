export default function InvisalignBenefitsSection() {
  return (
    <>
      {/* Invisalign benefits section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          {/* Section Heading and Side Text */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mx-[10%]">
            <h2 className="font-lato text-3xl font-bold text-gray-800 mb-4 md:mb-0 ">
              Why We Love Invisalign?
            </h2>
            {/* <p className="text-sm md:text-lg text-gray-600 md:pr-20 text-center md:text-left font-montserrat font-normal">
              Our Invisalign treatment can address a wide <br /> range of cosmetic dental issues such as:
            </p> */}
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-[10%]">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              {/* <div className="bg-[#261FB3] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div> */}
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
               <b> Virtually Invisible:</b>  <br />Straighten your teeth discreetly with clear aligners that are barely noticeable.
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              {/* <div className="bg-[#261FB3] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div> */}
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                <b>Comfortable & Convenient:</b> <br />Removable aligners allow you to eat, drink, and brush as usual – no lifestyle interruptions.
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              {/* <div className="bg-[#261FB3] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div> */}
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                <b>Fast Results:</b><br />  Most of our cases are focused on cosmetic improvements in adults and are thus finished in as little as just 4-6 months
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              {/* <div className="bg-[#261FB3] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div> */}
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                <b>Whole-Body Wellness:</b><br /> Straighter teeth are easier to clean, lowering the risk of gum disease and promoting better overall health.
                </h3>
              </div>
            </div>

            {/* Card 5 */}
            {/* <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              <div className="bg-[#261FB3] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                Invisalign offers a clear plan  <br /> with predictable results.
                </h3>
              </div>
            </div> */}

            {/* Card 6 */}
            {/* <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              <div className="bg-[#261FB3] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                Improves oral health and boosts <br /> 
                confidence with a straighter smile.
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
