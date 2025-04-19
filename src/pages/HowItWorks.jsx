import React from 'react';

const steps = [
  {
    id: 1,
    img: '/assets/how-it-works/step1.png', // Replace with actual image paths
    title: 'Step 1: Easy Onboarding',
    desc: 'Sign up and get started with minimal setup. We help configure your clinic details and preferences to personalize your experience.',
  },
  {
    id: 2,
    img: '/assets/how-it-works/step2.png',
    title: 'Step 2: Add Patient Records',
    desc: 'Easily add new patient information, medical history, and appointments with our user-friendly interface.',
  },
  {
    id: 3,
    img: '/assets/how-it-works/step3.png',
    title: 'Step 3: Manage Daily Operations',
    desc: 'Track appointments, consultations, billing, prescriptions, and more—right from your dashboard.',
  },
  {
    id: 4,
    img: '/assets/how-it-works/step4.png',
    title: 'Step 4: Analyze & Grow',
    desc: 'Access insights and reports to monitor performance, patient trends, and optimize your clinic’s growth.',
  },
];

const HowMediCoreWorks = () => {
  return (
    <div className="py-16 bg-[#3A59D1]">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-10">How Medi Core Works</h2>

        {/* Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-[10%]">
          {steps.map((step) => (
            <div key={step.id} className="p-4 flex flex-col items-start">
              <div className="bg-gray-300 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <img src={step.img} alt={step.title} className="h-14 w-14 rounded-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-white text-left">{step.title}</h3>
              <p className="text-left text-white">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowMediCoreWorks;
