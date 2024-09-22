import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Invisalign?",
    answer: "Invisalign is a modern approach to straightening teeth using clear, removable aligners."
  },
  {
    question: "How long does the treatment take?",
    answer: "The treatment duration varies by individual, but it typically takes about 12 to 18 months."
  },
  {
    question: "Are the aligners comfortable?",
    answer: "Yes, the aligners are designed for comfort and are custom-made to fit your teeth."
  },
  {
    question: "Can I eat and drink with the aligners on?",
    answer: "It's recommended to remove the aligners when eating or drinking anything other than water."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center bg-white text-left p-4 rounded-lg shadow-md focus:outline-none"
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-200 rounded-lg">
                  <p>{faq.answer}</p>
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
