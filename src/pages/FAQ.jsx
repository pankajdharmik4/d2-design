import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Medi Core?",
    answer: [
      "Medi Core is a SaaS-based Hospital and Clinic Management System designed to simplify daily operations for doctors and healthcare providers. It helps manage patient records, appointments, billing, and more—all from one centralized platform."
    ]
  },
  {
    question: "Is my data safe with Medi Core?",
    answer: [
      "Yes! Medi Core uses industry-standard encryption and secure cloud infrastructure to ensure that your patient data remains private, safe, and compliant with healthcare regulations."
    ]
  },
  {
    question: "Can I access Medi Core from multiple devices?",
    answer: [
      "Absolutely. Being a cloud-based application, Medi Core is accessible from desktops, tablets, and smartphones—anywhere, anytime."
    ]
  },
  {
    question: "Is Medi Core suitable for small clinics?",
    answer: [
      "Yes! Medi Core is designed to scale, making it perfect for individual practitioners, small clinics, and larger hospital setups alike."
    ]
  },
  {
    question: "Do I need technical knowledge to use Medi Core?",
    answer: [
      "Not at all. Medi Core features a clean, user-friendly interface that anyone can use—no IT background required. Plus, we offer full onboarding support to get you started quickly."
    ]
  },
  {
    question: "Can I track appointments and patient history?",
    answer: [
      "Yes, Medi Core offers a complete patient tracking system—view appointment history, medical records, and treatment progress in just a few clicks."
    ]
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-[#AFDDFF] py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-lato font-bold text-3xl text-gray-800 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center bg-white text-left p-4 rounded-lg shadow-md focus:outline-none"
              >
                <span className="font-montserrat font-semibold">{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-[#E8F9FF] rounded-lg font-montserrat font-semibold">
                  {faq.answer.map((ans) => <p>{ans}</p>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
