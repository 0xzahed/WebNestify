import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import faqImg from '../assets/faq-img.png';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How to host a domain?",
      answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy my eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      question: "What Is The Purpose Of Web Hosting?",
      answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy my eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      question: "How to secure your data?",
      answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy my eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      question: "What is our work process?",
      answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy my eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      question: "How to install WordPress?",
      answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy my eirmod tempor invidunt ut labore and dolore magna aliquyam erat, sed diam voluptua."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-orange-400 rounded-full"></div>
      <div className="absolute top-5 right-32 w-8 h-1 bg-orange-400 rounded-full"></div>
      <div className="absolute bottom-32 right-20 w-2 h-2 bg-orange-400 rounded-full"></div>
      <div className="absolute bottom-48 left-48 w-1 h-1 bg-gray-300 rounded-full"></div>
      <div className="absolute top-40 right-64 w-1 h-1 bg-gray-300 rounded-full"></div>
      <div className="absolute bottom-20 left-32 text-orange-200 text-6xl">~</div>
      
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Question
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dayam eirmod tempor invidunt 
            ut labore and dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* FAQ Image */}
          <div className="relative flex items-center justify-center">
            <img 
              src={faqImg} 
              alt="FAQ Illustration" 
              className="w-full max-w-lg"
            />
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-full overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'bg-orange-500' : 'bg-white shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between px-8 py-5 text-left transition-all duration-300 ${
                    openIndex === index ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-white text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
