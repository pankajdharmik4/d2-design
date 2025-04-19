export default function InvisalignBenefitsSection() {
  return (
    <>
      {/* Invisalign benefits section */}
      <div className="bg-[#AFDDFF] py-16">
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
              {/* <div className="bg-[#3A59D1] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div> */}
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                  <b>📋 Streamlined Patient Management</b>  <br />Medi-core simplifies patient record-keeping with a secure, easy-to-use dashboard. Doctors can access complete patient histories, appointments, prescriptions, and reports — all in one place.
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              {/* <div className="bg-[#3A59D1] rounded-full h-16 w-16 flex items-center justify-center mr-4">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Avatar" 
                  className="h-14 w-14 object-cover rounded-full" 
                />
              </div> */}
              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                  <b>⏱️ Time-Saving Appointment Scheduling</b> <br />Say goodbye to manual bookings! Medi-core lets you manage appointments efficiently with an intuitive calendar, reminders, and real-time updates for both staff and patients.
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">

              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                  <b>🔐 Secure & Compliant Data Storage</b><br /> Built with privacy in mind, medi-core ensures that patient data is stored securely with industry-standard encryption and role-based access — keeping you compliant with healthcare regulations.
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">

              <div>
                <h3 className="text-sm md:text-lg font-montserrat font-medium">
                  <b>📊 Insightful Reports & Analytics</b><br /> Get a clear overview of your clinic’s performance with real-time analytics — from patient flow to treatment outcomes — helping you make data-driven decisions and grow your practice.
                </h3>
              </div>
            </div>

            {/* Card 5 */}
            {/* <div className="bg-white border border-gray-200 rounded-3xl p-4 flex items-center">
              <div className="bg-[#3A59D1] rounded-full h-16 w-16 flex items-center justify-center mr-4">
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
              <div className="bg-[#3A59D1] rounded-full h-16 w-16 flex items-center justify-center mr-4">
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
