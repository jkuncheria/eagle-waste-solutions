import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, CheckCircle, Clock, Shield, DollarSign, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Financing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const financingOptions = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-900" />,
      title: '0% Interest Financing',
      description: 'Get up to 18 months of interest-free financing on qualifying purchases. No interest if paid in full within the promotional period.',
      term: 'Up to 18 months'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-900" />,
      title: 'Low Monthly Payments',
      description: 'Flexible payment plans that fit your budget. Choose from multiple term options to find what works best for you.',
      term: 'Flexible terms'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Quick Approval',
      description: 'Fast and easy application process. Get approved in minutes and start your waste removal project right away.',
      term: 'Same-day approval'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise charges. What you see is what you pay—simple and straightforward.',
      term: 'No hidden costs'
    }
  ];

  const benefits = [
    'No down payment required on most plans',
    'Quick and easy online application',
    'Instant credit decision',
    'Flexible payment terms',
    'No prepayment penalties',
    'Available for all waste removal services'
  ];

  const faqs = [
    {
      question: 'What credit score do I need to qualify?',
      answer: 'We work with a variety of credit profiles. Our financing partners offer options for different credit situations. Apply to see what you qualify for—many customers are approved even with less-than-perfect credit.'
    },
    {
      question: 'How long does the approval process take?',
      answer: 'Most applications are approved instantly. In some cases, we may need additional information, which typically takes just a few minutes to process. You\'ll know your status right away.'
    },
    {
      question: 'Can I use financing for all waste removal services?',
      answer: 'Yes! Our financing options cover all our services including residential waste removal, commercial waste removal, junk removal, and dumpster rental. You can finance your entire project, making it easy to get everything done at once.'
    },
    {
      question: 'Are there any prepayment penalties?',
      answer: 'No, there are no prepayment penalties. You can pay off your balance early at any time without any additional fees or charges.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'You can make payments online, by phone, or by mail. We accept credit cards, debit cards, and bank transfers for your convenience.'
    },
    {
      question: 'Can I combine financing with other promotions?',
      answer: 'Yes, in most cases you can combine our financing options with current promotions and sales. Our team can help you find the best combination of deals and financing for your project.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">FINANCING OPTIONS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Make Your Waste Removal Project Affordable
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get the waste removal services you need today with flexible financing options. Up to 18 months of interest-free financing 
            available on qualifying purchases. No down payment required.
          </p>
        </div>

        {/* Financing Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {financingOptions.map((option, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-6">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">{option.description}</p>
              <div className="text-blue-900 font-semibold text-sm">{option.term}</div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Why Choose Our Financing?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting approved is quick and easy. Follow these simple steps to start your waste removal project today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Apply Online</h4>
              <p className="text-gray-600">
                Fill out our quick and secure online application. It only takes a few minutes and requires basic information.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Get Approved</h4>
              <p className="text-gray-600">
                Receive an instant credit decision. Most applicants are approved immediately and can start shopping right away.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Start Your Project</h4>
              <p className="text-gray-600">
                Once approved, you can use your credit line to finance your waste removal project immediately.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about financing? We've got answers.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-900 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-blue-900 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Apply for financing today and get approved in minutes. No obligation, no hassle—just the waste removal services you need.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/contact"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            *Subject to credit approval. Terms and conditions apply. See store for details.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Financing;

