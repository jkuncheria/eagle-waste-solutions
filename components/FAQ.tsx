import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'How quickly will you respond to my inquiry?',
          answer: 'We typically respond to all inquiries within 24 hours. For urgent matters or immediate assistance, please call us directly. Our team is available to help with your waste removal needs.'
        },
        {
          question: 'Do you offer free estimates?',
          answer: 'Yes! We offer free, no-obligation estimates for all waste removal projects. Our experts will assess your project and provide a detailed quote. Schedule a consultation today to get started.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We serveLos Angeles, California and surrounding areas throughout the region. Contact us to confirm if we service your specific area. We work by appointment to help you with all your waste removal needs!'
        },
        {
          question: 'Do you offer same-day service?',
          answer: 'Yes! We offer same-day service for many projects, subject to availability. Contact us as early as possible to schedule same-day pickup. We also offer scheduled appointments for your convenience.'
        }
      ]
    },
    {
      category: 'Services & Selection',
      questions: [
        {
          question: 'What waste removal services do you offer?',
          answer: 'We offer a wide range of services including hot tub removal, furniture pickup & hauling, appliance disposal, construction debris removal, garage cleanouts, green waste disposal, hoarder house cleanouts, mattress disposal, business office cleanouts, and cardboard disposal. Each service is tailored to meet your specific needs.'
        },
        {
          question: 'What types of items do you remove?',
          answer: 'We remove furniture, appliances, hot tubs, mattresses, construction debris, yard waste, office equipment, cardboard, and virtually any type of junk or waste. Contact us to discuss specific items—we handle most types of waste removal.'
        },
        {
          question: 'Do you recycle items?',
          answer: 'Yes! We prioritize recycling and proper disposal methods whenever possible. We sort items and ensure they are disposed of responsibly, recycling materials like metals, cardboard, and appliances.'
        },
        {
          question: 'Do you handle commercial cleanouts?',
          answer: 'Absolutely! We offer business and office cleanout services for companies moving, downsizing, or closing. We handle office furniture, electronics, filing cabinets, and all commercial waste with minimal disruption to your operations.'
        }
      ]
    },
    {
      category: 'Service & Process',
      questions: [
        {
          question: 'What is your waste removal process?',
          answer: 'We follow a streamlined process: free estimate and consultation, scheduled pickup at your convenience, professional removal and loading, and eco-friendly disposal. Our team ensures efficient, safe removal with minimal disruption.'
        },
        {
          question: 'How long does a waste removal project take?',
          answer: 'Project duration varies depending on the size and scope. Single item removal typically takes 30-60 minutes, while full property cleanouts may take several hours or multiple days. We\'ll provide a timeline during your consultation.'
        },
        {
          question: 'Do I need to move items to the curb?',
          answer: 'We can remove items from inside your home or business, or you can move them to a convenient location. We\'ll discuss this during your consultation and provide recommendations. Our team handles heavy lifting and loading.'
        },
        {
          question: 'What is your satisfaction guarantee?',
          answer: 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not completely happy with our service, we\'ll make it right. Our professional team ensures quality service and we\'ll address any concerns.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          question: 'How is pricing determined?',
          answer: 'Pricing is based on the volume and type of items being removed, project size, and location. We provide free estimates with transparent, upfront pricing—no surprises. Contact us for a detailed quote.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, we believe in transparent pricing. All costs will be clearly outlined in your estimate. There are no surprise charges or hidden fees. You\'ll know exactly what you\'re paying before we start.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, credit cards, and debit cards. Payment is due upon completion of the job. For larger projects, we can discuss payment arrangements during your consultation.'
        },
        {
          question: 'Do you offer discounts or promotions?',
          answer: 'Yes! We offer discounts for military and veterans, seniors, and may have special promotions throughout the year. Contact us to learn about current offers and discounts available for your project.'
        }
      ]
    },
        {
      category: 'Warranty & Guarantees',
      questions: [
        {
          question: 'What is your satisfaction guarantee?',
          answer: 'Our 100% Satisfaction Guarantee means if you\'re not completely happy with our service, we\'ll make it right. This is our commitment to your complete satisfaction with your waste removal project.'
        },
        {
          question: 'Are you licensed and insured?',
          answer: 'Yes, we are fully licensed and insured. This protects both you and us during the waste removal process. We carry comprehensive insurance coverage for all our operations.'
        },
        {
          question: 'What if something goes wrong?',
          answer: 'Contact us immediately if you have any concerns. We stand behind our work and will address any issues promptly. Our team is committed to resolving any problems quickly and to your satisfaction.'
        },
        {
          question: 'Do you provide proof of disposal?',
          answer: 'Yes, we can provide documentation of proper disposal and recycling when requested. This is especially important for commercial clients who need records for compliance purposes.'
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Flatten all FAQs for easier management
  const allFaqs = faqs.flatMap(category => category.questions);

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our waste removal services, process, and more. 
            Can't find what you're looking for? <Link to="/contact" className="text-blue-900 font-semibold hover:underline">Contact us</Link> and we'll be happy to help.
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-blue-50 p-3 rounded-xl mr-4">
                <HelpCircle className="w-6 h-6 text-blue-900" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.category}</h2>
            </div>
            
            <div className="space-y-4">
              {category.questions.map((faq, idx) => {
                const globalIndex = faqs.slice(0, categoryIdx).reduce((acc, cat) => acc + cat.questions.length, 0) + idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-900 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                      {openFaq === globalIndex ? (
                        <ChevronUp className="w-5 h-5 text-blue-900 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === globalIndex && (
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our waste removal experts are here to help. Contact us today and we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
            <a 
              href="tel:13239260140"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Call (323) 926-0140
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

