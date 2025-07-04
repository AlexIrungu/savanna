import React, { useState } from 'react';
import { HelpCircle, ChevronUp, ChevronDown } from 'lucide-react';

const FAQSection = ({ destinationData }) => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  return (
    <div className="bg-beaver/10 rounded-2xl p-6 border border-beaver/20 mt-8">
      <h3 className="font-playfair text-2xl font-bold text-ghost-white mb-6 flex items-center space-x-2">
        <HelpCircle className="w-6 h-6 text-beaver" />
        <span>Frequently Asked Questions</span>
      </h3>
      <div className="space-y-4">
        {destinationData?.FAQ?.map((faq, index) => (
          <div key={index} className="border border-beaver/20 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              className="w-full flex items-center justify-between p-4 bg-beaver/5 hover:bg-beaver/10 transition-colors"
            >
              <span className="font-raleway font-medium text-ghost-white text-left">{faq.question}</span>
              {expandedFAQ === index ? (
                <ChevronUp className="w-5 h-5 text-beaver flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-beaver flex-shrink-0" />
              )}
            </button>
            {expandedFAQ === index && (
              <div className="p-4 bg-beaver/5">
                <p className="text-ghost-white/80 font-raleway leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;