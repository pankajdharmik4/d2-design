import React, { useState } from 'react';

const faqs = [
  // {
  //   question: "Is Invisalign painful?",
  //   answer: ["While some people may experience mild discomfort during treatment, it is generally not considered painful.",
  //     "During the initial stages of Invisalign treatment, some people may experience slight discomfort or pressure as their teeth shift into the correct position. This is a normal part of the process, and it usually only lasts a few days after switching to a new set of aligners.",
  //     "Discomfort can typically be managed with over-the-counter pain relievers, such as ibuprofen."]
  // },
  {
    question: "Is Invisalign noticeable?",
    answer: ["The aligners are made of clear, flexible plastic that is virtually invisible when worn. This makes them a popular alternative to traditional metal braces, which can be more noticeable."]
  },
  // {
  //   question: "How often do I change aligners?",
  //   answer: ["The frequency with which you should change your Invisalign® aligners depends on the specific treatment plan created for you by your orthodontist.",
  //     "In general, however, you can expect to change your aligners approximately every 1-2 weeks."
  //   ]
  // },
  {
    question: "How long does Invisalign Treatment take?",
    answer: ["Invisalign clear aligners can help straighten minor to complex teeth misalignment. The length of treatment can take, on average, 4-12 months, depending on how complicated your case is. Most of our smiles are completed within 4-7 months."]
  },
  {
    question: "How much does Invisalign Cost?",
    answer: ["The cost of Invisalign is determined by your specific needs, including the duration of treatment and the type of correction you are looking for. We offer payment financing plans to help you spread the cost—just ask for details when booking your appointment."]
  },
  {
    question: "After finishing treatment, how long do you need to wear retainers?",
    answer: ["To keep your teeth straight, you'll need to wear retainers for as long as you want your smile to stay straight! So forever! At our practice, we recommend a dual retention protocol—a combination of fixed and removable retainers—for predictable, long-term results. This ensures your new smile stays exactly where it should for the long term!"]
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-gray-100 py-16">
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
                <div className="mt-2 p-4 bg-gray-200 rounded-lg font-montserrat font-semibold">
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
